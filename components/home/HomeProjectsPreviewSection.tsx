"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { TrendingUp, ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    id: "crm-logistics",
    title: "CRM для логистики",
    category: "CRM/ERP",
    description: "Система управления грузоперевозками с трекингом и личными кабинетами",
    result: "Время обработки заявки -83%",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/crm.jpg",
  },
  {
    id: "ecommerce-platform",
    title: "Интернет-магазин",
    category: "E-commerce",
    description: "Высоконагруженный магазин с 5000+ товаров и интеграцией 1С",
    result: "Конверсия +40%",
    technologies: ["Next.js", "TypeScript", "1C API"],
    image: "/projects/ecommerce.jpg",
  },
  {
    id: "hr-portal",
    title: "HR-портал",
    category: "Веб-приложение",
    description: "Внутренний портал для 500+ сотрудников производственного холдинга",
    result: "Экономия времени HR 60%",
    technologies: ["React", "MongoDB", "1C ЗУП"],
    image: "/projects/hr.jpg",
  },
];

export default function HomeProjectsPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Портфолио
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Реальные <span className="text-blue-600">кейсы</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Каждый проект — это решённая бизнес-задача с измеримым результатом.
              Показываем, что умеем, на конкретных примерах.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center px-5 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Смотреть все проекты
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group">
              <Link href={`/projects/${project.id}`}>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 bg-slate-100">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-lg">
                        Смотреть кейс
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category */}
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-3 self-start">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Result */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-600">{project.result}</span>
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
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
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
        </div>
      </div>
    </section>
  );
}
