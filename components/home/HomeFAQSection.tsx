"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomeFAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([0]);

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

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Сколько стоит разработка проекта?",
      answer:
        "Стоимость зависит от сложности и объёма задач. Корпоративный сайт — от 150 000 ₽, веб-приложение — от 400 000 ₽, CRM/ERP система — от 800 000 ₽. Точную стоимость определяем после анализа требований на бесплатной консультации.",
    },
    {
      question: "Сколько времени занимает разработка?",
      answer:
        "Сроки зависят от масштаба проекта. Корпоративный сайт — 4-6 недель, веб-приложение — 2-3 месяца, комплексная CRM/ERP система — 3-6 месяцев. На старте проекта составляем детальный план с конкретными датами.",
    },
    {
      question: "Как происходит процесс работы?",
      answer:
        "Работаем по чёткому процессу: анализ требований → техническое задание → прототип и дизайн → разработка → тестирование → запуск. На каждом этапе демонстрируем результат и согласовываем следующие шаги. Используем Jira для прозрачного трекинга задач.",
    },
    {
      question: "Что входит в поддержку после запуска?",
      answer:
        "После запуска предоставляем гарантийную поддержку на 3 месяца: исправление багов, мелкие доработки. Далее предлагаем платную техническую поддержку: мониторинг, обновления, резервное копирование, развитие функционала.",
    },
    {
      question: "Можете ли вы доработать существующий проект?",
      answer:
        "Да, работаем с готовыми проектами: рефакторинг кода, добавление функционала, оптимизация производительности, миграция на современный стек. Перед началом проводим аудит текущего состояния системы.",
    },
    {
      question: "Какие гарантии вы даёте?",
      answer:
        "Фиксируем стоимость и сроки в договоре. Не берём предоплату более 30%. Исходный код передаём полностью. Гарантийная поддержка включена в стоимость проекта. NDA подписываем при необходимости.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0f1520] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb orb-green w-96 h-96 -top-48 -left-48 animate-float" />
      <div className="orb orb-cyan w-64 h-64 -bottom-32 -right-32 animate-float-delayed" />
      
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
            className="inline-block px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-medium mb-6"
          >
            FAQ
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Частые <span className="text-[#00ff88] text-glow-green">вопросы</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            Ответы на вопросы, которые нам задают чаще всего.
            Не нашли свой вопрос? Свяжитесь с нами.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group"
              >
                <div
                  className={`rounded-2xl border transition-all duration-500 card-hover ${
                    openItems.includes(index)
                      ? "bg-[#0a0e17] border-[#00ff88]/30 glow-green"
                      : "bg-[#0a0e17] border-[#1f2937] hover:border-[#00ff88]/20"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 ${
                        openItems.includes(index)
                          ? "bg-[#00ff88] rotate-45 glow-green"
                          : "bg-[#1f2937] group-hover:bg-[#00ff88]/20"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transition-colors duration-300 ${
                          openItems.includes(index) ? "text-[#0a0e17]" : "text-white"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-6">
                          <div className="border-t border-[#1f2937] pt-4">
                            <p className="text-white/60 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="max-w-xl mx-auto p-8 lg:p-10 rounded-2xl bg-[#0a0e17] border border-[#1f2937] gradient-border">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Остались вопросы?
            </h3>
            <p className="text-white/60 mb-6">
              Расскажите о вашем проекте — проведём бесплатную консультацию 
              и подготовим предварительную оценку.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-full hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] group"
            >
              Получить консультацию
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
