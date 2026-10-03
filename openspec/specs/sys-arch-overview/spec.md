# System Architecture Overview

## Purpose
Define the high-level decoupled architecture for the e-commerce platform comprising three independent applications (Storefront, Backend, and Admin Panel) coordinated through an Nginx reverse proxy, PostgreSQL database, Redis cache, and object storage.

## Requirements

### Requirement: Independent Application Decoupling
The Storefront (Next.js), Admin Panel (Angular), and Backend (Spring Boot) SHALL operate as logically independent applications with dedicated deployment boundaries and zero compile-time dependencies between each other.

#### Scenario: Frontend applications interact exclusively via HTTP API
- **WHEN** the Storefront or Admin Panel needs data or executes business logic
- **THEN** it MUST communicate solely through backend REST APIs and NEVER connect directly to the database or internal storage services

#### Scenario: Backend changes without frontend rebuilds
- **WHEN** the backend is redeployed or scaled horizontally
- **THEN** the Storefront and Admin Panel MUST continue serving static and cached traffic without requiring downtime or coordinated re-compilation

### Requirement: API-First Contract Documentation
The Backend SHALL provide an interactive OpenAPI v3 specification documenting all public customer and administrative endpoints.

#### Scenario: Viewing API contract
- **WHEN** developers or automated code generators access `/api/swagger-ui.html` or `/api/v3/api-docs`
- **THEN** the system MUST display all available REST endpoints, request schemas, validation rules, and response codes

### Requirement: Microservices Readiness
The domain boundaries in the backend SHALL be modularized by domain (catalog, order, cart, user, payment) to allow future extraction into autonomous microservices.

#### Scenario: Module isolation
- **WHEN** examining domain packages within the backend
- **THEN** each module MUST encapsulate its entities, repositories, and domain services without circular dependencies across modules
