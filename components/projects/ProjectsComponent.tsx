"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { projectsData } from "@/lib/projects";
import { ArrowRight, TrendingUp, Filter } from "lucide-react";

// Project display order
const projectOrder = [
  "crm-logistics",
  "ecommerce-platform",
  "hr-portal",
  "booking-system",
  "analytics-dashboard",
  "telegram-bot-school",
  "api-integration",
];

// Transform lib data to component format
const projects = projectOrder
  .filter(id => projectsData[id])
  .map(id => {
    const data = projectsData[id];
    return {
      id: data.id,
      title: data.title,
      category: data.category,
      industry: data.industry,
      description: data.description,
      challenge: data.challenge.description,
      solution: data.solution.description,
      result: data.results.slice(0, 2).map(r => `${r.metric} ${r.value.toLowerCase()}`).join(". ") + ".",
      technologies: data.technologies.slice(0, 5),
      stats: data.results.slice(0, 3).map(r => ({
        label: r.value,
        value: r.metric,
      })),
      timeline: data.timeline.split(" ")[0],
      image: data.id === "crm-logistics" ? "/projects/crm.jpg" : 
             data.id === "ecommerce-platform" ? "/projects/ecommerce.jpg" :
             data.id === "hr-portal" ? "/projects/hr.jpg" : null,
    };
  });

// Generate categories and industries from data
const categories = ["Все", ...Array.from(new Set(projects.map(p => p.category)))];
const industries = ["Все отрасли", ...Array.from(new Set(projects.map(p => p.industry)))];

export default function ProjectsComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedIndustry, setSelectedIndustry] = useState("Все отрасли");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projects.filter((p) => {
    const categoryMatch = selectedCategory === "Все" || p.category === selectedCategory;
    const industryMatch = selectedIndustry === "Все отрасли" || p.industry === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  return (
    <>
      <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Портфолио
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              Наши <span className="text-blue-600">проекты</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Реальные кейсы с измеримыми результатами. 
              Каждый проект — это решённая бизнес-задача.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Category filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Industry filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:border-blue-500"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Projects count */}
          <div className="mb-6">
            <p className="text-sm text-slate-400">
              Найдено проектов: {filteredProjects.length}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group"
              >
                <div className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all h-full flex flex-col">
                  {/* Image placeholder */}
                  {project.image && (
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs">
                        {project.industry}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">{project.timeline}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="space-y-3 mb-5 flex-grow">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Проблема</span>
                      <p className="text-slate-700 text-sm mt-1">{project.challenge}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                      <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Решение</span>
                      <p className="text-slate-700 text-sm mt-1">{project.solution}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center p-3 rounded-xl bg-slate-50">
                        <div className="text-xl lg:text-2xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="w-full py-3 rounded-lg font-medium text-center transition-colors flex items-center justify-center gap-2 bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white group/btn"
                  >
                    Подробнее о проекте
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Проекты не найдены</h3>
              <p className="text-slate-500 mb-4">Попробуйте изменить фильтры</p>
              <button
                onClick={() => {
                  setSelectedCategory("Все");
                  setSelectedIndustry("Все отрасли");
                }}
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Сбросить фильтры
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 lg:mt-16 p-8 lg:p-10 rounded-2xl bg-slate-900 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Хотите такой же результат?
                </h3>
                <p className="text-slate-300 max-w-xl">
                  Расскажите о вашей задаче — мы предложим решение и покажем релевантные кейсы.
                  Первая консультация бесплатная.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  data-cta="projects-consultation"
                >
                  Обсудить проект
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap"
                >
                  Смотреть услуги
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
