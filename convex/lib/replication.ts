/**
 * Replication Utilities
 * 
 * Shared helpers for creating replication events atomically.
 */

import { MutationCtx } from "../_generated/server";

/**
 * Create a replication event with automatic sequence number generation.
 * This ensures all mutations create replication events atomically.
 */
export const createReplicationEvent = async (
  ctx: MutationCtx,
  tableName: string,
  operation: "INSERT" | "UPDATE" | "DELETE",
  documentId: string,
  documentData: any
) => {
  // Get or create counter (using query since there should only be one)
  let counter = await ctx.db.query("replicationCounter").first();
  
  if (!counter) {
    // Create the first counter
    const counterId = await ctx.db.insert("replicationCounter", {
      lastSeq: 0,
    });
    counter = await ctx.db.get(counterId);
  }
  
  if (!counter) {
    throw new Error("Failed to get replication counter");
  }
  
  // Increment sequence and create event
  const nextSeq = counter.lastSeq + 1;
  await ctx.db.patch(counter._id, { lastSeq: nextSeq });
  
  await ctx.db.insert("replicationEvents", {
    seq: nextSeq,
    tableName,
    operation,
    documentId,
    documentData,
  });
};
