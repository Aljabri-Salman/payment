import { ParsedWebhookEvent } from "@/convex/types";
import { WebhookParser } from "../types";

export class StripeParser implements WebhookParser {
  getSignatureHeader(): string {
    return "stripe-signature";
  }

  parse(payload: any): ParsedWebhookEvent {
    const eventType = payload.type || "unknown";
    const dataObject = payload.data?.object || {};
    
    // Generate idempotency key from Stripe event ID
    const idempotencyKey = payload.id;

    return {
      eventType,
      paymentId: dataObject.id || payload.id || "unknown",
      orderId: dataObject.metadata?.orderId || dataObject.client_reference_id || "unknown",
      amount: dataObject.amount || 0,
      currency: (dataObject.currency || "usd").toUpperCase(),
      status: this.mapStripeStatus(dataObject.status, payload.type),
      idempotencyKey,
    };
  }

  private mapStripeStatus(
    objectStatus: string | undefined,
    eventType: string
  ): "success" | "failed" | "pending" {
    if (objectStatus === "succeeded" || eventType === "charge.succeeded") {
      return "success";
    } else if (objectStatus === "failed" || eventType === "charge.failed") {
      return "failed";
    }
    return "pending";
  }
}
