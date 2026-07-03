import { NextResponse } from "next/server";

// Contact endpoint — emails submissions via SendGrid's v3 API (no SDK needed).
// Required env: SENDGRID_API_KEY, CONTACT_FROM_EMAIL (a SendGrid-verified sender).
// Optional env: CONTACT_TO_EMAIL (defaults to my inbox).

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "irfanhathoti@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const API_KEY = process.env.SENDGRID_API_KEY;

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // No key configured (e.g. local dev) — accept but don't pretend it was delivered.
    if (!API_KEY || !FROM_EMAIL) {
      console.warn("[contact] SendGrid not configured; submission not delivered:", {
        name,
        email,
      });
      return NextResponse.json(
        { success: true, message: "Message received. Thank you for reaching out!" },
        { status: 200 }
      );
    }

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: TO_EMAIL }] }],
        from: { email: FROM_EMAIL, name: "Portfolio Contact" },
        reply_to: { email, name },
        subject: `Portfolio contact from ${name}`,
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          },
        ],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] SendGrid error:", res.status, detail);
      return NextResponse.json(
        { success: false, error: "Could not send message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message received. Thank you for reaching out!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
