import { Elysia } from 'elysia'
import requestID from '@/utils/request-id'
import { WebhookHandler } from '../handler'

export default new Elysia({ prefix: '' })
  .use(requestID())
  .post('/:gateway-connection',
    async ({ params, set, request }) => {
      const { "gateway-connection": gatewayConnectionId } = params
      
      // Get raw body
      const rawBody = await request.text()
      const contentLength = parseInt(request.headers.get('content-length') || '0')
      
      // Create handler instance and process
      const handler = new WebhookHandler({
        gatewayConnectionId,
        rawBody,
        headers: request.headers,
        contentLength
      })
      
      const response = await handler.process()
      set.status = response.status
      return response.data
    }
  )