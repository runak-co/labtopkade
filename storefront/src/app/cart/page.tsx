'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils/format';
import { 
  Trash2, 
  ArrowLeft, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 2445,
      name: 'لپ تاپ استوک دل Dell Precision 7550 Core i7-10850H صفحه لمسی',
      slug: 'dell-precision-7550-touch',
      price: 36900000,
      image: 'https://laptopkade.com/wp-content/uploads/Dell-Precision-7550-LAPTOPKADE.COM-01.jpg',
      quantity: 1,
      specs: 'رم 32GB | حافظه 1TB SSD | گرافیک 4GB Quadro T2000',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as typeof items
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="py-16 text-center space-y-6 bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
        <div className="w-20 h-20 mx-auto bg-rose-50 text-rose-500 rounded-3xl flex items-center justify-center">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black text-slate-800">سبد خرید شما در حال حاضر خالی است</h2>
        <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
          می‌توانید برای مشاهده لپ‌تاپ‌های استوک وارداتی به صفحه فروشگاه مراجعه کنید و لپ‌تاپ مورد نظر خود را انتخاب نمایید.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-3 rounded-2xl text-xs transition shadow-lg shadow-rose-600/20"
        >
          مشاهده لیست لپ‌تاپ‌ها
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
        <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <span className="w-2.5 h-6 bg-rose-600 rounded-full"></span>
          سبد خرید ({items.length} کالا)
        </h1>
        <Link href="/products" className="text-xs font-bold text-rose-600 hover:underline">
          + افزودن کالای دیگر
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Cart Items List (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm flex flex-col sm:flex-row items-center gap-5 justify-between"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative w-24 h-24 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shrink-0 p-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-1"
                    unoptimized
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <Link href={`/products/${item.slug}`}>
                    <h3 className="font-bold text-sm text-slate-800 hover:text-rose-600 transition line-clamp-2">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.specs}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    گارانتی ۱۰ روزه مهلت تست سلامت
                  </div>
                </div>
              </div>

              {/* Quantity controls & Price */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 transition font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-bold text-slate-800 bg-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 transition font-bold"
                  >
                    +
                  </button>
                </div>

                <div className="text-left">
                  <span className="block text-base font-black text-rose-600">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                  {item.quantity > 1 && (
                    <span className="text-[10px] text-slate-400">
                      هر عدد: {formatPrice(item.price)}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition"
                  title="حذف از سبد"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Guarantee Reminder Box */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              سفارش شما شامل <strong>۱۰ روز مهلت تست فنی</strong>، ارسال فیلم تست عملکرد پیش از ارسال، و فاکتور رسمی معتبر فروشگاه لپ تاپ کده می‌باشد.
            </span>
          </div>
        </div>

        {/* Order Summary (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-6">
          <h2 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
            خلاصه صورت‌حساب
          </h2>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>قیمت کالاها ({items.length}):</span>
              <span className="font-bold text-slate-800">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>هزینه بسته‌بندی و ارسال:</span>
              <span className="text-emerald-600 font-bold">پس‌کرایه (تیپاکس / پست)</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>مهلت تست و گارانتی:</span>
              <span className="text-emerald-600 font-bold">رایگان (۱۰ روز)</span>
            </div>

            <div className="border-t border-slate-100 pt-3 flex justify-between items-baseline">
              <span className="font-bold text-sm text-slate-900">مبلغ قابل پرداخت:</span>
              <span className="text-xl font-black text-rose-600">{formatPrice(subtotal)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="w-full py-4 px-6 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl text-sm flex items-center justify-center gap-2 transition duration-200 shadow-lg shadow-rose-600/30"
          >
            تکمیل سفارش و پرداخت
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div className="space-y-2 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <Truck className="w-3.5 h-3.5 text-rose-500" />
              <span>ارسال مستقیم از شهرستان تجاری بانه</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
              <span>امکان مرجوعی کالا در صورت مغایرت فنی</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
