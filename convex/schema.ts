import { defineSchema, defineTable } from "convex/server";
import { paymentEventValidator, merchantValidator, gatewayConnectionValidator } from "./validators";

export default defineSchema({
  paymentEvents: defineTable(paymentEventValidator),
  merchants: defineTable(merchantValidator),
  gatewayConnections: defineTable(gatewayConnectionValidator),
});
