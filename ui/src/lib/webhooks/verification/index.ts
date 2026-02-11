/**
 * Webhook Signature Verification
 * 
 * This module provides secure webhook signature verification for payment gateways.
 * 
 * Architecture:
 * - Strategy pattern with verifier registry for easy extensibility
 * - Constant-time comparison to prevent timing attacks
 * - Type-safe with discriminated union results
 * - Separated concerns: crypto utilities, gateway-specific logic, orchestration
 * 
 * Security features:
 * - ✓ Constant-time signature comparison (prevents timing attacks)
 * - ✓ Timestamp validation (prevents replay attacks)
 * - ✓ Input validation
 * - ✓ Proper error handling without information leakage
 * 
 * To add a new gateway:
 * 1. Create a verifier class implementing SignatureVerifier interface
 * 2. Register it in the VERIFIERS registry
 * 3. Add the gateway to SupportedGateway type in convex/types.ts
 * 
 * @example
 * ```ts
 * const result = await verifyWebhookSignature({
 *   gateway: "stripe",
 *   payload: rawBody,
 *   signature: headers["stripe-signature"],
 *   secret: webhookSecret,
 *   config: { timestampToleranceSeconds: 300 }
 * });
 * 
 * if (result.success) {
 *   // Process webhook
 * } else {
 *   console.error(`Verification failed: ${result.error}`);
 * }
 * ```
 */

import type { SupportedGateway } from "@/convex/types";
import type {
  SignatureVerifier,
  VerificationParams,
  VerificationResult,
  VerificationConfig,
} from "./types";
import { StripeSignatureVerifier } from "./verifiers/stripe";

/**
 * Default configuration values
 */
const DEFAULT_CONFIG: Required<VerificationConfig> = {
  timestampToleranceSeconds: 300, // 5 minutes
  enableDebugLogs: process.env.NODE_ENV === "development",
};

/**
 * Registry of signature verifiers by gateway.
 * 
 * To add a new gateway:
 * 1. Implement the SignatureVerifier interface
 * 2. Add an instance to this registry
 */
const VERIFIERS: Record<SupportedGateway, SignatureVerifier> = {
  stripe: new StripeSignatureVerifier(),
  // Add future gateways here:
  // hyperpay: new HyperpaySignatureVerifier(),
};

/**
 * Verify webhook signature for supported payment gateways.
 * 
 * This function uses a strategy pattern to delegate verification
 * to gateway-specific implementations.
 * 
 * @param params - Verification parameters
 * @returns VerificationResult with success status or specific error
 * 
 * @example
 * ```ts
 * // Basic usage
 * const result = await verifyWebhookSignature({
 *   gateway: "stripe",
 *   payload: rawBody,
 *   signature: headers["stripe-signature"],
 *   secret: webhookSecret,
 * });
 * 
 * // With custom config
 * const result = await verifyWebhookSignature({
 *   gateway: "stripe",
 *   payload: rawBody,
 *   signature: headers["stripe-signature"],
 *   secret: webhookSecret,
 *   config: {
 *     timestampToleranceSeconds: 600, // 10 minutes
 *     enableDebugLogs: true,
 *   }
 * });
 * ```
 */
export async function verifyWebhookSignature(
  params: VerificationParams
): Promise<VerificationResult> {
  const { gateway, payload, signature, secret, config } = params;
  
  // Merge with default config
  const finalConfig: Required<VerificationConfig> = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  if (finalConfig.enableDebugLogs) {
    console.log(`[WebhookVerification] Gateway: ${gateway}`);
    console.log(`[WebhookVerification] Signature length: ${signature.length}`);
    console.log(`[WebhookVerification] Secret length: ${secret.length}`);
    console.log(`[WebhookVerification] Payload length: ${payload.length}`);
  }

  // Get verifier for gateway
  const verifier = VERIFIERS[gateway as keyof typeof VERIFIERS];
  
  if (!verifier) {
    console.error(`[WebhookVerification] Unsupported gateway: ${gateway}`);
    return { success: false, error: "UNSUPPORTED_GATEWAY" };
  }

  // Delegate to gateway-specific verifier
  try {
    return await verifier.verify(payload, signature, secret, finalConfig);
  } catch (error) {
    console.error(
      `[WebhookVerification] Unexpected error for ${gateway}:`,
      error
    );
    return { success: false, error: "CRYPTO_ERROR" };
  }
}

/**
 * Legacy compatibility function - returns boolean instead of VerificationResult.
 * 
 * @deprecated Use verifyWebhookSignature() instead for detailed error information
 * 
 * @param gateway - Payment gateway
 * @param payload - Raw request body
 * @param signature - Signature header value
 * @param secret - Webhook secret
 * @returns Promise<boolean> true if signature is valid
 */
export async function verifyWebhookSignatureBoolean(
  gateway: SupportedGateway,
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  const result = await verifyWebhookSignature({
    gateway,
    payload,
    signature,
    secret,
  });
  return result.success;
}

// Export types for consumers
export type {
  VerificationResult,
  VerificationError,
  VerificationConfig,
  VerificationParams,
  SignatureVerifier,
  StripeSignatureHeader,
} from "./types";

// Export configuration constants
export {
  DEFAULT_TIMESTAMP_TOLERANCE_SECONDS,
  MAX_PAYLOAD_SIZE_BYTES,
  SIGNATURE_VERSIONS,
  ENABLE_DEBUG_LOGS,
} from "./config";

// Export crypto utilities for advanced use cases
export {
  constantTimeCompare,
  computeHmacSha256,
  bufferToHex,
  validateInputs,
  isTimestampValid,
} from "./crypto";
