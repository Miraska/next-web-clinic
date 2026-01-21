"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ServiceProps {
  service: {
    id: string;
    title: string;
    shortDesc: string;
    problem: string;
    solution: string;
    result: string;
    features: string[];
    technologies: string[];
    price: string;
    timeline: string;
    gradient: string;
    color: string;
  };
}

const icons: Record<string, React.ReactNode> = {
  "web-development": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  "crm-erp": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  "automation": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "api-integrations": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  "support": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

const processSteps = [
  { title: "Бриф и анализ", description: "Собираем требования, анализируем задачу" },
  { title: "Проектирование", description: "Готовим архитектуру и прототипы" },
  { title: "Разработка", description: "Пишем код, тестируем функционал" },
  { title: "Запуск", description: "Деплой, обучение, поддержка" },
];

export default function ServiceDetailComponent({ service }: ServiceProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const icon = icons[service.id];

  return (
    <section ref={sectionRef} className="pt-32 pb-24 lg:pb-32 bg-[#0a0e17] min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div 
        className="orb w-[600px] h-[600px] -top-64 -right-64 opacity-20"
        style={{ background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)` }}
      />
      <div className="orb orb-purple w-[400px] h-[400px] bottom-0 -left-48 opacity-15" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/services"
            className="inline-flex items-center text-white/60 hover:text-[#00ff88] transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Все услуги
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-start gap-6 mb-6">
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${service.color}15`, color: service.color }}
            >
              {icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {service.title}
              </h1>
              <p className="text-lg lg:text-xl text-white/60">
                {service.shortDesc}
              </p>
            </div>
          </div>

          {/* Price & Timeline badges */}
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20">
              <svg className="w-5 h-5 text-[#00ff88] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#00ff88] font-semibold">{service.price}</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20">
              <svg className="w-5 h-5 text-[#00d4ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#00d4ff] font-semibold">{service.timeline}</span>
            </div>
          </div>
        </motion.div>

        {/* Problem - Solution - Result Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="p-6 lg:p-8 rounded-2xl bg-[#ff6b6b]/10 border border-[#ff6b6b]/20">
            <div className="w-10 h-10 rounded-lg bg-[#ff6b6b]/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#ff6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#ff6b6b] font-medium">Проблема</span>
            <p className="text-white/80 mt-3 leading-relaxed">{service.problem}</p>
          </div>

          <div className="p-6 lg:p-8 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20">
            <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#00d4ff] font-medium">Решение</span>
            <p className="text-white/80 mt-3 leading-relaxed">{service.solution}</p>
          </div>

          <div className="p-6 lg:p-8 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/20">
            <div className="w-10 h-10 rounded-lg bg-[#00ff88]/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#00ff88] font-medium">Результат</span>
            <p className="text-white/80 mt-3 leading-relaxed">{service.result}</p>
          </div>
        </motion.div>

        {/* Features & Technologies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 lg:p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937]"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 text-[#00ff88] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Что входит
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e17] border border-[#1f2937] hover:border-[#00ff88]/30 transition-colors"
                >
                  <span className="text-[#00ff88]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 lg:p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937]"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 text-[#00d4ff] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Технологии
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] font-mono text-sm hover:bg-[#00ff88]/20 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Process steps */}
            <h4 className="text-lg font-semibold text-white mt-8 mb-4">Этапы работы</h4>
            <div className="space-y-3">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: `${service.color}20`, color: service.color }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-white font-medium">{step.title}</div>
                    <div className="text-white/50 text-sm">{step.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div 
            className="max-w-2xl mx-auto p-8 lg:p-12 rounded-2xl border"
            style={{ 
              background: `linear-gradient(135deg, ${service.color}10, transparent)`,
              borderColor: `${service.color}30`
            }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Готовы начать проект?
            </h3>
            <p className="text-white/60 mb-8">
              Расскажите о вашей задаче — мы подготовим предложение в течение 2 рабочих дней.
              Первая консультация бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-full hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] group"
              >
                Заказать услугу
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300"
              >
                Смотреть проекты
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
