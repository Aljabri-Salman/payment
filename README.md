# Payment Webhook & Reconciliation Platform

> A unified webhook receiver and payment reconciliation system for merchants managing multiple payment gateways.

[![Security](https://img.shields.io/badge/Security-AES--256--GCM-green)]()
[![Stack](https://img.shields.io/badge/Stack-Convex%20%2B%20Next.js-blue)]()
[![Runtime](https://img.shields.io/badge/Runtime-Bun-orange)]()

---

## 🎯 Project Goal

Build a reliable, unified platform that serves as a **single source of truth** for payment events across multiple payment gateways. The system provides merchants with complete visibility into payment flows, automated reconciliation, and forensic audit trails.

---

## 🔥 Problem Statement

Merchants using payment gateways face critical operational challenges:

### Current Pain Points

| Problem | Impact | Our Solution |
|---------|--------|--------------|
| **Gateway Inconsistency** | Different payloads for same event type | Unified normalization layer |
| **Webhook Failures** | Lost events due to network/server issues | Immutable event storage + replay |
| **Duplicate Events** | Gateway retries cause duplicates | Idempotency keys |
| **Out-of-Order Events** | Events arrive in wrong sequence | Timeline reconstruction |
| **Partial Failures** | Payment succeeds but confirmation lost | Comprehensive event tracking |
| **Reconciliation Hell** | Manual CSV matching with settlements | Automated reconciliation engine |
| **Refund Complexity** | Separate tracking, easy to miss | First-class refund events |
| **No Audit Trail** | Disputes rely on screenshots/logs | Immutable forensic evidence |
| **Multi-Gateway Chaos** | Data scattered across platforms | Unified dashboard & API |

### Business Impact

- ❌ **Revenue Leakage**: Lost payments due to webhook failures
- ❌ **Support Burden**: Manual investigation of payment disputes
- ❌ **Accounting Delays**: Hours spent matching payments to settlements
- ❌ **Risk Exposure**: No audit trail during disputes or chargebacks

---

## ✨ Core Features

### MVP Scope (Current Phase)

#### 1. **Webhook Receiver** 📥
- ✅ Accept webhooks from Hyperpay (focused gateway for Saudi Arabia)
- ✅ Dynamic routing based on gateway type
- ✅ Raw payload preservation for forensic analysis
- ⚠️ Currently focused on Hyperpay only; other gateways (Moyasar, Tap, Checkout) can be added later

#### 2. **Security & Verification** 🔐
- ✅ Signature verification using Web Crypto API (HMAC-SHA256)
- ✅ AES-256-GCM encryption for webhook secrets at rest
- ✅ Master key stored in Convex environment variables
- ✅ Key rotation support for long-term security

#### 3. **Event Storage** 💾
- ✅ **Immutable event log**: Every webhook stored permanently
- ✅ **Complete audit trail**: Full history of all payment state changes
- ✅ **No data loss**: Even failed webhooks are logged
- ⏳ **Replay capability**: Re-send events to merchant endpoints (planned)

#### 4. **Normalization Layer** 🔄
- ✅ Convert Hyperpay-specific payloads to unified format
- ✅ Consistent event types across all gateways
- ✅ Standardized currency, amount, and status fields
- ✅ Preserve original payload for debugging

#### 5. **Idempotency** 🛡️
- ✅ Schema supports unique event identification
- ⏳ Prevent duplicate event processing (implementation needed)
- ⏳ Handle gateway retries gracefully (implementation needed)

#### 6. **Payment Timeline** 📊
- ⏳ Visual timeline of all events per payment (UI needed)
- ✅ Backend query support for payment history
- ⏳ Track full lifecycle: authorized → captured → settled → refunded
- ⏳ See exact timestamps and state transitions

#### 7. **Refund Management** 💸
- ⏳ Track refunds as first-class events (implementation needed)
- ⏳ Link refunds to original payments
- ⏳ Full/partial refund support
- ⏳ Refund status tracking

#### 8. **Reconciliation Engine** ⚖️
- ⏳ **MVP**: Manual CSV import for settlement matching (not started)
- ⏳ Match payments with bank settlement reports
- ⏳ Identify discrepancies and missing payments
- ⏳ Export reconciliation reports

---

## 🏗️ Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Payment Gateways                         │
│  (Stripe, PayPal, Razorpay, Hyperpay, Moyasar, Tap, etc.)  │
└────────────────────┬────────────────────────────────────────┘
                     │ Webhooks (HTTPS)
                     ↓
┌─────────────────────────────────────────────────────────────┐
│               Webhook Receiver (Next.js API Routes)          │
│  • Signature verification                                    │
│  • Raw payload capture                                       │
│  • Gateway routing                                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────┐
│                    Convex Backend                            │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  Raw Events  │  │ Normalized   │  │ Settlements  │     │
│  │   Storage    │→ │   Events     │→ │ Reconciliation│    │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Merchants  │  │   Gateway    │  │    Replay    │     │
│  │              │  │ Connections  │  │     Logs     │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────┐
│              Merchant Dashboard (Next.js + Mantine)          │
│  • Payment timeline view                                     │
│  • Reconciliation interface                                  │
│  • Gateway connection management                             │
│  • Refund tracking                                           │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

```
1. Webhook arrives → Verify signature
2. Store raw event → Immutable log
3. Normalize payload → Unified format
4. Check idempotency → Prevent duplicates
5. Update payment state → State machine
6. Trigger merchant webhook → Notify merchant system
7. Log replay event → Audit trail
```

---

## 🛠️ Tech Stack

### Backend & Database
- **[Convex](https://convex.dev)** - Serverless backend with real-time database
  - Event storage with automatic indexing
  - Mutations for data writes
  - Actions for external API calls
  - Real-time subscriptions for live updates

### Frontend
- **[Next.js 16](https://nextjs.org)** - React framework with App Router
- **[Mantine UI](https://mantine.dev)** - Modern component library
- **[TypeScript](https://www.typescriptlang.org)** - Type safety

### Runtime & Tooling
- **[Bun](https://bun.sh)** - Fast JavaScript runtime
- **bunx** - Package runner for CLI tools

### Security
- **AES-256-GCM** - Authenticated encryption for webhook secrets
- **HMAC Signature Verification** - Webhook authenticity validation
- **Environment Variables** - Secure key storage

---

## 📁 Project Structure

```
convex/payments/
├── convex/                      # Convex backend
│   ├── schema.ts               # Database schema
│   ├── types.ts                # TypeScript types
│   ├── validators.ts           # Input validation
│   ├── lib/
│   │   └── encryption.ts       # AES-256-GCM encryption utilities
│   ├── mutations/
│   │   └── storeEvent.ts       # Store webhook events
│   ├── migrations/
│   │   └── rotateEncryptionKeys.ts  # Key rotation tools
│   └── _generated/             # Auto-generated Convex files
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── webhooks/
│   │   │       └── [gateway]/
│   │   │           └── route.ts  # Webhook receiver endpoints
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/             # React components
│
├── scripts/
│   └── test-encryption.ts      # Encryption test suite
│
├── docs/
│   └── ENCRYPTION.md           # Encryption documentation
│
├── public/                      # Static assets
├── package.json
├── tsconfig.json
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Bun** 1.0+ installed ([install instructions](https://bun.sh))
- **Convex account** ([sign up](https://convex.dev))
- **Node.js** 18+ (for Next.js)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd convex/payments

# Install dependencies
bun install

# Set up Convex
bunx convex dev

# Generate master encryption key
bunx convex env set ENCRYPTION_SECRET_KEY=$(openssl rand -base64 32)

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Configuration

#### 1. Environment Variables

Set up your Convex environment:

```bash
# Required for encryption
bunx convex env set ENCRYPTION_SECRET_KEY=$(openssl rand -base64 32)

# Optional: Additional keys for rotation
bunx convex env set ENCRYPTION_SECRET_KEY_V2=$(openssl rand -base64 32)
```

#### 2. Gateway Webhook URLs

Configure Hyperpay to send webhooks to:

```
https://your-domain.com/api/webhooks/hyperpay
```

**Custom Header Required:** Add `X-Merchant-Id` header with your merchant ID to identify the merchant account.

**Local Testing with ngrok:**
```bash
# Expose your local server
ngrok http 3000

# Use the ngrok URL in Hyperpay dashboard
https://your-ngrok-id.ngrok.io/api/webhooks/hyperpay
```

#### 3. Test Encryption

```bash
# Set key temporarily for testing
export ENCRYPTION_SECRET_KEY=$(bunx convex env get ENCRYPTION_SECRET_KEY)

# Run tests
bun run scripts/test-encryption.ts
```

---

## 📊 Database Schema

### Core Tables

#### `merchants`
- Merchant accounts using the platform
- Status: ACTIVE | SUSPENDED

#### `gatewayConnections`
- Links merchants to payment gateways
- Stores encrypted webhook secrets
- Gateway types: hyperpay | moyasar | tap | checkout

#### `paymentEvents`
- Raw webhook events from gateways
- Immutable audit log
- Includes signature, payload, processing status

---

## 🔐 Security Features

### Encryption at Rest

All webhook secrets are encrypted using **AES-256-GCM**:

- **Algorithm**: NIST-approved, FIPS 140-2 compliant
- **Key Size**: 256 bits (32 bytes)
- **Mode**: Galois/Counter Mode with authentication
- **Protection**: Prevents tampering, detects modifications

See [docs/ENCRYPTION.md](docs/ENCRYPTION.md) for details.

### Webhook Signature Verification

Every incoming webhook is verified:

1. Extract signature from headers
2. Compute HMAC using webhook secret
3. Compare signatures (constant-time)
4. Reject if mismatch

### Planned Security Enhancements

**Before Production:**
- **Rate Limiting**: Prevent abuse and DoS attacks on webhook endpoints
- **Request Size Validation**: Limit payload size to prevent large payload attacks
- **Enhanced Audit Logging**: Detailed logging of all authentication attempts
- **IP Whitelisting**: Optional, if gateway provides static IPs (signature verification is primary defense)

### Key Rotation

Built-in support for encryption key rotation:

- Multiple key versions supported simultaneously
- Zero-downtime rotation
- Migration tools included
- Recommended every 6-12 months

---

## 📈 Current Status

### ✅ Phase 1: Backend Infrastructure (COMPLETED)

**Core Backend:**
- [x] Project architecture designed
- [x] Database schema defined (merchants, gatewayConnections, paymentEvents)
- [x] Encryption system implemented (AES-256-GCM with Web Crypto API)
- [x] Key rotation mechanism built
- [x] Test suite (encryption tests passing)
- [x] Documentation (encryption guide)

**Webhook Processing:**
- [x] Webhook receiver implementation (Hyperpay)
- [x] Signature verification using Web Crypto API (async HMAC-SHA256)
- [x] Event storage mutations (storeEvent)
- [x] Normalization layer (Hyperpay payload parsing)

**Data Management:**
- [x] Gateway connections management (mutations & queries)
- [x] Merchant management (mutations & queries)

### ✅ Phase 2: Authentication & UI Foundation (COMPLETED)

**Authentication:**
- [x] Better Auth integration with Convex
- [x] Email/password authentication
- [x] Auth pages (login, signup)
- [x] AuthGuard for protected routes
- [x] Auth client and server utilities

**UI Framework:**
- [x] Mantine UI library integration
- [x] App layout with sidebar and header
- [x] Responsive navigation
- [x] Internationalization (i18n) with English and Arabic support
- [x] State management with Zustand (merchant selection)

**Core Pages:**
- [x] Merchant dashboard with stats cards
- [x] Merchants management page (CRUD operations)
- [x] Gateway connections display
- [x] Home page with auto-routing logic

**Components:**
- [x] AppLayout (sidebar + header + main content)
- [x] Header with user menu and locale switcher
- [x] Sidebar with navigation
- [x] MerchantButton component
- [x] UserButton component
- [x] MerchantDashboard component

### 🚧 Phase 3: Payment Management UI (IN PROGRESS)

**Priority: Payment Events & Timeline**
- [ ] Payment events list page with filtering
- [ ] Payment timeline/details view
- [ ] Event viewer for raw webhooks
- [ ] Status tracking and visualization
- [ ] Search and export functionality

**Priority: Gateway Management**
- [ ] Gateway connection creation form
- [ ] Edit gateway credentials
- [ ] Webhook secret management UI
- [ ] Test connection functionality
- [ ] Gateway status monitoring

### 📋 Phase 4: Advanced Features (UPCOMING)

**Idempotency & Reliability**
- [ ] Implement duplicate event detection
- [ ] Add retry mechanism for failed webhook processing
- [ ] Handle out-of-order events
- [ ] Event replay functionality

**Reconciliation**
- [ ] CSV upload interface
- [ ] Automated matching logic
- [ ] Discrepancy highlighting
- [ ] Reconciliation reports
- [ ] Export functionality

**Refund Tracking**
- [ ] Refund event processing
- [ ] Link refunds to original payments
- [ ] Full/partial refund support
- [ ] Refund status tracking

### 🚀 Phase 5: Production Readiness (PLANNED)

**Testing & Deployment**
- [ ] Deploy to Vercel/production
- [ ] Test with real Hyperpay webhooks
- [ ] End-to-end integration testing
- [ ] Performance monitoring setup

**Security Hardening**
- [ ] Add rate limiting on webhook endpoints
- [ ] Implement request size validation
- [ ] Enhanced audit logging
- [ ] Security audit and penetration testing

**Additional Gateways**
- [ ] Add Moyasar support
- [ ] Add Tap support
- [ ] Add Checkout.com support

**Advanced Features**
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Webhook delivery retry management
- [ ] API for third-party integrations

---

## 🎯 Updated Roadmap (February 2026)

### Phase 1: Core Infrastructure ✅ **COMPLETED**
- ✅ Encryption system (AES-256-GCM)
- ✅ Webhook receiver (Hyperpay)
- ✅ Event storage with immutable log
- ✅ Normalization layer
- ✅ Database schema
- ✅ Signature verification

### Phase 2: Authentication & UI Foundation ✅ **COMPLETED**
- ✅ Better Auth integration
- ✅ Login/signup pages
- ✅ App layout with sidebar/header
- ✅ Mantine UI library
- ✅ Merchant dashboard (basic)
- ✅ Merchant management (CRUD)
- ✅ Internationalization (en/ar)
- ✅ State management (Zustand)

### Phase 3: Payment Management UI 🚧 **CURRENT FOCUS**
**Target: Complete by end of February 2026**
- [ ] Payment events list page
- [ ] Payment timeline/details view
- [ ] Gateway connection forms (add/edit)
- [ ] Event viewer (raw webhooks)
- [ ] Search and filtering
- [ ] Export functionality

### Phase 4: Core Features Enhancement 📋 **NEXT UP**
**Target: March 2026**
- [ ] Idempotency implementation
- [ ] Event replay mechanism
- [ ] Refund tracking
- [ ] Basic reconciliation interface
- [ ] CSV import for settlements
- [ ] Webhook delivery monitoring

### Phase 5: Production Readiness 🚀 **Q2 2026**
- [ ] Security hardening (rate limiting, size validation)
- [ ] Deploy to production
- [ ] Real webhook testing
- [ ] Performance optimization
- [ ] Comprehensive monitoring
- [ ] Documentation updates

### Phase 6: Scale & Expand 🌟 **Q3 2026**
- [ ] Additional gateways (Moyasar, Tap, Checkout)
- [ ] Advanced reconciliation
- [ ] Dispute management
- [ ] Analytics dashboard
- [ ] API for integrations
- [ ] Multi-merchant support enhancements

---

## 🧪 Testing

### Run Encryption Tests

```bash
# Set environment variable
export ENCRYPTION_SECRET_KEY=$(bunx convex env get ENCRYPTION_SECRET_KEY)

# Run tests
bun run scripts/test-encryption.ts
```

**Expected output:**
- ✅ Basic encryption/decryption
- ✅ Randomness verification
- ✅ Tamper detection
- ✅ Error handling
- ✅ Unicode support
- ✅ Performance benchmarks

### Test Webhook Endpoint

**Option 1: Local Testing with curl**

Generate a valid signature:
```bash
# Generate signature for testing
node -e "const crypto = require('crypto'); const secret = 'your_webhook_secret'; const payload = '{\"event\":\"payment\",\"payment_id\":\"123\",\"order_id\":\"456\",\"amount\":100,\"currency\":\"SAR\",\"status\":\"success\"}'; const sig = crypto.createHmac('sha256', secret).update(payload).digest('hex'); console.log(sig);"

# Test webhook
curl -X POST http://localhost:3000/api/webhooks/hyperpay \
  -H "Content-Type: application/json" \
  -H "x-merchant-id: test-merchant-123" \
  -H "x-signature: <generated-signature>" \
  -d '{"event":"payment","payment_id":"123","order_id":"456","amount":100,"currency":"SAR","status":"success"}'
```

**Option 2: Real Hyperpay Testing**

1. Deploy or expose your local server with ngrok:
   ```bash
   ngrok http 3000
   ```
2. Configure the ngrok URL in your Hyperpay dashboard
3. Trigger a test payment in Hyperpay
4. Check your Convex database for stored events

---

## 📚 Documentation

- **[ENCRYPTION.md](docs/ENCRYPTION.md)** - Encryption system guide
- **[convex/lib/encryption.ts](convex/lib/encryption.ts)** - Implementation with inline docs
- **[convex/schema.ts](convex/schema.ts)** - Database schema

---

## 🔗 Resources

- [Convex Documentation](https://docs.convex.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Mantine UI Components](https://mantine.dev)
- [Bun Documentation](https://bun.sh/docs)

---

**Built with ❤️ for merchants who deserve better payment infrastructure**
