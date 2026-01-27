"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HomeClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const industries = [
    {
      icon: "🏥",
      title: "Медицина",
      examples: ["Клиники", "Лаборатории", "Телемедицина"],
      color: "blue",
    },
    {
      icon: "🏗️",
      title: "Строительство",
      examples: ["Застройщики", "Ремонт", "Проектирование"],
      color: "orange",
    },
    {
      icon: "🎓",
      title: "Образование",
      examples: ["Онлайн-школы", "Курсы", "Репетиторы"],
      color: "violet",
    },
    {
      icon: "🛍️",
      title: "Ритейл",
      examples: ["Магазины", "Маркетплейсы", "Оптовики"],
      color: "emerald",
    },
    {
      icon: "🏭",
      title: "Производство",
      examples: ["Заводы", "Цеха", "B2B-продажи"],
      color: "slate",
    },
    {
      icon: "🚗",
      title: "Авто",
      examples: ["Автосалоны", "Сервисы", "Запчасти"],
      color: "red",
    },
    {
      icon: "🏠",
      title: "Недвижимость",
      examples: ["Агентства", "Застройщики", "Управление"],
      color: "amber",
    },
    {
      icon: "💼",
      title: "B2B-услуги",
      examples: ["Консалтинг", "Аутсорс", "IT-сервисы"],
      color: "cyan",
    },
    {
      icon: "🍽️",
      title: "HoReCa",
      examples: ["Рестораны", "Кафе", "Доставка"],
      color: "rose",
    },
    {
      icon: "💪",
      title: "Фитнес",
      examples: ["Залы", "Студии", "Тренеры"],
      color: "lime",
    },
    {
      icon: "💇",
      title: "Бьюти",
      examples: ["Салоны", "Барбершопы", "СПА"],
      color: "pink",
    },
    {
      icon: "📦",
      title: "Логистика",
      examples: ["Перевозки", "Склады", "Курьеры"],
      color: "indigo",
    },
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 hover:bg-blue-100 border-blue-100",
    orange: "bg-orange-50 hover:bg-orange-100 border-orange-100",
    violet: "bg-violet-50 hover:bg-violet-100 border-violet-100",
    emerald: "bg-emerald-50 hover:bg-emerald-100 border-emerald-100",
    slate: "bg-slate-50 hover:bg-slate-100 border-slate-200",
    red: "bg-red-50 hover:bg-red-100 border-red-100",
    amber: "bg-amber-50 hover:bg-amber-100 border-amber-100",
    cyan: "bg-cyan-50 hover:bg-cyan-100 border-cyan-100",
    rose: "bg-rose-50 hover:bg-rose-100 border-rose-100",
    lime: "bg-lime-50 hover:bg-lime-100 border-lime-100",
    pink: "bg-pink-50 hover:bg-pink-100 border-pink-100",
    indigo: "bg-indigo-50 hover:bg-indigo-100 border-indigo-100",
  };

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-white border-y border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Работаем с разными <span className="text-blue-600">отраслями</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Опыт в разных сферах помогает находить лучшие решения. 
            Знаем специфику и типичные задачи каждой отрасли.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className={`p-4 rounded-xl border transition-all duration-200 cursor-default group ${colorClasses[industry.color]}`}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{industry.icon}</div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">{industry.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-1">
                {industry.examples.join(", ")}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-slate-400 mt-8"
        >
          Не нашли свою отрасль? Это не значит, что мы не можем помочь — напишите нам.
        </motion.p>
      </div>
    </section>
  );
}
