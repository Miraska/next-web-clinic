"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ui/ConsultationModal";

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
    color: "blue",
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
    color: "emerald",
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
    color: "violet",
    bestFor: "Для продаж онлайн с автоматизацией",
  },
];

const additionalServices = [
  { name: "CRM / Личный кабинет", price: "от 400 000 ₽", icon: "📊" },
  { name: "Telegram / WhatsApp бот", price: "от 80 000 ₽", icon: "🤖" },
  { name: "Интеграция с 1С", price: "от 50 000 ₽", icon: "🔗" },
  { name: "SEO-оптимизация", price: "от 50 000 ₽", icon: "🔍" },
  { name: "Техническая поддержка", price: "от 25 000 ₽/мес", icon: "🔧" },
  { name: "Веб-приложение", price: "от 300 000 ₽", icon: "⚙️" },
];

export default function HomePricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorClasses: Record<string, { text: string; bg: string; light: string; border: string }> = {
    blue: { text: "text-blue-600", bg: "bg-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    emerald: { text: "text-emerald-600", bg: "bg-emerald-600", light: "bg-emerald-50", border: "border-emerald-200" },
    violet: { text: "text-violet-600", bg: "bg-violet-600", light: "bg-violet-50", border: "border-violet-200" },
  };

  return (
    <>
      <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Прозрачные цены
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Типовые решения и <span className="text-blue-600">стоимость</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ориентировочные цены на популярные услуги. 
              Точная стоимость — после обсуждения вашей задачи.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {pricingPlans.map((plan, index) => {
              const colors = colorClasses[plan.color];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className={`px-4 py-1.5 ${colors.bg} text-white text-sm font-semibold rounded-full shadow-lg`}>
                        Популярный выбор
                      </span>
                    </div>
                  )}

                  <div className={`relative p-6 lg:p-8 rounded-2xl bg-white border-2 transition-all duration-300 h-full flex flex-col hover:shadow-xl ${
                    plan.popular 
                      ? `${colors.border} shadow-lg` 
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
                        <span className={`text-4xl font-bold ${colors.text}`}>
                          {plan.price}
                        </span>
                        <span className="text-xl text-slate-400">{plan.currency}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {plan.duration}
                      </div>
                    </div>

                    {/* Best for */}
                    <div className={`px-3 py-2 rounded-lg ${colors.light} mb-6`}>
                      <p className={`text-sm ${colors.text} font-medium`}>{plan.bestFor}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 opacity-50">
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-slate-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className={`w-full py-3.5 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 ${
                        plan.popular
                          ? `${colors.bg} text-white hover:opacity-90 shadow-lg`
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                      data-cta={`pricing-${plan.name.toLowerCase()}`}
                    >
                      Обсудить проект
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Дополнительные услуги</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{service.icon}</span>
                    <div>
                      <div className="text-slate-700 font-medium">{service.name}</div>
                      <div className="text-blue-600 text-sm font-semibold">{service.price}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-slate-400 text-sm mb-4">
              Цены указаны без НДС. Точная стоимость зависит от объёма работ и сложности проекта.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Смотреть все услуги подробнее
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
