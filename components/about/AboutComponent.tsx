"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ConsultationModal from "@/components/ui/ConsultationModal";
import {
  MessageSquare,
  Shield,
  Zap,
  Users,
  Globe,
  ShoppingCart,
  BarChart3,
  Bot,
  Settings,
  Wrench,
  FileText,
  DollarSign,
  Code,
  CheckCircle,
  Clock,
  X,
  ArrowRight,
} from "lucide-react";

export default function AboutComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = [
    {
      icon: MessageSquare,
      title: "Честность",
      description: "Говорим как есть. Если видим риски или не можем помочь — скажем прямо. Не обещаем невозможного ради заказа.",
    },
    {
      icon: Shield,
      title: "Ответственность",
      description: "Берёмся за проект — доводим до конца. Делаем работу качественно, потому что нам важна репутация.",
    },
    {
      icon: Zap,
      title: "Простота",
      description: "Объясняем сложные технические вещи простым языком. Без пафоса, без лишних терминов — по делу.",
    },
    {
      icon: Users,
      title: "Партнёрство",
      description: "Работаем вместе с вами, а не для вас. Ваша экспертиза в бизнесе + наш опыт в разработке = лучший результат.",
    },
  ];

  const whatWeDo = [
    { icon: Globe, title: "Сайты", desc: "Лендинги, сайты-визитки, корпоративные порталы" },
    { icon: ShoppingCart, title: "Интернет-магазины", desc: "E-commerce с оплатой, доставкой, интеграциями" },
    { icon: BarChart3, title: "CRM/ERP", desc: "Кастомные системы управления бизнесом" },
    { icon: Bot, title: "Чат-боты", desc: "Telegram, WhatsApp, боты на сайт" },
    { icon: Settings, title: "Интеграции", desc: "API, связь систем, автоматизация" },
    { icon: Wrench, title: "Поддержка", desc: "Техническое сопровождение проектов" },
  ];

  const whatWeDontDo = [
    { text: "«Срочно за 3 дня»", note: "Качественная работа требует адекватных сроков" },
    { text: "Демпинг в ущерб качеству", note: "Честная цена за честную работу" },
    { text: "Проекты без понятной задачи", note: "Но можем помочь её сформулировать" },
    { text: "Обещать невозможное", note: "Реалистичные ожидания — залог успеха" },
  ];

  const timeline = [
    { 
      year: "2022", 
      title: "Старт", 
      description: "Начали работать как команда. Первые проекты для малого бизнеса.",
      highlight: false 
    },
    { 
      year: "2023", 
      title: "Рост", 
      description: "Расширили спектр услуг: CRM-системы, интеграции, чат-боты. 10+ проектов.",
      highlight: false 
    },
    { 
      year: "2024", 
      title: "Развитие", 
      description: "Крупные проекты, e-commerce, автоматизация бизнес-процессов.",
      highlight: false 
    },
    { 
      year: "Сейчас", 
      title: "Сегодня", 
      description: "15+ реализованных проектов. Стабильная команда, отлаженные процессы.",
      highlight: true 
    },
  ];

  const guarantees = [
    { 
      icon: FileText,
      title: "Работа по договору", 
      desc: "Официальное оформление, все условия зафиксированы" 
    },
    { 
      icon: DollarSign,
      title: "Фиксированная цена", 
      desc: "Называем стоимость до начала, не меняем в процессе" 
    },
    { 
      icon: Code,
      title: "Код остаётся у вас", 
      desc: "Передаём все исходники, вы не привязаны к нам" 
    },
    { 
      icon: CheckCircle,
      title: "Гарантия 3 месяца", 
      desc: "Бесплатно исправляем баги после запуска" 
    },
  ];

  const smallTeamBenefits = [
    "Общаетесь напрямую с теми, кто делает проект",
    "Нет бюрократии и долгих согласований",
    "Быстрее реагируем на ваши пожелания",
    "Личная ответственность за результат",
    "Гибкость в подходе к каждому проекту",
    "Честные цены без накруток на «бренд»",
  ];

  return (
    <>
      <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              О нас
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              Небольшая команда,<br />
              <span className="text-blue-600">большие результаты</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Мы — команда разработчиков, которая делает сайты и веб-системы для бизнеса.
              Работаем с 2022 года, за это время реализовали 15+ проектов.
            </p>
          </div>

          {/* Team image placeholder */}
          <div className="mb-16">
            <div className="relative h-64 lg:h-96 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-400 text-sm">Фото команды</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why small team */}
          <div className="mb-16">
            <div className="p-6 lg:p-8 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="lg:w-1/3">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Почему небольшая команда — это хорошо</h2>
                  <p className="text-slate-600">
                    Многие думают, что чем больше агентство — тем лучше. На практике часто наоборот.
                  </p>
                </div>
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-3">
                  {smallTeamBenefits.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-blue-100">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Наш путь</h2>
            <div className="relative">
              {/* Timeline line - desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2" />
              
              <div className="grid lg:grid-cols-4 gap-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Dot - desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className={`w-4 h-4 rounded-full ${item.highlight ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-300'}`} />
                    </div>
                    
                    <div className={`p-6 rounded-2xl ${item.highlight ? 'bg-blue-50 border-2 border-blue-200' : 'bg-slate-50 border border-slate-200'} lg:mt-8`}>
                      <div className={`text-2xl font-bold mb-2 ${item.highlight ? 'text-blue-600' : 'text-slate-400'}`}>
                        {item.year}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What we do */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Чем мы занимаемся</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatWeDo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Наши ценности</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index} 
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What we don't do */}
          <div className="mb-16">
            <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <X className="w-6 h-6 text-slate-400" />
                Что мы не делаем
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {whatWeDontDo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-slate-500" />
                    </div>
                    <div>
                      <span className="text-slate-700 font-medium">{item.text}</span>
                      <p className="text-sm text-slate-500 mt-0.5">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Наши гарантии</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guarantees.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 rounded-2xl bg-blue-50 border border-blue-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 lg:p-10 rounded-2xl bg-slate-900 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Готовы познакомиться?
                </h3>
                <p className="text-slate-300 max-w-xl">
                  Расскажите о вашей задаче — обсудим, чем можем помочь.
                  Первая консультация бесплатная.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  data-cta="about-consultation"
                >
                  Обсудить проект
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap"
                >
                  Смотреть проекты
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
