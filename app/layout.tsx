import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WheelOnHour | Premium Car Rental in Ahmedabad",
  description:
    "Rent premium cars like Maruti Suzuki Baleno and Tata Altroz at affordable rates in Ahmedabad, Gujarat. Starting at just ₹1800/24hrs. Contact Nilesh Kidiya for bookings.",
  keywords: [
    "car rental Ahmedabad",
    "rent a car Gujarat",
    "Baleno on rent",
    "Altroz on rent",
    "affordable car rental",
    "WheelOnHour",
    "self drive car Ahmedabad",
  ],
  openGraph: {
    title: "WheelOnHour | Premium Car Rental in Ahmedabad",
    description:
      "Rent premium cars at affordable rates in Ahmedabad, Gujarat. Starting at just ₹1800/24hrs.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
