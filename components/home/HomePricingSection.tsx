"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Globe,
  Building2,
  ShoppingCart,
  BarChart3,
  MessageSquare,
  Link2,
  Search,
  Wrench,
  Monitor,
  Clock,
  Check,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const allServices = [
  {
    name: "Лендинг",
    description: "Одностраничный сайт для продукта или услуги",
    duration: "2-3 недели",
    popular: false,
    features: [
      "Адаптивный дизайн",
      "Форма обратной связи",
      "Базовая SEO-оптимизация",
      "Подключение аналитики",
      "Система управления контентом",
      "Настройка хостинга",
    ],
    bestFor: "Для представления продукта или услуги",
    icon: Globe,
    accent: "blue",
  },
  {
    name: "Корпоративный сайт",
    description: "Многостраничный сайт для компании",
    duration: "4-8 недель",
    popular: true,
    features: [
      "Многостраничная структура",
      "Раздел новостей / блог",
      "Система управления контентом",
      "Интеграция с CRM",
      "SSL-сертификат",
      "Документация и обучение",
    ],
    bestFor: "Для представления компании в интернете",
    icon: Building2,
    accent: "teal",
  },
  {
    name: "Интернет-магазин",
    description: "Платформа для онлайн-продаж",
    duration: "2-4 месяца",
    popular: false,
    features: [
      "Каталог товаров с фильтрами",
      "Корзина и оформление заказа",
      "Интеграция платёжных систем",
      "Интеграция служб доставки",
      "Личный кабинет покупателя",
      "Панель управления заказами",
    ],
    bestFor: "Для организации онлайн-продаж",
    icon: ShoppingCart,
    accent: "blue",
  },
  { 
    name: "CRM / Личный кабинет", 
    description: "Системы управления клиентами и данными",
    duration: "2-5 месяцев",
    popular: false,
    features: [
      "База клиентов",
      "История взаимодействий",
      "Аналитика и отчёты",
      "Роли и права доступа",
      "Уведомления",
      "API для интеграций",
    ],
    bestFor: "Для систематизации бизнес-процессов",
    icon: BarChart3,
    accent: "teal",
  },
  { 
    name: "Чат-боты", 
    description: "Автоматизация коммуникации с клиентами",
    duration: "2-4 недели",
    popular: true,
    features: [
      "Автоматические ответы",
      "Приём заявок",
      "Уведомления",
      "Интеграция с CRM",
      "Меню и команды",
      "Аналитика",
    ],
    bestFor: "Для автоматизации типовых обращений",
    icon: MessageSquare,
    accent: "blue",
  },
  { 
    name: "Интеграции", 
    description: "Связь между системами",
    duration: "2-6 недель",
    popular: false,
    features: [
      "Синхронизация данных",
      "Обмен заказами",
      "Актуализация остатков",
      "Обмен документами",
      "Мониторинг",
      "Документация",
    ],
    bestFor: "Для объединения существующих систем",
    icon: Link2,
    accent: "teal",
  },
  { 
    name: "SEO-оптимизация", 
    description: "Техническая оптимизация сайта",
    duration: "2-4 недели",
    popular: false,
    features: [
      "Технический аудит",
      "Оптимизация скорости",
      "Мета-теги и структура",
      "Schema.org разметка",
      "Отчёт с рекомендациями",
      "Внедрение правок",
    ],
    bestFor: "Для улучшения видимости в поиске",
    icon: Search,
    accent: "blue",
  },
  { 
    name: "Техническая поддержка", 
    description: "Сопровождение и развитие проекта",
    duration: "По договору",
    popular: false,
    features: [
      "Мониторинг работоспособности",
      "Резервное копирование",
      "Обновления безопасности",
      "Исправление ошибок",
      "Консультации",
      "Развитие функционала",
    ],
    bestFor: "Для поддержания работоспособности",
    icon: Wrench,
    accent: "teal",
  },
  { 
    name: "Веб-приложение", 
    description: "Сервисы с нестандартным функционалом",
    duration: "От 2 месяцев",
    popular: false,
    features: [
      "Проектирование архитектуры",
      "Масштабируемость",
      "API и интеграции",
      "Безопасность данных",
      "Документация",
      "Развёртывание",
    ],
    bestFor: "Для реализации уникальной бизнес-логики",
    icon: Monitor,
    accent: "blue",
  },
];

export default function HomePricingSection() {
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

  return (
    <>
      <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 section-bg-gradient-blue opacity-50" />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
          {/* Header */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/50 text-blue-600 text-sm font-medium mb-4 shadow-sm">
              Услуги
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Направления{" "}
              <span className="text-gradient-blue">разработки</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Выберите направление или свяжитесь с нами для обсуждения вашей задачи. Стоимость рассчитывается индивидуально.
            </p>
          </div>

          {/* All Services Slider */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Navigation Buttons */}
              <button 
                className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all hidden lg:flex"
                aria-label="Предыдущий"
              >
                <ChevronLeft className="w-6 h-6 text-slate-600" />
              </button>
              <button 
                className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all hidden lg:flex"
                aria-label="Следующий"
              >
                <ChevronRight className="w-6 h-6 text-slate-600" />
              </button>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                navigation={{
                  prevEl: '.swiper-button-prev-custom',
                  nextEl: '.swiper-button-next-custom',
                }}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="services-swiper !pb-12 !pt-5"
              >
                {allServices.map((service, index) => {
                  const IconComponent = service.icon;
                  const isBlue = service.accent === "blue";
                  return (
                    <SwiperSlide key={index}>
                      <div 
                        className={`relative p-6 pt-8 rounded-2xl bg-white border-2 transition-all duration-300 flex flex-col hover:shadow-xl hover:-translate-y-0.5 h-full ${
                          service.popular 
                            ? "border-teal-200 shadow-lg" 
                            : "border-slate-200 hover:border-blue-200"
                        }`}
                      >
                        {/* Popular badge */}
                        {service.popular && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <span className="px-4 py-1.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-xs font-semibold rounded-full shadow-lg shadow-teal-600/30 flex items-center gap-1.5 whitespace-nowrap">
                              <Sparkles className="w-3.5 h-3.5" />
                              Популярный
                            </span>
                          </div>
                        )}

                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                          isBlue ? "bg-blue-100" : "bg-teal-100"
                        }`}>
                          <IconComponent className={`w-7 h-7 ${isBlue ? "text-blue-600" : "text-teal-600"}`} />
                        </div>

                        {/* Name & description */}
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                        <p className="text-slate-500 text-sm mb-4">{service.description}</p>

                        {/* Duration */}
                        <div className="flex items-center gap-2 mb-4 text-sm text-slate-400">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>

                        {/* Best for */}
                        <div className={`px-3 py-2 rounded-lg mb-5 ${isBlue ? "bg-blue-50" : "bg-teal-50"}`}>
                          <p className={`text-xs font-medium ${isBlue ? "text-blue-700" : "text-teal-700"}`}>
                            {service.bestFor}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-2.5 mb-6 flex-grow">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isBlue ? "text-blue-600" : "text-teal-600"}`} />
                              <span className="text-slate-600 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className={`w-full py-3 rounded-xl font-medium text-center transition-all flex items-center justify-center gap-2 ${
                            service.popular
                              ? "bg-teal-600 text-white hover:bg-teal-700 shadow-md shadow-teal-600/20"
                              : "bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white"
                          }`}
                          data-cta={`service-${service.name.toLowerCase()}`}
                        >
                          Связаться
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25"
              data-cta="solutions-consultation"
            >
              Связаться
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <p className="text-slate-400 text-sm mt-3">
              Стоимость обсуждается индивидуально
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors mt-4"
            >
              Подробнее об услугах
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
