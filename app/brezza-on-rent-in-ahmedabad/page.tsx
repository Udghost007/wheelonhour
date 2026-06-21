import type { Metadata } from "next";
import Link from "next/link";
import { SeoNav, SeoFooter } from "../components/SeoPageLayout";

const BASE_URL = "https://wheelonhour.vercel.app";

export const metadata: Metadata = {
  title:
    "Maruti Suzuki Brezza on Rent in Ahmedabad | ₹3,000/Day — WheelOnHour",
  description:
    "Rent Maruti Suzuki Brezza in Ahmedabad at ₹3,000/day. Compact SUV, self-drive, fully insured, easy pickup from Devnagar Gam Road. Book on WhatsApp — WheelOnHour.",
  keywords: [
    "brezza on rent in ahmedabad",
    "maruti brezza rental ahmedabad",
    "suv on rent ahmedabad",
    "brezza self drive ahmedabad",
    "car on rent ahmedabad",
  ],
  alternates: { canonical: "/brezza-on-rent-in-ahmedabad" },
  openGraph: {
    title:
      "Maruti Suzuki Brezza on Rent in Ahmedabad | ₹3,000/Day — WheelOnHour",
    description:
      "Rent Maruti Suzuki Brezza in Ahmedabad. Compact SUV at ₹3,000/day with easy pickup.",
    url: `${BASE_URL}/brezza-on-rent-in-ahmedabad`,
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Maruti Suzuki Brezza on Rent in Ahmedabad",
  description:
    "Rent Maruti Suzuki Brezza in Ahmedabad at ₹3,000/day. Compact SUV, self-drive, fully insured.",
  brand: { "@type": "Brand", name: "Maruti Suzuki" },
  offers: {
    "@type": "Offer",
    price: "3000",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "WheelOnHour" },
  },
};

export default function BrezzaOnRent() {
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
            <h1>Maruti Suzuki Brezza on Rent in Ahmedabad</h1>
            <p>
              Rent the versatile Maruti Suzuki Brezza in Ahmedabad at just
              ₹3,000 per day. This compact SUV delivers 20 km/l mileage, Manual
              transmission, and seats 5 comfortably. Self-drive, fully insured,
              easy pickup from our Ahmedabad location.
            </p>
            <a
              href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20the%20Brezza%20in%20Ahmedabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Book Brezza on WhatsApp
            </a>
          </div>

          <div className="seo-page-content">
            <h2>Maruti Suzuki Brezza Rental Details</h2>
            <ul>
              <li>
                <strong>Car:</strong> Maruti Suzuki Brezza (Latest Model)
              </li>
              <li>
                <strong>Type:</strong> Compact SUV
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
                <strong>Mileage:</strong> 20 km/l
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

            <h2>Why Rent a Brezza in Ahmedabad?</h2>
            <p>
              The Maruti Suzuki Brezza is India&apos;s best-selling compact SUV,
              combining Maruti&apos;s legendary reliability with SUV practicality.
              With excellent ground clearance, a spacious cabin, and impressive
              20 km/l fuel efficiency, the Brezza is perfect for outstation
              drives, family trips, and navigating Ahmedabad&apos;s roads with
              confidence. It offers the best balance of SUV capability and fuel
              economy in its segment.
            </p>

            <h2>Brezza Rental Price Comparison in Ahmedabad</h2>
            <p>
              WheelOnHour offers the{" "}
              <strong>
                Maruti Suzuki Brezza on rent in Ahmedabad at ₹3,000/day
              </strong>{" "}
              — significantly cheaper than Zoomcar (₹4,000+), Revv (₹4,500+),
              and local car rental agencies (₹3,500+). No surge pricing, no
              hidden charges, no app fees.
            </p>

            <h2>WheelOnHour&apos;s Complete Fleet in Ahmedabad</h2>
            <p>
              Choose from our full range of self-drive cars in Ahmedabad:
            </p>
            <ul>
              <li>Tata Altroz — ₹1,800/day</li>
              <li>Maruti Suzuki Baleno — ₹2,400/day</li>
              <li>Maruti Suzuki Dzire — ₹2,600/day</li>
              <li>Hyundai i20 — ₹2,800/day</li>
              <li>Tata Nexon — ₹3,000/day</li>
              <li>
                <strong>Maruti Suzuki Brezza — ₹3,000/day</strong>
              </li>
            </ul>

            <h2>Best Uses for Renting a Brezza in Ahmedabad</h2>
            <ul>
              <li>Outstation trips to Udaipur, Mount Abu, Goa, Kutch</li>
              <li>Airport pickup/drop — Ahmedabad SVP International</li>
              <li>Family road trips and weekend getaways</li>
              <li>Wedding and family functions</li>
              <li>Hill station drives and highway cruising</li>
              <li>Business meetings and corporate travel</li>
            </ul>

            <div className="seo-page-cta">
              <h2>Rent Brezza in Ahmedabad — ₹3,000/day</h2>
              <p>
                Book via WhatsApp. Pickup from Stavan Ample, Devnagar Gam Road,
                Ahmedabad-382481. Fully insured.
              </p>
              <a
                href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20the%20Brezza%20in%20Ahmedabad."
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
      <SeoFooter currentPath="/brezza-on-rent-in-ahmedabad" />
    </>
  );
}
