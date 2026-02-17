"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    if (!name || !phone) {
        return { success: false, message: "Будь ласка, заповніть всі поля." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "SADOA <onboarding@resend.dev>", // Note: Use verified domain in production
            to: ["ukr.ovchar@gmail.com", "sadovecandrei@gmail.com"],
            subject: `Нова заявка з сайту SADOA: ${name}`,
            text: `
        Нова заявка на інвестицію!
        
        Ім'я: ${name}
        Телефон: ${phone}
        
        Дата: ${new Date().toLocaleString("uk-UA")}
      `,
            html: `
        <h2>Нова заявка на інвестицію SADOA</h2>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Дата:</strong> ${new Date().toLocaleString("uk-UA")}</p>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return { success: false, message: "Помилка при відправці. Спробуйте пізніше або напишіть у Telegram." };
        }

        return { success: true, message: "Заявка успішно відправлена!" };
    } catch (error) {
        console.error("Email sending error:", error);
        return { success: false, message: "Помилка при відправці. Спробуйте пізніше або напишіть у Telegram." };
    }
}
