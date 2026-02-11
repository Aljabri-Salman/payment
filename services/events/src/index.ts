import { Elysia } from 'elysia'
import { db } from './db/database'
import * as schema from './db/schema';
import { sql } from "drizzle-orm";
// Create the Elysia app
const app = new Elysia()
// Home route
app.get('/', () => {
  return {
    message: 'Welcome to the Events Receiver API',
    version: '1.0.0',
    documentation: '/docs',
    healthcheck: '/healthcheck',
    database: {
      status: 'connected',
      endpoints: [
        '/events',
        '/events/stats',
        '/events/:type',
        '/events/receive (POST)'
      ]
    }
  }
})


app.get('/events', () => {
  let events = db.select().from(schema.events).all();
  return events;
});

app.listen(3000, () => {
  console.log(`🚀 Server is running at ${app.server?.hostname}:${app.server?.port}`)
  console.log(`📄 Home route: http://localhost:3000/`)
  console.log(`🏥 Healthcheck: http://localhost:3000/healthcheck`)
  console.log(`🗄️  Database: events.db (SQLite3)`)
  console.log(`📊 Events endpoint: http://localhost:3000/events`)
  console.log(`📨 Receive events: POST http://localhost:3000/events/receive`)
})

export default app