export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: ResponseMeta;
}

export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
}

export interface ResponseMeta {
  timestamp: string;
  requestId?: string;
  version: string;
}

export type HttpStatusCode = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 409 | 422 | 429 | 500 | 501 | 502 | 503;

export const ErrorCodes = {
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  RATE_LIMITED: 'RATE_LIMITED',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
} as const;

export function success<T>(data: T, status: HttpStatusCode = 200): { data: T; status: HttpStatusCode } {
  return { data, status };
}

export function created<T>(data: T): { data: T; status: 201 } {
  return { data, status: 201 };
}

export function noContent(): { status: 204 } {
  return { status: 204 };
}

export function error(
  code: string,
  message: string,
  status: HttpStatusCode,
  details?: unknown
): { data: ApiResponse; status: HttpStatusCode } {
  return {
    data: {
      success: false,
      error: { code, message, details },
      meta: { timestamp: new Date().toISOString(), version: '1.0.0' },
    },
    status,
  };
}

export function badRequest(message: string, details?: unknown) {
  return error(ErrorCodes.BAD_REQUEST, message, 400, details);
}

export function unauthorized(message: string = 'Unauthorized', details?: unknown) {
  return error(ErrorCodes.UNAUTHORIZED, message, 401, details);
}

export function forbidden(message: string = 'Forbidden') {
  return error(ErrorCodes.FORBIDDEN, message, 403);
}

export function notFound(resource: string) {
  return error(ErrorCodes.NOT_FOUND, `${resource} not found`, 404);
}

export function conflict(message: string) {
  return error(ErrorCodes.CONFLICT, message, 409);
}

export function validationError(message: string, details?: unknown) {
  return error(ErrorCodes.VALIDATION_ERROR, message, 422, details);
}

export function rateLimited(message: string = 'Too many requests') {
  return error(ErrorCodes.RATE_LIMITED, message, 429);
}

export function internalError(message: string = 'An unexpected error occurred', details?: unknown) {
  return error(ErrorCodes.INTERNAL_ERROR, message, 500, details);
}

export function serviceUnavailable(message: string = 'Service temporarily unavailable') {
  return error(ErrorCodes.SERVICE_UNAVAILABLE, message, 503);
}


