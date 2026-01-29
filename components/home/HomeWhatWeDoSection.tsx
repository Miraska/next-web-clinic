"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  Globe,
  ShoppingCart,
  Monitor,
  Database,
  MessageSquare,
  Settings,
  Check,
  ArrowRight,
} from "lucide-react";

export default function HomeWhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: Globe,
      problem: "Нет сайта или старый сайт не работает на вас",
      solution: "Сайты и лендинги",
      description: "Создадим современный сайт, который будет привлекать клиентов, показывать вашу экспертизу и удобно работать на всех устройствах.",
      tasks: [
        "Сайт-визитка для компании или специалиста",
        "Лендинг для продукта или услуги",
        "Корпоративный сайт с блогом",
        "Многостраничный информационный портал",
      ],
      includes: ["Адаптивный дизайн", "SEO-основа", "Админ-панель", "Формы заявок", "Аналитика"],
      price: "от 50 000 ₽",
      duration: "2-6 недель",
      slug: "web-development",
    },
    {
      icon: ShoppingCart,
      problem: "Хотите продавать онлайн, но не знаете с чего начать",
      solution: "Интернет-магазины",
      description: "Создадим удобный интернет-магазин с каталогом, корзиной, оплатой и доставкой. Интегрируем с вашей учётной системой.",
      tasks: [
        "Магазин с каталогом и корзиной",
        "Интеграция с платёжными системами",
        "Личный кабинет покупателя",
        "Синхронизация с 1С и складом",
      ],
      includes: ["Каталог товаров", "Онлайн-оплата", "Доставка", "Личный кабинет", "Управление заказами"],
      price: "от 250 000 ₽",
      duration: "6-12 недель",
      slug: "ecommerce",
    },
    {
      icon: Monitor,
      problem: "Нужен сложный сервис с нестандартным функционалом",
      solution: "Веб-приложения",
      description: "Разработаем веб-приложение под вашу бизнес-задачу: личные кабинеты, сервисы бронирования, калькуляторы, SaaS-продукты.",
      tasks: [
        "Личные кабинеты для клиентов",
        "Системы бронирования и записи",
        "Онлайн-калькуляторы и конфигураторы",
        "SaaS-продукты и стартапы",
      ],
      includes: ["Авторизация", "Личный кабинет", "API", "Уведомления", "Отчёты"],
      price: "от 300 000 ₽",
      duration: "2-4 месяца",
      slug: "web-apps",
    },
    {
      icon: Database,
      problem: "Хаос в заявках, Excel-таблицы, менеджеры теряют клиентов",
      solution: "CRM/ERP системы",
      description: "Создадим систему под ваши процессы: учёт клиентов, сделок, задач. Соберём все данные в одном месте, настроим отчёты.",
      tasks: [
        "Управление клиентами и сделками",
        "Воронки продаж и аналитика",
        "Складской учёт и логистика",
        "Управление проектами и задачами",
      ],
      includes: ["База клиентов", "Воронка продаж", "Задачи", "Отчёты", "Интеграции"],
      price: "от 400 000 ₽",
      duration: "3-5 месяцев",
      slug: "crm-erp",
    },
    {
      icon: MessageSquare,
      problem: "Менеджеры тратят время на однотипные вопросы клиентов",
      solution: "Чат-боты",
      description: "Создадим бота для сайта, Telegram или WhatsApp. Автоматизируем ответы на частые вопросы, приём заявок, запись на услуги.",
      tasks: [
        "Бот для ответов на частые вопросы",
        "Приём заявок и заказов",
        "Запись на услуги и бронирование",
        "Уведомления и рассылки",
      ],
      includes: ["Сценарии диалогов", "Интеграция с CRM", "Уведомления", "Аналитика", "Поддержка"],
      price: "от 80 000 ₽",
      duration: "2-4 недели",
      slug: "chatbots",
    },
    {
      icon: Settings,
      problem: "Системы не связаны, данные дублируются, много ручной работы",
      solution: "API и интеграции",
      description: "Свяжем ваши системы в единую экосистему: 1С, CRM, сайт, маркетплейсы, платёжные системы. Автоматизируем обмен данными.",
      tasks: [
        "Интеграция с 1С и МойСклад",
        "Подключение платёжных систем",
        "Синхронизация с маркетплейсами",
        "Автоматические отчёты и уведомления",
      ],
      includes: ["API разработка", "Документация", "Тестирование", "Мониторинг", "Поддержка"],
      price: "от 80 000 ₽",
      duration: "2-6 недель",
      slug: "api-integrations",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Что мы делаем
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Решаем конкретные <span className="text-blue-600">задачи бизнеса</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            У вас проблема — мы предлагаем решение. 
            Без лишних технических терминов, понятно и по делу.
          </p>
        </div>

        {/* Tabs navigation for mobile */}
        <div className="relative lg:hidden mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-x-auto gap-2 pb-2 px-2 scrollbar-hide">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === index
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {service.solution}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile view - single card */}
        <div className="lg:hidden">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            {/* Problem */}
            <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Проблема:</span>
              <p className="text-slate-700 font-medium mt-1">{services[activeTab].problem}</p>
            </div>

            {/* Solution */}
            <div className="flex items-center gap-3 mb-4">
              {(() => {
                const IconComponent = services[activeTab].icon;
                return (
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                );
              })()}
              <div>
                <span className="text-xs text-blue-600 font-medium uppercase tracking-wider">Решение:</span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {services[activeTab].solution}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-5">
              {services[activeTab].description}
            </p>

            {/* Tasks */}
            <div className="mb-5">
              <h4 className="text-sm font-medium text-slate-900 mb-3">Какие задачи решает:</h4>
              <div className="space-y-2">
                {services[activeTab].tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
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
                <span className="text-blue-600 font-semibold text-lg">{services[activeTab].price}</span>
                <span className="text-slate-400 text-sm ml-2">• {services[activeTab].duration}</span>
              </div>
              <Link 
                href={`/services/${services[activeTab].slug}`}
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                Подробнее
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all flex flex-col"
              >
                {/* Problem badge */}
                <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Проблема:</span>
                  <p className="text-slate-700 font-medium mt-1 text-sm">{service.problem}</p>
                </div>

                {/* Solution */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-600 font-medium uppercase tracking-wider">Решение:</span>
                    <h3 className="text-lg font-semibold text-slate-900">
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
                      className="px-2 py-1 text-xs rounded-md bg-blue-50 text-blue-600"
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
                    <span className="text-blue-600 font-semibold">{service.price}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400 text-sm">{service.duration}</span>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1"
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <p className="text-slate-500">Не нашли свою задачу?</p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors bg-white px-5 py-2.5 rounded-lg border border-slate-200 hover:border-blue-200"
            >
              Расскажите о ней — поможем
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
