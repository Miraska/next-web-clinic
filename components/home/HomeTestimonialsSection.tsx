"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Shield,
  DollarSign,
  Code,
  Clock,
  Check,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

export default function HomeTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeGuarantee, setActiveGuarantee] = useState(0);
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

  const guarantees = [
    {
      icon: Shield,
      title: "Техническая поддержка",
      description: "После запуска проекта исправляем ошибки в рамках гарантийного периода. Условия поддержки фиксируются в договоре.",
      details: [
        "Исправление ошибок в коде",
        "Устранение проблем совместимости",
        "Консультации по работе с системой",
        "Условия в договоре"
      ],
      accent: "blue",
    },
    {
      icon: DollarSign,
      title: "Фиксированные условия",
      description: "Условия проекта фиксируются в договоре до начала работ. Объём работ, сроки и этапы согласовываются заранее.",
      details: [
        "Объём работ в договоре",
        "Поэтапная приёмка",
        "Согласованные условия оплаты",
        "Документированные изменения"
      ],
      accent: "teal",
    },
    {
      icon: Code,
      title: "Передача результатов",
      description: "По завершении проекта передаём исходный код, документацию и доступы. Вы можете продолжить развитие самостоятельно.",
      details: [
        "Исходный код",
        "Доступы к сервисам",
        "Техническая документация",
        "Инструкции по развёртыванию"
      ],
      accent: "blue",
    },
    {
      icon: Clock,
      title: "Соблюдение сроков",
      description: "Сроки фиксируются в договоре. Регулярные отчёты о прогрессе и своевременное информирование о рисках.",
      details: [
        "Планирование этапов",
        "Регулярные отчёты",
        "Информирование о рисках",
        "Фиксированные сроки"
      ],
      accent: "teal",
    },
  ];

  const testimonials = [
    {
      text: "Разработали CRM-систему для управления грузоперевозками. Проект выполнен в согласованные сроки согласно техническому заданию.",
      author: "Алексей К.",
      position: "Руководитель отдела логистики",
      company: "Транспортная компания",
      rating: 5,
      avatar: "/team/alexey.jpg",
      accent: "blue",
    },
    {
      text: "Создали интернет-магазин с интеграцией 1С. Система работает стабильно, заказы обрабатываются автоматически.",
      author: "Мария С.",
      position: "Владелец бизнеса",
      company: "Компания розничной торговли",
      rating: 5,
      avatar: "/team/maria.jpg",
      accent: "teal",
    },
    {
      text: "Провели аудит текущего решения и предложили варианты развития. Коммуникация была чёткой на всех этапах.",
      author: "Дмитрий Н.",
      position: "Директор",
      company: "Строительная компания",
      rating: 3,
      avatar: "/team/dmitry.jpg",
      accent: "blue",
    },
    {
      text: "Провели аудит текущего решения и предложили варианты развития. Коммуникация была чёткой на всех этапах.",
      author: "Ярлыков М.",
      position: "Менеджер",
      company: "Строительная компания",
      rating: 4,
      avatar: "/team/dmitry.jpg",
      accent: "green",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background with subtle image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover opacity-[0.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white/50 to-slate-50" />
        <div className="absolute inset-0 section-bg-pattern opacity-30" />
      </div>
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-medium mb-4 shadow-sm">
            Условия работы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Договор и{" "}
            <span className="text-gradient-blue">документация</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Все условия фиксируются в договоре. Прозрачный процесс на каждом этапе.
          </p>
        </div>

        {/* Guarantees */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Guarantee tabs - Desktop */}
          <div className="hidden lg:flex flex-col gap-3">
            {guarantees.map((guarantee, index) => {
              const isActive = activeGuarantee === index;
              const IconComponent = guarantee.icon;
              const isBlue = guarantee.accent === "blue";
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveGuarantee(index)}
                  className={`p-5 rounded-xl text-left transition-all ${
                    isActive 
                      ? "bg-white border border-blue-200 shadow-lg" 
                      : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isActive 
                        ? isBlue ? "bg-blue-600 text-white" : "bg-teal-600 text-white"
                        : isBlue ? "bg-blue-100 text-blue-600" : "bg-teal-100 text-teal-600"
                    }`}>
                      <IconComponent className="w-12 h-6" />
                    </div>
                    <div>
                      <h3 className={`font-semibold transition-colors ${isActive ? "text-slate-900" : "text-slate-600"}`}>
                        {guarantee.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-1">{guarantee.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active guarantee detail - Desktop */}
          <div className="hidden lg:block">
            {(() => {
              const ActiveIcon = guarantees[activeGuarantee].icon;
              const isBlue = guarantees[activeGuarantee].accent === "blue";
              return (
                <div className={`p-8 rounded-2xl h-full ${
                  isBlue ? "bg-blue-50 border border-blue-100" : "bg-teal-50 border border-teal-100"
                }`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    isBlue ? "bg-blue-600" : "bg-teal-600"
                  }`}>
                    <ActiveIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{guarantees[activeGuarantee].title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{guarantees[activeGuarantee].description}</p>
                  
                  <h4 className="text-sm font-medium text-slate-900 mb-3">Что это значит:</h4>
                  <ul className="space-y-3">
                    {guarantees[activeGuarantee].details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${isBlue ? "text-blue-600" : "text-teal-600"}`} />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}
          </div>

          {/* Mobile guarantees */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-4">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              const isBlue = guarantee.accent === "blue";
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isBlue ? "bg-blue-100" : "bg-teal-100"
                  }`}>
                    <IconComponent className={`w-6 h-6 ${isBlue ? "text-blue-600" : "text-teal-600"}`} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-slate-600">{guarantee.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Отзывы</h3>
            <p className="text-slate-500 text-sm">Обратная связь от клиентов</p>
          </div>

          {/* Testimonials Swiper slider */}
          <div className="relative">
            {/* Custom navigation */}
            <button className="testimonial-prev hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg transition-all shadow-md">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="testimonial-next hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg transition-all shadow-md">
              <ChevronRight className="w-5 h-5" />
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: '.testimonial-prev',
                nextEl: '.testimonial-next',
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="!pb-12"
            >
              {testimonials.map((testimonial, index) => {
                const isBlue = testimonial.accent === "blue";
                return (
                  <SwiperSlide key={index} className="h-auto">
                    <div className={`relative p-6 lg:p-8 rounded-2xl bg-white border-2 h-full flex flex-col transition-all duration-300 group ${
                      isBlue 
                        ? "border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10" 
                        : "border-slate-200 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10"
                    }`}>
                      {/* Top accent bar */}
                      <div className={`absolute top-0 left-6 right-6 h-1 rounded-b-full ${
                        isBlue ? "bg-gradient-to-r from-blue-500 to-blue-600" : "bg-gradient-to-r from-teal-500 to-teal-600"
                      }`} />
                      
                      {/* Decorative quote */}
                      <div className={`absolute top-4 right-4 ${isBlue ? "text-blue-100" : "text-teal-100"}`}>
                        <Quote className="w-12 h-12" />
                      </div>
                      
                      {/* Stars */}
                      <div className="flex gap-1 mb-4 relative z-10 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${isBlue ? "text-blue-500 fill-blue-500" : "text-teal-500 fill-teal-500"}`} />
                        ))}
                      </div>

                      <p className="text-slate-700 leading-relaxed mb-6 relative z-10 flex-grow text-lg">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      
                      <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-slate-100">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-offset-2 ring-slate-200 group-hover:ring-blue-300 transition-all">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-900">{testimonial.author}</div>
                          <div className="text-sm text-slate-500">
                            {testimonial.position}
                          </div>
                          <div className={`text-xs font-medium mt-0.5 ${isBlue ? "text-blue-600" : "text-teal-600"}`}>
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Mobile swipe hint */}
            <div className="lg:hidden flex justify-center mt-2">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <ChevronLeft className="w-3 h-3" />
                Свайпните для просмотра
                <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
