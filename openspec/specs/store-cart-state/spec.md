# Storefront Cart Management and State Sync

## Purpose
Specify shopping cart state persistence, client-side optimistic UI updates, guest cart cookies, and synchronization with backend customer cart sessions upon login.

## Requirements

### Requirement: Anonymous Guest Cart Persistence
The storefront SHALL allow unauthenticated users to add products to a shopping cart, persisted locally using cookies or browser storage.

#### Scenario: Guest adding item to cart
- **WHEN** an unauthenticated visitor clicks "Add to Cart"
- **THEN** the item, selected variant, quantity, and snapshot price MUST be recorded and displayed in the cart header counter

### Requirement: Guest-to-Customer Cart Merging
The storefront SHALL automatically synchronize and merge the local guest cart with the customer's remote backend cart when authenticating.

#### Scenario: User logs in with items in guest cart
- **WHEN** an unauthenticated user with 2 items in their local cart signs into their account
- **THEN** the storefront MUST send the local cart items to the backend merge endpoint and update the active cart with combined items

### Requirement: Optimistic Cart Modifications
The cart view SHALL provide immediate UI feedback for quantity increments, decrements, and item removals before confirming with the server.

#### Scenario: Incrementing item quantity
- **WHEN** a user taps "+" next to a cart item
- **THEN** the subtotal MUST immediately recalculate in the UI while dispatching an asynchronous update request in the background
