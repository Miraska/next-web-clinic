"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function HomeTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Алексей Петров",
      role: "CEO, TechStart",
      company: "IT-стартап",
      avatar: "АП",
      rating: 5,
      text: "Команда WebClinic разработала для нас CRM-систему, которая полностью изменила наш подход к работе с клиентами. Сроки соблюдены, качество на высоте. Рекомендую!",
      project: "CRM-система",
    },
    {
      id: 2,
      name: "Мария Иванова",
      role: "Директор по маркетингу",
      company: "E-commerce",
      avatar: "МИ",
      rating: 5,
      text: "Заказывали разработку интернет-магазина. Ребята не просто сделали сайт — они погрузились в наш бизнес и предложили решения, о которых мы даже не думали. Конверсия выросла на 40%.",
      project: "Интернет-магазин",
    },
    {
      id: 3,
      name: "Дмитрий Козлов",
      role: "Основатель",
      company: "Логистика",
      avatar: "ДК",
      rating: 5,
      text: "Автоматизировали складской учёт и интегрировали с 1С. Теперь вместо трёх менеджеров эту работу делает система. Окупилось за 4 месяца.",
      project: "Автоматизация склада",
    },
    {
      id: 4,
      name: "Елена Смирнова",
      role: "Product Owner",
      company: "FinTech",
      avatar: "ЕС",
      rating: 5,
      text: "Разрабатывали сложную платформу для финансовых расчётов. Команда показала глубокое понимание предметной области и внимание к безопасности. Работаем вместе уже 2 года.",
      project: "Финансовая платформа",
    },
    {
      id: 5,
      name: "Андрей Волков",
      role: "Технический директор",
      company: "SaaS-сервис",
      avatar: "АВ",
      rating: 5,
      text: "Нужен был рефакторинг legacy-кода и миграция на современный стек. WebClinic справились отлично — система стала работать в 3 раза быстрее.",
      project: "Рефакторинг системы",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0a0e17] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern-animated opacity-30" />
      <div className="orb orb-purple w-80 h-80 top-1/4 -left-40 animate-float" />
      <div className="orb orb-cyan w-96 h-96 bottom-0 -right-48 animate-float-delayed" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium mb-6"
          >
            Отзывы клиентов
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Что говорят о нас <span className="text-[#00ff88] text-glow-green">клиенты</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            Реальные отзывы компаний, с которыми мы работали. 
            Каждый проект — это история успеха.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            className="testimonials-swiper !pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="p-8 lg:p-10 rounded-2xl bg-[#0f1520] border border-[#1f2937] hover:border-[#00ff88]/30 transition-all duration-500 mx-2 my-4 group card-hover">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <svg
                      className="w-10 h-10 text-[#00ff88]/30 group-hover:text-[#00ff88]/50 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#00ff88]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white/80 leading-relaxed mb-6 text-lg">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Project tag */}
                  <div className="inline-block px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm mb-6">
                    {testimonial.project}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-[#1f2937]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center text-[#0a0e17] font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-white/50">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "98%", label: "Довольных клиентов" },
            { value: "50+", label: "Завершённых проектов" },
            { value: "4.9", label: "Средняя оценка" },
            { value: "85%", label: "Возвращаются повторно" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-[#0f1520]/50 border border-[#1f2937] hover:border-[#00ff88]/20 transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                {stat.value.includes("%") || stat.value.includes("+") ? (
                  <>
                    {stat.value.replace(/[%+]/g, "")}
                    <span className="text-[#00ff88]">
                      {stat.value.includes("%") ? "%" : "+"}
                    </span>
                  </>
                ) : (
                  <span className="gradient-text">{stat.value}</span>
                )}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
