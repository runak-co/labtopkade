/**
 * Convert latin numbers to Persian numbers
 */
export function toPersianDigits(n: number | string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n.toString().replace(/\d/g, (x) => persianDigits[parseInt(x, 10)]);
}

/**
 * Format price in Tomans with commas and optional Persian digits
 */
export function formatPrice(price: number, usePersianDigits = true): string {
  if (!price && price !== 0) return 'تماس بگیرید';
  const formatted = price.toLocaleString('fa-IR');
  return `${formatted} تومان`;
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(regularPrice: number, salePrice: number): number {
  if (!regularPrice || !salePrice || regularPrice <= salePrice) return 0;
  return Math.round(((regularPrice - salePrice) / regularPrice) * 100);
}
