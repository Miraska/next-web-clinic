import ServiceDetailComponent from "@/components/services/ServiceDetailComponent";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, type ServiceSlug } from "@/lib/services";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];

  if (!service) {
    return {
      title: "Услуга не найдена — WebClinic Solutions",
    };
  }

  return {
    title: `${service.title} — WebClinic Solutions`,
    description: service.subtitle,
    openGraph: {
      title: `${service.title} — WebClinic Solutions`,
      description: service.subtitle,
      url: `https://webclinic-solutions.dev/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceDetailComponent slug={slug} />
    </main>
  );
}
