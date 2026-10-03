'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  User, 
  Package, 
  MapPin, 
  ShieldCheck, 
  LogOut, 
  Phone, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses'>('orders');

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <span className="w-2.5 h-6 bg-rose-600 rounded-full"></span>
          حساب کاربری من
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          مدیریت سفارشات، آدرس‌ها و اطلاعات شخصی در فروشگاه لپ تاپ کده
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar (3 cols) */}
        <aside className="lg:col-span-3 bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">کاربر گرامی</h3>
              <span className="text-[11px] text-slate-500 font-mono">۰۹۱۲****۴۶۸</span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center gap-2.5 p-3 rounded-xl font-bold transition text-right ${
                activeTab === 'orders'
                  ? 'bg-rose-50 text-rose-700 border border-rose-200'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Package className="w-4 h-4 text-rose-600" />
              سفارش‌های من
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full flex items-center gap-2.5 p-3 rounded-xl font-bold transition text-right ${
                activeTab === 'addresses'
                  ? 'bg-rose-50 text-rose-700 border border-rose-200'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <MapPin className="w-4 h-4 text-rose-600" />
              نشانی‌های ثبت شده
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-2.5 p-3 rounded-xl font-bold transition text-right ${
                activeTab === 'profile'
                  ? 'bg-rose-50 text-rose-700 border border-rose-200'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-rose-600" />
              اطلاعات حساب و امنیت
            </button>
          </div>
        </aside>

        {/* Tab Content (9 cols) */}
        <div className="lg:col-span-9 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm min-h-[350px]">
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h2 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-3">
                تاریخچه سفارشات
              </h2>

              {/* Sample past order */}
              <div className="border border-slate-200 rounded-2xl p-5 space-y-4 bg-slate-50/50">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-200/70 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-900">سفارش LK-849201</span>
                    <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full text-[11px]">
                      ارسال شده با تیپاکس
                    </span>
                  </div>
                  <span className="text-slate-500">تاریخ: ۱۲ اسفند ۱۴۰۲</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1 text-xs">
                    <h4 className="font-bold text-slate-800">
                      لپ تاپ استوک دل Dell Precision 7550 Core i7-10850H
                    </h4>
                    <p className="text-[11px] text-slate-500">کد رهگیری پستی: ۹۸۷۶۵۴۳۲۱۰</p>
                  </div>
                  <span className="font-bold text-sm text-slate-900">۳۶,۹۰۰,۰۰۰ تومان</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <h2 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-3">
                آدرس‌های تحویل
              </h2>
              <div className="border border-slate-200 rounded-2xl p-5 space-y-2 bg-slate-50/50 text-xs">
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>تهران، خیابان ولیعصر، تقاطع فاطمی</span>
                  <span className="text-rose-600">آدرس پیش‌فرض</span>
                </div>
                <p className="text-slate-500">گیرنده: محمد امینی | موبایل: ۰۹۱۲****۴۶۸ | کد پستی: ۱۴۱۵۹۳۴۸۲۱</p>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-3">
                مشخصات کاربری
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-500">نام و نام خانوادگی:</span>
                  <p className="font-bold text-slate-800">محمد امینی</p>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500">شماره موبایل:</span>
                  <p className="font-bold text-slate-800 font-mono">۰۹۱۲****۴۶۸</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
