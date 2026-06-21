import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Business Card — WheelOnHour | Nilesh Kidiya",
  description:
    "WheelOnHour — Ahmedabad's #1 Self-Drive Car Rental. Contact Nilesh Kidiya, Owner & Founder. 8+ Premium Cars from ₹2,000/day. Book instantly on WhatsApp!",
  openGraph: {
    title: "Nilesh Kidiya — WheelOnHour | Digital Business Card",
    description:
      "Self-drive car rental in Ahmedabad. Baleno, Altroz, i20, Dzire, Nexon & Brezza from ₹2,000/day. Save contact & book on WhatsApp!",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
