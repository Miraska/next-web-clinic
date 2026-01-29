"use client";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import {
  Target,
  TrendingUp,
  MessageSquare,
  Rocket,
  Clock,
  Wallet,
  Zap,
  HelpCircle,
  RefreshCw,
  Building2,
  Hammer,
  GraduationCap,
  ShoppingBag,
  Factory,
  Car,
  Home,
  Briefcase,
  UtensilsCrossed,
  Dumbbell,
  Scissors,
  Palette,
  Check,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

export default function HomeForWhomSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goodFor = [
    {
      icon: Target,
      text: "У вас есть конкретная бизнес-задача",
      subtext: "Вы понимаете, какую проблему хотите решить с помощью сайта или системы"
    },
    {
      icon: TrendingUp,
      text: "Вам важен результат, а не процесс",
      subtext: "Хотите получить работающий инструмент, который принесёт пользу бизнесу"
    },
    {
      icon: MessageSquare,
      text: "Готовы к диалогу",
      subtext: "Совместная работа — ваша экспертиза + наш опыт"
    },
    {
      icon: Rocket,
      text: "Планируете развивать проект",
      subtext: "Делаем с заделом на рост, чтобы потом было легко добавлять новое"
    },
    {
      icon: Clock,
      text: "Понимаете, что качество требует времени",
      subtext: "Хороший сайт за 3 дня — это миф, но мы работаем без лишних затяжек"
    },
  ];

  const notFor = [
    {
      icon: Wallet,
      text: "Ищете самый дешёвый вариант",
      subtext: "Мы не демпингуем — честная цена за честную работу",
      solution: "Если бюджет ограничен, поможем расставить приоритеты"
    },
    {
      icon: Zap,
      text: "«Нужно вчера»",
      subtext: "Качественная работа требует адекватных сроков",
      solution: "Для срочных задач можем предложить MVP-подход"
    },
    {
      icon: HelpCircle,
      text: "«Сделайте круто, а там посмотрим»",
      subtext: "Без понимания задачи сложно сделать хороший продукт",
      solution: "Поможем сформулировать требования на консультации"
    },
    {
      icon: RefreshCw,
      text: "Бесконечные правки без конца",
      subtext: "Работаем по понятному ТЗ с фиксированным объёмом",
      solution: "Правки входят в стоимость, но в разумных пределах"
    },
  ];

  const industries = [
    { icon: Building2, name: "Медицина и клиники" },
    { icon: Hammer, name: "Строительство и ремонт" },
    { icon: GraduationCap, name: "Образование и курсы" },
    { icon: ShoppingBag, name: "Розница и e-commerce" },
    { icon: Factory, name: "Производство и B2B" },
    { icon: Car, name: "Автобизнес" },
    { icon: Home, name: "Недвижимость" },
    { icon: Briefcase, name: "Услуги для бизнеса" },
    { icon: UtensilsCrossed, name: "HoReCa" },
    { icon: Dumbbell, name: "Фитнес и спорт" },
    { icon: Scissors, name: "Бьюти-индустрия" },
    { icon: Palette, name: "Креатив и медиа" },
  ];

  return (
    <>
      <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Честно о работе
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Подходим ли мы <span className="text-blue-600">друг другу</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Мы не работаем со всеми подряд — выбираем проекты, где можем дать максимальную пользу.
              Честность сэкономит время обеим сторонам.
            </p>
          </div>

          {/* Two columns */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Good for */}
            <div className="relative">
              <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full">
                {/* Badge */}
                <div className="absolute -top-3 left-6 px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  Мы подходим
                </div>

                <div className="flex items-center gap-3 mb-6 mt-2">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Вам понравится с нами</h3>
                    <p className="text-sm text-slate-500">если вы узнаёте себя</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {goodFor.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-200 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-slate-900 font-medium">{item.text}</div>
                          <div className="text-sm text-slate-500 mt-0.5">{item.subtext}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Not for */}
            <div className="relative">
              <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full">
                {/* Badge */}
                <div className="absolute -top-3 left-6 px-4 py-1 bg-slate-500 text-white text-sm font-medium rounded-full">
                  Честное предупреждение
                </div>

                <div className="flex items-center gap-3 mb-6 mt-2">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Скорее не сработаемся</h3>
                    <p className="text-sm text-slate-500">но есть выход из ситуации</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {notFor.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-white border border-slate-100"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-slate-500" />
                          </div>
                          <div>
                            <div className="text-slate-700 font-medium">{item.text}</div>
                            <div className="text-sm text-slate-500 mt-0.5">{item.subtext}</div>
                            <div className="text-sm text-blue-600 mt-2 flex items-center gap-1.5">
                              <ArrowRight className="w-3.5 h-3.5" />
                              {item.solution}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">С какими сферами работаем</h3>
              <p className="text-slate-500 text-sm">Опыт в разных отраслях помогает находить лучшие решения</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:border-blue-200 hover:bg-blue-50/50 transition-all"
                  >
                    <IconComponent className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">{industry.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Don't know what you need? */}
          <div className="p-6 lg:p-8 rounded-2xl bg-blue-50 border border-blue-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Не уверены, что вам нужно?
                  </h3>
                  <p className="text-slate-600 max-w-xl">
                    Это нормальная ситуация. Расскажите о бизнесе и целях — 
                    поможем разобраться, какой инструмент решит вашу задачу лучше всего.
                  
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  data-cta="for-whom-consultation"
                >
                  Связаться
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 bg-white text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
