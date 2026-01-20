"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomeWhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Веб-разработка",
      description: "Корпоративные сайты, веб-приложения и платформы. Современные технологии, адаптивный дизайн, высокая производительность.",
      features: ["Корпоративные сайты", "SPA/PWA приложения", "Интернет-магазины"],
      gradient: "from-[#00ff88] to-[#00d4ff]",
      color: "#00ff88",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "CRM/ERP системы",
      description: "Кастомные системы управления бизнесом. Автоматизация продаж, учёта, складов и внутренних процессов компании.",
      features: ["Управление клиентами", "Складской учёт", "Аналитика и отчёты"],
      gradient: "from-[#00d4ff] to-[#8b5cf6]",
      color: "#00d4ff",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Автоматизация бизнеса",
      description: "Оптимизация рутинных процессов. Интеграции между системами, боты, автоматические отчёты и уведомления.",
      features: ["Интеграции систем", "Чат-боты", "Автоматизация процессов"],
      gradient: "from-[#8b5cf6] to-[#ec4899]",
      color: "#8b5cf6",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Архитектура и масштабирование",
      description: "Проектирование отказоустойчивых систем. Оптимизация производительности, миграции и техническое сопровождение.",
      features: ["Системная архитектура", "DevOps", "Поддержка 24/7"],
      gradient: "from-[#ec4899] to-[#f97316]",
      color: "#ec4899",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0a0e17] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="orb orb-green w-[500px] h-[500px] -top-48 -right-48 opacity-20 animate-float" />
      <div className="orb orb-purple w-[400px] h-[400px] bottom-0 -left-48 opacity-15 animate-float-delayed" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-medium mb-6"
          >
            Наши направления
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Что мы <span className="gradient-text">делаем</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            Проектируем и разрабатываем системы, которые решают реальные бизнес-задачи. 
            Фокус на результате, а не на технологиях ради технологий.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <div 
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                style={{ background: `linear-gradient(135deg, ${service.color}20, transparent)` }}
              />
              
              <div className="relative p-8 lg:p-10 rounded-2xl bg-[#0f1520] border border-[#1f2937] hover:border-[#00ff88]/30 transition-all duration-500 card-hover overflow-hidden">
                {/* Animated border gradient */}
                <div 
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    background: `linear-gradient(135deg, ${service.color}10, transparent)`,
                  }}
                />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon with animated background */}
                  <div className="relative w-16 h-16 mb-6">
                    <div 
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500`}
                    />
                    <div className="relative w-full h-full rounded-xl bg-[#0a0e17]/50 flex items-center justify-center" style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center text-white/30 font-mono text-sm group-hover:bg-[#00ff88]/20 group-hover:text-[#00ff88] transition-all duration-300">
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-[#00ff88] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features with animated bullets */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.span
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="px-3 py-1 text-sm text-white/70 bg-[#1f2937] rounded-full group-hover:bg-[#00ff88]/10 group-hover:text-[#00ff88] transition-all duration-300"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="group inline-flex items-center text-[#00ff88] font-medium hover:text-[#00cc6a] transition-colors duration-300"
          >
            <span className="relative">
              Подробнее об услугах
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff88] group-hover:w-full transition-all duration-300" />
            </span>
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
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
