import ServicesComponent from "@/components/services/ServicesComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Веб-разработка, CRM/ERP системы, автоматизация бизнеса, API и интеграции. Полный цикл разработки под ключ для вашего бизнеса.",
  openGraph: {
    title: "Услуги — WebClinic Solutions",
    description:
      "Веб-разработка, CRM/ERP системы, автоматизация бизнеса, API и интеграции. Полный цикл разработки под ключ.",
    url: "https://webclinic-solutions.dev/services",
  },
};

export default function ServicesPage() {
  return <ServicesComponent />;
}
