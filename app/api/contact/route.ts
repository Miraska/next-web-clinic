import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { buildContactEmailHtml, type ContactPayload } from "@/lib/email-template";

const TO_EMAIL = process.env.CONTACT_EMAIL_TO || "webclinic.ltd@gmail.com";
const FROM_EMAIL = process.env.EMAIL_FROM || "WebClinic <webclinic.ltd@gmail.com>";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true";

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

function validatePayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const o = body as Record<string, unknown>;
  return (
    typeof o.source === "string" &&
    typeof o.name === "string" &&
    typeof o.contactMethod === "string" &&
    typeof o.contact === "string"
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validatePayload(body)) {
      return Response.json(
        { error: "Неверные данные: нужны source, name, contactMethod, contact" },
        { status: 400 }
      );
    }

    const payload: ContactPayload = {
      source: body.source,
      name: String(body.name).trim(),
      contactMethod: body.contactMethod,
      contact: String(body.contact).trim(),
      task: body.task ? String(body.task).trim() : undefined,
      projectType: body.projectType ? String(body.projectType) : undefined,
      selectedFeatures: Array.isArray(body.selectedFeatures)
        ? body.selectedFeatures.map(String)
        : undefined,
      message: body.message ? String(body.message).trim() : undefined,
    };

    const transporter = getTransporter();
    if (!transporter) {
      console.error("SMTP not configured: set SMTP_HOST, SMTP_USER, SMTP_PASS");
      return Response.json(
        { error: "Сервис отправки писем не настроен" },
        { status: 500 }
      );
    }

    const html = buildContactEmailHtml(payload);

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Заявка с сайта: ${payload.name} — ${payload.contact}`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    const message = err instanceof Error ? err.message : "Не удалось отправить письмо";
    return Response.json(
      { error: "Произошла ошибка при отправке заявки" },
      { status: 500 }
    );
  }
}
