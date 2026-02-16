import { pgTable, integer, text, boolean, jsonb, timestamp } from 'drizzle-orm/pg-core'




export const merchants = pgTable('merchants', {
  _id: text('_id').primaryKey(),
  name: text('name').notNull(),
  status: text('status', {
    enum: ['ACTIVE', 'SUSPENDED']
  }).notNull(),
});

export const gatewayConnections = pgTable('gateway_connections', {
  _id: text('_id').primaryKey(),
  merchantId: text('merchant_id')
    .notNull()
    .references(() => merchants._id, {
      onDelete: 'cascade'
    }),
  gateway: text('gateway').notNull(),
  webhookSecretEncrypted: text('webhook_secret_encrypted').notNull(),
});

// Replication events table - stores all changes from origin
export const replicationEvents = pgTable('replication_events', {
  id: text('_id').primaryKey(),
  seq: integer('seq').notNull().unique(),
  tableName: text('table_name').$type<'merchants' | 'gatewayConnections'>().notNull(),
  operation: text('operation').$type<'INSERT' | 'UPDATE' | 'DELETE'>().notNull(),
  documentId: text('document_id').notNull(),
  documentData: jsonb('document_data').$type<Record<string, any> | null>(),
  creationTime: timestamp('creation_time', { mode: 'date' }),
  replicatedAt: timestamp('replicated_at', { mode: 'date' })
    .notNull()
    .defaultNow(),
  processed: boolean('processed').default(false),
  error: text('error'),
  retryCount: integer('retry_count').default(0),
});

export type Merchant = typeof merchants.$inferSelect;
export type NewMerchant = typeof merchants.$inferInsert;

export type GatewayConnection = typeof gatewayConnections.$inferSelect;

export type GatewayConnectionDecrypt = GatewayConnection & {
  decryptedWebhookSecret?: string;
};
export type NewGatewayConnection = typeof gatewayConnections.$inferInsert;

export type ReplicationEvent = typeof replicationEvents.$inferSelect;
export type NewReplicationEvent = typeof replicationEvents.$inferInsert;