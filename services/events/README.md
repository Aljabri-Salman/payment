# Events Receiver API

A high-performance webhook events receiver built with Bun.js, TypeScript, Elysia.js, and SQLite3.

## Features

- **High Performance**: Built on Bun.js runtime for exceptional speed
- **Type Safety**: Full TypeScript support for better maintainability
- **Modern Framework**: Uses Elysia.js for elegant routing and middleware
- **SQLite3 Database**: Built-in database for event storage using Bun's native SQLite driver
- **Event Management**: Store, retrieve, and process webhook events
- **Health Monitoring**: Built-in healthcheck endpoint with database statistics
- **Production Ready**: Structured for scalability and maintainability

## Prerequisites

- [Bun.js](https://bun.sh/) (v1.0.0 or higher)

## Installation

```bash
# Install dependencies
bun install
```

## Available Scripts

```bash
# Start development server with hot reload
bun run dev

# Start production server
bun run start

# Build for production
bun run build

# Run tests
bun run test

# Test database connection
bun run test-db.ts
```

## Database Configuration

The application uses SQLite3 with Bun's built-in `bun:sqlite` driver. The database file (`events.db`) is automatically created in the project root.

### Database Schema

```sql
CREATE TABLE events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  payload TEXT NOT NULL,
  source TEXT,
  received_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  processed BOOLEAN DEFAULT FALSE,
  processed_at TIMESTAMP
);
```

Indexes are automatically created for:
- `event_type` column
- `received_at` column  
- `processed` column

## API Endpoints

### Home Route
**GET** `/`
```json
{
  "message": "Welcome to the Events Receiver API",
  "version": "1.0.0",
  "documentation": "/docs",
  "healthcheck": "/healthcheck",
  "database": {
    "status": "connected",
    "endpoints": [
      "/events",
      "/events/stats",
      "/events/:type",
      "/events/receive (POST)"
    ]
  }
}
```

### Health Check (with Database Stats)
**GET** `/healthcheck`
```json
{
  "status": "healthy",
  "timestamp": "2026-02-11T06:34:43.610Z",
  "uptime": 248.9691928,
  "memory": {
    "rss": 191102976,
    "heapTotal": 2998272,
    "heapUsed": 2474545,
    "external": 763777,
    "arrayBuffers": 120
  },
  "environment": "development",
  "database": {
    "status": "connected",
    "totalEvents": 15,
    "processedEvents": 3,
    "unprocessedEvents": 12,
    "eventTypes": [
      {"event_type": "user.created", "count": 5},
      {"event_type": "order.placed", "count": 7},
      {"event_type": "payment.processed", "count": 3}
    ]
  }
}
```

### Get All Events
**GET** `/events`
**Query Parameters:**
- `limit` (optional): Number of events to return (default: 100)

**Response:**
```json
{
  "success": true,
  "count": 3,
  "events": [
    {
      "id": 1,
      "event_type": "user.created",
      "payload": {"userId": 123, "name": "John Doe"},
      "source": "webhook",
      "received_at": "2026-02-11 06:45:00",
      "processed": true,
      "processed_at": "2026-02-11 06:46:00"
    }
  ]
}
```

### Get Events by Type
**GET** `/events/:type`
**Query Parameters:**
- `limit` (optional): Number of events to return (default: 50)

**Example:** `GET /events/user.created`
```json
{
  "success": true,
  "type": "user.created",
  "count": 2,
  "events": [...]
}
```

### Get Database Statistics
**GET** `/events/stats`
```json
{
  "success": true,
  "totalEvents": 15,
  "processedEvents": 3,
  "unprocessedEvents": 12,
  "eventTypes": [
    {"event_type": "user.created", "count": 5},
    {"event_type": "order.placed", "count": 7},
    {"event_type": "payment.processed", "count": 3}
  ]
}
```

### Receive New Event (Webhook)
**POST** `/events/receive`
**Headers:**
- `Content-Type: application/json`
- `X-Event-Source` (optional): Source identifier

**Request Body:**
```json
{
  "type": "user.created",
  "userId": 123,
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Event received successfully",
  "eventId": 16,
  "eventType": "user.created",
  "receivedAt": "2026-02-11T06:47:00.000Z"
}
```

### Mark Event as Processed
**POST** `/events/:id/process`
**Example:** `POST /events/1/process`
```json
{
  "success": true,
  "message": "Event marked as processed",
  "eventId": 1
}
```

## Project Structure

```
events-reciever/
├── src/
│   ├── index.ts          # Main application entry point
│   └── database.ts       # SQLite3 database configuration and operations
├── test-db.ts           # Database testing script
├── events.db           # SQLite3 database file (auto-created)
├── package.json        # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── bun.lock          # Bun lockfile
└── README.md         # This file
```

## Database Usage Examples

### Using the Database Singleton

```typescript
import { db } from './src/database'

// Insert a new event
const eventId = db.insertEvent('user.created', { userId: 123, name: 'John' }, 'webhook')

// Get all events
const events = db.getAllEvents(50)

// Get events by type
const userEvents = db.getEventsByType('user.created', 10)

// Mark event as processed
const success = db.markAsProcessed(eventId)

// Get database statistics
const stats = db.getStats()
console.log(`Total events: ${stats.totalEvents}`)
```

### Testing Database Connection

```bash
# Run the database test script
bun run test-db.ts
```

## Development

1. Clone the repository
2. Install dependencies: `bun install`
3. Start development server: `bun run dev`
4. The server will be available at `http://localhost:3000`
5. Database file (`events.db`) will be automatically created

## Testing Webhooks

You can test the webhook receiver using `curl`:

```bash
# Send a test event
curl -X POST http://localhost:3000/events/receive \
  -H "Content-Type: application/json" \
  -H "X-Event-Source: test-script" \
  -d '{
    "type": "order.placed",
    "orderId": 456,
    "amount": 99.99,
    "customer": "John Doe"
  }'

# Check received events
curl http://localhost:3000/events

# Get database statistics
curl http://localhost:3000/events/stats
```

## Technologies Used

- **Bun.js**: Fast JavaScript runtime with built-in SQLite support
- **TypeScript**: Type-safe JavaScript
- **Elysia.js**: High-performance web framework
- **SQLite3**: Embedded database for event storage
- **REST API**: Clean, intuitive API design

## Performance Benefits

- **Bun.js**: 3-4x faster than Node.js for HTTP requests
- **Built-in SQLite**: No external dependencies for database operations
- **Elysia.js**: Optimized for minimal overhead
- **TypeScript**: Early error detection and better developer experience
- **Modular Design**: Easy to extend and maintain

## License

MIT
