import { NextRequest, NextResponse } from "next/server";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { verifyWebhookSignature } from "@/convex/lib/webhookVerification";

/**
 * Webhook receiver endpoint for payment gateways.
 * Routes: /api/webhooks/stripe, /api/webhooks/hyperpay, etc.
 * 
 * Flow:
 * 1. Extract gateway from URL
 * 2. Get merchantId from custom header (X-Merchant-Id)
 * 3. Fetch and decrypt webhook secret
 * 4. Verify webhook signature
 * 5. Store event if valid
 */
// --- Hyperpay Webhook Only ---
// To test: see instructions at the top of this file.
/**
 * Hyperpay Webhook Receiver
 *
 * How to test:
 * 1. Deploy this endpoint and get its public URL (e.g., using Vercel, or expose localhost with ngrok).
 * 2. In your Hyperpay dashboard, set the webhook URL to this endpoint.
 * 3. Trigger a payment event in Hyperpay (test mode or real transaction).
 * 4. Hyperpay will POST a JSON payload to your endpoint with an `x-signature` header.
 * 5. Check your Convex dashboard or database to verify the event is stored.
 * 6. You can also use curl or Postman to simulate a webhook:
 *    curl -X POST <your-endpoint> \
 *      -H "Content-Type: application/json" \
 *      -H "x-merchant-id: <merchantId>" \
 *      -H "x-signature: <valid-signature>" \
 *      -d '{"event":"payment","payment_id":"123","order_id":"456","amount":100,"currency":"SAR","status":"success"}'
 *
 * The signature must be valid (see your verifyWebhookSignature logic).
 */
export async function POST(request: NextRequest) {
  try {
    // Only support Hyperpay
    const gateway = "hyperpay";

    // Get raw body for signature verification
    const rawBody = await request.text();
    let payload: any;
    try {
      payload = JSON.parse(rawBody);
    } catch (parseError) {
      return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
    }

    // Extract merchantId
    const merchantId = request.headers.get("x-merchant-id");
    if (!merchantId) {
      return NextResponse.json({ error: "Missing merchant identifier" }, { status: 400 });
    }

    // Extract signature
    const signature = request.headers.get("x-signature") || "";
    if (!signature) {
      return NextResponse.json({ error: "Missing webhook signature" }, { status: 401 });
    }

    // Get webhook secret
    let webhookSecret: string;
    try {
      const connection = await fetchMutation(
        api.mutations.gatewayConnections.getDecryptedSecret,
        { merchantId: merchantId as any, gateway }
      );
      webhookSecret = connection.webhookSecret;
    } catch (error) {
      return NextResponse.json({ error: "Gateway connection not found or inactive" }, { status: 404 });
    }

    // Verify signature
    const isValid = await verifyWebhookSignature(gateway, rawBody, signature, webhookSecret);
    if (!isValid) {
      await fetchMutation(api.mutations.storeEvent.storeEvent, {
        gateway,
        eventType: "signature_verification_failed",
        paymentId: "unknown",
        orderId: "unknown",
        amount: 0,
        currency: "SAR",
        status: "failed",
        rawPayload: { error: "Invalid signature", gateway, merchantId },
        receivedAt: Date.now(),
      });
      return NextResponse.json({ error: "Invalid webhook signature" }, { status: 401 });
    }

    // Parse Hyperpay payload
    const eventType = payload.event || payload.type || "unknown";
    const paymentId = payload.payment_id || payload.id || "unknown";
    const orderId = payload.order_id || payload.reference || "unknown";
    const amount = payload.amount || 0;
    const currency = payload.currency || "SAR";
    const status = payload.status || "pending";

    // Store event
    await fetchMutation(api.mutations.storeEvent.storeEvent, {
      gateway,
      eventType,
      paymentId,
      orderId,
      amount,
      currency,
      status,
      rawPayload: payload,
      receivedAt: Date.now(),
    });

    return NextResponse.json({ received: true, eventType, paymentId }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
