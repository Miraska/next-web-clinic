"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, ArrowRight, ExternalLink } from "lucide-react";

// Professional placeholder images from Unsplash
const projectImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
];

const featuredProjects = [
  {
    id: "crm-logistics",
    title: "CRM для логистики",
    category: "CRM/ERP",
    description: "Система управления грузоперевозками с отслеживанием статусов и личными кабинетами клиентов",
    result: "Автоматизация обработки заявок",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/crm.jpg",
  },
  {
    id: "ecommerce-platform",
    title: "Интернет-магазин",
    category: "E-commerce",
    description: "Платформа электронной коммерции с каталогом товаров и интеграцией с учётной системой",
    result: "Синхронизация с 1С",
    technologies: ["Next.js", "TypeScript", "1C API"],
    image: "/projects/ecommerce.jpg",
  },
  {
    id: "hr-portal",
    title: "HR-портал",
    category: "Веб-приложение",
    description: "Внутренний портал для сотрудников с документооборотом и модулем обучения",
    result: "Автоматизация HR-процессов",
    technologies: ["React", "MongoDB", "1C ЗУП"],
    image: "/projects/hr.jpg",
  },
];

export default function HomeProjectsPreviewSection() {
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/30 to-transparent pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/50 text-blue-600 text-sm font-medium mb-4 shadow-sm">
              Портфолио
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Реализованные{" "}
              <span className="text-gradient-blue">проекты</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Примеры выполненных работ с описанием задач и применённых решений.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center px-5 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 hover:shadow-md transition-all whitespace-nowrap"
          >
            Смотреть все проекты
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid with enhanced cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
                  {/* Image with parallax-like hover effect */}
                  <div className="relative h-52 bg-slate-100 overflow-hidden">
                    <Image
                      src={projectImages[index]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    
                    {/* Category badge on image */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm ${
                        index === 1 ? "bg-teal-600/90 text-white" : "bg-blue-600/90 text-white"
                      }`}>
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Result overlay on image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`p-3 rounded-xl backdrop-blur-sm ${
                        index === 1 ? "bg-teal-600/90" : "bg-blue-600/90"
                      }`}>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-white" />
                          <span className="font-semibold text-white text-sm">
                            {project.result}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover overlay with CTA */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-5 py-2.5 bg-white rounded-xl text-sm font-medium text-slate-900 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Смотреть кейс
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Stats with enhanced design */}
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
          {[
            { value: "React", label: "Next.js, TypeScript", accent: "blue" },
            { value: "Node.js", label: "Backend разработка", accent: "teal" },
            { value: "SQL", label: "PostgreSQL, MongoDB", accent: "blue" },
            { value: "API", label: "Интеграции", accent: "teal" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl bg-slate-50 text-center hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200 hover:bg-white group"
            >
              <div className={`text-3xl md:text-4xl font-bold mb-2 transition-transform group-hover:scale-110 ${
                stat.accent === "blue" ? "text-blue-600" : "text-teal-600"
              }`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
