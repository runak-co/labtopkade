# Storefront Dynamic SEO and Metadata

## Purpose
Specify first-class search engine optimization (SEO) capabilities, including dynamic page titles, meta descriptions, canonical URLs, OpenGraph social cards, and Twitter/X metadata tags.

## Requirements

### Requirement: Dynamic Page Metadata Generation
The storefront SHALL implement `generateMetadata` on all dynamic routes (products, categories, search) to produce contextual title and description tags.

#### Scenario: Product detail metadata
- **WHEN** a crawler or browser requests `/products/macbook-pro-m3`
- **THEN** the server MUST inject `<title>`, `<meta name="description">`, and `<link rel="canonical">` reflecting the specific product title and description

#### Scenario: Category metadata
- **WHEN** a visitor navigates to `/categories/laptops`
- **THEN** the page metadata MUST dynamically output category-specific headings, descriptions, and canonical links

### Requirement: Social Media OpenGraph and Twitter Tags
Every public page SHALL generate valid OpenGraph (`og:title`, `og:description`, `og:image`, `og:type`) and Twitter Card (`twitter:card`, `twitter:title`, `twitter:image`) meta tags.

#### Scenario: Social link sharing
- **WHEN** a link to a product page is shared on social networks
- **THEN** the generated HTML `<head>` MUST contain complete `og:image` and `og:title` tags for preview generation
