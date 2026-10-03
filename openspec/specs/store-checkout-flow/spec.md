# Storefront Checkout Workflow

## Purpose
Specify the multi-step checkout workflow, shipping address entry, delivery method calculation, payment gateway presentation, and order confirmation.

## Requirements

### Requirement: Step-by-Step Checkout Navigation
The checkout page SHALL guide customers through a validated multi-step process: Shipping Details, Delivery Method, Payment Selection, and Review.

#### Scenario: Advancing without required address fields
- **WHEN** a user attempts to proceed to shipping methods without filling required address fields (street, city, postal code)
- **THEN** the UI MUST display inline validation errors and prevent advancement to the next step

### Requirement: Dynamic Shipping Rate Calculation
The checkout flow SHALL request shipping rate calculations from the backend based on destination postal code and total cart weight/volume.

#### Scenario: Selecting delivery option
- **WHEN** a customer selects Express Delivery over Standard Delivery
- **THEN** the order summary total MUST dynamically update with the selected shipping surcharge

### Requirement: Idempotent Order Submission
The checkout submission SHALL attach an idempotency key to prevent accidental duplicate order creation and payments upon repeated clicks or network retry.

#### Scenario: User clicks complete order multiple times
- **WHEN** a user rapidly clicks "Place Order" repeatedly
- **THEN** the system MUST disable the submit button and send a single unique transaction token to the backend
