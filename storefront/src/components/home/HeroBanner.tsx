import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Shield, Award } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
      {/* Main Big Banner (2 Cols) */}
      <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 md:p-12 flex flex-col justify-between min-h-[380px] shadow-lg border border-slate-800">
        <div className="relative z-10 max-w-xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-rose-600/30 border border-rose-500/40 text-rose-300 text-xs font-bold px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            تخصصی‌ترین مرکز واردات لپ‌تاپ استوک بانه
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            قدرت و کارایی بالا با <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-amber-300">
              لپ‌تاپ‌های استوک اروپایی
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            انواع لپ‌تاپ‌های صنعتی، مهندسی، رندرینگ و گیمینگ دل، اچ‌پی، لنوو و سرفیس با گرید A++ و ۱۰ روز مهلت تست فنی بی‌قید و شرط.
          </p>
        </div>

        <div className="relative z-10 pt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-xl transition duration-200 shadow-lg shadow-rose-900/30 text-sm"
          >
            مشاهده همه محصولات
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <Link
            href="/categories/dell"
            className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold px-5 py-3 rounded-xl transition text-sm border border-slate-700"
          >
            ایستگاه‌های کاری Dell Precision
          </Link>
        </div>

        {/* Background decorative logo watermark centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="relative w-72 md:w-96 lg:w-[420px] h-72 md:h-96 lg:h-[420px] opacity-20 lg:opacity-25">
            <Image
              src="https://laptopkade.com/wp-content/uploads/2021/03/Logo-Laptopkade.png"
              alt="لپ تاپ کده"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Side Promo Banners (1 Col) */}
      <div className="flex flex-col gap-6">
        {/* Top Promo */}
        <div className="relative flex-1 rounded-3xl overflow-hidden bg-gradient-to-br from-rose-900 to-rose-700 text-white p-6 flex flex-col justify-between border border-rose-600/30 shadow-md">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-200 bg-rose-950/40 px-2 py-0.5 rounded">
              گیمینگ و رندرینگ
            </span>
            <h3 className="text-xl font-bold">لپ‌تاپ‌های گرافیک‌دار</h3>
            <p className="text-xs text-rose-100">مجهز به کارت گرافیک‌های مجزای Nvidia Quadro و GTX</p>
          </div>
          <div className="pt-4">
            <Link
              href="/categories/gaming"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900/60 hover:bg-slate-900 px-4 py-2 rounded-lg transition"
            >
              مشاهده مدل‌ها &larr;
            </Link>
          </div>
        </div>

        {/* Bottom Promo */}
        <div className="relative flex-1 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 flex flex-col justify-between border border-slate-700 shadow-md">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded">
              سبک و لمسی
            </span>
            <h3 className="text-xl font-bold">مایکروسافت سرفیس بوک</h3>
            <p className="text-xs text-slate-300">صفحه لمسی، قلم ساپورت و طراحی فوق‌العاده باریک</p>
          </div>
          <div className="pt-4">
            <Link
              href="/categories/surface"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-lg transition"
            >
              بررسی و خرید &larr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
