"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  whoIsFor: string[];
  tasks: string[];
  includes: string[];
  price: string;
  timeline: string;
  color: string;
}

export default function ServicesComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      id: "web-development",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Сайты и лендинги",
      shortDesc: "Современные сайты для бизнеса: лендинги, сайты-визитки, корпоративные порталы с удобной админ-панелью.",
      whoIsFor: [
        "Малому и среднему бизнесу",
        "Экспертам и специалистам",
        "Стартапам и новым продуктам",
      ],
      tasks: [
        "Привлечение новых клиентов",
        "Презентация услуг и продуктов",
        "Повышение доверия к компании",
        "Сбор заявок и лидов",
      ],
      includes: [
        "Адаптивный дизайн",
        "SEO-оптимизация",
        "Админ-панель",
        "Формы обратной связи",
        "Аналитика",
        "SSL-сертификат",
      ],
      price: "от 50 000 ₽",
      timeline: "2-6 недель",
      color: "blue",
    },
    {
      id: "ecommerce",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Интернет-магазины",
      shortDesc: "Полноценные онлайн-магазины с каталогом, корзиной, оплатой и доставкой. Интеграция с 1С и CRM.",
      whoIsFor: [
        "Розничным продавцам",
        "Производителям с прямыми продажами",
        "B2B-компаниям",
      ],
      tasks: [
        "Продажи онлайн 24/7",
        "Автоматизация обработки заказов",
        "Синхронизация остатков",
        "Масштабирование бизнеса",
      ],
      includes: [
        "Каталог товаров",
        "Корзина и оформление",
        "Онлайн-оплата",
        "Интеграция доставки",
        "Личный кабинет",
        "Управление заказами",
      ],
      price: "от 250 000 ₽",
      timeline: "2-3 месяца",
      color: "emerald",
    },
    {
      id: "web-apps",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Веб-приложения",
      shortDesc: "Сложные веб-сервисы: личные кабинеты, системы бронирования, калькуляторы, SaaS-продукты.",
      whoIsFor: [
        "Сервисным компаниям",
        "Стартапам",
        "Компаниям с уникальными процессами",
      ],
      tasks: [
        "Создание онлайн-сервиса",
        "Автоматизация сложных процессов",
        "Личные кабинеты для клиентов",
        "Запуск нового продукта",
      ],
      includes: [
        "Авторизация и роли",
        "Личный кабинет",
        "API интеграции",
        "Уведомления",
        "Отчёты и аналитика",
        "Документация",
      ],
      price: "от 300 000 ₽",
      timeline: "2-4 месяца",
      color: "violet",
    },
    {
      id: "crm-erp",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "CRM/ERP системы",
      shortDesc: "Кастомные системы управления бизнесом под ваши процессы: клиенты, сделки, склад, аналитика.",
      whoIsFor: [
        "Растущим компаниям",
        "Бизнесу с нестандартными процессами",
        "Тем, кому не подходят готовые решения",
      ],
      tasks: [
        "Систематизация работы с клиентами",
        "Контроль продаж и задач",
        "Учёт склада и логистики",
        "Прозрачная аналитика",
      ],
      includes: [
        "База клиентов",
        "Воронка продаж",
        "Управление задачами",
        "Отчёты и дашборды",
        "Интеграции",
        "Обучение команды",
      ],
      price: "от 400 000 ₽",
      timeline: "3-5 месяцев",
      color: "orange",
    },
    {
      id: "chatbots",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Чат-боты",
      shortDesc: "Боты для Telegram, WhatsApp и сайта. Автоматизация общения, приём заявок, запись на услуги.",
      whoIsFor: [
        "Сервисным компаниям",
        "Онлайн-школам",
        "Любому бизнесу с частыми обращениями",
      ],
      tasks: [
        "Автоответы на типовые вопросы",
        "Приём заявок и заказов",
        "Запись на услуги",
        "Рассылки и уведомления",
      ],
      includes: [
        "Сценарии диалогов",
        "Интеграция с CRM",
        "Уведомления",
        "Аналитика",
        "Админ-панель",
        "Поддержка",
      ],
      price: "от 80 000 ₽",
      timeline: "2-4 недели",
      color: "cyan",
    },
    {
      id: "api-integrations",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "API и интеграции",
      shortDesc: "Связываем системы: 1C, CRM, платёжные системы, маркетплейсы. Разработка API для ваших сервисов.",
      whoIsFor: [
        "Компаниям с несколькими системами",
        "Тем, кто хочет автоматизировать обмен данными",
        "SaaS-продуктам",
      ],
      tasks: [
        "Синхронизация данных между системами",
        "Автоматические отчёты",
        "Подключение к маркетплейсам",
        "Создание публичного API",
      ],
      includes: [
        "Разработка API",
        "Документация",
        "Тестирование",
        "Мониторинг",
        "Поддержка",
        "Обновления",
      ],
      price: "от 80 000 ₽",
      timeline: "2-6 недель",
      color: "rose",
    },
    {
      id: "seo",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO-оптимизация",
      shortDesc: "Техническая SEO-оптимизация сайта: скорость, структура, мета-теги, Schema.org, Core Web Vitals.",
      whoIsFor: [
        "Владельцам сайтов с низким трафиком",
        "Тем, кто хочет выйти в топ поиска",
        "Интернет-магазинам",
      ],
      tasks: [
        "Улучшение позиций в поиске",
        "Увеличение органического трафика",
        "Исправление технических ошибок",
        "Ускорение загрузки сайта",
      ],
      includes: [
        "Технический аудит",
        "Оптимизация скорости",
        "Мета-теги и структура",
        "Schema.org разметка",
        "Отчёт и рекомендации",
        "Внедрение правок",
      ],
      price: "от 50 000 ₽",
      timeline: "2-4 недели",
      color: "amber",
    },
    {
      id: "support",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Поддержка и развитие",
      shortDesc: "Техническое сопровождение существующих проектов: мониторинг, обновления, новый функционал.",
      whoIsFor: [
        "Владельцам действующих сайтов",
        "Компаниям без своей IT-команды",
        "Тем, кто хочет развивать проект",
      ],
      tasks: [
        "Стабильная работа сайта",
        "Быстрое исправление ошибок",
        "Добавление нового функционала",
        "Защита от взлома",
      ],
      includes: [
        "Мониторинг 24/7",
        "Резервные копии",
        "Обновления безопасности",
        "Консультации",
        "Мелкие правки",
        "Приоритетная поддержка",
      ],
      price: "от 25 000 ₽/мес",
      timeline: "Постоянно",
      color: "slate",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-200" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", light: "bg-violet-50", border: "border-violet-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", light: "bg-orange-50", border: "border-orange-200" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", light: "bg-cyan-50", border: "border-cyan-200" },
    rose: { bg: "bg-rose-100", text: "text-rose-600", light: "bg-rose-50", border: "border-rose-200" },
    amber: { bg: "bg-amber-100", text: "text-amber-600", light: "bg-amber-50", border: "border-amber-200" },
    slate: { bg: "bg-slate-200", text: "text-slate-600", light: "bg-slate-50", border: "border-slate-200" },
  };

  return (
    <>
      <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Услуги
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              Что мы <span className="text-blue-600">делаем</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Полный спектр веб-разработки: от простых лендингов до сложных систем.
              Выберите услугу или напишите нам — поможем определиться.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {services.map((service, index) => {
              const colors = colorClasses[service.color];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="group"
                >
                  <div className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full flex flex-col">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-blue-600 font-semibold">{service.price}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-400">{service.timeline}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-5 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Who is for */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Кому подходит:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.whoIsFor.map((item, i) => (
                          <span key={i} className={`px-3 py-1 text-xs rounded-full ${colors.light} ${colors.text}`}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tasks */}
                    <div className="mb-5 flex-grow">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Какие задачи решает:</h4>
                      <div className="space-y-1.5">
                        {service.tasks.slice(0, 3).map((task, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <svg className={`w-4 h-4 ${colors.text} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Includes preview */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.includes.slice(0, 4).map((item, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-md">
                          {item}
                        </span>
                      ))}
                      {service.includes.length > 4 && (
                        <span className="px-2 py-1 text-xs text-slate-400">
                          +{service.includes.length - 4}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/services/${service.id}`}
                      className={`w-full py-3 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 ${colors.light} ${colors.text} hover:opacity-80 border ${colors.border}`}
                    >
                      Подробнее об услуге
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Не уверены, что вам нужно?
                  </h3>
                  <p className="text-slate-600 max-w-xl">
                    Расскажите о задаче — мы поможем определиться с решением и посчитаем стоимость.
                    Первая консультация бесплатная.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 whitespace-nowrap"
                    data-cta="services-consultation"
                  >
                    Получить консультацию
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <a
                    href="https://t.me/webclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-4 border border-slate-200 bg-white text-slate-700 font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all whitespace-nowrap"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                    </svg>
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
