"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { Check, ArrowRight, Sparkles, ChevronDown, User, FolderOpen, MessageSquareText, HelpCircle, X, MessageCircle, Phone, Mail } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Feature {
  id: string;
  name: string;
  hint: string;
}

interface ProjectTypeConfig {
  name: string;
  hint: string;
  features: Feature[];
}

// Contact methods configuration
const contactMethods = [
  { id: "telegram", label: "Telegram", icon: MessageCircle, placeholder: "@username" },
  { id: "phone", label: "Телефон", icon: Phone, placeholder: "+7 (___) ___-__-__" },
  { id: "email", label: "Email", icon: Mail, placeholder: "email@example.com" },
];

const projectTypesConfig: Record<string, ProjectTypeConfig> = {
  "landing": {
    name: "Лендинг / Сайт-визитка",
    hint: "Одностраничный сайт для представления продукта или услуги.",
    features: [
      { id: "landing-design", name: "Уникальный дизайн", hint: "Мы нарисуем красивый сайт специально для вас, а не возьмём готовый шаблон" },
      { id: "landing-adaptive", name: "Адаптивность", hint: "Сайт будет хорошо выглядеть на телефоне, планшете и компьютере" },
      { id: "landing-form", name: "Форма заявки", hint: "Посетители смогут оставить свой телефон или email, чтобы вы могли с ними связаться" },
      { id: "landing-seo", name: "Базовая SEO-оптимизация", hint: "Настроим сайт так, чтобы его могли найти в Яндексе и Google" },
      { id: "landing-analytics", name: "Подключение аналитики", hint: "Будете видеть сколько людей заходит на сайт и откуда они приходят" },
      { id: "landing-hosting", name: "Хостинг на 1 год", hint: "Место в интернете, где будет жить ваш сайт — первый год бесплатно" },
      { id: "landing-animation", name: "Анимации и эффекты", hint: "Красивые плавные переходы и движения элементов для современного вида" },
    ]
  },
  "corporate": {
    name: "Корпоративный сайт",
    hint: "Полноценный сайт компании с несколькими страницами: о компании, услуги, контакты, новости и т.д.",
    features: [
      { id: "corp-pages", name: "Многостраничная структура", hint: "Несколько страниц для разных разделов: услуги, о нас, контакты, блог" },
      { id: "corp-cms", name: "Админ-панель (CMS)", hint: "Вы сами сможете менять тексты, фото и добавлять новости без программиста" },
      { id: "corp-blog", name: "Блог / Новости", hint: "Раздел, где можно публиковать статьи, новости компании, акции" },
      { id: "corp-crm", name: "Интеграция с CRM", hint: "Заявки с сайта будут автоматически попадать в вашу систему учёта клиентов" },
      { id: "corp-ssl", name: "SSL-сертификат", hint: "Зелёный замочек в браузере — сайт безопасный, данные защищены" },
      { id: "corp-multilang", name: "Мультиязычность", hint: "Сайт на нескольких языках — например, русский и английский" },
      { id: "corp-map", name: "Карта и контакты", hint: "Интерактивная карта с адресом офиса и форма обратной связи" },
    ]
  },
  "shop": {
    name: "Интернет-магазин",
    hint: "Сайт, где можно продавать товары онлайн: каталог, корзина, оплата и отслеживание заказов.",
    features: [
      { id: "shop-catalog", name: "Каталог товаров", hint: "Удобный список товаров с фильтрами, поиском и сортировкой" },
      { id: "shop-cart", name: "Корзина и оформление", hint: "Покупатели могут собрать товары в корзину и оформить заказ" },
      { id: "shop-payment", name: "Онлайн-оплата", hint: "Клиенты смогут платить картой прямо на сайте — безопасно и удобно" },
      { id: "shop-delivery", name: "Интеграция доставки", hint: "Автоматический расчёт стоимости доставки СДЭК, Почты России и других" },
      { id: "shop-cabinet", name: "Личный кабинет", hint: "Покупатели смогут видеть свои заказы, избранное и историю покупок" },
      { id: "shop-admin", name: "Управление заказами", hint: "Вы будете видеть все заказы, их статусы и данные покупателей" },
      { id: "shop-1c", name: "Интеграция с 1С", hint: "Товары и остатки будут автоматически обновляться из вашей 1С" },
      { id: "shop-promo", name: "Промокоды и скидки", hint: "Система скидок, акций и промокодов для привлечения покупателей" },
    ]
  },
  "crm": {
    name: "CRM / Личный кабинет",
    hint: "Система для управления клиентами, заказами или внутренними процессами компании.",
    features: [
      { id: "crm-clients", name: "Управление клиентами", hint: "База всех клиентов с историей общения и контактными данными" },
      { id: "crm-orders", name: "Учёт заказов", hint: "Все заказы в одном месте: статусы, суммы, исполнители" },
      { id: "crm-analytics", name: "Аналитика и отчёты", hint: "Графики и цифры: сколько заработали, откуда клиенты, что популярно" },
      { id: "crm-roles", name: "Роли сотрудников", hint: "Разные права доступа: менеджер видит одно, директор — другое" },
      { id: "crm-notify", name: "Уведомления", hint: "Автоматические напоминания о задачах, новых заявках, дедлайнах" },
      { id: "crm-api", name: "API интеграция", hint: "Возможность подключить к другим сервисам: почта, телефония, бухгалтерия" },
      { id: "crm-tasks", name: "Задачи и проекты", hint: "Ставьте задачи сотрудникам и отслеживайте выполнение" },
    ]
  },
  "automation": {
    name: "Автоматизация / Интеграции",
    hint: "Связываем разные программы между собой, чтобы они работали автоматически без ручного труда.",
    features: [
      { id: "auto-bot", name: "Telegram / WhatsApp бот", hint: "Бот будет отвечать клиентам 24/7, принимать заявки и отправлять уведомления" },
      { id: "auto-1c", name: "Интеграция с 1С", hint: "Автоматический обмен данными между сайтом и вашей 1С" },
      { id: "auto-crm", name: "Связь с CRM", hint: "Заявки с сайта автоматически попадают в вашу систему учёта" },
      { id: "auto-email", name: "Email-рассылки", hint: "Автоматические письма клиентам: подтверждения, напоминания, акции" },
      { id: "auto-sms", name: "SMS-уведомления", hint: "Автоматические СМС клиентам о статусе заказа" },
      { id: "auto-payment", name: "Платёжные системы", hint: "Подключение онлайн-оплаты: карты, СБП, электронные кошельки" },
      { id: "auto-calendar", name: "Онлайн-запись", hint: "Клиенты сами выбирают удобное время для записи на услугу" },
    ]
  },
  "other": {
    name: "Другое / Не знаю",
    hint: "Расскажите о вашей задаче — мы поможем определиться с решением.",
    features: [
      { id: "other-consult", name: "Нужна консультация", hint: "Хочу обсудить задачу и понять, что мне подойдёт лучше всего" },
      { id: "other-redesign", name: "Редизайн существующего сайта", hint: "У меня уже есть сайт, но хочу сделать его современнее и удобнее" },
      { id: "other-support", name: "Техническая поддержка", hint: "Нужна помощь с существующим сайтом: исправить ошибки, обновить" },
      { id: "other-seo", name: "SEO-продвижение", hint: "Хочу, чтобы сайт находили в поисковиках и приходило больше клиентов" },
      { id: "other-mobile", name: "Мобильное приложение", hint: "Приложение для телефона, которое можно скачать из App Store или Google Play" },
      { id: "other-custom", name: "Уникальная разработка", hint: "Что-то особенное, чего нет в готовых решениях" },
    ]
  }
};

const projectTypesList = Object.keys(projectTypesConfig);

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "telegram",
    contact: "",
    projectType: "",
    selectedFeatures: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(["contact"]);
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const [hintPosition, setHintPosition] = useState<{ top: number; left: number; transformOrigin: string } | null>(null);
  const hintButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleFeature = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedFeatures: prev.selectedFeatures.includes(featureId)
        ? prev.selectedFeatures.filter(id => id !== featureId)
        : [...prev.selectedFeatures, featureId]
    }));
  };

  const handleProjectTypeChange = (typeKey: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: typeKey,
      selectedFeatures: [] // Reset features when changing project type
    }));
    // Auto-expand project section if not already
    if (!expandedSections.includes("project")) {
      setExpandedSections(prev => [...prev, "project"]);
    }
  };

  const isSectionComplete = (sectionId: string) => {
    switch (sectionId) {
      case "contact":
        return formData.name.trim() !== "" && formData.contact.trim() !== "";
      case "project":
        return formData.projectType !== "";
      case "details":
        return formData.message.trim() !== "";
      default:
        return false;
    }
  };

  // Calculate tooltip position
  const calculateHintPosition = useCallback((buttonElement: HTMLElement) => {
    const rect = buttonElement.getBoundingClientRect();
    const tooltipWidth = 288; // w-72 = 18rem = 288px
    const tooltipHeight = 120; // approximate height
    const padding = 12;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    let top = rect.bottom + padding;
    let left = rect.left - tooltipWidth / 2 + rect.width / 2;
    let transformOrigin = "top center";
    
    // Check if tooltip goes off the right edge
    if (left + tooltipWidth > viewportWidth - padding) {
      left = viewportWidth - tooltipWidth - padding;
    }
    
    // Check if tooltip goes off the left edge
    if (left < padding) {
      left = padding;
    }
    
    // Check if tooltip goes off the bottom edge - show above instead
    if (top + tooltipHeight > viewportHeight - padding) {
      top = rect.top - tooltipHeight - padding;
      transformOrigin = "bottom center";
    }
    
    // On mobile, use more centered positioning
    if (viewportWidth < 640) {
      left = Math.max(padding, Math.min(viewportWidth - tooltipWidth - padding, (viewportWidth - tooltipWidth) / 2));
    }
    
    return { top, left, transformOrigin };
  }, []);

  // Hint tooltip component
  const HintButton = ({ hint, id }: { hint: string; id: string }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (activeHint === id) {
        setActiveHint(null);
        setHintPosition(null);
      } else {
        if (buttonRef.current) {
          const position = calculateHintPosition(buttonRef.current);
          setHintPosition(position);
        }
        setActiveHint(id);
      }
    };
    
    return (
      <div className="relative inline-flex items-center">
        <button
          ref={buttonRef}
          type="button"
          onClick={handleClick}
          className="w-5 h-5 rounded-full bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition-colors group"
          aria-label="Подсказка"
        >
          <HelpCircle className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500" />
        </button>
      </div>
    );
  };
  
  // Active hint tooltip (rendered once at modal level)
  const ActiveHintTooltip = ({ hint }: { hint: string }) => (
    <AnimatePresence>
      {activeHint && hintPosition && (
        <>
          {/* Overlay to close on click outside */}
          <div 
            className="fixed inset-0 z-[150]" 
            onClick={(e) => {
              e.stopPropagation();
              setActiveHint(null);
              setHintPosition(null);
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[200] w-72 max-w-[calc(100vw-24px)] p-4 bg-slate-800 text-white text-sm rounded-xl shadow-2xl"
            style={{
              top: hintPosition.top,
              left: hintPosition.left,
              transformOrigin: hintPosition.transformOrigin,
            }}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveHint(null);
                setHintPosition(null);
              }}
              className="absolute top-3 right-3 w-6 h-6 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <HelpCircle className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Подсказка</p>
                <p className="pr-4 leading-relaxed text-slate-300">{hint}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
  
  // Get current hint text
  const getCurrentHintText = useCallback(() => {
    if (!activeHint) return "";
    
    // Check if it's a project type hint
    if (activeHint.startsWith("type-")) {
      const typeKey = activeHint.replace("type-", "");
      return projectTypesConfig[typeKey]?.hint || "";
    }
    
    // Check features
    if (formData.projectType) {
      const feature = projectTypesConfig[formData.projectType]?.features.find(f => f.id === activeHint);
      if (feature) return feature.hint;
    }
    
    // Search all project types for the feature
    for (const typeKey of projectTypesList) {
      const feature = projectTypesConfig[typeKey]?.features.find(f => f.id === activeHint);
      if (feature) return feature.hint;
    }
    
    return "";
  }, [activeHint, formData.projectType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", contactMethod: "telegram", contact: "", projectType: "", selectedFeatures: [], message: "" });
      setExpandedSections(["contact"]);
      setActiveHint(null);
      setHintPosition(null);
      onClose();
    }, 2000);
  };

  const SectionHeader = ({ 
    id, 
    title, 
    icon: Icon, 
    required = false 
  }: { 
    id: string; 
    title: string; 
    icon: React.ElementType; 
    required?: boolean;
  }) => {
    const isExpanded = expandedSections.includes(id);
    const isComplete = isSectionComplete(id);
    
    return (
      <button
        type="button"
        onClick={() => toggleSection(id)}
        className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
          isExpanded 
            ? "bg-slate-50 border border-slate-200" 
            : "bg-white border border-slate-200 hover:border-slate-300"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
            isComplete 
              ? "bg-teal-100 text-teal-600" 
              : isExpanded 
                ? "bg-blue-100 text-blue-600" 
                : "bg-slate-100 text-slate-500"
          }`}>
            {isComplete ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
          </div>
          <div className="text-left">
            <span className="font-medium text-slate-900">{title}</span>
            {required && <span className="text-red-500 ml-1">*</span>}
            {isComplete && !isExpanded && (
              <span className="text-xs text-teal-600 ml-2">Заполнено</span>
            )}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </button>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Связаться с нами" size="lg">
      {isSuccess ? (
        <div className="py-12 text-center animate-scale-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
            <Check className="w-10 h-10 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка отправлена!</h3>
          <p className="text-slate-600">Мы свяжемся с вами в течение 2 часов</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Active Hint Tooltip */}
          <ActiveHintTooltip hint={getCurrentHintText()} />
          
          {/* Section 1: Contact Info - Always starts expanded */}
          <div>
            <SectionHeader id="contact" title="Контактные данные" icon={User} required />
            <AnimatePresence>
              {expandedSections.includes("contact") && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-1 px-1 -mx-1 space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Ваше имя <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Как к вам обращаться?"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>

                    {/* Contact Method Selection */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Как с вами связаться? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2 mb-3">
                        {contactMethods.map((method) => {
                          const Icon = method.icon;
                          const isSelected = formData.contactMethod === method.id;
                          return (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, contactMethod: method.id, contact: "" })}
                              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                                isSelected
                                  ? "bg-blue-50 border-blue-300 text-blue-700"
                                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              <span className="hidden sm:inline">{method.label}</span>
                            </button>
                          );
                        })}
                      </div>
                      <input
                        type={formData.contactMethod === "email" ? "email" : "text"}
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder={contactMethods.find(m => m.id === formData.contactMethod)?.placeholder || ""}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 2: Project Info */}
          <div>
            <SectionHeader id="project" title="О проекте" icon={FolderOpen} />
            <AnimatePresence>
              {expandedSections.includes("project") && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-1 px-1 -mx-1 space-y-4">
                    {/* Project Type */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Что вам нужно?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {projectTypesList.map((typeKey, index) => {
                          const config = projectTypesConfig[typeKey];
                          const isSelected = formData.projectType === typeKey;
                          return (
                            <div key={typeKey} className="relative flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => handleProjectTypeChange(typeKey)}
                                className={`flex-1 px-3 py-2.5 text-sm rounded-xl border transition-all text-left ${
                                  isSelected
                                    ? index % 2 === 0 
                                      ? "bg-blue-50 border-blue-300 text-blue-700"
                                      : "bg-teal-50 border-teal-300 text-teal-700"
                                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                }`}
                              >
                                {config.name}
                              </button>
                              <HintButton hint={config.hint} id={`type-${typeKey}`} />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Features - Show when project type is selected */}
                    <AnimatePresence>
                      {formData.projectType && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-1">
                            <label className="block text-sm font-medium text-slate-700 mb-3">
                              Какой функционал вам нужен?
                              <span className="text-slate-400 font-normal ml-1">(выберите нужное)</span>
                            </label>
                            <div className="space-y-2 max-h-[240px] overflow-y-auto pr-2 scrollbar-thin">
                              {projectTypesConfig[formData.projectType]?.features.map((feature) => {
                                const isChecked = formData.selectedFeatures.includes(feature.id);
                                return (
                                  <div 
                                    key={feature.id}
                                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                                      isChecked 
                                        ? "bg-blue-50 border-blue-200" 
                                        : "bg-white border-slate-200 hover:border-slate-300"
                                    }`}
                                    onClick={() => toggleFeature(feature.id)}
                                  >
                                    {/* Custom Checkbox */}
                                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                                      isChecked 
                                        ? "bg-blue-600 border-blue-600" 
                                        : "border-slate-300"
                                    }`}>
                                      {isChecked && <Check className="w-3.5 h-3.5 text-white" />}
                                    </div>
                                    
                                    {/* Feature name */}
                                    <span className={`flex-1 text-sm ${isChecked ? "text-slate-900 font-medium" : "text-slate-600"}`}>
                                      {feature.name}
                                    </span>
                                    
                                    {/* Hint button */}
                                    <div onClick={(e) => e.stopPropagation()}>
                                      <HintButton hint={feature.hint} id={feature.id} />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            
                            {/* Selected count */}
                            {formData.selectedFeatures.length > 0 && (
                              <div className="mt-3 flex items-center gap-2 text-sm text-teal-600">
                                <Check className="w-4 h-4" />
                                <span>Выбрано: {formData.selectedFeatures.length}</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 3: Additional Details */}
          <div>
            <SectionHeader id="details" title="Дополнительно" icon={MessageSquareText} />
            <AnimatePresence>
              {expandedSections.includes("details") && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-1 px-1 -mx-1">
                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Опишите задачу
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Расскажите подробнее о вашем проекте, целях и пожеланиях..."
                        rows={3}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.contact}
              className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/25"
              data-cta="modal-submit"
            >
              {isSubmitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Отправляем...
                </>
              ) : (
                <>
                  Отправить заявку
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-teal-500" />
              Ответим в течение 2 часов в рабочее время
            </p>
          </div>
        </form>
      )}
    </Modal>
  );
}
