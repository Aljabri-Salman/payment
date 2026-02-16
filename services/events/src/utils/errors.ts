// Error classes
abstract class WebhookError extends Error {
  abstract status: number;
  abstract code: string;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }

  toResponse() {
    return {
      status: this.status,
      data: {
        success: false,
        error: { code: this.code, message: this.message },
        meta: { timestamp: new Date().toISOString(), version: '1.0.0' }
      }
    };
  }
}

class BadRequestError extends WebhookError {
  status = 400;
  code = 'BAD_REQUEST';
}

class GatewayNotFoundError extends WebhookError {
  status = 404;
  code = 'GATEWAY_NOT_FOUND';
}

class DecryptionError extends WebhookError {
  status = 500;
  code = 'DECRYPTION_FAILED';
}

class VerificationError extends WebhookError {
  status = 401;
  code = 'VERIFICATION_FAILED';
}

class VerifierNotFoundError extends WebhookError {
  status = 501;
  code = 'NOT_IMPLEMENTED';
}

class InternalServerError extends WebhookError {
  status = 500;
  code = 'INTERNAL_ERROR';
}
export {
  WebhookError,
  BadRequestError,
  GatewayNotFoundError,
  DecryptionError,
  VerificationError,
  VerifierNotFoundError,
  InternalServerError
}