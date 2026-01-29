"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
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
  ArrowRight,
  Check,
} from "lucide-react";

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
}

export default function ServicesComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      id: "web-development",
      icon: Globe,
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
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
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
    },
    {
      id: "web-apps",
      icon: Monitor,
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
    },
    {
      id: "crm-erp",
      icon: Database,
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
    },
    {
      id: "chatbots",
      icon: MessageSquare,
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
    },
    {
      id: "api-integrations",
      icon: Code2,
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
    },
    {
      id: "seo",
      icon: Search,
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
    },
    {
      id: "support",
      icon: Wrench,
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
    },
  ];

  return (
    <>
      <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Услуги
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              Что мы <span className="text-blue-600">делаем</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Полный спектр веб-разработки: от простых лендингов до сложных систем.
              Выберите услугу или напишите нам — поможем определиться.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all h-full flex flex-col"
                >
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
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
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Кому подходит:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.whoIsFor.map((item, i) => (
                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="mb-5 flex-grow">
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Какие задачи решает:</h4>
                    <div className="space-y-1.5">
                      {service.tasks.slice(0, 3).map((task, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Includes preview */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.includes.slice(0, 4).map((item, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded-md">
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
                    className="w-full py-3 rounded-lg font-medium text-center transition-colors flex items-center justify-center gap-2 bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white group/btn"
                  >
                    Подробнее об услуге
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="p-8 lg:p-10 rounded-2xl bg-slate-900 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Не уверены, что вам нужно?
                </h3>
                <p className="text-slate-300 max-w-xl">
                  Расскажите о задаче — мы поможем определиться с решением и посчитаем стоимость.
                  Первая консультация бесплатная.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  data-cta="services-consultation"
                >
                  Получить консультацию
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap"
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
