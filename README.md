# E-Commerce Platform — Full-Stack Monorepo

Production-grade e-commerce platform built with three independent applications behind an Nginx reverse proxy.

## System Architecture

```text
                         INTERNET
                            │
                            ▼
                    ┌───────────────┐
                    │    NGINX      │
                    │ Reverse Proxy │
                    └───────┬───────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │ Next.js  │   │  Spring  │   │ Angular  │
        │Storefront│   │  Boot    │   │  Admin   │
        └────┬─────┘   └────┬─────┘   └────┬─────┘
             │              │              │
             └──────────────┼──────────────┘
                            │
                            ▼
                    ┌───────────────┐
                    │  PostgreSQL   │
                    └───────────────┘
                            │
                    ┌───────┴───────┐
                    ▼               ▼
                  Redis          Storage (MinIO)
```

## Applications

1. **Storefront (`/storefront`)**: Next.js + React + TypeScript + App Router. Public customer-facing app with SSR/ISR, first-class SEO, dynamic JSON-LD structured data, and Core Web Vitals optimization.
2. **Backend (`/backend`)**: Java + Spring Boot + Spring Security + JPA + Flyway. Central business logic, REST APIs documented with OpenAPI/Swagger, JWT authentication, and RBAC.
3. **Admin Panel (`/admin`)**: Angular + TypeScript. Back-office dashboard for catalog, product variants, order processing, and customer management.
4. **Infrastructure (`/infrastructure`)**: Dockerfiles, Nginx reverse proxy configurations, and operational scripts.
5. **OpenSpec (`/openspec`)**: Spec-Driven Development (SDD) specifications broken down into granular, verifiable capabilities.

## Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 20+ (for local frontend dev)
- Java 21+ & Maven (for local backend dev)

### Run with Docker Compose
```bash
make up
```

Endpoints:
- **Storefront**: [http://localhost](http://localhost)
- **Admin Panel**: [http://localhost/admin](http://localhost/admin)
- **Backend API**: [http://localhost/api](http://localhost/api)
- **API Documentation**: [http://localhost/api/swagger-ui.html](http://localhost/api/swagger-ui.html)
- **MinIO Console**: [http://localhost:9001](http://localhost:9001)

## OpenSpec Validation
To validate all project specifications:
```bash
openspec validate --specs
```
