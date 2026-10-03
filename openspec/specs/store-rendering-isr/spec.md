# Storefront Hybrid Rendering and ISR Strategy

## Purpose
Specify the rendering strategy across all storefront routes, enforcing Server Components, Incremental Static Regeneration (ISR), static site generation, and targeted client-side rendering for optimal Core Web Vitals and SEO.

## Requirements

### Requirement: Static and ISR Rendering for High-Traffic Public Pages
The storefront SHALL render public catalog pages (Homepage, Category pages, Product detail pages) using SSG and Incremental Static Regeneration (ISR) with explicit revalidation intervals.

#### Scenario: Homepage rendering
- **WHEN** a visitor navigates to the homepage (`/`)
- **THEN** Next.js MUST serve a statically pre-rendered HTML page with ISR revalidation enabled (e.g., 3600 seconds)

#### Scenario: Category and Product page revalidation
- **WHEN** a product detail page (`/products/[slug]`) or category page (`/categories/[slug]`) is requested
- **THEN** Next.js MUST serve pre-rendered HTML while asynchronously regenerating stale pages in the background according to defined revalidation windows

### Requirement: Dynamic Server Rendering for Real-Time Querying
The storefront SHALL dynamically render search results and filter queries on the server per request.

#### Scenario: Executing search query
- **WHEN** a user searches for products via `/search?q=laptop`
- **THEN** the route MUST execute dynamic server-side rendering (`dynamic = 'force-dynamic'`) to evaluate fresh query parameters

### Requirement: Client-Side Interactive State for User Journeys
The shopping cart and checkout flows SHALL execute on the client side with reactive local and remote state synchronization.

#### Scenario: Cart interaction
- **WHEN** a customer modifies cart quantities on `/cart`
- **THEN** updates MUST reflect immediately in the client UI without full-page server reloads
