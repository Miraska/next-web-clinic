import ProjectsComponent from "@/components/projects/ProjectsComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Проекты — WebClinic Solutions",
  description:
    "Портфолио наших проектов: CRM-системы, веб-приложения, автоматизация бизнес-процессов. Реальные кейсы с измеримыми результатами.",
  openGraph: {
    title: "Проекты — WebClinic Solutions",
    description:
      "Портфолио наших проектов: CRM-системы, веб-приложения, автоматизация бизнес-процессов.",
    url: "https://webclinic-solutions.dev/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsComponent />
    </main>
  );
}
