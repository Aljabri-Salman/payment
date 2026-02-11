import type {
  SignatureVerifier,
  VerificationResult,
  VerificationConfig,
  StripeSignatureHeader,
} from "../types";
import {
  constantTimeCompare,
  computeHmacSha256,
  validateInputs,
  isTimestampValid,
} from "../crypto";

/**
 * Stripe webhook signature verifier.
 * 
 * Stripe uses HMAC-SHA256 with the following format:
 * - Signature header: "t=<timestamp>,v1=<signature>"
 * - Signed payload: "<timestamp>.<raw_body>"
 * 
 * Security features:
 * - Timestamp validation to prevent replay attacks
 * - Constant-time signature comparison to prevent timing attacks
 * 
 * @see https://stripe.com/docs/webhooks/signatures
 */
export class StripeSignatureVerifier implements SignatureVerifier {
  private readonly SIGNATURE_VERSION = "v1";

  /**
   * Verify Stripe webhook signature.
   * 
   * @param payload - Raw request body as string
   * @param signatureHeader - Value of "Stripe-Signature" header
   * @param secret - Webhook signing secret from Stripe dashboard
   * @param config - Verification configuration
   * @returns VerificationResult with success status or specific error
   */
  async verify(
    payload: string,
    signatureHeader: string,
    secret: string,
    config: Required<VerificationConfig>
  ): Promise<VerificationResult> {
    // Validate inputs
    if (!validateInputs({ payload, signatureHeader, secret })) {
      return { success: false, error: "INVALID_INPUT" };
    }

    try {
      // Parse signature header
      const parsed = this.parseSignatureHeader(signatureHeader);
      if (!parsed) {
        this.logDebug("Failed to parse signature header", config);
        return { success: false, error: "INVALID_SIGNATURE_FORMAT" };
      }

      this.logDebug(
        `Parsed signature - timestamp: ${parsed.timestamp}, version: ${parsed.version}`,
        config
      );

      // Validate timestamp
      const timestampNum = parseInt(parsed.timestamp, 10);
      if (isNaN(timestampNum)) {
        this.logDebug("Invalid timestamp format", config);
        return { success: false, error: "INVALID_SIGNATURE_FORMAT" };
      }

      if (
        !isTimestampValid(timestampNum, config.timestampToleranceSeconds)
      ) {
        const currentTime = Math.floor(Date.now() / 1000);
        const timeDiff = Math.abs(currentTime - timestampNum);
        this.logDebug(
          `Timestamp out of tolerance: ${timeDiff}s (max: ${config.timestampToleranceSeconds}s)`,
          config
        );
        return { success: false, error: "TIMESTAMP_OUT_OF_TOLERANCE" };
      }

      // Compute expected signature
      const signedPayload = this.constructSignedPayload(
        parsed.timestamp,
        payload
      );
      const computedSignature = await computeHmacSha256(
        signedPayload,
        secret
      );

      // Constant-time comparison
      const isValid = constantTimeCompare(
        computedSignature,
        parsed.signature
      );

      this.logDebug(`Signature validation: ${isValid ? "✓ PASS" : "✗ FAIL"}`, config);

      if (!isValid) {
        return { success: false, error: "SIGNATURE_MISMATCH" };
      }

      return { success: true };
    } catch (error) {
      console.error("[StripeVerifier] Crypto error:", error);
      return { success: false, error: "CRYPTO_ERROR" };
    }
  }

  /**
   * Parse Stripe signature header.
   * 
   * Format: "t=<timestamp>,v1=<signature>[,v1=<signature>...]"
   * 
   * Note: Stripe may include multiple v1 signatures if you've rolled
   * your webhook secret. We use the first v1 signature.
   * 
   * @param header - Stripe-Signature header value
   * @returns Parsed signature components or null if invalid
   */
  private parseSignatureHeader(
    header: string
  ): StripeSignatureHeader | null {
    const elements = header.split(",");
    const signatureMap: Record<string, string> = {};

    for (const element of elements) {
      const [key, value] = element.split("=");
      if (key && value && !signatureMap[key]) {
        // Store first occurrence of each key
        signatureMap[key] = value;
      }
    }

    const timestamp = signatureMap.t;
    const signature = signatureMap[this.SIGNATURE_VERSION];

    if (!timestamp || !signature) {
      return null;
    }

    return {
      timestamp,
      signature,
      version: this.SIGNATURE_VERSION,
    };
  }

  /**
   * Construct the signed payload that Stripe uses for signature.
   * 
   * @param timestamp - Unix timestamp from signature header
   * @param payload - Raw webhook body
   * @returns Signed payload string
   */
  private constructSignedPayload(timestamp: string, payload: string): string {
    return `${timestamp}.${payload}`;
  }

  /**
   * Log debug message if debug logging is enabled.
   */
  private logDebug(message: string, config: Required<VerificationConfig>): void {
    if (config.enableDebugLogs) {
      console.log(`[StripeVerifier] ${message}`);
    }
  }
}

