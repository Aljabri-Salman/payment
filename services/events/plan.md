# Payment Events Service - Implementation Plan

## Overview
Build a service that receives payment webhook events from multiple gateways (Stripe, PayPal, etc.), validates signatures, stores events in a unified format, and provides observability and analytics.

---

## Phase 1: Core Infrastructure

### 1.1 Database Schema Enhancement
- **Unified Events Table**: Create a normalized `payment_events` table to store all payment events regardless of gateway
  - `_id`: Unique identifier (UUID)
  - `merchantId`: Reference to merchant
  - `gatewayConnectionId`: Source gateway connection
  - `gateway`: Gateway type (stripe, paypal, etc.)
  - `eventType`: Payment event type (payment_intent.succeeded, charge.refunded, etc.)
  - `eventId`: Original gateway event ID
  - `payload`: Full JSON payload from gateway
  - `status`: Processing status (received, verified, stored, failed)
  - `signatureValid`: Boolean - whether signature was valid
  - `processedAt`: Timestamp when event was processed
  - `createdAt`: Event creation timestamp

- **Indexes**: Add indexes on `merchantId`, `gateway`, `eventType`, `status`, `createdAt`

### 1.2 Gateway Signature Verification
- **Stripe**: Complete implementation in `src/verify/stripe.ts`
  - Already has signature parsing and HMAC verification
  - Need to integrate with webhook handler in `index.ts`

- **PayPal**: Add `src/verify/paypal.ts`
  - Implement PayPal signature verification using their SDK or manual verification

- **Generic Gateway Interface**: Create `src/verify/types.ts`
  ```typescript
  interface GatewayVerifier {
    verify(payload: string, signature: string, secret: string): Promise<VerificationResult>;
    getSignatureHeaderName(): string;
  }
  ```

---

## Phase 2: Event Processing Pipeline

### 2.1 Webhook Handler Enhancement
- **Request Flow**:
  1. Receive webhook POST request
  2. Parse gateway connection ID from URL
  3. Fetch gateway connection with decrypted secret
  4. Extract signature from appropriate header
  5. Verify signature using gateway-specific verifier
  6. Parse and normalize event payload
  7. Store in unified events table
  8. Return 200 OK to gateway

### 2.2 Event Normalization
- Create `src/events/transformer.ts` to normalize events from different gateways into unified format
- Map gateway-specific event types to internal event types

### 2.3 Error Handling
- Return proper HTTP status codes:
  - 200: Event received and processed
  - 401: Invalid signature
  - 404: Gateway connection not found
  - 400: Malformed request
  - 500: Internal error

---

## Phase 3: Observability

### 3.1 Structured Logging
- Use a logging library (e.g., `pino` or `winston`)
- Log levels: debug, info, warn, error
- Include: timestamp, correlationId, merchantId, gateway, eventType, status
- Add request/response logging middleware

### 3.2 Metrics
- **Counters**: Total events, verified events, failed verifications, events by gateway
- **Histograms**: Event processing duration, signature verification time
- **Gauges**: Queue depth (if async processing), active connections

- Export metrics in Prometheus format at `/metrics` endpoint

### 3.3 Health Checks
Enhance existing `/healthcheck`:
- Database connectivity
- Cache health
- Replication status
- Recent error rate

### 3.4 Distributed Tracing
- Add trace IDs to all requests
- Integrate with OpenTelemetry for span propagation

---

## Phase 4: Analytics

### 4.1 Analytics Endpoints
- **GET /analytics/events**: Query events with filters
  - Filters: merchantId, gateway, eventType, status, dateRange
  - Pagination: limit, offset
  - Sort: createdAt (asc/desc)

- **GET /analytics/summary**: Aggregated statistics
  - Total events by gateway
  - Events by type
  - Success/failure rates
  - Time-series data (hourly/daily counts)

### 4.2 Dashboard Data
- Event volume over time
- Success rate by gateway
- Top event types
- Error breakdown

---

## Phase 5: Reliability & Performance

### 5.1 Idempotency
- Use eventId + gateway as unique constraint
- Prevent duplicate processing of same event

### 5.2 Async Processing (Optional)
- For high-volume scenarios, use a message queue
- Process events asynchronously after initial receipt
- Implement retry logic for failed processing

### 5.3 Rate Limiting
- Add rate limiting per gateway connection
- Protect against webhook abuse

---

## Phase 6: Scalability for High-Scale Production

### 6.1 Architecture Overview
- Move from synchronous to event-driven architecture
- Use message queue for async event processing
- Implement horizontal scaling with multiple instances

### 6.2 Message Queue Integration
- **Technology**: RabbitMQ, Apache Kafka, or AWS SQS
- **Flow**:
  1. Webhook received → Validate signature → Acknowledge immediately (200 OK)
  2. Push event to queue for async processing
  3. Worker processes queue messages → Store in database
  4. Failed processing → Retry with exponential backoff → Dead letter queue

### 6.3 Database Scaling Strategies
- **Read Replicas**: Distribute analytics queries across replicas
- **Sharding**: Shard by merchantId for tenant isolation
- **Partitioning**: Partition `payment_events` table by date (monthly)
- **Connection Pooling**: Use PgBouncer or similar for connection management
- **Caching**:
  - Redis for hot data (recent events, merchant configs)
  - CDN for analytics aggregations

### 6.4 Horizontal Scaling
- **Stateless Service**: All state in DB/Redis, enable multiple instances
- **Load Balancer**: Distribute traffic across instances (nginx, AWS ALB)
- **Auto-scaling**: Scale based on request rate, queue depth, CPU usage
- **Stateless Webhook Endpoints**: Return 200 immediately, process async

### 6.5 Event Processing Optimization
- **Batch Processing**: Process multiple events in a single transaction
- **Parallel Workers**: Multiple workers processing different gateways/event types
- **Priority Queues**: High-priority events (payments, refunds) processed first
- **Backpressure Handling**: Reject new requests when queue is full (503 Service Unavailable)

### 6.6 Caching Strategy
- **L1 Cache**: In-memory cache for gateway connections (existing TTL cache)
- **L2 Cache**: Redis for frequently accessed merchant configs
- **Cache Invalidation**: Update cache on gateway connection changes
- **Cache Warming**: Preload critical merchant data on startup

### 6.7 High-Availability Setup
- **Multi-Region Deployment**: Deploy in multiple regions for disaster recovery
- **Database Failover**: Automatic failover to read replica if primary fails
- **Circuit Breaker**: Prevent cascade failures when downstream services fail
- **Graceful Degradation**: Disable analytics if DB is under load

### 6.8 Performance Benchmarks & Targets
- **Latency**:
  - Signature verification: < 10ms p99
  - Event acknowledgment: < 50ms p99
  - Analytics queries: < 500ms p99
- **Throughput**:
  - Handle 10,000+ webhooks/second
  - Process 100,000+ events/minute
- **Availability**: 99.99% uptime (multi-region)

### 6.9 Monitoring at Scale
- **Real-time Dashboards**: Event rate, queue depth, processing latency
- **Alerting**: High error rate, queue backlog, latency spikes
- **Capacity Planning**: Track growth trends, plan scaling ahead

### 6.10 Cost Optimization
- **Compute**: Use spot/preemptible instances for workers
- **Database**: Right-size instances, use reserved capacity
- **Queue**: Delete processed messages promptly, set TTL on queue entries
- **Analytics**: Pre-aggregate data, use materialized views

---

## Scalability Architecture Diagram

```
                                    ┌─────────────────────────────────────┐
                                    │         Load Balancer               │
                                    │    (nginx / AWS ALB / Cloudflare)   │
                                    └──────────────┬──────────────────────┘
                                                   │
                    ┌──────────────────────────────┼──────────────────────────────┐
                    │                              │                              │
          ┌─────────▼──────────┐       ┌──────────▼──────────┐       ┌─────────▼──────────┐
          │   Instance 1       │       │   Instance 2        │       │   Instance N       │
          │  (Stateless API)   │       │  (Stateless API)    │       │  (Stateless API)   │
          └──────────┬─────────┘       └──────────┬──────────┘       └──────────┬─────────┘
                     │                              │                           │
                     └──────────────────────────────┼───────────────────────────┘
                                                    │
                                    ┌───────────────▼──────────────────────┐
                                    │        Message Queue                 │
                                    │   (RabbitMQ / Kafka / SQS)           │
                                    │         (Pending Events)             │
                                    └───────────────┬──────────────────────┘
                                                    │
                         ┌──────────────────────────┼──────────────────────────┐
                         │                          │                          │
              ┌──────────▼──────────┐    ┌─────────▼─────────┐    ┌────────▼────────┐
              │  Worker: Stripe     │    │  Worker: PayPal   │    │  Analytics Worker│
              └──────────┬──────────┘    └──────────┬────────┘    └────────┬────────┘
                         │                           │                     │
                         └───────────────────────────┼─────────────────────┘
                                                     │
                                    ┌───────────────▼──────────────────────┐
                                    │         PostgreSQL                   │
                                    │    (Primary + Read Replicas)         │
                                    │    - payment_events                  │
                                    │    - merchants                       │
                                    │    - gateway_connections             │
                                    └──────────────────────────────────────┘
                                                     │
                         ┌───────────────────────────┼───────────────────────────┐
                         │                           │                           │
              ┌──────────▼──────────┐      ┌────────▼────────┐      ┌────────▼────────┐
              │      Redis          │      │   Elasticsearch  │      │   Prometheus    │
              │   (Cache / Queue)  │      │   (Logs Search)  │      │   (Metrics)     │
              └─────────────────────┘      └──────────────────┘      └──────────────────┘
```

---

## Implementation Priority

1. **Week 1**: Complete Stripe verification, enhance schema, basic webhook handler
2. **Week 2**: Add PayPal support, event storage, idempotency
3. **Week 3**: Observability (logging, metrics, health checks)
4. **Week 4**: Analytics endpoints, rate limiting
5. **Week 5**: Testing, documentation, performance optimization
6. **Week 6-8**: Scalability implementation (queue, workers, Redis, read replicas)
