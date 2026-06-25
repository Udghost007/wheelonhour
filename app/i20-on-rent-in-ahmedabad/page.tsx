import type { Metadata } from "next";
import Link from "next/link";
import { SeoNav, SeoFooter } from "../components/SeoPageLayout";

const BASE_URL = "https://wheelsonhours.vercel.app";

export const metadata: Metadata = {
  title: "Hyundai i20 on Rent in Ahmedabad | ₹2,800/Day — wheelsonhours",
  description:
    "Rent Hyundai i20 in Ahmedabad at ₹2,800/day. Premium hatchback, self-drive, fully insured, easy pickup from Devnagar Gam Road. Book on WhatsApp — wheelsonhours.",
  keywords: [
    "i20 on rent in ahmedabad",
    "hyundai i20 rental ahmedabad",
    "i20 self drive ahmedabad",
    "premium hatchback rent ahmedabad",
    "car on rent ahmedabad",
  ],
  alternates: { canonical: "/i20-on-rent-in-ahmedabad" },
  openGraph: {
    title: "Hyundai i20 on Rent in Ahmedabad | ₹2,800/Day — wheelsonhours",
    description:
      "Rent Hyundai i20 in Ahmedabad. Premium hatchback at ₹2,800/day with easy pickup.",
    url: `${BASE_URL}/i20-on-rent-in-ahmedabad`,
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Hyundai i20 on Rent in Ahmedabad",
  description:
    "Rent Hyundai i20 in Ahmedabad at ₹2,800/day. Premium hatchback, self-drive, fully insured.",
  brand: { "@type": "Brand", name: "Hyundai" },
  offers: {
    "@type": "Offer",
    price: "2800",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "wheelsonhours" },
  },
};

export default function I20OnRent() {
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
            ← Back to wheelsonhours
          </Link>

          <div className="seo-page-hero">
            <h1>Hyundai i20 on Rent in Ahmedabad</h1>
            <p>
              Rent the stylish Hyundai i20 in Ahmedabad at just ₹2,800 per day.
              This premium hatchback comes with Manual transmission, petrol/CNG
              engine, and seats 5 comfortably. Self-drive, fully insured, easy
              pickup from our Ahmedabad location.
            </p>
            <a
              href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20the%20Hyundai%20i20%20in%20Ahmedabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Book i20 on WhatsApp
            </a>
          </div>

          <div className="seo-page-content">
            <h2>Hyundai i20 Rental Details</h2>
            <ul>
              <li>
                <strong>Car:</strong> Hyundai i20 (Latest Model)
              </li>
              <li>
                <strong>Type:</strong> Premium Hatchback
              </li>
              <li>
                <strong>Fuel:</strong> Petrol/CNG
              </li>
              <li>
                <strong>Transmission:</strong> Manual
              </li>
              <li>
                <strong>Seats:</strong> 5
              </li>
              <li>
                <strong>Mileage:</strong> 20 km/l
              </li>
              <li>
                <strong>Rental Price:</strong> ₹2,800 per 24 hours
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

            <h2>Why Rent a Hyundai i20 in Ahmedabad?</h2>
            <p>
              The Hyundai i20 is one of India&apos;s most popular premium
              hatchbacks, known for its bold design, feature-rich cabin, and
              refined driving experience. Whether you need a car for weekend
              getaways, outstation trips to Udaipur or Mount Abu, or just
              comfortable city commutes in Ahmedabad, the i20 delivers an
              upscale experience at an affordable rental price.
            </p>

            <h2>i20 Rental Price Comparison in Ahmedabad</h2>
            <p>
              wheelsonhours offers the{" "}
              <strong>Hyundai i20 on rent in Ahmedabad at ₹2,800/day</strong> —
              significantly cheaper than Zoomcar (₹3,500+), Revv (₹4,000+), and
              local car rental agencies (₹3,200+). No surge pricing, no hidden
              charges, no app fees.
            </p>

            <h2>wheelsonhours&apos;s Complete Fleet in Ahmedabad</h2>
            <p>
              Choose from our full range of self-drive cars in Ahmedabad:
            </p>
            <ul>
              <li>Tata Altroz — ₹2,000/day</li>
              <li>Maruti Suzuki Baleno — ₹2,400/day</li>
              <li>Maruti Suzuki Dzire — ₹2,600/day</li>
              <li>
                <strong>Hyundai i20 — ₹2,800/day</strong>
              </li>
              <li>Tata Nexon — ₹3,000/day</li>
              <li>Maruti Suzuki Brezza — ₹3,000/day</li>
            </ul>

            <h2>Best Uses for Renting an i20 in Ahmedabad</h2>
            <ul>
              <li>Outstation trips to Udaipur, Mount Abu, Goa, Kutch</li>
              <li>Airport pickup/drop — Ahmedabad SVP International</li>
              <li>Wedding and family functions</li>
              <li>Weekend getaways around Gujarat</li>
              <li>Business meetings and corporate travel</li>
            </ul>

            <div className="seo-page-cta">
              <h2>Rent Hyundai i20 in Ahmedabad — ₹2,800/day</h2>
              <p>
                Book via WhatsApp. Pickup from Stavan Ample, Devnagar Gam Road,
                Ahmedabad-382481. Fully insured.
              </p>
              <a
                href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20the%20Hyundai%20i20%20in%20Ahmedabad."
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
      <SeoFooter currentPath="/i20-on-rent-in-ahmedabad" />
    </>
  );
}
