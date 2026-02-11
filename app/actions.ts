"use server";

import nodemailer from "nodemailer";

export async function sendLeadEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    if (!name || !phone) {
        return { success: false, message: "Будь ласка, заповніть всі поля." };
    }

    // Create Transporter
    // NOTE: For Gmail, you MUST use an App Password. 
    // Allow user to configure this via ENV variables.
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // e.g. ukr.ovchar@gmail.com
            pass: process.env.EMAIL_PASS, // App Password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
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
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: "Заявка успішно відправлена!" };
    } catch (error) {
        console.error("Email sending error:", error);
        return { success: false, message: "Помилка при відправці. Спробуйте пізніше або напишіть у Telegram." };
    }
}
