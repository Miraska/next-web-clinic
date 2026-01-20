"use client";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e17]/30 to-[#0a0e17] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17]/50 via-transparent to-[#0a0e17]/50 pointer-events-none" />
      
      {/* Decorative Orbs */}
      <div className="orb orb-green w-[600px] h-[600px] -top-1/4 -left-1/4 opacity-30 animate-float" />
      <div className="orb orb-cyan w-[400px] h-[400px] top-1/3 -right-48 opacity-20 animate-float-delayed" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-1/4 left-1/4 opacity-20 animate-float" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-[10%] hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 rounded-xl border border-[#00ff88]/30 bg-[#00ff88]/5 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-8 h-8 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[15%] hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-14 h-14 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-7 h-7 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-[20%] hidden lg:block"
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-12 h-12 rounded-lg border border-[#8b5cf6]/30 bg-[#8b5cf6]/5 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-6 h-6 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-[#00ff88] text-sm font-medium">
              Разработка под ключ
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Создаём надёжные{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#00ff88] text-glow-green"
            >
              веб-системы
            </motion.span>
            <br className="hidden md:block" />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              для растущего бизнеса
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-white/60 font-light leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            От корпоративных сайтов до кастомных CRM/ERP решений.
            <br className="hidden sm:block" />
            <span className="text-white/80">Полный цикл разработки под ключ.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center px-8 py-4 bg-[#00ff88] text-[#0a0e17] text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Обсудить проект
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] via-[#00cc6a] to-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-green-intense" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center px-8 py-4 border border-white/20 text-white text-lg font-medium rounded-full hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]"
            >
              Наши услуги
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 lg:mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {[
                { value: "50", suffix: "+", label: "Проектов" },
                { value: "5", suffix: "+", label: "Лет опыта" },
                { value: "30", suffix: "+", label: "Клиентов" },
                { value: "98", suffix: "%", label: "Довольны результатом" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00ff88]/30 transition-all duration-300 group"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                    <span className="text-[#00ff88]">{stat.suffix}</span>
                  </div>
                  <div className="text-white/50 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {["React", "Next.js", "Node.js", "PostgreSQL", "Docker"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-mono hover:border-[#00ff88]/30 hover:text-[#00ff88] transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/40 cursor-pointer hover:text-white/60 transition-colors"
        >
          <span className="text-xs font-light mb-3 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent" />
    </section>
  );
}
