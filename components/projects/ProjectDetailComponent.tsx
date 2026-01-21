"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    challenge: string;
    solution: string;
    result: string;
    technologies: string[];
    gradient: string;
    stats: { label: string; value: string; description: string }[];
    features: string[];
    timeline: { phase: string; duration: string; description: string }[];
  };
}

export default function ProjectDetailComponent({ project }: ProjectProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-24 lg:pb-32 bg-[#0a0e17] min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className={`orb w-[600px] h-[600px] -top-64 -right-64 opacity-20 bg-gradient-to-br ${project.gradient}`} style={{ filter: 'blur(100px)' }} />
      <div className="orb orb-purple w-[400px] h-[400px] bottom-0 -left-48 opacity-15" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-white/60 hover:text-[#00ff88] transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Все проекты
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-medium mb-6">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-lg lg:text-xl text-white/60 max-w-3xl whitespace-pre-line">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {project.stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#0f1520] border border-[#1f2937] text-center"
            >
              <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-white font-medium mt-1">{stat.label}</div>
              {stat.description && (
                <div className="text-white/50 text-sm">{stat.description}</div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Challenge - Solution - Result */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="p-6 lg:p-8 rounded-2xl bg-[#ff6b6b]/10 border border-[#ff6b6b]/20">
            <div className="w-10 h-10 rounded-lg bg-[#ff6b6b]/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#ff6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#ff6b6b] font-medium">Вызов</span>
            <p className="text-white/80 mt-3 leading-relaxed">{project.challenge}</p>
          </div>

          <div className="p-6 lg:p-8 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20">
            <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#00d4ff] font-medium">Решение</span>
            <p className="text-white/80 mt-3 leading-relaxed">{project.solution}</p>
          </div>

          <div className="p-6 lg:p-8 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/20">
            <div className="w-10 h-10 rounded-lg bg-[#00ff88]/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#00ff88] font-medium">Результат</span>
            <p className="text-white/80 mt-3 leading-relaxed">{project.result}</p>
          </div>
        </motion.div>

        {/* Features & Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 lg:p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937]"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 text-[#00ff88] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Что было реализовано
            </h3>
            <div className="space-y-3">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#00ff88] mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 lg:p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937]"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 text-[#00d4ff] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Этапы проекта
            </h3>
            <div className="space-y-4">
              {project.timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="relative">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`} />
                    {i < project.timeline.length - 1 && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-full bg-[#1f2937]" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-white font-medium">{item.phase}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#1f2937] text-white/50">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Использованные технологии</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-[#00ff88]/10 text-[#00ff88] font-mono hover:bg-[#00ff88]/20 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className={`max-w-2xl mx-auto p-8 lg:p-12 rounded-2xl bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-[#00ff88]/20`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Хотите такой же результат?
            </h3>
            <p className="text-white/60 mb-8">
              Расскажите о вашей задаче — мы подготовим предложение и оценку проекта бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-full hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] group"
              >
                Обсудить проект
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300"
              >
                Другие проекты
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
