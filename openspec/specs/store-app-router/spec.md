# Storefront App Router and Modular Architecture

## Purpose
Specify the Next.js App Router architecture, TypeScript configuration, feature-oriented project organization, and strict separation between route handlers and business domains.

## Requirements

### Requirement: Feature-Oriented File Structure
The storefront SHALL organize codebase logic into feature modules (`src/features/*`), shared UI design tokens (`src/components/ui/*`), and technical libraries (`src/lib/*`), keeping `src/app/` solely responsible for routing and page composition.

#### Scenario: Code placement in feature modules
- **WHEN** creating product-related hooks, state, or presentation logic
- **THEN** engineers MUST place the code in `src/features/products/` instead of directly into the `src/app/` route directory

#### Scenario: Route composition
- **WHEN** a route page (such as `src/app/(store)/products/page.tsx`) renders
- **THEN** it MUST import and compose domain components from `src/features/products/` and `src/components/`

### Requirement: Server Components by Default
Components in the storefront SHALL render as React Server Components (RSC) by default, restricting `"use client"` directives exclusively to leaves of the component tree requiring browser interactivity.

#### Scenario: Server Component execution
- **WHEN** a page is requested without explicit client interactive requirements (e.g. static catalog grids, breadcrumbs, descriptions)
- **THEN** it MUST render entirely on the server without sending unnecessary JavaScript bundles to the browser client

#### Scenario: Isolated Client Components
- **WHEN** interactive state is required (e.g. quantity selectors, cart buttons, interactive filters)
- **THEN** only the specific leaf component MUST declare `"use client"`
