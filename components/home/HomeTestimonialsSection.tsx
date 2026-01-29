"use client";
import { useRef, useState } from "react";
import {
  Shield,
  DollarSign,
  Code,
  Clock,
  Check,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

export default function HomeTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeGuarantee, setActiveGuarantee] = useState(0);

  const guarantees = [
    {
      icon: Shield,
      title: "Гарантия 3 месяца",
      description: "После запуска проекта бесплатно исправляем любые баги и ошибки. Если что-то не работает как надо — починим без дополнительной оплаты.",
      details: [
        "Исправление любых ошибок в коде",
        "Устранение проблем совместимости",
        "Восстановление при сбоях",
        "Консультации по работе с проектом"
      ],
    },
    {
      icon: DollarSign,
      title: "Фиксированная цена",
      description: "Стоимость проекта фиксируется в договоре до начала работ. Мы не повышаем цену в процессе разработки, даже если недооценили объём работ.",
      details: [
        "Цена указана в договоре",
        "Никаких скрытых платежей",
        "Оплата по этапам: 50/50",
        "Детальная смета в приложении"
      ],
    },
    {
      icon: Code,
      title: "Код — ваша собственность",
      description: "Все исходные коды, макеты, документация передаются вам по завершении проекта. Вы можете продолжить разработку самостоятельно или с другой командой.",
      details: [
        "Полные исходные коды",
        "Доступы ко всем сервисам",
        "Техническая документация",
        "Инструкции по деплою"
      ],
    },
    {
      icon: Clock,
      title: "Соблюдение сроков",
      description: "Сроки фиксируются в договоре с учётом буфера на непредвиденные ситуации. Если задерживаемся по нашей вине — предоставляем компенсацию.",
      details: [
        "Реалистичное планирование",
        "Еженедельные отчёты о прогрессе",
        "Раннее предупреждение о рисках",
        "Компенсация за просрочку"
      ],
    },
  ];

  const testimonials = [
    {
      text: "Ребята сделали нам CRM для логистики. Всё чётко по ТЗ, без лишних вопросов. Теперь экономим часы на рутине каждый день.",
      author: "Алексей К.",
      position: "Руководитель отдела логистики",
      company: "Транспортная компания",
      rating: 5,
    },
    {
      text: "Долго искали подрядчика на интернет-магазин. Эти не обещали горы — просто взяли и сделали. Работает, продаёт, не падает.",
      author: "Мария С.",
      position: "Владелец бизнеса",
      company: "Магазин товаров для дома",
      rating: 5,
    },
    {
      text: "Честный подход: сказали что реально сделать за наш бюджет, что нет. Не впаривали лишнего. Рекомендую.",
      author: "Дмитрий Н.",
      position: "Директор",
      company: "Строительная компания",
      rating: 5,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Защита клиента
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Гарантии в <span className="text-blue-600">договоре</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Каждое обязательство прописано юридически. Вы защищены на всех этапах работы.
          </p>
        </div>

        {/* Guarantees */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Guarantee tabs - Desktop */}
          <div className="hidden lg:flex flex-col gap-3">
            {guarantees.map((guarantee, index) => {
              const isActive = activeGuarantee === index;
              const IconComponent = guarantee.icon;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveGuarantee(index)}
                  className={`p-5 rounded-xl text-left transition-colors ${
                    isActive 
                      ? "bg-white border border-blue-200 shadow-sm" 
                      : "bg-white border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`font-semibold transition-colors ${isActive ? "text-slate-900" : "text-slate-600"}`}>
                        {guarantee.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-1">{guarantee.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active guarantee detail - Desktop */}
          <div className="hidden lg:block">
            {(() => {
              const ActiveIcon = guarantees[activeGuarantee].icon;
              return (
                <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 h-full">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                    <ActiveIcon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{guarantees[activeGuarantee].title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{guarantees[activeGuarantee].description}</p>
                  
                  <h4 className="text-sm font-medium text-slate-900 mb-3">Что это значит:</h4>
                  <ul className="space-y-3">
                    {guarantees[activeGuarantee].details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}
          </div>

          {/* Mobile guarantees */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-4">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white border border-slate-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-slate-600">{guarantee.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Что говорят клиенты</h3>
            <p className="text-slate-500 text-sm">Честные отзывы без приукрашивания</p>
          </div>

          {/* Testimonials slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="max-w-3xl mx-auto">
                <div className="p-8 rounded-2xl bg-white border border-slate-200">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-slate-200 mb-4" />
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {testimonials[currentTestimonial].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{testimonials[currentTestimonial].author}</div>
                      <div className="text-sm text-slate-500">
                        {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentTestimonial === index 
                      ? "bg-blue-600 w-8" 
                      : "bg-slate-300 hover:bg-slate-400 w-2.5"
                  }`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-12 w-10 h-10 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-12 w-10 h-10 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
