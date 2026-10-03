# Backend Redis Caching and Distributed Rate Limiting

## Purpose
Specify the Redis caching architecture, cache-aside pattern for catalog and categories, automated cache invalidation, and distributed API rate limiting.

## Requirements

### Requirement: Cache-Aside Implementation for Catalog
The backend SHALL cache frequently requested read-heavy endpoints (category trees, popular products, product details by slug) in Redis with predefined Time-To-Live (TTL) policies.

#### Scenario: Fetching cached category tree
- **WHEN** a client requests `/api/categories` and the key exists in Redis
- **THEN** the service MUST return the cached payload without executing database queries

#### Scenario: Cache miss resolution
- **WHEN** a client requests a product by slug not present in Redis
- **THEN** the service MUST fetch the entity from PostgreSQL, store the serialized JSON in Redis with configured TTL, and return the response

### Requirement: Targeted Cache Invalidation
The backend SHALL invalidate specific Redis cache keys whenever an entity is created, modified, or deleted by an administrator.

#### Scenario: Admin updates product pricing
- **WHEN** an administrator updates product `#501` through the admin API
- **THEN** the system MUST purge cached entries for product `#501`, its associated category lists, and the storefront catalog cache

### Requirement: Distributed Rate Limiting
The backend SHALL enforce distributed token bucket rate limiting via Redis on sensitive public endpoints (login, registration, checkout).

#### Scenario: Exceeding request rate limit
- **WHEN** a single IP address exceeds 10 login attempts within a 60-second window
- **THEN** the API MUST reject subsequent requests with HTTP 429 Too Many Requests
