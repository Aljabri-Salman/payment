/**
 * Merchant Queries
 * 
 * Read-only queries for merchant data.
 */

import { query } from "../_generated/server";
import { v } from "convex/values";

/**
 * Get a merchant by ID.
 */
export const getMerchant = query({
  args: {
    merchantId: v.id("merchants"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.merchantId);
  },
});

/**
 * Alias for getMerchant (backward compatibility).
 */
export const getMerchantById = getMerchant;

/**
 * List all merchants.
 */
export const listMerchants = query({
  handler: async (ctx) => {
    return await ctx.db.query("merchants").collect();
  },
});

/**
 * List only active merchants.
 */
export const listActive = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("merchants")
      .filter((q) => q.eq(q.field("status"), "ACTIVE"))
      .collect();
  },
});

/**
 * Get merchant by name.
 */
export const getByName = query({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("merchants")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();
  },
});
