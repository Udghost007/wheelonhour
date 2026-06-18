import type { Metadata } from "next";
import Link from "next/link";
import { SeoNav, SeoFooter } from "../components/SeoPageLayout";

export const metadata: Metadata = {
  title: "Tata Altroz on Rent in Ahmedabad — ₹1800/day | Self Drive | WheelOnHour",
  description:
    "Rent Tata Altroz in Ahmedabad at just ₹1800/day — cheapest car rental in Ahmedabad. Self-drive, fully insured, easy pickup. Book on WhatsApp — WheelOnHour.",
  alternates: { canonical: "/altroz-on-rent-in-ahmedabad" },
  openGraph: {
    title: "Tata Altroz on Rent in Ahmedabad — ₹1800/day",
    description: "Cheapest car rental in Ahmedabad. Tata Altroz at ₹1800/day with easy pickup.",
    url: "https://wheelonhour.vercel.app/altroz-on-rent-in-ahmedabad",
    type: "website",
    locale: "en_IN",
  },
};

export default function AltrozOnRent() {
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
          <h1>Tata Altroz on Rent in Ahmedabad</h1>
          <p>
            Rent the Tata Altroz in Ahmedabad at just ₹1,800 per day — the cheapest premium car rental in
            the city. 5-star safety rated, fuel-efficient, and fully insured.
          </p>
          <a
            href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20the%20Altroz%20in%20Ahmedabad."
            target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
          >
            Book Altroz on WhatsApp
          </a>
        </div>

        <div className="seo-page-content">
          <h2>Tata Altroz Rental Details</h2>
          <ul>
            <li><strong>Car:</strong> Tata Altroz (Latest Model)</li>
            <li><strong>Type:</strong> Premium Hatchback</li>
            <li><strong>Fuel:</strong> Petrol</li>
            <li><strong>Transmission:</strong> Manual</li>
            <li><strong>Seats:</strong> 5</li>
            <li><strong>Mileage:</strong> 23 km/l</li>
            <li><strong>Safety:</strong> 5-Star Global NCAP Rating</li>
            <li><strong>Rental Price:</strong> ₹1,800 per 24 hours</li>
            <li><strong>Insurance:</strong> Fully insured</li>
            <li><strong>Pickup:</strong> Easy pickup from our Ahmedabad location</li>
          </ul>

          <h2>Why Rent a Tata Altroz in Ahmedabad?</h2>
          <p>
            The Tata Altroz is India&apos;s only 5-star safety rated hatchback. At just ₹1,800/day, it&apos;s the
            <strong> cheapest car rental option in Ahmedabad</strong>. With 23 km/l mileage, you save on fuel costs
            too. It&apos;s the owner&apos;s pick at WheelOnHour — the most popular rental car in our fleet.
          </p>

          <h2>Altroz vs Other Rentals — Price Comparison</h2>
          <p>
            At ₹1,800/day, the Tata Altroz from WheelOnHour is up to 40% cheaper than similar cars on Zoomcar,
            Revv, or MyChoize. We offer the <strong>lowest car rental price in Ahmedabad</strong> without compromising
            on quality, insurance, or maintenance.
          </p>

          <h2>Perfect For</h2>
          <ul>
            <li>Budget-friendly city drives in Ahmedabad</li>
            <li>First-time self-drive renters</li>
            <li>College students and young professionals</li>
            <li>Short outstation trips within Gujarat</li>
            <li>Daily commuting when your car is in service</li>
          </ul>

          <div className="seo-page-cta">
            <h2>Rent Altroz — Just ₹1,800/day</h2>
            <p>Ahmedabad&apos;s cheapest premium car rental. Book now!</p>
            <a
              href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20the%20Altroz%20in%20Ahmedabad."
              target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
            >
              WhatsApp — +91 884 984 9888
            </a>
          </div>
        </div>
      </div>
    </div>
      <SeoFooter currentPath="/altroz-on-rent-in-ahmedabad" />
    </>
  );
}
