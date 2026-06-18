import type { Metadata } from "next";
import Link from "next/link";
import { SeoNav, SeoFooter } from "../components/SeoPageLayout";

export const metadata: Metadata = {
  title: "Car Rental Ahmedabad Price List 2025 — ₹1800/day | WheelOnHour",
  description:
    "Car rental prices in Ahmedabad 2025. Tata Altroz ₹1800/day, Maruti Baleno ₹2400/day. Compare WheelOnHour prices vs Zoomcar, Revv. Cheapest rates guaranteed. Book on WhatsApp.",
  alternates: { canonical: "/car-rental-ahmedabad-price" },
  openGraph: {
    title: "Car Rental Ahmedabad Price List 2025 | WheelOnHour",
    description: "Compare car rental prices in Ahmedabad. Cheapest rates from ₹1800/day.",
    url: "https://wheelonhour.com/car-rental-ahmedabad-price",
    type: "website",
    locale: "en_IN",
  },
};

export default function CarRentalPrice() {
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
            <h1>Car Rental Ahmedabad — Price List 2025</h1>
            <p>
              Transparent pricing with no hidden charges. Compare WheelOnHour&apos;s car rental rates
              with Zoomcar, Revv, and local dealers in Ahmedabad.
            </p>
          </div>

          <div className="seo-page-content">
            <h2>WheelOnHour Car Rental Price List</h2>
            <div className="price-table-wrap">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Car</th>
                    <th>Type</th>
                    <th>Transmission</th>
                    <th>Daily Rate</th>
                    <th>Weekly Rate*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Tata Altroz</strong></td>
                    <td>Premium Hatchback</td>
                    <td>Manual</td>
                    <td><strong>₹1,800</strong></td>
                    <td>Contact for deal</td>
                  </tr>
                  <tr>
                    <td><strong>Maruti Suzuki Baleno</strong></td>
                    <td>Premium Hatchback</td>
                    <td>Auto / Manual</td>
                    <td><strong>₹2,400</strong></td>
                    <td>Contact for deal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#556677" }}>
              *Weekly and monthly rates available on request. WhatsApp +91 884 984 9888 for custom quotes.
            </p>

            <h2>What&apos;s Included in the Price?</h2>
            <ul>
              <li><strong>Comprehensive insurance</strong> — Full coverage, drive worry-free</li>
              <li><strong>Free doorstep delivery</strong> — Anywhere in Ahmedabad city</li>
              <li><strong>24/7 roadside support</strong> — We&apos;re always just a call away</li>
              <li><strong>Well-maintained car</strong> — Serviced regularly, showroom condition</li>
              <li><strong>No platform fees</strong> — Unlike Zoomcar/Revv, no app charges</li>
            </ul>

            <h2>WheelOnHour vs Other Car Rental Prices in Ahmedabad</h2>
            <div className="price-table-wrap">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Provider</th>
                    <th>Hatchback (Daily)</th>
                    <th>Hidden Fees?</th>
                    <th>Doorstep Delivery?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="highlight-row">
                    <td><strong>WheelOnHour</strong></td>
                    <td><strong>₹1,800 - ₹2,400</strong></td>
                    <td>None</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>Zoomcar</td>
                    <td>₹2,800 - ₹4,500</td>
                    <td>Platform fee, GST extra</td>
                    <td>Extra charge</td>
                  </tr>
                  <tr>
                    <td>Revv</td>
                    <td>₹3,000 - ₹5,000</td>
                    <td>Convenience fee</td>
                    <td>Extra charge</td>
                  </tr>
                  <tr>
                    <td>Local Dealers</td>
                    <td>₹2,500 - ₹3,500</td>
                    <td>Varies</td>
                    <td>Usually not</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Additional Charges (Transparency)</h2>
            <ul>
              <li><strong>Fuel:</strong> Not included — you fill fuel as needed and return at same level</li>
              <li><strong>Excess km charges:</strong> Contact us for outstation rates</li>
              <li><strong>Late return:</strong> Nominal charges apply — communicated upfront</li>
              <li><strong>Security deposit:</strong> Refundable deposit required at pickup</li>
              <li><strong>Toll/Parking:</strong> Borne by renter during the trip</li>
            </ul>

            <h2>How to Get the Best Car Rental Deal in Ahmedabad</h2>
            <ul>
              <li>Book directly via WhatsApp — skip platform fees</li>
              <li>Choose Tata Altroz for the lowest price at ₹1,800/day</li>
              <li>Ask about weekly and monthly discount packages</li>
              <li>Book 2-3 days in advance for guaranteed availability</li>
            </ul>

            <div className="seo-page-cta">
              <h2>Get the Best Price — Book Now</h2>
              <p>WhatsApp us for instant quotes and special packages!</p>
              <a
                href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20know%20car%20rental%20prices%20in%20Ahmedabad."
                target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
              >
                WhatsApp — +91 884 984 9888
              </a>
            </div>
          </div>
        </div>
      </div>
      <SeoFooter currentPath="/car-rental-ahmedabad-price" />
    </>
  );
}
