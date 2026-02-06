/**
 * HTML-шаблон письма для заявок с сайта. Тёмная тема, голубые акценты — удобно в тёмном режиме почты.
 */
export type ContactPayload = {
  source: string;
  name: string;
  contactMethod: string;
  contact: string;
  task?: string;
  projectType?: string;
  selectedFeatures?: string[];
  message?: string;
};

const SOURCE_LABELS: Record<string, string> = {
  modal: "Форма в модальном окне (главная)",
  "final-cta": "Блок «Связаться» внизу главной",
  contact: "Страница «Контакты»",
};

const PROJECT_TYPE_LABELS: Record<string, string> = {
  landing: "Лендинг / Сайт-визитка",
  corporate: "Корпоративный сайт",
  shop: "Интернет-магазин",
  crm: "CRM / Личный кабинет",
  automation: "Автоматизация / Интеграции",
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string): string {
  if (!value?.trim()) return "";
  return `
    <tr>
      <td style="padding: 12px 16px; border-bottom: 1px solid #334155; color: #94a3b8; font-size: 14px; width: 140px;">${escapeHtml(label)}</td>
      <td style="padding: 12px 16px; border-bottom: 1px solid #334155; color: #f1f5f9; font-size: 14px;">${escapeHtml(value)}</td>
    </tr>`;
}

export function buildContactEmailHtml(payload: ContactPayload): string {
  const sourceLabel = SOURCE_LABELS[payload.source] || payload.source;
  const contactMethodLabel =
    payload.contactMethod === "telegram"
      ? "Telegram"
      : payload.contactMethod === "email"
        ? "Email"
        : "Телефон";

  const rows: string[] = [
    row("Источник", sourceLabel),
    row("Имя", payload.name),
    row("Способ связи", contactMethodLabel),
    row("Контакт", payload.contact),
    row("Задача / описание", payload.task || ""),
    row("Тип проекта", payload.projectType ? (PROJECT_TYPE_LABELS[payload.projectType] || payload.projectType) : ""),
  ];

  if (payload.selectedFeatures?.length) {
    rows.push(
      row("Выбранные опции", payload.selectedFeatures.join(", "))
    );
  }
  if (payload.message?.trim()) {
    rows.push(row("Сообщение", payload.message));
  }

  const tableRows = rows.filter(Boolean).join("");

  return `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>Новая заявка с сайта</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #0f172a; min-height: 100vh;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #0f172a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; background: #1e293b; border-radius: 16px; overflow: hidden; border: 1px solid #334155;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 28px 32px; text-align: center;">
              <div style="display: inline-block; background: rgba(255,255,255,0.15); border-radius: 12px; padding: 8px 14px; margin-bottom: 12px;">
                <span style="color: #bfdbfe; font-size: 13px; font-weight: 600; letter-spacing: 0.02em;">WEBCLINIC</span>
              </div>
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">Новая заявка с сайта</h1>
              <p style="margin: 8px 0 0; color: #bfdbfe; font-size: 14px;">Клиент оставил контакты для связи</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 0; background: #1e293b;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                ${tableRows}
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background: #0f172a; border-top: 1px solid #334155; text-align: center;">
              <p style="margin: 0; color: #64748b; font-size: 12px;">Письмо отправлено автоматически с сайта WebClinic</p>
              <p style="margin: 6px 0 0; color: #64748b; font-size: 12px;">Ответьте клиенту в рабочее время.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
