# Backend Spring Security and Stateless Authentication

## Purpose
Specify Spring Security configuration, stateless JWT authentication with short-lived access tokens and refresh tokens, BCrypt password hashing, and role-based access control.

## Requirements

### Requirement: Stateless JWT Authentication
The backend SHALL authenticate HTTP requests statelessly using signed JSON Web Tokens (JWT) containing subject identity, expiration timestamps, and granted authorities.

#### Scenario: Valid JWT presented in Authorization header
- **WHEN** an incoming request includes `Authorization: Bearer <valid_token>`
- **THEN** Spring Security filter MUST validate the cryptographic signature, populate the `SecurityContext`, and permit execution

#### Scenario: Expired or tampered token
- **WHEN** an incoming request includes an expired or invalid token
- **THEN** the filter MUST reject the request with HTTP 401 Unauthorized

### Requirement: Role-Based Access Control (RBAC)
The backend SHALL enforce authorization barriers distinguishing customer roles (`ROLE_CUSTOMER`) from administrative roles (`ROLE_ADMIN`, `ROLE_MANAGER`).

#### Scenario: Non-admin accessing admin endpoints
- **WHEN** a authenticated customer with `ROLE_CUSTOMER` attempts to call `/api/admin/products`
- **THEN** Spring Security MUST reject the request with HTTP 403 Forbidden

### Requirement: Credential Security and Token Refresh
User passwords SHALL be hashed using BCrypt with a minimum work factor of 12, and long-lived sessions MUST be maintained using refresh token rotation.

#### Scenario: Refreshing access token
- **WHEN** a client submits a valid refresh token to `/api/auth/refresh`
- **THEN** the backend MUST issue a new short-lived access token and rotate the refresh token
