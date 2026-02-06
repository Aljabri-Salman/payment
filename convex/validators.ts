import { v } from "convex/values";

// Gateway type validator (reusable)
export const gatewayValidator = v.union(
  v.literal("hyperpay"),
  v.literal("moyasar"),
  v.literal("tap"),
  v.literal("checkout")
);

// Shared validator for payment event fields
export const paymentEventValidator = {
  gateway: v.string(),
  eventType: v.string(),
  paymentId: v.string(),
  orderId: v.string(),
  amount: v.number(),
  currency: v.string(),
  status: v.string(),
  rawPayload: v.any(),
  receivedAt: v.number(),
};

// Merchant validator
export const merchantValidator = {
  name: v.string(),
  status: v.union(v.literal("ACTIVE"), v.literal("SUSPENDED")),
};

// Gateway connections validator
export const gatewayConnectionValidator = {
  merchantId: v.id("merchants"),
  gateway: gatewayValidator,
  webhookSecretEncrypted: v.string(),
  isActive: v.boolean(),
};
