"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export default function HomeWhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  // Services with problem-solution format
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      problem: "Нет сайта или старый сайт не приносит клиентов",
      solution: "Сайты и лендинги",
      description: "Сделаем современный сайт, который будет работать на вас: привлекать клиентов, показывать вашу экспертизу и удобно работать на телефонах.",
      examples: ["Сайт-визитка компании", "Лендинг для услуги", "Корпоративный портал"],
      price: "от 50 000 ₽",
      duration: "3-6 недель",
      color: "blue",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      problem: "Хотите продавать онлайн, но не знаете с чего начать",
      solution: "Интернет-магазины",
      description: "Создадим удобный магазин с каталогом, корзиной, оплатой и доставкой. Всё будет понятно и для вас, и для ваших покупателей.",
      examples: ["Каталог с корзиной", "Интеграция с оплатой", "Личный кабинет покупателя"],
      price: "от 150 000 ₽",
      duration: "2-3 месяца",
      color: "emerald",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      problem: "Хаос в заявках, Excel-таблицы, менеджеры теряют клиентов",
      solution: "CRM и личные кабинеты",
      description: "Соберём все заявки в одном месте, настроим напоминания и отчёты. Вы будете видеть, кто из менеджеров как работает.",
      examples: ["Учёт клиентов и сделок", "Автоматические напоминания", "Отчёты для руководства"],
      price: "от 300 000 ₽",
      duration: "3-4 месяца",
      color: "violet",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      problem: "Много рутины: отчёты вручную, данные разбросаны",
      solution: "Автоматизация",
      description: "Настроим автоматические отчёты, свяжем ваши системы между собой, сделаем бота для клиентов.",
      examples: ["Интеграции между сервисами", "Автоматические отчёты", "Telegram/WhatsApp боты"],
      price: "от 80 000 ₽",
      duration: "2-6 недель",
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-700",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      badge: "bg-emerald-100 text-emerald-700",
    },
    violet: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-200",
      badge: "bg-violet-100 text-violet-700",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      badge: "bg-orange-100 text-orange-700",
    },
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Чем мы помогаем
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Решаем конкретные <span className="text-blue-600">задачи бизнеса</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Расскажите о вашей ситуации — поможем найти решение. 
            Без лишних технических терминов, понятно и по делу.
          </p>
        </motion.div>

        {/* Tabs navigation for mobile */}
        <div className="flex lg:hidden overflow-x-auto gap-2 mb-6 pb-2 -mx-2 px-2 scrollbar-hide">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === index
                  ? `${colorClasses[service.color as keyof typeof colorClasses].badge}`
                  : "bg-white border border-slate-200 text-slate-600"
              }`}
            >
              {service.solution}
            </button>
          ))}
        </div>

        {/* Mobile view - single card */}
        <div className="lg:hidden">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
          >
            {/* Problem */}
            <div className="mb-4">
              <span className="text-sm text-slate-400 font-medium">Проблема:</span>
              <p className="text-slate-700 font-medium mt-1">{services[activeTab].problem}</p>
            </div>

            {/* Solution */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl ${colorClasses[services[activeTab].color as keyof typeof colorClasses].bg} ${colorClasses[services[activeTab].color as keyof typeof colorClasses].text} flex items-center justify-center`}>
                {services[activeTab].icon}
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">Решение:</span>
                <h3 className={`text-xl font-bold ${colorClasses[services[activeTab].color as keyof typeof colorClasses].text}`}>
                  {services[activeTab].solution}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-5">
              {services[activeTab].description}
            </p>

            {/* Examples */}
            <div className="flex flex-wrap gap-2 mb-5">
              {services[activeTab].examples.map((example, i) => (
                <span key={i} className="px-3 py-1 text-xs text-slate-600 bg-slate-100 rounded-full">
                  {example}
                </span>
              ))}
            </div>

            {/* Price & Duration */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <span className="text-blue-600 font-bold">{services[activeTab].price}</span>
                <span className="text-slate-400 text-sm ml-2">• {services[activeTab].duration}</span>
              </div>
              <Link href="/services" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                Подробнее →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 h-full shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
                {/* Problem badge */}
                <div className="mb-4">
                  <span className="text-sm text-slate-400 font-medium">Проблема:</span>
                  <p className="text-slate-700 font-medium mt-1">{service.problem}</p>
                </div>

                {/* Solution */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colorClasses[service.color as keyof typeof colorClasses].bg} ${colorClasses[service.color as keyof typeof colorClasses].text} flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Решение:</span>
                    <h3 className={`text-xl font-bold ${colorClasses[service.color as keyof typeof colorClasses].text}`}>
                      {service.solution}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Examples */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.examples.map((example, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs text-slate-600 bg-slate-100 rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>

                {/* Price & Duration */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 font-bold">{service.price}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                  </div>
                  <Link
                    href="/services"
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1"
                  >
                    Подробнее
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-4">Не нашли свою задачу в списке?</p>
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Смотреть все услуги
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
