"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  problem: string;
  solution: string;
  result: string;
  features: string[];
  technologies: string[];
  price: string;
  timeline: string;
}

export default function ServicesComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
      shortDesc: "Корпоративные сайты, веб-приложения и платформы",
      problem: "Устаревший сайт не приносит клиентов, медленно загружается и плохо выглядит на мобильных устройствах.",
      solution: "Создаём современные, быстрые сайты с адаптивным дизайном и оптимизацией для поисковых систем.",
      result: "Увеличение конверсии, профессиональный имидж компании, рост органического трафика.",
      features: [
        "Корпоративные сайты",
        "Лендинги и промо-страницы",
        "Интернет-магазины",
        "Веб-порталы",
        "SPA/PWA приложения",
        "Редизайн и миграция",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      price: "от 150 000 ₽",
      timeline: "4-8 недель",
    },
    {
      id: "crm-erp",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "CRM/ERP системы",
      shortDesc: "Кастомные системы управления бизнесом",
      problem: "Данные о клиентах разбросаны по разным таблицам, менеджеры забывают о задачах, нет прозрачности в процессах.",
      solution: "Разрабатываем кастомные системы управления под специфику вашего бизнеса с нужными именно вам функциями.",
      result: "Централизованная база данных, автоматические напоминания, полная картина бизнеса в реальном времени.",
      features: [
        "Управление клиентами",
        "Воронки продаж",
        "Складской учёт",
        "Документооборот",
        "Аналитика и отчёты",
        "Мобильный доступ",
      ],
      technologies: ["Node.js", "PostgreSQL", "React", "Redis"],
      price: "от 400 000 ₽",
      timeline: "2-4 месяца",
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
      shortDesc: "Оптимизация рутинных процессов и интеграции",
      problem: "Сотрудники тратят часы на рутинные задачи: ручной перенос данных, формирование отчётов, отправку уведомлений.",
      solution: "Автоматизируем повторяющиеся процессы, настраиваем интеграции между системами, создаём ботов для типовых задач.",
      result: "Экономия рабочего времени, снижение ошибок, ускорение бизнес-процессов.",
      features: [
        "Интеграции систем",
        "Телеграм/WhatsApp боты",
        "Автоматические отчёты",
        "Email-рассылки",
        "Синхронизация данных",
        "Триггерные сценарии",
      ],
      technologies: ["Python", "Node.js", "API", "Webhooks"],
      price: "от 100 000 ₽",
      timeline: "2-6 недель",
    },
    {
      id: "api-integrations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "API и интеграции",
      shortDesc: "Связываем системы в единую экосистему",
      problem: "Разные системы не связаны между собой: данные приходится вводить вручную несколько раз, информация расходится.",
      solution: "Разрабатываем API для связи систем, настраиваем интеграции с платёжными системами, CRM, 1C, маркетплейсами.",
      result: "Единый поток данных, исключение ручного ввода, консистентная информация во всех системах.",
      features: [
        "REST/GraphQL API",
        "Интеграция с 1C",
        "Платёжные системы",
        "Маркетплейсы",
        "Службы доставки",
        "Сторонние сервисы",
      ],
      technologies: ["REST", "GraphQL", "WebSocket", "OAuth"],
      price: "от 80 000 ₽",
      timeline: "2-4 недели",
    },
    {
      id: "support",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Поддержка и развитие",
      shortDesc: "Техническое сопровождение и развитие продукта",
      problem: "Система работает, но требует постоянного внимания: обновления, мониторинг, исправление ошибок, новые фичи.",
      solution: "Берём на себя техническую поддержку: мониторинг, резервное копирование, обновления и развитие функционала.",
      result: "Стабильная работа системы, быстрое решение проблем, планомерное развитие продукта.",
      features: [
        "Мониторинг 24/7",
        "Резервное копирование",
        "Обновления безопасности",
        "Исправление багов",
        "Новый функционал",
        "Консультации",
      ],
      technologies: ["Docker", "AWS", "CI/CD", "Monitoring"],
      price: "от 30 000 ₽/мес",
      timeline: "Постоянно",
    },
  ];

  const selectedServiceData = services.find((s) => s.id === selectedService);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                onClick={() => setSelectedService(service.id)}
                className={`group cursor-pointer p-8 rounded-2xl border transition-all duration-500 h-full card-hover ${
                  selectedService === service.id
                    ? "bg-[#00ff88]/10 border-[#00ff88] glow-green"
                    : "bg-[#0f1520] border-[#1f2937] hover:border-[#00ff88]/30"
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  selectedService === service.id
                    ? "bg-[#00ff88] text-[#0a0e17]"
                    : "bg-[#00ff88]/10 text-[#00ff88] group-hover:bg-[#00ff88]/20"
                }`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-white/60 mb-6">
                  {service.shortDesc}
                </p>

                {/* Price & Timeline */}
                <div className="flex items-center justify-between pt-4 border-t border-[#1f2937]">
                  <span className="text-[#00ff88] font-semibold">{service.price}</span>
                  <span className="text-white/40 text-sm">{service.timeline}</span>
                </div>

                {/* Expand indicator */}
                <div className="mt-4 flex items-center text-sm text-white/40 group-hover:text-[#00ff88] transition-colors">
                  <span>Подробнее</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedServiceData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0f1520] border border-[#1f2937] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88]">
                        {selectedServiceData.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-white">
                          {selectedServiceData.title}
                        </h2>
                        <p className="text-white/60">{selectedServiceData.shortDesc}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center text-white/60 hover:bg-[#00ff88] hover:text-[#0a0e17] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Problem - Solution - Result */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 rounded-xl bg-[#ff6b6b]/10 border border-[#ff6b6b]/20">
                      <span className="text-xs uppercase tracking-wider text-[#ff6b6b] font-medium">Проблема</span>
                      <p className="text-white/80 mt-2">{selectedServiceData.problem}</p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                      <span className="text-xs uppercase tracking-wider text-[#00d4ff] font-medium">Решение</span>
                      <p className="text-white/80 mt-2">{selectedServiceData.solution}</p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20">
                      <span className="text-xs uppercase tracking-wider text-[#00ff88] font-medium">Результат</span>
                      <p className="text-white/80 mt-2">{selectedServiceData.result}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Что входит</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedServiceData.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e17] border border-[#1f2937]">
                          <span className="text-[#00ff88]">✓</span>
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Технологии</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedServiceData.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1f2937]">
                    <div>
                      <span className="text-white/60">Стоимость:</span>
                      <span className="ml-2 text-2xl font-bold text-[#00ff88]">{selectedServiceData.price}</span>
                      <span className="ml-4 text-white/40">• {selectedServiceData.timeline}</span>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-full hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105"
                    >
                      Заказать услугу
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
