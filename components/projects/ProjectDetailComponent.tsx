"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { projectsData } from "@/lib/projects";
import { ArrowRight, ChevronDown, Clock, Building2, Check, X } from "lucide-react";

interface ProjectDetailProps {
  slug: string;
}

// Project-specific hero images
const projectImages: Record<string, string> = {
  "crm-logistics": "/projects/crm.jpg",
  "ecommerce-platform": "/projects/ecommerce.jpg",
  "hr-portal": "/projects/hr.jpg",
  "booking-system": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  "analytics-dashboard": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  "telegram-bot-school": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&q=80",
  "api-integration": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
};

export default function ProjectDetailComponent({ slug }: ProjectDetailProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const project = projectsData[slug];

  if (!project) {
    return (
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Проект не найден</h1>
          <p className="text-slate-600 mb-8">К сожалению, такого проекта нет в нашем портфолио.</p>
          <Link href="/projects" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
            ← Вернуться к проектам
          </Link>
        </div>
      </section>
    );
  }

  // Unified color scheme - only blue and teal
  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", light: "bg-teal-50", border: "border-teal-200" },
  };

  // Map any color to blue or teal for consistency
  const getColorKey = (color: string): string => {
    const tealColors = ['emerald', 'teal', 'cyan'];
    return tealColors.includes(color) ? 'teal' : 'blue';
  };

  const colors = colorClasses[getColorKey(project.color)] || colorClasses.blue;
  const heroImage = projectImages[slug] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80";

  return (
    <>
      <section ref={sectionRef} className="min-h-screen">
        {/* Hero Section with Project Image */}
        <div className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-slate-900/85" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/95" />
          </div>
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
            {/* Breadcrumbs */}
            <nav className={`flex items-center gap-2 text-sm mb-8 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Главная</Link>
              <span className="text-slate-500">/</span>
              <Link href="/projects" className="text-slate-400 hover:text-white transition-colors">Проекты</Link>
              <span className="text-slate-500">/</span>
              <span className="text-white">{project.title}</span>
            </nav>

            {/* Header */}
            <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20">
                  {project.category}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm border border-white/10 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  {project.industry}
                </span>
                <span className="text-slate-400 text-sm flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {project.timeline}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25"
                  data-cta={`project-${slug}-hero`}
                >
                  Хочу такой же
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <Link
                  href="#results"
                  className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
                >
                  Смотреть результаты
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div id="results" className="bg-white py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

          {/* Results highlight */}
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 lg:mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {project.results.map((result, index) => (
              <div key={index} className={`p-5 rounded-2xl ${colors.light} border ${colors.border}`}>
                <div className="font-semibold text-slate-900 mb-1">{result.value}</div>
                <div className="text-sm text-slate-500">{result.description}</div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center">
                    <X className="w-5 h-5 text-slate-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Проблема</h2>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{project.challenge.title}</h3>
                <p className="text-slate-600 mb-4">{project.challenge.description}</p>
                <ul className="space-y-2">
                  {project.challenge.problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                      <X className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 lg:p-8 rounded-2xl ${colors.light} border ${colors.border}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <Check className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Решение</h2>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{project.solution.title}</h3>
                <p className="text-slate-600 mb-4">{project.solution.description}</p>
                <ul className="space-y-2">
                  {project.solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Процесс работы над проектом</h2>
            <div className="relative">
              {/* Timeline line */}
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.process.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Step number */}
                    <div className={`hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${colors.bg} ${colors.text} items-center justify-center text-sm font-bold z-10`}>
                      {step.step}
                    </div>
                    
                    <div className="p-5 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-shadow lg:mt-8">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`lg:hidden text-sm font-bold ${colors.text}`}>{step.step}</span>
                        <span className="text-xs text-slate-400">{step.duration}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Использованные технологии</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-xl ${colors.light} ${colors.text} text-sm font-medium border ${colors.border}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="p-8 lg:p-10 rounded-2xl bg-slate-50 border border-slate-200">
                <svg className="w-10 h-10 text-slate-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{project.testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-600 font-bold">{project.testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{project.testimonial.author}</div>
                    <div className="text-sm text-slate-500">{project.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  src={heroImage}
                  alt="Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/88" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20" />
              </div>
              
              <div className="relative p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Хотите похожий результат?
                    </h3>
                    <p className="text-slate-300 max-w-xl">
                      Расскажите о вашей задаче — мы предложим решение и покажем, 
                      как можем помочь именно вам.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-600/30 whitespace-nowrap"
                      data-cta={`project-${slug}-consultation`}
                    >
                      Связаться
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                    <Link
                      href="/projects"
                      className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                    >
                      ← Все проекты
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
