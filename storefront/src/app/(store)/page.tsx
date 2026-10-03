import type { Metadata } from 'next';
import Link from 'next/link';
import { getFeaturedProducts, getDiscountedProducts, getAllProducts } from '@/lib/api/products';
import HeroBanner from '@/components/home/HeroBanner';
import CategoryCircles from '@/components/home/CategoryCircles';
import IncredibleOffers from '@/components/home/IncredibleOffers';
import PromoBanners from '@/components/home/PromoBanners';
import ProductCard from '@/components/product/ProductCard';
import { Sparkles, ArrowLeft, Laptop } from 'lucide-react';

export const metadata: Metadata = {
  title: 'لپ تاپ کده | فروشگاه اینترنتی لپ تاپ استوک و قطعات اصلی در بانه',
  description: 'فروشگاه اینترنتی لپ تاپ کده وب سایتی امن برای خرید لپ تاپ استوک و قطعات لپ تاپ به صورت عمده و خرده در شهرستان بانه دارای نماد اعتماد و ۱۰ روز مهلت تست فنی.',
  alternates: {
    canonical: 'https://laptopkade.com',
  },
  openGraph: {
    title: 'لپ تاپ کده | فروشگاه اینترنتی لپ تاپ استوک بانه',
    description: 'واردکننده مستقیم لپ‌تاپ‌های استوک گرید A++ دل، اچ‌پی، لنوو و سرفیس با مهلت تست واقعی.',
    url: 'https://laptopkade.com',
    siteName: 'لپ تاپ کده',
    images: [
      {
        url: 'https://laptopkade.com/wp-content/uploads/2021/03/Logo-Laptopkade.png',
        width: 512,
        height: 512,
        alt: 'لپ تاپ کده',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
};

export const revalidate = 60; // Incremental Static Regeneration (ISR)

export default async function HomePage() {
  const allProducts = await getAllProducts();
  const discountedProducts = await getDiscountedProducts(4);
  const latestLaptops = allProducts.slice(0, 8);
  const dellLaptops = allProducts.filter((p) => p.name.includes('دل') || p.name.toLowerCase().includes('dell')).slice(0, 4);
  const hpLaptops = allProducts.filter((p) => p.name.includes('اچ پی') || p.name.toLowerCase().includes('hp')).slice(0, 4);

  return (
    <div className="space-y-12">
      {/* 1. Main Hero Banner */}
      <HeroBanner />

      {/* 2. Circular Categories */}
      <CategoryCircles />

      {/* 3. Incredible Offers / Special Discounts */}
      <IncredibleOffers products={discountedProducts} />

      {/* 4. Latest Products Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-rose-50 text-rose-600 rounded-xl">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                جدیدترین لپ‌تاپ‌های استوک وارداتی
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                تست شده در آزمایشگاه فنی با گرید کیفی A++
              </p>
            </div>
          </div>

          <Link
            href="/products"
            className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 transition"
          >
            مشاهده همه ({allProducts.length})
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestLaptops.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. Middle Promotional Banners */}
      <PromoBanners />

      {/* 6. Dell Workstations Section */}
      {dellLaptops.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">
                  لپ‌تاپ‌های استوک دل (Dell)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  سری قدرتمند ورک‌استیشن Precision و صنعتی Latitude
                </p>
              </div>
            </div>

            <Link
              href="/categories/dell"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition"
            >
              مشاهده تمام مدل‌های دل
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dellLaptops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* 7. HP Laptops Section */}
      {hpLaptops.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">
                  لپ‌تاپ‌های استوک اچ‌پی (HP)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  طراحی لوکس آلومینیومی سری ZBook و EliteBook
                </p>
              </div>
            </div>

            <Link
              href="/categories/hp"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition"
            >
              مشاهده تمام مدل‌های اچ‌پی
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hpLaptops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
