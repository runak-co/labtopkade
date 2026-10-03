'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Phone, 
  Clock, 
  Menu, 
  ChevronDown, 
  Sparkles, 
  Laptop, 
  HardDrive, 
  Headphones, 
  Flame,
  ShieldCheck
} from 'lucide-react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* 1. Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-reverse space-x-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              ساعات کاری: ۹ صبح الی ۲۱ شب (ارسال از شهرستان بانه)
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              تضمین اصالت کالا و ۱۰ روز مهلت تست فنی
            </span>
          </div>
          <div className="flex items-center space-x-reverse space-x-4">
            <a href="tel:09183751468" className="flex items-center gap-1 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span className="font-semibold text-white" dir="ltr">۰۹۱۸۳۷۵۱۴۶۸</span>
            </a>
            <span className="text-slate-600">|</span>
            <a href="tel:09120481468" className="hover:text-white transition">
              <span dir="ltr">۰۹۱۲۰۴۸۱۴۶۸</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-rose-50 rounded-xl p-1.5 flex items-center justify-center border border-rose-100">
            <Image
              src="https://laptopkade.com/wp-content/uploads/2021/03/Logo-Laptopkade.png"
              alt="لپ تاپ کده"
              width={56}
              height={56}
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1">
              لپ‌تاپ <span className="text-rose-600">کده</span>
            </span>
            <span className="text-[10px] md:text-xs text-slate-500 font-medium -mt-1">
              بزرگترین مرجع لپ‌تاپ استوک بانه
            </span>
          </div>
        </Link>

        {/* Live Search Bar */}
        <div className="flex-1 max-w-2xl mx-2 hidden lg:block">
          <form onSubmit={handleSearch} className="relative flex items-stretch h-11">
            <div className="relative flex-1 flex items-center bg-slate-100 rounded-r-xl border border-slate-200 focus-within:border-rose-500 focus-within:bg-white transition">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجوی نام لپ‌تاپ، دل Precision، اچ‌پی ZBook، لنوو، سرفیس..."
                className="w-full h-full bg-transparent px-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
              />
            </div>
            <div className="relative flex items-center bg-slate-100 border-y border-l border-slate-200 hover:bg-slate-200/50 transition">
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-transparent text-xs text-slate-600 pr-7 pl-3 h-full focus:outline-none cursor-pointer"
              >
                <option value="all">همه دسته‌ها</option>
                <option value="dell">لپ‌تاپ دل (Dell)</option>
                <option value="hp">لپ‌تاپ اچ‌پی (HP)</option>
                <option value="lenovo">لپ‌تاپ لنوو (Lenovo)</option>
                <option value="gaming">گیمینگ و رندرینگ</option>
                <option value="parts">قطعات و لوازم جانبی</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-5 rounded-l-xl text-sm transition shadow-sm flex items-center justify-center shrink-0"
            >
              جستجو
            </button>
          </form>
        </div>

        {/* User Account & Cart Buttons */}
        <div className="flex items-center space-x-reverse space-x-3 shrink-0">
          <Link
            href="/account"
            className="flex items-center gap-2 px-3.5 py-2 border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition text-sm text-slate-700"
          >
            <User className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline font-medium">ورود / ثبت‌نام</span>
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 px-3.5 py-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl hover:bg-rose-100 transition text-sm"
          >
            <ShoppingCart className="w-4 h-4 text-rose-600" />
            <span className="hidden sm:inline font-bold">سبد خرید</span>
            <span className="inline-flex items-center justify-center bg-rose-600 text-white text-[11px] font-bold w-5 h-5 rounded-full">
              ۰
            </span>
          </Link>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="منوی موبایل"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden px-4 pb-3">
        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجوی مدل لپ‌تاپ..."
            className="w-full bg-slate-100 border border-slate-200 rounded-xl py-2 pr-9 pl-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute right-3" />
        </form>
      </div>

      {/* 3. Mega Navigation Bar */}
      <nav className="bg-slate-50 border-t border-slate-200/80 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-reverse space-x-1">
            {/* All Categories Button */}
            <div className="relative group py-2.5">
              <button className="flex items-center gap-2 font-bold text-slate-900 px-3 py-1.5 rounded-lg bg-rose-100/70 text-rose-700 hover:bg-rose-200/70 transition">
                <Menu className="w-4 h-4" />
                <span>دسته‌بندی لپ‌تاپ‌ها</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full hidden group-hover:block w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-fadeIn">
                <Link
                  href="/categories/dell"
                  className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg text-slate-700 hover:text-rose-600 font-medium transition"
                >
                  <span className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-rose-500" />
                    لپ‌تاپ استوک دل (Dell)
                  </span>
                  <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">Precision, Latitude</span>
                </Link>
                <Link
                  href="/categories/hp"
                  className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg text-slate-700 hover:text-rose-600 font-medium transition"
                >
                  <span className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-rose-500" />
                    لپ‌تاپ استوک اچ‌پی (HP)
                  </span>
                  <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">ZBook, EliteBook</span>
                </Link>
                <Link
                  href="/categories/lenovo"
                  className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg text-slate-700 hover:text-rose-600 font-medium transition"
                >
                  <span className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-rose-500" />
                    لپ‌تاپ استوک لنوو (Lenovo)
                  </span>
                  <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">ThinkPad, Legion</span>
                </Link>
                <Link
                  href="/categories/surface"
                  className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg text-slate-700 hover:text-rose-600 font-medium transition"
                >
                  <span className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-rose-500" />
                    مایکروسافت سرفیس (Surface)
                  </span>
                  <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">Pro, Book, Laptop</span>
                </Link>
                <div className="my-1 border-t border-slate-100" />
                <Link
                  href="/categories/parts"
                  className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg text-slate-700 hover:text-rose-600 font-medium transition"
                >
                  <span className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-rose-500" />
                    قطعات و لوازم جانبی (رم، SSD، شارژر)
                  </span>
                </Link>
              </div>
            </div>

            {/* Nav links */}
            <Link href="/products" className="px-3 py-2 text-slate-700 hover:text-rose-600 font-medium transition">
              همه محصولات
            </Link>
            <Link href="/categories/gaming" className="px-3 py-2 text-slate-700 hover:text-rose-600 font-medium transition flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-rose-500" />
              لپ‌تاپ‌های گیمینگ و رندرینگ
            </Link>
            <Link href="/categories/engineering" className="px-3 py-2 text-slate-700 hover:text-rose-600 font-medium transition">
              لپ‌تاپ‌های مهندسی
            </Link>
            <Link href="/categories/surface" className="px-3 py-2 text-slate-700 hover:text-rose-600 font-medium transition">
              سرفیس بوک و تبلت شو
            </Link>
            <Link href="/guide" className="px-3 py-2 text-slate-700 hover:text-rose-600 font-medium transition">
              راهنمای خرید لپ‌تاپ استوک
            </Link>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-rose-600">
            <span className="flex items-center gap-1 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              تخفیف ویژه سفارش‌های نقدی
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-4/5 max-w-xs bg-white h-full p-6 shadow-2xl flex flex-col justify-between" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <span className="font-bold text-lg text-slate-900">منوی دسته‌بندی</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-slate-500 text-sm">بستن</button>
              </div>
              <div className="flex flex-col space-y-2 text-sm font-medium">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800">صفحه اصلی</Link>
                <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800">همه لپ‌تاپ‌ها</Link>
                <Link href="/categories/dell" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800">لپ‌تاپ استوک دل (Dell)</Link>
                <Link href="/categories/hp" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800">لپ‌تاپ استوک اچ‌پی (HP)</Link>
                <Link href="/categories/lenovo" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800">لپ‌تاپ استوک لنوو (Lenovo)</Link>
                <Link href="/categories/gaming" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800">گیمینگ و رندرینگ</Link>
                <Link href="/categories/parts" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800">قطعات و رم و SSD</Link>
                <Link href="/cart" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800">سبد خرید</Link>
                <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800">حساب کاربری</Link>
              </div>
            </div>
            <div className="border-t pt-4 text-xs text-slate-500">
              تماس مستقیم با واحد فروش: ۰۹۱۸۳۷۵۱۴۶۸
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
