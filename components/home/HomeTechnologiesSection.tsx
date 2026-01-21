"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function HomeTechnologiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

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
      color: "#3178c6",
      experience: "5+ лет",
    },
    {
      name: "React",
      category: "Frontend",
      description: "Компонентная архитектура интерфейсов",
      icon: "⚛️",
      color: "#61dafb",
      experience: "6+ лет",
    },
    {
      name: "Next.js",
      category: "Framework",
      description: "SSR, SSG и edge-функции для production",
      icon: "▲",
      color: "#ffffff",
      experience: "4+ года",
    },
    {
      name: "Node.js",
      category: "Backend",
      description: "Высокопроизводительный серверный runtime",
      icon: "⬢",
      color: "#339933",
      experience: "6+ лет",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      description: "Реляционная БД для сложных данных",
      icon: "🐘",
      color: "#336791",
      experience: "7+ лет",
    },
    {
      name: "Docker",
      category: "DevOps",
      description: "Контейнеризация и воспроизводимые окружения",
      icon: "🐳",
      color: "#2496ed",
      experience: "5+ лет",
    },
  ];

  const additionalTech = [
    "GraphQL", "Redis", "MongoDB", "AWS", "Kubernetes", 
    "Python", "Elasticsearch", "RabbitMQ", "Nginx", "Terraform"
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0a0e17] relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern-animated opacity-20" />

      {/* Parallax tech labels in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: x1 }}
          className="absolute top-20 left-0 flex gap-16 text-[120px] font-bold text-white/[0.02] whitespace-nowrap"
        >
          {["TypeScript", "React", "Node.js", "PostgreSQL"].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="absolute bottom-20 right-0 flex gap-16 text-[120px] font-bold text-white/[0.02] whitespace-nowrap"
        >
          {["Docker", "AWS", "GraphQL", "Redis"].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </motion.div>
      </div>

      {/* Gradient accents */}
      <div className="orb orb-green w-[400px] h-[400px] top-0 -right-48 opacity-15" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-0 -left-32 opacity-10" />

      <div ref={containerRef} className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-sm font-medium mb-6">
            Технологии
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Инструменты,<br/>
            <span className="gradient-text">проверенные временем</span>
          </h2>
          <p className="text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            Выбор технологий диктуется задачей, а не трендами. 
            Используем то, что работает в production уже много лет.
          </p>
        </motion.div>

        {/* Main tech grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: `${tech.color}20` }}
              />
              
              <div className="relative p-6 lg:p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937] hover:border-[#1f2937]/80 transition-all duration-500 h-full">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold"
                    style={{ 
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                    }}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/40">
                    {tech.category}
                  </span>
                </div>

                {/* Name & description */}
                <h3 
                  className="text-xl font-bold text-white mb-2 group-hover:transition-colors"
                  style={{ color: hoveredTech === tech.name ? tech.color : undefined }}
                >
                  {tech.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {tech.description}
                </p>

                {/* Experience badge */}
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="text-xs text-white/50">
                    Опыт: {tech.experience}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual divider with image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden mb-16"
        >
          <ImagePlaceholder 
            src=""
            alt="Наш рабочий процесс"
            aspectRatio="wide"
            overlayColor="#8b5cf6"
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17]/95 via-[#0a0e17]/70 to-transparent flex items-center">
            <div className="p-8 lg:p-16 max-w-xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Стек подбираем<br/>
                <span className="text-[#8b5cf6]">под задачу</span>
              </h3>
              <p className="text-white/70 mb-6">
                Нет универсального решения. Для каждого проекта анализируем требования 
                к производительности, масштабируемости и поддержке — и выбираем 
                оптимальные инструменты.
              </p>
              <div className="flex items-center gap-4">
                {["Performance", "Scalability", "Security"].map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-white/50 text-sm mb-6">А также работаем с</p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTech.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-[#0f1520] border border-[#1f2937] text-white/60 text-sm font-mono hover:border-[#00ff88]/30 hover:text-[#00ff88] transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
