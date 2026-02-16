import { SupportedGateway } from "@/convex/types";

/**
 * Result of webhook signature verification
 */
export type VerificationResult =
  | { success: true }
  | { success: false; error: VerificationError };

/**
 * Verification error types for detailed failure reasons
 */
export type VerificationError =
  | "UNSUPPORTED_GATEWAY"
  | "INVALID_SIGNATURE_FORMAT"
  | "MISSING_TIMESTAMP"
  | "TIMESTAMP_OUT_OF_TOLERANCE"
  | "SIGNATURE_MISMATCH"
  | "INVALID_INPUT"
  | "CRYPTO_ERROR";

/**
 * Configuration for webhook verification
 */
export interface VerificationConfig {
  /**
   * Timestamp tolerance in seconds (default: 300 = 5 minutes)
   * Used to prevent replay attacks
   */
  timestampToleranceSeconds?: number;
  /**
   * Enable debug logging in development
   */
  enableDebugLogs?: boolean;
}

/**
 * Parameters for webhook verification
 */
export interface VerificationParams {
  gateway: SupportedGateway;
  payload: string;
  signature: string;
  secret: string;
  config?: VerificationConfig;
}

/**
 * Interface for gateway-specific signature verifiers
 * Implement this for each payment gateway
 */
export interface SignatureVerifier {
  /**
   * Verify webhook signature for this gateway
   */
  verify(
    payload: string,
    signature: string,
    secret: string,
    config: Required<VerificationConfig>
  ): Promise<VerificationResult>;
}

/**
 * Parsed Stripe signature header
 * Format: t=timestamp,v1=signature
 */
export interface StripeSignatureHeader {
  timestamp: string;
  signature: string;
  version: "v1";
}
