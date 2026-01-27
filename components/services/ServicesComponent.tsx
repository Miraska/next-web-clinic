"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  features: string[];
  price: string;
  timeline: string;
  color: string;
}

export default function ServicesComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services: Service[] = [
    {
      id: "web-development",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      color: "blue",
    },
    {
      id: "crm-erp",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      color: "emerald",
    },
    {
      id: "automation",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      color: "violet",
    },
    {
      id: "api-integrations",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      color: "orange",
    },
    {
      id: "support",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      color: "rose",
    },
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", light: "bg-blue-100" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", light: "bg-emerald-100" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", light: "bg-violet-100" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", light: "bg-orange-100" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", light: "bg-rose-100" },
  };

  return (
    <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Услуги
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
            Наши <span className="text-blue-600">услуги</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Полный спектр услуг по разработке и автоматизации. 
            Нажмите на карточку, чтобы узнать подробнее.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="block p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-200 h-full"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className={`w-4 h-4 ${colors.text} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price & Timeline */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-blue-600 font-semibold">{service.price}</span>
                    <span className="text-slate-400 text-sm">{service.timeline}</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto p-6 lg:p-8 rounded-2xl bg-blue-50 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Не нашли нужную услугу?
            </h3>
            <p className="text-slate-600 mb-6">
              Расскажите о вашей задаче — мы найдём оптимальное решение.
              Бесплатная консультация и оценка проекта.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm"
              data-cta="services-contact"
            >
              Обсудить проект
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
