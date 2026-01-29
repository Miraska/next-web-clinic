"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
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

// Step illustration images
const stepImages: Record<string, string> = {
  "01": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  "02": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  "03": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  "04": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  "05": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "06": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
};

export default function HomeHowWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Консультация",
      subtitle: "Обсуждение задачи",
      duration: "30-60 минут",
      description: "Обсуждаем вашу задачу, задаём уточняющие вопросы, оцениваем возможность реализации.",
      result: "Понимание задачи и предварительная оценка",
      icon: MessageSquare,
      accent: "blue",
    },
    {
      num: "02",
      title: "Анализ",
      subtitle: "Подготовка предложения",
      duration: "3-5 дней",
      description: "Анализируем задачу, определяем технический стек, формируем техническое задание и коммерческое предложение.",
      result: "Техническое задание и сроки",
      icon: FileText,
      accent: "teal",
    },
    {
      num: "03",
      title: "Договор",
      subtitle: "Оформление",
      duration: "1-2 дня",
      description: "Заключаем договор с фиксированным объёмом работ, сроками и этапами. Согласовываем условия оплаты.",
      result: "Документальное закрепление условий",
      icon: Shield,
      accent: "blue",
    },
    {
      num: "04",
      title: "Разработка",
      subtitle: "Итерационный процесс",
      duration: "По плану",
      description: "Работаем итерациями с регулярными демонстрациями прогресса. Собираем обратную связь и вносим корректировки.",
      result: "Регулярные демонстрации",
      icon: Code,
      accent: "teal",
    },
    {
      num: "05",
      title: "Тестирование",
      subtitle: "Проверка качества",
      duration: "По проекту",
      description: "Тестируем функциональность, исправляем ошибки, оптимизируем производительность. Проводим приёмочное тестирование.",
      result: "Проверенный продукт",
      icon: ClipboardCheck,
      accent: "blue",
    },
    {
      num: "06",
      title: "Запуск",
      subtitle: "Развёртывание",
      duration: "По проекту",
      description: "Развёртываем на сервере, настраиваем инфраструктуру, подключаем аналитику. Передаём документацию и проводим обучение.",
      result: "Работающий проект с документацией",
      icon: Zap,
      accent: "teal",
    },
  ];

  const goPrev = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  const goNext = () => setActiveStep((prev) => (prev + 1) % steps.length);

  const active = steps[activeStep];
  const ActiveIcon = active.icon;
  const isBlue = active.accent === "blue";

  return (
    <>
      <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background with parallax image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
            alt="Office background"
            fill
            className="object-cover opacity-[0.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
          <div className="absolute inset-0 section-bg-pattern opacity-30" />
          {/* Decorative gradient circles */}
          <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
          {/* Header */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-medium mb-4 shadow-sm">
              Процесс работы
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Этапы{" "}
              <span className="text-gradient-blue">проекта</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Структурированный процесс разработки. 
              Регулярные демонстрации и прозрачная коммуникация.
            </p>
          </div>

          {/* Desktop: list + active card */}
          <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
            <div className="col-span-5">
              <div className="space-y-2">
                {steps.map((step, index) => {
                  const isActive = index === activeStep;
                  const stepIsBlue = step.accent === "blue";

                  return (
                    <button
                      key={step.num}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left rounded-xl border transition-all px-4 py-3 flex items-center gap-4 ${
                        isActive 
                          ? "bg-white shadow-lg border-blue-200" 
                          : "bg-white/60 border-slate-200 hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-semibold shrink-0 transition-colors ${
                        isActive 
                          ? stepIsBlue ? "bg-blue-600 text-white" : "bg-teal-600 text-white"
                          : stepIsBlue ? "bg-blue-100 text-blue-600" : "bg-teal-100 text-teal-600"
                      }`}>
                        {step.num}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-slate-900 truncate">{step.title}</div>
                          {isActive && (
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              stepIsBlue ? "bg-blue-50 text-blue-600" : "bg-teal-50 text-teal-600"
                            }`}>
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
                    className="px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 transition-all"
                    aria-label="Предыдущий шаг"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 transition-all"
                    aria-label="Следующий шаг"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="text-xs text-slate-400 ml-2">
                    {activeStep + 1}/{steps.length}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {steps.map((step, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeStep 
                          ? step.accent === "blue" ? "w-8 bg-blue-600" : "w-8 bg-teal-600"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Перейти к шагу ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-7">
              <div className={`rounded-2xl bg-white border shadow-xl overflow-hidden ${
                isBlue ? "border-blue-100" : "border-teal-100"
              }`}>
                {/* Step illustration */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={stepImages[active.num]}
                    alt={active.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className={`absolute bottom-4 left-4 px-3 py-1.5 rounded-lg backdrop-blur-sm ${
                    isBlue ? "bg-blue-600/90" : "bg-teal-600/90"
                  }`}>
                    <span className="text-white text-sm font-medium">Шаг {active.num}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isBlue ? "bg-blue-600" : "bg-teal-600"
                      }`}>
                        <ActiveIcon className="w-6 h-6 text-white" />
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

                  <p className="mt-5 text-slate-700 leading-relaxed">{active.description}</p>

                  <div className="mt-5">
                    <div className={`inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl ${
                      isBlue ? "bg-blue-50 text-blue-600" : "bg-teal-50 text-teal-600"
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                      <span>{active.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: one card + controls */}
          <div className="lg:hidden">
            <div className={`rounded-xl bg-white border shadow-lg p-5 ${
              isBlue ? "border-blue-100" : "border-teal-100"
            }`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-semibold ${
                    isBlue ? "bg-blue-600 text-white" : "bg-teal-600 text-white"
                  }`}>
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

              <div className={`mt-4 inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-lg ${
                isBlue ? "bg-blue-50 text-blue-600" : "bg-teal-50 text-teal-600"
              }`}>
                <ArrowRight className="w-3 h-3" />
                <span>{active.result}</span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
                    aria-label="Предыдущий шаг"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
                    aria-label="Следующий шаг"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="text-xs text-slate-400">
                    {activeStep + 1}/{steps.length}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {steps.map((step, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeStep 
                          ? step.accent === "blue" ? "w-7 bg-blue-600" : "w-7 bg-teal-600"
                          : "w-2 bg-slate-300"
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
                const stepIsBlue = step.accent === "blue";
                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`text-left rounded-xl border px-3 py-2 transition-all ${
                      isActive 
                        ? stepIsBlue 
                          ? "bg-blue-600 text-white border-blue-600" 
                          : "bg-teal-600 text-white border-teal-600"
                        : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    <div className={`text-xs ${isActive ? "opacity-80" : "opacity-60"}`}>{step.num}</div>
                    <div className="text-sm font-medium truncate">{step.title}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className={`mt-12 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center px-7 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5 press-effect btn-animated"
              data-cta="how-we-work-start"
            >
              Связаться
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-slate-500 text-sm mt-3">Первый шаг — консультация</p>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
