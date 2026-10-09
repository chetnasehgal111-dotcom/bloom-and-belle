import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, category, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please enter a message with at least 10 characters." },
        { status: 400 }
      );
    }

    // In production, integrate with SendGrid, Resend, or AWS SES
    console.log("[Bloom & Belle Contact Inquiry Received]:", {
      name,
      email,
      phone: phone || "Not provided",
      category: category || "General Inquiry",
      subject: subject || "No subject",
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Bloom & Belle. Your inquiry has been received, and our styling concierge team will reply within 24 hours.",
    });
  } catch (error) {
    console.error("Contact inquiry submission error:", error);
    return NextResponse.json(
      { error: "Server error processing your inquiry. Please try again later or reach us on WhatsApp." },
      { status: 500 }
    );
  }
}
