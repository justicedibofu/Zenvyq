import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, contact, service, message } = body;

    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "Name, contact (email or WhatsApp), and message are required." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "contact@zenvyq.tech";

    if (resendApiKey) {
      // Send via Resend REST API without requiring heavy external SDK
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ZENVYQ Website <onboarding@resend.dev>",
          to: [toEmail],
          subject: `New Project Inquiry from ${name} [${service}]`,
          html: `
            <h2>New ZENVYQ Contact Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Resend API error:", errorData);
      }
    } else {
      // Log to console if no key is set
      console.log("=== [ZENVYQ CONTACT SUBMISSION] (No RESEND_API_KEY set) ===");
      console.log({
        name,
        contact,
        service,
        message,
        timestamp: new Date().toISOString(),
      });
      console.log("==========================================================");
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been received! We will reply via email or WhatsApp within 24 hours.",
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("Contact submission error:", errorMessage);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please chat directly on WhatsApp." },
      { status: 500 }
    );
  }
}
