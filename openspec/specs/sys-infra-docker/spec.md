# Infrastructure and Docker Orchestration

## Purpose
Specify the containerization, local development orchestration, multi-stage production Docker images, and command-line automation for all platform components.

## Requirements

### Requirement: Unified Docker Compose Local Environment
The repository SHALL provide a root `docker-compose.yml` that provisions the entire platform including Nginx, Storefront, Backend, Admin Panel, PostgreSQL, Redis, and MinIO storage with a single command.

#### Scenario: Running local development environment
- **WHEN** an engineer executes `make up` or `docker compose up -d`
- **THEN** all seven services MUST start, configure mutual bridge networking, pass automated healthchecks, and be reachable through Nginx port 80

#### Scenario: Database health dependency
- **WHEN** starting the backend service via Docker Compose
- **THEN** it MUST wait until PostgreSQL and Redis pass their readiness healthchecks before executing the application runtime

### Requirement: Multi-Stage Container Builds
All applications (Storefront, Backend, Admin Panel) SHALL provide optimized multi-stage Dockerfiles separating build-time dependencies from lean production runtime images.

#### Scenario: Storefront image build
- **WHEN** the Storefront Docker image is constructed
- **THEN** build dependencies and source TypeScript files MUST NOT be included in the final minimal Alpine production runner layer

#### Scenario: Backend image build
- **WHEN** the Backend Docker image is constructed
- **THEN** Maven toolchains and local cache artifacts MUST be discarded, retaining only the Temurin JRE runtime and compiled application JAR

### Requirement: Makefile Automation
The repository root SHALL provide a `Makefile` exposing standardized targets for starting, building, testing, and cleaning services.

#### Scenario: Executing make targets
- **WHEN** a developer runs `make help`
- **THEN** the system MUST display all commands including `up`, `down`, `build`, `test`, `logs`, and service-specific dev commands
