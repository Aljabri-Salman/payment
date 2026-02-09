/**
 * Replication Counter Mutations
 * 
 * Manages the global sequence counter for replication events.
 * Provides atomic sequence number generation.
 */

import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { Id } from "../_generated/dataModel";

const COUNTER_ID = "replication_counter" as Id<"replicationCounter">;

/**
 * Get the next sequence number atomically.
 * This ensures no duplicate sequence numbers across all events.
 */
export const getNextSeq = mutation({
  handler: async (ctx) => {
    // Get or create counter document
    let counter = await ctx.db.get(COUNTER_ID);
    
    if (!counter) {
      // First time - create counter with seq 0
      const newCounterId = await ctx.db.insert("replicationCounter", {
        lastSeq: 0,
      });
      counter = await ctx.db.get(newCounterId);
    }
    
    if (!counter) {
      throw new Error("Failed to create or get replication counter");
    }
    
    // Atomically increment and get next sequence
    const nextSeq = counter.lastSeq + 1;
    await ctx.db.patch(counter._id, { lastSeq: nextSeq });
    
    return nextSeq;
  },
});

/**
 * Get current sequence number without incrementing.
 */
export const getCurrentSeq = mutation({
  handler: async (ctx) => {
    const counter = await ctx.db.get(COUNTER_ID);
    
    if (!counter) {
      // Counter doesn't exist yet
      return 0;
    }
    
    return counter.lastSeq;
  },
});

/**
 * Reset sequence counter (for testing/debugging only).
 */
export const resetCounter = mutation({
  args: {
    startFrom: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const startSeq = args.startFrom ?? 0;
    
    let counter = await ctx.db.get(COUNTER_ID);
    
    if (!counter) {
      await ctx.db.insert("replicationCounter", {
        lastSeq: startSeq,
      });
    } else {
      await ctx.db.patch(counter._id, { lastSeq: startSeq });
    }
    
    return { success: true, newSeq: startSeq };
  },
});