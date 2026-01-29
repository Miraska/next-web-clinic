"use client";
import { useState } from "react";
import Image from "next/image";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { ArrowRight, Check, Globe, Shield, Code, Headphones } from "lucide-react";

export default function HomeHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: Globe,
      title: "Работающий сайт",
      desc: "Современный, быстрый, адаптивный"
    },
    {
      icon: Shield,
      title: "Прозрачный процесс",
      desc: "Знаете цену и сроки до начала"
    },
    {
      icon: Code,
      title: "Исходный код",
      desc: "Передаём все файлы"
    },
    {
      icon: Headphones,
      title: "Поддержка",
      desc: "Не бросаем после запуска"
    },
  ];

  return (
    <>
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
        
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-blue-700 text-sm font-medium">
                  Веб-разработка для бизнеса
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Создаём веб-решения,{" "}
                <span className="text-blue-600">которые работают</span>{" "}
                на бизнес
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Сайты, интернет-магазины, CRM-системы и автоматизация процессов.
                Прозрачные цены, понятные сроки, договор и гарантии.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  data-cta="hero-consultation"
                >
                  Обсудить проект
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>

                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                  </svg>
                  Написать в Telegram
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Работаем по договору</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Фиксированная цена</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Гарантия 3 месяца</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative lg:pl-8">
              {/* Hero image/illustration area */}
              <div className="relative">
                {/* Main visual card */}
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Browser mockup header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 flex items-center gap-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        webclinic.dev
                      </div>
                    </div>
                  </div>
                  
                  {/* Code/dashboard visualization */}
                  <div className="p-6 space-y-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-800 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">15+</div>
                        <div className="text-xs text-slate-400 mt-1">Проектов</div>
                      </div>
                      <div className="bg-slate-800 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">100%</div>
                        <div className="text-xs text-slate-400 mt-1">В срок</div>
                      </div>
                      <div className="bg-slate-800 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">3 мес</div>
                        <div className="text-xs text-slate-400 mt-1">Гарантия</div>
                      </div>
                    </div>
                    
                    {/* Code snippet visualization */}
                    <div className="bg-slate-800 rounded-lg p-4 font-mono text-xs">
                      <div className="flex items-center gap-2 text-slate-500 mb-2">
                        <Code className="w-4 h-4" />
                        <span>solution.tsx</span>
                      </div>
                      <div className="space-y-1">
                        <div><span className="text-blue-400">const</span> <span className="text-slate-300">solution</span> = <span className="text-yellow-400">{"{"}</span></div>
                        <div className="pl-4"><span className="text-slate-400">quality:</span> <span className="text-green-400">&apos;high&apos;</span>,</div>
                        <div className="pl-4"><span className="text-slate-400">deadline:</span> <span className="text-green-400">&apos;on-time&apos;</span>,</div>
                        <div className="pl-4"><span className="text-slate-400">support:</span> <span className="text-green-400">&apos;always&apos;</span></div>
                        <div><span className="text-yellow-400">{"}"}</span>;</div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span>Ваш проект</span>
                        <span>Готово</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-blue-600 text-white rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-sm font-medium">Консультация бесплатно</div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-8 w-16 h-16 bg-slate-100 rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
