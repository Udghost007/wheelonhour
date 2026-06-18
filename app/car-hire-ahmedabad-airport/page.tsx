import type { Metadata } from "next";
import Link from "next/link";
import { SeoNav, SeoFooter } from "../components/SeoPageLayout";

export const metadata: Metadata = {
  title: "Car Hire Ahmedabad Airport — Self Drive from ₹1800/day | WheelOnHour",
  description:
    "Car hire at Ahmedabad airport (SVP International). Self-drive Baleno & Altroz from ₹1800/day with airport pickup & drop. Book on WhatsApp — WheelOnHour.",
  alternates: { canonical: "/car-hire-ahmedabad-airport" },
  openGraph: {
    title: "Car Hire Ahmedabad Airport — From ₹1800/day",
    description: "Rent a car at Ahmedabad airport. Self-drive with airport delivery.",
    url: "https://wheelonhour.com/car-hire-ahmedabad-airport",
    type: "website",
    locale: "en_IN",
  },
};

export default function CarHireAirport() {
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
          <h1>Car Hire at Ahmedabad Airport</h1>
          <p>
            Arriving at Sardar Vallabhbhai Patel International Airport? Get a self-drive car delivered to
            the airport. Baleno &amp; Altroz from ₹1,800/day — no cab hassle, drive at your pace.
          </p>
          <a
            href="https://wa.me/918849849888?text=Hi!%20I%20need%20a%20car%20at%20Ahmedabad%20airport."
            target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
          >
            Book Airport Car on WhatsApp
          </a>
        </div>

        <div className="seo-page-content">
          <h2>Airport Car Rental in Ahmedabad</h2>
          <p>
            Skip the expensive airport taxis and surge-priced Ola/Uber rides. With WheelOnHour, rent a
            self-drive car at <strong>Ahmedabad airport</strong> at a flat daily rate — drive anywhere in Gujarat
            without per-km charges.
          </p>

          <h2>How Airport Car Hire Works</h2>
          <ul>
            <li><strong>Step 1:</strong> WhatsApp us your flight details and arrival time</li>
            <li><strong>Step 2:</strong> We deliver the car to the airport parking area</li>
            <li><strong>Step 3:</strong> Collect the keys, show your documents, and drive away</li>
            <li><strong>Return:</strong> Drop the car at the airport before your departure flight</li>
          </ul>

          <h2>Cars Available at Ahmedabad Airport</h2>
          <ul>
            <li><strong>Tata Altroz:</strong> ₹1,800/day — Budget-friendly, fuel-efficient</li>
            <li><strong>Maruti Baleno:</strong> ₹2,400/day — Premium comfort, automatic available</li>
          </ul>

          <h2>Airport Car Rental vs Taxi — Why Self-Drive Wins</h2>
          <ul>
            <li>Flat daily rate vs per-km taxi charges</li>
            <li>Freedom to explore Gujarat on your own schedule</li>
            <li>No driver tips or waiting charges</li>
            <li>Keep the car for your entire trip</li>
            <li>Privacy and comfort of your own vehicle</li>
          </ul>

          <div className="seo-page-cta">
            <h2>Book Airport Car Hire — ₹1,800/day</h2>
            <p>Share your flight details on WhatsApp. We&apos;ll have the car ready!</p>
            <a
              href="https://wa.me/918849849888?text=Hi!%20I%20need%20a%20car%20at%20Ahmedabad%20airport."
              target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
            >
              WhatsApp — +91 884 984 9888
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
