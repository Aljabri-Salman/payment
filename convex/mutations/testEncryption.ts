/**
 * Test mutation to verify encryption works
 * Call from Convex dashboard: mutations.testEncryption.testEncryption
 */

import { mutation } from "../_generated/server";
import { runTests } from "../lib/encryption.test";

export const testEncryption = mutation({
  args: {},
  handler: async () => {
    await runTests();
    return { success: true, message: "Check logs for test results" };
  },
});
