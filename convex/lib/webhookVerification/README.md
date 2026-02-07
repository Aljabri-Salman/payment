# Webhook Signature Verification

Secure, extensible webhook signature verification system for payment gateways.

## 🎯 Overview

This module provides production-ready webhook signature verification with:

- ✅ **Security-first design** - Constant-time comparison prevents timing attacks
- ✅ **Type-safe** - Full TypeScript support with discriminated unions
- ✅ **Extensible** - Strategy pattern for easy gateway additions
- ✅ **Testable** - Separated concerns and dependency injection ready
- ✅ **Production-ready** - Proper error handling, logging, and configuration

## 📁 Directory Structure

```
webhookVerification/
├── index.ts                 # Main entry point & exports
├── types.ts                 # TypeScript type definitions
├── crypto.ts                # Reusable crypto utilities
├── config.ts                # Configuration constants
├── examples.ts              # Usage examples
├── README.md                # This file
├── __tests__/
│   └── crypto.test.ts       # Unit tests
└── verifiers/
    └── stripe.ts            # Stripe-specific implementation
```

## 🚀 Usage

### Basic Verification

```typescript
import { verifyWebhookSignature } from "@/convex/lib/webhookVerification";

const result = await verifyWebhookSignature({
  gateway: "stripe",
  payload: rawBody,
  signature: headers["stripe-signature"],
  secret: webhookSecret,
});

if (result.success) {
  // Signature is valid, process webhook
  await processWebhook(payload);
} else {
  // Signature verification failed
  console.error(`Verification failed: ${result.error}`);
}
```

### Custom Configuration

```typescript
const result = await verifyWebhookSignature({
  gateway: "stripe",
  payload: rawBody,
  signature: headers["stripe-signature"],
  secret: webhookSecret,
  config: {
    timestampToleranceSeconds: 600, // 10 minutes
    enableDebugLogs: true,
  },
});
```

## 🔐 Security Features

### 1. Constant-Time Comparison
Prevents timing attacks:
```typescript
// ❌ Vulnerable 
const isValid = computed === provided;

// ✅ Secure
const isValid = constantTimeCompare(computed, provided);
```

### 2. Replay Attack Protection
Validates timestamps (default: 5 minutes tolerance)

### 3. Input Validation
All inputs validated before processing

### 4. Safe Error Handling
No sensitive information leakage in logs

## ➕ Adding New Gateways

### Step 1: Update Types
In `convex/types.ts`:
```typescript
export type SupportedGateway = "stripe" | "hyperpay" | "newgateway";
```

### Step 2: Create Verifier
In `verifiers/newgateway.ts`:
```typescript
import type { SignatureVerifier } from "../types";
import { constantTimeCompare, computeHmacSha256 } from "../crypto";

export class NewGatewayVerifier implements SignatureVerifier {
  async verify(payload, signature, secret, config) {
    // Implementation
  }
}
```

### Step 3: Register
In `index.ts`:
```typescript
const VERIFIERS = {
  stripe: new StripeSignatureVerifier(),
  newgateway: new NewGatewayVerifier(), // Add here
};
```

## 🧪 Testing

Run unit tests:
```typescript
import { runAllTests } from "./webhookVerification/__tests__/crypto.test";
await runAllTests();
```

Test with Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/test/stripe
stripe trigger payment_intent.succeeded
```

## 📚 Documentation

- See [examples.ts](./examples.ts) for detailed usage examples
- See [types.ts](./types.ts) for type definitions
- See [crypto.ts](./crypto.ts) for utility functions

## 📊 API Reference

### `verifyWebhookSignature(params)`

Verify webhook signature for supported gateways.

**Parameters:**
- `gateway: SupportedGateway` - Payment gateway name
- `payload: string` - Raw request body
- `signature: string` - Signature header value
- `secret: string` - Webhook secret from gateway
- `config?: VerificationConfig` - Optional configuration

**Returns:** `Promise<VerificationResult>`
- `{ success: true }` - Verification passed
- `{ success: false, error: VerificationError }` - Verification failed

**Error Types:**
- `UNSUPPORTED_GATEWAY` - Gateway not implemented
- `INVALID_SIGNATURE_FORMAT` - Malformed signature
- `MISSING_TIMESTAMP` - Timestamp not found
- `TIMESTAMP_OUT_OF_TOLERANCE` - Timestamp too old/new
- `SIGNATURE_MISMATCH` - Signature doesn't match
- `INVALID_INPUT` - Empty or invalid parameters
- `CRYPTO_ERROR` - Cryptographic operation failed

## 🔧 Configuration

Default configuration in `config.ts`:
```typescript
{
  timestampToleranceSeconds: 300,    // 5 minutes
  enableDebugLogs: NODE_ENV === "development"
}
```

Override per-request:
```typescript
verifyWebhookSignature({
  // ...
  config: {
    timestampToleranceSeconds: 600,  // 10 minutes
    enableDebugLogs: true
  }
});
```

## 🏗️ Architecture

**Strategy Pattern** - Each gateway has its own verifier class implementing `SignatureVerifier` interface

**Separation of Concerns:**
1. **index.ts** - Orchestration & routing
2. **verifiers/*.ts** - Gateway-specific logic
3. **crypto.ts** - Reusable cryptographic functions
4. **types.ts** - Type definitions
5. **config.ts** - Constants

## 📈 Performance

- Constant-time comparison: O(n)
- HMAC computation: Native Web Crypto API
- Memory: Minimal allocations

## 🐛 Debugging

Enable detailed logs:
```typescript
config: { enableDebugLogs: true }
```

Logs include:
- Gateway name
- Signature/payload lengths
- Timestamp validation
- Comparison results

## ✅ Security Checklist

- [x] Constant-time signature comparison
- [x] Timestamp validation (replay protection)
- [x] Input validation
- [x] Safe error handling
- [x] Web Crypto API (not custom crypto)
- [x] No hardcoded secrets
- [x] Configurable parameters
- [x] Debug logging only in development

## 📖 References

- [Stripe Webhook Signatures](https://stripe.com/docs/webhooks/signatures)
- [OWASP Crypto Storage](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
- [Timing Attack Prevention](https://codahale.com/a-lesson-in-timing-attacks/)

---

**Part of Sooq Convex Payments Project**
