import { NextRequest, NextResponse } from "next/server";

// Type definitions
interface WhitePaperRequest {
  name: string;
  email: string;
  company?: string;
  source?: string;
  requestedAt?: string;
}

interface ValidationError {
  field: string;
  message: string;
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate request body
function validateRequest(body: unknown): { valid: true; data: WhitePaperRequest } | { valid: false; errors: ValidationError[] } {
  const errors: ValidationError[] = [];

  if (!body || typeof body !== "object") {
    return { valid: false, errors: [{ field: "body", message: "Request body is required" }] };
  }

  const data = body as Record<string, unknown>;

  // Validate name
  if (!data.name || typeof data.name !== "string") {
    errors.push({ field: "name", message: "Name is required" });
  } else if (data.name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" });
  } else if (data.name.trim().length > 100) {
    errors.push({ field: "name", message: "Name must be less than 100 characters" });
  }

  // Validate email
  if (!data.email || typeof data.email !== "string") {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" });
  } else if (data.email.length > 254) {
    errors.push({ field: "email", message: "Email address is too long" });
  }

  // Validate optional company
  if (data.company !== undefined && typeof data.company !== "string") {
    errors.push({ field: "company", message: "Company must be a string" });
  } else if (typeof data.company === "string" && data.company.length > 200) {
    errors.push({ field: "company", message: "Company name must be less than 200 characters" });
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      name: (data.name as string).trim(),
      email: (data.email as string).trim().toLowerCase(),
      company: data.company ? (data.company as string).trim() : undefined,
      source: typeof data.source === "string" ? data.source : "stevekaplan.ai",
      requestedAt: typeof data.requestedAt === "string" ? data.requestedAt : new Date().toISOString(),
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Validate the request
    const validation = validateRequest(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    const { name, email, company, source, requestedAt } = validation.data;

    // =========================================================================
    // EMAIL SENDING INTEGRATION
    // =========================================================================
    // 
    // Replace this section with your email service provider integration.
    // 
    // Options include:
    // 
    // 1. Resend (recommended for Vercel):
    //    import { Resend } from 'resend';
    //    const resend = new Resend(process.env.RESEND_API_KEY);
    //    await resend.emails.send({
    //      from: 'noreply@stevekaplan.ai',
    //      to: 'steve@stevekaplan.ai',
    //      subject: `White Paper Request: ${name}`,
    //      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Company: ${company || 'N/A'}</p>`,
    //    });
    //
    // 2. SendGrid:
    //    import sgMail from '@sendgrid/mail';
    //    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    //    await sgMail.send({
    //      to: 'steve@stevekaplan.ai',
    //      from: 'noreply@stevekaplan.ai',
    //      subject: `White Paper Request: ${name}`,
    //      html: `...`,
    //    });
    //
    // 3. Postmark, Mailgun, AWS SES, etc.
    //
    // =========================================================================

    // For now, log the submission (remove in production)
    console.log("White Paper Request:", {
      name,
      email,
      company,
      source,
      requestedAt,
      recipientEmail: "steve@stevekaplan.ai",
    });

    // Simulate processing delay (remove when implementing real email)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "White paper request received. Check your inbox!",
        data: {
          name,
          email,
          submittedAt: requestedAt,
        },
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing white paper request:", error);
    
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
