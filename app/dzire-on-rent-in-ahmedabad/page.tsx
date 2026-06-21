import type { Metadata } from "next";
import Link from "next/link";
import { SeoNav, SeoFooter } from "../components/SeoPageLayout";

const BASE_URL = "https://wheelonhour.vercel.app";

export const metadata: Metadata = {
  title: "Maruti Suzuki Dzire on Rent in Ahmedabad | ₹2,600/Day — WheelOnHour",
  description:
    "Rent Maruti Suzuki Dzire in Ahmedabad at ₹2,600/day. Compact sedan, self-drive, fully insured, easy pickup from Devnagar Gam Road. Book on WhatsApp — WheelOnHour.",
  keywords: [
    "dzire on rent in ahmedabad",
    "swift dzire rental ahmedabad",
    "dzire self drive ahmedabad",
    "sedan on rent ahmedabad",
    "car on rent ahmedabad",
  ],
  alternates: { canonical: "/dzire-on-rent-in-ahmedabad" },
  openGraph: {
    title: "Maruti Suzuki Dzire on Rent in Ahmedabad | ₹2,600/Day — WheelOnHour",
    description:
      "Rent Maruti Suzuki Dzire in Ahmedabad. Compact sedan at ₹2,600/day with easy pickup.",
    url: `${BASE_URL}/dzire-on-rent-in-ahmedabad`,
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Maruti Suzuki Dzire on Rent in Ahmedabad",
  description:
    "Rent Maruti Suzuki Dzire in Ahmedabad at ₹2,600/day. Compact sedan, self-drive, fully insured.",
  brand: { "@type": "Brand", name: "Maruti Suzuki" },
  offers: {
    "@type": "Offer",
    price: "2600",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "WheelOnHour" },
  },
};

export default function DzireOnRent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoNav />
      <div className="seo-page">
        <div className="bg-grid" />
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="container">
          <Link href="/" className="seo-back-link">
            ← Back to WheelOnHour
          </Link>

          <div className="seo-page-hero">
            <h1>Maruti Suzuki Dzire on Rent in Ahmedabad</h1>
            <p>
              Rent the popular Maruti Suzuki Dzire in Ahmedabad at just ₹2,600
              per day. This compact sedan offers excellent fuel efficiency at 23
              km/l, Manual transmission, and seats 5 comfortably. Self-drive,
              fully insured, easy pickup from our Ahmedabad location.
            </p>
            <a
              href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20the%20Dzire%20in%20Ahmedabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Book Dzire on WhatsApp
            </a>
          </div>

          <div className="seo-page-content">
            <h2>Maruti Suzuki Dzire Rental Details</h2>
            <ul>
              <li>
                <strong>Car:</strong> Maruti Suzuki Dzire (Latest Model)
              </li>
              <li>
                <strong>Type:</strong> Compact Sedan
              </li>
              <li>
                <strong>Fuel:</strong> Petrol
              </li>
              <li>
                <strong>Transmission:</strong> Manual
              </li>
              <li>
                <strong>Seats:</strong> 5
              </li>
              <li>
                <strong>Mileage:</strong> 23 km/l
              </li>
              <li>
                <strong>Rental Price:</strong> ₹2,600 per 24 hours
              </li>
              <li>
                <strong>Insurance:</strong> Fully insured (comprehensive
                coverage)
              </li>
              <li>
                <strong>Pickup:</strong> Stavan Ample, Devnagar Gam Road,
                Ahmedabad-382481
              </li>
            </ul>

            <h2>Why Rent a Dzire in Ahmedabad?</h2>
            <p>
              The Maruti Suzuki Dzire is India&apos;s best-selling compact sedan,
              loved for its spacious cabin, impressive boot space, and
              outstanding fuel economy of 23 km/l. It&apos;s the ideal choice for
              outstation trips, airport transfers, wedding events, and
              comfortable daily drives in Ahmedabad. The sedan form factor gives
              you extra boot space and a more refined ride compared to
              hatchbacks.
            </p>

            <h2>Dzire Rental Price Comparison in Ahmedabad</h2>
            <p>
              WheelOnHour offers the{" "}
              <strong>Dzire on rent in Ahmedabad at ₹2,600/day</strong> —
              significantly cheaper than Zoomcar (₹3,200+), Revv (₹3,800+), and
              local car rental agencies (₹3,000+). No surge pricing, no hidden
              charges, no app fees.
            </p>

            <h2>WheelOnHour&apos;s Complete Fleet in Ahmedabad</h2>
            <p>
              Choose from our full range of self-drive cars in Ahmedabad:
            </p>
            <ul>
              <li>Tata Altroz — ₹1,800/day</li>
              <li>Maruti Suzuki Baleno — ₹2,400/day</li>
              <li>
                <strong>Maruti Suzuki Dzire — ₹2,600/day</strong>
              </li>
              <li>Hyundai i20 — ₹2,800/day</li>
              <li>Tata Nexon — ₹3,000/day</li>
              <li>Maruti Suzuki Brezza — ₹3,000/day</li>
            </ul>

            <h2>Best Uses for Renting a Dzire in Ahmedabad</h2>
            <ul>
              <li>Outstation trips to Udaipur, Mount Abu, Goa, Kutch</li>
              <li>Airport pickup/drop — Ahmedabad SVP International</li>
              <li>Wedding and family functions</li>
              <li>Weekend getaways around Gujarat</li>
              <li>Business meetings and corporate travel</li>
            </ul>

            <div className="seo-page-cta">
              <h2>Rent Dzire in Ahmedabad — ₹2,600/day</h2>
              <p>
                Book via WhatsApp. Pickup from Stavan Ample, Devnagar Gam Road,
                Ahmedabad-382481. Fully insured.
              </p>
              <a
                href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20the%20Dzire%20in%20Ahmedabad."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp — +91 884 984 9888
              </a>
            </div>
          </div>
        </div>
      </div>
      <SeoFooter currentPath="/dzire-on-rent-in-ahmedabad" />
    </>
  );
}
