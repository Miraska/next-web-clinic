import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ChatWidget from "@/components/ui/ChatWidget";
import BackToTop from "@/components/ui/BackToTop";
import Analytics from "@/components/ui/Analytics";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "WebClinic — Веб-разработка для бизнеса",
    template: "%s | WebClinic",
  },
  description:
    "Делаем сайты и веб-сервисы, которые реально помогают бизнесу. Лендинги, интернет-магазины, CRM-системы. Понятно, в срок и без сюрпризов.",
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
    title: "WebClinic — Веб-разработка для бизнеса",
    description:
      "Делаем сайты и веб-сервисы, которые реально помогают бизнесу. Понятно, в срок и без сюрпризов.",
    siteName: "WebClinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebClinic — Веб-разработка для бизнеса",
    description:
      "Делаем сайты и веб-сервисы, которые реально помогают бизнесу.",
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
        <Analytics />
        <Header />
        {children}
        <Footer />
        <ChatWidget />
        <BackToTop />
      </body>
    </html>
  );
}
