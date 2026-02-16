import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'




export const merchants = sqliteTable('merchants', {
  _id: text('_id').primaryKey(),
  name: text('name').notNull(),
  status: text('status', {
    enum: ['ACTIVE', 'SUSPENDED']
  }).notNull(),
});

export const gatewayConnections = sqliteTable('gateway_connections', {
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
export const replicationEvents = sqliteTable('replication_events', {
  id: text('_id').primaryKey(),
  seq: integer('seq').notNull().unique(),
  tableName: text('table_name',
    { enum: ['merchants', 'gatewayConnections'] }).notNull(),

  operation: text('operation', {
    enum: ['INSERT', 'UPDATE', 'DELETE']
  }).notNull(),
  documentId: text('document_id').notNull(),
  documentData: text('document_data', { mode: 'json' })
    .$type<Record<string, any> | null>(),
  creationTime: integer('creation_time', { mode: 'timestamp_ms' }),
  replicatedAt: integer('replicated_at', { mode: 'timestamp_ms' })
    .notNull()
    .$defaultFn(() => new Date()),
  processed: integer('processed', { mode: 'boolean' }).default(false),
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