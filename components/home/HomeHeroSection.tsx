"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

// Trust indicators
const trustBadges = [
  { icon: "✓", text: "Работаем по договору" },
  { icon: "✓", text: "Фиксированная цена" },
  { icon: "✓", text: "Гарантия 3 месяца" },
];

// What you get
const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    title: "Сайт, который работает",
    desc: "Понятный для клиентов, удобный для вас"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Всё прозрачно",
    desc: "Знаете цену и сроки до начала работ"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Поддержка после запуска",
    desc: "Не бросаем проект после сдачи"
  },
];

// Pricing quick view
const quickPricing = [
  { label: "Лендинг", price: "от 50 000 ₽", time: "2-3 недели" },
  { label: "Сайт компании", price: "от 150 000 ₽", time: "4-6 недель" },
  { label: "Интернет-магазин", price: "от 300 000 ₽", time: "6-10 недель" },
];

export default function HomeHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 dot-pattern opacity-50" />
        
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-blue-700 text-sm font-medium">
                  Веб-разработка для бизнеса
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Сделаем сайт,
                <br />
                <span className="text-blue-600">который приводит клиентов</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Разрабатываем сайты и веб-сервисы для бизнеса. 
                Понятно объясняем, называем цену сразу, работаем по договору.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
                  data-cta="hero-consultation"
                >
                  Получить консультацию
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
                </button>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-slate-700 text-lg font-medium rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Смотреть услуги
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
                      {badge.icon}
                    </span>
                    {badge.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:pl-8"
            >
              <div className="relative">
                {/* Main card */}
                <div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
                  {/* Top accent */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-t-full" />

                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Что вы получите
                  </h3>
                  
                  <div className="space-y-5 mb-8">
                    {benefits.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{item.title}</div>
                          <div className="text-sm text-slate-500">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick pricing */}
                  <div className="pt-6 border-t border-slate-100">
                    <div className="text-sm font-medium text-slate-500 mb-4">Ориентировочные цены:</div>
                    <div className="grid grid-cols-1 gap-3">
                      {quickPricing.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                        >
                          <span className="text-slate-700 font-medium">{item.label}</span>
                          <div className="text-right">
                            <span className="text-blue-600 font-bold">{item.price}</span>
                            <span className="text-slate-400 text-sm ml-2">• {item.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge - response time */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-xl p-4 shadow-lg"
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
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="absolute -top-4 -right-4 bg-emerald-500 text-white rounded-xl px-4 py-2 shadow-lg"
                >
                  <div className="text-sm font-semibold">Консультация бесплатно</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
