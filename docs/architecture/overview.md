# Architecture Overview

## Design Principles
- **Decoupled Applications**: Storefront, Admin Panel, and Backend operate independently and can be developed, tested, and deployed separately.
- **Backend as Single Source of Truth**: All business logic, authentication, pricing, tax calculations, and validation reside strictly in the Spring Boot backend.
- **No Direct DB Access**: Frontends interact solely through HTTP REST APIs; PostgreSQL is never exposed to the public internet or frontends.
- **Microservices Ready**: Clean domain separation allows future extraction of domains (Catalog, Orders, Customers, Payments) into standalone microservices.
