import HomeFAQSection from "@/components/home/HomeFAQSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomeHowWeWorkSection from "@/components/home/HomeHowWeWorkSection";
import HomeTechnologiesSection from "@/components/home/HomeTechnologiesSection";
import HomeTestimonialsSection from "@/components/home/HomeTestimonialsSection";
import HomeWhatWeDoSection from "@/components/home/HomeWhatWeDoSection";
import HomeWhyUsSection from "@/components/home/HomeWhyUsSection";
import HomeProjectsPreviewSection from "@/components/home/HomeProjectsPreviewSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Разработка веб-систем и автоматизация бизнеса",
  description:
    "Создаём надёжные веб-системы, CRM/ERP решения и автоматизируем бизнес-процессы. Полный цикл разработки под ключ для малого и среднего бизнеса.",
  openGraph: {
    title: "WebClinic Solutions — Разработка веб-систем и автоматизация бизнеса",
    description:
      "Создаём надёжные веб-системы, CRM/ERP решения и автоматизируем бизнес-процессы. Полный цикл разработки под ключ.",
    url: "https://WebClinic-solutions.dev",
  },
};

export default function Home() {
  return (
    <main>
      <HomeHeroSection />
      <HomeWhatWeDoSection />
      <HomeWhyUsSection />
      <HomeProjectsPreviewSection />
      <HomeHowWeWorkSection />
      <HomeTechnologiesSection />
      <HomeTestimonialsSection />
      <HomeFAQSection />
    </main>
  );
}
