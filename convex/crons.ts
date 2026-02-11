// convex/cron/cleanup.ts
import { cronJobs } from "convex/server";
import { api } from "./_generated/api";

const crons = cronJobs();

crons.daily(
  "cleanup replication events",
  {
    hourUTC: 3, // pick a low-traffic hour
    minuteUTC: 0,
  },
  api.mutations.cleanupReplicationEvents.cleanupOldEvents
);

export default crons;