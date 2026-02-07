import { query } from "../_generated/server";
import { v } from "convex/values";

/**
 * Count payment events for a specific merchant
 */
export const countByMerchant = query({
  args: {
    merchantId: v.id("merchants"),
  },
  handler: async (ctx, { merchantId }) => {
    const events = await ctx.db
      .query("paymentEvents")
      .filter((q) => q.eq(q.field("merchantId"), merchantId))
      .collect();
    
    return events.length;
  },
});

/**
 * List payment events for a specific merchant
 */
export const listByMerchant = query({
  args: {
    merchantId: v.id("merchants"),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { merchantId, limit = 50 }) => {
    const events = await ctx.db
      .query("paymentEvents")
      .filter((q) => q.eq(q.field("merchantId"), merchantId))
      .order("desc")
      .take(limit);
    
    return events;
  },
});

/**
 * Find payment event by idempotency key (for duplicate detection)
 */
export const findByIdempotencyKey = query({
  args: {
    merchantId: v.id("merchants"),
    idempotencyKey: v.string(),
  },
  handler: async (ctx, { merchantId, idempotencyKey }) => {
    return await ctx.db
      .query("paymentEvents")
      .withIndex("by_merchant_idempotency", (q) =>
        q.eq("merchantId", merchantId).eq("idempotencyKey", idempotencyKey)
      )
      .first();
  },
});
