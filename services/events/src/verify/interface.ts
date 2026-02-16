export interface VerificationResult {
  isValid: boolean;
  error?: string;
  payload?: unknown;
}

export interface Verifier {
  readonly gatewayType: string;
  verify(payload: string | object, headers: Headers, secret: string): Promise<VerificationResult>;
}

export class SignatureVerificationError {
  readonly name = 'SignatureVerificationError';
  readonly cause?: unknown;
  constructor(readonly message: string, cause?: unknown) {
    this.cause = cause;
  }
}

export class VerifierNotFoundError extends Error {
  constructor(gatewayType: string) {
    super(`No verifier found for gateway type: ${gatewayType}`);
    this.name = 'VerifierNotFoundError';
  }
}

export class VerificationError extends Error {
  constructor(message: string, public readonly isValid: boolean = false) {
    super(message);
    this.name = 'VerificationError';
  }
}
