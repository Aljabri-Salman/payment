import { ParsedWebhookEvent } from "@/convex/types";

/**
 * Gateway-specific parser interface
 * Each gateway implements this to normalize their webhook format into ParsedWebhookEvent
 */
export interface WebhookParser {
  parse(payload: any): ParsedWebhookEvent;
  getSignatureHeader(): string;
}

/**
 * Gateway configuration mapping
 */
export interface GatewayConfig {
  signatureHeader: string;
  parser: WebhookParser;
}