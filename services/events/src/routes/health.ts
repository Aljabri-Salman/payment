import { Elysia } from 'elysia'
import { db } from '../db/database'
import * as schema from '../db/schema'
import { Replicate } from '../db/replicate'

const replicate = new Replicate()

export default new Elysia({ prefix: '' })
  .get('/', ({ set }) => {
    set.status = 200
    return {
      message: 'Welcome to the Events Receiver API',
      version: '1.0.0',
      documentation: '/docs',
      healthcheck: '/healthcheck',
    }
  })
  .get('/healthcheck', async ({ set }) => {
    const memoryUsage = process.memoryUsage()

    let dbStatus = 'disconnected'
    let dbStats = { merchants: 0, gatewayConnections: 0 }

    try {
      const merchants = await db.select().from(schema.merchants)
      const gatewayConnections = await db.select().from(schema.gatewayConnections)
      dbStats = {
        merchants: merchants.length,
        gatewayConnections: gatewayConnections.length,
      }
      dbStatus = 'connected'
    } catch (error) {
      dbStatus = 'error'
    }

    const health = {
      status: dbStatus === 'connected' ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: {
        rss: memoryUsage.rss,
        heapTotal: memoryUsage.heapTotal,
        heapUsed: memoryUsage.heapUsed,
        external: memoryUsage.external,
      },
      environment: process.env.NODE_ENV || 'development',
      database: {
        status: dbStatus,
        merchants: dbStats.merchants,
        gatewayConnections: dbStats.gatewayConnections,
      },
      replication: {
        isRunning: replicate.isRunning?.() ?? false,
      },
    }

    set.status = dbStatus === 'connected' ? 200 : 503
    return health
  })