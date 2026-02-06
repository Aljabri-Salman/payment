import { Doc, Id } from "./_generated/dataModel";

export type PaymentEvent = Doc<"paymentEvents">;
export type PaymentEventId = Id<"paymentEvents">;

export type PaymentStatus = "processed" | "failed" | "pending";

export type PaymentGateway = "stripe" | "paypal" | "razorpay" | string;

export interface CreatePaymentEventInput {
  gateway: string;
  eventType: string;
  paymentId: string;
  orderId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  rawPayload: any;
  receivedAt: number;
}

export type Merchant = Doc<"merchants">;
export type MerchantId = Id<"merchants">;

export type MerchantStatus = "ACTIVE" | "SUSPENDED";

export type GatewayConnection = Doc<"gatewayConnections">;
export type GatewayConnectionId = Id<"gatewayConnections">;

export type Gateway = "hyperpay" | "moyasar" | "tap" | "checkout";
