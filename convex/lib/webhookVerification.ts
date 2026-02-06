/**
 * Verify Hyperpay webhook signature using Web Crypto API (SubtleCrypto).
 *
 * @param payload - Raw request body as string
 * @param signature - X-Signature header value (hex string)
 * @param secret - Webhook secret from Hyperpay
 * @returns Promise<boolean> true if signature is valid
 */
export async function verifyWebhookSignature(
  _gateway: string, // ignored, only Hyperpay supported
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  try {
    // Convert secret to ArrayBuffer
    const enc = new TextEncoder();
    const keyData = enc.encode(secret);
    // Import the key for HMAC-SHA256
    const cryptoKey = await globalThis.crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign', 'verify']
    );
    // Encode the payload
    const data = enc.encode(payload);
    // Compute the HMAC signature (ArrayBuffer)
    const sigBuffer = await globalThis.crypto.subtle.sign('HMAC', cryptoKey, data);
    // Convert computed signature to hex string
    const computedSignature = Array.from(new Uint8Array(sigBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    // Compare with provided signature (case-insensitive)
    return computedSignature.toLowerCase() === signature.toLowerCase();
  } catch (error) {
    console.error('Hyperpay signature verification error:', error);
    return false;
  }
}
