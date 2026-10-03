import { Category } from '@/types/product';
import { MOCK_CATEGORIES } from '@/lib/data/mock-categories';
import { API_CONFIG } from '@/lib/config/api.config';

/**
 * Centralized Category Data Access Service.
 */
export async function getAllCategories(): Promise<Category[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    return MOCK_CATEGORIES;
  }
  const res = await fetch(`${API_CONFIG.API_BASE_URL}/categories`, {
    next: { revalidate: API_CONFIG.REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const decodedSlug = decodeURIComponent(slug);
  if (API_CONFIG.USE_MOCK_DATA) {
    return MOCK_CATEGORIES.find((c) => c.slug === decodedSlug || c.slug.toLowerCase() === decodedSlug.toLowerCase()) || null;
  }
  const res = await fetch(`${API_CONFIG.API_BASE_URL}/categories/${encodeURIComponent(decodedSlug)}`, {
    next: { revalidate: API_CONFIG.REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error('Failed to fetch category');
  }
  return res.json();
}
