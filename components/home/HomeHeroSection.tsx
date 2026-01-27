"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

// Trust indicators with SVG icons


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
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.85, 0.95]);

  return (
    <>
      <section ref={heroRef} className="relative pt-24 lg:pt-28 pb-12 lg:pb-20 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <Image
            src="/hero/bg-02.jpg"
            alt="WebClinic team working"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 z-[1]"
          style={{ opacity: overlayOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/98 via-white/95 to-blue-50/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>

        {/* Dot pattern with parallax */}
        <motion.div 
          className="absolute inset-0 dot-pattern opacity-40 z-[2]"
          style={{ y: backgroundY }}
        />
        
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl z-[2]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl z-[2]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.35, 0.25]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full z-[3]">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 mb-6 shadow-lg shadow-blue-500/5"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-blue-700 text-sm font-medium">
                  Веб-разработка для бизнеса
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Сделаем сайт или{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600 bg-clip-text">веб-приложение</span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-3 bg-blue-600 rounded-full -z-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
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
                    className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-sm text-slate-600 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-200 cursor-default"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>

              {/* CTA Buttons - Enhanced with gradients */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(true)}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 overflow-hidden"
                  data-cta="hero-consultation"
                >
                  {/* Gradient shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center">
                    Обсудить проект
                    <svg
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  </span>
                </motion.button>

                <motion.a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 text-lg font-medium rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
                >
                  {/* Hover gradient border effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                    </svg>
                    Написать в Telegram
                  </span>
                </motion.a>
              </div>


            </motion.div>

            {/* Right Column - Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-4"
            >
              {/* What you get card - Enhanced with glow */}
              <div className="relative mb-6">
                <motion.div 
                  className="relative bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 lg:p-8 shadow-xl"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 30px rgba(37, 99, 235, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top accent gradient */}
                  <div className="absolute top-0 left-0 right-6 h-1.5 bg-blue-500 rounded-t-full w-full" />
                  
                  {/* Subtle glow effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-lime-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

                  <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
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
                        className="flex items-start gap-4 group p-2 -mx-2 rounded-xl hover:bg-blue-50 transition-colors duration-200"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{item.title}</div>
                          <div className="text-sm text-slate-500">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating badge - free consultation */}
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  whileHover={{ scale: 1.05, y: 2 }}
                  className="absolute -top-3 -right-3 bg-emerald-500 text-white rounded-xl px-4 py-2.5 shadow-xl shadow-emerald-500/30"
                >
                  <div className="text-sm font-semibold flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Консультация бесплатно
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-[3]"
        >
          <span className="text-xs text-slate-400 font-medium">Узнать больше</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1.5 bg-white/50 backdrop-blur-sm"
          >
            <motion.div className="w-1.5 h-3 bg-blue-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
