import React from 'react';

interface ProductSpecsTableProps {
  attributes: Record<string, string>;
}

export default function ProductSpecsTable({ attributes }: ProductSpecsTableProps) {
  const entries = Object.entries(attributes);

  if (entries.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
        مشخصات فنی ثبت نشده است.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
          جدول مشخصات فنی کامل لپ‌تاپ
        </h3>
        <span className="text-xs text-slate-500">{entries.length} ویژگی ثبت شده</span>
      </div>

      <div className="divide-y divide-slate-100">
        {entries.map(([key, value], idx) => (
          <div
            key={key}
            className={`grid grid-cols-1 md:grid-cols-3 p-4 text-xs md:text-sm ${
              idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
            }`}
          >
            <div className="font-bold text-slate-700 md:col-span-1 flex items-center">
              {key}
            </div>
            <div className="text-slate-600 md:col-span-2 mt-1 md:mt-0 font-medium">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
