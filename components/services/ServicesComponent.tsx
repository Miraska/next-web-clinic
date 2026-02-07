"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import {
  Globe,
  ShoppingCart,
  Monitor,
  Database,
  MessageSquare,
  Code2,
  Search,
  Wrench,
  Zap,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

// Service images
const serviceImages = [
  "/images/services/sites.png",
  "/images/services/ecommerce.png",
  "/images/services/web-apps.png",
  "/images/services/crm-erp.png",
  "/images/services/chatbots.png",
  "/images/services/api-integrations.png",
  "/images/services/seo.png",
  "/images/services/support.png",
  "/images/services/automation.png",
];

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortDesc: string;
  whoIsFor: string[];
  tasks: string[];
  includes: string[];
  price: string;
  timeline: string;
  accent: "blue" | "teal";
}

export default function ServicesComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const services: Service[] = [
    {
      id: "web-development",
      icon: Globe,
      title: "Сайты и лендинги",
      shortDesc: "Разработка сайтов различной сложности: лендинги, корпоративные порталы, информационные ресурсы с системой управления контентом.",
      whoIsFor: [
        "Бизнесу, которому нужен сайт",
        "Компаниям для представительства в интернете",
        "Для запуска новых продуктов",
      ],
      tasks: [
        "Представление компании в интернете",
        "Информирование о продуктах и услугах",
        "Сбор заявок",
        "Работа с контентом",
      ],
      includes: [
        "Адаптивный дизайн",
        "SEO-оптимизация",
        "Админ-панель",
        "Формы обратной связи",
        "Аналитика",
        "SSL-сертификат",
      ],
      price: "По запросу",
      timeline: "2-8 недель",
      accent: "blue",
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      title: "Интернет-магазины",
      shortDesc: "Разработка платформ электронной коммерции с каталогом, системой оплаты и доставки. Интеграция с учётными системами.",
      whoIsFor: [
        "Розничной и оптовой торговле",
        "Производителям",
        "B2B-компаниям",
      ],
      tasks: [
        "Организация онлайн-продаж",
        "Автоматизация обработки заказов",
        "Синхронизация с учётной системой",
        "Управление каталогом",
      ],
      includes: [
        "Каталог товаров",
        "Корзина и оформление",
        "Онлайн-оплата",
        "Интеграция доставки",
        "Личный кабинет",
        "Управление заказами",
      ],
      price: "По запросу",
      timeline: "2-4 месяца",
      accent: "teal",
    },
    {
      id: "web-apps",
      icon: Monitor,
      title: "Веб-приложения",
      shortDesc: "Разработка веб-сервисов с нестандартным функционалом: личные кабинеты, системы бронирования, SaaS-продукты.",
      whoIsFor: [
        "Сервисным компаниям",
        "Стартапам",
        "Компаниям с уникальными процессами",
      ],
      tasks: [
        "Создание онлайн-сервиса",
        "Автоматизация процессов",
        "Личные кабинеты для клиентов",
        "Запуск продукта",
      ],
      includes: [
        "Авторизация и роли",
        "Личный кабинет",
        "API интеграции",
        "Уведомления",
        "Отчёты и аналитика",
        "Документация",
      ],
      price: "По запросу",
      timeline: "2-5 месяцев",
      accent: "blue",
    },
    {
      id: "crm-erp",
      icon: Database,
      title: "CRM/ERP системы",
      shortDesc: "Разработка систем управления под ваши бизнес-процессы: клиенты, сделки, склад, аналитика.",
      whoIsFor: [
        "Компаниям с нестандартными процессами",
        "Бизнесу, которому не подходят готовые решения",
        "Для систематизации данных",
      ],
      tasks: [
        "Систематизация работы с клиентами",
        "Контроль продаж и задач",
        "Учёт и логистика",
        "Аналитика и отчётность",
      ],
      includes: [
        "База клиентов",
        "Воронка продаж",
        "Управление задачами",
        "Отчёты и дашборды",
        "Интеграции",
        "Обучение",
      ],
      price: "По запросу",
      timeline: "3-6 месяцев",
      accent: "teal",
    },
    {
      id: "chatbots",
      icon: MessageSquare,
      title: "Чат-боты",
      shortDesc: "Разработка ботов для Telegram, WhatsApp и сайта. Автоматизация коммуникации, приём заявок, запись на услуги.",
      whoIsFor: [
        "Сервисным компаниям",
        "Образовательным проектам",
        "Бизнесу с типовыми обращениями",
      ],
      tasks: [
        "Автоматизация ответов",
        "Приём заявок",
        "Запись на услуги",
        "Уведомления",
      ],
      includes: [
        "Сценарии диалогов",
        "Интеграция с CRM",
        "Уведомления",
        "Аналитика",
        "Админ-панель",
        "Поддержка",
      ],
      price: "По запросу",
      timeline: "2-4 недели",
      accent: "blue",
    },
    {
      id: "api-integrations",
      icon: Code2,
      title: "API и интеграции",
      shortDesc: "Объединение систем: 1C, CRM, платёжные системы, маркетплейсы. Разработка API для ваших сервисов.",
      whoIsFor: [
        "Компаниям с несколькими системами",
        "Для автоматизации обмена данными",
        "SaaS-продуктам",
      ],
      tasks: [
        "Синхронизация данных",
        "Автоматизация отчётов",
        "Подключение к маркетплейсам",
        "Разработка публичного API",
      ],
      includes: [
        "Разработка API",
        "Документация",
        "Тестирование",
        "Мониторинг",
        "Поддержка",
        "Обновления",
      ],
      price: "По запросу",
      timeline: "2-8 недель",
      accent: "teal",
    },
    {
      id: "seo",
      icon: Search,
      title: "SEO-оптимизация",
      shortDesc: "Техническая SEO-оптимизация: скорость загрузки, структура, мета-теги, Schema.org, Core Web Vitals.",
      whoIsFor: [
        "Владельцам сайтов",
        "Для улучшения видимости в поиске",
        "Интернет-магазинам",
      ],
      tasks: [
        "Улучшение технических показателей",
        "Оптимизация скорости",
        "Исправление ошибок",
        "Структурная разметка",
      ],
      includes: [
        "Технический аудит",
        "Оптимизация скорости",
        "Мета-теги и структура",
        "Schema.org разметка",
        "Отчёт и рекомендации",
        "Внедрение правок",
      ],
      price: "По запросу",
      timeline: "2-4 недели",
      accent: "blue",
    },
    {
      id: "support",
      icon: Wrench,
      title: "Поддержка и развитие",
      shortDesc: "Техническое сопровождение проектов: мониторинг, обновления, исправление ошибок, развитие функционала.",
      whoIsFor: [
        "Владельцам действующих сайтов",
        "Компаниям без IT-отдела",
        "Для развития проекта",
      ],
      tasks: [
        "Обеспечение работоспособности",
        "Исправление ошибок",
        "Добавление функционала",
        "Обновления безопасности",
      ],
      includes: [
        "Мониторинг",
        "Резервные копии",
        "Обновления",
        "Консультации",
        "Правки",
        "Приоритетная поддержка",
      ],
      price: "По запросу",
      timeline: "По договору",
      accent: "teal",
    },
    {
      id: "automation",
      icon: Zap,
      title: "Автоматизация бизнеса",
      shortDesc: "Автоматизация повторяющихся процессов: интеграции между системами, отчёты, уведомления, сценарии. Сокращение ручной работы.",
      whoIsFor: [
        "Операционным отделам",
        "Руководителям",
        "Командам продаж",
      ],
      tasks: [
        "Снижение рутины",
        "Интеграции между системами",
        "Автоотчёты и алерты",
        "Прозрачность процессов",
      ],
      includes: [
        "Анализ процессов",
        "Интеграции",
        "Триггерные сценарии",
        "Документация",
        "Мониторинг",
        "Поддержка",
      ],
      price: "По запросу",
      timeline: "2-8 недель",
      accent: "blue",
    },
  ];

  return (
    <>
      <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-bl from-blue-50/50 to-transparent pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
          {/* Header with visual */}
          <div className={`grid lg:grid-cols-2 gap-12 items-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/50 text-blue-600 text-sm font-medium mb-4 shadow-sm">
                <Sparkles className="w-4 h-4" />
                Услуги
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
                Что мы{" "}
                <span className="text-gradient-blue">делаем</span>
              </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              Разработка веб-решений: от лендингов до корпоративных систем.
              Выберите направление или свяжитесь с нами для консультации.
            </p>
            </div>
            
            {/* Visual anchor */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/all-services.png"
                  alt="Web development"
                  width={600}
                  height={350}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center ${
                        i === 0 ? "bg-blue-600" : i === 1 ? "bg-teal-600" : "bg-blue-800"
                      }`}>
                        {i === 0 ? <Globe className="w-5 h-5 text-white" /> : 
                         i === 1 ? <ShoppingCart className="w-5 h-5 text-white" /> : 
                         <Monitor className="w-5 h-5 text-white" />}
                      </div>
                    ))}
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">9 направлений</div>
                    <div className="text-sm text-white/70">Полный цикл разработки</div>
                  </div>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">15+</div>
                    <div className="text-sm text-slate-500">проектов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isBlue = service.accent === "blue";
              return (
                <div
                  key={service.id}
                  className={`group rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Service image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={serviceImages[index]}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/5 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm ${
                        isBlue ? "bg-blue-600/90" : "bg-teal-600/90"
                      }`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      {/* <span className="text-white/90 text-sm font-medium">{service.timeline}</span> */}
                    </div>
                  </div>
                  
                  <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  {/* Title & Price */}
                  <div className="mb-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-5 leading-relaxed">
                    {service.shortDesc}
                  </p>



                  {/* Tasks */}
                  <div className="mb-5 flex-grow">
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Какие задачи решает:</h4>
                    <div className="space-y-1.5">
                      {service.tasks.slice(0, 3).map((task, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check className={`w-4 h-4 flex-shrink-0 ${isBlue ? "text-blue-600" : "text-teal-600"}`} />
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Includes preview */}
                  {/* <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.includes.slice(0, 4).map((item, i) => (
                      <span key={i} className={`px-2 py-1 text-xs rounded-md font-medium ${
                        isBlue ? "bg-blue-50 text-blue-600" : "bg-teal-50 text-teal-600"
                      }`}>
                        {item}
                      </span>
                    ))}
                    {service.includes.length > 4 && (
                      <span className="px-2 py-1 text-xs text-slate-400">
                        +{service.includes.length - 4}
                      </span>
                    )}
                  </div> */}

                  {/* CTA */}
                  <Link
                    href={`/services/${service.id}`}
                    className={`w-full py-3.5 rounded-xl font-medium text-center transition-all flex items-center justify-center gap-2 ${
                      isBlue 
                        ? "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white" 
                        : "bg-teal-50 text-teal-600 hover:bg-teal-600 hover:text-white"
                    } group/btn`}
                  >
                    Подробнее об услуге
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section - unified dark style */}
          <div className={`relative rounded-2xl overflow-hidden transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80"
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/88" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20" />
            </div>
            
            <div className="relative p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
                  Нужна консультация?
                </h3>
                <p className="text-slate-300 max-w-xl text-lg">
                  Расскажите о задаче — мы поможем определить подходящее решение и подготовим предложение.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center px-7 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-600/30 whitespace-nowrap"
                  data-cta="services-consultation"
                >
                  Связаться
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
