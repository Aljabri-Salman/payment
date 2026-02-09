/**
 * Cleanup Replication Events Mutation
 * 
 * Scheduled function to delete old replication events (older than 1 week).
 * This prevents the replicationEvents table from growing indefinitely.
 * Should be scheduled as a cron job.
 * Uses Convex's built-in _creationTime field.
 */

import { mutation } from "../_generated/server";

/**
 * Delete replication events older than 1 week (7 days).
 * This should be called by a scheduled function (cron job).
 */
export const cleanupOldEvents = mutation({
  handler: async (ctx) => {
    const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
    
    const oldEvents = await ctx.db
      .query("replicationEvents")
      .filter((q) => q.lt(q.field("_creationTime"), oneWeekAgo))
      .collect();
    
    let deletedCount = 0;
    for (const event of oldEvents) {
      await ctx.db.delete(event._id);
      deletedCount++;
    }
    
    return { 
      success: true, 
      deletedCount,
      message: `Deleted ${deletedCount} events older than ${new Date(oneWeekAgo).toISOString()}`
    };
  },
});