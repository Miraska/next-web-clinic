"use client";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// Typing effect hook
function useTypingEffect(texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

// Code lines for animation
const codeLines = [
  { text: "import { createApp } from 'next'", delay: 0 },
  { text: "", delay: 0.2 },
  { text: "const app = createApp({", delay: 0.4 },
  { text: "  name: 'WebClinic',", delay: 0.6 },
  { text: "  version: '2.0.0',", delay: 0.8 },
  { text: "  features: [", delay: 1.0 },
  { text: "    'React', 'Next.js',", delay: 1.2 },
  { text: "    'TypeScript', 'Node.js'", delay: 1.4 },
  { text: "  ],", delay: 1.6 },
  { text: "  performance: 'optimized',", delay: 1.8 },
  { text: "  scalable: true", delay: 2.0 },
  { text: "})", delay: 2.2 },
  { text: "", delay: 2.4 },
  { text: "export default app", delay: 2.6 },
];

// Terminal output lines
const terminalLines = [
  { text: "$ npm run build", type: "command", delay: 0 },
  { text: "Creating optimized build...", type: "info", delay: 0.5 },
  { text: "✓ Compiled successfully", type: "success", delay: 1.5 },
  { text: "✓ Linting complete", type: "success", delay: 2.0 },
  { text: "✓ Type checking passed", type: "success", delay: 2.5 },
  { text: "✓ Bundle size: 98.5 KB", type: "success", delay: 3.0 },
  { text: "Ready for production!", type: "success", delay: 3.5 },
];

export default function HomeHeroSection() {
  const typingTexts = ["веб-приложения", "CRM системы", "enterprise решения", "интеграции"];
  const typedText = useTypingEffect(typingTexts, 100, 50, 3000);
  const [showCode, setShowCode] = useState(false);
  const [codeView, setCodeView] = useState<'code' | 'terminal'>('code');

  useEffect(() => {
    // Start showing code animation after initial load
    const timer = setTimeout(() => setShowCode(true), 500);
    
    // Cycle between code and terminal views
    const viewCycle = setInterval(() => {
      setCodeView(prev => prev === 'code' ? 'terminal' : 'code');
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(viewCycle);
    };
  }, []);

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

      {/* Floating Code Icons */}
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
        className="absolute top-1/3 right-[15%] hidden xl:block"
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
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
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

            {/* Main Heading with Typing Effect */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Проектируем
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#00ff88] text-glow-green inline-block min-w-[280px] lg:min-w-[380px]"
              >
                {typedText}
                <span className="animate-pulse text-[#00ff88]">|</span>
              </motion.span>
              <br className="hidden md:block" />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                любой сложности
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Инженерная команда для проектов, где важна архитектура,
              <br className="hidden sm:block" />
              <span className="text-white/80">надёжность и долгосрочное развитие.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center"
            >
              {/* Pulsing Primary CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center px-8 py-4 bg-[#00ff88] text-[#0a0e17] text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 animate-pulse-glow-slow"
              >
                {/* Animated arrows around button */}
                <motion.span
                  className="absolute -left-2 top-1/2 -translate-y-1/2 text-[#00ff88] opacity-50"
                  animate={{ x: [-5, 0, -5], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
                
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] via-[#00cc6a] to-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" />
                
                <motion.span
                  className="absolute -right-2 top-1/2 -translate-y-1/2 text-[#00ff88] opacity-50"
                  animate={{ x: [5, 0, 5], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </Link>

              <Link
                href="/projects"
                className="group inline-flex items-center px-8 py-4 border border-white/20 text-white text-lg font-medium rounded-full hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]"
              >
                Наши проекты
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

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {["React", "Next.js", "Node.js", "PostgreSQL", "Docker"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-mono hover:border-[#00ff88]/30 hover:text-[#00ff88] transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Code Animation Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Glow behind code window */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 rounded-2xl blur-3xl" />
              
              {/* Code Window */}
              <div className="relative bg-[#0f1520] border border-[#1f2937] rounded-2xl overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0e17] border-b border-[#1f2937]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCodeView('code')}
                      className={`px-3 py-1 text-xs rounded transition-all ${
                        codeView === 'code' 
                          ? 'bg-[#00ff88]/20 text-[#00ff88]' 
                          : 'text-white/50 hover:text-white/80'
                      }`}
                    >
                      app.ts
                    </button>
                    <button
                      onClick={() => setCodeView('terminal')}
                      className={`px-3 py-1 text-xs rounded transition-all ${
                        codeView === 'terminal' 
                          ? 'bg-[#00ff88]/20 text-[#00ff88]' 
                          : 'text-white/50 hover:text-white/80'
                      }`}
                    >
                      terminal
                    </button>
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="p-6 font-mono text-sm h-[360px] overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    {codeView === 'code' ? (
                      <motion.div
                        key="code"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {showCode && codeLines.map((line, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: line.delay }}
                            className="flex"
                          >
                            <span className="text-white/30 w-8 text-right mr-4 select-none">
                              {index + 1}
                            </span>
                            <span className={`${
                              line.text.includes('import') || line.text.includes('export') || line.text.includes('const')
                                ? 'text-[#c678dd]'
                                : line.text.includes("'") 
                                  ? 'text-[#98c379]'
                                  : line.text.includes(':')
                                    ? 'text-[#61afef]'
                                    : 'text-white/80'
                            }`}>
                              {line.text}
                            </span>
                          </motion.div>
                        ))}
                        {/* Blinking cursor at end */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 3 }}
                          className="flex items-center mt-2"
                        >
                          <span className="text-white/30 w-8 text-right mr-4 select-none">15</span>
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-5 bg-[#00ff88]"
                          />
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="terminal"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {terminalLines.map((line, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: line.delay }}
                            className={`mb-2 ${
                              line.type === 'command' 
                                ? 'text-white' 
                                : line.type === 'success'
                                  ? 'text-[#00ff88]'
                                  : 'text-[#00d4ff]'
                            }`}
                          >
                            {line.text}
                          </motion.div>
                        ))}
                        {/* Terminal cursor */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 4 }}
                          className="flex items-center"
                        >
                          <span className="text-white">$ </span>
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-5 bg-[#00ff88] ml-1"
                          />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Fade overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0f1520] to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute -bottom-6 -left-6 bg-[#0f1520] border border-[#1f2937] rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00ff88]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-xs text-white/50">Uptime</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                className="absolute -top-4 -right-4 bg-[#0f1520] border border-[#1f2937] rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">A+</div>
                    <div className="text-xs text-white/50">Security</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
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
