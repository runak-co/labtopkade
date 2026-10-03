import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatPrice, calculateDiscount } from '@/lib/utils/format';
import { Star, ShoppingCart, Cpu, HardDrive, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercent = calculateDiscount(product.regularPrice, product.price);

  // Extract key specs for quick badge pills
  const cpu = product.attributes['سری پردازنده'] || product.attributes['مدل پردازنده'] || 'Core i7';
  const ram = product.attributes['ظرفیت حافظه RAM'] || '16GB';
  const storage = product.attributes['ظرفیت حافظه داخلی'] || '512GB SSD';

  return (
    <div className="group relative bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between">
      {/* Badges */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 items-end">
        <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-sm">
          استوک گرید A++
        </span>
        {discountPercent > 0 && (
          <span className="bg-rose-600 text-white text-[11px] font-black px-2 py-0.5 rounded-md shadow-sm">
            {discountPercent}٪ تخفیف
          </span>
        )}
      </div>

      <div>
        {/* Product Image */}
        <Link href={`/products/${product.slug}`} className="block relative h-52 w-full bg-slate-50 overflow-hidden p-4">
          <Image
            src={product.mainImage}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            unoptimized
          />
        </Link>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Rating & In stock */}
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ۴.۸
            </span>
            <span className="flex items-center gap-1 text-emerald-600 font-medium text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              موجود در انبار بانه
            </span>
          </div>

          {/* Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-bold text-sm text-slate-800 line-clamp-2 min-h-[40px] group-hover:text-rose-600 transition leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Quick Specs Badges */}
          <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px] text-slate-600 font-medium">
            <div className="bg-slate-100 px-1.5 py-1 rounded text-center truncate flex items-center justify-center gap-0.5" title={cpu}>
              <Cpu className="w-3 h-3 text-rose-500 shrink-0" />
              <span className="truncate">{cpu}</span>
            </div>
            <div className="bg-slate-100 px-1.5 py-1 rounded text-center truncate flex items-center justify-center gap-0.5" title={ram}>
              <span>{ram}</span>
            </div>
            <div className="bg-slate-100 px-1.5 py-1 rounded text-center truncate flex items-center justify-center gap-0.5" title={storage}>
              <HardDrive className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate">{storage}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="p-4 pt-2 border-t border-slate-100 space-y-3">
        <div className="flex flex-col items-end">
          {discountPercent > 0 && product.regularPrice > product.price && (
            <span className="text-xs text-slate-400 line-through">
              {formatPrice(product.regularPrice)}
            </span>
          )}
          <span className="text-base font-black text-rose-600">
            {formatPrice(product.price)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 text-center bg-slate-900 hover:bg-rose-600 text-white font-medium py-2 px-3 rounded-xl text-xs transition duration-200"
          >
            مشاهده و خرید
          </Link>
          <button
            className="p-2 border border-slate-200 rounded-xl hover:bg-rose-50 hover:border-rose-300 text-slate-700 hover:text-rose-600 transition"
            title="افزودن به سبد خرید"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
