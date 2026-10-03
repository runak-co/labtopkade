# Storefront Customer Account Portal

## Purpose
Specify the customer account self-service portal, profile management, past order history tracking, and saved address book.

## Requirements

### Requirement: Customer Authentication Flow
The customer portal SHALL provide secure login, registration with email confirmation, and password reset workflows.

#### Scenario: Customer login
- **WHEN** a registered user submits valid credentials on `/account/login`
- **THEN** the storefront MUST store the access token securely in an HTTP-only cookie and redirect to the account dashboard

#### Scenario: Accessing protected account routes unauthenticated
- **WHEN** an unauthenticated visitor navigates directly to `/account` or `/account/orders`
- **THEN** the application MUST redirect them to `/account/login?returnUrl=/account`

### Requirement: Order History and Real-Time Tracking
The customer portal SHALL display a chronological list of placed orders with status badges, itemized receipts, and shipment tracking links.

#### Scenario: Viewing order details
- **WHEN** a customer clicks on order `#10045` in their history list
- **THEN** the UI MUST render the purchase date, item breakdown, payment status, tracking number, and downloadable invoice summary
