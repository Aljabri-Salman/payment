/**
 * Example usage and manual testing for webhook verification
 * 
 * This file demonstrates how to use the webhook verification system
 * and provides examples for testing with real Stripe webhooks.
 */

import { verifyWebhookSignature } from "./index";
import type { VerificationResult } from "./types";
import { computeHmacSha256 } from "./crypto";

/**
 * Example 1: Basic Stripe webhook verification
 */
async function exampleBasicVerification() {
  const result = await verifyWebhookSignature({
    gateway: "stripe",
    payload: '{"id":"evt_test_webhook","object":"event"}',
    signature: "t=1614556800,v1=5f6f9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e",
    secret: "whsec_test_secret",
  });

  console.log("Basic verification result:", result);
  // Output: { success: false, error: "TIMESTAMP_OUT_OF_TOLERANCE" } (if timestamp is old)
}

/**
 * Example 2: Verification with custom config
 */
async function exampleCustomConfig() {
  const result = await verifyWebhookSignature({
    gateway: "stripe",
    payload: '{"id":"evt_test_webhook","object":"event"}',
    signature: "t=1614556800,v1=signature_here",
    secret: "whsec_test_secret",
    config: {
      timestampToleranceSeconds: 600, // 10 minutes instead of default 5
      enableDebugLogs: true, // Enable debug logs
    },
  });

  console.log("Custom config result:", result);
}

/**
 * Example 3: Handle verification result with switch
 */
async function exampleErrorHandling(
  payload: string,
  signature: string,
  secret: string
) {
  const result = await verifyWebhookSignature({
    gateway: "stripe",
    payload,
    signature,
    secret,
  });

  if (result.success) {
    console.log("✅ Webhook verified successfully!");
    // Process the webhook
    return { status: 200, message: "Webhook processed" };
  } else {
    // Handle specific errors
    switch (result.error) {
      case "INVALID_SIGNATURE_FORMAT":
        console.error("❌ Signature header is malformed");
        return { status: 400, message: "Invalid signature format" };

      case "MISSING_TIMESTAMP":
        console.error("❌ Timestamp missing from signature");
        return { status: 400, message: "Missing timestamp" };

      case "TIMESTAMP_OUT_OF_TOLERANCE":
        console.error("❌ Webhook timestamp is too old (possible replay attack)");
        return { status: 400, message: "Timestamp out of tolerance" };

      case "SIGNATURE_MISMATCH":
        console.error("❌ Signature does not match (possible tampering)");
        return { status: 401, message: "Invalid signature" };

      case "INVALID_INPUT":
        console.error("❌ Invalid input parameters");
        return { status: 400, message: "Invalid input" };

      case "UNSUPPORTED_GATEWAY":
        console.error("❌ Gateway not supported");
        return { status: 400, message: "Unsupported gateway" };

      case "CRYPTO_ERROR":
        console.error("❌ Cryptographic operation failed");
        return { status: 500, message: "Verification error" };

      default:
        const _exhaustive: never = result.error; // TypeScript exhaustiveness check
        return { status: 500, message: "Unknown error" };
    }
  }
}

/**
 * Example 4: Test with valid Stripe signature
 * 
 * To get a real signature for testing:
 * 1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
 * 2. Run: stripe listen --forward-to localhost:3000/api/webhooks/test/stripe
 * 3. Trigger an event: stripe trigger payment_intent.succeeded
 * 4. Copy the signature from the webhook request
 */
async function exampleRealStripeWebhook() {
  // This is a sample - replace with real values from Stripe CLI
  const payload = JSON.stringify({
    id: "evt_test_webhook",
    object: "event",
    api_version: "2020-08-27",
    created: Math.floor(Date.now() / 1000),
    data: {
      object: {
        id: "pi_test_123",
        object: "payment_intent",
        amount: 2000,
        currency: "usd",
        status: "succeeded",
      },
    },
    type: "payment_intent.succeeded",
  });

  const currentTimestamp = Math.floor(Date.now() / 1000);
  
  // Note: This won't work without a real signature
  // Use Stripe CLI to get real signatures for testing
  const signature = `t=${currentTimestamp},v1=placeholder_signature`;
  const secret = "whsec_test_secret"; // Replace with your test webhook secret

  const result = await verifyWebhookSignature({
    gateway: "stripe",
    payload,
    signature,
    secret,
  });

  console.log("Real webhook test result:", result);
}

/**
 * Example 5: Testing utility - Generate expected signature for comparison
 * 
 * Use this to debug signature mismatches
 */
async function generateStripeSignature(
  payload: string,
  secret: string,
  timestamp?: number
) {
  const ts = timestamp || Math.floor(Date.now() / 1000);
  const signedPayload = `${ts}.${payload}`;
  const signature = await computeHmacSha256(signedPayload, secret);
  const signatureHeader = `t=${ts},v1=${signature}`;
  
  console.log("Generated Stripe signature:");
  console.log("  Timestamp:", ts);
  console.log("  Signature:", signature);
  console.log("  Full header:", signatureHeader);
  
  return signatureHeader;
}

/**
 * Example 6: Integration with Express.js
 */
function exampleExpressIntegration() {
  return `
  // In your Express route handler:
  import { verifyWebhookSignature } from "@/convex/lib/webhookVerification";
  
  app.post("/api/webhooks/:merchantId/stripe", 
    express.raw({ type: "application/json" }), // Important: get raw body
    async (req, res) => {
      const signature = req.headers["stripe-signature"] as string;
      const rawBody = req.body.toString("utf8");
      
      const result = await verifyWebhookSignature({
        gateway: "stripe",
        payload: rawBody,
        signature,
        secret: process.env.STRIPE_WEBHOOK_SECRET!,
      });
      
      if (!result.success) {
        console.error("Verification failed:", result.error);
        return res.status(400).json({ error: "Invalid signature" });
      }
      
      // Process webhook...
      const event = JSON.parse(rawBody);
      console.log("Processing event:", event.type);
      
      res.json({ received: true });
    }
  );
  `;
}

/**
 * Example 7: Integration with Next.js API Route
 */
function exampleNextjsIntegration() {
  return `
  // In your Next.js API route: /api/webhooks/[merchantId]/[gateway]/route.ts
  import { verifyWebhookSignature } from "@/convex/lib/webhookVerification";
  import { NextRequest } from "next/server";
  
  export async function POST(
    request: NextRequest,
    { params }: { params: { merchantId: string; gateway: string } }
  ) {
    try {
      const rawBody = await request.text();
      const signature = request.headers.get("stripe-signature");
      
      if (!signature) {
        return Response.json(
          { error: "Missing signature" },
          { status: 400 }
        );
      }
      
      const result = await verifyWebhookSignature({
        gateway: "stripe",
        payload: rawBody,
        signature,
        secret: webhookSecret, // Fetch from database
      });
      
      if (!result.success) {
        console.error("Verification failed:", result.error);
        return Response.json(
          { error: "Invalid signature" },
          { status: 401 }
        );
      }
      
      // Process webhook...
      const event = JSON.parse(rawBody);
      
      return Response.json({ received: true });
    } catch (error) {
      console.error("Webhook error:", error);
      return Response.json(
        { error: "Webhook processing failed" },
        { status: 500 }
      );
    }
  }
  `;
}

// Export examples for testing
export {
  exampleBasicVerification,
  exampleCustomConfig,
  exampleErrorHandling,
  exampleRealStripeWebhook,
  generateStripeSignature,
  exampleExpressIntegration,
  exampleNextjsIntegration,
};

// Uncomment to run examples:
// exampleBasicVerification();
// exampleCustomConfig();
// generateStripeSignature('{"test": "data"}', "whsec_test_secret");
