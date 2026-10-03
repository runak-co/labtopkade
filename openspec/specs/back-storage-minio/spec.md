# Backend Object Storage and Media Service

## Purpose
Specify object storage integration (MinIO/S3), product image uploads, mime-type verification, pre-signed URL generation, and CDN asset delivery.

## Requirements

### Requirement: S3-Compatible Object Storage Abstraction
The backend SHALL interface with storage via an S3-compatible client (AWS SDK or MinIO Java SDK), allowing transparent switching between local MinIO containers and cloud S3/GCS buckets.

#### Scenario: Uploading product media
- **WHEN** an administrator uploads a product image via `POST /api/admin/media/upload`
- **THEN** the service MUST validate file size and allowed image MIME types (JPEG, PNG, WebP, AVIF) before streaming to the `products` bucket

### Requirement: Public and Pre-Signed Asset Delivery
Product assets SHALL be accessible via deterministic public URLs routed through Nginx `/storage/` or through temporary pre-signed download URLs.

#### Scenario: Fetching product image
- **WHEN** the storefront renders `<img src="/storage/products/macbook-main.webp">`
- **THEN** Nginx and the object storage service MUST serve the asset with appropriate HTTP caching headers (`Cache-Control: public, max-age=31536000, immutable`)
