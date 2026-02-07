import { SupportedGateway, SUPPORTED_GATEWAYS } from "@/convex/types";

export const CONFIG = {
  MAX_BODY_SIZE: 1024 * 1024, // 1MB - webhooks should be small
} as const;

/**
 * Validate if gateway is supported
 */
export function validateGateway(gateway: string): gateway is SupportedGateway {
  return SUPPORTED_GATEWAYS.includes(gateway as SupportedGateway);
}

/**
 * Validate request size from content-length header
 */
export function validateContentLength(contentLength: string | null): {
  valid: boolean;
  size?: number;
} {
  if (!contentLength) return { valid: true };

  const size = parseInt(contentLength);
  return {
    valid: size <= CONFIG.MAX_BODY_SIZE,
    size,
  };
}

/**
 * Validate actual body size
 */
export function validateBodySize(body: string): {
  valid: boolean;
  size: number;
} {
  return {
    valid: body.length <= CONFIG.MAX_BODY_SIZE,
    size: body.length,
  };
}
