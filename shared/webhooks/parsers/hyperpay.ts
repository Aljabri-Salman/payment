import { ParsedWebhookEvent } from "@/convex/types";
import { WebhookParser } from "../types";

export class HyperpayParser implements WebhookParser {
  getSignatureHeader(): string {
    return "x-signature";
  }

  parse(payload: any): ParsedWebhookEvent {
    const eventType = payload.event || payload.type || "unknown";
    const paymentId = payload.payment_id || payload.id || "unknown";
    
    // Generate idempotency key from payment_id and event type
    const idempotencyKey = `${paymentId}_${eventType}`;

    return {
      eventType,
      paymentId,
      orderId: payload.order_id || payload.reference || "unknown",
      amount: payload.amount || 0,
      currency: payload.currency || "SAR",
      status: payload.status || "pending",
      idempotencyKey,
    };
  }
}
