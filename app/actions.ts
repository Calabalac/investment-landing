"use server";

export async function sendLeadEmail(formData: FormData) {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL;

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    if (!name || !phone) {
        return { success: false, message: "Будь ласка, заповніть всі поля." };
    }

    // Проверка конфигурации (хотя бы Телега должна быть)
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error(`Missing Telegram config: TOKEN=${!!TELEGRAM_BOT_TOKEN}, CHAT_ID=${!!TELEGRAM_CHAT_ID}`);
        return { success: false, message: "Помилка конфігурації сервера (TG)." };
    }

    const results = [];

    // 1. Отправка в Telegram
    const tgMessage = `🏨 *Нова заявка SADOA*\n\n👤 *Ім'я:* ${name}\n📞 *Телефон:* ${phone}\n\n🕐 ${new Date().toLocaleString("uk-UA")}`;

    const tgPromise = fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: tgMessage,
            parse_mode: "Markdown",
        }),
    }).then(res => res.json());
    results.push(tgPromise);

    // 2. Отправка в Google Таблицы (если есть URL)
    if (GOOGLE_SHEET_URL) {
        const gsPromise = fetch(GOOGLE_SHEET_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, source: "SADOA Landing" }),
        }).catch(err => console.error("Google Sheets Error:", err));
        results.push(gsPromise);
    }

    try {
        const [tgResult] = await Promise.all(results);

        if (!tgResult.ok) {
            console.error("Telegram API error:", tgResult);
            return { success: false, message: `Помилка Telegram: ${tgResult.description}` };
        }

        return { success: true, message: "Заявка успішно відправлена!" };
    } catch (error: any) {
        console.error("Unhandled error:", error);
        return { success: false, message: `Критична помилка: ${error.message || "Невідома помилка"}` };
    }
}
