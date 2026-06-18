import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "WheelOnHour — #1 Car Rental in Ahmedabad | Self Drive from ₹1800/day";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050a15 0%, #0a1628 50%, #0f1d35 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gradient circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,212,255,0.1)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: "50px",
            padding: "10px 24px",
            marginBottom: "24px",
            fontSize: "20px",
            color: "#00d4ff",
          }}
        >
          #1 Car Rental in Ahmedabad
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#f0f4f8",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-2px",
          }}
        >
          WheelOnHour
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#8899aa",
            textAlign: "center",
            marginBottom: "32px",
            maxWidth: "800px",
          }}
        >
          Self-Drive Baleno &amp; Altroz on Rent — From ₹1,800/day
        </div>

        {/* Features row */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginBottom: "32px",
          }}
        >
          {["Easy Pickup", "Fully Insured", "No Hidden Charges", "24/7 Support"].map(
            (item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#00d4ff",
                  fontSize: "18px",
                }}
              >
                <span style={{ color: "#25d366" }}>✓</span>
                <span>{item}</span>
              </div>
            )
          )}
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "linear-gradient(135deg, #25d366, #128c7e)",
            borderRadius: "14px",
            padding: "16px 36px",
            fontSize: "22px",
            fontWeight: 700,
            color: "white",
          }}
        >
          Book on WhatsApp — +91 884 984 9888
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #00d4ff, #ff6b35, #00d4ff)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
