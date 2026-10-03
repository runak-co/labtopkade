# Backend Product Catalog and Inventory Management

## Purpose
Specify backend services and REST APIs for products, categories, SKU variants, attributes, brands, stock tracking, and inventory reservation.

## Requirements

### Requirement: Product and Variant Domain Model
The catalog service SHALL support hierarchical categories, products, and SKU variants with distinct pricing, stock quantities, and attributes (e.g., color, RAM, storage).

#### Scenario: Querying product with variants
- **WHEN** a client calls `GET /api/products/{slug}`
- **THEN** the API MUST return the parent product along with all available SKU variants, inventory levels, and attribute combinations

### Requirement: Atomic Inventory Reservation
The backend SHALL execute atomic inventory checks and temporary reservation during checkout to prevent overselling.

#### Scenario: Reserving stock during checkout
- **WHEN** an order is initiated for an item with 3 remaining units
- **THEN** the inventory service MUST atomically decrement available stock with pessimistic/optimistic locking, releasing the hold if checkout expires

#### Scenario: Insufficient inventory error
- **WHEN** an order requests quantity greater than available stock
- **THEN** the API MUST abort order creation and return HTTP 409 Conflict with details on unavailable SKUs
