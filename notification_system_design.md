# Stage 1

## REST APIs

### GET Notifications

GET /notifications

Response:

{
  "notifications": [
    {
      "id": "1",
      "type": "Placement",
      "message": "Company hiring",
      "timestamp": "2026-04-22"
    }
  ]
}

### POST Notification

POST /notifications

Request:

{
  "type": "Placement",
  "message": "Microsoft hiring"
}

Response:

{
  "success": true
}

## Real-Time Design

Use WebSockets for real-time notification delivery.

## JSON Schema

{
  "id": "string",
  "type": "string",
  "message": "string",
  "timestamp": "date"
}

# Stage 2

## Database Choice

Use PostgreSQL because:
- ACID compliance
- reliable storage
- indexing support
- scalability

## Schema

Table: notifications

Columns:
- id
- studentId
- type
- message
- isRead
- createdAt

## Problems with Growth

- slower queries
- high DB load
- indexing challenges

## Improvements

- indexing
- pagination
- caching
- partitioning

# Stage 3

The query is slow because the table contains millions of rows.

## Solution

Create composite index:

CREATE INDEX idx_notifications
ON notifications(studentId, isRead, createdAt DESC);

## Why

This improves:
- filtering
- sorting
- query speed

Adding indexes on every column is not recommended because:
- increased storage
- slower inserts
- higher maintenance cost

# Stage 4

## Suggested Solution

Use Redis caching.

## Tradeoffs

Advantages:
- faster reads
- reduced DB load

Disadvantages:
- eventual consistency
- cache invalidation complexity

## Additional Improvements

- pagination
- lazy loading
- CDN

# Stage 5

## Problems

- email failure causes inconsistency
- DB and email are tightly coupled

## Better Design

Use message queue.

## Revised Flow

1. Save notification in DB
2. Push job to queue
3. Worker sends emails asynchronously
4. Retry failed jobs

## Technologies

- RabbitMQ
- Kafka
- BullMQ

# Stage 6

## Priority Inbox Design

Priority Score Formula:

priority =
(typeWeight * 0.7) +
(recencyWeight * 0.3)

## Data Structures

Use:
- Max Heap
- Priority Queue

## Top 10 Retrieval

Heap returns top notifications efficiently.

## Handling Continuous Notifications

Maintain rolling heap updates whenever new notifications arrive.