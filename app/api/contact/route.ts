const nodemailer = require('nodemailer');

export async function POST(req: Request) {
  const { fullName, address, phone, message } = await req.json();

  if (!fullName || !address || !phone || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"DMS Contact Form" <${process.env.SMTP_USER}>`,
      to: "adam@distinctivems.com",
      subject: "DMS Contact Form",
      text: `
        Full Name: ${fullName}
        Email: ${address}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}