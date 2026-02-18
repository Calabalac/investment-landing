"use server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function sendLeadEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    if (!name || !phone) {
        return { success: false, message: "Будь ласка, заповніть всі поля." };
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error("Telegram bot token or chat ID is missing.");
        return { success: false, message: "Помилка конфігурації сервера." };
    }

    const message = `🏨 *Нова заявка SADOA*\n\n👤 *Ім'я:* ${name}\n📞 *Телефон:* ${phone}\n\n🕐 ${new Date().toLocaleString("uk-UA")}`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: "Markdown",
                }),
            }
        );

        const result = await response.json();

        if (!result.ok) {
            console.error("Telegram API error:", result);
            return { success: false, message: `Помилка Telegram: ${result.description}` };
        }

        return { success: true, message: "Заявка успішно відправлена!" };
    } catch (error: any) {
        console.error("Unhandled error:", error);
        return { success: false, message: `Критична помилка: ${error.message || "Невідома помилка"}` };
    }
}
