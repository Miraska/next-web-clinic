import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "WebClinic Solutions — Разработка веб-систем и автоматизация бизнеса",
    template: "%s | WebClinic Solutions",
  },
  description:
    "Разрабатываем надёжные веб-системы, CRM/ERP решения и автоматизируем бизнес-процессы. Полный цикл разработки под ключ для малого и среднего бизнеса.",
  authors: [{ name: "WebClinic Solutions" }],
  creator: "WebClinic Solutions",
  publisher: "WebClinic Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://WebClinic-solutions.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://WebClinic-solutions.dev",
    title: "WebClinic Solutions — Разработка веб-систем и автоматизация бизнеса",
    description:
      "Разрабатываем надёжные веб-системы, CRM/ERP решения и автоматизируем бизнес-процессы. Полный цикл разработки под ключ.",
    siteName: "WebClinic Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebClinic Solutions — Разработка веб-систем",
    description:
      "Разрабатываем надёжные веб-системы, CRM/ERP решения и автоматизируем бизнес-процессы.",
    creator: "@WebClinicsolutions",
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
      </body>
    </html>
  );
}
