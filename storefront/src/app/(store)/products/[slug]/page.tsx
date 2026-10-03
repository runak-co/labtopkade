import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getRelatedProducts } from '@/lib/api/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductBuyBox from '@/components/product/ProductBuyBox';
import ProductSpecsTable from '@/components/product/ProductSpecsTable';
import ProductCard from '@/components/product/ProductCard';
import { 
  ChevronLeft, 
  Home, 
  Cpu, 
  HardDrive, 
  Monitor, 
  ShieldAlert, 
  CheckCircle2, 
  Award,
  Share2
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return { title: 'محصول یافت نشد | لپ تاپ کده' };
  }

  const title = `${product.name} | قیمت و خرید لپ تاپ استوک بانه`;
  const description = product.shortDescription || `خرید اینترنتی ${product.name} با ۱۰ روز مهلت تست فنی و گارانتی اصالت سلامت کالا در لپ تاپ کده بانه.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://laptopkade.com/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://laptopkade.com/products/${product.slug}`,
      siteName: 'لپ تاپ کده',
      images: [
        {
          url: product.mainImage,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      locale: 'fa_IR',
      type: 'website',
    },
  };
}

export const revalidate = 60; // ISR

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.slug, product.categories[0], 4);

  // Extract key quick specifications
  const cpu = product.attributes['مدل پردازنده'] || product.attributes['سری پردازنده'] || 'Intel Core i7';
  const ram = product.attributes['ظرفیت حافظه RAM'] || '16GB DDR4';
  const storage = product.attributes['ظرفیت حافظه داخلی'] || '512GB SSD';
  const gpu = product.attributes['مدل پردازنده گرافیکی'] || 'NVIDIA Quadro / Intel HD';
  const display = product.attributes['اندازه صفحه نمایش'] || '15.6 اینچ';

  // JSON-LD structured data for Google Product Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images,
    description: product.shortDescription,
    sku: `LK-${product.id}`,
    offers: {
      '@type': 'Offer',
      url: `https://laptopkade.com/products/${product.slug}`,
      priceCurrency: 'IRT',
      price: product.price,
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'لپ تاپ کده',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <div className="space-y-10">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Persian Breadcrumbs */}
      <nav className="flex items-center space-x-reverse space-x-2 text-xs text-slate-500 bg-white py-3 px-4 rounded-xl border border-slate-200/80">
        <Link href="/" className="flex items-center gap-1 hover:text-rose-600 transition">
          <Home className="w-3.5 h-3.5" />
          <span>خانه</span>
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/products" className="hover:text-rose-600 transition">
          لپ‌تاپ استوک
        </Link>
        {product.categories[0] && (
          <>
            <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-700 font-medium">{product.categories[0]}</span>
          </>
        )}
        <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-400 truncate max-w-[200px] md:max-w-md">{product.name}</span>
      </nav>

      {/* 2. Main Product Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Gallery Column (5 cols) */}
        <div className="lg:col-span-5">
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Center Specs & Details Column (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-2">
            <span className="inline-block bg-rose-50 text-rose-700 text-xs font-bold px-3 py-1 rounded-full border border-rose-200">
              {product.categories[0] || 'لپ‌تاپ استوک وارداتی'}
            </span>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
              {product.name}
            </h1>
          </div>

          {/* Quick Spec Highlights */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-3">
            <h3 className="font-bold text-xs text-slate-700 border-b border-slate-200 pb-2">
              ویژگی‌های کلیدی دستگاه:
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="text-slate-600">پردازنده: <strong className="text-slate-900">{cpu}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="text-slate-600">رم: <strong className="text-slate-900">{ram}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="text-slate-600">حافظه: <strong className="text-slate-900">{storage}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="text-slate-600">نمایشگر: <strong className="text-slate-900">{display}</strong></span>
              </div>
            </div>
            <div className="pt-1 text-[11px] text-slate-500">
              گرافیک: <strong className="text-slate-700">{gpu}</strong>
            </div>
          </div>

          {/* Short description */}
          {product.shortDescription && (
            <div className="text-xs text-slate-600 leading-relaxed text-justify bg-white p-4 rounded-2xl border border-slate-200/80">
              <p>{product.shortDescription}</p>
            </div>
          )}

          {/* Baneh Testing Notice */}
          <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold">تست کامل سخت‌افزاری در بانه:</strong>
              کلیه قطعات این لپ‌تاپ شامل باتری، کیبورد، تاچ‌پد، پورت‌ها و صفحه‌نمایش به طور کامل توسط کارشناسان فنی لپ تاپ کده تست شده و آماده استفاده بدون کوچکترین ایراد فنی است.
            </div>
          </div>
        </div>

        {/* Buy Box Column (3 cols) */}
        <div className="lg:col-span-3">
          <ProductBuyBox product={product} />
        </div>
      </div>

      {/* 3. Detailed Technical Specifications */}
      <section className="space-y-6 pt-6">
        <ProductSpecsTable attributes={product.attributes} />
      </section>

      {/* 4. Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-10 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
              محصولات مرتبط و مشابه
            </h2>
            <Link href="/products" className="text-xs font-bold text-rose-600 hover:text-rose-700 transition">
              مشاهده سایر لپ‌تاپ‌ها &larr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
