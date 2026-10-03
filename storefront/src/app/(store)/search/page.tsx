import type { Metadata } from 'next';
import Link from 'next/link';
import { searchProducts } from '@/lib/api/products';
import ProductCard from '@/components/product/ProductCard';
import { Search, Home, ChevronLeft } from 'lucide-react';

interface Props {
  searchParams: { q?: string };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const query = searchParams.q ? `نتایج جستجو برای "${searchParams.q}"` : 'جستجوی محصولات';
  return {
    title: `${query} | لپ تاپ کده بانه`,
    description: `جستجوی انواع لپ تاپ استوک، قطعات و لوازم جانبی در فروشگاه لپ تاپ کده بانه.`,
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q || '';
  const results = await searchProducts(query);

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-reverse space-x-2 text-xs text-slate-500 bg-white py-3 px-4 rounded-xl border border-slate-200/80">
        <Link href="/" className="flex items-center gap-1 hover:text-rose-600 transition">
          <Home className="w-3.5 h-3.5" />
          <span>خانه</span>
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-bold">جستجو</span>
        {query && (
          <>
            <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-rose-600 font-bold">"{query}"</span>
          </>
        )}
      </nav>

      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-slate-900">
              {query ? `نتایج جستجو برای: "${query}"` : 'همه محصولات فروشگاه'}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              نمایش لپ‌تاپ‌های منطبق با عبارت جستجو شده
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold bg-rose-50 text-rose-700 px-3.5 py-1.5 rounded-xl border border-rose-200 shrink-0">
          تعداد نتایج: {results.length} لپ‌تاپ
        </span>
      </div>

      {/* Products Grid */}
      {results.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
          <p className="text-slate-500 text-sm">هیچ لپ‌تاپی با عبارت مورد نظر شما یافت نشد.</p>
          <p className="text-xs text-slate-400">پیشنهاد می‌کنیم املای کلمه را بررسی کرده یا نام برند (دل، اچ پی، لنوو) را جستجو کنید.</p>
          <div className="pt-2">
            <Link href="/products" className="inline-block bg-rose-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-rose-700 transition">
              مشاهده همه محصولات
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
