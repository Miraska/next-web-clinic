"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function HomeHowWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      title: "Знакомство",
      subtitle: "Бесплатная консультация",
      duration: "30-60 минут",
      description: "Созваниваемся или переписываемся. Вы рассказываете о бизнесе и задаче, мы задаём уточняющие вопросы. Понимаем, можем ли помочь.",
      result: "Понимание задачи и предварительная оценка",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "blue",
    },
    {
      num: "02",
      title: "Анализ и КП",
      subtitle: "Детальное предложение",
      duration: "2-5 дней",
      description: "Готовим коммерческое предложение: что будем делать, какие технологии, сколько времени займёт и сколько стоит. Без скрытых условий.",
      result: "Чёткое ТЗ с ценой и сроками",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "emerald",
    },
    {
      num: "03",
      title: "Договор",
      subtitle: "Официальное оформление",
      duration: "1-2 дня",
      description: "Подписываем договор, где прописаны все условия: объём работ, сроки, стоимость, гарантии. Вносите предоплату 50%, мы приступаем.",
      result: "Юридическая защита обеих сторон",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "violet",
    },
    {
      num: "04",
      title: "Разработка",
      subtitle: "Итерационный процесс",
      duration: "По плану",
      description: "Работаем спринтами: регулярно показываем прогресс, собираем обратную связь, вносим корректировки. Вы всегда в курсе статуса.",
      result: "Демо каждые 1-2 недели",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "orange",
    },
    {
      num: "05",
      title: "Тестирование",
      subtitle: "Проверка качества",
      duration: "1-2 недели",
      description: "Тестируем на разных устройствах, исправляем баги, оптимизируем производительность. Вы проверяете и принимаете работу.",
      result: "Готовый к запуску продукт",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: "cyan",
    },
    {
      num: "06",
      title: "Запуск",
      subtitle: "Старт и поддержка",
      duration: "1-3 дня",
      description: "Размещаем на хостинге, настраиваем домен, подключаем аналитику. Обучаем вас работе с админкой. Начинается гарантийный период.",
      result: "Работающий проект + 3 месяца гарантии",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "rose",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-200" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", light: "bg-violet-50", border: "border-violet-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", light: "bg-orange-50", border: "border-orange-200" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", light: "bg-cyan-50", border: "border-cyan-200" },
    rose: { bg: "bg-rose-100", text: "text-rose-600", light: "bg-rose-50", border: "border-rose-200" },
  };

  return (
    <>
      <section ref={sectionRef} className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              Процесс работы
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Как мы <span className="text-blue-600">работаем</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Простой и понятный процесс без бюрократии. 
              Вы всегда знаете, что происходит с проектом.
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 rounded-full" />
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 -translate-y-1/2 rounded-full origin-left"
              />

              {/* Steps */}
              <div className="grid grid-cols-6 gap-4">
                {steps.map((step, index) => {
                  const colors = colorClasses[step.color];
                  const isActive = activeStep === index;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => setActiveStep(null)}
                      className="relative pt-8"
                    >
                      {/* Step number circle */}
                      <motion.div 
                        animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center font-bold text-lg shadow-lg z-10 transition-all duration-300 ${isActive ? 'ring-4 ring-white' : ''}`}
                      >
                        {step.num}
                      </motion.div>

                      {/* Card */}
                      <div className={`p-5 rounded-2xl transition-all duration-300 ${isActive ? `bg-white shadow-xl border ${colors.border}` : 'bg-white/70 border border-transparent'}`}>
                        <div className={`w-10 h-10 rounded-xl ${colors.light} ${colors.text} flex items-center justify-center mb-3`}>
                          {step.icon}
                        </div>
                        <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                        <p className="text-xs text-slate-400 mb-2">{step.subtitle}</p>
                        
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={isActive ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-slate-600 mb-3">{step.description}</p>
                          <div className={`text-xs ${colors.text} font-medium px-2 py-1 ${colors.light} rounded-md inline-block`}>
                            → {step.result}
                          </div>
                        </motion.div>

                        {!isActive && (
                          <p className="text-xs text-slate-400 mt-1">{step.duration}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex gap-4"
                >
                  {/* Number & Line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                      {step.num}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-200 my-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-6 flex-1">
                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-slate-900">{step.title}</h3>
                        <span className="text-xs text-slate-400">{step.duration}</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">{step.subtitle}</p>
                      <p className="text-sm text-slate-600 mb-3">{step.description}</p>
                      <div className={`text-xs ${colors.text} font-medium px-2 py-1 ${colors.light} rounded-md inline-block`}>
                        → {step.result}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20"
              data-cta="how-we-work-start"
            >
              Начать с первого шага
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <p className="text-slate-400 text-sm mt-3">Бесплатная консультация • Ответ за 2 часа</p>
          </motion.div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
