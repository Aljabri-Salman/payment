# Webhook Scaling Implementation Guide

## Overview
This document outlines the comprehensive plan for building a scalable webhook system that can handle 1 to 30,000 requests per second (RPS) with auto-scaling capabilities.

## Architecture Decisions

### 1. Technology Stack
- **Ingestion Layer:** Go (for high performance, low memory footprint)
- **Rate Limiting:** Redis (ElastiCache for production)
- **Queueing:** AWS SQS (Standard Queue for unlimited throughput)
- **Processing:** AWS Lambda (Go runtime with provisioned concurrency)
- **Storage:** S3 (raw payloads), DynamoDB (processed events), ClickHouse (analytics)
- **Front Door:** CloudFront + AWS WAF (DDoS protection, IP allowlisting)

### 2. Project Structure
- **Separate Project:** `/sooq-webhooks/` (sibling to current project)
- **Rationale:** Independent scaling, technology flexibility, clear separation of concerns

### 3. Webhook Flow (Optimized)
```
1. Webhook arrives
2. Infrastructure rate limiting (IP-based via AWS WAF)
3. Basic validation (size < 64KB, valid JSON)
4. Idempotency check (FIRST - before expensive operations)
5. Signature verification
6. Business rate limiting (merchant-based via Redis)
7. Push to Redis queue
8. Return 200 OK (within 50-100ms)
9. Async: Object storage → ClickHouse
```

## Cost Comparison (Monthly USD)

| RPS | Daily Requests | Monthly Cost | Architecture |
|-----|---------------|--------------|--------------|
| 1 | 86,400 | ~$15 | Local Go + Redis |
| 10 | 864,000 | ~$100 | API Gateway + Lambda |
| 100 | 8.6M | ~$1,000 | ALB + Fargate |
| 500 | 43.2M | ~$5,000 | Full AWS managed |
| 1,000 | 86.4M | ~$10,000 | Multi-region ready |
| 30,000 | 2.6B | ~$50,000 | Enterprise scale |

## Implementation Phases

### Phase 1: Local Development (Week 1-2)
- Build Go webhook server locally
- Implement Redis rate limiting
- Create file-based queue system
- Integrate with existing Convex backend
- Comprehensive testing suite

### Phase 2: AWS Deployment (Week 3-4)
- Terraform infrastructure as code
- API Gateway + Lambda setup
- SQS queue configuration
- CloudFront + WAF configuration
- Monitoring with CloudWatch/X-Ray

### Phase 3: Advanced Features (Week 5-6)
- Multi-region deployment
- Advanced rate limiting tiers
- ClickHouse integration
- Advanced monitoring/alerting
- Disaster recovery setup

## Rate Limiting Strategy

### 1. Infrastructure Rate Limiting (IP-based)
- **AWS WAF:** 5,000 requests/5min per IP (default)
- **Allowlisted IPs:** Stripe, PayPal (no rate limiting)
- **CloudFront:** Additional DDoS protection

### 2. Business Rate Limiting (Merchant-based)
- **Basic tier:** 100 RPS per merchant
- **Premium tier:** 1,000 RPS per merchant
- **Enterprise tier:** 10,000 RPS per merchant
- **Payment gateways:** Unlimited (Stripe, PayPal)

### 3. Redis Implementation
```go
// Key: rate:{merchantId}:{gateway}:{timestamp}
// Value: request count
// TTL: 2 minutes (sliding window)
```

## Idempotency Check Optimization

### Current Problem:
Idempotency check happens AFTER signature verification (expensive operation)

### Optimized Flow:
1. Extract event ID from payload (if available)
2. Check Redis SETNX with TTL (atomic operation)
3. If duplicate → return 200 OK immediately
4. If new → proceed with signature verification

### Benefits:
- 80%+ reduction in CPU usage (for duplicate webhooks)
- Faster response times
- Lower infrastructure costs

## Payment Gateway Considerations

### Stripe:
- **IP ranges:** Allowlist all Stripe IPs (no rate limiting)
- **Webhook behavior:** Retries for 3 days with exponential backoff
- **Event volume:** Can spike during sales events

### PayPal:
- **IP ranges:** Allowlist PayPal IPs
- **Signature verification:** HMAC-SHA256
- **Event types:** Payment completed, refunded, etc.

### Hyperpay:
- **Signature:** Custom header verification
- **Payload:** JSON with specific structure

## Local Development Setup

### Without Docker:
```
1. Install Go 1.21+
2. Install Redis (optional - can use in-memory)
3. Run: go run cmd/server/main.go
4. Test: curl -X POST http://localhost:8080/webhooks
```

### Folder Structure:
```
/sooq-webhooks/
  ├── cmd/
  │   ├── server/          # HTTP server
  │   └── worker/          # Queue worker
  ├── internal/
  │   ├── handlers/        # HTTP handlers
  │   ├── ratelimit/       # Rate limiting
  │   ├── queue/           # Queue abstraction
  │   ├── storage/         # Storage interfaces
  │   └── webhook/         # Webhook validation
  ├── pkg/
  │   ├── redis/           # Redis client
  │   └── types/           # Shared types
  ├── scripts/             # Build/test scripts
  └── terraform/           # AWS infrastructure
```

## Integration with Existing Convex Backend

### Option A: Direct Mutation Call
- Webhook system calls Convex mutation via HTTP
- Simple but couples the systems

### Option B: Redis Queue Bridge
- Webhook system pushes to Redis queue
- Convex polls queue via scheduled function
- Decoupled, resilient

### Option C: Shared Database
- Both systems write to same database
- Requires database schema coordination

**Recommended:** Option B (Redis Queue Bridge)

## Testing Strategy

### 1. Unit Tests
- Go's built-in testing framework
- Mock external dependencies
- Test rate limiting logic

### 2. Integration Tests
- Test with LocalStack (AWS emulation)
- Test Redis integration
- Test Convex integration

### 3. Load Testing
- **Tool:** k6 or wrk
- **Target:** 30K RPS locally
- **Metrics:** Latency, throughput, error rate

### 4. Payment Gateway Simulation
- Mock Stripe/PayPal webhooks
- Test signature verification
- Test retry logic

## Deployment Strategy

### 1. Blue-Green Deployment
- Zero-downtime deployments
- Easy rollback capability
- Traffic switching at CloudFront level

### 2. Canary Releases
- Gradually shift traffic to new version
- Monitor metrics before full rollout
- Automatic rollback on errors

### 3. Infrastructure as Code
- Terraform for all AWS resources
- Version controlled infrastructure
- Repeatable deployments

## Monitoring and Alerting

### Key Metrics:
- `WebhookRequestCount` (per gateway, per merchant)
- `WebhookLatency` (P50, P95, P99)
- `RateLimitHits` (per rule)
- `QueueDepth` (SQS messages waiting)
- `ErrorRate` (4xx, 5xx responses)

### Alerts:
- Error rate > 1% for 5 minutes
- Latency P95 > 500ms for 5 minutes
- Queue depth > 10,000 messages
- Rate limit hits > 1000/minute

## Security Considerations

### 1. IP Allowlisting
- Allowlist payment gateway IPs
- Block unknown IPs aggressively
- Use AWS WAF managed rules

### 2. Signature Verification
- Verify all webhook signatures
- Use secure secret storage (AWS Secrets Manager)
- Regular secret rotation

### 3. Data Protection
- Encrypt data at rest (S3, DynamoDB)
- Encrypt data in transit (TLS 1.3)
- PCI DSS compliance for payment data

## Performance Targets

### Response Time:
- **P50:** < 50ms
- **P95:** < 100ms
- **P99:** < 200ms

### Throughput:
- **Target:** 30,000 RPS
- **Burst capacity:** 50,000 RPS for 5 minutes
- **Sustained:** 10,000 RPS indefinitely

### Availability:
- **Target:** 99.95% uptime
- **Multi-region:** Active-active configuration
- **Recovery:** RTO < 5 minutes, RPO < 1 minute

## Next Steps

### Immediate (Day 1):
1. Create Go project structure
2. Implement basic webhook validation
3. Add Redis rate limiting
4. Create integration tests

### Short-term (Week 1):
1. Complete local implementation
2. Load testing to 1K RPS
3. Integration with Convex backend
4. Documentation

### Medium-term (Month 1):
1. AWS deployment
2. Production monitoring
3. Payment gateway testing
4. Go-live preparation

### Long-term (Quarter 1):
1. Multi-region deployment
2. Advanced rate limiting
3. ClickHouse analytics
4. Enterprise features

## Contact and Support

- **Implementation Team:** [Your team]
- **AWS Account:** [Your AWS account]
- **Monitoring Dashboard:** CloudWatch → WebhookDashboard
- **Emergency Contact:** [On-call rotation]

---

*This document was generated based on planning discussions on February 8, 2026. Last updated: [Current Date]*

*For updates or questions, refer to the implementation code in `/sooq-webhooks/` directory.*