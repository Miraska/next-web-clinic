"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundComponent() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-200 px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl lg:text-9xl font-bold text-blue-600 mb-4">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray mb-4">
            Страница не найдена
          </h2>
          <p className="text-gray/60 mb-8 max-w-md mx-auto">
            Похоже, эта страница не существует или была перемещена.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
