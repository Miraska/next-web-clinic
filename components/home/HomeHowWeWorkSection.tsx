"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function HomeHowWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

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

  const steps = [
    {
      number: "01",
      title: "Discovery",
      subtitle: "Погружение в задачу",
      description: "Изучаем бизнес-контекст, существующие процессы и технические ограничения. Формируем требования и определяем scope проекта.",
      deliverables: ["Техническое задание", "Оценка сроков", "Архитектурное решение"],
      duration: "1-2 недели",
      color: "#00ff88",
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Проектирование",
      description: "Детальная проработка архитектуры системы, структуры данных и пользовательских сценариев. Прототипирование ключевых экранов.",
      deliverables: ["Архитектура системы", "Прототипы UI", "API-спецификация"],
      duration: "2-3 недели",
      color: "#00d4ff",
    },
    {
      number: "03",
      title: "Development",
      subtitle: "Разработка",
      description: "Итеративная разработка по Scrum. Двухнедельные спринты с демонстрациями. Непрерывная интеграция и автоматическое тестирование.",
      deliverables: ["Работающий продукт", "Документация", "Тесты"],
      duration: "6-12 недель",
      color: "#8b5cf6",
    },
    {
      number: "04",
      title: "Launch",
      subtitle: "Запуск и поддержка",
      description: "Развёртывание на production, миграция данных, обучение пользователей. Гарантийная поддержка и мониторинг.",
      deliverables: ["Production deployment", "Документация", "Поддержка"],
      duration: "1-2 недели",
      color: "#ec4899",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0f1520] relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      
      <motion.div style={{ y: y1 }} className="orb orb-cyan w-[500px] h-[500px] -bottom-64 -left-64 opacity-15" />
      <motion.div style={{ y: y2 }} className="orb orb-purple w-[400px] h-[400px] -top-32 -right-32 opacity-10" />
      
      <div ref={containerRef} className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium mb-6">
            Процесс
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            От идеи до продакшена
          </h2>
          <p className="text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            Прозрачный процесс с чёткими этапами и deliverables. 
            Вы контролируете прогресс на каждом шаге.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Steps list */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`relative p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeStep === index
                    ? "bg-[#0a0e17]"
                    : "bg-transparent hover:bg-[#0a0e17]/50"
                }`}
                style={{
                  border: activeStep === index ? `2px solid ${step.color}` : "2px solid transparent",
                }}
              >
                {/* Active indicator */}
                {activeStep === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-2 w-0.5 rounded-full h-[95%]"
                    style={{ backgroundColor: step.color}}
                  />
                )}
                
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-mono text-lg font-bold shrink-0"
                    style={{ 
                      backgroundColor: activeStep === index ? `${step.color}20` : '#1f2937',
                      color: activeStep === index ? step.color : '#6b7280',
                    }}
                  >
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 
                        className="text-xl font-bold transition-colors"
                        style={{ color: activeStep === index ? step.color : 'white' }}
                      >
                        {step.title}
                      </h3>
                      <span className="text-white/40 text-sm">{step.subtitle}</span>
                    </div>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: activeStep === index ? "auto" : 0,
                        opacity: activeStep === index ? 1 : 0
                      }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pt-2">
                        <div className="text-xs uppercase tracking-wider text-white/40 mb-2">
                          Deliverables
                        </div>
                        {step.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <div 
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: step.color }}
                            />
                            <span className="text-white/70">{item}</span>
                          </div>
                        ))}
                        
                        <div className="flex items-center gap-2 pt-2 mt-2 border-t border-[#1f2937]">
                          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-white/50 text-sm">{step.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:sticky lg:top-32"
          >
            {/* Main image */}
            <div className="relative">
              <ImagePlaceholder 
                src=""
                alt={steps[activeStep].title}
                aspectRatio="square"
                overlayColor={steps[activeStep].color}
                className="rounded-3xl"
              />
              
              {/* Floating elements */}
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-4 -right-4 p-4 rounded-2xl bg-[#0a0e17]/90 backdrop-blur-xl border border-[#1f2937]"
              >
                <div className="text-4xl font-mono font-bold" style={{ color: steps[activeStep].color }}>
                  {steps[activeStep].number}
                </div>
                <div className="text-sm text-white/60">{steps[activeStep].title}</div>
              </motion.div>
              
              <motion.div
                style={{ y: y1 }}
                className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-[#0f1520]/90 backdrop-blur-xl border border-[#1f2937]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00ff88]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Прозрачный процесс</div>
                    <div className="text-white/50 text-sm">Еженедельные отчёты</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Progress indicator */}
            <div className="mt-8 flex items-center gap-2">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="flex-1 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index <= activeStep ? step.color : '#1f2937',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: "Средний срок проекта", value: "3 мес", icon: "📅" },
            { label: "Спринты", value: "2 нед", icon: "🔄" },
            { label: "Тестовое покрытие", value: ">80%", icon: "✅" },
            { label: "Time to production", value: "< 24ч", icon: "🚀" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-[#0a0e17]/50 border border-[#1f2937] text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
