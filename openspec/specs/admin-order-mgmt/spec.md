# Admin Order Fulfillment and Customer Operations

## Purpose
Specify administrative interfaces for viewing and filtering customer orders, updating fulfillment and tracking information, processing refunds, and managing customer profiles.

## Requirements

### Requirement: Order Management Dashboard
The admin orders view SHALL display placed orders filterable by status (`PENDING_PAYMENT`, `PAID`, `PROCESSING`, `SHIPPED`, `DELIVERED`, `CANCELLED`), date range, and customer name.

#### Scenario: Filtering orders by status
- **WHEN** an operator selects the "PAID" status filter
- **THEN** the view MUST display all orders ready for warehouse fulfillment, with badge indicators showing elapsed time since payment

### Requirement: Order Fulfillment and Tracking Entry
The order detail screen SHALL enable administrators to transition orders to `SHIPPED`, assign shipping courier codes and tracking numbers, and trigger automated dispatch notification emails.

#### Scenario: Marking order as shipped
- **WHEN** an operator inputs tracking number `TRK-987654` and clicks "Confirm Shipment"
- **THEN** the system MUST transition the order to `SHIPPED`, persist tracking metadata, and dispatch a customer shipment notification via the backend
