# Backend Clean Architecture and OpenAPI Contract

## Purpose
Specify the Spring Boot application design, domain-driven package organization, standardized REST response envelopes, global exception handling, and automated OpenAPI documentation.

## Requirements

### Requirement: Layered and Modular Architecture
The backend codebase SHALL enforce a clean separation of concerns: Web Controllers (`*.controller`), Application Services (`*.service`), Data Access (`*.repository`), and Domain Models (`*.model`).

#### Scenario: Controller isolation
- **WHEN** an HTTP request enters a Spring controller
- **THEN** the controller MUST NOT execute direct persistence queries or business validations, delegating all logic to domain services

### Requirement: Uniform Error and Problem Details Handling
The backend SHALL handle exceptions globally using `@ControllerAdvice`, formatting all error responses conforming to RFC 7807 Problem Details.

#### Scenario: Validation failure on incoming payload
- **WHEN** an incoming POST request fails Bean Validation constraints
- **THEN** the API MUST return HTTP 400 Bad Request with a JSON payload specifying `timestamp`, `status`, `error`, and field-specific validation messages

### Requirement: OpenAPI 3 / Swagger Documentation
The backend SHALL automatically generate and expose OpenAPI v3 interactive documentation at `/api/swagger-ui.html`.

#### Scenario: Accessing Swagger UI
- **WHEN** an authorized client accesses `/api/swagger-ui.html`
- **THEN** the page MUST render all controllers, request bodies, query parameters, authorization headers, and sample responses
