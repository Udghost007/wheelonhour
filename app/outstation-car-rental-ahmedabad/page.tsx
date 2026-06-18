import type { Metadata } from "next";
import Link from "next/link";
import { SeoNav, SeoFooter } from "../components/SeoPageLayout";

export const metadata: Metadata = {
  title: "Outstation Car Rental from Ahmedabad — Self Drive to Udaipur, Goa, Kutch | WheelOnHour",
  description:
    "Outstation car rental from Ahmedabad. Self-drive to Udaipur, Mount Abu, Goa, Kutch, Dwarka & more. Baleno & Altroz from ₹1800/day. Book on WhatsApp — WheelOnHour.",
  alternates: { canonical: "/outstation-car-rental-ahmedabad" },
  openGraph: {
    title: "Outstation Car Rental from Ahmedabad | WheelOnHour",
    description: "Self-drive outstation trips from Ahmedabad. Baleno & Altroz from ₹1800/day.",
    url: "https://wheelonhour.com/outstation-car-rental-ahmedabad",
    type: "website",
    locale: "en_IN",
  },
};

export default function OutstationCarRental() {
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
          <h1>Outstation Car Rental from Ahmedabad</h1>
          <p>
            Plan your road trip from Ahmedabad with WheelOnHour. Self-drive Baleno &amp; Altroz for outstation
            trips to Udaipur, Mount Abu, Goa, Kutch, Dwarka, and more — starting at ₹1,800/day.
          </p>
          <a
            href="https://wa.me/918849849888?text=Hi!%20I%20need%20an%20outstation%20car%20rental%20from%20Ahmedabad."
            target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
          >
            Book Outstation Car on WhatsApp
          </a>
        </div>

        <div className="seo-page-content">
          <h2>Popular Outstation Destinations from Ahmedabad</h2>
          <ul>
            <li><strong>Ahmedabad to Udaipur:</strong> ~260 km, 4-5 hours drive</li>
            <li><strong>Ahmedabad to Mount Abu:</strong> ~220 km, 3.5-4 hours drive</li>
            <li><strong>Ahmedabad to Goa:</strong> ~600 km, 9-10 hours drive</li>
            <li><strong>Ahmedabad to Kutch (Bhuj):</strong> ~330 km, 5-6 hours drive</li>
            <li><strong>Ahmedabad to Dwarka:</strong> ~440 km, 7-8 hours drive</li>
            <li><strong>Ahmedabad to Somnath:</strong> ~410 km, 6-7 hours drive</li>
            <li><strong>Ahmedabad to Saputara:</strong> ~400 km, 6-7 hours drive</li>
            <li><strong>Ahmedabad to Statue of Unity:</strong> ~200 km, 3-4 hours drive</li>
            <li><strong>Ahmedabad to Diu:</strong> ~360 km, 6-7 hours drive</li>
          </ul>

          <h2>Why Self-Drive for Outstation Trips?</h2>
          <ul>
            <li><strong>Freedom:</strong> Stop wherever you want — no driver rushing you</li>
            <li><strong>Cost-effective:</strong> Flat daily rate vs per-km taxi charges that add up fast</li>
            <li><strong>Privacy:</strong> Enjoy your road trip without a stranger in the car</li>
            <li><strong>Flexibility:</strong> Change plans mid-trip — extend or shorten as needed</li>
            <li><strong>Fuel-efficient:</strong> Our cars give 22-23 km/l — low fuel costs on long drives</li>
          </ul>

          <h2>Outstation Car Options</h2>
          <ul>
            <li><strong>Tata Altroz (₹1,800/day):</strong> Best for budget trips, 23 km/l mileage</li>
            <li><strong>Maruti Baleno (₹2,400/day):</strong> Best for comfort, automatic available for highway driving</li>
          </ul>

          <h2>Outstation Rental Terms</h2>
          <p>
            Contact us on WhatsApp for outstation-specific rates and terms. We offer special multi-day
            packages for outstation trips. All cars are fully insured and maintained for long-distance travel.
          </p>

          <div className="seo-page-cta">
            <h2>Plan Your Road Trip — From ₹1,800/day</h2>
            <p>Self-drive outstation from Ahmedabad. WhatsApp us with your trip details!</p>
            <a
              href="https://wa.me/918849849888?text=Hi!%20I%20need%20an%20outstation%20car%20rental%20from%20Ahmedabad."
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
