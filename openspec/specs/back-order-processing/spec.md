# Backend Order Processing and Lifecycle Management

## Purpose
Specify order placement, server-side price validation, order state machine transitions, and database transaction guarantees.

## Requirements

### Requirement: Server-Side Price Verification
The order service SHALL independently calculate unit prices, line item totals, shipping costs, discounts, and taxes using backend source-of-truth data, ignoring client-submitted price totals.

#### Scenario: Client sends altered product price
- **WHEN** a client submits a checkout request containing a modified price value
- **THEN** the backend MUST discard the client price, fetch the database price, and charge the validated amount

### Requirement: Strict Order State Machine Transitions
Orders SHALL follow a formalized lifecycle: `PENDING_PAYMENT` -> `PAID` -> `PROCESSING` -> `SHIPPED` -> `DELIVERED`, or `CANCELLED`.

#### Scenario: Transitioning upon successful payment
- **WHEN** a verified payment webhook or confirmation arrives for order `ORD-1002`
- **THEN** the order status MUST update to `PAID`, triggering inventory commitment and customer confirmation notifications

#### Scenario: Invalid state transition prevention
- **WHEN** an admin or API attempts to transition an order directly from `CANCELLED` to `SHIPPED`
- **THEN** the system MUST reject the transition with an illegal state domain exception
