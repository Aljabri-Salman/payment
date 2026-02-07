/**
 * Crypto utilities for webhook signature verification
 * 
 * This module provides secure cryptographic functions including:
 * - Constant-time string comparison (prevents timing attacks)
 * - HMAC-SHA256 signature computation
 * - Hex encoding utilities
 */

/**
 * Constant-time string comparison to prevent timing attacks.
 * 
 * Regular string comparison (===) can leak information about the
 * correct value through timing analysis. This function ensures
 * comparison always takes the same time regardless of where
 * strings differ.
 * 
 * @param a - First string to compare
 * @param b - Second string to compare
 * @returns true if strings are equal, false otherwise
 * 
 * @example
 * ```ts
 * const isValid = constantTimeCompare(
 *   computedSignature,
 *   providedSignature
 * );
 * ```
 */
export function constantTimeCompare(a: string, b: string): boolean {
  // Early return for length mismatch (safe, as length is public)
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    // XOR will be 0 only if characters match
    // Bitwise OR accumulates any differences
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  // result will be 0 only if all characters matched
  return result === 0;
}

/**
 * Compute HMAC-SHA256 signature and return as hex string.
 * 
 * @param data - Data to sign (will be UTF-8 encoded)
 * @param secret - Secret key for HMAC (will be UTF-8 encoded)
 * @returns Promise<string> Hex-encoded signature
 * 
 * @throws Error if Web Crypto API is not available or crypto operation fails
 * 
 * @example
 * ```ts
 * const signature = await computeHmacSha256(
 *   "timestamp.payload",
 *   "webhook_secret"
 * );
 * ```
 */
export async function computeHmacSha256(
  data: string,
  secret: string
): Promise<string> {
  const encoder = new TextEncoder();

  // Import the secret as a crypto key
  const keyData = encoder.encode(secret);
  const cryptoKey = await globalThis.crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  // Compute HMAC signature
  const dataBuffer = encoder.encode(data);
  const signatureBuffer = await globalThis.crypto.subtle.sign(
    "HMAC",
    cryptoKey,
    dataBuffer
  );

  // Convert to hex string
  return bufferToHex(signatureBuffer);
}

/**
 * Convert ArrayBuffer to hex string.
 * 
 * @param buffer - ArrayBuffer to convert
 * @returns Hex-encoded string (lowercase)
 * 
 * @example
 * ```ts
 * const hex = bufferToHex(signatureBuffer);
 * // Returns: "a1b2c3d4..."
 * ```
 */
export function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Validate that required inputs are non-empty strings.
 * 
 * @param inputs - Object with named string inputs to validate
 * @returns true if all inputs are non-empty strings
 * 
 * @example
 * ```ts
 * if (!validateInputs({ payload, signature, secret })) {
 *   return { success: false, error: "INVALID_INPUT" };
 * }
 * ```
 */
export function validateInputs(inputs: Record<string, unknown>): boolean {
  return Object.values(inputs).every(
    (value) => typeof value === "string" && value.length > 0
  );
}

/**
 * Check if timestamp is within acceptable tolerance.
 * 
 * @param timestamp - Unix timestamp (seconds)
 * @param toleranceSeconds - Maximum allowed time difference
 * @returns true if timestamp is within tolerance
 * 
 * @example
 * ```ts
 * const isRecent = isTimestampValid(1234567890, 300);
 * ```
 */
export function isTimestampValid(
  timestamp: number,
  toleranceSeconds: number
): boolean {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeDiff = Math.abs(currentTime - timestamp);
  return timeDiff <= toleranceSeconds;
}
