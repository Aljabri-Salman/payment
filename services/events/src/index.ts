import { Elysia } from 'elysia'
import { setupRoutes } from './routes'
import { Replicate } from './db/replicate'

const replicate = new Replicate()
const app = new Elysia()

setupRoutes(app)

app.listen(3001, async () => {
  console.log(`🚀 Server is running at ${app.server?.hostname}:${app.server?.port}`)
  console.log(`📄 Home route: http://localhost:3001/`)
  console.log(`📦 Merchants endpoint: http://localhost:3001/merchants`)
  console.log(`🔗 Gateway connection: http://localhost:3001/:gateway-connection`)
  try {
    await replicate.start()
  } catch (error) {
    console.error('❌ Failed to start replication:', error)
  }
})

process.on('SIGINT', () => {
  replicate.stop()
  process.exit(0)
})

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, shutting down...')
  replicate.stop()
  process.exit(0)
})

export default app