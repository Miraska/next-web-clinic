"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function AboutComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Честность",
      description: "Говорим как есть. Если не можем помочь или видим риски — скажем прямо.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Ответственность",
      description: "Делаем работу качественно, потому что нам важна репутация.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Простота",
      description: "Объясняем сложные вещи простыми словами. Без пафоса и лишних терминов.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Партнёрство",
      description: "Работаем вместе с вами, а не для вас. Лучший результат — совместный.",
    },
  ];

  const whatWeDo = [
    { icon: "🌐", title: "Сайты", desc: "Корпоративные сайты, лендинги, интернет-магазины" },
    { icon: "📊", title: "CRM/ERP", desc: "Системы управления клиентами, продажами, учётом" },
    { icon: "⚙️", title: "Автоматизация", desc: "Интеграции, боты, автоматические отчёты" },
    { icon: "🔧", title: "Поддержка", desc: "Развитие и сопровождение существующих проектов" },
  ];

  const whatWeDontDo = [
    "«Срочно за 3 дня»",
    "Демпинг цен в ущерб качеству",
    "Проекты без чёткого ТЗ",
    "Обещать то, что не сможем сделать",
  ];

  const workProcess = [
    { num: "01", title: "Знакомство", desc: "Узнаём о вашей задаче и предлагаем решение" },
    { num: "02", title: "Планирование", desc: "Согласовываем план, цену и сроки" },
    { num: "03", title: "Разработка", desc: "Делаем работу, регулярно показываем прогресс" },
    { num: "04", title: "Запуск", desc: "Запускаем проект и помогаем с ним после" },
  ];

  const guarantees = [
    { title: "Фиксированная цена", desc: "Называем стоимость до начала работ. Никаких сюрпризов." },
    { title: "Код остаётся у вас", desc: "Передаём все исходники. Вы не привязаны к нам." },
    { title: "3 месяца гарантии", desc: "Бесплатно исправляем баги после запуска." },
  ];

  return (
    <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
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

        {/* Why small team is good */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Почему небольшая команда — это хорошо</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Общаетесь напрямую с теми, кто делает проект",
              "Нет бюрократии и долгих согласований",
              "Быстрее реагируем на ваши пожелания",
              "Личная ответственность за результат",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What we do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Чем мы занимаемся</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatWeDo.map((item, index) => (
              <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Наши ценности</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What we don't do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-16 p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Что мы НЕ делаем</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whatWeDontDo.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Work Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Как мы работаем</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workProcess.map((step, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white border border-slate-200">
                <div className="text-4xl font-bold text-blue-600 mb-3">{step.num}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Гарантии</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {guarantees.map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto p-6 lg:p-8 rounded-2xl bg-blue-50 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Готовы познакомиться?
            </h3>
            <p className="text-slate-600 mb-6">
              Расскажите о вашей задаче — обсудим, чем можем помочь.
              Первая консультация бесплатная.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm"
              data-cta="about-contact"
            >
              Связаться с нами
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
