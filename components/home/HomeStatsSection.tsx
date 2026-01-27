"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HomeStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Честные факты без выдуманных цифр
  const facts = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Работаем с 2022 года",
      description: "Стабильная команда, накопленный опыт и отлаженные процессы",
      color: "blue",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "15+ проектов реализовано",
      description: "Сайты, CRM-системы, интернет-магазины, интеграции",
      color: "emerald",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Средний срок — 6-8 недель",
      description: "Для типового корпоративного сайта с админ-панелью",
      color: "violet",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Небольшая команда",
      description: "Напрямую общаетесь с теми, кто делает проект",
      color: "orange",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; light: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", light: "bg-emerald-50" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", light: "bg-violet-50" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", light: "bg-orange-50" },
  };

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-white border-y border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => {
            const colors = colorClasses[fact.color];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-2xl ${colors.light} border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300 h-full`}>
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {fact.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{fact.title}</h3>
                  <p className="text-sm text-slate-500">{fact.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
