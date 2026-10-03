import { Product } from '@/types/product';
import { MOCK_PRODUCTS } from '@/lib/data/mock-products';
import { API_CONFIG } from '@/lib/config/api.config';

/**
 * Centralized Product Data Access Service.
 * Allows effortless transition from Mock data to live Spring Boot API endpoints.
 */
export async function getAllProducts(): Promise<Product[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    return MOCK_PRODUCTS;
  }
  const res = await fetch(`${API_CONFIG.API_BASE_URL}/products`, {
    next: { revalidate: API_CONFIG.REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const decodedSlug = decodeURIComponent(slug);
  if (API_CONFIG.USE_MOCK_DATA) {
    return MOCK_PRODUCTS.find((p) => p.slug === decodedSlug || p.slug.toLowerCase() === decodedSlug.toLowerCase()) || null;
  }
  const res = await fetch(`${API_CONFIG.API_BASE_URL}/products/${encodeURIComponent(decodedSlug)}`, {
    next: { revalidate: API_CONFIG.REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export async function getFeaturedProducts(limit = 8): Promise<Product[]> {
  const all = await getAllProducts();
  return all.slice(0, limit);
}

export async function getDiscountedProducts(limit = 8): Promise<Product[]> {
  const all = await getAllProducts();
  const discounted = all.filter((p) => p.onSale || (p.salePrice && p.salePrice < p.regularPrice));
  return discounted.length > 0 ? discounted.slice(0, limit) : all.slice(0, limit);
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const all = await getAllProducts();
  const lower = categorySlug.toLowerCase();
  return all.filter((p) =>
    p.categorySlugs.some((s) => s.toLowerCase() === lower || s.toLowerCase().includes(lower))
  );
}

export async function getRelatedProducts(currentSlug: string, categorySlug?: string, limit = 4): Promise<Product[]> {
  const all = await getAllProducts();
  return all
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const all = await getAllProducts();
  const q = query.trim().toLowerCase();
  if (!q) return all;
  return all.filter((p) =>
    p.name.toLowerCase().includes(q) ||
    p.shortDescription.toLowerCase().includes(q) ||
    p.slug.toLowerCase().includes(q)
  );
}
