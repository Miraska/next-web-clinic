/**
 * Отправка заявки на API. Используется всеми формами сайта.
 */
export type SubmitContactPayload = {
  source: string;
  name: string;
  contactMethod: string;
  contact: string;
  task?: string;
  projectType?: string;
  selectedFeatures?: string[];
  message?: string;
};

export async function submitContact(
  payload: SubmitContactPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const message =
        typeof data?.error === "string"
          ? data.error
          : "Не удалось отправить заявку. Попробуйте позже.";
      return { ok: false, error: message };
    }

    return { ok: true };
  } catch (e) {
    const message =
      e instanceof Error ? e.message : "Ошибка сети. Проверьте интернет и попробуйте снова.";
    return { ok: false, error: message };
  }
}
