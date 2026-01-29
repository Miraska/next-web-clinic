"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { servicesData } from "@/lib/services";
import { ArrowRight, ChevronDown, Check } from "lucide-react";

interface ServiceDetailProps {
  slug: string;
}

// Service-specific hero images
const serviceImages: Record<string, string> = {
  "web-development": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  "ecommerce": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
  "web-apps": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  "crm-erp": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
  "chatbots": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&q=80",
  "api-integrations": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
  "seo": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1920&q=80",
  "support": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80",
  "automation": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80",
};

export default function ServiceDetailComponent({ slug }: ServiceDetailProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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

  const service = servicesData[slug];

  if (!service) {
    return (
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Услуга не найдена</h1>
          <p className="text-slate-600 mb-8">К сожалению, такой услуги нет в нашем каталоге.</p>
          <Link href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
            ← Вернуться к услугам
          </Link>
        </div>
      </section>
    );
  }

  // Unified color scheme - only blue and teal
  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", light: "bg-teal-50", border: "border-teal-200" },
  };

  // Map any color to blue or teal for consistency
  const getColorKey = (color: string): string => {
    const tealColors = ['emerald', 'teal', 'cyan'];
    return tealColors.includes(color) ? 'teal' : 'blue';
  };

  const colors = colorClasses[getColorKey(service.color)] || colorClasses.blue;
  const heroImage = serviceImages[slug] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80";

  return (
    <>
      <section ref={sectionRef} className="min-h-screen">
        {/* Hero Section with Background Image */}
        <div className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-slate-900/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/90" />
          </div>
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
            {/* Breadcrumbs */}
            <nav className={`flex items-center gap-2 text-sm mb-8 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Главная</Link>
              <span className="text-slate-500">/</span>
              <Link href="/services" className="text-slate-400 hover:text-white transition-colors">Услуги</Link>
              <span className="text-slate-500">/</span>
              <span className="text-white">{service.title}</span>
            </nav>

            {/* Header */}
            <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
                Услуга
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                {service.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25"
                  data-cta={`service-${slug}-hero`}
                >
                  Связаться
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <Link
                  href="#details"
                  className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
                >
                  Подробнее
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div id="details" className="bg-white py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            {/* Description */}
            <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-slate-600 max-w-3xl">
                {service.description}
              </p>
            </div>

            {/* Who is for */}
            <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Кому подходит</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {service.whoIsFor.map((item, index) => (
                  <div key={index} className={`p-6 rounded-2xl ${colors.light} border ${colors.border}`}>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Какие задачи решает</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {service.tasks.map((task, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center shrink-0`}>
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{task.title}</h3>
                      <p className="text-sm text-slate-500">{task.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Что входит</h2>
              <div className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {service.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${colors.text} shrink-0`} />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process */}
            <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Как мы работаем</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.process.map((step, index) => (
                  <div key={index} className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:shadow-md transition-all">
                    <div className={`text-2xl font-bold ${colors.text} mb-2`}>{step.step}</div>
                    <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-500">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Стоимость</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {service.pricing.map((plan, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                    <div className={`text-2xl font-bold ${colors.text} mb-2`}>{plan.price}</div>
                    <p className="text-sm text-slate-500 mb-4">{plan.description}</p>
                    <div className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check className={`w-4 h-4 ${colors.text}`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400 mt-4 text-center">
                Цены ориентировочные. Точная стоимость — после обсуждения задачи.
              </p>
            </div>

            {/* FAQ */}
            <div className={`mb-12 lg:mb-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Частые вопросы</h2>
              <div className="space-y-3">
                {service.faq.map((item, index) => (
                  <div key={index} className="rounded-xl border border-slate-200 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                      <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="px-5 pb-5">
                        <div className="h-px bg-slate-100 mb-4" />
                        <p className="text-slate-600">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    src={heroImage}
                    alt="Background"
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
                        Готовы обсудить проект?
                      </h3>
                      <p className="text-slate-300 max-w-xl">
                        Расскажите о задаче — мы предложим решение и посчитаем стоимость.
                      
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-600/30 whitespace-nowrap"
                        data-cta={`service-${slug}-consultation`}
                      >
                        Связаться
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                      <Link
                        href="/services"
                        className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                      >
                        ← Все услуги
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
