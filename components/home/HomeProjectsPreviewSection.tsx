"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const featuredProjects = [
  {
    id: "crm-logistics",
    title: "CRM для логистической компании",
    category: "CRM/ERP",
    description: "Автоматизация управления грузоперевозками с отслеживанием в реальном времени.",
    result: "-83% времени обработки заявок",
    gradient: "from-[#00ff88] to-[#00d4ff]",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce платформа",
    category: "Веб-разработка",
    description: "Высоконагруженный интернет-магазин с интеграцией 1C и платёжных систем.",
    result: "+40% конверсии",
    gradient: "from-[#00d4ff] to-[#8b5cf6]",
    technologies: ["Next.js", "TypeScript", "AWS"],
  },
  {
    id: "analytics-dashboard",
    title: "Аналитическая платформа",
    category: "Автоматизация",
    description: "Дашборд с агрегацией данных из 8 источников для руководства компании.",
    result: "-95% времени на отчёты",
    gradient: "from-[#8b5cf6] to-[#ec4899]",
    technologies: ["React", "Python", "ClickHouse"],
  },
];

export default function HomeProjectsPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0f1520] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="orb orb-green w-[400px] h-[400px] top-0 -right-48 opacity-15 animate-float" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-0 -left-32 opacity-10 animate-float-delayed" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-sm font-medium mb-6"
            >
              Портфолио
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              Избранные <span className="gradient-text">проекты</span>
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed max-w-xl">
              Реальные кейсы с измеримыми результатами для бизнеса
            </p>
          </div>
          
          <Link
            href="/projects"
            className="group inline-flex items-center text-[#00ff88] font-medium mt-6 md:mt-0"
          >
            <span className="relative">
              Все проекты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff88] group-hover:w-full transition-all duration-300" />
            </span>
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <div 
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r ${project.gradient}`}
                style={{ opacity: hoveredIndex === index ? 0.15 : 0 }}
              />

              <Link
                href={`/projects/${project.id}`}
                className="block relative p-6 lg:p-8 rounded-2xl bg-[#0a0e17] border border-[#1f2937] hover:border-[#00ff88]/30 transition-all duration-500 card-hover h-full overflow-hidden"
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-xs font-medium mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Result badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20 mb-4">
                  <svg className="w-4 h-4 text-[#00ff88] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-[#00ff88] text-sm font-medium">{project.result}</span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-[#1f2937] text-white/60 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center text-white/50 group-hover:text-[#00ff88] transition-colors duration-300">
                  <span className="text-sm">Подробнее</span>
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
