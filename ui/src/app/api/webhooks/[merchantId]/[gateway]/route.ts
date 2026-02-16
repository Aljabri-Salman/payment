// TODO:
// ### __Improvements Needed:__
// - ⚠️ Missing rate limiting (could be abused) - TODO: Use Convex rate limiting component

// ### __Implemented:__
// - ✅ Request size validation (max 1MB) - protects against DoS attacks
// - ✅ Refactored for better code organization and readability
// - ✅ Consistent error responses with standardized error codes
// - ✅ Modular code structure (validators, responses in separate files)
// - ✅ Correlation IDs for request tracing (requestId in all logs and responses)
// - ✅ Async context for debugging (ctx object tracks request state)


import { NextRequest } from "next/server";
import { randomUUID } from "crypto";
import { SUPPORTED_GATEWAYS } from "@/convex/types";
import { WebhookHandler } from "@/shared/webhooks/handler";
import { getSignatureHeader } from "@/shared/webhooks/parsers";
import { logger } from "@/shared/webhooks/logger";
import {
  validateGateway,
  validateContentLength,
  validateBodySize,
  CONFIG,
} from "./validators";
import {
  createErrorResponse,
  createSuccessResponse,
  mapErrorToCode,
  WebhookErrorCode,
} from "./responses";

/**
 * Webhook receiver endpoint for payment gateways.
 * Routes: /api/webhooks/{merchantId}/stripe, /api/webhooks/{merchantId}/hyperpay, etc.
 *
 * Security Features:
 * - Request size validation (max 1MB)
 * - Signature verification
 * - Standardized error codes and responses
 *
 * Testing Stripe:
 * 1. Create a gateway connection in the UI and note your merchant ID
 * 2. Configure Stripe webhook URL: http://localhost:3000/api/webhooks/{YOUR_MERCHANT_ID}/stripe
 * 3. Use Stripe CLI: stripe listen --forward-to localhost:3000/api/webhooks/{YOUR_MERCHANT_ID}/stripe
 * 4. Trigger events: stripe trigger checkout.session.completed
 *
 * Testing Hyperpay:
 * curl -X POST http://localhost:3000/api/webhooks/{YOUR_MERCHANT_ID}/hyperpay \
 *   -H "Content-Type: application/json" \
 *   -H "x-signature: <valid-signature>" \
 *   -d '{"event":"payment","payment_id":"123","order_id":"456","amount":100,"currency":"SAR","status":"success"}'
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ merchantId: string; gateway: string }> }
) {
  // Generate unique correlation ID for this request (async context)
  const requestId = randomUUID();
  const startTime = Date.now();
  
  // Create context object that will be passed to all logs
  const ctx = { requestId };
  
  logger.info("=== Webhook Request Started ===", ctx);

  try {
    // 1. Extract and validate parameters
    const { merchantId, gateway: gatewayParam } = await params;
    const gateway = gatewayParam.toLowerCase();

    // Add merchant and gateway to context for all subsequent logs
    Object.assign(ctx, { merchantId, gateway });
    logger.debug("Request params", ctx);

    // Validate gateway
    if (!validateGateway(gateway)) {
      logger.error("Unsupported gateway", ctx);
      return createErrorResponse(
        WebhookErrorCode.UNSUPPORTED_GATEWAY,
        `Gateway '${gateway}' is not supported`,
        400,
        { supported: SUPPORTED_GATEWAYS, requestId }
      );
    }

    // 2. Request size validation (pre-check via content-length header)
    const contentLengthValidation = validateContentLength(
      request.headers.get("content-length")
    );

    if (!contentLengthValidation.valid) {
      logger.error("Request too large (pre-check)", {
        ...ctx,
        contentLength: contentLengthValidation.size,
        maxSize: CONFIG.MAX_BODY_SIZE,
      });
      return createErrorResponse(
        WebhookErrorCode.PAYLOAD_TOO_LARGE,
        `Request body exceeds maximum allowed size of ${CONFIG.MAX_BODY_SIZE} bytes`,
        413,
        {
          maxSizeBytes: CONFIG.MAX_BODY_SIZE,
          receivedBytes: contentLengthValidation.size,
          requestId,
        }
      );
    }

    // 3. Extract and validate signature
    const signatureHeader = getSignatureHeader(gateway);
    const signature = request.headers.get(signatureHeader);

    if (!signature) {
      logger.error(`Missing ${signatureHeader} header`, ctx);
      return createErrorResponse(
        WebhookErrorCode.MISSING_SIGNATURE,
        `Webhook signature required in '${signatureHeader}' header`,
        401,
        { requiredHeader: signatureHeader, requestId }
      );
    }

    // 4. Get and validate raw body
    const rawBody = await request.text();
    const bodySizeValidation = validateBodySize(rawBody);

    if (!bodySizeValidation.valid) {
      logger.error("Body too large after reading", {
        ...ctx,
        bodySize: bodySizeValidation.size,
        maxSize: CONFIG.MAX_BODY_SIZE,
      });
      return createErrorResponse(
        WebhookErrorCode.PAYLOAD_TOO_LARGE,
        `Request body exceeds maximum allowed size of ${CONFIG.MAX_BODY_SIZE} bytes`,
        413,
        {
          maxSizeBytes: CONFIG.MAX_BODY_SIZE,
          receivedBytes: bodySizeValidation.size,
          requestId,
        }
      );
    }

    logger.debug("Raw body received", { ...ctx, bodySize: bodySizeValidation.size });

    // 5. Process webhook
    const handler = new WebhookHandler({
      merchantId,
      gateway,
      rawBody,
      signature,
      requestId, // Pass correlation ID to handler
    });

    const result = await handler.process();
    const duration = Date.now() - startTime;

    // 6. Return response based on result
    if (result.success) {
      logger.success("Webhook processed successfully", { ...ctx, duration, eventId: result.eventId });
      return createSuccessResponse(result.eventId!, requestId);
    }

    // Handle failure with mapped error code
    logger.error("Webhook processing failed", { ...ctx, duration, error: result.error });
    const { code, statusCode } = mapErrorToCode(result.error || "");
    return createErrorResponse(code, result.error!, statusCode, { requestId });
  } catch (err) {
    const duration = Date.now() - startTime;
    logger.critical("Webhook processing crashed", { ...ctx, duration, error: err });

    // Don't leak internal errors in production
    const errorDetails =
      process.env.NODE_ENV === "development" && err instanceof Error
        ? { message: err.message, stack: err.stack, requestId }
        : { requestId };

    return createErrorResponse(
      WebhookErrorCode.INTERNAL_ERROR,
      "An unexpected error occurred while processing the webhook",
      500,
      errorDetails
    );
  }
}


// http://localhost:3000/api/webhooks/j97fjxjjzekzkq0jxn0krbwqkn80mma7/stripe
