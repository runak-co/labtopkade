import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | لپ تاپ کده بانه',
    default: 'لپ تاپ کده | فروشگاه اینترنتی لپ تاپ استوک و قطعات اصلی در بانه',
  },
  description: 'فروشگاه اینترنتی لپ تاپ کده وب سایتی امن برای خرید لپ تاپ استوک اروپایی و آمریکایی به صورت عمده و خرده در شهرستان بانه دارای نماد اعتماد و ۱۰ روز مهلت تست فنی.',
  keywords: [
    'لپ تاپ استوک',
    'خرید لپ تاپ بانه',
    'لپ تاپ دل استوک',
    'لپ تاپ اچ پی استوک',
    'لپ تاپ گیمینگ استوک',
    'سرفیس بوک',
    'قیمت لپ تاپ استوک',
    'لپ تاپ کده',
  ],
  metadataBase: new URL('https://laptopkade.com'),
  alternates: {
    canonical: 'https://laptopkade.com',
  },
  openGraph: {
    title: 'لپ تاپ کده | فروشگاه اینترنتی لپ تاپ استوک بانه',
    description: 'واردکننده مستقیم لپ‌تاپ‌های استوک درجه یک گرید A++ با تضمین سلامت و مهلت تست.',
    url: 'https://laptopkade.com',
    siteName: 'لپ تاپ کده',
    images: [
      {
        url: 'https://laptopkade.com/wp-content/uploads/2021/03/Logo-Laptopkade.png',
        width: 512,
        height: 512,
        alt: 'لپ تاپ کده بانه',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'لپ تاپ کده | فروشگاه اینترنتی لپ تاپ استوک بانه',
    description: 'خرید اینترنتی لپ تاپ استوک اروپایی با قیمت وارداتی از شهرستان بانه.',
    images: ['https://laptopkade.com/wp-content/uploads/2021/03/Logo-Laptopkade.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="https://laptopkade.com/wp-content/uploads/2021/03/Laptopkade-Icon-100.png" />
      </head>
      <body className="min-h-screen bg-slate-100/60 text-slate-800 antialiased flex flex-col justify-between">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
