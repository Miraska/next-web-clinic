"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundComponent() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0e17] px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl lg:text-9xl font-bold text-[#00ff88]/20 mb-4">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Страница не найдена
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Похоже, эта страница не существует или была перемещена.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-full hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105 group"
          >
            На главную
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
