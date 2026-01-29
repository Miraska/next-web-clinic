import AboutComponent from "@/components/about/AboutComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "WebClinic Solutions — команда разработчиков, которая создаёт надёжные системы для бизнеса. Наши ценности, принципы работы и подход к проектам.",
  openGraph: {
    title: "О компании — WebClinic Solutions",
    description:
      "Команда разработчиков, которая создаёт надёжные системы для бизнеса. Наши ценности и принципы работы.",
    url: "https://webclinic-solutions.dev/about",
  },
};

export default function AboutPage() {
  return <AboutComponent />;
}
