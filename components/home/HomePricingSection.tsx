"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ui/ConsultationModal";
import {
  BarChart3,
  MessageSquare,
  Link2,
  Search,
  Wrench,
  Monitor,
  Clock,
  Check,
  X,
  ArrowRight,
} from "lucide-react";

const pricingPlans = [
  {
    name: "Лендинг",
    description: "Одностраничный сайт для продукта, услуги или события",
    price: "от 50 000",
    currency: "₽",
    duration: "2-3 недели",
    popular: false,
    features: [
      "До 7 экранов",
      "Адаптивный дизайн",
      "Форма заявки",
      "Базовая SEO-оптимизация",
      "Подключение аналитики",
      "Хостинг на 1 год",
    ],
    notIncluded: [
      "Админ-панель",
      "Интеграции с CRM",
    ],
    bestFor: "Для быстрого запуска и тестирования гипотез",
  },
  {
    name: "Сайт компании",
    description: "Полноценный корпоративный сайт с блогом и админкой",
    price: "от 150 000",
    currency: "₽",
    duration: "4-6 недель",
    popular: true,
    features: [
      "Всё из \"Лендинг\"",
      "До 15 страниц",
      "Блог / Новости",
      "Админ-панель CMS",
      "Интеграция с CRM",
      "SSL-сертификат",
      "Обучение работе",
    ],
    notIncluded: [
      "Интернет-магазин",
    ],
    bestFor: "Для компаний, которым нужен полноценный сайт",
  },
  {
    name: "Интернет-магазин",
    description: "Онлайн-магазин с каталогом, оплатой и доставкой",
    price: "от 250 000",
    currency: "₽",
    duration: "2-3 месяца",
    popular: false,
    features: [
      "Всё из \"Сайт компании\"",
      "Каталог товаров",
      "Корзина и оформление",
      "Онлайн-оплата",
      "Интеграция доставки",
      "Личный кабинет",
      "Управление заказами",
      "Импорт/экспорт товаров",
    ],
    notIncluded: [],
    bestFor: "Для продаж онлайн с автоматизацией",
  },
];

const additionalServices = [
  { 
    name: "CRM / Личный кабинет", 
    price: "от 400 000 ₽", 
    icon: BarChart3,
  },
  { 
    name: "Telegram / WhatsApp бот", 
    price: "от 80 000 ₽", 
    icon: MessageSquare,
  },
  { 
    name: "Интеграция с 1С", 
    price: "от 50 000 ₽", 
    icon: Link2,
  },
  { 
    name: "SEO-оптимизация", 
    price: "от 50 000 ₽", 
    icon: Search,
  },
  { 
    name: "Техническая поддержка", 
    price: "от 25 000 ₽/мес", 
    icon: Wrench,
  },
  { 
    name: "Веб-приложение", 
    price: "от 300 000 ₽", 
    icon: Monitor,
  },
];

export default function HomePricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Стоимость
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Прозрачные <span className="text-blue-600">цены</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ориентировочная стоимость типовых решений. Точную цену назовём после обсуждения вашей задачи — это бесплатно.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg">
                      Популярный выбор
                    </span>
                  </div>
                )}

                <div className={`relative p-6 lg:p-8 rounded-2xl bg-white border-2 transition-colors h-full flex flex-col ${
                  plan.popular 
                    ? "border-blue-200 shadow-lg" 
                    : "border-slate-200 hover:border-slate-300"
                }`}>
                  {/* Plan name & description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-500 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-blue-600">
                        {plan.price}
                      </span>
                      <span className="text-xl text-slate-400">{plan.currency}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
                      <Clock className="w-4 h-4" />
                      {plan.duration}
                    </div>
                  </div>

                  {/* Best for */}
                  <div className="px-3 py-2 rounded-lg bg-blue-50 mb-6">
                    <p className="text-sm text-blue-700 font-medium">{plan.bestFor}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 opacity-50">
                        <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-300" />
                        <span className="text-slate-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`w-full py-3 rounded-lg font-medium text-center transition-colors flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                    data-cta={`pricing-${plan.name.toLowerCase()}`}
                  >
                    Обсудить проект
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Дополнительные услуги</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-200 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-slate-700 font-medium text-sm">{service.name}</div>
                        <div className="text-blue-600 text-sm font-medium">{service.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm mb-4">
              Цены указаны без НДС. Точная стоимость зависит от объёма работ и сложности проекта.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Смотреть все услуги подробнее
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
