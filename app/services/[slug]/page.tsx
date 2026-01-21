import ServiceDetailComponent from "@/components/services/ServiceDetailComponent";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const services = {
  "web-development": {
    id: "web-development",
    title: "Веб-разработка",
    shortDesc: "Корпоративные сайты, веб-приложения и платформы",
    problem: "Устаревший сайт не приносит клиентов, медленно загружается и плохо выглядит на мобильных устройствах. Конкуренты обходят вас в поиске.",
    solution: "Создаём современные, быстрые сайты с адаптивным дизайном и оптимизацией для поисковых систем. Используем передовые технологии для максимальной производительности.",
    result: "Увеличение конверсии, профессиональный имидж компании, рост органического трафика и позиций в поисковой выдаче.",
    features: [
      "Корпоративные сайты",
      "Лендинги и промо-страницы",
      "Интернет-магазины",
      "Веб-порталы",
      "SPA/PWA приложения",
      "Редизайн и миграция",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    price: "от 150 000 ₽",
    timeline: "4-8 недель",
    gradient: "from-[#00ff88] to-[#00d4ff]",
    color: "#00ff88",
  },
  "crm-erp": {
    id: "crm-erp",
    title: "CRM/ERP системы",
    shortDesc: "Кастомные системы управления бизнесом",
    problem: "Данные о клиентах разбросаны по разным таблицам, менеджеры забывают о задачах, нет прозрачности в процессах. Excel больше не справляется.",
    solution: "Разрабатываем кастомные системы управления под специфику вашего бизнеса с нужными именно вам функциями. Никаких лишних модулей — только то, что работает.",
    result: "Централизованная база данных, автоматические напоминания, полная картина бизнеса в реальном времени. Контроль на каждом этапе.",
    features: [
      "Управление клиентами",
      "Воронки продаж",
      "Складской учёт",
      "Документооборот",
      "Аналитика и отчёты",
      "Мобильный доступ",
    ],
    technologies: ["Node.js", "PostgreSQL", "React", "Redis", "Docker"],
    price: "от 400 000 ₽",
    timeline: "2-4 месяца",
    gradient: "from-[#00d4ff] to-[#8b5cf6]",
    color: "#00d4ff",
  },
  "automation": {
    id: "automation",
    title: "Автоматизация бизнеса",
    shortDesc: "Оптимизация рутинных процессов и интеграции",
    problem: "Сотрудники тратят часы на рутинные задачи: ручной перенос данных, формирование отчётов, отправку уведомлений. Время уходит впустую.",
    solution: "Автоматизируем повторяющиеся процессы, настраиваем интеграции между системами, создаём ботов для типовых задач. Люди занимаются важным — рутину делают роботы.",
    result: "Экономия рабочего времени, снижение ошибок, ускорение бизнес-процессов. Сотрудники фокусируются на том, что приносит деньги.",
    features: [
      "Интеграции систем",
      "Телеграм/WhatsApp боты",
      "Автоматические отчёты",
      "Email-рассылки",
      "Синхронизация данных",
      "Триггерные сценарии",
    ],
    technologies: ["Python", "Node.js", "API", "Webhooks", "n8n"],
    price: "от 100 000 ₽",
    timeline: "2-6 недель",
    gradient: "from-[#8b5cf6] to-[#ec4899]",
    color: "#8b5cf6",
  },
  "api-integrations": {
    id: "api-integrations",
    title: "API и интеграции",
    shortDesc: "Связываем системы в единую экосистему",
    problem: "Разные системы не связаны между собой: данные приходится вводить вручную несколько раз, информация расходится, возникают ошибки.",
    solution: "Разрабатываем API для связи систем, настраиваем интеграции с платёжными системами, CRM, 1C, маркетплейсами. Всё работает как единый организм.",
    result: "Единый поток данных, исключение ручного ввода, консистентная информация во всех системах. Один источник правды для всего бизнеса.",
    features: [
      "REST/GraphQL API",
      "Интеграция с 1C",
      "Платёжные системы",
      "Маркетплейсы",
      "Службы доставки",
      "Сторонние сервисы",
    ],
    technologies: ["REST", "GraphQL", "WebSocket", "OAuth", "RabbitMQ"],
    price: "от 80 000 ₽",
    timeline: "2-4 недели",
    gradient: "from-[#ec4899] to-[#f97316]",
    color: "#ec4899",
  },
  "support": {
    id: "support",
    title: "Поддержка и развитие",
    shortDesc: "Техническое сопровождение и развитие продукта",
    problem: "Система работает, но требует постоянного внимания: обновления, мониторинг, исправление ошибок, новые фичи. Своего IT-отдела нет.",
    solution: "Берём на себя техническую поддержку: мониторинг, резервное копирование, обновления и развитие функционала. Вы сосредоточены на бизнесе — мы на технике.",
    result: "Стабильная работа системы, быстрое решение проблем, планомерное развитие продукта. Спите спокойно — мы следим за всем 24/7.",
    features: [
      "Мониторинг 24/7",
      "Резервное копирование",
      "Обновления безопасности",
      "Исправление багов",
      "Новый функционал",
      "Консультации",
    ],
    technologies: ["Docker", "AWS", "CI/CD", "Monitoring", "Kubernetes"],
    price: "от 30 000 ₽/мес",
    timeline: "Постоянно",
    gradient: "from-[#f97316] to-[#00ff88]",
    color: "#f97316",
  },
};

type ServiceSlug = keyof typeof services;

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    return {
      title: "Услуга не найдена — WebClinic Solutions",
    };
  }

  return {
    title: `${service.title} — WebClinic Solutions`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} — WebClinic Solutions`,
      description: service.shortDesc,
      url: `https://webclinic-solutions.dev/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceDetailComponent service={service} />
    </main>
  );
}
