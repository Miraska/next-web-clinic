"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setIsVisible(scrollTop > 400);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Gradient color based on progress
  const getProgressColor = () => {
    if (scrollProgress < 50) return "#2563eb"; // blue
    return "#0d9488"; // teal
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center group hover:border-blue-300 hover:shadow-xl transition-all"
          aria-label="Вернуться наверх"
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="22"
              stroke="#e2e8f0"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="24"
              cy="24"
              r="22"
              stroke={getProgressColor()}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={138}
              strokeDashoffset={138 - (138 * scrollProgress) / 100}
              className="transition-all duration-100"
            />
          </svg>
          
          {/* Arrow icon */}
          <ArrowUp className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
