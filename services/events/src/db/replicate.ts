// TODO: ensure the functionality of the replication

import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import { sql, eq } from 'drizzle-orm'
import * as schema from "./schema";
import { db } from "./database";
import { ConvexHttpClient, ConvexClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import type { Doc } from "@/convex/_generated/dataModel";
import type { PaginationResult } from "convex/server";
import { Logger } from "@/utils/logger";

interface MerchantData {
  _id: string;
  name: string;
  status: "ACTIVE" | "SUSPENDED";
}

interface GatewayConnectionData {
  _id: string;
  merchantId: string;
  gateway: string;
  webhookSecretEncrypted: string;
}

export class Replicate {
  private httpClient: ConvexHttpClient;
  private client: ConvexClient;
  private isInitialized = false;
  private unsubscribe: (() => void) | null = null;
  private logger: Logger;

  constructor(
    private readonly convexUrl: string = process.env.CONVEX_URL || "https://focused-hound-964.convex.cloud",
    private readonly migrationsFolder: string = "./drizzle"
  ) {
    this.httpClient = new ConvexHttpClient(this.convexUrl);
    this.client = new ConvexClient(this.convexUrl);
    this.logger = new Logger({ service: 'replication', component: 'Replicate' });
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) {
      return;
    }

    try {
      migrate(db, { migrationsFolder: this.migrationsFolder });
      this.isInitialized = true;
    } catch (error) {
      this.logger.log('error', 'Failed to run migrations', {
        error: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }

  async start(): Promise<void> {
    await this.initialize();
    await this.populateFromOrigin();
    this.subscribeToReplicationEvents();
  }

  stop(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
    this.client.close();
    this.isInitialized = false;
  }

  isRunning(): boolean {
    return this.isInitialized && this.unsubscribe !== null;
  }

  private subscribeToReplicationEvents(): void {

    this.unsubscribe = this.client.onUpdate(
      api.queries.replications.getReplicationEventsLastDay,
      {},
      (events: Doc<"replicationEvents">[]) => {
        this.handleReplicationEvents(events).catch((error) => {
          this.logger.log('error', 'Failed to handle replication events', {
            error: error instanceof Error ? error.message : String(error)
          });
        });
      }
    );

  }

  private async handleReplicationEvents(events: Doc<"replicationEvents">[]): Promise<void> {
    if (!events || events.length === 0) {
      return;
    }


    for (const event of events) {
      try {
        await this.processReplicationEvent(event);
      } catch (error) {
        this.logger.log('error', 'Failed to process replication event', {
          eventId: event._id,
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
  }

  private async processReplicationEvent(event: Doc<"replicationEvents">): Promise<void> {
    switch (event.tableName) {
      case 'merchants':
        await this.handleMerchantEvent(event);
        break;
      case 'gatewayConnections':
        await this.handleGatewayConnectionEvent(event);
        break;
      default:
        this.logger.log('warn', 'Unknown table in replication event', { tableName: event.tableName });
    }
  }

  private async handleMerchantEvent(event: Doc<"replicationEvents">): Promise<void> {
    const { operation, documentId, documentData } = event;

    if (operation === 'DELETE') {
      await db.delete(schema.merchants).where(eq(schema.merchants._id, documentId));
      return;
    }

    if (!documentData) {
      this.logger.log('warn', 'Missing documentData for merchant upsert', { eventId: event._id });
      return;
    }

    const merchant = documentData as MerchantData;
    await db.insert(schema.merchants)
      .values({
        _id: merchant._id,
        name: merchant.name,
        status: merchant.status
      })
      .onConflictDoUpdate({
        target: schema.merchants._id,
        set: {
          name: sql`excluded.name`,
          status: sql`excluded.status`
        }
      });
  }

  private async handleGatewayConnectionEvent(event: Doc<"replicationEvents">): Promise<void> {
    const { operation, documentId, documentData } = event;

    if (operation === 'DELETE') {
      await db.delete(schema.gatewayConnections).where(eq(schema.gatewayConnections._id, documentId));
      return;
    }

    if (!documentData) {
      this.logger.log('warn', 'Missing documentData for gateway connection upsert', { eventId: event._id });
      return;
    }

    const gc = documentData as GatewayConnectionData;
    await db.insert(schema.gatewayConnections)
      .values({
        _id: gc._id,
        merchantId: gc.merchantId,
        gateway: gc.gateway,
        webhookSecretEncrypted: gc.webhookSecretEncrypted
      })
      .onConflictDoUpdate({
        target: schema.gatewayConnections._id,
        set: {
          merchantId: sql`excluded.merchant_id`,
          gateway: sql`excluded.gateway`
        }
      });

  }

  private async populateFromOrigin(): Promise<void> {
    const startTime = Date.now();

    try {
      await this.populateMerchants();
      await this.populateGatewayConnections();

      const duration = Date.now() - startTime;
    } catch (error) {
      this.logger.log('error', 'Data replication failed', {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      });
      throw error;
    }
  }

  private async populateMerchants(): Promise<void> {
    let isDone = false;
    let totalProcessed = 0;
    let cursor: string | null = null;

    try {
      while (!isDone) {
        const result: PaginationResult<Doc<"merchants">> = await this.httpClient.query(
          api.queries.merchants.listMerchants,
          { paginationOpts: { numItems: 1000, cursor } }
        );

        isDone = result.isDone;
        cursor = result.continueCursor ?? null;

        if (result.page.length === 0) {
          continue;
        }

        const merchants = result.page.map((m) => ({
          _id: m._id,
          name: m.name,
          status: m.status
        }));


        await db.insert(schema.merchants)
          .values(merchants)
          .onConflictDoUpdate({
            target: schema.merchants._id,
            set: {
              name: sql`excluded.name`,
              status: sql`excluded.status`
            }
          });

        totalProcessed += merchants.length;
      }

    } catch (error) {
      this.logger.log('error', 'Failed to replicate merchants', {
        error: error instanceof Error ? error.message : String(error),
        totalProcessed
      });
      throw error;
    }
  }

  private async populateGatewayConnections(): Promise<void> {
    let isDone = false;
    let totalProcessed = 0;
    let cursor: string | null = null;

    try {
      while (!isDone) {
        const result: PaginationResult<Doc<"gatewayConnections">> = await this.httpClient.query(
          api.queries.gatewayConnections.listGatewayConnections,
          { paginationOpts: { numItems: 1000, cursor } }
        );

        isDone = result.isDone;
        cursor = result.continueCursor ?? null;

        if (result.page.length === 0) {
          continue;
        }

        const gatewayConnections = result.page.map((gc) => ({
          _id: gc._id,
          merchantId: gc.merchantId,
          gateway: gc.gateway,
          webhookSecretEncrypted: gc.webhookSecretEncrypted
        }));


        await db.insert(schema.gatewayConnections)
          .values(gatewayConnections)
          .onConflictDoUpdate({
            target: schema.gatewayConnections._id,
            set: {
              merchantId: sql`excluded.merchant_id`,
              gateway: sql`excluded.gateway`,
              webhookSecretEncrypted: sql`excluded.webhook_secret_encrypted`
            }
          });

        totalProcessed += gatewayConnections.length;
      }

    } catch (error) {
      this.logger.log('error', 'Failed to replicate gateway connections', {
        error: error instanceof Error ? error.message : String(error),
        totalProcessed
      });
      throw error;
    }
  }
}

// Run on app start when this file is executed directly
if (import.meta.main) {
  const replicate = new Replicate();

  // Graceful shutdown handlers
  process.on('SIGINT', () => {
    console.log('\nReceived SIGINT, shutting down...');
    replicate.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('\nReceived SIGTERM, shutting down...');
    replicate.stop();
    process.exit(0);
  });

  replicate.start().catch((error) => {
    console.error('Fatal error during replication:', error);
    replicate.stop();
    process.exit(1);
  });
}
