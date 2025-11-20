"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const company = formData.get("company");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Botson Landing Page Website" <' + process.env.EMAIL_USER + ">",
      to: ["elidor@botson.ai"],
      cc: [],

      replyTo: email,

      subject: `New Website Lead: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #22d3ee;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
