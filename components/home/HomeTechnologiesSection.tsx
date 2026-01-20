"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HomeTechnologiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const techCategories = [
    {
      title: "Frontend",
      description: "Современные интерфейсы",
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "TS" },
        { name: "Tailwind CSS", icon: "🎨" },
      ],
      color: "#00d4ff",
      gradient: "from-[#00d4ff]/20 to-transparent",
    },
    {
      title: "Backend",
      description: "Надёжная серверная часть",
      technologies: [
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
      ],
      color: "#00ff88",
      gradient: "from-[#00ff88]/20 to-transparent",
    },
    {
      title: "DevOps",
      description: "Инфраструктура и деплой",
      technologies: [
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Kubernetes", icon: "☸️" },
      ],
      color: "#8b5cf6",
      gradient: "from-[#8b5cf6]/20 to-transparent",
    },
    {
      title: "Tools",
      description: "Инструменты разработки",
      technologies: [
        { name: "Git", icon: "📦" },
        { name: "Figma", icon: "🎯" },
        { name: "Jira", icon: "📋" },
        { name: "Postman", icon: "📮" },
      ],
      color: "#f97316",
      gradient: "from-[#f97316]/20 to-transparent",
    },
  ];

  const allTech = [
    "React", "Next.js", "Vue.js", "TypeScript", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "GraphQL"
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0a0e17] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern-animated opacity-20" />
        {/* Floating tech labels */}
        <div className="absolute inset-0 overflow-hidden">
          {allTech.map((tech, index) => (
            <motion.div
              key={tech}
              className="absolute text-white/5 font-mono text-lg whitespace-nowrap select-none"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Orbs */}
      <div className="orb orb-green w-[400px] h-[400px] top-0 -right-48 opacity-15" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-0 -left-32 opacity-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-sm font-medium mb-6"
          >
            Технологии
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Наш <span className="gradient-text">стек</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            Используем проверенные технологии для создания надёжных и масштабируемых решений.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="relative p-6 lg:p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937] hover:border-[#1f2937]/80 transition-all duration-500 h-full card-hover overflow-hidden">
                {/* Gradient overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color, boxShadow: `0 0 10px ${category.color}` }}
                    />
                    <h3
                      className="text-lg font-semibold transition-colors duration-300"
                      style={{ color: category.color }}
                    >
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/50 text-sm mb-6">{category.description}</p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.3,
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e17]/50 border border-[#1f2937] group-hover:border-[#1f2937]/80 transition-all duration-300 hover:bg-[#0a0e17]"
                      >
                        <span className="text-xl">{tech.icon}</span>
                        <span className="text-white/80 font-mono text-sm">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[#0f1520] border border-[#1f2937]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white/60 text-sm">
                Выбор технологий зависит от задач проекта
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#1f2937]" />
            <span className="text-[#00ff88] text-sm font-medium">
              Подберём оптимальный стек для вашего бизнеса
            </span>
          </div>
        </motion.div>

        {/* Scrolling tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex gap-8 animate-marquee">
            {[...allTech, ...allTech].map((tech, index) => (
              <span
                key={index}
                className="text-white/10 text-2xl font-bold whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
