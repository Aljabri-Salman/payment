import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

// Events table schema for Drizzle ORM
export const events = sqliteTable(
  'events',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    event_type: text('event_type').notNull(),
    payload: text('payload').notNull(),
    source: text('source'),
    received_at: integer('received_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
    processed: integer('processed', { mode: 'boolean' }).default(sql`0`),
    processed_at: integer('processed_at', { mode: 'timestamp' }),
  })
