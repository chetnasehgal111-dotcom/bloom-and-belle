import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

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

    // In a production setup, here we would integrate with Mailchimp, Klaviyo, or Brevo.
    // We log and return structured success without claiming fake integrations.
    console.log(`[Bloom & Belle Newsletter Subscription] New subscriber: ${email}`);

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to the Bloom Journal! Welcome to Bloom & Belle.",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
