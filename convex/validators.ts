import { v } from "convex/values";

// Gateway type validator (reusable)
export const gatewayValidator = v.union(
  v.literal("hyperpay"),
  v.literal("moyasar"),
  v.literal("tap"),
  v.literal("checkout"),
  v.literal("stripe")
);

// Shared validator for payment event fields
export const paymentEventValidator = {
  merchantId: v.id("merchants"),
  gateway: gatewayValidator,
  eventType: v.string(),
  paymentId: v.string(),
  orderId: v.string(),
  amount: v.number(),
  currency: v.string(),
  status: v.string(),
  rawPayload: v.any(),
  receivedAt: v.number(),
  idempotencyKey: v.optional(v.string()),
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

export const replicationEventValidator = {
  seq: v.number(), // Monotonically increasing sequence number
  tableName: v.string(), // "merchants" or "gatewayConnections"
  operation: v.union(v.literal("INSERT"), v.literal("UPDATE"), v.literal("DELETE")),
  documentId: v.string(), // Store as string for flexibility
  documentData: v.any(), // Full document for INSERT/UPDATE, null for DELETE
  // Note: Convex automatically adds _creationTime to all documents
};

export const replicationCounterValidator = {
  lastSeq: v.number(),
};