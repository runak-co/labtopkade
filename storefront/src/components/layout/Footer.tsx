import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Headphones, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 mt-20">
      {/* 1. Value Proposition Features */}
      <div className="max-w-7xl mx-auto px-4 pb-12 border-b border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">۱۰ روز مهلت تست فنی</h4>
              <p className="text-xs text-slate-400 mt-0.5">ضمانت بازگشت و تعویض کالا</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">ارسال به تمام نقاط کشور</h4>
              <p className="text-xs text-slate-400 mt-0.5">پست پیشتاز و تیپاکس با بیمه</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">تضمین اصالت و سلامت</h4>
              <p className="text-xs text-slate-400 mt-0.5">استوک درجه یک گرید A++</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">مشاوره تخصصی رایگان</h4>
              <p className="text-xs text-slate-400 mt-0.5">راهنمایی پیش از خرید لپ‌تاپ</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Laptopkade */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            درباره فروشگاه لپ‌تاپ کده
          </h3>
          <p className="text-xs leading-relaxed text-slate-400 text-justify">
            فروشگاه اینترنتی لپ تاپ کده با بیش از یک دهه سابقه درخشان در بازار مرزی بانه، واردکننده مستقیم بهترین لپ‌تاپ‌های استوک اروپایی و آمریکایی، ایستگاه‌های کاری (Workstation)، سرفیس، الترابوک و قطعات لپ‌تاپ است. تمامی محصولات پس از تست فنی دقیق چندمرحله‌ای با مهلت تست به سراسر کشور ارسال می‌شوند.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            دسته‌بندی‌های محبوب
          </h3>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <Link href="/categories/dell" className="hover:text-rose-400 transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                لپ‌تاپ استوک دل Dell Precision
              </Link>
            </li>
            <li>
              <Link href="/categories/hp" className="hover:text-rose-400 transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                لپ‌تاپ استوک اچ‌پی HP ZBook
              </Link>
            </li>
            <li>
              <Link href="/categories/lenovo" className="hover:text-rose-400 transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                لپ‌تاپ استوک لنوو Lenovo ThinkPad
              </Link>
            </li>
            <li>
              <Link href="/categories/gaming" className="hover:text-rose-400 transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                لپ‌تاپ‌های گیمینگ و رندرینگ
              </Link>
            </li>
            <li>
              <Link href="/categories/parts" className="hover:text-rose-400 transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                هارد SSD و رم استوک و نو
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service Links */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            خدمات مشتریان
          </h3>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link href="/guide" className="hover:text-rose-400 transition">راهنمای خرید لپ‌تاپ استوک</Link></li>
            <li><Link href="/terms" className="hover:text-rose-400 transition">شرایط و قوانین گارانتی تست</Link></li>
            <li><Link href="/faq" className="hover:text-rose-400 transition">سوالات متداول کاربران</Link></li>
            <li><Link href="/track" className="hover:text-rose-400 transition">پیگیری سفارشات پستی</Link></li>
            <li><Link href="/account" className="hover:text-rose-400 transition">حساب کاربری و سوابق خرید</Link></li>
          </ul>
        </div>

        {/* Contact info & Baneh Address */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            اطلاعات تماس و نشانی
          </h3>
          <div className="space-y-3 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>استان کردستان، شهرستان بانه، مجتمع تجاری بهشت، طبقه اول، فروشگاه لپ تاپ کده</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-rose-500 shrink-0" />
              <a href="tel:09183751468" className="text-white font-semibold hover:text-rose-400 transition">
                <span dir="ltr">۰۹۱۸۳۷۵۱۴۶۸</span>
              </a>
              <span className="text-slate-500">/</span>
              <a href="tel:09120481468" className="hover:text-rose-400 transition">
                <span dir="ltr">۰۹۱۲۰۴۸۱۴۶۸</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-rose-500 shrink-0" />
              <span>info@laptopkade.com</span>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <span className="px-2.5 py-1 bg-slate-800 rounded text-[11px] text-slate-300">
                اینستاگرام: <span className="text-rose-400 font-mono">@selectlaptop</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          تمامی حقوق مادی و معنوی این وب‌سایت متعلق به <strong className="text-slate-300">فروشگاه لپ تاپ کده</strong> می‌باشد.
        </div>
        <div className="flex items-center gap-4">
          <span>طراحی مدرن با Next.js و React</span>
          <span>•</span>
          <span>سیستم سریع و بهینه‌سازی شده برای سئو</span>
        </div>
      </div>
    </footer>
  );
}
