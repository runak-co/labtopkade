'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  return (
    <div className="space-y-4">
      {/* Main Preview */}
      <div className="relative w-full h-[360px] md:h-[460px] bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden p-6 flex items-center justify-center shadow-sm">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          className="object-contain p-4 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          unoptimized
        />
        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-lg">
          تصاویر واقعی کالا
        </div>
      </div>

      {/* Thumbnails strip */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 p-1 bg-white transition-all ${
                selectedImage === img
                  ? 'border-rose-600 shadow-md scale-105'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <Image
                src={img}
                alt={`${productName} - تصویر ${idx + 1}`}
                fill
                className="object-contain p-1"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
