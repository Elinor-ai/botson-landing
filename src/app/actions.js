"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData) {
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const company = formData.get("company")?.toString().trim() || "";
  const subject =
    formData.get("subject")?.toString().trim() || "General Inquiry";
  const message = formData.get("message")?.toString().trim() || "";

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return { success: false, error: "Email credentials are not configured." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email || process.env.EMAIL_USER,
      subject: `Botson Contact: ${subject}`,
      text: `Name: ${name || "N/A"}
Email: ${email || "N/A"}
Company: ${company || "N/A"}

Message:
${message || "No message provided."}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      error: "Unable to send your message right now. Please try again later.",
    };
  }
}
