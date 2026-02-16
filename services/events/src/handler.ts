import * as schema from "./db/schema";
import { db } from "./db/database";
import { decrypt } from "./utils/encryption";
import { eq } from "drizzle-orm";
import { TTLCache } from "./db/cache";
import { getVerifier } from "./verify/registry";
import type { VerificationResult } from "./verify/interface";
import { defaultLogger, errors } from "./utils";

const logger = defaultLogger.child({ component: 'handler2' });

// Cache configuration
const CACHE_TTL_MS = 5 * 60 * 1000;
const gatewayConnectionsCache = new TTLCache<string, schema.GatewayConnectionDecrypt>();
const CACHE_KEY_PREFIX = 'gateway_connection:';
gatewayConnectionsCache.startCleanup(CACHE_TTL_MS);

interface WebhookRequest {
  gatewayConnectionId: string;
  rawBody: string;
  headers: Headers;
  contentLength?: number;
}

interface WebhookResponse {
  status: number;
  data: {
    success: boolean;
    data?: unknown;
    error?: { code: string; message: string };
    meta: { timestamp: string; version: string };
  };
}

export class WebhookHandler {
  private static loadingLocks = new Map<string, Promise<schema.GatewayConnectionDecrypt>>();
  private static MAX_BODY_SIZE = 1024 * 1024; // 1MB

  private request: WebhookRequest;
  private connection?: schema.GatewayConnectionDecrypt;

  constructor(request: WebhookRequest) {
    this.request = request;
  }

  async process(): Promise<WebhookResponse> {
    try {
      // 1. Validate request
      this.validateRequest();

      // 2. Get gateway connection with decrypted secret
      this.connection = await this.getGatewayConnection();

      // 3. Verify payload signature
      const verificationResult = await this.verifyPayload();

      if (!verificationResult.isValid) {
        throw new errors.VerificationError(verificationResult.error || 'Invalid signature');
      }

      // 4. Return success response
      return {
        status: 200,
        data: {
          success: true,
          data: {
            message: 'Webhook received and verified',
            event: verificationResult.payload
          },
          meta: { timestamp: new Date().toISOString(), version: '1.0.0' }
        }
      };

    } catch (error) {
      if (error instanceof errors.WebhookError) {
        logger[error.status >= 500 ? 'error' : 'warn'](error.message, {
          gatewayConnectionId: this.request.gatewayConnectionId,
          error: error.code
        });
        return error.toResponse();
      }

      // Unexpected error
      logger.error('Unexpected error in webhook handler', {
        gatewayConnectionId: this.request.gatewayConnectionId,
        error: String(error)
      });

      return new errors.InternalServerError('An unexpected error occurred').toResponse();
    }
  }

  private validateRequest(): void {
    if (!this.request.gatewayConnectionId) {
      throw new errors.BadRequestError('Gateway connection ID is required');
    }

    const size = this.request.contentLength || this.request.rawBody.length;
    if (size > WebhookHandler.MAX_BODY_SIZE) {
      throw new errors.BadRequestError(`Payload too large (${size} bytes, max ${WebhookHandler.MAX_BODY_SIZE})`);
    }
  }

  private async getGatewayConnection(): Promise<schema.GatewayConnectionDecrypt> {
    const cacheKey = CACHE_KEY_PREFIX + this.request.gatewayConnectionId;

    // Check cache first
    const cached = gatewayConnectionsCache.get(cacheKey);
    if (cached) {
      logger.debug('Cache hit for gateway connection', { gatewayConnectionId: this.request.gatewayConnectionId });
      return cached;
    }

    // Check if already loading
    if (WebhookHandler.loadingLocks.has(cacheKey)) {
      logger.debug('Waiting for existing load', { gatewayConnectionId: this.request.gatewayConnectionId });
      return await WebhookHandler.loadingLocks.get(cacheKey)!;
    }

    // Create loading promise
    const loadPromise = this.loadGatewayConnectionFromDb();
    WebhookHandler.loadingLocks.set(cacheKey, loadPromise);

    try {
      const connection = await loadPromise;
      gatewayConnectionsCache.set(cacheKey, connection, CACHE_TTL_MS);
      return connection;
    } finally {
      WebhookHandler.loadingLocks.delete(cacheKey);
    }
  }

  private async loadGatewayConnectionFromDb(): Promise<schema.GatewayConnectionDecrypt> {
    const startTime = Date.now();

    const result = await db.select()
      .from(schema.gatewayConnections)
      .where(eq(schema.gatewayConnections._id, this.request.gatewayConnectionId))
      .leftJoin(schema.merchants, eq(schema.gatewayConnections.merchantId, schema.merchants._id))
      .then(rows => rows[0]);

    if (!result || !result.gateway_connections) {
      throw new errors.GatewayNotFoundError(`Gateway connection not found for ID: ${this.request.gatewayConnectionId}`);
    }

    try {
      const decryptedSecret = await decrypt(result.gateway_connections.webhookSecretEncrypted);

      const connection: schema.GatewayConnectionDecrypt = {
        ...result.gateway_connections,
        decryptedWebhookSecret: decryptedSecret,
      };

      const duration = Date.now() - startTime;
      logger.debug('Gateway connection loaded from DB', {
        gatewayConnectionId: this.request.gatewayConnectionId,
        duration
      });

      return connection;
    } catch (error) {
      logger.error(`Decryption failed for connection ${this.request.gatewayConnectionId}`, { error: String(error) });
      throw new errors.DecryptionError(`Failed to decrypt webhook secret for connection ${this.request.gatewayConnectionId}`);
    }
  }

  private async verifyPayload(): Promise<VerificationResult> {
    if (!this.connection) {
      throw new errors.InternalServerError('Connection not loaded');
    }

    const verifier = getVerifier(this.connection.gateway);

    if (!verifier) {
      throw new errors.VerifierNotFoundError(`No verifier found for gateway type: ${this.connection.gateway}`);
    }

    try {
      return await verifier.verify(
        this.request.rawBody,
        this.request.headers,
        this.connection.decryptedWebhookSecret || ''
      );
    } catch (error) {
      if (error instanceof Error) {
        throw new errors.VerificationError(error.message);
      }
      throw new errors.VerificationError('Verification failed');
    }
  }
}