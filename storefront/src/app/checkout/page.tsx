'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  MapPin, 
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto my-12 bg-white rounded-3xl border border-slate-200/90 p-8 md:p-12 text-center space-y-6 shadow-sm">
        <div className="w-20 h-20 mx-auto bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black text-slate-900">سفارش شما با موفقیت ثبت شد!</h2>
        <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
          کد رهگیری سفارش شما: <strong className="text-rose-600 font-mono text-sm">LK-849201</strong><br />
          همکاران ما در واحد فروش لپ تاپ کده بانه جهت هماهنگی ارسال و ارسال ویدیوی تست سلامت کالا به زودی با شما تماس خواهند گرفت.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-2xl text-xs transition"
          >
            <ArrowRight className="w-4 h-4" />
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <span className="w-2.5 h-6 bg-rose-600 rounded-full"></span>
          تکمیل اطلاعات و ثبت نهایی سفارش
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          لطفاً مشخصات و آدرس دقیق پستی خود را جهت ارسال از انبار بانه وارد فرمایید.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form fields (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section 1: Customer details */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <MapPin className="w-4 h-4 text-rose-600" />
              ۱. مشخصات خریدار و نشانی تحویل
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">نام و نام خانوادگی *</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: محمد امینی"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-rose-500 focus:bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">شماره موبایل (جهت هماهنگی) *</label>
                <input
                  type="tel"
                  required
                  dir="ltr"
                  placeholder="0912*******"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-rose-500 focus:bg-white text-right"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">استان و شهر *</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: تهران، تهران"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-rose-500 focus:bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">کد پستی ۱۰ رقمی</label>
                <input
                  type="text"
                  dir="ltr"
                  placeholder="1234567890"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-rose-500 focus:bg-white text-right"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="font-bold text-slate-700">آدرس پستی کامل *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="خیابان، کوچه، پلاک، واحد..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-rose-500 focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Delivery Method */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Truck className="w-4 h-4 text-rose-600" />
              ۲. شیوه ارسال
            </h2>

            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-3.5 border border-rose-200 bg-rose-50/50 rounded-2xl cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="shipping" defaultChecked className="accent-rose-600" />
                  <div>
                    <strong className="block font-bold text-slate-900">ارسال با تیپاکس (اکسپرس با بیمه کالا)</strong>
                    <span className="text-[11px] text-slate-500">تحویل ۲۴ الی ۴۸ ساعت کاری در سراسر کشور</span>
                  </div>
                </div>
                <span className="font-bold text-rose-700">پس‌کرایه</span>
              </label>

              <label className="flex items-center justify-between p-3.5 border border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50">
                <div className="flex items-center gap-3">
                  <input type="radio" name="shipping" className="accent-rose-600" />
                  <div>
                    <strong className="block font-bold text-slate-900">پست پیشتاز جمهوری اسلامی</strong>
                    <span className="text-[11px] text-slate-500">تحویل ۳ الی ۵ روز کاری</span>
                  </div>
                </div>
                <span className="font-bold text-slate-700">پس‌کرایه</span>
              </label>
            </div>
          </div>

          {/* Section 3: Payment Method */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <CreditCard className="w-4 h-4 text-rose-600" />
              ۳. شیوه پرداخت
            </h2>

            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-3.5 border border-rose-200 bg-rose-50/50 rounded-2xl cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" defaultChecked className="accent-rose-600" />
                  <div>
                    <strong className="block font-bold text-slate-900">پرداخت اینترنتی امن شتاب</strong>
                    <span className="text-[11px] text-slate-500">متصل به کلیه کارت‌های عضو شبکه شتاب</span>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-600 font-bold">فعال</span>
              </label>

              <label className="flex items-center justify-between p-3.5 border border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50">
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" className="accent-rose-600" />
                  <div>
                    <strong className="block font-bold text-slate-900">کارت به کارت / واریز مستقیم</strong>
                    <span className="text-[11px] text-slate-500">پس از هماهنگی تلفنی با واحد فروش بانه</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">هماهنگی تلفنی</span>
              </label>
            </div>
          </div>
        </div>

        {/* Summary (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-6">
          <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-3">
            خلاصه خرید
          </h3>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>تعداد اقلام:</span>
              <strong className="text-slate-900">۱ دستگاه لپ‌تاپ</strong>
            </div>
            <div className="flex justify-between">
              <span>مهلت تست سلامت:</span>
              <strong className="text-emerald-600">۱۰ روز بی‌قید و شرط</strong>
            </div>
            <div className="flex justify-between">
              <span>گارانتی سلامت فیزیکی:</span>
              <strong className="text-emerald-600">تضمین ۱۰۰٪</strong>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 flex justify-between items-baseline">
            <span className="font-bold text-sm text-slate-900">مجموع پرداختی:</span>
            <span className="text-xl font-black text-rose-600">۳۶,۹۰۰,۰۰۰ تومان</span>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl text-sm transition duration-200 shadow-lg shadow-rose-600/30"
          >
            پرداخت و ثبت نهایی سفارش
          </button>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70 text-[11px] text-slate-500 flex items-start gap-2 leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              اطلاعات شما با پروتکل امنیتی SSL رمزنگاری شده و محفوظ خواهد ماند.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
