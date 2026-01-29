"use client";
import { useRef } from "react";
import {
  FileText,
  DollarSign,
  Code,
  Shield,
  MessageSquare,
  Eye,
  Info,
} from "lucide-react";

export default function HomeWhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const trustReasons = [
    {
      icon: FileText,
      title: "Работаем по договору",
      description: "Официальный договор с прописанным ТЗ, сроками и стоимостью. Вы защищены юридически.",
    },
    {
      icon: DollarSign,
      title: "Фиксированная цена",
      description: "Называем стоимость до начала работ и не меняем её в процессе. Никаких сюрпризов.",
    },
    {
      icon: Code,
      title: "Код остаётся у вас",
      description: "Передаём все исходники, доступы и документацию. Вы не привязаны к нам.",
    },
    {
      icon: Shield,
      title: "Гарантия 3 месяца",
      description: "Бесплатно исправляем баги после запуска. Если что-то сломается — починим.",
    },
    {
      icon: MessageSquare,
      title: "Прямое общение",
      description: "Работаете напрямую с разработчиками, а не через менеджеров. Быстро решаем вопросы.",
    },
    {
      icon: Eye,
      title: "Прозрачный процесс",
      description: "Регулярно показываем прогресс и демо. Вы в курсе, что происходит с проектом.",
    },
  ];

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

  const technologies = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Python", "Tailwind CSS", "Docker"];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Наши гарантии
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Не обещания, а <span className="text-blue-600">обязательства</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Каждое из этих условий прописано в договоре. 
            Мы работаем на долгосрочную репутацию, поэтому слово держим.
          </p>
        </div>

        {/* Trust Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-16">
          {trustReasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Honest About Us */}
        <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
              <Info className="w-5 h-5 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Честно о себе</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {honestFacts.map((fact, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white border border-slate-100"
              >
                <h4 className="font-medium text-slate-900 mb-2 text-sm">{fact.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-4">Работаем с современными технологиями</p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 font-medium hover:border-blue-200 hover:text-blue-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
