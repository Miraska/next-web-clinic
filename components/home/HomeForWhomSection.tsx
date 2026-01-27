"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HomeForWhomSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const goodFor = [
    {
      text: "У вас есть бизнес или конкретная идея",
      subtext: "Не просто «хочу сайт», а понимание зачем он нужен"
    },
    {
      text: "Вам важен результат, а не процесс",
      subtext: "Хотите получить работающий инструмент, а не отчёты"
    },
    {
      text: "Готовы к диалогу и обратной связи",
      subtext: "Лучший результат — когда работаем вместе"
    },
    {
      text: "Планируете развивать проект",
      subtext: "Делаем так, чтобы потом было легко добавлять новое"
    },
  ];

  const notFor = [
    {
      text: "Нужен самый дешёвый вариант",
      subtext: "Мы не демпингуем — делаем качественно"
    },
    {
      text: "«Сделайте за 3 дня»",
      subtext: "Хорошая работа требует времени"
    },
    {
      text: "Нет понимания задачи",
      subtext: "Но можем помочь разобраться — это отдельная услуга"
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
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet-50 text-violet-600 text-sm font-medium mb-4">
            Будем честны
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Подходим ли мы <span className="text-blue-600">вам</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Честно рассказываем, с кем нам комфортно работать. 
            Так мы экономим время — и ваше, и своё.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Good for */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 lg:p-8 rounded-2xl bg-emerald-50 border border-emerald-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Мы подходим, если</h3>
            </div>
            
            <div className="space-y-4">
              {goodFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium">{item.text}</div>
                    <div className="text-sm text-slate-600">{item.subtext}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Not for */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Скорее не подходим, если</h3>
            </div>
            
            <div className="space-y-4">
              {notFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                  <div>
                    <div className="text-slate-700 font-medium">{item.text}</div>
                    <div className="text-sm text-slate-500">{item.subtext}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                Это не значит, что мы не можем помочь — просто будьте готовы к честному разговору о том, что реально возможно.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Don't know what you need? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-6 lg:p-8 rounded-2xl bg-blue-50 border border-blue-100"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Не знаете, что именно вам нужно?
                </h3>
                <p className="text-slate-600">
                  Это нормально. Расскажите о задаче — поможем разобраться, 
                  что подойдёт лучше всего. Первая консультация бесплатная.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 whitespace-nowrap shadow-sm"
              data-cta="for-whom-question"
            >
              Задать вопрос
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
