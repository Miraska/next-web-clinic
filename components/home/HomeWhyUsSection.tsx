"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
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

  const trustReasons = [
    {
      icon: FileText,
      title: "Работа по договору",
      description: "Все условия фиксируются в договоре: объём работ, сроки, этапы сдачи.",
      accent: "blue",
    },
    {
      icon: DollarSign,
      title: "Стоимость по проекту",
      description: "Стоимость обсуждается индивидуально и фиксируется до начала работ.",
      accent: "teal",
    },
    {
      icon: Code,
      title: "Передача исходного кода",
      description: "По завершении проекта передаём исходный код, доступы и документацию.",
      accent: "blue",
    },
    {
      icon: Shield,
      title: "Техническая поддержка",
      description: "После запуска проекта исправляем ошибки в рамках гарантийного периода.",
      accent: "teal",
    },
    {
      icon: MessageSquare,
      title: "Прямая коммуникация",
      description: "Общение напрямую с командой разработки без посредников.",
      accent: "blue",
    },
    {
      icon: Eye,
      title: "Прозрачный процесс",
      description: "Регулярные демонстрации прогресса на каждом этапе проекта.",
      accent: "teal",
    },
  ];

  const honestFacts = [
    {
      title: "Небольшая команда",
      description: "Работаете напрямую с теми, кто выполняет проект. Минимум согласований и бюрократии.",
    },
    {
      title: "Индивидуальный подход",
      description: "Оцениваем каждый проект отдельно. Если задача не в нашей компетенции — сообщаем об этом.",
    },
    {
      title: "Реалистичные сроки",
      description: "Сроки формируются на основе анализа задачи. Все этапы фиксируются в договоре.",
    },
  ];

  const technologies = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Python", "Tailwind CSS", "Docker"];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        {/* Header with visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 lg:mb-16">
          {/* Visual anchor - team image */}
          <div className={`relative hidden lg:block order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Professional team collaboration"
                  width={600}
                  height={400}
                  className="object-cover w-full h-80"
                />
              </div>
              {/* Overlapping card - trust indicator */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-slate-100 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">✓</div>
                </div>
                <div className="text-sm text-slate-500">Договор и документация</div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl -z-10" />
            </div>
          </div>
          
          {/* Text content */}
          <div className={`text-center lg:text-left order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/50 text-blue-600 text-sm font-medium mb-4 shadow-sm">
              Подход к работе
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Принципы{" "}
              <span className="text-gradient-blue">сотрудничества</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Условия работы фиксируются в договоре.
              Прозрачный процесс на всех этапах проекта.
            </p>
          </div>
        </div>

        {/* Trust Reasons Grid with staggered animation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-16">
          {trustReasons.map((reason, index) => {
            const IconComponent = reason.icon;
            const isBlue = reason.accent === "blue";
            return (
              <div
                key={index}
                className={`p-6 rounded-xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isBlue 
                    ? "bg-blue-100 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/25" 
                    : "bg-teal-100 group-hover:bg-teal-600 group-hover:shadow-lg group-hover:shadow-teal-600/25"
                }`}>
                  <IconComponent className={`w-6 h-6 transition-colors ${
                    isBlue 
                      ? "text-blue-600 group-hover:text-white" 
                      : "text-teal-600 group-hover:text-white"
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Honest About Us */}
        <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center">
              <Info className="w-5 h-5 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Честно о себе</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {honestFacts.map((fact, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <h4 className="font-medium text-slate-900 mb-2">{fact.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies with enhanced styling */}
        <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-sm text-slate-500 mb-4">Работаем с современными технологиями</p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 font-medium hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md transition-all duration-200 cursor-default"
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
