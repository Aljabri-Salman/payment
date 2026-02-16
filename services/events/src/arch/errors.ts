import type { ApiResponse } from '../utils/response'

export interface ErrorResponse {
  status: number
  data: ApiResponse
}

export abstract class BaseApiError extends Error {
  abstract status: number
  abstract code: string
  
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
  
  toResponse(details?: unknown): ErrorResponse {
    return {
      status: this.status,
      data: {
        success: false,
        error: {
          code: this.code,
          message: this.message,
          details
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: '1.0.0'
        }
      }
    }
  }
}

export class GatewayConnectionNotFoundError extends BaseApiError {
  status = 404
  code = 'GATEWAY_NOT_FOUND'
  
  constructor(gatewayConnectionId: string) {
    super(`Gateway connection not found for ID: ${gatewayConnectionId}`)
  }
}

export class DecryptionError extends BaseApiError {
  status = 500
  code = 'DECRYPTION_FAILED'
  
  constructor(gatewayConnectionId: string) {
    super(`Failed to decrypt webhook secret for connection '${gatewayConnectionId}'`)
  }
}

export class VerificationError extends BaseApiError {
  status = 401
  code = 'VERIFICATION_FAILED'
  
  constructor(message: string = 'Invalid signature') {
    super(message)
  }
}

export class VerifierNotFoundError extends BaseApiError {
  status = 501
  code = 'NOT_IMPLEMENTED'
  
  constructor(message: string) {
    super(message)
  }
}

export class BadRequestError extends BaseApiError {
  status = 400
  code = 'BAD_REQUEST'
  
  constructor(message: string) {
    super(message)
  }
}

export class InternalServerError extends BaseApiError {
  status = 500
  code = 'INTERNAL_ERROR'
  
  constructor(message: string = 'An unexpected error occurred') {
    super(message)
  }
}