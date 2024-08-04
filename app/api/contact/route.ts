// app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to your own email
    subject: "New message from Omeruta website",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="background-color: #01579b; color: white; padding: 10px; border-radius: 5px; text-align: center;">
          New Message from Omeruta Website
        </h2>
        <div style="padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <p style="margin-bottom: 10px;">
            <strong>Name:</strong> <span style="color: #555;">${name}</span>
          </p>
          <p style="margin-bottom: 10px;">
            <strong>Email:</strong> <span style="color: #555;">${email}</span>
          </p>
          <p style="margin-bottom: 10px;">
            <strong>Message:</strong>
          </p>
          <p style="border-left: 4px solid #01579b; padding-left: 10px; color: #555; margin: 0;">
            ${message}
          </p>
        </div>
        <footer style="margin-top: 20px; text-align: center; color: #777;">
          <p style="font-size: 12px;">
            © 2024 Omeruta. All rights reserved.
          </p>
        </footer>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
