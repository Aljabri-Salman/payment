import { NextResponse } from "next/server";

/**
 * Standardized error codes for webhook processing
 */
export enum WebhookErrorCode {
  UNSUPPORTED_GATEWAY = "UNSUPPORTED_GATEWAY",
  PAYLOAD_TOO_LARGE = "PAYLOAD_TOO_LARGE",
  MISSING_SIGNATURE = "MISSING_SIGNATURE",
  INVALID_SIGNATURE = "INVALID_SIGNATURE",
  GATEWAY_NOT_FOUND = "GATEWAY_NOT_FOUND",
  INVALID_PAYLOAD = "INVALID_PAYLOAD",
  PROCESSING_FAILED = "PROCESSING_FAILED",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

/**
 * Standardized error response structure
 */
interface WebhookErrorResponse {
  success: false;
  error: {
    code: WebhookErrorCode;
    message: string;
    details?: Record<string, any>;
  };
  timestamp: string;
}

/**
 * Standardized success response structure
 */
interface WebhookSuccessResponse {
  success: true;
  data: {
    eventId: string;
    received: boolean;
  };
  requestId: string;
  timestamp: string;
}

/**
 * Create a standardized error response
 */
export function createErrorResponse(
  code: WebhookErrorCode,
  message: string,
  statusCode: number,
  details?: Record<string, any>
): NextResponse<WebhookErrorResponse> {
  const requestId = details?.requestId || "unknown";
  
  return NextResponse.json(
    {
      success: false,
      error: {
        code,
        message,
        ...(details && { details }),
      },
      timestamp: new Date().toISOString(),
    },
    { 
      status: statusCode,
      headers: {
        "Content-Type": "application/json",
        "X-Request-ID": requestId,
      }
    }
  );
}

/**
 * Create a standardized success response
 */
export function createSuccessResponse(
  eventId: string,
  requestId: string
): NextResponse<WebhookSuccessResponse> {
  return NextResponse.json(
    {
      success: true,
      data: {
        eventId,
        received: true,
      },
      requestId,
      timestamp: new Date().toISOString(),
    },
    { 
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "X-Request-ID": requestId,
      }
    }
  );
}

/**
 * Map error messages to appropriate error codes and status codes
 */
export function mapErrorToCode(errorMessage: string): {
  code: WebhookErrorCode;
  statusCode: number;
} {
  const errorLower = errorMessage.toLowerCase();

  if (errorLower.includes("signature")) {
    return {
      code: WebhookErrorCode.INVALID_SIGNATURE,
      statusCode: 401,
    };
  }

  if (errorLower.includes("not found") || errorLower.includes("connection not found")) {
    return {
      code: WebhookErrorCode.GATEWAY_NOT_FOUND,
      statusCode: 404,
    };
  }

  if (errorLower.includes("invalid") || errorLower.includes("json")) {
    return {
      code: WebhookErrorCode.INVALID_PAYLOAD,
      statusCode: 400,
    };
  }

  return {
    code: WebhookErrorCode.PROCESSING_FAILED,
    statusCode: 400,
  };
}
