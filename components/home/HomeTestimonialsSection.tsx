"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function HomeTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

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

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const testimonials = [
    {
      id: 1,
      name: "Алексей Морозов",
      role: "CTO",
      company: "LogiTrack",
      industry: "Логистика",
      avatar: "",
      text: "Разрабатывали CRM для управления грузоперевозками. Особенно ценю, что команда не просто писала код по ТЗ, а предлагала архитектурные решения, которые упростили масштабирование. Сейчас система обрабатывает 500+ заказов в день.",
      result: "Автоматизировали 80% рутинных операций",
      color: "#00ff88",
    },
    {
      id: 2,
      name: "Екатерина Волкова",
      role: "Product Manager",
      company: "HealthTech Solutions",
      industry: "MedTech",
      avatar: "",
      text: "Проект с высокими требованиями к безопасности — медицинские данные. WebClinic прошли все аудиты безопасности с первого раза. Отдельно отмечу качество документации — новые разработчики легко включаются в проект.",
      result: "Прошли сертификацию ISO 27001",
      color: "#00d4ff",
    },
    {
      id: 3,
      name: "Дмитрий Козлов",
      role: "Founder",
      company: "RetailPro",
      industry: "E-commerce",
      avatar: "",
      text: "Переезжали с самописного legacy-решения на современный стек. Больше всего впечатлила методология: сначала детальный аудит, план миграции по этапам, и только потом код. Ни дня простоя за 4 месяца перехода.",
      result: "Время загрузки снизилось в 3 раза",
      color: "#8b5cf6",
    },
  ];

  const clients = [
    { name: "LogiTrack", logo: "" },
    { name: "HealthTech", logo: "" },
    { name: "RetailPro", logo: "" },
    { name: "FinanceHub", logo: "" },
    { name: "DataStream", logo: "" },
    { name: "CloudBase", logo: "" },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0f1520] relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      
      <motion.div style={{ y }} className="orb orb-purple w-80 h-80 top-1/4 -left-40 opacity-20" />
      <div className="orb orb-cyan w-96 h-96 bottom-0 -right-48 opacity-15" />

      <div ref={containerRef} className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium mb-6">
            Отзывы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Мнения технических<br/>
            <span className="gradient-text">руководителей</span>
          </h2>
          <p className="text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            Работаем преимущественно с техническими командами, 
            которые понимают разницу между «сделать» и «сделать правильно».
          </p>
        </motion.div>

        {/* Main testimonial showcase */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Testimonial content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative min-h-[420px] lg:min-h-[380px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  opacity: activeTestimonial === index ? 1 : 0,
                  y: activeTestimonial === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`${activeTestimonial === index ? "relative" : "absolute inset-0 pointer-events-none"}`}
              >
                {/* Quote */}
                <div className="mb-8">
                  <svg
                    className="w-12 h-12 mb-6"
                    style={{ color: `${testimonial.color}40` }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-6 line-clamp-4">
                    {testimonial.text}
                  </p>
                </div>

                {/* Result badge */}
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-8"
                  style={{ backgroundColor: `${testimonial.color}15` }}
                >
                  <svg className="w-4 h-4" style={{ color: testimonial.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm" style={{ color: testimonial.color }}>
                    {testimonial.result}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-[#1f2937]">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center text-lg font-bold"
                        style={{ backgroundColor: `${testimonial.color}20`, color: testimonial.color }}
                      >
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-white/50">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <div className="text-xs text-white/30 mt-1">
                      {testimonial.industry}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>

            {/* Navigation dots */}
            <div className="flex gap-3 mt-8">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? "w-8" : "w-2"
                  }`}
                  style={{
                    backgroundColor: activeTestimonial === index 
                      ? testimonial.color 
                      : "#1f2937"
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <ImagePlaceholder 
                src=""
                alt="Работа с клиентами"
                aspectRatio="square"
                overlayColor={testimonials[activeTestimonial].color}
              />
              
              {/* Floating card */}
              <motion.div
                style={{ y }}
                className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-[#0a0e17]/90 backdrop-blur-xl border border-[#1f2937] max-w-[200px]"
              >
                <div className="text-3xl font-bold text-white mb-1">
                  50<span className="text-[#00ff88]">+</span>
                </div>
                <div className="text-sm text-white/60">
                  завершённых проектов
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-12 border-t border-[#1f2937]"
        >
          <p className="text-center text-white/40 text-sm mb-8">
            Нам доверяют технологические компании
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-center h-12 px-4 rounded-lg bg-[#0a0e17]/50 border border-[#1f2937] hover:border-[#00ff88]/30 transition-all group"
              >
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <span className="text-white/30 group-hover:text-white/60 font-medium text-sm transition-colors">
                    {client.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
