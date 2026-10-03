# Admin Catalog and Product Variant Management

## Purpose
Specify the administrative user interface for managing products, categories, image asset uploads, pricing tiers, and SKU matrix variants.

## Requirements

### Requirement: Product Data Table with Server-Side Pagination
The admin products screen SHALL provide a responsive data table featuring server-side pagination, sorting by price or updated date, status filtering, and live debounced text search.

#### Scenario: Searching product table
- **WHEN** an admin types "ThinkPad" into the search bar
- **THEN** the table MUST debounce input for 300ms, query `GET /api/admin/products?q=ThinkPad`, and display matching rows with total count pagination

### Requirement: Product and Variant Matrix Creation
The product creation form SHALL enable administrators to define base attributes, upload multiple product images with drag-and-drop ordering, and generate SKU combinations (e.g. Color x RAM x Storage).

#### Scenario: Generating SKU variant matrix
- **WHEN** an administrator selects 2 colors and 2 RAM configurations
- **THEN** the form MUST dynamically generate 4 SKU rows allowing individual price, stock quantity, and barcode specification
