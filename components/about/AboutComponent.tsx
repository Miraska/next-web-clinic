"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import MarqueeText from "@/components/ui/MarqueeText";

export default function AboutComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

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

  // Auto-switch team cards every 6 seconds
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveTeamMember((prev) => (prev + 1) % 4);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isHovering]);

  const team = [
    {
      name: "Алексей Петров",
      role: "Technical Lead",
      description: "12 лет в разработке. Ex-Яндекс, ex-Mail.ru",
      image: "/team/alexey.jpg",
    },
    {
      name: "Мария Козлова",
      role: "Product Designer",
      description: "UI/UX дизайн сложных интерфейсов",
      image: "/team/maria.jpg",
    },
    {
      name: "Дмитрий Волков",
      role: "Backend Developer",
      description: "Архитектура высоконагруженных систем",
      image: "/team/dmitry.jpg",
    },
    {
      name: "Анна Сидорова",
      role: "Project Manager",
      description: "Управление IT-проектами 8+ лет",
      image: "",
    },
  ];

  const expertise = [
    { area: "Веб-разработка", years: "8+" },
    { area: "Системная интеграция", years: "6+" },
    { area: "Автоматизация", years: "5+" },
    { area: "DevOps", years: "4+" },
  ];

  const techStack = [
    "TypeScript", "React", "Next.js", "Node.js", 
    "PostgreSQL", "Docker", "AWS", "Kubernetes"
  ];

  return (
    <section ref={sectionRef} className="pt-32 pb-24 lg:pb-32 bg-[#0a0e17] min-h-screen relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <motion.div 
        style={{ y: y1 }}
        className="orb orb-green w-[500px] h-[500px] -top-32 -right-32 opacity-20" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="orb orb-cyan w-[400px] h-[400px] bottom-1/4 -left-48 opacity-15" 
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Hero Section with Image */}
        <div ref={parallaxRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-medium mb-6">
              О нас
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Инженерная команда,<br/>
              <span className="gradient-text">а не студия</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Мы не делаем «сайты». Мы проектируем и разрабатываем информационные 
              системы — от веб-приложений до enterprise-решений. В команде только 
              штатные специалисты с опытом в продуктовой разработке.
            </p>
            
            {/* Expertise bars */}
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-white/80 w-40">{item.area}</span>
                  <div className="flex-1 h-2 bg-[#1f2937] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${parseInt(item.years) * 10}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff]"
                    />
                  </div>
                  <span className="text-[#00ff88] font-mono text-sm w-12">{item.years} лет</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Image section with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div style={{ rotate }} className="relative">
              <ImagePlaceholder 
                src=""
                alt="Команда WebClinic за работой"
                aspectRatio="square"
                overlayColor="#00ff88"
              />
            </motion.div>
            
            {/* Floating stats card */}
            <motion.div
              style={{ y: y1 }}
              className="absolute -bottom-6 -left-6 lg:-left-12 p-6 rounded-2xl bg-[#0f1520]/90 backdrop-blur-xl border border-[#1f2937]"
            >
              <div className="text-3xl font-bold text-white mb-1">
                50<span className="text-[#00ff88]">+</span>
              </div>
              <div className="text-sm text-white/60">проектов с 2019 года</div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#00ff88]/20 rounded-2xl" />
          </motion.div>
        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-24 lg:mb-32 -mx-6 lg:-mx-8"
        >
          <MarqueeText 
            items={techStack} 
            speed={25}
            className="text-2xl lg:text-3xl font-bold text-white/10 py-8 border-y border-[#1f2937]"
          />
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24 lg:mb-32"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium mb-4">
              Команда
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Кто работает над проектами
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Штатные специалисты, не аутсорс. Каждый имеет опыт работы 
              в продуктовых компаниях и понимает как строить системы на долгую перспективу.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => {
              const isActive = activeTeamMember === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group"
                  onMouseEnter={() => {
                    setIsHovering(true);
                    setActiveTeamMember(index);
                  }}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <ImagePlaceholder 
                      src={member.image}
                      alt={member.name}
                      aspectRatio="portrait"
                      overlayColor={index % 2 === 0 ? "#00ff88" : "#00d4ff"}
                    />
                    
                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent transition-opacity duration-300 flex items-end p-6 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <p className="text-white/80 text-sm">{member.description}</p>
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-semibold transition-colors ${isActive ? 'text-[#00ff88]' : 'text-white'}`}>
                    {member.name}
                  </h3>
                  <p className="text-white/50 text-sm">{member.role}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Work Process - Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24 lg:mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div style={{ y: y1 }} className="space-y-4">
                <ImagePlaceholder 
                  src=""
                  alt="Рабочий процесс"
                  aspectRatio="portrait"
                  overlayColor="#00ff88"
                />
                <ImagePlaceholder 
                  src=""
                  alt="Код-ревью"
                  aspectRatio="square"
                  overlayColor="#8b5cf6"
                />
              </motion.div>
              <motion.div style={{ y: y2 }} className="space-y-4 pt-8">
                <ImagePlaceholder 
                  src=""
                  alt="Планирование спринта"
                  aspectRatio="square"
                  overlayColor="#00d4ff"
                />
                <ImagePlaceholder 
                  src=""
                  alt="Тестирование"
                  aspectRatio="portrait"
                  overlayColor="#ec4899"
                />
              </motion.div>
            </div>

            {/* Text */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-sm font-medium mb-6">
                Как мы работаем
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Инженерный подход, <br/>
                <span className="text-[#00ff88]">а не конвейер</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Мы не используем готовые шаблоны и не штампуем типовые решения. 
                  Каждый проект начинается с анализа бизнес-процессов и технических 
                  требований. Только после этого — архитектура и разработка.
                </p>
                <p>
                  Работаем по Scrum с двухнедельными спринтами. Каждую пятницу — 
                  демонстрация результатов и синхронизация по приоритетам. Вы видите 
                  прогресс и можете вносить коррективы без потери времени.
                </p>
                <p>
                  Код проходит обязательное ревью, покрыт автотестами и документирован. 
                  При передаче проекта вы получаете полный доступ к репозиторию, 
                  инфраструктуре и технической документации.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-24 lg:mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Принципы работы
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Фиксированная стоимость",
                text: "Оценка и стоимость фиксируются до начала работ. Дополнительные расходы только при расширении scope.",
                icon: "₽",
                color: "#00ff88",
              },
              {
                title: "Исходный код — ваш",
                text: "Полные права на код, доступы к репозиторию и инфраструктуре. Никакой привязки к нам.",
                icon: "</>",
                color: "#00d4ff",
              },
              {
                title: "Поддержка после запуска",
                text: "Гарантийный период входит в стоимость. Дальнейшая поддержка — по отдельному договору.",
                icon: "24/7",
                color: "#8b5cf6",
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937] hover:border-[#1f2937]/80 transition-all group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-mono font-bold mb-6"
                  style={{ backgroundColor: `${principle.color}15`, color: principle.color }}
                >
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {principle.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Office / Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24 lg:mb-32"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <ImagePlaceholder 
              src=""
              alt="Офис WebClinic"
              aspectRatio="wide"
              overlayColor="#00ff88"
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17]/90 via-[#0a0e17]/50 to-transparent flex items-center">
              <div className="p-8 lg:p-16 max-w-lg">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Работаем удалённо,<br/>
                  <span className="text-[#00ff88]">встречаемся лично</span>
                </h3>
                <p className="text-white/70 mb-6">
                  Команда распределена по России и СНГ. Для ключевых встреч 
                  и презентаций — офис в Москве. Для вас это означает: 
                  лучшие специалисты вне зависимости от географии.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-white/60">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Москва, Россия
                  </div>
                  <div className="w-px h-4 bg-[#1f2937]" />
                  <div className="flex items-center gap-2 text-white/60">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    UTC+3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto p-8 lg:p-12 rounded-3xl bg-[#0f1520] border border-[#1f2937] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-50">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, #00ff8810 0%, transparent 50%)`,
                }}
              />
            </div>
            
            <div className="relative">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Есть проект?
              </h3>
              <p className="text-white/60 mb-8">
                Опишите задачу — оценим сроки и стоимость, 
                предложим архитектурное решение.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-full hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105 group"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
