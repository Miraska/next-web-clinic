"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  features: string[];
  price: string;
  timeline: string;
  gradient: string;
  color: string;
}

export default function ServicesComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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

  const services: Service[] = [
    {
      id: "web-development",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Веб-разработка",
      shortDesc: "Корпоративные сайты, веб-приложения и платформы с современным дизайном и высокой производительностью.",
      features: [
        "Корпоративные сайты",
        "Лендинги и промо-страницы",
        "Интернет-магазины",
        "SPA/PWA приложения",
      ],
      price: "от 150 000 ₽",
      timeline: "4-8 недель",
      gradient: "from-[#00ff88] to-[#00d4ff]",
      color: "#00ff88",
    },
    {
      id: "crm-erp",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "CRM/ERP системы",
      shortDesc: "Кастомные системы управления бизнесом для автоматизации продаж, учёта и аналитики.",
      features: [
        "Управление клиентами",
        "Воронки продаж",
        "Складской учёт",
        "Аналитика и отчёты",
      ],
      price: "от 400 000 ₽",
      timeline: "2-4 месяца",
      gradient: "from-[#00d4ff] to-[#8b5cf6]",
      color: "#00d4ff",
    },
    {
      id: "automation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Автоматизация бизнеса",
      shortDesc: "Оптимизация рутинных процессов, чат-боты, автоматические отчёты и уведомления.",
      features: [
        "Интеграции систем",
        "Телеграм/WhatsApp боты",
        "Автоматические отчёты",
        "Триггерные сценарии",
      ],
      price: "от 100 000 ₽",
      timeline: "2-6 недель",
      gradient: "from-[#8b5cf6] to-[#ec4899]",
      color: "#8b5cf6",
    },
    {
      id: "api-integrations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "API и интеграции",
      shortDesc: "Связываем системы в единую экосистему: 1C, платёжные системы, маркетплейсы.",
      features: [
        "REST/GraphQL API",
        "Интеграция с 1C",
        "Платёжные системы",
        "Маркетплейсы",
      ],
      price: "от 80 000 ₽",
      timeline: "2-4 недели",
      gradient: "from-[#ec4899] to-[#f97316]",
      color: "#ec4899",
    },
    {
      id: "support",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Поддержка и развитие",
      shortDesc: "Техническое сопровождение: мониторинг, обновления, развитие функционала.",
      features: [
        "Мониторинг 24/7",
        "Резервное копирование",
        "Обновления безопасности",
        "Новый функционал",
      ],
      price: "от 30 000 ₽/мес",
      timeline: "Постоянно",
      gradient: "from-[#f97316] to-[#00ff88]",
      color: "#f97316",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section ref={sectionRef} className="pt-32 pb-24 lg:pb-32 bg-[#0a0e17] min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern-animated opacity-20" />
      <div className="orb orb-green w-[500px] h-[500px] -top-64 -right-64 opacity-20" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 -left-48 opacity-15" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-medium mb-6"
          >
            Услуги
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Наши <span className="text-[#00ff88] text-glow-green">услуги</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            Полный спектр услуг по разработке и автоматизации. 
            Нажмите на карточку, чтобы узнать подробнее.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${service.color}20, transparent)`,
                  opacity: hoveredService === service.id ? 0.3 : 0
                }}
              />

              <Link
                href={`/services/${service.id}`}
                className="block relative p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937] hover:border-[#00ff88]/30 transition-all duration-500 card-hover h-full overflow-hidden"
              >
                {/* Animated top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 pointer-events-none" />

                {/* Icon */}
                <div 
                  className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  {service.icon}
                  {/* Icon glow */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                    style={{ backgroundColor: service.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-white/60 mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-sm text-white/70 group-hover:text-white/80 transition-colors"
                    >
                      <svg className="w-4 h-4 text-[#00ff88] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price & Timeline */}
                <div className="flex items-center justify-between pt-4 border-t border-[#1f2937] group-hover:border-[#00ff88]/20 transition-colors">
                  <span className="text-[#00ff88] font-semibold">{service.price}</span>
                  <span className="text-white/40 text-sm">{service.timeline}</span>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-6 h-6 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/20 gradient-border">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Не нашли нужную услугу?
            </h3>
            <p className="text-white/60 mb-8">
              Расскажите о вашей задаче — мы найдём оптимальное решение.
              Бесплатная консультация и оценка проекта.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-full hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] group"
            >
              Обсудить проект
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
