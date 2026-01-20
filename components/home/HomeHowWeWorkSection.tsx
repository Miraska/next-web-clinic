"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HomeHowWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

  // Auto-advance steps
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const steps = [
    {
      number: "01",
      title: "Анализ",
      description: "Изучаем ваш бизнес, цели и текущие процессы. Определяем требования и формируем техническое задание.",
      details: ["Брифинг с клиентом", "Анализ конкурентов", "Формирование ТЗ"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "#00ff88",
    },
    {
      number: "02",
      title: "Архитектура",
      description: "Проектируем структуру системы, выбираем технологии и планируем этапы разработки.",
      details: ["Проектирование БД", "Выбор технологий", "План разработки"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "#00d4ff",
    },
    {
      number: "03",
      title: "Разработка",
      description: "Пишем чистый, масштабируемый код. Регулярные демонстрации и итерации по обратной связи.",
      details: ["Agile-подход", "Code review", "Еженедельные демо"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "#8b5cf6",
    },
    {
      number: "04",
      title: "Тестирование",
      description: "Комплексное тестирование функциональности, безопасности и производительности системы.",
      details: ["Unit-тесты", "E2E тестирование", "Нагрузочные тесты"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "#ec4899",
    },
    {
      number: "05",
      title: "Запуск",
      description: "Деплоим проект, обучаем команду и обеспечиваем техническую поддержку.",
      details: ["Деплой на прод", "Обучение команды", "Поддержка 24/7"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "#f97316",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0f1520] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00ff88]/5 to-transparent pointer-events-none" />
      <div className="orb orb-cyan w-[500px] h-[500px] -bottom-64 -left-64 opacity-15" />
      
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
            className="inline-block px-4 py-2 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium mb-6"
          >
            Процесс работы
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Как мы <span className="gradient-text">работаем</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            Прозрачный процесс разработки с регулярной обратной связью на каждом этапе.
            Вы всегда знаете, что происходит с вашим проектом.
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block relative mb-16">
          {/* Connection Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-[#1f2937] rounded-full">
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${steps[activeStep].color}, transparent)` }}
              initial={{ width: "0%" }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveStep(index)}
                className="relative cursor-pointer group"
              >
                {/* Step Circle */}
                <div className="flex justify-center mb-8">
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      index <= activeStep
                        ? "bg-[#0a0e17]"
                        : "bg-[#1f2937]"
                    }`}
                    style={{
                      boxShadow: index <= activeStep ? `0 0 30px ${step.color}40` : "none",
                      border: `2px solid ${index <= activeStep ? step.color : "#1f2937"}`,
                    }}
                  >
                    <span
                      className="transition-colors duration-300"
                      style={{ color: index <= activeStep ? step.color : "#6b7280" }}
                    >
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`p-6 rounded-2xl transition-all duration-500 ${
                    index === activeStep
                      ? "bg-[#0a0e17] border-2"
                      : "bg-[#0a0e17]/50 border border-[#1f2937] group-hover:border-[#1f2937]/80"
                  }`}
                  style={{
                    borderColor: index === activeStep ? step.color : undefined,
                    boxShadow: index === activeStep ? `0 0 40px ${step.color}20` : "none",
                  }}
                >
                  {/* Number */}
                  <span
                    className="text-3xl font-bold transition-colors duration-300"
                    style={{ color: index <= activeStep ? `${step.color}40` : "#1f2937" }}
                  >
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mt-2 mb-2 transition-colors duration-300"
                    style={{ color: index === activeStep ? step.color : "white" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: index === activeStep ? 1 : 0, height: index === activeStep ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span style={{ color: step.color }}>▹</span>
                        <span className="text-white/70">{detail}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveStep(index)}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                index === activeStep
                  ? "bg-[#0a0e17]"
                  : "bg-[#0a0e17]/50 border border-[#1f2937]"
              }`}
              style={{
                borderColor: index === activeStep ? step.color : undefined,
                borderWidth: index === activeStep ? 2 : 1,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${step.color}20`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl font-bold" style={{ color: `${step.color}60` }}>
                      {step.number}
                    </span>
                    <h3 className="font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm">{step.description}</p>
                  
                  {index === activeStep && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 space-y-2"
                    >
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span style={{ color: step.color }}>▹</span>
                          <span className="text-white/70">{detail}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[#0a0e17] border border-[#1f2937]">
            <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <p className="text-white/60 text-sm">
              Среднее время реализации проекта: <span className="text-[#00ff88] font-medium">2-4 месяца</span> в зависимости от сложности
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
