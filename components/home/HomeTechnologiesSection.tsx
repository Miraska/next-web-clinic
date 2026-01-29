"use client";
import { useEffect, useRef, useState } from "react";

export default function HomeTechnologiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      name: "TypeScript",
      category: "Language",
      description: "Типизированная разработка для надёжного кода",
      icon: "TS",
      accent: "blue",
      experience: "5+ лет",
    },
    {
      name: "React",
      category: "Frontend",
      description: "Компонентная архитектура интерфейсов",
      icon: "⚛️",
      accent: "teal",
      experience: "6+ лет",
    },
    {
      name: "Next.js",
      category: "Framework",
      description: "SSR, SSG и edge-функции для production",
      icon: "▲",
      accent: "blue",
      experience: "4+ года",
    },
    {
      name: "Node.js",
      category: "Backend",
      description: "Высокопроизводительный серверный runtime",
      icon: "⬢",
      accent: "teal",
      experience: "6+ лет",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      description: "Реляционная БД для сложных данных",
      icon: "🐘",
      accent: "blue",
      experience: "7+ лет",
    },
    {
      name: "Docker",
      category: "DevOps",
      description: "Контейнеризация и воспроизводимые окружения",
      icon: "🐳",
      accent: "teal",
      experience: "5+ лет",
    },
  ];

  const additionalTech = [
    "GraphQL", "Redis", "MongoDB", "AWS", "Kubernetes", 
    "Python", "Elasticsearch", "RabbitMQ", "Nginx", "Terraform"
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4 border border-blue-100">
            Технологии
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Инструменты, проверенные временем
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Выбор технологий диктуется задачей, а не трендами. 
            Используем то, что работает в production уже много лет.
          </p>
        </div>

        {/* Main tech grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {technologies.map((tech, index) => {
            const isBlue = tech.accent === "blue";
            return (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`group relative p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-colors ${
                      isBlue 
                        ? "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" 
                        : "bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white"
                    }`}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-500">
                    {tech.category}
                  </span>
                </div>

                {/* Name & description */}
                <h3 className={`text-lg font-bold mb-2 transition-colors ${
                  hoveredTech === tech.name 
                    ? (isBlue ? 'text-blue-600' : 'text-teal-600')
                    : 'text-slate-900'
                }`}>
                  {tech.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {tech.description}
                </p>

                {/* Experience badge */}
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isBlue ? 'bg-blue-500' : 'bg-teal-500'}`} />
                  <span className="text-xs text-slate-500">
                    Опыт: {tech.experience}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional technologies */}
        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-500 text-sm mb-4">А также работаем с</p>
          <div className="flex flex-wrap justify-center gap-2">
            {additionalTech.map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-200 hover:text-blue-600 transition-all cursor-default ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${600 + index * 50}ms` }}
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
