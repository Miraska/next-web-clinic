"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HomeWhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const trustReasons = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Работаем по договору",
      description: "Официальный договор с прописанным ТЗ, сроками и стоимостью. Вы защищены юридически.",
      color: "blue",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Фиксированная цена",
      description: "Называем стоимость до начала работ и не меняем её в процессе. Никаких сюрпризов.",
      color: "emerald",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Код остаётся у вас",
      description: "Передаём все исходники, доступы и документацию. Вы не привязаны к нам.",
      color: "violet",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Гарантия 3 месяца",
      description: "Бесплатно исправляем баги после запуска. Если что-то сломается — починим.",
      color: "orange",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Прямое общение",
      description: "Работаете напрямую с разработчиками, а не через менеджеров. Быстро решаем вопросы.",
      color: "cyan",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Прозрачный процесс",
      description: "Регулярно показываем прогресс и демо. Вы в курсе, что происходит с проектом.",
      color: "rose",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; light: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", light: "bg-emerald-50" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", light: "bg-violet-50" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", light: "bg-orange-50" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", light: "bg-cyan-50" },
    rose: { bg: "bg-rose-100", text: "text-rose-600", light: "bg-rose-50" },
  };

  const honestFacts = [
    {
      title: "Мы не агентство с сотней сотрудников",
      description: "Небольшая команда — это не минус. Вы общаетесь напрямую с теми, кто делает проект, без посредников и бюрократии.",
    },
    {
      title: "Не берём все проекты подряд",
      description: "Выбираем проекты, где можем дать максимум пользы. Если видим, что не подходим — честно скажем.",
    },
    {
      title: "Не обещаем невозможного",
      description: "Реалистичные сроки, понятные цены, честная оценка возможностей. Без маркетингового пафоса.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50/30 to-transparent" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Почему мы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Почему нам можно <span className="text-blue-600">доверять</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Не красивые слова, а конкретные гарантии. 
            Мы строим долгосрочные отношения, поэтому репутация важнее быстрой выгоды.
          </p>
        </motion.div>

        {/* Trust Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-12 lg:mb-16">
          {trustReasons.map((reason, index) => {
            const colors = colorClasses[reason.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-2xl ${colors.light} border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300 h-full`}>
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Honest About Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Честно о себе</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {honestFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="p-4 rounded-xl bg-white border border-slate-100"
              >
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">{fact.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 mb-4">Работаем с современными технологиями</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Python", "Tailwind CSS", "Docker"].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 font-medium hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
