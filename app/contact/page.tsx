import ContactComponent from "@/components/contact/ContactComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с нами для обсуждения вашего проекта. Бесплатная консультация и оценка стоимости разработки.",
  openGraph: {
    title: "Контакты — WebClinic Solutions",
    description:
      "Свяжитесь с нами для обсуждения вашего проекта. Бесплатная консультация и оценка стоимости.",
    url: "https://WebClinic-solutions.dev/contact",
  },
};

export default function ContactPage() {
  return <ContactComponent />;
}
