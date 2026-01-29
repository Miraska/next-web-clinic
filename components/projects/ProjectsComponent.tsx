"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { projectsData } from "@/lib/projects";
import { ArrowRight, TrendingUp, Filter, Briefcase, ExternalLink } from "lucide-react";

// Professional project images
const projectImagesFallback = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
];

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
  .map((id, index) => {
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
      accent: index % 2 === 0 ? "blue" : "teal" as "blue" | "teal",
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

  const filteredProjects = projects.filter((p) => {
    const categoryMatch = selectedCategory === "Все" || p.category === selectedCategory;
    const industryMatch = selectedIndustry === "Все отрасли" || p.industry === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  return (
    <>
      <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-1/3 h-96 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
          {/* Header with visual */}
          <div className={`grid lg:grid-cols-2 gap-12 items-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/50 text-blue-600 text-sm font-medium mb-4 shadow-sm">
                <Briefcase className="w-4 h-4" />
                Портфолио
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
                Наши{" "}
                <span className="text-gradient-blue">проекты</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                Реальные кейсы с измеримыми результатами. 
                Каждый проект — это решённая бизнес-задача.
              </p>
            </div>
            
            {/* Stats visual */}
            <div className="hidden lg:flex items-center justify-end gap-6">
              {[
                { value: "15+", label: "Проектов", color: "blue" },
                { value: "100%", label: "В срок", color: "teal" },
                { value: "3 мес", label: "Гарантия", color: "blue" },
              ].map((stat, i) => (
                <div key={i} className={`p-6 rounded-2xl bg-white border shadow-lg ${
                  stat.color === "blue" ? "border-blue-100" : "border-teal-100"
                }`}>
                  <div className={`text-3xl font-bold mb-1 ${
                    stat.color === "blue" ? "text-blue-600" : "text-teal-600"
                  }`}>{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Category filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? index % 2 === 0 
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                          : "bg-teal-600 text-white shadow-lg shadow-teal-600/25"
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
                  className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
            {filteredProjects.map((project, index) => {
              const isBlue = project.accent === "blue";
              const projectImage = project.image || projectImagesFallback[index % projectImagesFallback.length];
              return (
                <div
                  key={project.id}
                  className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden hover:-translate-y-1">
                    {/* Project image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={projectImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                      
                      {/* Category badges on image */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className={`px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm ${
                          isBlue ? "bg-blue-600/90 text-white" : "bg-teal-600/90 text-white"
                        }`}>
                          {project.category}
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-white/90 text-slate-700 text-xs font-medium backdrop-blur-sm">
                          {project.industry}
                        </span>
                      </div>
                      
                      {/* Result stat on image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          {project.stats.slice(0, 2).map((stat, i) => (
                            <div key={i} className={`px-3 py-2 rounded-lg backdrop-blur-sm ${
                              i === 0 ? "bg-blue-600/90" : "bg-teal-600/90"
                            }`}>
                              <div className="text-white font-bold text-sm">{stat.value}</div>
                              <div className="text-white/80 text-xs">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="px-5 py-2.5 bg-white rounded-xl text-sm font-medium text-slate-900 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Подробнее
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 lg:p-8 flex flex-col flex-grow">

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
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Проблема</span>
                        <p className="text-slate-700 text-sm mt-1">{project.challenge}</p>
                      </div>
                      <div className={`p-3 rounded-xl border ${
                        isBlue ? "bg-blue-50 border-blue-100" : "bg-teal-50 border-teal-100"
                      }`}>
                        <span className={`text-xs font-medium uppercase tracking-wider ${
                          isBlue ? "text-blue-600" : "text-teal-600"
                        }`}>Решение</span>
                        <p className="text-slate-700 text-sm mt-1">{project.solution}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/projects/${project.id}`}
                      className={`w-full py-3.5 rounded-xl font-medium text-center transition-all flex items-center justify-center gap-2 ${
                        isBlue 
                          ? "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white" 
                          : "bg-teal-50 text-teal-600 hover:bg-teal-600 hover:text-white"
                      } group/btn`}
                    >
                      Подробнее о проекте
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Сбросить фильтры
              </button>
            </div>
          )}

          {/* CTA Section - Enhanced */}
          <div className={`mt-12 lg:mt-16 relative p-8 lg:p-12 rounded-2xl overflow-hidden transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
                  Хотите такой же результат?
                </h3>
                <p className="text-blue-100 max-w-xl text-lg">
                  Расскажите о вашей задаче — мы предложим решение и покажем релевантные кейсы.
                
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center px-7 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl whitespace-nowrap"
                  data-cta="projects-consultation"
                >
                  Связаться
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-7 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
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
