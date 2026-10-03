import React from 'react';
import Link from 'next/link';
import { Laptop, Cpu, HardDrive, Gamepad2, Monitor, Tablet } from 'lucide-react';

const CATEGORIES = [
  { name: 'لپ‌تاپ استوک دل', slug: 'dell', count: '۸ مدل', icon: Laptop, color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { name: 'لپ‌تاپ استوک اچ‌پی', slug: 'hp', count: '۸ مدل', icon: Laptop, color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  { name: 'لپ‌تاپ استوک لنوو', slug: 'lenovo', count: '۶ مدل', icon: Laptop, color: 'bg-red-50 text-red-600 border-red-200' },
  { name: 'سرفیس بوک و پرو', slug: 'surface', count: '۴ مدل', icon: Tablet, color: 'bg-purple-50 text-purple-600 border-purple-200' },
  { name: 'گیمینگ و رندرینگ', slug: 'gaming', count: '۱۲ مدل', icon: Gamepad2, color: 'bg-amber-50 text-amber-600 border-amber-200' },
  { name: 'هارد SSD و قطعات', slug: 'parts', count: '۱۵ قلم', icon: HardDrive, color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
];

export default function CategoryCircles() {
  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
          <span className="w-2.5 h-6 bg-rose-600 rounded-full"></span>
          خرید بر اساس دسته‌بندی و برند
        </h2>
        <Link href="/products" className="text-xs font-bold text-rose-600 hover:text-rose-700 transition">
          مشاهده تمام کالاها &larr;
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group flex flex-col items-center p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-rose-400 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border mb-3 transition-transform group-hover:scale-110 ${cat.color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <span className="font-bold text-sm text-slate-800 group-hover:text-rose-600 transition">
                {cat.name}
              </span>
              <span className="text-[11px] text-slate-400 font-medium mt-1">
                {cat.count}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
