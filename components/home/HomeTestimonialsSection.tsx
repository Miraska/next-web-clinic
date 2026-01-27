"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function HomeTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeGuarantee, setActiveGuarantee] = useState(0);

  const guarantees = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Гарантия 3 месяца",
      description: "После запуска проекта бесплатно исправляем любые баги и ошибки. Если что-то не работает как надо — починим без дополнительной оплаты.",
      details: [
        "Исправление любых ошибок в коде",
        "Устранение проблем совместимости",
        "Восстановление при сбоях",
        "Консультации по работе с проектом"
      ],
      color: "emerald",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Фиксированная цена",
      description: "Стоимость проекта фиксируется в договоре до начала работ. Мы не повышаем цену в процессе разработки, даже если недооценили объём работ.",
      details: [
        "Цена указана в договоре",
        "Никаких скрытых платежей",
        "Оплата по этапам: 50/50",
        "Детальная смета в приложении"
      ],
      color: "blue",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Код — ваша собственность",
      description: "Все исходные коды, макеты, документация передаются вам по завершении проекта. Вы можете продолжить разработку самостоятельно или с другой командой.",
      details: [
        "Полные исходные коды",
        "Доступы ко всем сервисам",
        "Техническая документация",
        "Инструкции по деплою"
      ],
      color: "violet",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Соблюдение сроков",
      description: "Сроки фиксируются в договоре с учётом буфера на непредвиденные ситуации. Если задерживаемся по нашей вине — предоставляем компенсацию.",
      details: [
        "Реалистичное планирование",
        "Еженедельные отчёты о прогрессе",
        "Раннее предупреждение о рисках",
        "Компенсация за просрочку"
      ],
      color: "orange",
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

  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-200" },
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", light: "bg-violet-50", border: "border-violet-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", light: "bg-orange-50", border: "border-orange-200" },
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
            Гарантии и отзывы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Гарантии, которые <span className="text-blue-600">работают</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Не просто слова — конкретные обязательства, зафиксированные в договоре.
          </p>
        </motion.div>

        {/* Guarantees */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Guarantee tabs - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex flex-col gap-3"
          >
            {guarantees.map((guarantee, index) => {
              const colors = colorClasses[guarantee.color];
              const isActive = activeGuarantee === index;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveGuarantee(index)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 ${
                    isActive 
                      ? `bg-white border-2 ${colors.border} shadow-lg` 
                      : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? `${colors.bg} ${colors.text}` : 'bg-slate-200 text-slate-500'
                    }`}>
                      {guarantee.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                        {guarantee.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-1">{guarantee.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Active guarantee detail - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <motion.div
              key={activeGuarantee}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-8 rounded-2xl ${colorClasses[guarantees[activeGuarantee].color].light} border ${colorClasses[guarantees[activeGuarantee].color].border} h-full`}
            >
              <div className={`w-16 h-16 rounded-2xl ${colorClasses[guarantees[activeGuarantee].color].bg} ${colorClasses[guarantees[activeGuarantee].color].text} flex items-center justify-center mb-6`}>
                {guarantees[activeGuarantee].icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{guarantees[activeGuarantee].title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{guarantees[activeGuarantee].description}</p>
              
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Что это значит:</h4>
              <ul className="space-y-3">
                {guarantees[activeGuarantee].details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className={`w-5 h-5 ${colorClasses[guarantees[activeGuarantee].color].text} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Mobile guarantees */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-4">
            {guarantees.map((guarantee, index) => {
              const colors = colorClasses[guarantee.color];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className={`p-5 rounded-2xl ${colors.light} border ${colors.border}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}>
                    {guarantee.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-slate-600">{guarantee.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Что говорят клиенты</h3>
            <p className="text-slate-500 text-sm">Честные отзывы без приукрашивания</p>
          </div>

          {/* Testimonials slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto"
              >
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                  {/* Quote icon */}
                  <svg className="w-10 h-10 text-slate-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                      <span className="text-slate-600 font-bold">
                        {testimonials[currentTestimonial].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonials[currentTestimonial].author}</div>
                      <div className="text-sm text-slate-500">
                        {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentTestimonial === index 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-all shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-all shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
