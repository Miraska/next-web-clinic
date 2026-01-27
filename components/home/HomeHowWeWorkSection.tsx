"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function HomeHowWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  useEffect(() => {
    if (!isInView) return;
    if (isPaused) return;

    const id = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, [isInView, isPaused, steps.length]);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsPaused(document.visibilityState !== "visible");
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const goPrev = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  const goNext = () => setActiveStep((prev) => (prev + 1) % steps.length);

  const active = steps[activeStep];
  const activeColors = colorClasses[active.color];

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

          {/* JS-driven auto-switching steps (stable, no hover-height hacks) */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            {/* Desktop: list + active card */}
            <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
              <div className="col-span-5">
                <div className="space-y-2">
                  {steps.map((step, index) => {
                    const colors = colorClasses[step.color];
                    const isActive = index === activeStep;

                    return (
                      <button
                        key={step.num}
                        type="button"
                        onClick={() => setActiveStep(index)}
                        className={[
                          "w-full text-left rounded-2xl border transition-all duration-200",
                          "px-4 py-3 flex items-center gap-4",
                          isActive ? `bg-white shadow-lg ${colors.border}` : "bg-white/60 border-slate-200 hover:bg-white",
                        ].join(" ")}
                        aria-current={isActive ? "step" : undefined}
                      >
                        <div className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center font-bold shrink-0`}>
                          {step.num}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold text-slate-900 truncate">{step.title}</div>
                            {isActive && (
                              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.light} ${colors.text}`}>
                                сейчас
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-slate-500 truncate">{step.subtitle}</div>
                        </div>
                        <div className="ml-auto text-xs text-slate-400 whitespace-nowrap">{step.duration}</div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                      aria-label="Предыдущий шаг"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                      aria-label="Следующий шаг"
                    >
                      →
                    </button>
                    <div className="text-xs text-slate-400 ml-2">
                      {isPaused ? "Пауза" : "Авто"} • {activeStep + 1}/{steps.length}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveStep(i)}
                        className={[
                          "h-2 rounded-full transition-all",
                          i === activeStep ? "w-8 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400",
                        ].join(" ")}
                        aria-label={`Перейти к шагу ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-7">
                <motion.div
                  key={active.num}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35 }}
                  className={`rounded-3xl bg-white border ${activeColors.border} shadow-xl p-8`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${activeColors.light} ${activeColors.text} flex items-center justify-center`}>
                        {active.icon}
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">{active.subtitle}</div>
                        <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                          {active.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-sm text-slate-500 whitespace-nowrap">{active.duration}</div>
                  </div>

                  <p className="mt-6 text-slate-700 leading-relaxed">{active.description}</p>

                  <div className="mt-6">
                    <div className={`inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl ${activeColors.light} ${activeColors.text}`}>
                      <span aria-hidden>→</span>
                      <span>{active.result}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile: one card + controls */}
            <div className="lg:hidden">
              <motion.div
                key={active.num}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl bg-white border ${activeColors.border} shadow-lg p-5`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-10 h-10 rounded-xl ${activeColors.bg} ${activeColors.text} flex items-center justify-center font-bold`}>
                      {active.num}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900 truncate">{active.title}</div>
                      <div className="text-sm text-slate-500 truncate">{active.subtitle}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 whitespace-nowrap">{active.duration}</div>
                </div>

                <p className="mt-4 text-slate-700 text-sm leading-relaxed">{active.description}</p>

                <div className={`mt-4 inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-lg ${activeColors.light} ${activeColors.text}`}>
                  <span aria-hidden>→</span>
                  <span>{active.result}</span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                      aria-label="Предыдущий шаг"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                      aria-label="Следующий шаг"
                    >
                      →
                    </button>
                    <div className="text-xs text-slate-400">
                      {activeStep + 1}/{steps.length}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveStep(i)}
                        className={[
                          "h-2 rounded-full transition-all",
                          i === activeStep ? "w-7 bg-blue-600" : "w-2 bg-slate-300",
                        ].join(" ")}
                        aria-label={`Перейти к шагу ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {steps.map((step, i) => {
                  const isActive = i === activeStep;
                  return (
                    <button
                      key={step.num}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={[
                        "text-left rounded-xl border px-3 py-2 transition-colors",
                        isActive ? "bg-slate-900 text-white border-slate-900" : "bg-white border-slate-200 text-slate-700",
                      ].join(" ")}
                    >
                      <div className="text-xs opacity-80">{step.num}</div>
                      <div className="text-sm font-semibold truncate">{step.title}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => {
                setActiveStep(0);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20"
              data-cta="how-we-work-start"
            >
              Начать с первого шага
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <p className="text-slate-400 text-sm mt-3">Бесплатная консультация • Ответ за 2 часа</p>
          </motion.div> */}
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
