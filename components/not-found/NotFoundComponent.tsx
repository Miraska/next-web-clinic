"use client";
import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

export default function NotFoundComponent() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[10rem] lg:text-[12rem] font-bold leading-none bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            404
          </span>
        </div>
        
        {/* Content */}
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
          Страница не найдена
        </h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Похоже, эта страница не существует или была перемещена. 
          Попробуйте вернуться на главную.
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25"
          >
            <Home className="w-4 h-4 mr-2" />
            На главную
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-teal-500 hover:text-teal-600 transition-all"
          >
            Смотреть услуги
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        {/* Decorative */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-400">
          <Search className="w-4 h-4" />
          <span>Или воспользуйтесь навигацией выше</span>
        </div>
      </div>
    </section>
  );
}
