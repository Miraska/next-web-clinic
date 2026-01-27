"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

// Trust indicators
const trustBadges = [
  { icon: "✓", text: "Работаем по договору" },
  { icon: "✓", text: "Фиксированная цена" },
  { icon: "✓", text: "Гарантия 3 месяца" },
  { icon: "✓", text: "Код остаётся у вас" },
];

// What you get - checklist
const whatYouGet = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    title: "Работающий сайт",
    desc: "Современный, быстрый, адаптивный под все устройства"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Прозрачный процесс",
    desc: "Знаете цену и сроки до начала работ"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Исходный код",
    desc: "Передаём все файлы, вы не привязаны к нам"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Поддержка после запуска",
    desc: "Не бросаем проект, помогаем с развитием"
  },
];

// Pricing quick view
const quickPricing = [
  { label: "Лендинг", price: "от 50 000 ₽", time: "2-3 недели", icon: "📄" },
  { label: "Сайт-визитка", price: "от 80 000 ₽", time: "3-4 недели", icon: "🏢" },
  { label: "Корпоративный сайт", price: "от 150 000 ₽", time: "4-6 недель", icon: "🌐" },
  { label: "Интернет-магазин", price: "от 250 000 ₽", time: "6-10 недель", icon: "🛒" },
  { label: "Веб-приложение", price: "от 300 000 ₽", time: "2-4 месяца", icon: "⚙️" },
  { label: "CRM/ERP система", price: "от 400 000 ₽", time: "3-5 месяцев", icon: "📊" },
];

// Services list
const servicesList = [
  "Сайты и лендинги",
  "Интернет-магазины", 
  "Веб-приложения",
  "CRM/ERP системы",
  "API и интеграции",
  "Чат-боты",
  "SEO-оптимизация",
];

export default function HomeHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePrice, setActivePrice] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <section ref={heroRef} className="relative pt-24 lg:pt-28 pb-12 lg:pb-20 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Elements */}
        <motion.div 
          className="absolute inset-0 dot-pattern opacity-40"
          style={{ y: backgroundY }}
        />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30" />
        
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-blue-700 text-sm font-medium">
                  Веб-разработка для бизнеса
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Сделаем сайт или{" "}
                <span className="relative">
                  <span className="text-blue-600">веб-приложение</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 4 150 2 298 8" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                  </svg>
                </span>
                <br />
                для вашего бизнеса
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Разрабатываем сайты, интернет-магазины, CRM-системы и чат-боты.
                Понятно объясняем, называем цену сразу, работаем по договору.
              </p>

              {/* Services tags */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                {servicesList.map((service, index) => (
                  <motion.span
                    key={service}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-all cursor-default"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
                  data-cta="hero-consultation"
                >
                  Обсудить проект
                  <svg
                    className="ml-2 w-5 h-5"
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
                </motion.button>

                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-slate-700 text-lg font-medium rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                  </svg>
                  Написать в Telegram
                </a>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 justify-center lg:justify-start">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-slate-600 bg-white/80 px-3 py-2 rounded-lg border border-slate-100"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {badge.icon}
                    </span>
                    <span className="whitespace-nowrap">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-4"
            >
              {/* What you get card */}
              <div className="relative mb-6">
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-xl shadow-slate-200/50">
                  {/* Top accent */}
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-blue-600 via-emerald-500 to-lime-500 rounded-t-full" />

                  <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Что вы получите
                  </h3>
                  
                  <div className="space-y-4">
                    {whatYouGet.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-4 group"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{item.title}</div>
                          <div className="text-sm text-slate-500">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating badge - response time */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Ответим за 2 часа</div>
                      <div className="text-xs text-slate-500">В рабочее время</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge - free consultation */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl px-4 py-2 shadow-lg shadow-emerald-500/30"
                >
                  <div className="text-sm font-semibold">Консультация бесплатно</div>
                </motion.div>
              </div>

              {/* Quick pricing card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ориентировочные цены
                  </h4>
                  <Link href="/services" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                    Все услуги →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {quickPricing.map((item, index) => (
                    <motion.div 
                      key={index}
                      onHoverStart={() => setActivePrice(index)}
                      onHoverEnd={() => setActivePrice(null)}
                      className={`p-3 rounded-xl cursor-default transition-all duration-200 ${
                        activePrice === index 
                          ? "bg-white border-blue-200 shadow-md border" 
                          : "bg-white/70 border border-transparent hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-slate-700 font-medium text-sm">{item.label}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-bold text-sm">{item.price}</span>
                        <span className="text-slate-400 text-xs">{item.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3 text-center">
                  Точная стоимость — после обсуждения задачи
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-400">Узнать больше</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1"
          >
            <motion.div className="w-1.5 h-3 bg-slate-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
