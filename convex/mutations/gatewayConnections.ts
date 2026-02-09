/**
 * Gateway Connection Mutations
 * 
 * Manages merchant connections to payment gateways.
 * Webhook secrets are encrypted at rest using AES-256-GCM.
 * Includes event-driven replication for external services.
 */

import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { encrypt, decrypt } from "../lib/encryption";
import { gatewayValidator } from "../validators";
import { createReplicationEvent } from "../lib/replication";
import { notFound, assertExists, safeExecute, ErrorCodes, encryptionError } from "../lib/errors";

/**
 * Add a new gateway connection for a merchant.
 * The webhook secret is encrypted before storage.
 * Note: A merchant can have multiple connections to the same gateway.
 */
export const addConnection = mutation({
  args: {
    merchantId: v.id("merchants"),
    gateway: gatewayValidator,
    webhookSecret: v.string(), // Plain text - will be encrypted
  },
  handler: async (ctx, args) => {
    return await safeExecute(async () => {
      // Encrypt the webhook secret before storing
      const encrypted = await encrypt(args.webhookSecret).catch(err => {
        throw encryptionError(`Failed to encrypt webhook secret: ${err.message}`, 'encrypt');
      });

      const connectionData = {
        merchantId: args.merchantId,
        gateway: args.gateway,
        webhookSecretEncrypted: encrypted,
        isActive: true,
      };

      const connectionId = await ctx.db.insert("gatewayConnections", connectionData);

      // Create replication event with the data we just inserted
      await createReplicationEvent(
        ctx,
        "gatewayConnections",
        "INSERT",
        connectionId.toString(),
        connectionData
      );

      return connectionId;
    }, ErrorCodes.DATABASE_ERROR);
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
    return await safeExecute(async () => {
      const connection = await ctx.db.get(args.connectionId);
      assertExists(connection, "Gateway connection", args.connectionId.toString());

      // Encrypt the new webhook secret
      const encrypted = await encrypt(args.webhookSecret).catch(err => {
        throw encryptionError(`Failed to encrypt webhook secret: ${err.message}`, 'encrypt');
      });

      await ctx.db.patch(args.connectionId, {
        webhookSecretEncrypted: encrypted,
      });

      // Create replication event with updated data
      const updatedData = { ...connection, webhookSecretEncrypted: encrypted };
      await createReplicationEvent(
        ctx,
        "gatewayConnections",
        "UPDATE",
        args.connectionId.toString(),
        updatedData
      );

      return args.connectionId;
    }, ErrorCodes.DATABASE_ERROR);
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
    return await safeExecute(async () => {
      const connection = await ctx.db.get(args.connectionId);
      assertExists(connection, "Gateway connection", args.connectionId.toString());

      const newActiveState = !connection.isActive;
      await ctx.db.patch(args.connectionId, {
        isActive: newActiveState,
      });

      // Create replication event with updated data
      const updatedData = { ...connection, isActive: newActiveState };
      await createReplicationEvent(
        ctx,
        "gatewayConnections",
        "UPDATE",
        args.connectionId.toString(),
        updatedData
      );

      return args.connectionId;
    }, ErrorCodes.DATABASE_ERROR);
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
    return await safeExecute(async () => {
      const connection = await ctx.db.get(args.connectionId);
      assertExists(connection, "Gateway connection", args.connectionId.toString());

      await ctx.db.delete(args.connectionId);

      // Create replication event for DELETE
      await createReplicationEvent(
        ctx,
        "gatewayConnections",
        "DELETE",
        args.connectionId.toString(),
        null
      );

      return args.connectionId;
    }, ErrorCodes.DATABASE_ERROR);
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
    return await safeExecute(async () => {
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
        throw notFound(`Active ${args.gateway} connection for merchant`, args.merchantId.toString());
      }

      // Decrypt the webhook secret
      const webhookSecret = await decrypt(connection.webhookSecretEncrypted).catch(err => {
        throw encryptionError(`Failed to decrypt webhook secret: ${err.message}`, 'decrypt');
      });

      return {
        connectionId: connection._id,
        webhookSecret,
        gateway: connection.gateway,
      };
    }, ErrorCodes.DATABASE_ERROR);
  },
});