// TODO: Add support for more gateways in the future
// ! TODO: Check each gateway's documentation for best practices on security, retries, etc.
// ### __Weaknesses:__
// Could use more validation on required fields

import { SupportedGateway } from "@/convex/types";
import { WebhookParser } from "../types";
import { StripeParser } from "./stripe";
import { HyperpayParser } from "./hyperpay";

const parsers: Record<SupportedGateway, WebhookParser> = {
  stripe: new StripeParser(),
  hyperpay: new HyperpayParser(),
};

export function getParser(gateway: SupportedGateway): WebhookParser {
  const parser = parsers[gateway];
  if (!parser) {
    throw new Error(`No parser found for gateway: ${gateway}`);
  }
  return parser;
}

export function getSignatureHeader(gateway: SupportedGateway): string {
  return getParser(gateway).getSignatureHeader();
}

export { StripeParser, HyperpayParser };
