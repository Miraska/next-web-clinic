"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function HomeFAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const faqCategories = [
    { id: "general", label: "Общие вопросы" },
    { id: "process", label: "Процесс работы" },
    { id: "payment", label: "Оплата и гарантии" },
    { id: "tech", label: "Техническое" },
  ];

  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqItems: Record<string, Array<{ question: string; answer: string }>> = {
    general: [
      {
        question: "Какие проекты вы реализуете?",
        answer: "Сайты различной сложности, интернет-магазины, CRM и ERP системы, веб-приложения, чат-боты, API и интеграции. Для уточнения возможности реализации вашей задачи свяжитесь с нами."
      },
      {
        question: "Как определяется стоимость проекта?",
        answer: "Стоимость зависит от объёма работ, функциональности и сложности проекта. После обсуждения задачи формируем коммерческое предложение с детализацией."
      },
      {
        question: "Какие сроки разработки?",
        answer: "Сроки определяются после анализа задачи. Ориентировочно: лендинг — 2-3 недели, корпоративный сайт — 4-8 недель, интернет-магазин — 2-4 месяца. Точные сроки фиксируются в договоре."
      },
      {
        question: "Работаете ли вы удалённо?",
        answer: "Да, работаем с клиентами из любых регионов. Коммуникация ведётся онлайн: видеозвонки, мессенджеры, электронная почта. Результаты демонстрируются дистанционно."
      },
    ],
    process: [
      {
        question: "Как начать работу?",
        answer: "Свяжитесь с нами через форму на сайте, Telegram или электронную почту. Опишите задачу — проведём консультацию и подготовим предложение."
      },
      {
        question: "Нужно ли готовое техническое задание?",
        answer: "Не обязательно. Достаточно описать задачу своими словами. Мы структурируем информацию и подготовим техническое задание для согласования."
      },
      {
        question: "Как часто демонстрируется прогресс?",
        answer: "Работаем итерациями с регулярными демонстрациями. Периодичность согласовывается в начале проекта. Стандартно — каждые 1-2 недели."
      },
      {
        question: "Как происходит приёмка работ?",
        answer: "Каждый этап согласовывается перед переходом к следующему. При выявлении несоответствий техническому заданию вносятся корректировки."
      },
      {
        question: "Возможны ли изменения в процессе работы?",
        answer: "Небольшие корректировки в рамках согласованного объёма возможны. Существенные изменения требуют дополнительного согласования условий."
      },
    ],
    payment: [
      {
        question: "Каков порядок оплаты?",
        answer: "Условия оплаты согласовываются индивидуально и фиксируются в договоре. Возможна поэтапная оплата по мере выполнения работ."
      },
      {
        question: "Заключаете ли вы договор?",
        answer: "Да, работаем по официальному договору. В договоре фиксируются объём работ, сроки, этапы и условия сотрудничества."
      },
      {
        question: "Что включает техническая поддержка?",
        answer: "Условия технической поддержки оговариваются в договоре. Стандартно включает исправление ошибок в коде в течение согласованного периода."
      },
      {
        question: "Какие условия расторжения договора?",
        answer: "Условия расторжения прописываются в договоре. При необходимости досрочного завершения работ производится взаиморасчёт согласно выполненному объёму."
      },
    ],
    tech: [
      {
        question: "Какие технологии используются?",
        answer: "React, Next.js, TypeScript для фронтенда; Node.js, Python для бэкенда; PostgreSQL, MongoDB для баз данных. Технический стек подбирается под задачу."
      },
      {
        question: "Передаётся ли исходный код?",
        answer: "Да, по завершении проекта передаём исходный код, доступы к репозиторию, серверам и базам данных, а также техническую документацию."
      },
      {
        question: "Помогаете ли с инфраструктурой?",
        answer: "Да, помогаем с выбором и настройкой хостинга, регистрацией домена, настройкой SSL-сертификата и другой инфраструктуры."
      },
      {
        question: "Выполняется ли SEO-оптимизация?",
        answer: "Базовая техническая SEO-оптимизация входит в стандартный объём работ: корректная структура, мета-теги, оптимизация скорости загрузки, адаптивность."
      },
      {
        question: "Адаптивны ли проекты для мобильных устройств?",
        answer: "Да, все проекты разрабатываются с адаптивным дизайном для корректного отображения на различных устройствах."
      },
    ],
  };

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/30 to-transparent pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/50 text-blue-600 text-sm font-medium mb-4 shadow-sm">
            Вопросы и ответы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Часто задаваемые{" "}
            <span className="text-gradient-blue">вопросы</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ответы на типичные вопросы о процессе работы. Для уточнения деталей свяжитесь с нами.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenItems([0]);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? index % 2 === 0 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-teal-600 text-white shadow-lg shadow-teal-600/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqItems[activeCategory].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-all"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-slate-900 pr-4">{item.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-all ${
                    openItems.includes(index) ? "rotate-180 border-blue-200 bg-blue-50" : ""
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-colors ${
                      openItems.includes(index) ? "text-blue-600" : "text-slate-500"
                    }`} />
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="h-px bg-slate-200 mb-4" />
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions - enhanced CTA card */}
        <div className={`mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl shadow-blue-600/25 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/20 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl mb-1">Есть вопросы?</p>
                <p className="text-white/80">Свяжитесь с нами для получения дополнительной информации</p>
              </div>
              <a
                href="https://t.me/webclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-lg whitespace-nowrap"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                </svg>
                Связаться
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
