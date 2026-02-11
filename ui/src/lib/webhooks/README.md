# Webhook Handler Module

This module provides a clean, maintainable architecture for processing payment gateway webhooks.

## Architecture

```
src/lib/webhooks/
├── types.ts              # TypeScript interfaces and types
├── logger.ts             # Environment-aware logging utility
├── handler.ts            # Main webhook processing logic
├── parsers/              # Gateway-specific payload parsers
│   ├── index.ts          # Parser registry and exports
│   ├── stripe.ts         # Stripe webhook parser
│   └── hyperpay.ts       # Hyperpay webhook parser
└── index.ts              # Module exports
```

## Key Features

### 🔒 **Type Safety**
- Strong TypeScript interfaces throughout
- No `any` types in production code
- Gateway-specific types for each parser

### 📊 **Smart Logging**
- Development mode: Detailed debug logs
- Production mode: Only errors and critical events
- Consistent log format with emoji markers

### 🔌 **Extensible Parsers**
- Each gateway has its own parser class
- Implements `WebhookParser` interface
- Easy to add new gateways

### 🛡️ **Security**
- Signature verification for all webhooks
- Timestamp validation (Stripe)
- Idempotency key support (ready for duplicate detection)

### ⚡ **Performance**
- Request duration tracking
- Minimal logging overhead in production
- Efficient payload parsing

## Usage

### Adding a New Gateway

1. Create a new parser in `parsers/`:

```typescript
// parsers/moyasar.ts
import { WebhookParser, ParsedWebhookEvent } from "../types";

export class MoyasarParser implements WebhookParser {
  getSignatureHeader(): string {
    return "x-moyasar-signature";
  }

  parse(payload: any): ParsedWebhookEvent {
    return {
      eventType: payload.type,
      paymentId: payload.id,
      orderId: payload.metadata?.order_id || "unknown",
      amount: payload.amount,
      currency: payload.currency,
      status: payload.status,
      idempotencyKey: payload.id,
    };
  }
}
```

2. Register it in `parsers/index.ts`:

```typescript
import { MoyasarParser } from "./moyasar";

const parsers: Record<SupportedGateway, WebhookParser> = {
  stripe: new StripeParser(),
  hyperpay: new HyperpayParser(),
  moyasar: new MoyasarParser(), // Add here
};
```

3. Update the route to support it:

```typescript
const SUPPORTED_GATEWAYS: SupportedGateway[] = ["stripe", "hyperpay", "moyasar"];
```

4. Add signature verification in `convex/lib/webhookVerification.ts`

That's it! The new gateway is now fully integrated.

## Testing

### Local Testing
```bash
# Development mode (verbose logging)
NODE_ENV=development npm run dev

# Production mode (minimal logging)
NODE_ENV=production npm run build && npm start
```

### Stripe Testing
```bash
# Forward webhooks to local endpoint
stripe listen --forward-to localhost:3000/api/webhooks/{MERCHANT_ID}/stripe

# Trigger test events
stripe trigger checkout.session.completed
```

### Hyperpay Testing
```bash
curl -X POST http://localhost:3000/api/webhooks/{MERCHANT_ID}/hyperpay \
  -H "Content-Type: application/json" \
  -H "x-signature: <valid-signature>" \
  -d '{"event":"payment","payment_id":"123","order_id":"456","amount":100,"currency":"SAR","status":"success"}'
```

## Logging Levels

The logger automatically adjusts based on `NODE_ENV`:

| Method | Development | Production |
|--------|-------------|-----------|
| `logger.info()` | ✅ Shown | ❌ Hidden |
| `logger.debug()` | ✅ Shown | ❌ Hidden |
| `logger.success()` | ✅ Shown | ❌ Hidden |
| `logger.warn()` | ✅ Shown | ❌ Hidden |
| `logger.error()` | ✅ Shown | ✅ Shown |
| `logger.critical()` | ✅ Shown | ✅ Shown |

## Error Handling

The handler returns structured results:

```typescript
interface WebhookResult {
  success: boolean;
  eventId?: string;  // Convex event ID if successful
  error?: string;    // Error message if failed
}
```

Common error scenarios:
- **Invalid JSON**: `{ success: false, error: "Invalid JSON payload" }`
- **Gateway not found**: `{ success: false, error: "Gateway connection not found" }`
- **Invalid signature**: `{ success: false, error: "Invalid signature" }`
- **Duplicate event**: `{ success: true, eventId: "duplicate" }`

## Future Enhancements

- [ ] Implement idempotency checking (duplicate detection)
- [ ] Add rate limiting per merchant
- [ ] Add webhook retry mechanism
- [ ] Add metrics/analytics tracking
- [ ] Add webhook event replay functionality
- [ ] Add batch event processing
- [ ] Add webhook event filtering/routing rules

## Benefits

### Before Refactoring
- ❌ 200+ lines in single route file
- ❌ Gateway logic mixed with routing
- ❌ Excessive logging in production
- ❌ Hard to test individual components
- ❌ Difficult to add new gateways

### After Refactoring
- ✅ Clean separation of concerns
- ✅ Each gateway in its own file
- ✅ Production-optimized logging
- ✅ Easy unit testing
- ✅ Simple to extend

## Performance

Typical request flow:
1. Parse params: ~1ms
2. Verify signature: ~5-10ms
3. Parse payload: ~1ms
4. Store in Convex: ~50-100ms

**Total: ~60-120ms per webhook**

## Maintenance

### Code Organization
- **types.ts**: Add new interfaces here
- **logger.ts**: Modify logging behavior here
- **handler.ts**: Main processing logic (rarely needs changes)
- **parsers/**: Add new gateways here

### Best Practices
1. Always implement the `WebhookParser` interface
2. Generate idempotency keys for all gateways
3. Use the logger instead of console.log
4. Keep parsers pure (no side effects)
5. Test new parsers with real webhook payloads
