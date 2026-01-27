"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center group hover:border-blue-300 hover:shadow-xl transition-all duration-200"
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
              stroke="#2563eb"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={138}
              strokeDashoffset={138 - (138 * scrollProgress) / 100}
              className="transition-all duration-100"
            />
          </svg>
          
          {/* Arrow icon */}
          <svg 
            className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors relative z-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
