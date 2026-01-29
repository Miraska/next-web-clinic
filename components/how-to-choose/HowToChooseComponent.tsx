"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ConsultationModal from "@/components/ui/ConsultationModal";
import {
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Users,
  Building2,
  User,
  ChevronDown,
  Lightbulb,
  ArrowRight,
  Shield,
  Clock,
  DollarSign,
  MessageSquare,
  FileText,
  Star,
} from "lucide-react";

export default function HowToChooseComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(0);
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

  const redFlags = [
    {
      icon: Clock,
      title: "«Сделаем за 3 дня»",
      description: "Качественный сайт за несколько дней — миф. Минимум для лендинга — 2 недели. Если обещают быстрее — либо шаблон, либо низкое качество.",
      tip: "Спросите, сколько времени занимает каждый этап: дизайн, вёрстка, тестирование."
    },
    {
      icon: DollarSign,
      title: "«У нас самые низкие цены»",
      description: "Демпинг — признак проблем. Либо команда без опыта, либо будут экономить на качестве, либо позже «всплывут» доплаты.",
      tip: "Сравните 3-5 предложений. Адекватная цена — в среднем диапазоне."
    },
    {
      icon: FileText,
      title: "Нет договора или он «типовой»",
      description: "Отсутствие договора = отсутствие гарантий. Если предлагают работать без документов или «потом оформим» — рискуете потерять деньги.",
      tip: "Требуйте договор с прописанным ТЗ, сроками, стоимостью и порядком оплаты."
    },
    {
      icon: DollarSign,
      title: "100% предоплата",
      description: "Адекватная схема — 50/50 или поэтапная оплата. 100% вперёд — риск, что исполнитель исчезнет или потеряет мотивацию.",
      tip: "Оптимально: 50% в начале, 50% после приёмки работы."
    },
    {
      icon: Shield,
      title: "Нет портфолио или примеры «под NDA»",
      description: "Все проекты под NDA — удобная отмазка. У любой команды есть что показать: хотя бы обезличенные скриншоты или описания.",
      tip: "Попросите контакты клиентов для рекомендации или ссылки на живые проекты."
    },
    {
      icon: Star,
      title: "«Мы делаем всё»",
      description: "Команда, которая берётся за любой проект — сайты, приложения, маркетинг, SEO, контент — скорее всего, не делает хорошо ничего.",
      tip: "Ищите специализацию. Лучше узкий профессионал, чем широкий дилетант."
    },
    {
      icon: MessageSquare,
      title: "Общение только через менеджера",
      description: "Если вы не можете пообщаться с разработчиком хотя бы на этапе обсуждения — будут проблемы с коммуникацией в процессе.",
      tip: "На первой встрече попросите присутствия технического специалиста."
    },
    {
      icon: HelpCircle,
      title: "Не задают вопросов",
      description: "Хороший исполнитель пытается понять задачу. Если сразу называют цену без уточнений — либо шаблонный подход, либо неопытность.",
      tip: "Оцените, насколько глубоко разбираются в вашем бизнесе и задаче."
    },
  ];

  const checklist = [
    {
      category: "До начала работы",
      icon: FileText,
      items: [
        "Есть договор с прописанным ТЗ, сроками и стоимостью",
        "Понятна схема оплаты (не 100% вперёд)",
        "Есть портфолио с живыми ссылками",
        "Понятно, кто будет делать проект (не субподряд)",
        "Обсудили риски и что будет при форс-мажоре",
      ]
    },
    {
      category: "В процессе работы",
      icon: Clock,
      items: [
        "Регулярные отчёты о прогрессе",
        "Возможность посмотреть промежуточный результат",
        "Понятный способ связи (не только email раз в неделю)",
        "Возможность внести правки в рамках ТЗ",
        "Фиксация всех договорённостей письменно",
      ]
    },
    {
      category: "По завершении",
      icon: CheckCircle,
      items: [
        "Передача всех исходных кодов",
        "Доступы к хостингу, домену, сервисам",
        "Документация и инструкции",
        "Гарантийный период на исправление багов",
        "Возможность поддержки после запуска",
      ]
    },
  ];

  const questionsToAsk = [
    {
      question: "Кто конкретно будет работать над проектом?",
      why: "Важно знать, работаете с командой или фрилансером, не будет ли субподряда."
    },
    {
      question: "Покажите похожие проекты и расскажите о них",
      why: "Реальный опыт важнее красивых слов. Попросите контакты клиентов."
    },
    {
      question: "Как будет организована коммуникация?",
      why: "Понятный процесс = меньше проблем. Уточните частоту созвонов и отчётов."
    },
    {
      question: "Что входит в стоимость, а что нет?",
      why: "Избежите сюрпризов с доплатами за «не входило в базовую цену»."
    },
    {
      question: "Что будет, если мне не понравится результат?",
      why: "Узнайте про правки, гарантии и порядок приёмки работы."
    },
    {
      question: "Кому останутся права на код?",
      why: "Код должен быть вашей собственностью, без привязки к исполнителю."
    },
  ];

  const comparisonData = [
    { 
      criterion: "Стоимость", 
      freelancer: "Дешевле, но выше риски", 
      agency: "Дороже за счёт накладных", 
      smallTeam: "Оптимальное соотношение" 
    },
    { 
      criterion: "Коммуникация", 
      freelancer: "Напрямую, но зависит от занятости", 
      agency: "Через менеджера", 
      smallTeam: "Напрямую с исполнителями" 
    },
    { 
      criterion: "Гарантии", 
      freelancer: "Минимальные", 
      agency: "Формальные", 
      smallTeam: "Личная ответственность + договор" 
    },
    { 
      criterion: "Скорость", 
      freelancer: "Быстрее, если не занят", 
      agency: "Стандартные процессы", 
      smallTeam: "Гибкость без бюрократии" 
    },
  ];

  return (
    <>
      <section ref={sectionRef} className="min-h-screen">
        {/* Hero Section with Background Image */}
        <div className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
              alt="Team meeting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-slate-900/85" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90" />
          </div>
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
            <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6 border border-blue-500/30">
                <Lightbulb className="w-4 h-4 mr-2" />
                Полезная статья
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Как выбрать{" "}
                <span className="text-gradient-blue">подрядчика</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Честный гайд от тех, кто сам оказывает эти услуги. 
                Расскажем, на что обращать внимание и каких исполнителей избегать.
              </p>
              
              {/* Quick stats */}
              <div className="flex flex-wrap justify-center gap-6 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">8</div>
                  <div className="text-sm text-slate-400">признаков</div>
                </div>
                <div className="w-px h-12 bg-slate-700 hidden sm:block" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15</div>
                  <div className="text-sm text-slate-400">пунктов чек-листа</div>
                </div>
                <div className="w-px h-12 bg-slate-700 hidden sm:block" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">6</div>
                  <div className="text-sm text-slate-400">важных вопросов</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            {/* Intro Card */}
            <div className={`mb-16 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">Зачем мы это пишем?</h2>
                  <p className="text-slate-600">
                    Да, мы сами занимаемся веб-разработкой. Но нам выгодно, чтобы рынок был здоровым:
                    клиенты понимали, что покупают, а недобросовестные исполнители не портили репутацию всей отрасли.
                    Используйте этот гайд при выборе любого подрядчика — в том числе при оценке нас.
                  </p>
                </div>
              </div>
            </div>

            {/* Warning Signs Section */}
            <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">На что обратить внимание</h2>
                  <p className="text-slate-500">Признаки ненадёжных исполнителей</p>
                </div>
              </div>
              
              {/* Desktop grid */}
              <div className="hidden md:grid md:grid-cols-2 gap-4">
                {redFlags.map((flag, index) => {
                  const IconComponent = flag.icon;
                  const isOpen = openSection === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg hover:border-slate-300 transition-all"
                    >
                      <button
                        onClick={() => setOpenSection(isOpen ? null : index)}
                        className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-slate-600" />
                          </div>
                          <span className="font-semibold text-slate-900">{flag.title}</span>
                        </div>
                        <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-4 h-4 text-slate-600" />
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="px-5 pb-5 pt-0">
                          <div className="h-px bg-slate-100 mb-4" />
                          <p className="text-slate-600 mb-4">{flag.description}</p>
                          <div className="flex items-start gap-2 p-3 rounded-xl bg-teal-50 border border-teal-100">
                            <Lightbulb className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="text-sm font-medium text-teal-700">Совет: </span>
                              <span className="text-sm text-teal-700">{flag.tip}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Swiper */}
              <div className="md:hidden">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1.1}
                  loop={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  className="!pb-12"
                >
                  {redFlags.map((flag, index) => {
                    const IconComponent = flag.icon;
                    return (
                      <SwiperSlide key={index}>
                        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white p-5 h-full">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-5 h-5 text-slate-600" />
                            </div>
                            <span className="font-semibold text-slate-900">{flag.title}</span>
                          </div>
                          <p className="text-slate-600 text-sm mb-4">{flag.description}</p>
                          <div className="flex items-start gap-2 p-3 rounded-xl bg-teal-50 border border-teal-100">
                            <Lightbulb className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-teal-700">{flag.tip}</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>

            {/* Checklist Section */}
            <div className={`mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Чек-лист проверки</h2>
                  <p className="text-slate-500">Убедитесь, что все пункты выполнены</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {checklist.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-slate-900">{section.category}</h3>
                      </div>
                      <div className="space-y-3">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded border-2 border-teal-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                            </div>
                            <span className="text-sm text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Questions Section */}
            <div className={`mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Вопросы подрядчику</h2>
                  <p className="text-slate-500">Что обязательно спросить перед началом</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {questionsToAsk.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-blue-600">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{item.question}</h3>
                        <p className="text-sm text-slate-500">{item.why}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Section */}
            <div className={`mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Сравнение: кого выбрать?
              </h2>
              
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="p-4 text-left font-semibold text-slate-900 border-b border-slate-200">Критерий</th>
                      <th className="p-4 text-left font-semibold text-slate-700 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                          <User className="w-5 h-5" />
                          Фрилансер
                        </div>
                      </th>
                      <th className="p-4 text-left font-semibold text-slate-700 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-5 h-5" />
                          Агентство
                        </div>
                      </th>
                      <th className="p-4 text-left font-semibold text-blue-700 border-b border-blue-200 bg-blue-50">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Небольшая команда
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-900 border-b border-slate-100">{row.criterion}</td>
                        <td className="p-4 text-slate-600 text-sm border-b border-slate-100">{row.freelancer}</td>
                        <td className="p-4 text-slate-600 text-sm border-b border-slate-100">{row.agency}</td>
                        <td className="p-4 text-blue-700 text-sm border-b border-blue-100 bg-blue-50/50 font-medium">{row.smallTeam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden grid gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-slate-600" />
                    <h3 className="font-bold text-slate-900">Фрилансер</h3>
                  </div>
                  {comparisonData.map((row, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-slate-200 last:border-0">
                      <span className="text-sm text-slate-500">{row.criterion}</span>
                      <span className="text-sm text-slate-700">{row.freelancer}</span>
                    </div>
                  ))}
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-slate-600" />
                    <h3 className="font-bold text-slate-900">Агентство</h3>
                  </div>
                  {comparisonData.map((row, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-slate-200 last:border-0">
                      <span className="text-sm text-slate-500">{row.criterion}</span>
                      <span className="text-sm text-slate-700">{row.agency}</span>
                    </div>
                  ))}
                </div>
                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-blue-900">Небольшая команда</h3>
                  </div>
                  {comparisonData.map((row, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-blue-200 last:border-0">
                      <span className="text-sm text-blue-600">{row.criterion}</span>
                      <span className="text-sm text-blue-800 font-medium">{row.smallTeam}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-slate-400 mt-4 text-center">
                * Да, мы — небольшая команда, и нам выгодно показать это в лучшем свете. 
                Но сравнение честное — у каждого варианта свои плюсы и минусы.
              </p>
            </div>

            {/* CTA Section */}
            <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
                    alt="Team collaboration"
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
                        Хотите проверить нас по этому списку?
                      </h3>
                      <p className="text-slate-300 max-w-xl">
                        Мы готовы ответить на все эти вопросы. Расскажите о задаче — 
                        и сами оцените, подходим ли мы вам.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-600/30 whitespace-nowrap"
                        data-cta="how-to-choose-consultation"
                      >
                        Связаться
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                      <Link
                        href="/projects"
                        className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                      >
                        Смотреть портфолио
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
