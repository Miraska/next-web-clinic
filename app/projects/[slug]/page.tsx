import ProjectDetailComponent from "@/components/projects/ProjectDetailComponent";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData, type ProjectSlug } from "@/lib/projects";

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug as ProjectSlug];

  if (!project) {
    return {
      title: "Проект не найден — WebClinic Solutions",
    };
  }

  return {
    title: `${project.title} — WebClinic Solutions`,
    description: project.description,
    openGraph: {
      title: `${project.title} — WebClinic Solutions`,
      description: project.description,
      url: `https://webclinic-solutions.dev/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectDetailComponent slug={slug} />
    </main>
  );
}
