"use client";
import { useRef } from "react";
import { ClipboardCheck, Briefcase, Clock, Users } from "lucide-react";

export default function HomeStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const facts = [
    {
      icon: ClipboardCheck,
      title: "Работаем с 2022 года",
      description: "Стабильная команда, накопленный опыт и отлаженные процессы",
    },
    {
      icon: Briefcase,
      title: "15+ проектов реализовано",
      description: "Сайты, CRM-системы, интернет-магазины, интеграции",
    },
    {
      icon: Clock,
      title: "Средний срок — 6-8 недель",
      description: "Для типового корпоративного сайта с админ-панелью",
    },
    {
      icon: Users,
      title: "Небольшая команда",
      description: "Напрямую общаетесь с теми, кто делает проект",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white border-y border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{fact.title}</h3>
                <p className="text-sm text-slate-500">{fact.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
