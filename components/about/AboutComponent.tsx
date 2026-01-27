"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function AboutComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Честность",
      description: "Говорим как есть. Если видим риски или не можем помочь — скажем прямо. Не обещаем невозможного ради заказа.",
      color: "blue",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Ответственность",
      description: "Берёмся за проект — доводим до конца. Делаем работу качественно, потому что нам важна репутация.",
      color: "emerald",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Простота",
      description: "Объясняем сложные технические вещи простым языком. Без пафоса, без лишних терминов — по делу.",
      color: "violet",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Партнёрство",
      description: "Работаем вместе с вами, а не для вас. Ваша экспертиза в бизнесе + наш опыт в разработке = лучший результат.",
      color: "orange",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; light: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", light: "bg-emerald-50" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", light: "bg-violet-50" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", light: "bg-orange-50" },
  };

  const whatWeDo = [
    { icon: "🌐", title: "Сайты", desc: "Лендинги, сайты-визитки, корпоративные порталы" },
    { icon: "🛒", title: "Интернет-магазины", desc: "E-commerce с оплатой, доставкой, интеграциями" },
    { icon: "📊", title: "CRM/ERP", desc: "Кастомные системы управления бизнесом" },
    { icon: "🤖", title: "Чат-боты", desc: "Telegram, WhatsApp, боты на сайт" },
    { icon: "⚙️", title: "Интеграции", desc: "API, связь систем, автоматизация" },
    { icon: "🔧", title: "Поддержка", desc: "Техническое сопровождение проектов" },
  ];

  const whatWeDontDo = [
    { text: "«Срочно за 3 дня»", note: "Качественная работа требует адекватных сроков" },
    { text: "Демпинг в ущерб качеству", note: "Честная цена за честную работу" },
    { text: "Проекты без понятной задачи", note: "Но можем помочь её сформулировать" },
    { text: "Обещать невозможное", note: "Реалистичные ожидания — залог успеха" },
  ];

  const timeline = [
    { 
      year: "2022", 
      title: "Старт", 
      description: "Начали работать как команда. Первые проекты для малого бизнеса.",
      highlight: false 
    },
    { 
      year: "2023", 
      title: "Рост", 
      description: "Расширили спектр услуг: CRM-системы, интеграции, чат-боты. 10+ проектов.",
      highlight: false 
    },
    { 
      year: "2024", 
      title: "Развитие", 
      description: "Крупные проекты, e-commerce, автоматизация бизнес-процессов.",
      highlight: false 
    },
    { 
      year: "Сейчас", 
      title: "Сегодня", 
      description: "15+ реализованных проектов. Стабильная команда, отлаженные процессы.",
      highlight: true 
    },
  ];

  const guarantees = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Работа по договору", 
      desc: "Официальное оформление, все условия зафиксированы" 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Фиксированная цена", 
      desc: "Называем стоимость до начала, не меняем в процессе" 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Код остаётся у вас", 
      desc: "Передаём все исходники, вы не привязаны к нам" 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Гарантия 3 месяца", 
      desc: "Бесплатно исправляем баги после запуска" 
    },
  ];

  const smallTeamBenefits = [
    "Общаетесь напрямую с теми, кто делает проект",
    "Нет бюрократии и долгих согласований",
    "Быстрее реагируем на ваши пожелания",
    "Личная ответственность за результат",
    "Гибкость в подходе к каждому проекту",
    "Честные цены без накруток на «бренд»",
  ];

  return (
    <>
      <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              О нас
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              Небольшая команда,<br />
              <span className="text-blue-600">большие результаты</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Мы — команда разработчиков, которая делает сайты и веб-системы для бизнеса.
              Работаем с 2022 года, за это время реализовали 15+ проектов.
            </p>
          </motion.div>

          {/* Why small team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="lg:w-1/3">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Почему небольшая команда — это хорошо</h2>
                  <p className="text-slate-600">
                    Многие думают, что чем больше агентство — тем лучше. На практике часто наоборот.
                  </p>
                </div>
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                  {smallTeamBenefits.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white/70">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Наш путь</h2>
            <div className="relative">
              {/* Timeline line - desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 rounded-full" />
              
              <div className="grid lg:grid-cols-4 gap-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Dot - desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className={`w-4 h-4 rounded-full ${item.highlight ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-300'}`} />
                    </div>
                    
                    <div className={`p-6 rounded-2xl ${item.highlight ? 'bg-blue-50 border-2 border-blue-200' : 'bg-slate-50 border border-slate-200'} lg:mt-8`}>
                      <div className={`text-2xl font-bold mb-2 ${item.highlight ? 'text-blue-600' : 'text-slate-400'}`}>
                        {item.year}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What we do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Чем мы занимаемся</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeDo.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Наши ценности</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((value, index) => {
                const colors = colorClasses[value.color];
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className={`p-6 rounded-2xl ${colors.light} border border-transparent hover:border-slate-200 transition-all`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}>
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* What we don't do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                Что мы не делаем
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {whatWeDontDo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-slate-700 font-medium">{item.text}</span>
                      <p className="text-sm text-slate-500 mt-0.5">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Наши гарантии</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {guarantees.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Готовы познакомиться?
                  </h3>
                  <p className="text-blue-100 max-w-xl">
                    Расскажите о вашей задаче — обсудим, чем можем помочь.
                    Первая консультация бесплатная.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 whitespace-nowrap"
                    data-cta="about-consultation"
                  >
                    Обсудить проект
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center px-6 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                  >
                    Смотреть проекты
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
