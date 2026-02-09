/**
 * Error Handling Utilities
 * 
 * Consistent error handling for Convex functions.
 * Provides typed errors, error codes, and utility functions for
 * consistent error handling across all mutations and queries.
 */

/**
 * Base Convex error class with error code support.
 * All custom errors should extend this class.
 */
export class ConvexError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly details?: Record<string, any>
  ) {
    super(message);
    this.name = 'ConvexError';
    
    // Maintain proper prototype chain
    Object.setPrototypeOf(this, ConvexError.prototype);
  }
  
  /**
   * Convert error to a plain object for serialization.
   * Useful for returning errors in API responses.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      details: this.details,
      stack: this.stack,
    };
  }
  
  /**
   * Create a ConvexError from any error object.
   */
  static fromError(error: unknown, code: string = 'INTERNAL_ERROR'): ConvexError {
    if (error instanceof ConvexError) {
      return error;
    }
    
    if (error instanceof Error) {
      return new ConvexError(error.message, code, { originalError: error.name });
    }
    
    return new ConvexError(
      typeof error === 'string' ? error : 'An unknown error occurred',
      code
    );
  }
}

// ============================================================================
// Specific Error Classes
// ============================================================================

/**
 * Resource not found error.
 */
export class NotFoundError extends ConvexError {
  constructor(resource: string, id?: string) {
    const message = id 
      ? `${resource} with ID "${id}" not found`
      : `${resource} not found`;
    
    super(message, 'NOT_FOUND', { resource, id });
    this.name = 'NotFoundError';
  }
}

/**
 * Validation error for invalid input data.
 */
export class ValidationError extends ConvexError {
  constructor(message: string, field?: string, value?: any) {
    super(message, 'VALIDATION_ERROR', { field, value });
    this.name = 'ValidationError';
  }
}

/**
 * Authentication/authorization error.
 */
export class AuthError extends ConvexError {
  constructor(message: string = 'Authentication required') {
    super(message, 'AUTH_ERROR');
    this.name = 'AuthError';
  }
}

/**
 * Permission/authorization error.
 */
export class PermissionError extends ConvexError {
  constructor(
    message: string = 'Insufficient permissions',
    public readonly requiredPermission?: string
  ) {
    super(message, 'PERMISSION_ERROR', { requiredPermission });
    this.name = 'PermissionError';
  }
}

/**
 * Conflict error (e.g., duplicate resource, optimistic concurrency conflict).
 */
export class ConflictError extends ConvexError {
  constructor(message: string, resource?: string) {
    super(message, 'CONFLICT', { resource });
    this.name = 'ConflictError';
  }
}

/**
 * Rate limiting or throttling error.
 */
export class RateLimitError extends ConvexError {
  constructor(
    message: string = 'Rate limit exceeded',
    public readonly retryAfter?: number
  ) {
    super(message, 'RATE_LIMIT', { retryAfter });
    this.name = 'RateLimitError';
  }
}

/**
 * External service error (e.g., payment gateway API failure).
 */
export class ExternalServiceError extends ConvexError {
  constructor(
    service: string,
    message: string,
    public readonly statusCode?: number
  ) {
    super(`${service}: ${message}`, 'EXTERNAL_SERVICE_ERROR', {
      service,
      statusCode,
    });
    this.name = 'ExternalServiceError';
  }
}

/**
 * Encryption/decryption error.
 */
export class EncryptionError extends ConvexError {
  constructor(message: string, operation: 'encrypt' | 'decrypt') {
    super(message, 'ENCRYPTION_ERROR', { operation });
    this.name = 'EncryptionError';
  }
}

/**
 * Database operation error.
 */
export class DatabaseError extends ConvexError {
  constructor(message: string, operation: string) {
    super(message, 'DATABASE_ERROR', { operation });
    this.name = 'DatabaseError';
  }
}

// ============================================================================
// Error Codes Constants
// ============================================================================

/**
 * Standard error codes for consistent error handling.
 */
export const ErrorCodes = {
  // Client errors (4xx)
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTH_ERROR: 'AUTH_ERROR',
  PERMISSION_ERROR: 'PERMISSION_ERROR',
  CONFLICT: 'CONFLICT',
  RATE_LIMIT: 'RATE_LIMIT',
  
  // Server errors (5xx)
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  EXTERNAL_SERVICE_ERROR: 'EXTERNAL_SERVICE_ERROR',
  ENCRYPTION_ERROR: 'ENCRYPTION_ERROR',
  DATABASE_ERROR: 'DATABASE_ERROR',
  
  // Business logic errors
  INVALID_STATE: 'INVALID_STATE',
  UNSUPPORTED_OPERATION: 'UNSUPPORTED_OPERATION',
  INSUFFICIENT_BALANCE: 'INSUFFICIENT_BALANCE',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
} as const;

// ============================================================================
// Error Factory Functions
// ============================================================================

/**
 * Create a not found error for a specific resource.
 */
export function notFound(resource: string, id?: string): NotFoundError {
  return new NotFoundError(resource, id);
}

/**
 * Create a validation error for a specific field.
 */
export function validationError(
  message: string,
  field?: string,
  value?: any
): ValidationError {
  return new ValidationError(message, field, value);
}

/**
 * Create an authentication error.
 */
export function authError(message?: string): AuthError {
  return new AuthError(message);
}

/**
 * Create a permission error.
 */
export function permissionError(
  message?: string,
  requiredPermission?: string
): PermissionError {
  return new PermissionError(message, requiredPermission);
}

/**
 * Create a conflict error.
 */
export function conflictError(message: string, resource?: string): ConflictError {
  return new ConflictError(message, resource);
}

/**
 * Create a rate limit error.
 */
export function rateLimitError(message?: string, retryAfter?: number): RateLimitError {
  return new RateLimitError(message, retryAfter);
}

/**
 * Create an external service error.
 */
export function externalServiceError(
  service: string,
  message: string,
  statusCode?: number
): ExternalServiceError {
  return new ExternalServiceError(service, message, statusCode);
}

/**
 * Create an encryption error.
 */
export function encryptionError(
  message: string,
  operation: 'encrypt' | 'decrypt'
): EncryptionError {
  return new EncryptionError(message, operation);
}

/**
 * Create a database error.
 */
export function databaseError(message: string, operation: string): DatabaseError {
  return new DatabaseError(message, operation);
}

// ============================================================================
// Error Handling Utilities
// ============================================================================

/**
 * Type guard to check if an error is a ConvexError.
 */
export function isConvexError(error: unknown): error is ConvexError {
  return error instanceof ConvexError;
}

/**
 * Type guard to check if an error is a specific ConvexError subclass.
 */
export function isErrorType<T extends ConvexError>(
  error: unknown,
  errorClass: new (...args: any[]) => T
): error is T {
  return error instanceof errorClass;
}

/**
 * Safely execute a function and convert any thrown error to a ConvexError.
 */
export async function safeExecute<T>(
  fn: () => Promise<T>,
  errorCode: string = ErrorCodes.INTERNAL_ERROR
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    throw ConvexError.fromError(error, errorCode);
  }
}

/**
 * Assert a condition, throwing a ConvexError if false.
 */
export function assert(
  condition: boolean,
  message: string,
  code: string = ErrorCodes.VALIDATION_ERROR,
  details?: Record<string, any>
): asserts condition {
  if (!condition) {
    throw new ConvexError(message, code, details);
  }
}

/**
 * Assert that a value is not null or undefined.
 */
export function assertDefined<T>(
  value: T | null | undefined,
  message: string = 'Value is required',
  code: string = ErrorCodes.VALIDATION_ERROR
): asserts value is T {
  if (value === null || value === undefined) {
    throw new ConvexError(message, code);
  }
}

/**
 * Assert that a resource exists.
 */
export function assertExists<T>(
  resource: T | null | undefined,
  resourceName: string,
  id?: string
): asserts resource is T {
  if (!resource) {
    throw notFound(resourceName, id);
  }
}

// ============================================================================
// Error Response Utilities
// ============================================================================

/**
 * Standard error response format for API consistency.
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
  };
  timestamp: number;
}

/**
 * Create a standardized error response object.
 */
export function createErrorResponse(
  error: ConvexError | Error | string
): ErrorResponse {
  const convexError = typeof error === 'string' 
    ? new ConvexError(error, ErrorCodes.INTERNAL_ERROR)
    : ConvexError.fromError(error);
  
  return {
    success: false,
    error: {
      code: convexError.code,
      message: convexError.message,
      details: convexError.details,
    },
    timestamp: Date.now(),
  };
}

/**
 * Check if an object is an error response.
 */
export function isErrorResponse(obj: any): obj is ErrorResponse {
  return (
    obj &&
    typeof obj === 'object' &&
    obj.success === false &&
    obj.error &&
    typeof obj.error.code === 'string' &&
    typeof obj.error.message === 'string'
  );
}