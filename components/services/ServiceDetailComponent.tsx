"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { servicesData } from "@/lib/services";

interface ServiceDetailProps {
  slug: string;
}

export default function ServiceDetailComponent({ slug }: ServiceDetailProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-200" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", light: "bg-violet-50", border: "border-violet-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", light: "bg-orange-50", border: "border-orange-200" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", light: "bg-cyan-50", border: "border-cyan-200" },
    rose: { bg: "bg-rose-100", text: "text-rose-600", light: "bg-rose-50", border: "border-rose-200" },
    amber: { bg: "bg-amber-100", text: "text-amber-600", light: "bg-amber-50", border: "border-amber-200" },
    slate: { bg: "bg-slate-200", text: "text-slate-600", light: "bg-slate-50", border: "border-slate-200" },
  };

  const colors = colorClasses[service.color] || colorClasses.blue;

  return (
    <>
      <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="mb-8"
          >
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-slate-400 hover:text-slate-600">Главная</Link>
              <span className="text-slate-300">/</span>
              <Link href="/services" className="text-slate-400 hover:text-slate-600">Услуги</Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900">{service.title}</span>
            </nav>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-16"
          >
            <span className={`inline-block px-4 py-2 rounded-full ${colors.light} ${colors.text} text-sm font-medium mb-4`}>
              Услуга
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mb-6">
              {service.subtitle}
            </p>
            <p className="text-slate-500 max-w-3xl">
              {service.description}
            </p>
          </motion.div>

          {/* Who is for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Кому подходит</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {service.whoIsFor.map((item, index) => (
                <div key={index} className={`p-6 rounded-2xl ${colors.light} border ${colors.border}`}>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Какие задачи решает</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {service.tasks.map((task, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center shrink-0`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{task.title}</h3>
                    <p className="text-sm text-slate-500">{task.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Что входит</h2>
            <div className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className={`w-5 h-5 ${colors.text} shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Как мы работаем</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.process.map((step, index) => (
                <div key={index} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className={`text-2xl font-bold ${colors.text} mb-2`}>{step.step}</div>
                  <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 lg:mb-16"
          >
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
                        <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
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
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Частые вопросы</h2>
            <div className="space-y-3">
              {service.faq.map((item, index) => (
                <div key={index} className="rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0"
                    >
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <div className="h-px bg-slate-100 mb-4" />
                      <p className="text-slate-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={`p-8 lg:p-10 rounded-2xl ${colors.light} border ${colors.border}`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Готовы обсудить проект?
                  </h3>
                  <p className="text-slate-600 max-w-xl">
                    Расскажите о задаче — мы предложим решение и посчитаем стоимость.
                    Консультация бесплатная.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 whitespace-nowrap"
                    data-cta={`service-${slug}-consultation`}
                  >
                    Обсудить проект
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-6 py-4 border border-slate-200 bg-white text-slate-700 font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all whitespace-nowrap"
                  >
                    ← Все услуги
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
