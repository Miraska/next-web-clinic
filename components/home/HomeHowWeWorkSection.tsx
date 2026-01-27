"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

export default function HomeHowWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Вы рассказываете задачу",
      description: "Созваниваемся или переписываемся. Вы объясняете, что нужно сделать, какая проблема, какой результат хотите получить.",
      whatYouGet: "Понимание, сможем ли мы помочь",
      duration: "1-2 дня",
      color: "blue",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Мы предлагаем решение",
      description: "Рассказываем, как можно сделать вашу задачу, сколько это будет стоить и сколько займёт времени. Объясняем простыми словами.",
      whatYouGet: "Чёткое предложение с ценой и сроками",
      duration: "2-5 дней",
      color: "emerald",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Делаем работу",
      description: "Работаем над проектом, регулярно показываем промежуточные результаты. Вы видите прогресс и можете вносить коррективы.",
      whatYouGet: "Регулярные демонстрации и отчёты",
      duration: "4-12 недель",
      color: "violet",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      number: "4",
      title: "Запускаем и помогаем",
      description: "Размещаем проект в интернете, показываем как им пользоваться. После запуска 3 месяца бесплатно исправляем ошибки.",
      whatYouGet: "Работающий проект + 3 месяца гарантии",
      duration: "3-7 дней",
      color: "orange",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", activeBg: "bg-blue-600" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", activeBg: "bg-emerald-600" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200", activeBg: "bg-violet-600" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", activeBg: "bg-orange-600" },
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-4">
            Как это происходит
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Простой и понятный <span className="text-blue-600">процесс</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Никакой бюрократии и непонятных терминов. 
            Вы всегда знаете, что происходит с проектом.
          </p>
        </motion.div>

        {/* Steps with Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-4">
              {steps.map((step, index) => {
                const colors = colorClasses[step.color as keyof typeof colorClasses];
                const isActive = activeStep === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setActiveStep(index)}
                    className={`relative pl-16 lg:pl-20 py-5 lg:py-6 pr-5 lg:pr-6 rounded-2xl cursor-pointer transition-all duration-200 ${
                      isActive
                        ? `bg-white border-2 ${colors.border} shadow-sm`
                        : "bg-transparent border-2 border-transparent hover:bg-white/50"
                    }`}
                  >
                    {/* Number circle */}
                    <div 
                      className={`absolute left-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-200 ${
                        isActive 
                          ? `${colors.activeBg} text-white shadow-lg` 
                          : "bg-white border-2 border-slate-200 text-slate-400"
                      }`}
                    >
                      {isActive ? step.icon : step.number}
                    </div>
                    
                    <div>
                      <h3 className={`text-lg font-bold mb-2 transition-colors ${isActive ? colors.text : "text-slate-900"}`}>
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Expanded content */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4 pt-4 border-t border-slate-100"
                        >
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-slate-600">{step.whatYouGet}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-slate-400">{step.duration}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right side - Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:sticky lg:top-32 space-y-5"
          >
            {/* Timeline visual */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Примерные сроки
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Лендинг / сайт-визитка", time: "3-6 недель" },
                  { label: "Интернет-магазин", time: "2-3 месяца" },
                  { label: "CRM / личный кабинет", time: "3-4 месяца" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-slate-600 text-sm">{item.label}</span>
                    <span className="text-blue-600 text-sm font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's important */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Что важно знать
              </h3>
              <ul className="space-y-3">
                {[
                  "Цена фиксируется в договоре до начала работ",
                  "Показываем промежуточные результаты каждую неделю",
                  "Можно вносить изменения в процессе работы",
                  "Не берём больше 30% предоплаты",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <p className="text-slate-700 mb-4">
                Готовы обсудить вашу задачу?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all text-sm shadow-sm"
                data-cta="how-we-work-cta"
              >
                Рассказать о проекте
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
