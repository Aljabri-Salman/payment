# Database Replication System - Summary

## Overview

A Change Data Capture (CDC) system for replicating `merchants` and `gatewayConnections` tables to external databases using monotonically increasing sequence numbers.

## Quick Start

### 1. Use Actions (Not Mutations) From Client Code

```typescript
// ✅ Correct - Creates replication events
import { api } from "@/convex/_generated/api";
const createMerchant = useMutation(api.actions.merchants.createMerchant);
await createMerchant({ name: "My Store" });

// ❌ Wrong - No replication events
const createMerchant = useMutation(api.mutations.merchants.createMerchant);
```

### 2. Consume Events From External Service

```typescript
// Poll for new events
const events = await convex.mutation(
  api.mutations.replicationEvents.getEventsBySeqRange,
  { fromSeq: lastConsumedSeq, limit: 100 }
);

// Process in order
for (const event of events) {
  await replicateToDatabase(event);
  lastConsumedSeq = event.seq;
}
```

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                  Client Code                         │
│           (React, Next.js, etc.)                    │
└────────────────┬────────────────────────────────────┘
                 │
                 │ Calls Actions (not Mutations)
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│              Convex Actions                          │
│  • actions/merchants.ts                             │
│  • actions/gatewayConnections.ts                    │
│                                                      │
│  1. Get next sequence number                        │
│  2. Execute mutation                                │
│  3. Fetch document data                             │
│  4. Create replication event                        │
└────────────────┬────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│            Replication Events Table                  │
│  • seq: monotonically increasing                    │
│  • tableName: "merchants" | "gatewayConnections"   │
│  • operation: INSERT | UPDATE | DELETE              │
│  • documentId: string                               │
│  • documentData: full document or null              │
│  • timestamp: for cleanup                           │
└────────────────┬────────────────────────────────────┘
                 │
                 │ External service polls
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│          External Replica Database                   │
│       (PostgreSQL, MySQL, etc.)                     │
└─────────────────────────────────────────────────────┘
```

## File Structure

```
convex/
├── actions/
│   ├── merchants.ts              # Merchant actions with replication
│   ├── gatewayConnections.ts     # Gateway actions with replication
│   ├── testReplication.ts        # Test replication flow
│   ├── consumerExample.ts        # External consumer example
│   ├── README.md                 # Detailed documentation
│   └── index.ts                  # Exports
├── mutations/
│   ├── merchants.ts              # Direct merchant mutations
│   ├── gatewayConnections.ts     # Direct gateway mutations
│   ├── replicationCounter.ts     # Sequence counter management
│   └── replicationEvents.ts      # Event log management
├── queries/
│   ├── merchants.ts              # Merchant queries
│   └── gatewayConnections.ts     # Gateway queries
├── schema.ts                      # Database schema
└── validators.ts                  # Shared validators
```

## Available Operations

### Merchants

| Action | Operation | Event Type |
|--------|-----------|------------|
| `createMerchant` | Create new merchant | INSERT |
| `updateStatus` | Change ACTIVE/SUSPENDED | UPDATE |
| `updateName` | Change merchant name | UPDATE |
| `deleteMerchant` | Soft delete (set SUSPENDED) | UPDATE |

### Gateway Connections

| Action | Operation | Event Type |
|--------|-----------|------------|
| `addConnection` | Add payment gateway | INSERT |
| `updateConnection` | Update webhook secret | UPDATE |
| `toggleActive` | Enable/disable gateway | UPDATE |
| `deleteConnection` | Remove gateway | DELETE |

## Event Structure

```typescript
{
  _id: "k17abc...",              // Event ID
  seq: 42,                       // Unique sequence number
  tableName: "merchants",        // Table name
  operation: "INSERT",           // INSERT, UPDATE, DELETE
  documentId: "k17xyz...",       // Document ID
  documentData: {                // Full document (null for DELETE)
    _id: "k17xyz...",
    name: "My Store",
    status: "ACTIVE",
    _creationTime: 1234567890
  },
  timestamp: 1234567890,         // Event creation time
  _creationTime: 1234567890      // Convex creation time
}
```

## Key Features

### ✅ Guaranteed Ordering
- Sequence numbers (`seq`) are globally unique and monotonically increasing
- Events are consumed in the exact order they occurred
- No race conditions or out-of-order processing

### ✅ Complete Data Capture
- INSERT/UPDATE events include full document data
- DELETE events include document ID
- Encrypted secrets are included in replication

### ✅ Atomic Operations
- Sequence counter increments atomically
- No duplicate sequence numbers possible

### ✅ Table Filtering
- Query all events or filter by table
- Efficient indexing on `by_seq` and `by_table_seq`

### ✅ Easy Cleanup
- Delete old events by timestamp
- Prevent unbounded growth

## Testing

Run the test suite:

```typescript
import { api } from "@/convex/_generated/api";

// Test complete replication flow
const result = await convex.action(
  api.actions.testReplication.testReplicationFlow
);
console.log(result);

// Test event consumption
const consumed = await convex.action(
  api.actions.testReplication.testEventConsumption
);
console.log(consumed);
```

## Production Considerations

### 1. Checkpoint Persistence
External consumers must persist `lastConsumedSeq` to survive restarts:

```typescript
// Save to database, file, or distributed cache
await redis.set('lastConsumedSeq', lastConsumedSeq);
```

### 2. Event Cleanup
Schedule periodic cleanup of old events:

```typescript
// Delete events older than 7 days
const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
await convex.mutation(
  api.mutations.replicationEvents.deleteEventsOlderThan,
  { timestamp: sevenDaysAgo }
);
```

### 3. Monitoring
Track replication lag:

```typescript
const currentSeq = await convex.mutation(
  api.mutations.replicationCounter.getCurrentSeq
);
const lag = currentSeq - lastConsumedSeq;
if (lag > 1000) {
  console.warn(`Replication lag: ${lag} events behind`);
}
```

### 4. Error Handling
Handle transient failures:

```typescript
try {
  await processEvent(event);
  lastConsumedSeq = event.seq;
} catch (error) {
  // Log error but continue with next event
  console.error(`Failed to process seq ${event.seq}:`, error);
  // Retry logic here
}
```

### 5. Idempotency
Ensure your replica can handle duplicate event processing:

```sql
-- Use UPSERT instead of INSERT
INSERT INTO merchants (id, data) VALUES ($1, $2)
ON CONFLICT (id) DO UPDATE SET data = $2;
```

## Migration Path

If adding replication to existing data:

1. **Bootstrap existing data:**
   ```typescript
   // One-time: Copy all existing merchants
   const merchants = await convex.query(api.queries.merchants.listMerchants);
   for (const merchant of merchants) {
     await insertIntoReplica(merchant);
   }
   ```

2. **Start consuming events from current sequence:**
   ```typescript
   const currentSeq = await convex.mutation(
     api.mutations.replicationCounter.getCurrentSeq
   );
   lastConsumedSeq = currentSeq;
   ```

3. **Switch to using actions for all writes**

## Example Consumer

See [convex/actions/consumerExample.ts](convex/actions/consumerExample.ts) for a complete example of an external service consuming replication events.

## Support

For detailed documentation, see:
- [convex/actions/README.md](convex/actions/README.md) - Complete usage guide
- [convex/actions/testReplication.ts](convex/actions/testReplication.ts) - Test examples
- [convex/actions/consumerExample.ts](convex/actions/consumerExample.ts) - Consumer example

## License

Built for the Sooq payment platform.
