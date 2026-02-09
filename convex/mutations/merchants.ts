/**
 * Merchant Mutations
 * 
 * Manages merchant accounts on the platform.
 * Includes event-driven replication for external services.
 */

import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { createReplicationEvent } from "../lib/replication";
import { notFound, assertExists, safeExecute, ErrorCodes } from "../lib/errors";

/**
 * Create a new merchant account.
 */
export const createMerchant = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    return await safeExecute(async () => {
      const merchantData = {
        name: args.name,
        status: "ACTIVE" as const,
      };

      const merchantId = await ctx.db.insert("merchants", merchantData);

      // Create replication event with the data we just inserted
      await createReplicationEvent(
        ctx,
        "merchants",
        "INSERT",
        merchantId.toString(),
        merchantData
      );

      return merchantId;
    }, ErrorCodes.DATABASE_ERROR);
  },
});

/**
 * Update merchant fields (name and/or status).
 * Replaces the separate updateStatus and updateName mutations.
 */
export const updateMerchant = mutation({
  args: {
    merchantId: v.id("merchants"),
    name: v.optional(v.string()),
    status: v.optional(v.union(v.literal("ACTIVE"), v.literal("SUSPENDED"))),
  },
  handler: async (ctx, args) => {
    return await safeExecute(async () => {
      const merchant = await ctx.db.get(args.merchantId);
      assertExists(merchant, "Merchant", args.merchantId.toString());

      const updates: any = {};

      // Update name if provided
      if (args.name !== undefined) {
        updates.name = args.name;
      }

      // Update status if provided
      if (args.status !== undefined) {
        updates.status = args.status;
      }

      // Apply updates
      await ctx.db.patch(args.merchantId, updates);
      
      // Create replication event with updated data
      const updatedData = { ...merchant, ...updates };
      await createReplicationEvent(
        ctx,
        "merchants",
        "UPDATE",
        args.merchantId.toString(),
        updatedData
      );

      return args.merchantId;
    }, ErrorCodes.DATABASE_ERROR);
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
    return await safeExecute(async () => {
      const merchant = await ctx.db.get(args.merchantId);
      assertExists(merchant, "Merchant", args.merchantId.toString());

      // Soft delete by suspending
      await ctx.db.patch(args.merchantId, {
        status: "SUSPENDED",
      });

      // Create replication event for soft delete (UPDATE with new status)
      const updatedData = { ...merchant, status: "SUSPENDED" as const };
      await createReplicationEvent(
        ctx,
        "merchants",
        "UPDATE",
        args.merchantId.toString(),
        updatedData
      );

      return args.merchantId;
    }, ErrorCodes.DATABASE_ERROR);
  },
});