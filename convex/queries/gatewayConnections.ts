/**
 * Gateway Connection Queries
 * 
 * Read-only queries for gateway connections.
 * Webhook secrets are never exposed in queries (only through mutations for server-side use).
 */

import { query } from "../_generated/server";
import { v } from "convex/values";

/**
 * Get a specific gateway connection (without decrypted secret).
 */
export const getConnection = query({
  args: {
    merchantId: v.id("merchants"),
    gateway: v.string(),
  },
  handler: async (ctx, args) => {
    const connection = await ctx.db
      .query("gatewayConnections")
      .filter((q) =>
        q.and(
          q.eq(q.field("merchantId"), args.merchantId),
          q.eq(q.field("gateway"), args.gateway)
        )
      )
      .first();

    if (!connection) {
      return null;
    }

    // Return connection without exposing the encrypted secret
    return {
      _id: connection._id,
      merchantId: connection.merchantId,
      gateway: connection.gateway,
      isActive: connection.isActive,
      hasSecret: !!connection.webhookSecretEncrypted,
    };
  },
});

/**
 * List all gateway connections for a merchant.
 */
export const listByMerchant = query({
  args: {
    merchantId: v.id("merchants"),
  },
  handler: async (ctx, args) => {
    const connections = await ctx.db
      .query("gatewayConnections")
      .filter((q) => q.eq(q.field("merchantId"), args.merchantId))
      .collect();

    return connections.map((conn) => ({
      _id: conn._id,
      merchantId: conn.merchantId,
      gateway: conn.gateway,
      isActive: conn.isActive,
      hasSecret: !!conn.webhookSecretEncrypted,
    }));
  },
});

/**
 * Check if a gateway connection exists and is active.
 */
export const isActive = query({
  args: {
    merchantId: v.id("merchants"),
    gateway: v.string(),
  },
  handler: async (ctx, args) => {
    const connection = await ctx.db
      .query("gatewayConnections")
      .filter((q) =>
        q.and(
          q.eq(q.field("merchantId"), args.merchantId),
          q.eq(q.field("gateway"), args.gateway),
          q.eq(q.field("isActive"), true)
        )
      )
      .first();

    return !!connection;
  },
});
