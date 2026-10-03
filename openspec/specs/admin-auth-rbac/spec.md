# Admin Authentication and Role-Based Guards

## Purpose
Specify administrative login, JWT authentication interceptors, automatic token refresh, Angular route guards, and granular UI permission directives.

## Requirements

### Requirement: Admin Authentication Guard
The admin application SHALL protect all dashboard routes using functional `CanActivateFn` route guards that verify token validity before activating views.

#### Scenario: Unauthenticated access attempt
- **WHEN** an unauthenticated visitor attempts to access `/admin/dashboard`
- **THEN** the guard MUST abort navigation and redirect to `/admin/login`

### Requirement: Centralized HTTP Interceptor
The application SHALL implement an `HttpInterceptorFn` that attaches `Authorization: Bearer <token>` to all outgoing backend API requests and catches HTTP 401/403 responses.

#### Scenario: Interceptor handling 401 Unauthorized
- **WHEN** the backend returns a 401 Unauthorized status on an administrative API call
- **THEN** the interceptor MUST attempt refresh token rotation, replaying the original request on success or logging out the user on failure

### Requirement: Permission-Based Element Visibility
The admin UI SHALL provide structural directives (e.g. `*hasRole="'ADMIN'"`) to conditionally render sensitive actions such as inventory deletion, refund processing, or role modifications.

#### Scenario: Manager role viewing products
- **WHEN** a user with `ROLE_MANAGER` views the products table
- **THEN** edit buttons MUST remain active while hard deletion buttons MUST be omitted from the DOM
