# Admin Panel Standalone Architecture and Layout

## Purpose
Specify the Angular standalone component architecture, feature-based routing, collapsible sidebar layout, navigation breadcrumbs, and reactive state management for the administrative dashboard.

## Requirements

### Requirement: Modern Standalone Component Architecture
The Admin Panel SHALL build on Angular 17+ standalone components without `NgModules`, organizing code into `core/`, `layout/`, `features/`, and `shared/`.

#### Scenario: Lazy-loading administrative features
- **WHEN** an administrator navigates to `/admin/products` or `/admin/orders`
- **THEN** Angular MUST lazy-load the corresponding standalone component chunk on demand

### Requirement: Responsive Dashboard Layout
The Admin Panel SHALL provide a responsive master layout featuring a collapsible sidebar, breadcrumb navigation, current operator profile indicator, and session logout trigger.

#### Scenario: Toggling sidebar navigation
- **WHEN** an administrator toggles the menu button on smaller screens
- **THEN** the sidebar MUST expand or collapse smoothly while updating viewports and table scroll containers
