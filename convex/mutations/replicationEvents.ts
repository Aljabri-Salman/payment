/**
 * Replication Events Mutations
 * 
 * Query mutations for retrieving and managing replication events.
 * Event creation is handled automatically by the replication utility.
 */

import { mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Get events by sequence range.
 * Used by external services to consume events.
 */
export const getEventsBySeqRange = mutation({
  args: {
    fromSeq: v.number(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 100;
    
    const events = await ctx.db
      .query("replicationEvents")
      .filter((q) => q.gt(q.field("seq"), args.fromSeq))
      .order("asc")
      .take(limit);
    
    return events;
  },
});

/**
 * Get events for a specific table by sequence range.
 */
export const getTableEventsBySeqRange = mutation({
  args: {
    tableName: v.string(),
    fromSeq: v.number(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 100;
    
    const events = await ctx.db
      .query("replicationEvents")
      .withIndex("by_table_seq", (q) => 
        q.eq("tableName", args.tableName).gt("seq", args.fromSeq)
      )
      .order("asc")
      .take(limit);
    
    return events;
  },
});

/**
 * Get latest events (for monitoring/debugging).
 */
export const getLatestEvents = mutation({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 50;
    
    const events = await ctx.db
      .query("replicationEvents")
      .order("desc")
      .take(limit);
    
    return events.reverse(); // Return in chronological order
  },
});

/**
 * Delete events older than timestamp (for cleanup).
 */
export const deleteEventsOlderThan = mutation({
  args: {
    timestamp: v.number(),
  },
  handler: async (ctx, args) => {
    const oldEvents = await ctx.db
      .query("replicationEvents")
      .filter((q) => q.lt(q.field("_creationTime"), args.timestamp))
      .collect();
    
    let deletedCount = 0;
    for (const event of oldEvents) {
      await ctx.db.delete(event._id);
      deletedCount++;
    }
    
    return { deleted: deletedCount };
  },
});