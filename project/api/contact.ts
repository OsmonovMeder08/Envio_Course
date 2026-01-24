import nodemailer from 'nodemailer';
import type { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage & { body: any }, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ message: 'Метод не поддерживается' }));
    return;
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.statusCode = 400;
    res.end(JSON.stringify({ message: 'Пожалуйста, заполните все поля формы' }));
    return;
  }

  // Твой Gmail и пароль (нужен App Password, не обычный пароль!)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'osmonovmeder743@gmail.com', // твой Gmail
      pass: 'sebastain.2008',             // App Password Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: `"Envio Site" <osmonovmeder743@gmail.com>`, // безопасно: письмо от твоей почты
      to: 'bravl9816@gmail.com',                         // твой админ e-mail
      subject: `Сообщение с сайта от ${name}`,
      text: `Имя: ${name}\nEmail посетителя: ${email}\n\nСообщение:\n${message}`,
    });

    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Письмо отправлено!' }));
  } catch (err) {
    console.error('Ошибка при отправке письма:', err);
    res.statusCode = 500;
    res.end(JSON.stringify({ message: 'Ошибка при отправке письма' }));
  }
}
