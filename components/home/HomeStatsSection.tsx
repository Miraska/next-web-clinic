"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ClipboardCheck, Briefcase, Clock, Users } from "lucide-react";

export default function HomeStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const facts = [
    {
      icon: ClipboardCheck,
      title: "Опыт разработки",
      description: "Команда с опытом в веб-разработке и автоматизации бизнес-процессов",
      accent: "blue",
      stat: "Web",
      statLabel: "разработка",
    },
    {
      icon: Briefcase,
      title: "Реализованные проекты",
      description: "Сайты, CRM-системы, интернет-магазины, интеграции",
      accent: "teal",
      stat: "B2B",
      statLabel: "проекты",
    },
    {
      icon: Clock,
      title: "Сроки по договору",
      description: "Этапы и сроки фиксируются в договоре",
      accent: "blue",
      stat: "✓",
      statLabel: "договор",
    },
    {
      icon: Users,
      title: "Прямая коммуникация",
      description: "Общение напрямую с командой разработки",
      accent: "teal",
      stat: "✓",
      statLabel: "команда",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20" />
      </div>
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            О компании
          </h2>
          <p className="text-slate-400">Основные направления и подход к работе</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => {
            const IconComponent = fact.icon;
            const isBlue = fact.accent === "blue";
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isBlue 
                      ? "bg-blue-500/20 group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/25" 
                      : "bg-teal-500/20 group-hover:bg-teal-500 group-hover:shadow-lg group-hover:shadow-teal-500/25"
                  }`}>
                    <IconComponent className={`w-6 h-6 transition-colors ${
                      isBlue 
                        ? "text-blue-400 group-hover:text-white" 
                        : "text-teal-400 group-hover:text-white"
                    }`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${isBlue ? "text-blue-400" : "text-teal-400"}`}>
                      {fact.stat}
                    </div>
                    <div className="text-xs text-slate-500">{fact.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-1">{fact.title}</h3>
                <p className="text-sm text-slate-400">{fact.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
