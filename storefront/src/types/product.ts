export interface ProductAttribute {
  name: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  regularPrice: number;
  salePrice: number | null;
  onSale: boolean;
  inStock: boolean;
  images: string[];
  mainImage: string;
  categories: string[];
  categorySlugs: string[];
  shortDescription: string;
  description: string;
  attributes: Record<string, string>;
  rating: number;
  reviewCount: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  count: number;
  permalink?: string;
  image?: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  badge?: string;
}
