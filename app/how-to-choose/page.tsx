import { Metadata } from "next";
import HowToChooseComponent from "@/components/how-to-choose/HowToChooseComponent";

export const metadata: Metadata = {
  title: "Как выбрать подрядчика | WebClinic",
  description: "Чек-лист для выбора веб-разработчика. На что обращать внимание, какие вопросы задать, красные флаги.",
};

export default function HowToChoosePage() {
  return <HowToChooseComponent />;
}
