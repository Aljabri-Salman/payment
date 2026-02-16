import { query } from "../_generated/server";

export const getReplicationCounter = query({
  handler: async (ctx) => {
    const counter = await ctx.db.query("replicationCounter").first();
    return counter ? counter.lastSeq : 0;
  },
});

export const getReplicationEventsLastDay = query({
  handler: async (ctx) => {
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    
    const events = await ctx.db
      .query("replicationEvents")
      .filter((q) => q.gte(q.field("_creationTime"), oneDayAgo))
      .order("asc")
      .collect();
    
    return events;
  },
});