"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
  X,
  ArrowRight,
} from "lucide-react";

export default function AboutComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Алексей",
      role: "Фронтенд-разработчик",
      image: "/team/alexey.jpg",
      description: "React, Next.js, TypeScript",
    },
    {
      name: "Дмитрий",
      role: "Бэкенд-разработчик",
      image: "/team/dmitry.jpg",
      description: "Node.js, Python, базы данных",
    },
    {
      name: "Мария",
      role: "UI/UX дизайнер",
      image: "/team/maria.jpg",
      description: "Проектирование интерфейсов",
    },
  ];

  const values = [
    {
      icon: MessageSquare,
      title: "Прозрачность",
      description: "Открытая коммуникация на всех этапах проекта. Информирование о статусе и рисках.",
      accent: "blue",
    },
    {
      icon: Shield,
      title: "Ответственность",
      description: "Выполнение обязательств в рамках договора. Соблюдение согласованных сроков.",
      accent: "teal",
    },
    {
      icon: Zap,
      title: "Понятность",
      description: "Техническая информация представляется в доступной форме.",
      accent: "blue",
    },
    {
      icon: Users,
      title: "Сотрудничество",
      description: "Совместная работа над проектом. Учёт требований и обратной связи.",
      accent: "teal",
    },
  ];

  const whatWeDo = [
    { icon: Globe, title: "Сайты", desc: "Лендинги, сайты-визитки, корпоративные порталы", accent: "blue" },
    { icon: ShoppingCart, title: "Интернет-магазины", desc: "E-commerce с оплатой, доставкой, интеграциями", accent: "teal" },
    { icon: BarChart3, title: "CRM/ERP", desc: "Кастомные системы управления бизнесом", accent: "blue" },
    { icon: Bot, title: "Чат-боты", desc: "Telegram, WhatsApp, боты на сайт", accent: "teal" },
    { icon: Settings, title: "Интеграции", desc: "API, связь систем, автоматизация", accent: "blue" },
    { icon: Wrench, title: "Поддержка", desc: "Техническое сопровождение проектов", accent: "teal" },
  ];

  const whatWeDontDo = [
    { text: "Нереалистичные сроки", note: "Сроки формируются на основе анализа задачи" },
    { text: "Работа без договора", note: "Все условия фиксируются документально" },
    { text: "Проекты без технического задания", note: "Помогаем его сформировать при необходимости" },
    { text: "Гарантии невозможного", note: "Честная оценка возможностей и рисков" },
  ];

  const timeline = [
    { 
      year: "2022", 
      title: "Начало работы", 
      description: "Формирование команды. Первые проекты по веб-разработке.",
      accent: "blue",
    },
    { 
      year: "2023", 
      title: "Расширение услуг", 
      description: "Добавление направлений: CRM-системы, интеграции, чат-боты.",
      accent: "teal",
    },
    { 
      year: "2024", 
      title: "Развитие", 
      description: "E-commerce проекты, автоматизация бизнес-процессов.",
      accent: "blue",
    },
    { 
      year: "2025", 
      title: "Текущий момент", 
      description: "Продолжение работы над B2B-проектами.",
      highlight: true,
      accent: "teal",
    },
  ];

  const guarantees = [
    { 
      icon: FileText,
      title: "Работа по договору", 
      desc: "Официальное оформление всех условий сотрудничества",
      accent: "blue",
    },
    { 
      icon: DollarSign,
      title: "Фиксированные условия", 
      desc: "Стоимость и сроки согласовываются до начала работ",
      accent: "teal",
    },
    { 
      icon: Code,
      title: "Передача результатов", 
      desc: "Исходный код и документация передаются клиенту",
      accent: "blue",
    },
    { 
      icon: CheckCircle,
      title: "Техническая поддержка", 
      desc: "Исправление ошибок в рамках гарантийного периода",
      accent: "teal",
    },
  ];

  const smallTeamBenefits = [
    "Прямая коммуникация с командой разработки",
    "Минимум согласований и бюрократии",
    "Оперативная реакция на обратную связь",
    "Персональная ответственность за результат",
    "Индивидуальный подход к каждому проекту",
    "Прозрачное ценообразование",
  ];

  return (
    <>
      <section ref={sectionRef} className="min-h-screen">
        {/* Hero Section with Background */}
        <div className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-slate-900/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/90" />
          </div>
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
            <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6 border border-blue-500/30">
                О компании
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Команда{" "}
                <span className="text-gradient-blue">веб-разработки</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Разработка сайтов и веб-систем для бизнеса.
                Работа по договору, прозрачный процесс.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            {/* Team Members */}
            <div className={`mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Наша команда</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[3/4] hover:shadow-xl transition-all duration-300"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                      <p className="text-slate-300 text-sm">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why small team */}
            <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/50">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-1/3">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">Преимущества небольшой команды</h2>
                    <p className="text-slate-600">
                      Особенности работы с компактной командой разработчиков.
                    </p>
                  </div>
                  <div className="lg:w-2/3 grid sm:grid-cols-2 gap-3">
                    {smallTeamBenefits.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:shadow-md transition-all">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          index % 2 === 0 ? "bg-blue-100" : "bg-teal-100"
                        }`}>
                          <CheckCircle className={`w-3.5 h-3.5 ${index % 2 === 0 ? "text-blue-600" : "text-teal-600"}`} />
                        </div>
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline with background */}
            <div className={`mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative rounded-2xl overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&q=80"
                    alt="Office timeline"
                    fill
                    className="object-cover opacity-[0.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
                </div>
                
                <div className="relative p-6 lg:p-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Наш путь</h2>
                  <div className="relative">
                    {/* Timeline line - desktop */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 rounded-full" />
                    
                    <div className="grid lg:grid-cols-4 gap-6">
                      {timeline.map((item, index) => {
                        const isBlue = item.accent === "blue";
                        return (
                          <div key={index} className="relative">
                            {/* Dot - desktop */}
                            <div className="hidden lg:flex absolute top-4 left-1/2 -translate-x-1/2 z-10">
                              <div className={`w-5 h-5 rounded-full border-4 border-white shadow-md ${
                                item.highlight 
                                  ? 'bg-gradient-to-r from-blue-600 to-teal-600' 
                                  : isBlue ? 'bg-blue-500' : 'bg-teal-500'
                              }`} />
                            </div>
                            
                            <div className={`p-6 rounded-2xl lg:mt-10 transition-all hover:shadow-lg hover:-translate-y-1 ${
                              item.highlight 
                                ? 'bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-teal-200 shadow-lg' 
                                : 'bg-white border border-slate-200 hover:border-blue-200'
                            }`}>
                              <div className={`text-2xl font-bold mb-2 ${
                                item.highlight 
                                  ? 'text-gradient-blue' 
                                  : isBlue ? 'text-blue-600' : 'text-teal-600'
                              }`}>
                                {item.year}
                              </div>
                              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                              <p className="text-sm text-slate-600">{item.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What we do - Swiper on mobile */}
            <div className={`mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Чем мы занимаемся</h2>
              
              {/* Desktop grid */}
              <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {whatWeDo.map((item, index) => {
                  const IconComponent = item.icon;
                  const isBlue = item.accent === "blue";
                  return (
                    <div 
                      key={index} 
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                        isBlue 
                          ? "bg-blue-100 group-hover:bg-blue-600" 
                          : "bg-teal-100 group-hover:bg-teal-600"
                      }`}>
                        <IconComponent className={`w-6 h-6 transition-colors ${
                          isBlue 
                            ? "text-blue-600 group-hover:text-white" 
                            : "text-teal-600 group-hover:text-white"
                        }`} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Mobile swiper */}
              <div className="md:hidden">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1.3}
                  centeredSlides={false}
                  loop={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  className="!pb-12"
                >
                  {whatWeDo.map((item, index) => {
                    const IconComponent = item.icon;
                    const isBlue = item.accent === "blue";
                    return (
                      <SwiperSlide key={index}>
                        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                            isBlue ? "bg-blue-100" : "bg-teal-100"
                          }`}>
                            <IconComponent className={`w-6 h-6 ${isBlue ? "text-blue-600" : "text-teal-600"}`} />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>

            {/* Values - Swiper on mobile */}
            <div className={`mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Наши ценности</h2>
              
              {/* Desktop grid */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  const isBlue = value.accent === "blue";
                  return (
                    <div 
                      key={index} 
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                        isBlue 
                          ? "bg-blue-100 group-hover:bg-blue-600" 
                          : "bg-teal-100 group-hover:bg-teal-600"
                      }`}>
                        <IconComponent className={`w-6 h-6 transition-colors ${
                          isBlue 
                            ? "text-blue-600 group-hover:text-white" 
                            : "text-teal-600 group-hover:text-white"
                        }`} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                      <p className="text-sm text-slate-600">{value.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Mobile swiper */}
              <div className="sm:hidden">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1.3}
                  loop={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  className="!pb-12"
                >
                  {values.map((value, index) => {
                    const IconComponent = value.icon;
                    const isBlue = value.accent === "blue";
                    return (
                      <SwiperSlide key={index}>
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                            isBlue ? "bg-blue-100" : "bg-teal-100"
                          }`}>
                            <IconComponent className={`w-6 h-6 ${isBlue ? "text-blue-600" : "text-teal-600"}`} />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                          <p className="text-sm text-slate-600">{value.description}</p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>

            {/* What we don't do */}
            <div className={`mb-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <X className="w-6 h-6 text-slate-400" />
                  Что мы не делаем
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whatWeDontDo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:shadow-md transition-all">
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
            <div className={`mb-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Наши гарантии</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {guarantees.map((item, index) => {
                  const IconComponent = item.icon;
                  const isBlue = item.accent === "blue";
                  return (
                    <div 
                      key={index}
                      className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
                        isBlue ? "bg-blue-50 border-blue-100" : "bg-teal-50 border-teal-100"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        isBlue ? "bg-blue-100" : "bg-teal-100"
                      }`}>
                        <IconComponent className={`w-6 h-6 ${isBlue ? "text-blue-600" : "text-teal-600"}`} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA - unified dark style */}
            <div className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
                    alt="Office"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/88" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20" />
                </div>
                
                <div className="relative p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Связаться
                      </h3>
                      <p className="text-slate-300 max-w-xl">
                        Расскажите о вашей задаче — обсудим возможности реализации и подготовим предложение.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-600/30 whitespace-nowrap"
                        data-cta="about-consultation"
                      >
                        Связаться
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                      <Link
                        href="/projects"
                        className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                      >
                        Смотреть проекты
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
