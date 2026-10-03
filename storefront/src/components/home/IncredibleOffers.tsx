import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import ProductCard from '@/components/product/ProductCard';
import { Flame, Clock, ArrowLeft } from 'lucide-react';

interface IncredibleOffersProps {
  products: Product[];
}

export default function IncredibleOffers({ products }: IncredibleOffersProps) {
  const discounted = products.slice(0, 4);

  return (
    <section className="my-12 rounded-3xl bg-gradient-to-r from-rose-700 via-rose-600 to-red-600 p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      {/* Header with timer */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-rose-500/50 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl text-amber-300">
            <Flame className="w-6 h-6 fill-amber-300" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
              پیشنهادات ویژه و شگفت‌انگیز
            </h2>
            <p className="text-xs text-rose-100 mt-0.5">
              تخفیف ویژه روی برترین مدل‌های استوک وارداتی به مدت محدود
            </p>
          </div>
        </div>

        {/* Mock Countdown Clock */}
        <div className="flex items-center gap-2 bg-slate-950/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-rose-400/30 text-xs font-mono">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="text-white font-bold">فرصت باقی‌مانده:</span>
          <span className="bg-rose-950/80 px-2 py-0.5 rounded text-amber-300 font-bold">۰۸</span>:
          <span className="bg-rose-950/80 px-2 py-0.5 rounded text-amber-300 font-bold">۴۲</span>:
          <span className="bg-rose-950/80 px-2 py-0.5 rounded text-amber-300 font-bold">۱۹</span>
        </div>
      </div>

      {/* Grid of discounted laptops */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {discounted.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-white text-rose-700 hover:bg-rose-50 font-bold px-6 py-2.5 rounded-xl text-xs transition duration-200 shadow-md"
        >
          مشاهده همه تخفیف‌های شگفت‌انگیز
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
