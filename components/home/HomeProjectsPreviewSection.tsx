"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const featuredProjects = [
  {
    id: "crm-logistics",
    title: "CRM для логистики",
    category: "CRM/ERP",
    description: "Система управления грузоперевозками с трекингом и личными кабинетами",
    result: "Время обработки заявки -83%",
    technologies: ["React", "Node.js", "PostgreSQL"],
    color: "blue",
    image: "/projects/crm.jpg",
  },
  {
    id: "ecommerce-platform",
    title: "Интернет-магазин",
    category: "E-commerce",
    description: "Высоконагруженный магазин с 5000+ товаров и интеграцией 1С",
    result: "Конверсия +40%",
    technologies: ["Next.js", "TypeScript", "1C API"],
    color: "emerald",
    image: "/projects/ecommerce.jpg",
  },
  {
    id: "hr-portal",
    title: "HR-портал",
    category: "Веб-приложение",
    description: "Внутренний портал для 500+ сотрудников производственного холдинга",
    result: "Экономия времени HR 60%",
    technologies: ["React", "MongoDB", "1C ЗУП"],
    color: "violet",
    image: "/projects/hr.jpg",
  },
];

export default function HomeProjectsPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-200" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", light: "bg-violet-50", border: "border-violet-200" },
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              Наши работы
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Примеры <span className="text-blue-600">проектов</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Реальные кейсы с измеримыми результатами. 
              Каждый проект решает конкретную бизнес-задачу.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors whitespace-nowrap"
          >
            Все проекты
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => {
            const colors = colorClasses[project.color];
            const isHovered = hoveredProject === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full flex flex-col">
                    {/* Image placeholder */}
                    <div className={`relative h-48 rounded-xl ${colors.light} mb-5 overflow-hidden`}>
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-slate-900/25 via-slate-900/0 to-slate-900/0" />
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                            {project.category === "CRM/ERP" && "📊"}
                            {project.category === "E-commerce" && "🛒"}
                            {project.category === "Веб-приложение" && "💼"}
                          </div>
                        </div>
                      )}
                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className={`absolute inset-0 ${colors.bg}/20 flex items-center justify-center`}
                      >
                        <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-lg">
                          Смотреть кейс →
                        </span>
                      </motion.div>
                    </div>

                    {/* Category */}
                    <span className={`inline-block px-3 py-1 rounded-full ${colors.light} ${colors.text} text-xs font-medium mb-3 self-start`}>
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 grow">
                      {project.description}
                    </p>

                    {/* Result */}
                    <div className={`p-3 rounded-xl ${colors.light} border ${colors.border} mb-4`}>
                      <div className="flex items-center gap-2">
                        <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className={`font-semibold ${colors.text}`}>{project.result}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "15+", label: "Проектов реализовано" },
            { value: "100%", label: "Проектов в срок" },
            { value: "3 мес", label: "Гарантия на работу" },
            { value: "2 часа", label: "Среднее время ответа" },
          ].map((stat, index) => (
            <div key={index} className="p-4 rounded-xl bg-slate-50 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
