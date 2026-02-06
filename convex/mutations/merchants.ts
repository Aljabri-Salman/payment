/**
 * Merchant Mutations
 * 
 * Manages merchant accounts on the platform.
 */

import { mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Create a new merchant account.
 */
export const createMerchant = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if merchant with same name already exists
    const existing = await ctx.db
      .query("merchants")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();

    if (existing) {
      throw new Error(`Merchant with name "${args.name}" already exists`);
    }

    const merchantId = await ctx.db.insert("merchants", {
      name: args.name,
      status: "ACTIVE",
    });

    return merchantId;
  },
});

/**
 * Update merchant status (ACTIVE or SUSPENDED).
 */
export const updateStatus = mutation({
  args: {
    merchantId: v.id("merchants"),
    status: v.union(v.literal("ACTIVE"), v.literal("SUSPENDED")),
  },
  handler: async (ctx, args) => {
    const merchant = await ctx.db.get(args.merchantId);

    if (!merchant) {
      throw new Error("Merchant not found");
    }

    await ctx.db.patch(args.merchantId, {
      status: args.status,
    });

    return args.merchantId;
  },
});

/**
 * Update merchant name.
 */
export const updateName = mutation({
  args: {
    merchantId: v.id("merchants"),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const merchant = await ctx.db.get(args.merchantId);

    if (!merchant) {
      throw new Error("Merchant not found");
    }

    // Check if new name conflicts with existing merchant
    const existing = await ctx.db
      .query("merchants")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();

    if (existing && existing._id !== args.merchantId) {
      throw new Error(`Merchant with name "${args.name}" already exists`);
    }

    await ctx.db.patch(args.merchantId, {
      name: args.name,
    });

    return args.merchantId;
  },
});

/**
 * Delete a merchant (soft delete by setting status to SUSPENDED).
 */
export const deleteMerchant = mutation({
  args: {
    merchantId: v.id("merchants"),
  },
  handler: async (ctx, args) => {
    const merchant = await ctx.db.get(args.merchantId);

    if (!merchant) {
      throw new Error("Merchant not found");
    }

    // Soft delete by suspending
    await ctx.db.patch(args.merchantId, {
      status: "SUSPENDED",
    });

    return { success: true };
  },
});
