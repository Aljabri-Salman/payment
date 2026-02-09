/**
 * Helper Utilities
 * 
 * Shared helper functions for data transformation and sanitization.
 */

/**
 * Sanitize gateway connection to remove sensitive encrypted data.
 * Used in queries to never expose encrypted secrets.
 */
export const sanitizeConnection = (connection: any) => ({
  _id: connection._id,
  merchantId: connection.merchantId,
  gateway: connection.gateway,
  isActive: connection.isActive,
  hasSecret: !!connection.webhookSecretEncrypted,
});
