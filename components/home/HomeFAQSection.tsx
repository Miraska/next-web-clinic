"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export default function HomeFAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Сколько стоит сделать сайт?",
      answer:
        "Зависит от того, что вам нужно. Простой лендинг — от 50 000 ₽, сайт компании — от 150 000 ₽, интернет-магазин — от 300 000 ₽. Точную цену называем после разговора о вашей задаче. Консультация бесплатная, без обязательств.",
    },
    {
      question: "Сколько времени займёт работа?",
      answer:
        "Лендинг делаем за 3-4 недели, сайт компании — за 5-8 недель, интернет-магазин — за 2-3 месяца. Сроки зависят от объёма работ — обсудим и назовём конкретные даты до начала.",
    },
    {
      question: "Можно ли вносить изменения в процессе?",
      answer:
        "Да, конечно. Мы показываем промежуточные результаты каждую неделю, и вы можете вносить коррективы. Если изменения небольшие — включаем бесплатно. Если существенные — обсуждаем отдельно.",
    },
    {
      question: "Что если мне не понравится результат?",
      answer:
        "До начала работ мы согласовываем всё в деталях, показываем макеты и прототипы. В процессе работы — регулярные демонстрации. Так мы убеждаемся, что идём в правильном направлении.",
    },
    {
      question: "Нужно ли разбираться в технических вещах?",
      answer:
        "Нет. Мы объясняем всё простыми словами. Ваша задача — рассказать, что хотите получить. Мы предложим решение и объясним, почему оно подходит.",
    },
    {
      question: "Что будет после запуска сайта?",
      answer:
        "3 месяца бесплатно исправляем любые ошибки, если что-то не работает как договаривались. Дальше — можем помогать с обновлениями и развитием за отдельную плату, или вы можете работать с другой командой.",
    },
    {
      question: "Как начать работу?",
      answer:
        "Напишите или позвоните нам, расскажите о задаче. Мы зададим уточняющие вопросы и в течение 2-3 дней подготовим предложение с ценой и сроками. Дальше — решаете вы.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Частые <span className="text-blue-600">вопросы</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  className={`rounded-2xl border transition-all duration-200 ${
                    openItems.includes(index)
                      ? "bg-white border-blue-200 shadow-md"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 lg:px-8 py-5 text-left flex items-center justify-between focus:outline-none"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                        openItems.includes(index)
                          ? "bg-blue-600 rotate-45"
                          : "bg-slate-100"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transition-colors duration-200 ${
                          openItems.includes(index) ? "text-white" : "text-slate-600"
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
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-5">
                          <div className="border-t border-slate-100 pt-4">
                            <p className="text-slate-600 leading-relaxed">
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="max-w-xl mx-auto p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-slate-600 mb-6">
              Напишите нам — ответим в течение нескольких часов.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm"
                data-cta="faq-question"
              >
                Задать вопрос
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <a
                href="https://t.me/webclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
