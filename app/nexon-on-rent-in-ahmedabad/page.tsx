import type { Metadata } from "next";
import Link from "next/link";
import { SeoNav, SeoFooter } from "../components/SeoPageLayout";

const BASE_URL = "https://wheelsonhours.vercel.app";

export const metadata: Metadata = {
  title: "Tata Nexon on Rent in Ahmedabad | ₹3,000/Day — wheelsonhours",
  description:
    "Rent Tata Nexon in Ahmedabad at ₹3,000/day. Compact SUV, self-drive, fully insured, easy pickup from Devnagar Gam Road. Book on WhatsApp — wheelsonhours.",
  keywords: [
    "nexon on rent in ahmedabad",
    "tata nexon rental ahmedabad",
    "suv on rent ahmedabad",
    "nexon self drive ahmedabad",
    "car on rent ahmedabad",
  ],
  alternates: { canonical: "/nexon-on-rent-in-ahmedabad" },
  openGraph: {
    title: "Tata Nexon on Rent in Ahmedabad | ₹3,000/Day — wheelsonhours",
    description:
      "Rent Tata Nexon in Ahmedabad. Compact SUV at ₹3,000/day with easy pickup.",
    url: `${BASE_URL}/nexon-on-rent-in-ahmedabad`,
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Tata Nexon on Rent in Ahmedabad",
  description:
    "Rent Tata Nexon in Ahmedabad at ₹3,000/day. Compact SUV, self-drive, fully insured.",
  brand: { "@type": "Brand", name: "Tata" },
  offers: {
    "@type": "Offer",
    price: "3000",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "wheelsonhours" },
  },
};

export default function NexonOnRent() {
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
            <h1>Tata Nexon on Rent in Ahmedabad</h1>
            <p>
              Rent the rugged Tata Nexon in Ahmedabad at just ₹3,000 per day.
              This compact SUV comes with Manual transmission, petrol/CNG
              engine, 5
              seats, and a high ground clearance perfect for all road conditions.
              Self-drive, fully insured, easy pickup from our Ahmedabad
              location.
            </p>
            <a
              href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20the%20Tata%20Nexon%20in%20Ahmedabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Book Nexon on WhatsApp
            </a>
          </div>

          <div className="seo-page-content">
            <h2>Tata Nexon Rental Details</h2>
            <ul>
              <li>
                <strong>Car:</strong> Tata Nexon (Latest Model)
              </li>
              <li>
                <strong>Type:</strong> Compact SUV
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
                <strong>Mileage:</strong> 17 km/l
              </li>
              <li>
                <strong>Rental Price:</strong> ₹3,000 per 24 hours
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

            <h2>Why Rent a Tata Nexon in Ahmedabad?</h2>
            <p>
              The Tata Nexon is India&apos;s safest compact SUV with a 5-star
              Global NCAP safety rating. Its bold SUV design, high ground
              clearance, and powerful engine make it perfect for both city
              driving and outstation trips across Gujarat. Whether you&apos;re
              heading to the Rann of Kutch, Saputara hills, or just need a
              commanding road presence in Ahmedabad, the Nexon is your ideal
              companion.
            </p>

            <h2>Nexon Rental Price Comparison in Ahmedabad</h2>
            <p>
              wheelsonhours offers the{" "}
              <strong>Tata Nexon on rent in Ahmedabad at ₹3,000/day</strong> —
              significantly cheaper than Zoomcar (₹4,000+), Revv (₹4,500+), and
              local car rental agencies (₹3,500+). No surge pricing, no hidden
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
              <li>Hyundai i20 — ₹2,800/day</li>
              <li>
                <strong>Tata Nexon — ₹3,000/day</strong>
              </li>
              <li>Maruti Suzuki Brezza — ₹3,000/day</li>
            </ul>

            <h2>Best Uses for Renting a Nexon in Ahmedabad</h2>
            <ul>
              <li>Outstation trips to Udaipur, Mount Abu, Goa, Kutch</li>
              <li>Airport pickup/drop — Ahmedabad SVP International</li>
              <li>Off-road and hill station adventures</li>
              <li>Wedding and family functions</li>
              <li>Weekend getaways around Gujarat</li>
              <li>Business meetings and corporate travel</li>
            </ul>

            <div className="seo-page-cta">
              <h2>Rent Tata Nexon in Ahmedabad — ₹3,000/day</h2>
              <p>
                Book via WhatsApp. Pickup from Stavan Ample, Devnagar Gam Road,
                Ahmedabad-382481. Fully insured.
              </p>
              <a
                href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20the%20Tata%20Nexon%20in%20Ahmedabad."
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
      <SeoFooter currentPath="/nexon-on-rent-in-ahmedabad" />
    </>
  );
}
