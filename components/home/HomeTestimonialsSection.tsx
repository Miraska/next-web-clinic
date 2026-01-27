"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HomeTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const guarantees = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Работаем по договору",
      description: "Официально, с чёткими условиями. Все обязательства прописаны, цена фиксирована.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      title: "Код остаётся у вас",
      description: "Передаём все исходники и доступы. Вы не привязаны к нам — можете продолжить с другой командой.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Предоплата не более 30%",
      description: "Основную часть платите после получения результата. Так у нас общая мотивация — сделать хорошо.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "3 месяца гарантии",
      description: "Бесплатно исправляем баги после запуска. Если что-то не работает как договаривались — чиним.",
    },
  ];

  const workApproach = [
    {
      title: "Почему небольшая команда — это хорошо",
      points: [
        "Общаетесь напрямую с теми, кто делает проект",
        "Нет бюрократии и долгих согласований",
        "Быстрее реагируем на ваши пожелания",
        "Личная ответственность за результат",
      ],
    },
    {
      title: "Что важно знать о нас",
      points: [
        "Мы не фрилансеры — работаем официально",
        "Не берём больше проектов, чем можем сделать качественно",
        "Честно говорим, если что-то не наш профиль",
        "Предупреждаем о рисках заранее, а не потом",
      ],
    },
  ];

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
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-4">
            Гарантии и подход
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Почему нам можно <span className="text-blue-600">доверять</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Мы небольшая команда, и это наше преимущество. 
            Вот как мы обеспечиваем надёжность.
          </p>
        </motion.div>

        {/* Guarantees grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                {guarantee.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {guarantee.title}
              </h3>
              <p className="text-sm text-slate-500">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why small team is good */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {workApproach.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-5">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center"
        >
          <div className="p-6 lg:p-8 rounded-2xl bg-blue-50 border border-blue-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Хотите убедиться?
            </h3>
            <p className="text-slate-600 mb-6">
              Давайте созвонимся на 15 минут. Расскажите о задаче — 
              мы честно скажем, сможем ли помочь и как.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm"
              data-cta="guarantees-consultation"
            >
              Записаться на консультацию
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-xs text-slate-400 mt-3">
              Бесплатно, без обязательств
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
