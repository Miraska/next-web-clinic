import NotFoundComponent from "@/components/not-found/NotFoundComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Страница не найдена",
  description: "Запрашиваемая страница не найдена.",
};

export default function NotFound() {
  return <NotFoundComponent />;
}
