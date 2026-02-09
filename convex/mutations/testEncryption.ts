/**
 * Test mutation to verify encryption and error handling works
 * Call from Convex dashboard: mutations.testEncryption.testEncryption
 */

import { mutation } from "../_generated/server";
import { runTests } from "../lib/encryption.test";
import { runErrorTests } from "../lib/errors.test";
import { safeExecute, ErrorCodes } from "../lib/errors";

export const testEncryption = mutation({
  args: {},
  handler: async () => {
    const results = [];
    
    // Run encryption tests
    try {
      await runTests();
      results.push({ test: "encryption", success: true, message: "Encryption tests passed" });
    } catch (error) {
      results.push({ 
        test: "encryption", 
        success: false, 
        message: error instanceof Error ? error.message : String(error) 
      });
    }
    
    // Run error handling tests
    try {
      const errorTestResult = await runErrorTests();
      results.push({ 
        test: "error-handling", 
        success: errorTestResult.success, 
        message: errorTestResult.message 
      });
    } catch (error) {
      results.push({ 
        test: "error-handling", 
        success: false, 
        message: error instanceof Error ? error.message : String(error) 
      });
    }
    
    // Check if all tests passed
    const allPassed = results.every(r => r.success);
    
    return {
      success: allPassed,
      results,
      message: allPassed 
        ? "All tests passed successfully" 
        : `Some tests failed: ${results.filter(r => !r.success).map(r => r.test).join(', ')}`
    };
  },
});

/**
 * Test mutation error handling specifically
 */
export const testErrorHandling = mutation({
  args: {},
  handler: async () => {
    return await safeExecute(async () => {
      return await runErrorTests();
    }, ErrorCodes.INTERNAL_ERROR);
  },
});