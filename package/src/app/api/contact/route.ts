// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.MAIL_USER}>`,
      to: 'emphasissoftinfo@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Project Type:</strong> ${body.projectType}</p>
        <p><strong>Budget:</strong> ${body.budget}</p>
        <p><strong>Date:</strong> ${body.date}</p>
        <p><strong>Time:</strong> ${body.time}</p>
        <p><strong>Description:</strong> ${body.description}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
