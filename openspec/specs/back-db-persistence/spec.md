# Backend PostgreSQL Persistence and Flyway Migrations

## Purpose
Specify PostgreSQL database configuration, versioned database schema migrations with Flyway, Spring Data JPA entities, auditing metadata, and HikariCP connection pooling.

## Requirements

### Requirement: Flyway Version-Controlled Schema Migrations
All database DDL modifications SHALL be managed exclusively through incremental, versioned Flyway SQL migration scripts in `src/main/resources/db/migration/`.

#### Scenario: Application startup database migration
- **WHEN** the Spring Boot backend starts up
- **THEN** Flyway MUST scan the migrations directory, compare applied versions in `flyway_schema_history`, and execute pending migrations sequentially before accepting requests

#### Scenario: No automatic Hibernate DDL generation in production
- **WHEN** running in production or development
- **THEN** Hibernate `ddl-auto` MUST be set to `validate` to forbid runtime DDL schema generation

### Requirement: Entity Auditing and Indexing
All JPA persistent entities SHALL inherit from an audited base class capturing `createdAt`, `updatedAt`, `createdBy`, and `updatedBy` timestamps automatically.

#### Scenario: Saving new entity
- **WHEN** a new Product or Order record is persisted
- **THEN** the persistence layer MUST automatically populate `createdAt` and `updatedAt` with the current UTC timestamp

#### Scenario: Database indexing on frequent query paths
- **WHEN** searching or filtering products by category ID, slug, or status
- **THEN** the database table MUST utilize dedicated B-Tree indexes to ensure sub-10ms lookups
