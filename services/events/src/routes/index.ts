import { Elysia } from 'elysia'
import healthRoutes from './health'
import merchantRoutes from './merchants'
import webhookRoutes from './webhook'

export function setupRoutes(app: Elysia) {
  return app
    .use(healthRoutes)
    .use(merchantRoutes)
    .use(webhookRoutes)
}