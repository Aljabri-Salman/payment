import { Doc, Id } from "./_generated/dataModel";

export type PaymentEvent = Doc<"paymentEvents">;
export type PaymentEventId = Id<"paymentEvents">;
export type PaymentStatus = "success" | "failed" | "pending";



export type Merchant = Doc<"merchants">;
export type MerchantId = Id<"merchants">;

export type MerchantStatus = "ACTIVE" | "SUSPENDED";

export type GatewayConnection = Doc<"gatewayConnections">;
export type GatewayConnectionId = Id<"gatewayConnections">;

export type Gateway = "hyperpay" | "moyasar" | "tap" | "checkout" | "stripe";
export type SupportedGateway = "stripe";

export const SUPPORTED_GATEWAYS: SupportedGateway[] = ["stripe"];

// ─────────────────────────────────────────────────────────────
// Webhook Types (CANONICAL - used by parsers, handlers, storage)
// ─────────────────────────────────────────────────────────────

/**
 * Normalized webhook event structure.
 * This is the canonical format after parsing gateway-specific payloads.
 * Used by: Parsers (output), Handler (processing), Storage mutation (input)
 */
export interface ParsedWebhookEvent {
  eventType: string;
  paymentId: string;
  orderId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  idempotencyKey?: string;
}

/**
 * Complete webhook payload received at the API endpoint
 */
export interface WebhookPayload {
  gateway: SupportedGateway;
  merchantId: MerchantId;
  rawBody: string;
  signature: string;
  headers: Record<string, string>;
}

/**
 * Result of webhook processing
 */
export interface WebhookResult {
  success: boolean;
  eventId?: string;
  error?: string;
}

