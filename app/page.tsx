import HomeFAQSection from "@/components/home/HomeFAQSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomeHowWeWorkSection from "@/components/home/HomeHowWeWorkSection";
import HomeTestimonialsSection from "@/components/home/HomeTestimonialsSection";
import HomeWhatWeDoSection from "@/components/home/HomeWhatWeDoSection";
import HomeWhyUsSection from "@/components/home/HomeWhyUsSection";
import HomeProjectsPreviewSection from "@/components/home/HomeProjectsPreviewSection";
import HomeForWhomSection from "@/components/home/HomeForWhomSection";
import HomeStatsSection from "@/components/home/HomeStatsSection";
import HomePricingSection from "@/components/home/HomePricingSection";
import HomeFinalCTASection from "@/components/home/HomeFinalCTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Веб-разработка для бизнеса — сайты, интернет-магазины, CRM",
  description:
    "Делаем сайты и веб-сервисы, которые реально помогают бизнесу. Понятно, в срок и без сюрпризов. Бесплатная консультация.",
  openGraph: {
    title: "WebClinic — Веб-разработка для бизнеса",
    description:
      "Делаем сайты и веб-сервисы, которые реально помогают бизнесу. Понятно, в срок и без сюрпризов.",
    url: "https://webclinic.dev",
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero с партиклами и параллаксом */}
      <HomeHeroSection />
      
      {/* Статистика с анимированными счетчиками */}
      <HomeStatsSection />
      
      {/* Что мы делаем - проблемы и решения */}
      <HomeWhatWeDoSection />
      
      {/* Кому подходим / не подходим */}
      <HomeForWhomSection />
      
      
      {/* Тарифы и цены */}
      <HomePricingSection />
      
      {/* Почему мы */}
      <HomeWhyUsSection />
      
      {/* Как мы работаем */}
      <HomeHowWeWorkSection />
      
      {/* Примеры проектов */}
      <HomeProjectsPreviewSection />
      
      {/* Гарантии и доверие */}
      <HomeTestimonialsSection />
      
      {/* FAQ */}
      <HomeFAQSection />
      
      {/* Финальный CTA */}
      <HomeFinalCTASection />
    </main>
  );
}
