# Nginx Reverse Proxy and Gateway Routing

## Purpose
Specify the centralized ingress reverse proxy responsible for path routing, client header forwarding, compression, SSL termination readiness, and service isolation.

## Requirements

### Requirement: Unified Ingress Path Routing
Nginx SHALL act as the single entrypoint on port 80/443, routing traffic based on URI prefixes to the respective upstream applications.

#### Scenario: Routing to Storefront
- **WHEN** an HTTP request arrives with root or non-prefixed paths (e.g., `/`, `/products`, `/categories`)
- **THEN** Nginx MUST proxy the request to the Next.js Storefront upstream service on port 3000

#### Scenario: Routing to Backend API
- **WHEN** an HTTP request arrives with the `/api/` path prefix
- **THEN** Nginx MUST proxy the request to the Spring Boot Backend upstream service on port 8080

#### Scenario: Routing to Admin Dashboard
- **WHEN** an HTTP request arrives with the `/admin` path prefix
- **THEN** Nginx MUST proxy the request to the Angular Admin Panel upstream service on port 80

#### Scenario: Routing to Object Storage Media
- **WHEN** an HTTP request arrives with the `/storage/` path prefix
- **THEN** Nginx MUST proxy the request to the MinIO object storage service on port 9000

### Requirement: Client Header and Proxy Forwarding
Nginx SHALL forward standard proxy headers including `Host`, `X-Real-IP`, `X-Forwarded-For`, and `X-Forwarded-Proto` to all upstream applications.

#### Scenario: Upstream receiving client IP
- **WHEN** a client initiates a request through Nginx
- **THEN** upstream applications MUST receive the originating client IP in the `X-Real-IP` and `X-Forwarded-For` HTTP headers

### Requirement: Performance and Compression
Nginx SHALL enable Gzip compression for text, JSON, CSS, JavaScript, and SVG assets.

#### Scenario: Gzip compression on JSON API responses
- **WHEN** a client sends an `Accept-Encoding: gzip` header requesting catalog or static data
- **THEN** Nginx MUST return a compressed response with `Content-Encoding: gzip`
