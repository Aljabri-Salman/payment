import type { Verifier } from './interface';
import { StripeVerifier } from './stripe';
import { VerifierNotFoundError } from './interface';

const verifiers: Map<string, Verifier> = new Map([
  ['stripe', new StripeVerifier()],
]);

export function getVerifier(gatewayType: string): Verifier {
  const verifier = verifiers.get(gatewayType.toLowerCase());
  if (!verifier) {
    throw new VerifierNotFoundError(gatewayType);
  }
  return verifier;
}

export function registerVerifier(verifier: Verifier): void {
  verifiers.set(verifier.gatewayType.toLowerCase(), verifier);
}
