# Storefront Structured Data and Sitemaps

## Purpose
Specify structured data markup (JSON-LD) for rich search results and automated dynamic XML sitemap generation.

## Requirements

### Requirement: JSON-LD Schema Integration
The storefront SHALL inject Schema.org JSON-LD scripts into product and breadcrumb pages to qualify for Google rich search results.

#### Scenario: Product schema markup
- **WHEN** a product detail page is rendered
- **THEN** the HTML MUST include a `<script type="application/ld+json">` tag containing `@type: "Product"`, `name`, `offers` (price, currency, availability), `image`, and `sku`

#### Scenario: Breadcrumb schema markup
- **WHEN** viewing category or product pages
- **THEN** the HTML MUST include a `BreadcrumbList` schema representing the navigational hierarchy

### Requirement: Dynamic XML Sitemap and Robots Rules
The storefront SHALL dynamically generate an XML sitemap (`/sitemap.xml`) indexing all active product and category URLs, alongside a `robots.txt` configuration.

#### Scenario: Search engine bot fetching sitemap
- **WHEN** a search bot requests `/sitemap.xml`
- **THEN** the storefront MUST return a valid XML document listing all published products, categories, change frequencies, and last modification timestamps

#### Scenario: Fetching robots.txt
- **WHEN** a crawler requests `/robots.txt`
- **THEN** the server MUST allow crawling of public catalog routes while disallowing `/cart`, `/checkout`, `/account`, and `/api`
