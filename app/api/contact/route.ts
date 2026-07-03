import { NextResponse } from "next/server";

/**
 * Placeholder contact endpoint.
 *
 * For now this simply validates the payload and returns a success response.
 * Hook up SendGrid / a database here later — the client form already POSTs JSON
 * with { name, email, message }.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // TODO: integrate SendGrid / persistence here.

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
