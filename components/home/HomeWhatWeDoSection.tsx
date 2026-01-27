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
      problem: "Нет сайта или старый сайт не работает на вас",
      solution: "Сайты и лендинги",
      description: "Создадим современный сайт, который будет привлекать клиентов, показывать вашу экспертизу и удобно работать на всех устройствах. Без воды — только нужный функционал.",
      tasks: [
        "Сайт-визитка для компании или специалиста",
        "Лендинг для продукта или услуги",
        "Корпоративный сайт с блогом",
        "Многостраничный информационный портал",
      ],
      includes: ["Адаптивный дизайн", "SEO-основа", "Админ-панель", "Формы заявок", "Аналитика"],
      price: "от 50 000 ₽",
      duration: "2-6 недель",
      color: "blue",
      slug: "web-development",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      problem: "Хотите продавать онлайн, но не знаете с чего начать",
      solution: "Интернет-магазины",
      description: "Создадим удобный интернет-магазин с каталогом, корзиной, оплатой и доставкой. Всё будет понятно и для вас, и для ваших покупателей. Интегрируем с вашей учётной системой.",
      tasks: [
        "Магазин с каталогом и корзиной",
        "Интеграция с платёжными системами",
        "Личный кабинет покупателя",
        "Синхронизация с 1С и складом",
      ],
      includes: ["Каталог товаров", "Онлайн-оплата", "Доставка", "Личный кабинет", "Управление заказами"],
      price: "от 250 000 ₽",
      duration: "6-12 недель",
      color: "emerald",
      slug: "ecommerce",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      problem: "Нужен сложный сервис с нестандартным функционалом",
      solution: "Веб-приложения",
      description: "Разработаем веб-приложение под вашу бизнес-задачу: личные кабинеты, сервисы бронирования, калькуляторы, SaaS-продукты. Современные технологии и продуманный UX.",
      tasks: [
        "Личные кабинеты для клиентов",
        "Системы бронирования и записи",
        "Онлайн-калькуляторы и конфигураторы",
        "SaaS-продукты и стартапы",
      ],
      includes: ["Авторизация", "Личный кабинет", "API", "Уведомления", "Отчёты"],
      price: "от 300 000 ₽",
      duration: "2-4 месяца",
      color: "violet",
      slug: "web-apps",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      problem: "Хаос в заявках, Excel-таблицы, менеджеры теряют клиентов",
      solution: "CRM/ERP системы",
      description: "Создадим систему под ваши процессы: учёт клиентов, сделок, задач. Соберём все данные в одном месте, настроим отчёты и напоминания. Никаких лишних функций.",
      tasks: [
        "Управление клиентами и сделками",
        "Воронки продаж и аналитика",
        "Складской учёт и логистика",
        "Управление проектами и задачами",
      ],
      includes: ["База клиентов", "Воронка продаж", "Задачи", "Отчёты", "Интеграции"],
      price: "от 400 000 ₽",
      duration: "3-5 месяцев",
      color: "orange",
      slug: "crm-erp",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      problem: "Менеджеры тратят время на однотипные вопросы клиентов",
      solution: "Чат-боты",
      description: "Создадим бота для сайта, Telegram или WhatsApp. Автоматизируем ответы на частые вопросы, приём заявок, запись на услуги. Интегрируем с вашей CRM.",
      tasks: [
        "Бот для ответов на частые вопросы",
        "Приём заявок и заказов",
        "Запись на услуги и бронирование",
        "Уведомления и рассылки",
      ],
      includes: ["Сценарии диалогов", "Интеграция с CRM", "Уведомления", "Аналитика", "Поддержка"],
      price: "от 80 000 ₽",
      duration: "2-4 недели",
      color: "cyan",
      slug: "chatbots",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      problem: "Системы не связаны, данные дублируются, много ручной работы",
      solution: "API и интеграции",
      description: "Свяжем ваши системы в единую экосистему: 1С, CRM, сайт, маркетплейсы, платёжные системы. Автоматизируем обмен данными и уберём ручную работу.",
      tasks: [
        "Интеграция с 1С и МойСклад",
        "Подключение платёжных систем",
        "Синхронизация с маркетплейсами",
        "Автоматические отчёты и уведомления",
      ],
      includes: ["API разработка", "Документация", "Тестирование", "Мониторинг", "Поддержка"],
      price: "от 80 000 ₽",
      duration: "2-6 недель",
      color: "rose",
      slug: "api-integrations",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; badge: string; light: string }> = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-700",
      light: "bg-blue-500/10",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      badge: "bg-emerald-100 text-emerald-700",
      light: "bg-emerald-500/10",
    },
    violet: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-200",
      badge: "bg-violet-100 text-violet-700",
      light: "bg-violet-500/10",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      badge: "bg-orange-100 text-orange-700",
      light: "bg-orange-500/10",
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      border: "border-cyan-200",
      badge: "bg-cyan-100 text-cyan-700",
      light: "bg-cyan-500/10",
    },
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      border: "border-rose-200",
      badge: "bg-rose-100 text-rose-700",
      light: "bg-rose-500/10",
    },
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Что мы делаем
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Решаем конкретные <span className="text-blue-600">задачи бизнеса</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            У вас проблема — мы предлагаем решение. 
            Без лишних технических терминов, понятно и по делу.
          </p>
        </motion.div>

        {/* Tabs navigation for mobile */}
        <div className="flex lg:hidden overflow-x-auto gap-2 mb-6 pb-2 -mx-2 px-2 scrollbar-hide">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === index
                  ? colorClasses[service.color].badge
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
            <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Проблема:</span>
              <p className="text-slate-700 font-medium mt-1">{services[activeTab].problem}</p>
            </div>

            {/* Solution */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl ${colorClasses[services[activeTab].color].bg} ${colorClasses[services[activeTab].color].text} flex items-center justify-center`}>
                {services[activeTab].icon}
              </div>
              <div>
                <span className="text-xs text-emerald-600 font-medium uppercase tracking-wider">Решение:</span>
                <h3 className={`text-xl font-bold ${colorClasses[services[activeTab].color].text}`}>
                  {services[activeTab].solution}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-5">
              {services[activeTab].description}
            </p>

            {/* Tasks */}
            <div className="mb-5">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Какие задачи решает:</h4>
              <div className="space-y-2">
                {services[activeTab].tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className={`w-4 h-4 ${colorClasses[services[activeTab].color].text} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div className="flex flex-wrap gap-2 mb-5">
              {services[activeTab].includes.map((item, i) => (
                <span key={i} className="px-3 py-1 text-xs text-slate-600 bg-slate-100 rounded-full">
                  {item}
                </span>
              ))}
            </div>

            {/* Price & Duration */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <span className="text-blue-600 font-bold text-lg">{services[activeTab].price}</span>
                <span className="text-slate-400 text-sm ml-2">• {services[activeTab].duration}</span>
              </div>
              <Link 
                href={`/services/${services[activeTab].slug}`}
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                Подробнее
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col">
                {/* Problem badge */}
                <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Проблема:</span>
                  <p className="text-slate-700 font-medium mt-1 text-sm">{service.problem}</p>
                </div>

                {/* Solution */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colorClasses[service.color].bg} ${colorClasses[service.color].text} flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-xs text-emerald-600 font-medium uppercase tracking-wider">Решение:</span>
                    <h3 className={`text-lg font-bold ${colorClasses[service.color].text}`}>
                      {service.solution}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Includes */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.includes.slice(0, 4).map((item, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-md ${colorClasses[service.color].light} ${colorClasses[service.color].text}`}
                    >
                      {item}
                    </span>
                  ))}
                  {service.includes.length > 4 && (
                    <span className="px-2 py-1 text-xs text-slate-400">
                      +{service.includes.length - 4}
                    </span>
                  )}
                </div>

                {/* Price & Duration */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">{service.price}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400 text-sm">{service.duration}</span>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1 group-hover:text-blue-600"
                  >
                    Подробнее
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <p className="text-slate-500">Не нашли свою задачу?</p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors bg-blue-50 px-5 py-2.5 rounded-xl hover:bg-blue-100"
            >
              Расскажите о ней — поможем
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
