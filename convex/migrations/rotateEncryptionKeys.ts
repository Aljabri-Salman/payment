/**
 * Encryption Key Rotation Migration
 * 
 * Run this after rotating encryption keys to re-encrypt all existing data
 * with the new key version.
 * 
 * Usage:
 *   bunx convex run migrations/rotateEncryptionKeys:checkStatus
 *   bunx convex run migrations/rotateEncryptionKeys:rotateAll
 *   bunx convex run migrations/rotateEncryptionKeys:rotateBatch '{"batchSize": 50}'
 */

import { internalMutation, internalQuery } from "../_generated/server";
import { v } from "convex/values";
import { encrypt, decrypt, needsRotation } from "../lib/encryption";

/**
 * Check migration status - how many secrets need rotation
 */
export const checkStatus = internalQuery({
  handler: async (ctx) => {
    const connections = await ctx.db.query("gatewayConnections").collect();
    
    const needsRotationCount = connections.filter(c => 
      needsRotation(c.webhookSecretEncrypted)
    ).length;
    
    const migrated = connections.length - needsRotationCount;
    const percentage = connections.length > 0 
      ? ((migrated / connections.length) * 100).toFixed(1)
      : "0.0";
    
    return {
      total: connections.length,
      needsRotation: needsRotationCount,
      migrated: migrated,
      percentageComplete: percentage + '%',
      done: needsRotationCount === 0
    };
  }
});

/**
 * Rotate ALL encryption keys at once
 * Use for small datasets or when you need immediate migration
 */
export const rotateAll = internalMutation({
  handler: async (ctx) => {
    console.log("🔄 Starting full encryption key rotation...");
    
    const connections = await ctx.db.query("gatewayConnections").collect();
    
    let migrated = 0;
    let skipped = 0;
    let failed = 0;
    
    for (const connection of connections) {
      try {
        // Skip if already using current key
        if (!needsRotation(connection.webhookSecretEncrypted)) {
          skipped++;
          continue;
        }
        
        // Decrypt with old key (automatic detection)
        const secret = await decrypt(connection.webhookSecretEncrypted);
        
        // Re-encrypt with current key
        const reencrypted = await encrypt(secret);
        
        // Update database
        await ctx.db.patch(connection._id, {
          webhookSecretEncrypted: reencrypted,
        });
        
        migrated++;
      } catch (error) {
        console.error(`❌ Failed to migrate connection ${connection._id}:`, error);
        failed++;
      }
    }
    
    console.log(`✅ Migration complete!`);
    console.log(`   Migrated: ${migrated}`);
    console.log(`   Skipped: ${skipped} (already current)`);
    console.log(`   Failed: ${failed}`);
    
    return {
      migrated,
      skipped,
      failed,
      total: connections.length
    };
  }
});

/**
 * Rotate encryption keys in batches
 * Safer for large datasets - processes a limited number at a time
 * Run multiple times until all data is migrated
 */
export const rotateBatch = internalMutation({
  args: {
    batchSize: v.optional(v.number())
  },
  handler: async (ctx, args) => {
    const batchSize = args.batchSize || 100;
    
    console.log(`🔄 Starting batch rotation (max ${batchSize} items)...`);
    
    // Get all connections (we'll filter in code)
    const allConnections = await ctx.db.query("gatewayConnections").collect();
    
    // Filter to only those that need rotation
    const toRotate = allConnections
      .filter(c => needsRotation(c.webhookSecretEncrypted))
      .slice(0, batchSize);
    
    if (toRotate.length === 0) {
      console.log("✅ All keys already migrated!");
      return { done: true, migrated: 0, remaining: 0 };
    }
    
    let migrated = 0;
    for (const connection of toRotate) {
      try {
        const secret = await decrypt(connection.webhookSecretEncrypted);
        const reencrypted = await encrypt(secret);
        
        await ctx.db.patch(connection._id, {
          webhookSecretEncrypted: reencrypted,
        });
        
        migrated++;
      } catch (error) {
        console.error(`❌ Failed to migrate ${connection._id}`);
      }
    }
    
    const remaining = allConnections.filter(c => 
      needsRotation(c.webhookSecretEncrypted)
    ).length;
    
    console.log(`✅ Batch complete: ${migrated} migrated, ${remaining} remaining`);
    
    return {
      done: remaining === 0,
      migrated,
      remaining,
      total: allConnections.length
    };
  }
});
