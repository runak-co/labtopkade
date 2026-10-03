import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllProducts } from '@/lib/api/products';
import ProductCard from '@/components/product/ProductCard';
import { SlidersHorizontal, Laptop, Home, ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'خرید انواع لپ تاپ استوک | قیمت لپ تاپ های دل، اچ پی، لنوو در بانه',
  description: 'لیست قیمت و خرید انواع لپ تاپ استوک اروپایی گرید A++، مهندسی، گیمینگ، رندرینگ دل، اچ‌پی، لنوو و سرفیس با مهلت تست ۱۰ روزه در لپ تاپ کده بانه.',
  alternates: {
    canonical: 'https://laptopkade.com/products',
  },
};

export const revalidate = 60; // ISR

export default async function ProductsCatalogPage({
  searchParams,
}: {
  searchParams: { brand?: string; category?: string; sort?: string };
}) {
  const allProducts = await getAllProducts();

  // Filter by brand if selected
  let filtered = allProducts;
  if (searchParams.brand) {
    const brand = searchParams.brand.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(brand) ||
        p.categorySlugs.some((s) => s.toLowerCase().includes(brand))
    );
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-reverse space-x-2 text-xs text-slate-500 bg-white py-3 px-4 rounded-xl border border-slate-200/80">
        <Link href="/" className="flex items-center gap-1 hover:text-rose-600 transition">
          <Home className="w-3.5 h-3.5" />
          <span>خانه</span>
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-bold">فروشگاه و لیست لپ‌تاپ‌های استوک</span>
      </nav>

      {/* Header and Count */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-rose-600 rounded-full"></span>
            فروشگاه تخصصی لپ‌تاپ استوک بانه
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            مشاهده، مقایسه مشخصات فنی و خرید آنلاین با ۱۰ روز مهلت تست فنی
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold bg-rose-50 text-rose-700 px-3 py-1.5 rounded-xl border border-rose-200">
            تعداد موجود: {filtered.length} مدل
          </span>
        </div>
      </div>

      {/* Main Content: Sidebar Filters + Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="bg-white border border-slate-200/80 rounded-3xl p-6 space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-rose-600" />
              فیلتر بر اساس برند
            </h3>
            {searchParams.brand && (
              <Link href="/products" className="text-[11px] text-rose-600 font-bold">
                حذف فیلتر
              </Link>
            )}
          </div>

          <div className="space-y-2 text-xs">
            <Link
              href="/products?brand=dell"
              className={`flex items-center justify-between p-2.5 rounded-xl transition ${
                searchParams.brand === 'dell'
                  ? 'bg-rose-50 text-rose-700 font-bold border border-rose-200'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span>لپ‌تاپ دل (Dell)</span>
              <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">Precision, Latitude</span>
            </Link>
            <Link
              href="/products?brand=hp"
              className={`flex items-center justify-between p-2.5 rounded-xl transition ${
                searchParams.brand === 'hp'
                  ? 'bg-rose-50 text-rose-700 font-bold border border-rose-200'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span>لپ‌تاپ اچ‌پی (HP)</span>
              <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">ZBook, EliteBook</span>
            </Link>
            <Link
              href="/products?brand=lenovo"
              className={`flex items-center justify-between p-2.5 rounded-xl transition ${
                searchParams.brand === 'lenovo'
                  ? 'bg-rose-50 text-rose-700 font-bold border border-rose-200'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span>لپ‌تاپ لنوو (Lenovo)</span>
              <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">ThinkPad, Legion</span>
            </Link>
            <Link
              href="/products?brand=surface"
              className={`flex items-center justify-between p-2.5 rounded-xl transition ${
                searchParams.brand === 'surface'
                  ? 'bg-rose-50 text-rose-700 font-bold border border-rose-200'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span>مایکروسافت سرفیس</span>
              <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">Surface Book/Pro</span>
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-3">
            <h4 className="font-bold text-xs text-slate-800">مزایای خرید از لپ‌تاپ کده:</h4>
            <ul className="text-[11px] text-slate-500 space-y-2 list-disc list-inside">
              <li>مهلت تست ۱۰ روزه واقعی</li>
              <li>ارسال فیلم و عکس محصول قبل از ارسال</li>
              <li>نصب ویندوز و درایورها به صورت رایگان</li>
              <li>ارسال با بسته‌بندی ضدضربه و بیمه پستی</li>
            </ul>
          </div>
        </aside>

        {/* Product Listing (3 cols) */}
        <div className="lg:col-span-3">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
              <p className="text-slate-500 text-sm">هیچ محصولی با این فیلتر یافت نشد.</p>
              <Link href="/products" className="inline-block text-xs font-bold text-rose-600 hover:underline">
                مشاهده همه لپ‌تاپ‌ها
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
