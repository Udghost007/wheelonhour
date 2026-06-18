import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contactNumber, carName, yearOfManufacture, availability } = body;

    // Validate all fields
    if (!name || !contactNumber || !carName || !yearOfManufacture || !availability) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"WheelOnHour Partner Inquiry" <${process.env.SMTP_EMAIL}>`,
      to: "bhurokathiyavadi292@gmail.com",
      subject: `New Partnership Inquiry — ${name} (${carName})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #0891b2, #0e7490); padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Partner Inquiry</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">WheelOnHour Fleet Program</p>
          </div>

          <div style="background: white; padding: 28px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 40%;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Contact Number</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">
                  <a href="tel:${contactNumber}" style="color: #0891b2; text-decoration: none;">${contactNumber}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Car Name / Model</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${carName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Year of Manufacture</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${yearOfManufacture}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Availability</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a;">${availability}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #f0f9ff; border-radius: 8px; border-left: 4px solid #0891b2;">
              <p style="margin: 0; color: #475569; font-size: 14px;">
                <strong>Action Required:</strong> Contact this person to discuss the partnership opportunity.
              </p>
            </div>
          </div>

          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">
            This email was sent from the WheelOnHour website partner form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Partnership inquiry sent successfully!" });
  } catch (error) {
    console.error("Partner form error:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }
}
