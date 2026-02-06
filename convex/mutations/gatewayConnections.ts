/**
 * Gateway Connection Mutations
 * 
 * Manages merchant connections to payment gateways.
 * Webhook secrets are encrypted at rest using AES-256-GCM.
 */

import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { encrypt, decrypt } from "../lib/encryption";
import { gatewayValidator } from "../validators";

/**
 * Add a new gateway connection for a merchant.
 * The webhook secret is encrypted before storage.
 */
export const addConnection = mutation({
  args: {
    merchantId: v.id("merchants"),
    gateway: gatewayValidator,
    webhookSecret: v.string(), // Plain text - will be encrypted
  },
  handler: async (ctx, args) => {
    // Check if connection already exists
    const existing = await ctx.db
      .query("gatewayConnections")
      .filter((q) =>
        q.and(
          q.eq(q.field("merchantId"), args.merchantId),
          q.eq(q.field("gateway"), args.gateway)
        )
      )
      .first();

    if (existing) {
      throw new Error(
        `Gateway connection already exists for ${args.gateway}. Use updateConnection instead.`
      );
    }

    // Encrypt the webhook secret before storing
    const encrypted = await encrypt(args.webhookSecret);

    const connectionId = await ctx.db.insert("gatewayConnections", {
      merchantId: args.merchantId,
      gateway: args.gateway,
      webhookSecretEncrypted: encrypted,
      isActive: true,
    });

    return connectionId;
  },
});

/**
 * Update an existing gateway connection's webhook secret.
 */
export const updateConnection = mutation({
  args: {
    connectionId: v.id("gatewayConnections"),
    webhookSecret: v.string(),
  },
  handler: async (ctx, args) => {
    const connection = await ctx.db.get(args.connectionId);

    if (!connection) {
      throw new Error("Gateway connection not found");
    }

    // Encrypt the new webhook secret
    const encrypted = await encrypt(args.webhookSecret);

    await ctx.db.patch(args.connectionId, {
      webhookSecretEncrypted: encrypted,
    });

    return args.connectionId;
  },
});

/**
 * Toggle gateway connection active status.
 */
export const toggleActive = mutation({
  args: {
    connectionId: v.id("gatewayConnections"),
  },
  handler: async (ctx, args) => {
    const connection = await ctx.db.get(args.connectionId);

    if (!connection) {
      throw new Error("Gateway connection not found");
    }

    await ctx.db.patch(args.connectionId, {
      isActive: !connection.isActive,
    });

    return args.connectionId;
  },
});

/**
 * Delete a gateway connection.
 */
export const deleteConnection = mutation({
  args: {
    connectionId: v.id("gatewayConnections"),
  },
  handler: async (ctx, args) => {
    const connection = await ctx.db.get(args.connectionId);

    if (!connection) {
      throw new Error("Gateway connection not found");
    }

    await ctx.db.delete(args.connectionId);

    return { success: true };
  },
});

/**
 * Get decrypted webhook secret for internal use (e.g., signature verification).
 * This is a mutation to ensure it runs on the server with access to encryption key.
 */
export const getDecryptedSecret = mutation({
  args: {
    merchantId: v.id("merchants"),
    gateway: gatewayValidator,
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

    if (!connection) {
      throw new Error(`No active connection found for ${args.gateway}`);
    }

    // Decrypt the webhook secret
    const webhookSecret = await decrypt(connection.webhookSecretEncrypted);

    return {
      connectionId: connection._id,
      webhookSecret,
      gateway: connection.gateway,
    };
  },
});
