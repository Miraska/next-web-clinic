"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function HomeForWhomSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goodFor = [
    {
      icon: "🎯",
      text: "У вас есть конкретная бизнес-задача",
      subtext: "Вы понимаете, какую проблему хотите решить с помощью сайта или системы"
    },
    {
      icon: "📈",
      text: "Вам важен результат, а не процесс",
      subtext: "Хотите получить работающий инструмент, который принесёт пользу бизнесу"
    },
    {
      icon: "💬",
      text: "Готовы к диалогу",
      subtext: "Лучшие проекты рождаются в сотрудничестве — ваша экспертиза + наш опыт"
    },
    {
      icon: "🚀",
      text: "Планируете развивать проект",
      subtext: "Делаем с заделом на рост, чтобы потом было легко добавлять новое"
    },
    {
      icon: "⏰",
      text: "Понимаете, что качество требует времени",
      subtext: "Хороший сайт за 3 дня — это миф, но мы работаем без лишних затяжек"
    },
  ];

  const notFor = [
    {
      icon: "💰",
      text: "Ищете самый дешёвый вариант",
      subtext: "Мы не демпингуем — честная цена за честную работу",
      solution: "Если бюджет ограничен, поможем расставить приоритеты"
    },
    {
      icon: "⚡",
      text: "«Нужно вчера»",
      subtext: "Качественная работа требует адекватных сроков",
      solution: "Для срочных задач можем предложить MVP-подход"
    },
    {
      icon: "❓",
      text: "«Сделайте круто, а там посмотрим»",
      subtext: "Без понимания задачи сложно сделать хороший продукт",
      solution: "Поможем сформулировать требования на консультации"
    },
    {
      icon: "🔄",
      text: "Бесконечные правки без конца",
      subtext: "Работаем по понятному ТЗ с фиксированным объёмом",
      solution: "Правки входят в стоимость, но в разумных пределах"
    },
  ];

  const industries = [
    { icon: "🏥", name: "Медицина и клиники" },
    { icon: "🏗️", name: "Строительство и ремонт" },
    { icon: "🎓", name: "Образование и курсы" },
    { icon: "🛍️", name: "Розница и e-commerce" },
    { icon: "🏭", name: "Производство и B2B" },
    { icon: "🚗", name: "Автобизнес" },
    { icon: "🏠", name: "Недвижимость" },
    { icon: "💼", name: "Услуги для бизнеса" },
    { icon: "🍽️", name: "HoReCa" },
    { icon: "💪", name: "Фитнес и спорт" },
    { icon: "💇", name: "Бьюти-индустрия" },
    { icon: "🎨", name: "Креатив и медиа" },
  ];

  return (
    <>
      <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              Честно о работе
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Подходим ли мы <span className="text-blue-600">друг другу</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Мы не работаем со всеми подряд — выбираем проекты, где можем дать максимальную пользу.
              Честность сэкономит время обеим сторонам.
            </p>
          </motion.div>

          {/* Two columns */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Good for */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-50/50 border border-emerald-100 h-full">
                {/* Badge */}
                <div className="absolute -top-3 left-6 px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-emerald-500/30">
                  Мы подходим
                </div>

                <div className="flex items-center gap-3 mb-6 mt-2">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Вам понравится с нами</h3>
                    <p className="text-sm text-slate-500">если вы узнаёте себя</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {goodFor.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-4 p-3 rounded-xl bg-white/70 hover:bg-white transition-colors"
                    >
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="text-slate-900 font-medium">{item.text}</div>
                        <div className="text-sm text-slate-500">{item.subtext}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Not for */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full">
                {/* Badge */}
                <div className="absolute -top-3 left-6 px-4 py-1 bg-slate-500 text-white text-sm font-semibold rounded-full">
                  Честное предупреждение
                </div>

                <div className="flex items-center gap-3 mb-6 mt-2">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Скорее не сработаемся</h3>
                    <p className="text-sm text-slate-500">но есть выход из ситуации</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {notFor.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="p-3 rounded-xl bg-white/50 hover:bg-white transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <div className="text-slate-700 font-medium">{item.text}</div>
                          <div className="text-sm text-slate-500">{item.subtext}</div>
                          <div className="text-sm text-emerald-600 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            {item.solution}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">С какими сферами работаем</h3>
              <p className="text-slate-500 text-sm">Опыт в разных отраслях помогает находить лучшие решения</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.03 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full hover:border-blue-300 hover:bg-blue-50 transition-all cursor-default"
                >
                  <span>{industry.icon}</span>
                  <span className="text-sm text-slate-600">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Don't know what you need? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-50/50 border border-blue-100"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Не уверены, что вам нужно?
                  </h3>
                  <p className="text-slate-600 max-w-xl">
                    Это нормальная ситуация. Расскажите о бизнесе и целях — 
                    поможем разобраться, какой инструмент решит вашу задачу лучше всего.
                    Первая консультация бесплатная.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 whitespace-nowrap"
                  data-cta="for-whom-consultation"
                >
                  Получить консультацию
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 bg-white text-slate-700 font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all whitespace-nowrap"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
