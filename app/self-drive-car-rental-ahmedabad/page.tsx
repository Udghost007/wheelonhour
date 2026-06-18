import type { Metadata } from "next";
import Link from "next/link";
import { SeoNav, SeoFooter } from "../components/SeoPageLayout";

export const metadata: Metadata = {
  title: "Self Drive Car Rental in Ahmedabad — Baleno & Altroz from ₹1800",
  description:
    "Self-drive car rental in Ahmedabad without driver. Rent Baleno & Altroz from ₹1800/day. No hidden charges, easy pickup, fully insured. Book on WhatsApp — WheelOnHour.",
  alternates: { canonical: "/self-drive-car-rental-ahmedabad" },
  openGraph: {
    title: "Self Drive Car Rental Ahmedabad — From ₹1800/day",
    description: "Rent self-drive cars in Ahmedabad. Baleno & Altroz with easy pickup.",
    url: "https://wheelonhour.vercel.app/self-drive-car-rental-ahmedabad",
    type: "website",
    locale: "en_IN",
  },
};

export default function SelfDriveCarRentalAhmedabad() {
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
          <h1>Self Drive Car Rental in Ahmedabad</h1>
          <p>
            Drive without a driver. WheelOnHour offers premium self-drive cars in Ahmedabad — Baleno &amp; Altroz
            starting at just ₹1,800/day with easy pickup and full insurance.
          </p>
          <a
            href="https://wa.me/918849849888?text=Hi!%20I%20want%20a%20self-drive%20car%20in%20Ahmedabad."
            target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
          >
            Book Self-Drive Car on WhatsApp
          </a>
        </div>

        <div className="seo-page-content">
          <h2>What is Self-Drive Car Rental?</h2>
          <p>
            Self-drive car rental means you rent a car <strong>without a driver</strong>. You get the keys and drive
            the car yourself — giving you complete freedom, privacy, and flexibility. WheelOnHour is Ahmedabad&apos;s
            leading <strong>self-drive car rental service</strong>, trusted by 500+ customers.
          </p>

          <h2>Self-Drive Cars Available in Ahmedabad</h2>
          <h3>Tata Altroz (Manual) — ₹1,800/day</h3>
          <p>5-seater premium hatchback with 23 km/l mileage. Ideal for city drives and short trips.</p>
          <h3>Maruti Suzuki Baleno (Automatic/Manual) — ₹2,400/day</h3>
          <p>5-seater premium hatchback with 22 km/l mileage. Perfect for comfortable long drives and family outings.</p>

          <h2>Benefits of Self-Drive Car Rental in Ahmedabad</h2>
          <ul>
            <li><strong>Complete privacy</strong> — No driver listening to your conversations</li>
            <li><strong>Drive anywhere</strong> — City, highway, outstation — no restrictions</li>
            <li><strong>Your schedule</strong> — No waiting for drivers, leave and return when you want</li>
            <li><strong>Cost-effective</strong> — Save money on driver charges and tips</li>
            <li><strong>Insured vehicles</strong> — All WheelOnHour cars are fully insured</li>
            <li><strong>Well-maintained</strong> — Showroom condition cars with regular servicing</li>
          </ul>

          <h2>Self-Drive Car Rental vs Cab Services in Ahmedabad</h2>
          <p>
            While Ola and Uber charge per km with surge pricing, <strong>WheelOnHour&apos;s self-drive rental</strong> gives
            you a flat daily rate starting ₹1,800 — drive unlimited within the city. For trips over 50 km, self-drive
            is significantly cheaper than any cab service in Ahmedabad.
          </p>

          <h2>How to Book a Self-Drive Car in Ahmedabad</h2>
          <ul>
            <li><strong>Step 1:</strong> Choose Altroz (₹1,800) or Baleno (₹2,400)</li>
            <li><strong>Step 2:</strong> WhatsApp us at +91 884 984 9888</li>
            <li><strong>Step 3:</strong> Pick up from our location — and drive away!</li>
          </ul>

          <div className="seo-page-cta">
            <h2>Book Your Self-Drive Car Today</h2>
            <p>Freedom starts at ₹1,800/day. No hidden charges. Fully insured.</p>
            <a
              href="https://wa.me/918849849888?text=Hi!%20I%20want%20a%20self-drive%20car%20in%20Ahmedabad."
              target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
            >
              WhatsApp — +91 884 984 9888
            </a>
          </div>
        </div>
      </div>
    </div>
      <SeoFooter currentPath="/self-drive-car-rental-ahmedabad" />
    </>
  );
}
