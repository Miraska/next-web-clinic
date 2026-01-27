"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const featuredProjects = [
  {
    id: "crm-logistics",
    title: "CRM для логистической компании",
    category: "CRM/ERP",
    description: "Автоматизация управления грузоперевозками с отслеживанием в реальном времени.",
    result: "-83% времени обработки заявок",
    color: "blue",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce платформа",
    category: "Веб-разработка",
    description: "Высоконагруженный интернет-магазин с интеграцией 1C и платёжных систем.",
    result: "+40% конверсии",
    color: "emerald",
    technologies: ["Next.js", "TypeScript", "AWS"],
  },
  {
    id: "analytics-dashboard",
    title: "Аналитическая платформа",
    category: "Автоматизация",
    description: "Дашборд с агрегацией данных из 8 источников для руководства компании.",
    result: "-95% времени на отчёты",
    color: "violet",
    technologies: ["React", "Python", "ClickHouse"],
  },
];

export default function HomeProjectsPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const colorClasses = {
    blue: { bg: "bg-blue-600", light: "bg-blue-50", text: "text-blue-600" },
    emerald: { bg: "bg-emerald-600", light: "bg-emerald-50", text: "text-emerald-600" },
    violet: { bg: "bg-violet-600", light: "bg-violet-50", text: "text-violet-600" },
  };

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-violet-50 text-violet-600 text-sm font-medium mb-4">
              Портфолио
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Избранные <span className="text-blue-600">проекты</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Реальные кейсы с измеримыми результатами для бизнеса
            </p>
          </div>
          
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 font-semibold mt-6 md:mt-0 hover:text-blue-700 transition-colors"
          >
            Все проекты
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Featured Project Slider */}
        <div className="relative mb-12">
          {/* Main Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <Link href={`/projects/${featuredProjects[currentIndex].id}`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-200">
                  {/* Image placeholder */}
                  <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-200 flex items-center justify-center">
                          <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-slate-400 text-sm">Скриншот проекта</span>
                      </div>
                    </div>

                    {/* Result badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center px-4 py-2 rounded-full bg-emerald-500 text-white shadow-lg">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-medium">{featuredProjects[currentIndex].result}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="py-4">
                    {/* Category */}
                    <span className={`inline-block px-3 py-1 rounded-full ${colorClasses[featuredProjects[currentIndex].color as keyof typeof colorClasses].light} ${colorClasses[featuredProjects[currentIndex].color as keyof typeof colorClasses].text} text-xs font-medium mb-4`}>
                      {featuredProjects[currentIndex].category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                      {featuredProjects[currentIndex].title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {featuredProjects[currentIndex].description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProjects[currentIndex].technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-blue-600 font-semibold">
                      <span>Подробнее о проекте</span>
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-blue-600 w-8"
                  : "bg-slate-300 w-2 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Projects Grid Preview */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {featuredProjects.map((project, index) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 ${
                  index === currentIndex 
                    ? "bg-white border-blue-200 shadow-md" 
                    : "bg-white/50 border-slate-200 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Thumbnail */}
                  <div className={`w-14 h-14 rounded-xl flex-shrink-0 ${colors.bg} flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <span className={`text-xs ${colors.text} font-medium`}>{project.category}</span>
                    <h4 className="text-slate-900 font-medium truncate">{project.title}</h4>
                    <p className="text-slate-500 text-sm">{project.result}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
