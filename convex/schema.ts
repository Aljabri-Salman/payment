import { defineSchema, defineTable } from "convex/server";
import { paymentEventValidator, merchantValidator, gatewayConnectionValidator } from "./validators";

export default defineSchema({
  paymentEvents: defineTable(paymentEventValidator)
    .index("by_merchant_idempotency", ["merchantId", "idempotencyKey"]),
  merchants: defineTable(merchantValidator),
  gatewayConnections: defineTable(gatewayConnectionValidator),
});
