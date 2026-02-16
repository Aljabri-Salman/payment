import { Elysia } from 'elysia'
import GatewayConnectionHandler from '../arch/handler'
import { VerifierNotFoundError, VerificationError } from '../verify/interface'
import requestID from '@/utils/request-id'
import {
  GatewayConnectionNotFoundError,
  DecryptionError,
  BadRequestError,
  InternalServerError,
  VerificationError as ApiVerificationError,
  VerifierNotFoundError as ApiVerifierNotFoundError,
  BaseApiError
} from './errors'
import { success, defaultLogger } from '../utils'

// TODO: make 64KB, but need to test with Stripe's payload first to ensure
// we don't truncate it. Stripe's docs don't specify max size, but some users have reported payloads around 50KB.
const MAX_BODY_SIZE = 1024 * 1024 // 1MB

async function handleWebhookRequest(params: any, request: Request) {
  const { "gateway-connection": gatewayConnectionID } = params
  const logger = defaultLogger.child({ component: 'webhook', isDev: true })

  logger.info('Webhook request received', {
    gatewayConnectionID,
    contentLength: request.headers.get('content-length')
  })

  if (!gatewayConnectionID) {
    throw new BadRequestError('Gateway connection ID is required')
  }

  // Check content-length header first
  const contentLength = parseInt(request.headers.get('content-length') || '0')
  if (contentLength > MAX_BODY_SIZE) {
    logger.warn('Payload too large', {
      gatewayConnectionID,
      contentLength,
      maxSize: MAX_BODY_SIZE
    })
    throw new BadRequestError('Payload too large')
  }

  const handler = new GatewayConnectionHandler(gatewayConnectionID)

  try {
    // Get raw body with size check
    const rawBody = await request.text()

    if (rawBody.length > MAX_BODY_SIZE) {
      throw new BadRequestError('Payload too large')
    }

    // Get gateway connection
    await handler.getGatewayConnection()

    // Verify payload
    const verificationResult = await handler.verifyPayload(rawBody, request.headers) as any

    if (!verificationResult.isValid) {
      logger.warn('Signature verification failed', {
        gatewayConnectionID,
        error: verificationResult.error
      })
      throw new ApiVerificationError(verificationResult.error || 'Invalid signature')
    }

    logger.info('Signature verification successful', { gatewayConnectionID })
    return success({
      message: 'Webhook received and verified',
      event: verificationResult.payload,
    })
  } catch (error) {
    // Re-throw API errors that already have status codes
    if (
      error instanceof GatewayConnectionNotFoundError ||
      error instanceof DecryptionError ||
      error instanceof BadRequestError ||
      error instanceof ApiVerificationError
    ) {
      throw error
    }

    // Convert verification layer errors to API errors
    if (error instanceof VerifierNotFoundError) {
      logger.warn('Verifier not found', { gatewayConnectionID, error: error.message })
      throw new ApiVerifierNotFoundError(error.message)
    }

    if (error instanceof VerificationError) {
      logger.warn('Verification error', { gatewayConnectionID, error: error.message })
      throw new ApiVerificationError(error.message)
    }

    logger.error('Unexpected error in webhook handler', { error: String(error), gatewayConnectionID })
    throw new InternalServerError('An unexpected error occurred processing the webhook')
  }
}

async function handleWebhook({params, request}: { params: any, request: Request }) {
  const { "gateway-connection": gatewayConnectionID } = params

}

export default new Elysia({ prefix: '' })
  .use(requestID())
  .post('/:gateway-connection1', handleWebhook) 


// export default new Elysia({ prefix: '' })
//   .use(requestID())
//   .post('/:gateway-connection',
//     async ({ params, set, request }) => {
//       try {
//         const result = await handleWebhookRequest(params, request)
//         set.status = result.status
//         return result.data
//       } catch (error) {
//         if (error instanceof BaseApiError) {
//           const response = error.toResponse()
//           set.status = response.status
//           return response.data
//         }

//         // Fallback for unknown errors
//         const logger = defaultLogger.child({ component: 'webhook' })
//         logger.error('Unhandled error in webhook route', { error: String(error) })

//         const internalError = new InternalServerError('An unexpected error occurred')
//         const response = internalError.toResponse(String(error))
//         set.status = response.status
//         return response.data
//       }
//     }
//   )