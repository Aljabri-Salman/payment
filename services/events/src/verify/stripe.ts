import crypto from 'crypto';
import type { Verifier, VerificationResult } from './interface';
import { SignatureVerificationError } from './interface';

export class StripeVerifier implements Verifier {
  readonly gatewayType = 'stripe';
  private readonly timestampToleranceSeconds = 300; // 5 minutes

  async verify(payload: string | object, headers: Headers, secret: string): Promise<VerificationResult> {
    const signatureHeader = headers.get('stripe-signature');

    if (!signatureHeader) {
      return {
        isValid: false,
        error: 'Missing stripe-signature header',
      };
    }

    try {
      // Validate secret
      if (!secret || typeof secret !== 'string' || secret.trim().length === 0) {
        return {
          isValid: false,
          error: 'Invalid webhook secret',
        };
      }

      const payloadString = typeof payload === 'string' ? payload : JSON.stringify(payload);
      const isValid = this.verifySignature(payloadString, signatureHeader, secret);

      if (!isValid) {
        return {
          isValid: false,
          error: 'Invalid Stripe signature - no matching signature found',
        };
      }

      // Parse payload only if verification succeeded
      let parsedPayload: unknown;
      try {
        parsedPayload = JSON.parse(payloadString);
      } catch (parseError) {
        // If payload is not valid JSON but signature is valid, return the raw string
        parsedPayload = payloadString;
      }

      return {
        isValid: true,
        payload: parsedPayload,
      };
    } catch (error) {
      if (error instanceof SignatureVerificationError) {
        return {
          isValid: false,
          error: `Signature verification failed: ${error.message}`,
        };
      }

      return {
        isValid: false,
        error: error instanceof Error ? `Verification error: ${error.message}` : 'Unknown verification error',
      };
    }
  }



  private parseSignatureHeader(signatureHeader: string): Record<string, string> {
    const signatureMap: Record<string, string> = {};
    const elements = signatureHeader.split(',');

    for (const element of elements) {
      const separatorIndex = element.indexOf('=');
      if (separatorIndex === -1) {
        continue;
      }

      const key = element.substring(0, separatorIndex).trim();
      const value = element.substring(separatorIndex + 1).trim();
      
      if (key && value) {
        signatureMap[key] = value;
      }
    }

    return signatureMap;
  }

  private verifySignature(payload: string, signatureHeader: string, secret: string): boolean {
    // Parse the signature header (format: t=timestamp,v1=signature,v0=signature)
    const signatureMap = this.parseSignatureHeader(signatureHeader);

    const timestamp = signatureMap.t;
    
    if (!timestamp) {
      throw new SignatureVerificationError('Missing timestamp in signature header');
    }

    // Check if timestamp is within tolerance
    const currentTime = Math.floor(Date.now() / 1000);
    const timestampNum = parseInt(timestamp, 10);
    
    if (isNaN(timestampNum)) {
      throw new SignatureVerificationError('Invalid timestamp format');
    }

    // Allow tolerance for clock skew
    if (Math.abs(currentTime - timestampNum) > this.timestampToleranceSeconds) {
      throw new SignatureVerificationError(`Timestamp outside tolerance window (${this.timestampToleranceSeconds} seconds)`);
    }

    const signedPayload = `${timestamp}.${payload}`;

    // Generate expected signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(signedPayload, 'utf8')
      .digest('hex');

    // Check all signature versions (v1, v0, v0=1)
    const signatureVersions = ['v1', 'v0', 'v0=1'];
    
    for (const version of signatureVersions) {
      const providedSignature = signatureMap[version];
      if (providedSignature) {
        try {
          // Compare signatures using timing-safe comparison
          const expectedBuffer = Buffer.from(expectedSignature, 'hex');
          const providedBuffer = Buffer.from(providedSignature, 'hex');
          
          if (expectedBuffer.length === providedBuffer.length && 
              crypto.timingSafeEqual(expectedBuffer, providedBuffer)) {
            return true;
          }
        } catch (error) {
          // Continue to next signature version if comparison fails
          continue;
        }
      }
    }

    return false;
  }
}
