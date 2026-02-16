import * as schema from "../db/schema";
import { db } from "../db/database";
import { decrypt } from "../utils/encryption";
import { eq } from "drizzle-orm";
import { TTLCache } from "../db/cache";
import { getVerifier } from "../verify/registry";
import type { VerificationResult } from "../verify/interface";
import { defaultLogger } from "../utils";
import {
  GatewayConnectionNotFoundError,
  DecryptionError
} from "./errors";

const logger = defaultLogger.child({ component: 'handler' });

// Cache configuration
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const gatewayConnectionsCache = new TTLCache<string, schema.GatewayConnectionDecrypt>();
const CACHE_KEY_PREFIX = 'gateway_connection:';

// Start cache cleanup (once globally)
gatewayConnectionsCache.startCleanup(CACHE_TTL_MS); // Cleanup every 5 minutes

class GatewayConnectionHandler {
  private gatewayConnectionId: string;
  private gatewayConnection?: schema.GatewayConnectionDecrypt;
  private static loadingLocks = new Map<string, Promise<schema.GatewayConnectionDecrypt>>();

  /**
   * Create a new handler for a specific gateway connection
   * @param gatewayConnectionId - The ID of the gateway connection to handle
   */
  constructor(gatewayConnectionId: string) {
    if (!gatewayConnectionId || typeof gatewayConnectionId !== 'string') {
      throw new Error('gatewayConnectionId must be a non-empty string');
    }
    this.gatewayConnectionId = gatewayConnectionId;
  }

  private getCacheKey(): string {
    return `${CACHE_KEY_PREFIX}${this.gatewayConnectionId}`;
  }

  /**
   * Store the connection in cache with TTL
   */
  private setCache(): void {
    if (this.gatewayConnection) {
      gatewayConnectionsCache.set(this.getCacheKey(), this.gatewayConnection, CACHE_TTL_MS);
    }
  }

  /**
   * Get the connection from the database
   * @throws {GatewayConnectionNotFoundError} If connection not found in database
   */
  private async getFromDB(): Promise<void> {
    const connections = await db
      .select()
      .from(schema.gatewayConnections)
      .where(eq(schema.gatewayConnections._id, this.gatewayConnectionId))
      .limit(1);

    if (connections.length === 0) {
      throw new GatewayConnectionNotFoundError(this.gatewayConnectionId);
    }

    this.gatewayConnection = { ...connections[0] } as schema.GatewayConnectionDecrypt;
  }

  /**
   * Try to get the connection from cache
   * @returns {boolean} true if found in cache, false otherwise
   */
  private getFromCache(): boolean {
    const connection = gatewayConnectionsCache.get(this.getCacheKey());
    if (connection) {
      this.gatewayConnection = connection;
      return true;
    }
    return false;
  }

  /**
   * Decrypt the webhook secret of the gateway connection
   * @throws {DecryptionError} If decryption fails
   */
  private async decryptWebhookSecret(): Promise<void> {
    if (!this.gatewayConnection) {
      throw new Error("No gateway connection available to decrypt");
    }

    try {
      const startTime = Date.now();
      const decryptedSecret = await decrypt(this.gatewayConnection.webhookSecretEncrypted);
      const decryptionTime = Date.now() - startTime;

      this.gatewayConnection = {
        ...this.gatewayConnection,
        decryptedWebhookSecret: decryptedSecret,
      };

    } catch (error) {
      logger.error(`Decryption failed for connection ${this.gatewayConnectionId}`, { error: String(error) });
      throw new DecryptionError(this.gatewayConnectionId);
    }
  }

  /**
   * Get the gateway connection with decrypted secret
   * Follows cache → DB → error flow
   * @returns {Promise<schema.GatewayConnectionDecrypt>} The gateway connection with decrypted secret
   * @throws {GatewayConnectionNotFoundError} If connection not found
   * @throws {DecryptionError} If decryption fails
   */
  async getGatewayConnection(): Promise<schema.GatewayConnectionDecrypt> {
    const startTime = Date.now();

    // Try cache first
    const fromCache = this.getFromCache();
    if (fromCache) {
      if (!this.gatewayConnection) {
        throw new Error(`Gateway connection ${this.gatewayConnectionId} not found in cache`);
      }
      return this.gatewayConnection;
    }

    const cacheKey = this.getCacheKey();

    // Check if another request is already loading this connection
    const existingLock = GatewayConnectionHandler.loadingLocks.get(cacheKey);
    if (existingLock) {
      // Wait for the existing load to complete
      const result = await existingLock;
      this.gatewayConnection = result; // Ensure instance variable is set
      return result;
    }

    // Update concurrent loads metric

    // Create new loading promise
    const loadingPromise = (async (): Promise<schema.GatewayConnectionDecrypt> => {
      try {
        // Not in cache, get from database
        await this.getFromDB();

        // Decrypt the secret
        await this.decryptWebhookSecret();

        // Store in cache for future use
        this.setCache();

        if (!this.gatewayConnection) {
          throw new GatewayConnectionNotFoundError(this.gatewayConnectionId);
        }

        return this.gatewayConnection;
      } finally {
        // Clean up lock regardless of success or failure
        GatewayConnectionHandler.loadingLocks.delete(cacheKey);
        // Update concurrent loads metric
      }
    })();

    // Store the promise so other requests can wait on it
    GatewayConnectionHandler.loadingLocks.set(cacheKey, loadingPromise);

    const result = await loadingPromise;
    this.gatewayConnection = result; // Ensure instance variable is set
    return result;
  }

  /**
   * Get the gateway type for this connection
   * @returns {string} The gateway type (e.g., 'stripe', 'paypal')
   */
  getGatewayType(): string {
    if (!this.gatewayConnection) {
      throw new Error(`Gateway connection ${this.gatewayConnectionId} not initialized. Call getGatewayConnection() first.`);
    }
    return this.gatewayConnection.gateway;
  }

  /**
   * Get the decrypted webhook secret (kept private within the class)
   * @returns {string} The decrypted webhook secret
   */
  private getDecryptedSecret(): string {
    if (!this.gatewayConnection?.decryptedWebhookSecret) {
      throw new Error(`Webhook secret for connection ${this.gatewayConnectionId} not decrypted. Call getGatewayConnection() first.`);
    }
    return this.gatewayConnection.decryptedWebhookSecret;
  }

  /**
   * Verify the webhook payload using the appropriate verifier
   * @param payload - The raw payload body (string or object)
   * @param headers - The request headers
   * @returns {Promise<VerificationResult>} The verification result
   */
  async verifyPayload(payload: string | object, headers: Headers): Promise<VerificationResult> {
    const gatewayType = this.getGatewayType();
    const secret = this.getDecryptedSecret();
    logger.debug(`headers in verifyPayload`, { headers: Object.fromEntries(headers.entries()) });
    const verifier = getVerifier(gatewayType);
    return verifier.verify(payload, headers, secret);
  }

  /**
   * Clear the cached connection (useful for testing or when connection changes)
   */
  clearCache(): void {
    gatewayConnectionsCache.remove(this.getCacheKey());
    this.gatewayConnection = undefined;
  }
}

export default GatewayConnectionHandler;
export { GatewayConnectionNotFoundError, DecryptionError };
