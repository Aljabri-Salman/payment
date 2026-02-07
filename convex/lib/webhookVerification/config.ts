/**
 * Configuration constants for webhook verification
 */

/**
 * Default timestamp tolerance in seconds (5 minutes)
 * Used to prevent replay attacks
 */
export const DEFAULT_TIMESTAMP_TOLERANCE_SECONDS = 300;

/**
 * Maximum allowed webhook payload size (1MB)
 * Helps prevent DoS attacks
 */
export const MAX_PAYLOAD_SIZE_BYTES = 1024 * 1024;

/**
 * Webhook signature versions supported by gateway
 */
export const SIGNATURE_VERSIONS = {
  STRIPE: "v1",
  // Add other gateways as needed
  // HYPERPAY: "v1",
} as const;

/**
 * Enable debug logging based on environment
 */
export const ENABLE_DEBUG_LOGS = process.env.NODE_ENV === "development";
