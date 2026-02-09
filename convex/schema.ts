import { defineSchema, defineTable } from "convex/server";

import {
  paymentEventValidator,
  merchantValidator,
  gatewayConnectionValidator,
  replicationEventValidator,
  replicationCounterValidator
} from "./validators";

export default defineSchema({
  paymentEvents: defineTable(paymentEventValidator).index(
    "by_merchant_idempotency",
    ["merchantId", "idempotencyKey"]
  ),
  merchants: defineTable(merchantValidator),
  gatewayConnections: defineTable(gatewayConnectionValidator),
  replicationEvents: defineTable(replicationEventValidator)
    .index("by_seq", ["seq"]) // For ordered consumption
    .index("by_table_seq", ["tableName", "seq"]),
  replicationCounter: defineTable(replicationCounterValidator) // For table-specific queries
});
