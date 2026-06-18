import type { Metadata } from "next";
import Link from "next/link";
import { SeoNav, SeoFooter } from "../components/SeoPageLayout";

export const metadata: Metadata = {
  title: "Wedding Car Rental in Ahmedabad — Premium Baleno & Altroz | WheelOnHour",
  description:
    "Rent premium cars for weddings in Ahmedabad. Maruti Baleno & Tata Altroz from ₹1800/day. Decorated car options available. Book on WhatsApp — WheelOnHour.",
  alternates: { canonical: "/wedding-car-rental-ahmedabad" },
  openGraph: {
    title: "Wedding Car Rental Ahmedabad | WheelOnHour",
    description: "Premium wedding car rental in Ahmedabad from ₹1800/day.",
    url: "https://wheelonhour.vercel.app/wedding-car-rental-ahmedabad",
    type: "website",
    locale: "en_IN",
  },
};

export default function WeddingCarRental() {
  return (
    <>
      <SeoNav />
      <div className="seo-page">
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="container">
        <Link href="/" className="seo-back-link">← Back to WheelOnHour</Link>

        <div className="seo-page-hero">
          <h1>Wedding Car Rental in Ahmedabad</h1>
          <p>
            Make your special day even more memorable with a premium rental car from WheelOnHour.
            Stylish Maruti Baleno &amp; Tata Altroz available for weddings and functions in Ahmedabad.
          </p>
          <a
            href="https://wa.me/918849849888?text=Hi!%20I%20need%20a%20car%20for%20a%20wedding%20in%20Ahmedabad."
            target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
          >
            Book Wedding Car on WhatsApp
          </a>
        </div>

        <div className="seo-page-content">
          <h2>Premium Cars for Weddings in Ahmedabad</h2>
          <p>
            WheelOnHour offers <strong>wedding car rental in Ahmedabad</strong> at affordable rates. Our premium
            fleet is perfect for baraat processions, bride/groom entry, guest transportation, and airport
            pickups for wedding guests.
          </p>

          <h2>Wedding Car Rental Options</h2>
          <ul>
            <li><strong>Maruti Suzuki Baleno:</strong> ₹2,400/day — Sleek, modern, premium interiors</li>
            <li><strong>Tata Altroz:</strong> ₹1,800/day — Stylish design, 5-star safety</li>
          </ul>

          <h2>Wedding Car Rental Uses</h2>
          <ul>
            <li>Bride &amp; groom transportation</li>
            <li>Guest pickups from airport and railway station</li>
            <li>Pre-wedding shoot locations</li>
            <li>Multi-day wedding functions (mehendi, sangeet, reception)</li>
            <li>Honeymoon road trips from Ahmedabad</li>
          </ul>

          <h2>Multi-Day Wedding Packages</h2>
          <p>
            Planning a 3-5 day wedding? Contact us on WhatsApp for special multi-day rates. We offer
            discounted packages for extended wedding bookings in Ahmedabad.
          </p>

          <div className="seo-page-cta">
            <h2>Book Wedding Car Rental — From ₹1,800/day</h2>
            <p>Make your wedding day perfect. Book now on WhatsApp!</p>
            <a
              href="https://wa.me/918849849888?text=Hi!%20I%20need%20a%20car%20for%20a%20wedding%20in%20Ahmedabad."
              target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
            >
              WhatsApp — +91 884 984 9888
            </a>
          </div>
        </div>
      </div>
    </div>
      <SeoFooter currentPath="/wedding-car-rental-ahmedabad" />
    </>
  );
}
