import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductsByCategory, getAllProducts } from '@/lib/api/products';
import ProductCard from '@/components/product/ProductCard';
import { Home, ChevronLeft, Laptop } from 'lucide-react';

interface Props {
  params: { slug: string };
}

const CATEGORY_NAMES: Record<string, string> = {
  dell: 'لپ‌تاپ استوک دل (Dell)',
  hp: 'لپ‌تاپ استوک اچ‌پی (HP)',
  lenovo: 'لپ‌تاپ استوک لنوو (Lenovo)',
  surface: 'مایکروسافت سرفیس (Surface)',
  gaming: 'لپ‌تاپ‌های گیمینگ و رندرینگ',
  parts: 'قطعات و ارتقای لپ‌تاپ (رم، هارد SSD، شارژر)',
  engineering: 'لپ‌تاپ‌های مهندسی و طراحی',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = CATEGORY_NAMES[params.slug.toLowerCase()] || `لپ‌تاپ‌های ${params.slug}`;
  return {
    title: `قیمت و خرید انواع ${name} | لپ تاپ کده بانه`,
    description: `خرید اینترنتی انواع ${name} استوک اروپایی گرید A++ با ۱۰ روز مهلت تست فنی و گارانتی اصالت سلامت کالا در لپ تاپ کده بانه.`,
    alternates: {
      canonical: `https://laptopkade.com/categories/${params.slug}`,
    },
  };
}

export const revalidate = 60; // ISR

export default async function CategoryPage({ params }: Props) {
  const categoryName = CATEGORY_NAMES[params.slug.toLowerCase()] || `دسته ${params.slug}`;
  
  // Find matching products
  const allProducts = await getAllProducts();
  const slug = params.slug.toLowerCase();
  
  const products = allProducts.filter((p) => {
    if (slug === 'dell') return p.name.includes('دل') || p.name.toLowerCase().includes('dell');
    if (slug === 'hp') return p.name.includes('اچ پی') || p.name.toLowerCase().includes('hp');
    if (slug === 'lenovo') return p.name.includes('لنوو') || p.name.toLowerCase().includes('lenovo');
    if (slug === 'surface') return p.name.includes('سرفیس') || p.name.toLowerCase().includes('surface');
    if (slug === 'gaming') return p.name.toLowerCase().includes('gtx') || p.name.toLowerCase().includes('geforce') || p.name.includes('گیمینگ');
    return p.categorySlugs.some((s) => s.toLowerCase().includes(slug)) || p.name.toLowerCase().includes(slug);
  });

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-reverse space-x-2 text-xs text-slate-500 bg-white py-3 px-4 rounded-xl border border-slate-200/80">
        <Link href="/" className="flex items-center gap-1 hover:text-rose-600 transition">
          <Home className="w-3.5 h-3.5" />
          <span>خانه</span>
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/products" className="hover:text-rose-600 transition">
          دسته‌بندی‌ها
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-bold">{categoryName}</span>
      </nav>

      {/* Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-rose-600 rounded-full"></span>
            {categoryName}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            مشاهده جدیدترین مدل‌های وارداتی {categoryName} همراه با ۱۰ روز مهلت تست فنی
          </p>
        </div>

        <span className="text-xs font-semibold bg-rose-50 text-rose-700 px-3.5 py-1.5 rounded-xl border border-rose-200 shrink-0">
          تعداد موجود: {products.length} محصول
        </span>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
          <p className="text-slate-500 text-sm">هیچ محصولی در این دسته‌بندی یافت نشد.</p>
          <Link href="/products" className="inline-block text-xs font-bold text-rose-600 hover:underline">
            مشاهده تمام مدل‌های لپ‌تاپ
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
