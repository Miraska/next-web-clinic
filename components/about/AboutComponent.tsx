"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);

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

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Надёжность",
      description: "Создаём системы, которые работают. Тестируем, документируем, поддерживаем. Отвечаем за качество своей работы.",
      color: "#00ff88",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Прозрачность",
      description: "Чёткие сроки и стоимость. Регулярные отчёты о прогрессе. Открытое обсуждение сложностей и рисков.",
      color: "#00d4ff",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Эффективность",
      description: "Фокус на бизнес-результате. Не усложняем там, где можно упростить. Выбираем оптимальные решения.",
      color: "#8b5cf6",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Гибкость",
      description: "Адаптируемся под ваши процессы. Учитываем обратную связь. Готовы к изменениям на любом этапе.",
      color: "#ec4899",
    },
  ];

  const principles = [
    {
      title: "Понимаем бизнес, а не только код",
      description: "Прежде чем писать код, разбираемся в вашей бизнес-модели. Это позволяет создавать решения, которые реально помогают, а не просто технически работают.",
    },
    {
      title: "Не делаем «дёшево и быстро»",
      description: "Качественная разработка требует времени и ресурсов. Мы честно оцениваем сложность и не демпингуем. Вы платите за работающий продукт, а не за «MVP за неделю».",
    },
    {
      title: "Долгосрочные отношения",
      description: "Большинство клиентов остаются с нами на годы. Мы не просто сдаём проект — мы становимся вашим техническим партнёром.",
    },
    {
      title: "Документируем и передаём",
      description: "Весь код, доступы и документация остаются у вас. Вы не зависите от нас и можете продолжить развитие с другой командой.",
    },
  ];

  const stats = [
    { value: "50+", label: "Завершённых проектов", icon: "📊" },
    { value: "5+", label: "Лет на рынке", icon: "⏰" },
    { value: "30+", label: "Постоянных клиентов", icon: "🤝" },
    { value: "98%", label: "Довольных заказчиков", icon: "⭐" },
  ];

  return (
    <section ref={sectionRef} className="pt-32 pb-24 lg:pb-32 bg-[#0a0e17] min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern-animated opacity-20" />
      <div className="orb orb-green w-[600px] h-[600px] -top-64 -right-64 opacity-15" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-1/4 -left-48 opacity-10" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-0 right-0 opacity-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-medium mb-6"
          >
            О компании
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Мы — <span className="gradient-text">WebClinic</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Команда разработчиков, которая создаёт системы для бизнеса.
            Не фрилансеры, не стартап — системная компания с процессами и ответственностью.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-2xl bg-[#0f1520] border border-[#1f2937] hover:border-[#00ff88]/20 transition-all duration-300 group card-hover"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">
                  {stat.value.includes("+") || stat.value.includes("%") ? (
                    <>
                      {stat.value.replace(/[+%]/g, "")}
                      <span className="text-[#00ff88]">
                        {stat.value.includes("+") ? "+" : "%"}
                      </span>
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-24"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Наши <span className="gradient-text">ценности</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedValue(index)}
                className={`p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-500 card-hover ${
                  selectedValue === index
                    ? "bg-[#0f1520]"
                    : "bg-[#0f1520]/50 border border-[#1f2937]"
                }`}
                style={{
                  borderColor: selectedValue === index ? value.color : undefined,
                  borderWidth: selectedValue === index ? 2 : 1,
                  boxShadow: selectedValue === index ? `0 0 40px ${value.color}20` : "none",
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ 
                    backgroundColor: `${value.color}20`,
                    color: value.color,
                    boxShadow: selectedValue === index ? `0 0 20px ${value.color}40` : "none",
                  }}
                >
                  {value.icon}
                </div>
                <h3 
                  className="text-lg font-bold mb-2 transition-colors duration-300"
                  style={{ color: selectedValue === index ? value.color : "white" }}
                >
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-24"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Как мы <span className="gradient-text">думаем</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937] hover:border-[#00ff88]/20 transition-all duration-300 group card-hover"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#00ff88]/30 group-hover:text-[#00ff88]/50 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Not */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-24"
        >
          <div className="max-w-4xl mx-auto p-8 lg:p-12 rounded-2xl bg-[#0f1520] border border-[#ff6b6b]/20">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
              Мы <span className="text-[#ff6b6b]">не подходим</span>, если вам нужно:
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Сайт за 3 дня и 10 000 ₽",
                "«Просто скопировать как у конкурента»",
                "Работа без договора и ТЗ",
                "Бесконечные правки без доплаты",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 text-white/60 p-3 rounded-lg bg-[#ff6b6b]/5"
                >
                  <span className="text-[#ff6b6b] text-xl">✗</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/20 gradient-border">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Готовы обсудить проект?
            </h3>
            <p className="text-white/60 mb-8">
              Расскажите о вашей задаче — проведём бесплатную консультацию 
              и определим, сможем ли помочь.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-full hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] group"
            >
              Связаться с нами
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
