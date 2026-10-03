'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { formatPrice, calculateDiscount } from '@/lib/utils/format';
import { ShoppingCart, Check, ShieldCheck, Truck, RotateCcw, PhoneCall } from 'lucide-react';

interface ProductBuyBoxProps {
  product: Product;
}

export default function ProductBuyBox({ product }: ProductBuyBoxProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const discountPercent = calculateDiscount(product.regularPrice, product.price);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-6">
      {/* Stock status */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          موجود در انبار بانه — ارسال فوری
        </div>
        <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
          گرید A++ (تست شده)
        </span>
      </div>

      {/* Pricing block */}
      <div className="space-y-1">
        {discountPercent > 0 && product.regularPrice > product.price && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-400 line-through">
              {formatPrice(product.regularPrice)}
            </span>
            <span className="bg-rose-100 text-rose-700 text-xs font-bold px-2 py-0.5 rounded">
              {discountPercent}٪ تخفیف
            </span>
          </div>
        )}
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black text-rose-600">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>

      {/* Quantity & Add to Cart button */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-slate-700">تعداد:</span>
          <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 transition font-bold"
            >
              -
            </button>
            <span className="px-4 py-1.5 text-sm font-bold text-slate-800 bg-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 transition font-bold"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition duration-300 shadow-lg ${
            added
              ? 'bg-emerald-600 text-white shadow-emerald-600/30'
              : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/30'
          }`}
        >
          {added ? (
            <>
              <Check className="w-5 h-5" />
              به سبد خرید اضافه شد
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              افزودن به سبد خرید
            </>
          )}
        </button>
      </div>

      {/* Guarantee perks */}
      <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
        <div className="flex items-center gap-2.5">
          <RotateCcw className="w-4 h-4 text-rose-600 shrink-0" />
          <span>۱۰ روز مهلت تست فنی و تعویض با فاکتور معتبر</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Truck className="w-4 h-4 text-rose-600 shrink-0" />
          <span>ارسال سریع با پست پیشتاز و تیپاکس با بسته‌بندی ضد ضربه</span>
        </div>
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
          <span>تست کامل باتری، صفحه‌نمایش، کیبورد و پورت‌ها قبل از ارسال</span>
        </div>
      </div>

      {/* Direct Phone Assistance */}
      <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-between">
        <div className="space-y-0.5">
          <span className="text-xs font-bold text-slate-800">نیاز به راهنمایی دارید؟</span>
          <p className="text-[11px] text-slate-500">مشاوره رایگان انتخاب لپ‌تاپ</p>
        </div>
        <a
          href="tel:09183751468"
          className="flex items-center gap-1.5 bg-white border border-slate-200 hover:border-rose-400 px-3 py-1.5 rounded-xl text-xs font-bold text-rose-600 transition"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          تماس تلفنی
        </a>
      </div>
    </div>
  );
}
