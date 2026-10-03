import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cpu, ShieldCheck } from 'lucide-react';

export default function PromoBanners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
      {/* Banner 1: Dell Workstations */}
      <div className="relative rounded-3xl p-8 bg-gradient-to-l from-slate-900 via-slate-800 to-blue-950 text-white overflow-hidden shadow-lg border border-slate-800 flex flex-col justify-between min-h-[220px]">
        <div className="space-y-3 z-10 max-w-sm">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800">
            <Cpu className="w-3.5 h-3.5" />
            پردازش‌های سنگین سه‌بعدی
          </span>
          <h3 className="text-2xl font-black text-white leading-snug">
            ورک‌استیشن‌های Dell Precision
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            مخصوص مهندسین مکانیک، عمران، معماری، تدوینگران ویدیو و پروژه‌های سنگین سالیدورکس و تری‌دی مکس.
          </p>
        </div>
        <div className="pt-4 z-10">
          <Link
            href="/categories/dell"
            className="inline-flex items-center gap-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition"
          >
            مشاهده مدل‌های دل
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Banner 2: HP ZBook & EliteBook */}
      <div className="relative rounded-3xl p-8 bg-gradient-to-l from-slate-900 via-slate-800 to-emerald-950 text-white overflow-hidden shadow-lg border border-slate-800 flex flex-col justify-between min-h-[220px]">
        <div className="space-y-3 z-10 max-w-sm">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            بدنه تمام آلومینیوم ضد ضربه
          </span>
          <h3 className="text-2xl font-black text-white leading-snug">
            اچ‌پی ZBook و EliteBook
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            استاندارد نظامی مقاومت، امنیت سخت‌افزاری، کیبورد روان و شارژدهی فوق‌العاده برای برنامه‌نویسان و مدیران.
          </p>
        </div>
        <div className="pt-4 z-10">
          <Link
            href="/categories/hp"
            className="inline-flex items-center gap-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl transition"
          >
            مشاهده مدل‌های اچ‌پی
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
