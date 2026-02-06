# Comprehensive UI & Authentication Plan for Payment Platform

> **Last Updated:** February 2026  
> **Status:** Phase 2 Complete ✅ | Phase 3 In Progress 🚧

---

## 📊 **Project Status Overview**

### **Completion Summary:**
- ✅ **Phase 1 - Backend Infrastructure:** 100% Complete
- ✅ **Phase 2 - Authentication & UI Foundation:** 100% Complete
- 🚧 **Phase 3 - Payment Management UI:** 0% (Starting Now)
- 📋 **Phase 4 - Advanced Features:** 0% (Planned)
- 🚀 **Phase 5 - Production Deployment:** 0% (Planned)

### **What's Working:**
- ✅ Full authentication system with Better Auth
- ✅ Merchant CRUD operations
- ✅ Basic dashboard with statistics
- ✅ Gateway connections display
- ✅ Responsive layout with sidebar navigation
- ✅ Internationalization support (English/Arabic)
- ✅ Webhook receiver for Hyperpay
- ✅ Encrypted secret storage

### **Current Focus (February 2026):**
🎯 **Building Payment Management UI** - Payment events list, timeline view, and gateway management forms

---

## 🎯 **Authentication Strategy: Better Auth** ✅ **IMPLEMENTED**

### ✅ **Current Implementation Status:**
Better Auth has been successfully integrated with the following features:
- ✅ **Framework integration**: Working with Next.js App Router
- ✅ **Email & password** authentication with simple, non-verified flow
- ✅ **Convex database integration** using Better Auth adapter
- ✅ **Protected routes** with AuthGuard component
- ✅ **Auth utilities**: Client-side and server-side auth helpers
- ✅ **Login/Signup pages** with Mantine UI components
- ✅ **Session management** with automatic redirection

### **Implemented Files:**
```
convex/
├── auth.config.ts              ✅ Better Auth configuration
├── auth.ts                     ✅ Auth component with Convex adapter
└── http.ts                     ✅ HTTP routes for auth endpoints

src/
├── lib/
│   ├── auth-client.ts          ✅ Client-side auth utilities
│   └── auth-server.ts          ✅ Server-side auth utilities
├── components/providers/
│   ├── AuthGuard.tsx           ✅ Route protection
│   ├── ConvexClientProvider.tsx ✅ Convex with auth integration
│   └── AppProvider.tsx         ✅ Root provider wrapper
└── app/[locale]/auth/
    ├── login/page.tsx          ✅ Login page
    └── signup/page.tsx         ✅ Registration page
```

### **Authentication Features:**
- ✅ Email and password login
- ✅ User registration
- ✅ Session persistence with "Remember Me"
- ✅ Automatic redirection after login
- ✅ Protected route middleware
- ✅ User state management
- ✅ Logout functionality

### **Why Better Auth Was the Right Choice:**
Better Auth is Convex's official authentication component that provides:
- **Framework-agnostic** support (works seamlessly with Next.js)
- **Email & password** authentication with secure sessions
- **Social sign-on** (GitHub, Google, Discord, Twitter)
- **Two-factor authentication** (2FA) - crucial for payment platforms
- **Built specifically for Convex** with seamless database integration
- **Active development** by Convex team with regular updates

### **Implementation Steps for Better Auth:** ✅ **COMPLETED**
~~1. **Install Better Auth packages**: `@convex-dev/better-auth` and `better-auth`~~ ✅
~~2. **Configure Better Auth** in Convex with your authentication settings~~ ✅
~~3. **Set up AuthProvider** to wrap your Next.js application~~ ✅
~~4. **Integrate with existing merchant system** (link users to merchants)~~ ✅
~~5. **Add protected routes** using Better Auth's authentication utilities~~ ✅

**Status**: All steps completed and working in production code.

### **Key Advantages over Convex Built-in Auth:**
- **More feature-complete**: Social login, 2FA, email verification out of the box
- **Better security**: Built-in protection against common auth vulnerabilities
- **Better developer experience**: Comprehensive documentation and examples
- **Future-proof**: Will receive ongoing updates and security patches

**Recommendation:** Use Better Auth for production-ready authentication with enhanced security features.

---

## 🏗️ **UI Architecture & Component Structure**

### ✅ **Completed Components:**
```
src/components/
├── Layout/                    ✅ COMPLETED
│   ├── AppLayout.tsx          - Main layout wrapper with sidebar/header
│   ├── Header/                - Top navigation bar with locale switcher
│   │   ├── Header.tsx
│   │   ├── LocaleSwitch.tsx
│   │   └── index.ts
│   ├── SideBar/               - Side navigation menu
│   │   ├── SideBar.tsx
│   │   ├── MerchantButton/    - Merchant selection dropdown
│   │   └── UserButton/        - User profile menu
│   └── index.ts
├── MerchantDashboard.tsx       ✅ COMPLETED - Stats cards & gateway display
└── providers/                  ✅ COMPLETED
    ├── AppProvider.tsx         - Root provider wrapper
    ├── AuthGuard.tsx           - Protected route authentication
    └── ConvexClientProvider.tsx - Convex client setup
```

### 🚧 **Components Needed (Phase 3):**
```
src/components/
├── payments/                   🚧 TO BUILD
│   ├── PaymentsList.tsx        - Filterable table of payments
│   ├── PaymentTimeline.tsx     - Event timeline visualization
│   ├── PaymentDetails.tsx      - Full payment details view
│   ├── PaymentFilters.tsx      - Search and filter controls
│   └── StatusBadge.tsx         - Payment status indicator
├── gateways/                   🚧 TO BUILD
│   ├── GatewayConnections.tsx  - Gateway list display
│   ├── GatewayConfigForm.tsx   - Add/edit gateway form
│   ├── WebhookSecretManager.tsx - Secret rotation UI
│   └── ConnectionTest.tsx      - Test webhook connection
├── events/                     🚧 TO BUILD
│   ├── EventBrowser.tsx        - Raw event list
│   ├── EventDetails.tsx        - Event payload viewer
│   └── EventFilters.tsx        - Filter controls
└── ui/                         🚧 TO BUILD
    ├── DataTable.tsx           - Reusable table component
    ├── LoadingSpinner.tsx      - Loading states
    └── EmptyState.tsx          - Empty state placeholders
```

### 📋 **Future Components (Phase 4+):**
```
src/components/
├── reconciliation/             📋 PLANNED
│   ├── CSVUpload.tsx
│   ├── MatchResults.tsx
│   └── DiscrepancyList.tsx
├── analytics/                  📋 PLANNED
│   ├── StatsCards.tsx
│   ├── Charts.tsx
│   └── Reports.tsx
└── settings/                   📋 PLANNED
    ├── UserProfile.tsx
    └── Preferences.tsx
```

---

## 📱 **Required Pages & Routes**

### ✅ **Completed Pages**
```
/app/[locale]/                      # Internationalized routes (en/ar)
├── /                               ✅ Home (redirects to merchant dashboard)
├── /auth/
│   ├── /login                      ✅ Login page with Better Auth
│   └── /signup                     ✅ Registration page
├── /merchants                      ✅ Merchants management (CRUD)
└── /[merchant]                     ✅ Merchant dashboard (stats & gateways)
```

### 🚧 **Pages to Build (Phase 3)**
```
/app/[locale]/
├── /[merchant]/
│   ├── /payments                   🚧 Payment list with filters
│   ├── /payments/[id]              🚧 Single payment timeline
│   ├── /gateways                   🚧 Gateway connections management
│   ├── /gateways/add               🚧 Add new gateway
│   ├── /gateways/[id]              🚧 Edit gateway configuration
│   └── /events                     🚧 Raw webhook event browser
```

### 📋 **Future Pages (Phase 4+)**
```
/app/[locale]/
├── /[merchant]/
│   ├── /reconciliation             📋 Reconciliation interface
│   ├── /reports                    📋 Analytics and reports
│   ├── /settings                   📋 Merchant settings
│   └── /webhooks                   📋 Webhook delivery logs
└── /settings                       📋 User account settings
```

### 🚫 **Removed from Plan**
```
/                                   ❌ Landing page (not needed - B2B SaaS)
/pricing                            ❌ Pricing page (not needed for MVP)
/docs                               ❌ Public documentation (internal use)
```

---

## 🎨 **UI Design & Layout**

### **Main Layout Components:**
1. **AppLayout.tsx** - Wrapper with sidebar and header
2. **Sidebar Navigation** - Main navigation menu
   - Dashboard
   - Payments
   - Gateways  
   - Reconciliation
   - Events
   - Settings
3. **Header** - User menu, notifications, search

### **Dashboard Overview:**
- **Stats Cards**: Total payments, success rate, revenue, pending reconciliation
- **Recent Payments**: Table with latest 10 payments
- **Gateway Status**: Connection status for each gateway
- **Reconciliation Alerts**: Unmatched transactions needing attention

### **Payment Timeline UI:**
```
┌─────────────────────────────────────────────────┐
│ Payment #HPY-12345 - SAR 1,000.00               │
├─────────────────────────────────────────────────┤
│ Timeline:                                        │
│   • 10:30 AM - Authorized (Hyperpay)            │
│   • 10:31 AM - Captured                         │
│   • 10:45 AM - Settled                          │
│   • 11:00 AM - Refunded (Partial: SAR 500.00)   │
│                                                  │
│ Details:                                         │
│   • Gateway: Hyperpay                            │
│   • Merchant: Acme Store                         │
│   • Order ID: ORD-789                            │
│   • Status: Partially Refunded                  │
└─────────────────────────────────────────────────┘
```

### **Gateway Management UI:**
- **Connection List**: Active/inactive gateways
- **Add Gateway Form**: Configure new gateway connection
- **Webhook Secret Manager**: Encrypted secret management
- **Test Connection**: Verify webhook integration

---

## 🔐 **Authentication Flow Implementation with Better Auth** ✅ **IMPLEMENTED**

### **Current Implementation:**
Better Auth is fully configured and working. The following code examples show what's already implemented:

### **Live Code - Auth Configuration**
```typescript
// convex/auth.ts - Already implemented
import { createClient } from "@convex-dev/better-auth";
import { betterAuth } from "better-auth/minimal";

export const authComponent = createClient<DataModel>(components.betterAuth);

export const createAuth = (ctx: GenericCtx<DataModel>) => {
  return betterAuth({
    baseURL: siteUrl,
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false, // Simplified for development
    },
    plugins: [convex({ authConfig })],
  })
}
```

### **Live Code - Auth Provider (Frontend)**
```typescript
// src/components/providers/ConvexClientProvider.tsx - Already implemented
// Wraps the app with Convex and auth context
import { ConvexAuthProvider } from "@convex-dev/auth/react";

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <ConvexAuthProvider>
        {children}
      </ConvexAuthProvider>
    </ConvexProvider>
  );
}
```

### **Live Code - Protected Routes**
```typescript
// src/components/providers/AuthGuard.tsx - Already implemented
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isLoading, isAuthenticated } = useAuthActions();
  
  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) redirect('/auth/login');
  
  return <>{children}</>;
}
```

### **Future Authentication Features:**
The following are not yet implemented but planned:
- [ ] **User-to-Merchant linking**: Assign users to specific merchant accounts
- [ ] **Role-Based Access Control**: Admin, viewer, editor roles
- [ ] **Email verification**: Enable for production security
- [ ] **2FA**: Two-factor authentication
- [ ] **Social login**: GitHub, Google OAuth

---

## 🎯 **Core Functionality per Page**

### **1. Dashboard (/dashboard)**
- **Real-time stats** using Convex subscriptions
- **Quick actions**: Add gateway, start reconciliation
- **Recent activity** feed
- **System health** indicators

### **2. Payments (/payments)**
- **Filterable table**: by date, gateway, status, amount
- **Search** by payment ID, order ID, customer email
- **Export** to CSV/Excel
- **Bulk actions**: mark as reconciled, export selected

### **3. Payment Details (/payments/[id])**
- **Complete timeline** with all webhook events
- **Raw payload** viewer (expandable JSON)
- **Linked transactions**: refunds, chargebacks
- **Reconciliation status** and match details

### **4. Gateways (/gateways)**
- **Connection status** dashboard
- **Webhook URL** display for each gateway
- **Test webhook** button (send test event)
- **Rotation** of webhook secrets
- **Usage analytics** per gateway

### **5. Reconciliation (/reconciliation)**
- **CSV upload** for bank statements
- **Auto-matching** with payment events
- **Manual matching** interface
- **Discrepancy highlighting**
- **Export reconciliation reports**

### **6. Events (/events)**
- **Raw webhook event** browser
- **Filter** by gateway, event type, date
- **Search** in payload content
- **Replay failed events** functionality

---

## 🚀 **Implementation Priority Order**

### ✅ **Phase 1: Authentication & Basic Layout** (COMPLETED)
1. ✅ Installed Mantine UI library
2. ✅ Implemented Better Auth with Convex
3. ✅ Created layout components (Sidebar, Header, AppLayout)
4. ✅ Built login/register pages
5. ✅ Added AuthGuard for protected routes
6. ✅ Set up internationalization (en/ar)
7. ✅ Created merchant management pages with CRUD operations
8. ✅ Built basic merchant dashboard with stats cards

### ✅ **Phase 2: Merchant Dashboard & Basic Features** (COMPLETED)
1. ✅ Dashboard overview page with merchant stats
2. ✅ Merchants management page (create, edit, delete)
3. ✅ Gateway connections display
4. ✅ State management with Zustand
5. ✅ Responsive layout with mobile support
6. ✅ User and merchant navigation components

### 🚧 **Phase 3: Payment Management UI** (CURRENT FOCUS - February 2026)
**Priority Order:**
1. **Payment Events List** (Week 1)
   - Build payment events table with filtering
   - Add search functionality
   - Implement real-time updates with Convex subscriptions
   - Add status badges and indicators
   
2. **Payment Timeline View** (Week 2)
   - Create payment details page
   - Build timeline component for event history
   - Show raw webhook payloads
   - Link related transactions (refunds, etc.)

3. **Gateway Management Forms** (Week 3)
   - Create "Add Gateway" form with webhook secret input
   - Build "Edit Gateway" modal
   - Implement webhook secret rotation UI
   - Add connection testing functionality
   - Display webhook URLs for merchant configuration

4. **Event Viewer** (Week 4)
   - Build raw webhook event browser
   - Add filtering by gateway, date, event type
   - Implement payload search
   - Add event replay functionality

### 📋 **Phase 4: Advanced Features** (March 2026)
**Priority Order:**
1. **Reconciliation Interface** (Weeks 1-2)
   - CSV upload component
   - Auto-matching visualization
   - Manual matching interface
   - Discrepancy highlighting
   - Export reconciliation reports

2. **Refund Management** (Week 3)
   - Refund tracking display
   - Link refunds to original payments
   - Full/partial refund support
   - Refund timeline integration

3. **Reporting & Analytics** (Week 4)
   - Dashboard charts and graphs
   - Transaction analytics
   - Gateway performance metrics
   - Export functionality (CSV, Excel)

### 🚀 **Phase 5: Production Enhancement** (Q2 2026)
1. Performance optimization
2. Enhanced error handling and user feedback
3. Advanced filtering and search
4. Notification system
5. User settings and preferences
6. Dark mode improvements

---

## 🛠️ **Technology Stack** ✅ **IMPLEMENTED**

### **Current Stack (Installed):**

#### **UI Library:** ✅ **Mantine UI v8.x**
- ✅ `@mantine/core` - Complete component library
- ✅ `@mantine/notifications` - Toast notifications
- ✅ `@tabler/icons-react` - Icon library
- Complete theming and styling support
- Form handling with built-in validation
- Responsive design utilities

#### **Authentication:** ✅ **Better Auth**
- ✅ `@convex-dev/better-auth` - Convex integration
- ✅ `better-auth` - Core auth library
- Email/password authentication working
- Session management and protected routes

#### **State & Data:**
- ✅ `convex` - Real-time backend with subscriptions
- ✅ `zustand` - Client-side state management
- ✅ `next-intl` - Internationalization (en/ar support)

#### **Framework:**
- ✅ `next` v16.x - React framework with App Router
- ✅ `react` v19.x - UI library
- ✅ `typescript` - Type safety

### **Dependencies to Add (Phase 3+):**
```json
{
  "@mantine/dates": "^8.0.0",      // Date picker for filtering
  "@mantine/dropzone": "^8.0.0",   // File upload for CSV reconciliation
  "date-fns": "^3.0.0",            // Date formatting utilities
  "recharts": "^2.0.0",            // Charts for analytics dashboard
  "papaparse": "^5.4.1",           // CSV parsing for reconciliation
  "@mantine/modals": "^8.0.0"      // Modal management
}
```

### **Development Tools:**
- ✅ ESLint - Code linting
- ✅ TypeScript - Type checking
- Runtime: Bun (fast package manager and runtime)

---

## 📊 **Sample Dashboard Wireframe**

```
┌─────────────────────────────────────────────────────────┐
│  [Logo] Payments Dashboard       [User] [Notifications] │
├─────────────────────────────────────────────────────────┤
│  [Sidebar]                                            │
│  • Dashboard                                          │
│  • Payments                                           │
│  • Gateways                                           │
│  • Reconciliation                                     │
│  • Events                                             │
│  • Settings                                           │
│                                                       │
├─────────────────────────────────────────────────────────┤
│  STATS CARDS (4)                                      │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                     │
│  │Total│ │Success│ │Pending│ │Revenue│               │
│  │ 1,234│ │ 95%  │ │  45  │ │ SAR │                  │
│  │Payments│ │Rate │ │Reconcile│ │ 500K │               │
│  └─────┘ └─────┘ └─────┘ └─────┘                     │
│                                                       │
│  RECENT PAYMENTS                                      │
│  ┌───────────────────────────────────────────────────┐│
│  │ ID       Gateway  Amount  Status    Date         ││
│  │ HPY-123  Hyperpay SAR 500 Success   Today 10:30  ││
│  │ TAP-456  Tap      SAR 200 Pending   Today 09:15  ││
│  │ MOY-789  Moyasar  SAR 1K  Failed    Yesterday    ││
│  └───────────────────────────────────────────────────┘│
│                                                       │
│  GATEWAY STATUS                                       │
│  ┌───────────────────────────────────────────────────┐│
│  │ Hyperpay: ✅ Connected                            ││
│  │ Moyasar:  ⚠️ No recent events                     ││
│  │ Tap:      ❌ Disconnected                         ││
│  │ Checkout: ✅ Connected                            ││
│  └───────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

---

## 🔧 **Current Development Status & Next Actions**

### ✅ **What's Working Now:**
1. ✅ **Mantine UI** - Fully integrated and styled
2. ✅ **Better Auth** - Authentication working with Convex
3. ✅ **Layout components** - Sidebar, Header, and main layout complete
4. ✅ **Dashboard** - Merchant overview with stats and gateway connections
5. ✅ **Merchant CRUD** - Full merchant management functionality
6. ✅ **Internationalization** - English and Arabic support

### 🚧 **Immediate Next Steps (February 2026):**

#### **Week 1: Payment Events List**
1. Create `src/app/[locale]/[merchant]/payments/page.tsx`
2. Build `PaymentsList.tsx` component with Mantine DataTable
3. Add filtering (by date, status, gateway, amount)
4. Implement search functionality
5. Create Convex query for fetching payment events with pagination

#### **Week 2: Payment Timeline**
1. Create `src/app/[locale]/[merchant]/payments/[id]/page.tsx`
2. Build `PaymentTimeline.tsx` visual component
3. Add `PaymentDetails.tsx` for full event information
4. Show raw webhook payload in expandable section
5. Link related events (refunds, chargebacks)

#### **Week 3: Gateway Management**
1. Create `src/app/[locale]/[merchant]/gateways/page.tsx`
2. Build `GatewayConfigForm.tsx` for add/edit operations
3. Create `WebhookSecretManager.tsx` for secret rotation
4. Add webhook URL display and copy functionality
5. Implement connection testing

#### **Week 4: Event Browser**
1. Create `src/app/[locale]/[merchant]/events/page.tsx`
2. Build `EventBrowser.tsx` for raw webhook display
3. Add filtering and search in event payloads
4. Implement event replay mechanism
5. Show webhook delivery status

### 📋 **Technical Improvements Needed:**
- [ ] Add proper TypeScript types for all components
- [ ] Implement error boundaries for better error handling
- [ ] Add loading skeletons for better UX
- [ ] Set up proper toast notifications for actions
- [ ] Add data export functionality (CSV/Excel)
- [ ] Implement proper pagination for large datasets

### 🎯 **Questions to Address:**
1. Should we implement idempotency checks before building the UI? (Recommended: Yes)
2. Do we need real-time updates for payment events? (Convex subscriptions)
3. Should gateway credentials be editable or just viewable after creation?
4. What payment statuses should we support initially?