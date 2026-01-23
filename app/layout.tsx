import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ChatWidget from "@/components/ui/ChatWidget";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "WebClinic — Разработка веб-систем и автоматизация",
    template: "%s | WebClinic",
  },
  description:
    "Инженерная команда для разработки веб-приложений, CRM/ERP систем и enterprise-решений. Проектирование архитектуры, разработка, поддержка.",
  authors: [{ name: "WebClinic" }],
  creator: "WebClinic",
  publisher: "WebClinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://webclinic.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://webclinic.dev",
    title: "WebClinic — Разработка веб-систем и автоматизация",
    description:
      "Инженерная команда для разработки веб-приложений, CRM/ERP систем и enterprise-решений.",
    siteName: "WebClinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebClinic — Разработка веб-систем",
    description:
      "Инженерная команда для разработки веб-приложений, CRM/ERP систем и enterprise-решений.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
