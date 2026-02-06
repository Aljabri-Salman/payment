# MerchantDashboard Component

A modular dashboard component for managing merchants and their payment gateway connections.

## Structure

```
MerchantDashboard/
├── index.ts                      # Main export
├── types.ts                      # TypeScript type definitions
├── MerchantDashboard.tsx         # Main dashboard component
├── EmptyState.tsx                # No merchants state
├── SelectMerchantPrompt.tsx      # No merchant selected state
├── MerchantNotFound.tsx          # Merchant not found state
├── DashboardHeader.tsx           # Merchant header with name and status
├── QuickStats.tsx                # Statistics cards
├── GatewayConnectionsSection.tsx # Gateway connections list
└── GatewayConnectionForm.tsx     # Form for adding gateway connections
```

## Components

### MerchantDashboard (Main)
The main orchestrator component that handles loading states and conditionally renders appropriate child components.

**Props:**
- `merchantId?: Id<'merchants'>` - Optional merchant ID to display

### EmptyState
Shown when user has no merchants yet. Prompts user to create their first merchant.

### SelectMerchantPrompt
Shown when user has merchants but none is currently selected.

### MerchantNotFound
Shown when selected merchant doesn't exist.

### DashboardHeader
Displays merchant name, creation date, and status badge.

**Props:**
- `merchant: Merchant` - The merchant to display

### QuickStats
Three statistic cards showing:
1. Total payment events
2. Gateway connections count
3. Merchant status

**Props:**
- `gatewayConnectionsCount: number` - Number of connected gateways
- `merchantStatus: MerchantStatus` - Current merchant status

### GatewayConnectionsSection
Lists all gateway connections with the ability to add new ones.

**Props:**
- `gatewayConnections: GatewayConnectionDisplay[]` - Array of gateway connections
- `merchantId: Id<'merchants'>` - The merchant ID

### GatewayConnectionForm
Form for adding new gateway connections.

**Props:**
- `merchantId: Id<'merchants'>` - The merchant to connect gateway to
- `onSuccess?: () => void` - Callback after successful creation
- `onCancel?: () => void` - Callback when user cancels

**Supported Gateways:**
- HyperPay (`hyperpay`)
- Moyasar (`moyasar`)
- Tap Payments (`tap`)
- Checkout.com (`checkout`)

## Features

✅ **Type Safety** - Full TypeScript support with proper types from schema  
✅ **Internationalization** - Support for English and Arabic with RTL  
✅ **Modular Design** - Small, focused components  
✅ **Loading States** - Proper loading indicators  
✅ **Error Handling** - Comprehensive error messages  
✅ **Form Validation** - Client-side validation with user feedback  
✅ **Secure** - Webhook secrets encrypted at rest  

## Types

All types are exported from `types.ts` and reference the schema types from `@/convex/types`.

Key types:
- `Gateway` - Union type of supported gateways
- `Merchant` - Merchant document type
- `MerchantStatus` - Status enum ("ACTIVE" | "SUSPENDED")
- `GatewayConnectionDisplay` - Safe gateway connection without decrypted secrets

## Translations

Translation keys are defined in:
- `messages/en.json` - English translations
- `messages/ar.json` - Arabic translations

Under namespaces:
- `MerchantDashboard` - Dashboard-specific translations
- `GatewayConnectionForm` - Form-specific translations

## Usage

```tsx
import { MerchantDashboard } from '@/components/MerchantDashboard';

// With merchant ID from route
<MerchantDashboard merchantId={merchantId} />

// Without merchant ID (uses store)
<MerchantDashboard />
```

## Data Flow

1. Main component queries merchants and selected merchant data
2. Passes data down to child components as props
3. Form submission triggers Convex mutation
4. On success, query automatically refetches via Convex reactivity
5. UI updates automatically with new data
