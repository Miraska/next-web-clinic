"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  Globe,
  ShoppingCart,
  Monitor,
  Database,
  MessageSquare,
  Settings,
  Search,
  Wrench,
  Zap,
  Check,
  ArrowRight,
} from "lucide-react";

export default function HomeWhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      problem: "Отсутсвие сильного и профессионального онлайн присутствия компании в интернете",
      solution: "Сайты и лендинги",
      description: "Разрабатываем сайты разной сложности: от одностраничных лендингов до корпоративных порталов с системой управления контентом.",
      tasks: [
        "Корпоративные сайты",
        "Лендинги для продуктов и услуг",
        "Информационные порталы",
        "Сайты-визитки",
      ],
      includes: ["Адаптивный дизайн", "SEO-основа", "Админ-панель", "Формы заявок", "Аналитика"],
      price: "По запросу",
      duration: "2-6 недель",
      slug: "web-development",
      accent: "blue",
    },
    {
      icon: ShoppingCart,
      problem: "Теряем продажи, потому что клиенты не могут купить у нас товары онлайн в любое время",
      solution: "Интернет-магазины",
      description: "Разрабатываем интернет-магазины с каталогом, системой оплаты и доставки. Выполняем интеграцию с учётными системами.",
      tasks: [
        "Каталог с фильтрами и поиском",
        "Интеграция платёжных систем",
        "Личный кабинет покупателя",
        "Синхронизация с 1С",
      ],
      includes: ["Каталог товаров", "Онлайн-оплата", "Доставка", "Личный кабинет", "Управление заказами"],
      price: "По запросу",
      duration: "2-4 месяца",
      slug: "ecommerce",
      accent: "teal",
    },
    {
      icon: Monitor,
      problem: "Хотим дать клиентам уникальный онлайн сервис который станет нашим ключевым преимуществом",
      solution: "Веб-приложения",
      description: "Разрабатываем веб-приложения под конкретные бизнес-задачи: личные кабинеты, системы бронирования, внутренние порталы.",
      tasks: [
        "Личные кабинеты клиентов",
        "Системы бронирования",
        "Онлайн-калькуляторы",
        "SaaS-продукты",
      ],
      includes: ["Авторизация", "Личный кабинет", "API", "Уведомления", "Отчёты"],
      price: "По запросу",
      duration: "2-4 месяца",
      slug: "web-apps",
      accent: "blue",
    },
    {
      icon: Database,
      problem: "Наши уникальные бизнес процессы не может автоматизировать ни один готовый софт",
      solution: "CRM/ERP системы",
      description: "Разрабатываем системы управления под ваши процессы: учёт клиентов, сделок, задач. Объединяем данные в одном месте.",
      tasks: [
        "Управление клиентами и сделками",
        "Воронки продаж",
        "Складской учёт",
        "Управление задачами",
      ],
      includes: ["База клиентов", "Воронка продаж", "Отчёты", "Интеграции", "Отслеживание всех чатов", "AI отслеживание звонков"],
      price: "По запросу",
      duration: "3-5 месяцев",
      slug: "crm-erp",
      accent: "teal",
    },
    {
      icon: MessageSquare,
      problem: "Клиенты не могут получить быстрый ответ в нерабочее время, а менеджеры перегружены однотипными вопросами",
      solution: "Чат-боты",
      description: "Разрабатываем ботов для Telegram, WhatsApp и сайта. Автоматизируем ответы на типовые вопросы, приём заявок, запись на услуги.",
      tasks: [
        "Ответы на типовые вопросы",
        "Приём заявок",
        "Запись на услуги",
        "Уведомления",
      ],
      includes: ["Сценарии диалогов", "Интеграция с CRM", "Уведомления", "Аналитика", "Поддержка"],
      price: "По запросу",
      duration: "2-4 недели",
      slug: "chatbots",
      accent: "blue",
    },
    {
      icon: Settings,
      problem: "Цифровая экосистема бизнеса - это набор изолированных островов. Данные не синхронизуруются, процессы работают со сбоями.",
      solution: "API и интеграции",
      description: "Объединяем системы в единую экосистему: 1С, CRM, сайт, маркетплейсы, платёжные системы. Автоматизируем обмен данными.",
      tasks: [
        "Интеграция с 1С",
        "Подключение платёжных систем",
        "Синхронизация с маркетплейсами",
        "Автоматизация отчётов",
      ],
      includes: ["API разработка", "Документация", "Тестирование", "Мониторинг", "Поддержка"],
      price: "По запросу",
      duration: "2-6 недель",
      slug: "api-integrations",
      accent: "teal",
    },
    {
      icon: Search,
      problem: "Сайт не попадает в топ поиска, трафик из поисковых систем низкий",
      solution: "SEO-оптимизация",
      description: "Техническая SEO-оптимизация: скорость загрузки, структура, мета-теги, schema.org, Core Web Vitals. Аудит и внедрение рекомендаций.",
      tasks: [
        "Улучшение позиций в поиске",
        "Оптимизация скорости загрузки",
        "Исправление технических ошибок",
        "Разметка Schema.org",
      ],
      includes: ["Технический аудит", "Оптимизация скорости", "Мета-теги", "Schema.org", "Отчёт и рекомендации"],
      price: "По запросу",
      duration: "2-4 недели",
      slug: "seo",
      accent: "blue",
    },
    {
      icon: Wrench,
      problem: "Нужна стабильная работа сайта, быстрые правки и развитие без содержания своего IT-отдела",
      solution: "Поддержка и развитие",
      description: "Техническая поддержка: мониторинг, обновления, исправление ошибок, развитие функционала. Обеспечение стабильной работы продукта.",
      tasks: [
        "Мониторинг и стабильность",
        "Исправление ошибок",
        "Добавление функционала",
        "Обновления безопасности",
      ],
      includes: ["Мониторинг 24/7", "Резервные копии", "Обновления", "Консультации", "Отчётность"],
      price: "По запросу",
      duration: "По договору",
      slug: "support",
      accent: "teal",
    },
    {
      icon: Zap,
      problem: "Много ручной работы и дублирования данных между системами, нужны автоматические отчёты и сценарии",
      solution: "Автоматизация бизнеса",
      description: "Автоматизация повторяющихся процессов: интеграции между системами, отчёты, уведомления, сценарии. Сокращение ручной работы.",
      tasks: [
        "Снижение рутины",
        "Интеграции между системами",
        "Автоотчёты и дашборды",
        "Уведомления и алерты",
      ],
      includes: ["Анализ процессов", "Интеграции", "Триггерные сценарии", "Документация", "Поддержка"],
      price: "По запросу",
      duration: "2-8 недель",
      slug: "automation",
      accent: "blue",
    },
  ];

  // Service images for visual enhancement
  const serviceImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 section-bg-pattern opacity-50" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        {/* Header with visual anchor */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 lg:mb-16">
          <div className={`text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-medium mb-4 shadow-sm">
              Направления работы
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Услуги{" "}
              <span className="text-gradient-blue">веб-разработки</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Разрабатываем веб-решения для бизнеса: от сайтов до сложных систем автоматизации. Выберите направление или свяжитесь с нами для консультации.
            </p>
          </div>
          
          {/* Visual anchor image */}
          <div className={`relative hidden lg:block transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Web development workspace"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">9 направлений</div>
                        <div className="text-white/70 text-sm">Веб-разработка</div>
                      </div>
                    </div>
                  </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
              <div className="text-2xl font-bold text-blue-600">React</div>
              <div className="text-sm text-slate-500">Next.js</div>
            </div>
          </div>
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
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === index
                    ? service.accent === "teal" 
                      ? "bg-teal-600 text-white" 
                      : "bg-blue-600 text-white"
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
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            {/* Problem */}
            <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Проблема:</span>
              <p className="text-slate-700 font-medium mt-1">{services[activeTab].problem}</p>
            </div>

            {/* Solution */}
            <div className="flex items-center gap-3 mb-4">
              {(() => {
                const IconComponent = services[activeTab].icon;
                const isBlue = services[activeTab].accent === "blue";
                return (
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isBlue ? "bg-blue-100" : "bg-teal-100"
                  }`}>
                    <IconComponent className={`w-6 h-6 ${isBlue ? "text-blue-600" : "text-teal-600"}`} />
                  </div>
                );
              })()}
              <div>
                <span className={`text-xs font-medium uppercase tracking-wider ${
                  services[activeTab].accent === "blue" ? "text-blue-600" : "text-teal-600"
                }`}>Решение:</span>
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
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      services[activeTab].accent === "blue" ? "text-blue-600" : "text-teal-600"
                    }`} />
                    <span className="text-sm text-slate-600">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div className="flex flex-wrap gap-2 mb-5">
              {services[activeTab].includes.map((item, i) => (
                <span key={i} className="px-3 py-1 text-xs text-slate-600 bg-slate-100 rounded-full font-medium">
                  {item}
                </span>
              ))}
            </div>

            {/* Price & Duration */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <span className={`font-semibold text-lg ${
                  services[activeTab].accent === "blue" ? "text-blue-600" : "text-teal-600"
                }`}>{services[activeTab].price}</span>
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

        {/* Desktop Grid with enhanced cards */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isBlue = service.accent === "blue";
            return (
              <div
                key={index}
                className={`bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service image */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={serviceImages[index]}
                    alt={service.solution}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm ${
                      isBlue ? "bg-blue-600/90" : "bg-teal-600/90"
                    }`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{service.duration}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  {/* Problem badge */}
                  <div className="mb-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Проблема заказчика:</span>
                    <p className="text-slate-700 font-medium mt-0.5 text-sm">{service.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-3">
                    <span className={`text-xs font-medium uppercase tracking-wider ${
                      isBlue ? "text-blue-600" : "text-teal-600"
                    }`}>Решение:</span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {service.solution}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Includes */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.includes.slice(0, 6).map((item, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded-md font-medium ${
                          isBlue ? "bg-blue-50 text-blue-600" : "bg-teal-50 text-teal-600"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                    {service.includes.length > 6 && (
                      <span className="px-2 py-1 text-xs text-slate-400">
                        +{service.includes.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <span className={`font-bold text-lg ${isBlue ? "text-blue-600" : "text-teal-600"}`}>
                      {service.price}
                    </span>
                    <Link
                      href={`/services/${service.slug}`}
                      className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                        isBlue ? "text-blue-600 hover:text-blue-700" : "text-teal-600 hover:text-teal-700"
                      }`}
                    >
                      Подробнее
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <p className="text-slate-500">Не нашли подходящую услугу?</p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors bg-white px-5 py-2.5 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md"
            >
              Свяжитесь с нами
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
