"use client";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import {
  MessageSquare,
  FileText,
  Shield,
  Code,
  ClipboardCheck,
  Zap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function HomeHowWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Знакомство",
      subtitle: "Бесплатная консультация",
      duration: "30-60 минут",
      description: "Созваниваемся или переписываемся. Вы рассказываете о бизнесе и задаче, мы задаём уточняющие вопросы. Понимаем, можем ли помочь.",
      result: "Понимание задачи и предварительная оценка",
      icon: MessageSquare,
    },
    {
      num: "02",
      title: "Анализ и КП",
      subtitle: "Детальное предложение",
      duration: "2-5 дней",
      description: "Готовим коммерческое предложение: что будем делать, какие технологии, сколько времени займёт и сколько стоит. Без скрытых условий.",
      result: "Чёткое ТЗ с ценой и сроками",
      icon: FileText,
    },
    {
      num: "03",
      title: "Договор",
      subtitle: "Официальное оформление",
      duration: "1-2 дня",
      description: "Подписываем договор, где прописаны все условия: объём работ, сроки, стоимость, гарантии. Вносите предоплату 50%, мы приступаем.",
      result: "Юридическая защита обеих сторон",
      icon: Shield,
    },
    {
      num: "04",
      title: "Разработка",
      subtitle: "Итерационный процесс",
      duration: "По плану",
      description: "Работаем спринтами: регулярно показываем прогресс, собираем обратную связь, вносим корректировки. Вы всегда в курсе статуса.",
      result: "Демо каждые 1-2 недели",
      icon: Code,
    },
    {
      num: "05",
      title: "Тестирование",
      subtitle: "Проверка качества",
      duration: "1-2 недели",
      description: "Тестируем на разных устройствах, исправляем баги, оптимизируем производительность. Вы проверяете и принимаете работу.",
      result: "Готовый к запуску продукт",
      icon: ClipboardCheck,
    },
    {
      num: "06",
      title: "Запуск",
      subtitle: "Старт и поддержка",
      duration: "1-3 дня",
      description: "Размещаем на хостинге, настраиваем домен, подключаем аналитику. Обучаем вас работе с админкой. Начинается гарантийный период.",
      result: "Работающий проект + 3 месяца гарантии",
      icon: Zap,
    },
  ];

  const goPrev = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  const goNext = () => setActiveStep((prev) => (prev + 1) % steps.length);

  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <>
      <section ref={sectionRef} className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Процесс работы
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Как мы <span className="text-blue-600">работаем</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Простой и понятный процесс без бюрократии. 
              Вы всегда знаете, что происходит с проектом.
            </p>
          </div>

          {/* Desktop: list + active card */}
          <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
            <div className="col-span-5">
              <div className="space-y-2">
                {steps.map((step, index) => {
                  const isActive = index === activeStep;
                  const StepIcon = step.icon;

                  return (
                    <button
                      key={step.num}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left rounded-xl border transition-colors px-4 py-3 flex items-center gap-4 ${
                        isActive 
                          ? "bg-white shadow-sm border-blue-200" 
                          : "bg-white/60 border-slate-200 hover:bg-white"
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center font-semibold shrink-0 ${
                        isActive ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"
                      }`}>
                        {step.num}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-slate-900 truncate">{step.title}</div>
                          {isActive && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
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
                    className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
                    aria-label="Предыдущий шаг"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
                    aria-label="Следующий шаг"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="text-xs text-slate-400 ml-2">
                    {activeStep + 1}/{steps.length}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeStep ? "w-8 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Перейти к шагу ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-7">
              <div className="rounded-2xl bg-white border border-blue-100 shadow-lg p-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <ActiveIcon className="w-6 h-6 text-blue-600" />
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
                  <div className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-blue-50 text-blue-600">
                    <ArrowRight className="w-4 h-4" />
                    <span>{active.result}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: one card + controls */}
          <div className="lg:hidden">
            <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
                    {active.num}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 truncate">{active.title}</div>
                    <div className="text-sm text-slate-500 truncate">{active.subtitle}</div>
                  </div>
                </div>
                <div className="text-xs text-slate-400 whitespace-nowrap">{active.duration}</div>
              </div>

              <p className="mt-4 text-slate-700 text-sm leading-relaxed">{active.description}</p>

              <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-600">
                <ArrowRight className="w-3 h-3" />
                <span>{active.result}</span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
                    aria-label="Предыдущий шаг"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
                    aria-label="Следующий шаг"
                  >
                    <ChevronRight className="w-4 h-4" />
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
                      className={`h-2 rounded-full transition-all ${
                        i === activeStep ? "w-7 bg-blue-600" : "w-2 bg-slate-300"
                      }`}
                      aria-label={`Перейти к шагу ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {steps.map((step, i) => {
                const isActive = i === activeStep;
                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`text-left rounded-lg border px-3 py-2 transition-colors ${
                      isActive ? "bg-blue-600 text-white border-blue-600" : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    <div className="text-xs opacity-80">{step.num}</div>
                    <div className="text-sm font-medium truncate">{step.title}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              data-cta="how-we-work-start"
            >
              Обсудить ваш проект
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <p className="text-slate-500 text-sm mt-3">Бесплатная консультация</p>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
