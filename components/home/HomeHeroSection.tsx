"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { ArrowRight, Check, Sparkles, Play } from "lucide-react";

export default function HomeHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY * 0.3);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Professional Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80"
            alt="Modern office workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white" />
        </div>
        
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-mesh z-[1]" />
        
        {/* Animated Grid pattern with parallax */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 z-[1]"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className={`text-center lg:text-left ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 mb-6 shadow-sm hover:shadow-md transition-shadow">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 text-sm font-medium">
                  Веб-разработка
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Разработка сайтов{" "}
                <span className="text-gradient-blue">и веб-систем</span>{" "}
                для бизнеса
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Сайты, интернет-магазины, CRM-системы и интеграции.
                Работаем по договору. Стоимость обсуждается индивидуально.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center px-7 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5 press-effect btn-animated"
                  data-cta="hero-consultation"
                >
                  Связаться
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-7 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-teal-500 hover:text-teal-600 transition-all hover:shadow-lg press-effect"
                >
                  <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                  </svg>
                  Написать в Telegram
                </a>
              </div>

              {/* Trust indicators with enhanced styling */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {[
                  { text: "Работаем по договору" },
                  { text: "Прозрачный процесс" },
                  { text: "Техническая поддержка" },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-100 text-sm text-slate-600 hover:border-teal-200 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-teal-600" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Animated Visual with Parallax */}
            <div 
              className={`relative lg:pl-8 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} 
              style={{ 
                animationDelay: '0.2s',
                transform: `translateY(${scrollY * -0.15}px)`,
              }}
            >
              <div className="hero-visual-wrapper">
                {/* Main Dashboard Mockup */}
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                  {/* Browser mockup header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-600" />
                      <div className="w-3 h-3 rounded-full bg-slate-600" />
                      <div className="w-3 h-3 rounded-full bg-slate-600" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 flex items-center gap-2 max-w-[200px]">
                        <svg className="w-3 h-3 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                        webclinic.dev
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-6 space-y-4">
                    {/* Stats Grid with Animation */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "React", label: "Next.js", color: "from-blue-500 to-blue-400" },
                        { value: "Node", label: "Backend", color: "from-teal-500 to-teal-400" },
                        { value: "SQL", label: "Database", color: "from-blue-500 to-teal-400" },
                      ].map((stat, i) => (
                        <div 
                          key={i} 
                          className="bg-slate-800/80 rounded-xl p-4 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800"
                        >
                          <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Animated Chart Visualization */}
                    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-slate-400 font-medium">Этапы проекта</span>
                        <span className="text-xs text-teal-400 font-medium">Прогресс</span>
                      </div>
                      <div className="flex items-end gap-2 h-20">
                        {[35, 45, 30, 55, 70, 65, 85, 75, 90, 95, 88, 100].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm transition-all duration-500"
                            style={{
                              height: `${height}%`,
                              background: i >= 8 
                                ? 'linear-gradient(to top, #0d9488, #14b8a6)' 
                                : 'linear-gradient(to top, #2563eb, #3b82f6)',
                              opacity: mounted ? 1 : 0,
                              transform: mounted ? 'scaleY(1)' : 'scaleY(0)',
                              transformOrigin: 'bottom',
                              transitionDelay: `${i * 50}ms`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Code Animation */}
                    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 font-mono text-xs">
                      <div className="flex items-center gap-2 text-slate-500 mb-3">
                        <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-soft" />
                        <span>solution.tsx</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                          <span className="text-blue-400">const</span>{" "}
                          <span className="text-slate-300">solution</span>{" "}
                          <span className="text-slate-500">=</span>{" "}
                          <span className="text-teal-400">{"{"}</span>
                        </div>
                        <div className={`pl-4 transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
                          <span className="text-slate-400">quality:</span>{" "}
                          <span className="text-teal-400">&apos;high&apos;</span>
                          <span className="text-slate-500">,</span>
                        </div>
                        <div className={`pl-4 transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                          <span className="text-slate-400">deadline:</span>{" "}
                          <span className="text-teal-400">&apos;on-time&apos;</span>
                          <span className="text-slate-500">,</span>
                        </div>
                        <div className={`pl-4 transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '900ms' }}>
                          <span className="text-slate-400">support:</span>{" "}
                          <span className="text-teal-400">&apos;always&apos;</span>
                        </div>
                        <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                          <span className="text-teal-400">{"}"}</span>
                          <span className="text-slate-500">;</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span>Ваш проект</span>
                        <span className="text-teal-400">Готово</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: mounted ? '100%' : '0%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layered Floating Elements - Overlapping Cards */}
                <div 
                  className="absolute -top-6 -right-6 px-5 py-3 bg-white rounded-xl shadow-xl border border-slate-100 float-slow z-20"
                  style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Первый шаг</div>
                      <div className="text-xs text-teal-600 font-medium">Консультация</div>
                    </div>
                  </div>
                </div>

                {/* Second floating card - overlapping bottom left */}
                <div 
                  className="absolute -bottom-4 -left-4 px-4 py-3 bg-white rounded-xl shadow-xl border border-slate-100 float-medium z-20"
                  style={{ transform: `translateY(${scrollY * -0.08}px)` }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <Play className="w-4 h-4 text-teal-600 ml-0.5" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">Сроки по договору</div>
                  </div>
                </div>

                {/* Decorative elements with parallax */}
                <div 
                  className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl -z-10 opacity-80"
                  style={{ transform: `translateY(${scrollY * 0.05}px) rotate(-6deg)` }}
                />
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl -z-10 opacity-60"
                  style={{ transform: `translateY(${scrollY * -0.05}px) rotate(12deg)` }}
                />
                
                {/* Enhanced Glow effect */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-r from-blue-500/10 via-transparent to-teal-500/10 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]" />
      </section>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
