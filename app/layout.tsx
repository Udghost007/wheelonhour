import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const BASE_URL = "https://wheelonhour.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "WheelOnHour — #1 Car Rental in Ahmedabad | Self Drive Cars from ₹1,800/day",
    template: "%s | WheelOnHour — Car Rental Ahmedabad",
  },
  description:
    "Rent a car in Ahmedabad starting ₹1,800/day. Self-drive Baleno, Altroz, i20, Dzire, Nexon & Brezza on rent. 8+ cars available, fully insured, no hidden charges. Book on WhatsApp — 24/7 support. WheelOnHour is Ahmedabad's most trusted car rental service.",
  keywords: [
    "rent a car in ahmedabad",
    "car rental ahmedabad",
    "self drive car rental ahmedabad",
    "car on rent in ahmedabad",
    "ahmedabad car rental",
    "cheap car rental ahmedabad",
    "car hire ahmedabad",
    "rent car ahmedabad without driver",
    "self drive cars ahmedabad",
    "baleno on rent in ahmedabad",
    "altroz on rent in ahmedabad",
    "i20 on rent in ahmedabad",
    "dzire on rent in ahmedabad",
    "nexon on rent in ahmedabad",
    "brezza on rent in ahmedabad",
    "suv on rent in ahmedabad",
    "car rental near me ahmedabad",
    "affordable car rental ahmedabad",
    "best car rental ahmedabad",
    "hourly car rental ahmedabad",
    "daily car rental ahmedabad",
    "car rental ahmedabad airport",
    "car rental gujarat",
    "rent a car gujarat",
    "wheelonhour",
    "wheel on hour",
    "car rental ahmedabad price",
    "wedding car rental ahmedabad",
    "outstation car rental ahmedabad",
    "car rental ahmedabad with driver",
    "car rental ahmedabad for trip",
  ],
  authors: [{ name: "WheelOnHour", url: BASE_URL }],
  creator: "WheelOnHour",
  publisher: "WheelOnHour",
  formatDetection: { telephone: true, email: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WheelOnHour — #1 Car Rental in Ahmedabad | From ₹1,800/day",
    description:
      "Rent self-drive cars in Ahmedabad — Baleno, Altroz, i20, Dzire, Nexon & Brezza. 8+ cars, easy pickup, fully insured, no hidden charges. Book now on WhatsApp!",
    url: BASE_URL,
    siteName: "WheelOnHour",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WheelOnHour — Premium Car Rental in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WheelOnHour — #1 Car Rental in Ahmedabad",
    description:
      "Self-drive cars on rent from ₹1,800/day. Baleno, Altroz, i20, Dzire, Nexon & Brezza — 8+ cars with easy pickup in Ahmedabad.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_CODE", // TODO: Add after Google Search Console setup
  },
  category: "Car Rental",
};

/* ===== JSON-LD STRUCTURED DATA ===== */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "WheelOnHour",
  image: `${BASE_URL}/logo.png`,
  logo: `${BASE_URL}/logo.png`,
  url: BASE_URL,
  telephone: "+918849849888",
  description:
    "WheelOnHour is Ahmedabad's most trusted self-drive car rental service. Rent Baleno, Altroz, i20, Dzire, Nexon & Brezza starting at just ₹1,800 per day with easy pickup, full insurance, and 24/7 support. 8+ cars available.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stavan Ample, Devnagar Gam Road",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382481",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.1033265,
    longitude: 72.5416057,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "₹1,800 - ₹3,000 per day",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  areaServed: {
    "@type": "City",
    name: "Ahmedabad",
    containedInPlace: {
      "@type": "State",
      name: "Gujarat",
    },
  },
  founder: {
    "@type": "Person",
    name: "Nilesh Kidiya",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "500",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Self-Drive Car Rentals in Ahmedabad",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          name: "Tata Altroz",
          brand: { "@type": "Brand", name: "Tata" },
          model: "Altroz",
          vehicleConfiguration: "Premium Hatchback",
          fuelType: "Petrol",
          vehicleTransmission: "Manual",
          seatingCapacity: 5,
          image: `${BASE_URL}/cars/altroz/1.jpg`,
        },
        price: "1800",
        priceCurrency: "INR",
        unitCode: "DAY",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "WheelOnHour" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          name: "Maruti Suzuki Baleno",
          brand: { "@type": "Brand", name: "Maruti Suzuki" },
          model: "Baleno",
          vehicleConfiguration: "Premium Hatchback",
          fuelType: "Petrol",
          vehicleTransmission: "Manual",
          seatingCapacity: 5,
          image: `${BASE_URL}/cars/baleno/1.jpg`,
        },
        price: "2400",
        priceCurrency: "INR",
        unitCode: "DAY",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "WheelOnHour" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          name: "Hyundai i20",
          brand: { "@type": "Brand", name: "Hyundai" },
          model: "i20",
          vehicleConfiguration: "Premium Hatchback",
          fuelType: "Petrol",
          vehicleTransmission: "Manual",
          seatingCapacity: 5,
          image: `${BASE_URL}/cars/i20/1.webp`,
        },
        price: "2800",
        priceCurrency: "INR",
        unitCode: "DAY",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "WheelOnHour" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          name: "Maruti Suzuki Dzire",
          brand: { "@type": "Brand", name: "Maruti Suzuki" },
          model: "Dzire",
          vehicleConfiguration: "Compact Sedan",
          fuelType: "Petrol",
          vehicleTransmission: "Manual",
          seatingCapacity: 5,
          image: `${BASE_URL}/cars/dezire/1.webp`,
        },
        price: "2600",
        priceCurrency: "INR",
        unitCode: "DAY",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "WheelOnHour" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          name: "Tata Nexon",
          brand: { "@type": "Brand", name: "Tata" },
          model: "Nexon",
          vehicleConfiguration: "Compact SUV",
          fuelType: "Petrol",
          vehicleTransmission: "Manual",
          seatingCapacity: 5,
          image: `${BASE_URL}/cars/nexon/1.webp`,
        },
        price: "3000",
        priceCurrency: "INR",
        unitCode: "DAY",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "WheelOnHour" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          name: "Maruti Suzuki Brezza",
          brand: { "@type": "Brand", name: "Maruti Suzuki" },
          model: "Brezza",
          vehicleConfiguration: "Compact SUV",
          fuelType: "Petrol",
          vehicleTransmission: "Manual",
          seatingCapacity: 5,
          image: `${BASE_URL}/cars/breeza/1.webp`,
        },
        price: "3000",
        priceCurrency: "INR",
        unitCode: "DAY",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "WheelOnHour" },
      },
    ],
  },
  sameAs: [
    "https://wa.me/918849849888",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the cheapest car on rent in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WheelOnHour offers the Tata Altroz on rent in Ahmedabad starting at just ₹1,800 per 24 hours — one of the most affordable self-drive car rental options in the city. No hidden charges, fully insured.",
      },
    },
    {
      "@type": "Question",
      name: "How do I rent a car in Ahmedabad from WheelOnHour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Booking a car with WheelOnHour is simple: 1) Choose your car from our fleet of 8+ cars (Baleno, Altroz, i20, Dzire, Nexon, Brezza), 2) Send a WhatsApp message to +91 884 984 9888 with your dates, 3) Pick up the car from our location at Stavan Ample, Devnagar Gam Road, Ahmedabad. No app download needed!",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer self-drive car rental in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! WheelOnHour specializes in self-drive car rentals in Ahmedabad. You get the car keys and drive wherever you want — no driver required. We offer 8+ cars including Baleno, Altroz, i20, Dzire, Nexon, and Brezza for self-drive rentals.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I pick up the rental car in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pick up your rental car from our location at Stavan Ample, Devnagar Gam Road, Ahmedabad-382481 (Landmark: ICB FLORA, SILVER HARMONY-2). Just show your documents, get the keys, and you're ready to drive!",
      },
    },
    {
      "@type": "Question",
      name: "What documents are needed to rent a car in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To rent a car from WheelOnHour, you need a valid Indian driving license, an Aadhaar card (or any government ID), and a refundable security deposit. The process is quick and hassle-free.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rent a Baleno in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! WheelOnHour offers the Maruti Suzuki Baleno on rent in Ahmedabad at ₹2,400 per 24 hours in manual transmission. We also have i20 (₹2,800), Dzire (₹2,600), Nexon (₹3,000), and Brezza (₹3,000). Book via WhatsApp at +91 884 984 9888.",
      },
    },
    {
      "@type": "Question",
      name: "Are the rental cars insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all cars at WheelOnHour are comprehensively insured. You can drive with complete peace of mind knowing you're fully covered during your rental period.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of car rental in Ahmedabad per day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WheelOnHour offers car rental in Ahmedabad starting at ₹1,800/day (Altroz), ₹2,400/day (Baleno), ₹2,600/day (Dzire), ₹2,800/day (i20), and ₹3,000/day (Nexon & Brezza). All-inclusive prices with no hidden charges.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide car rental for outstation trips from Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, WheelOnHour provides car rental for outstation trips from Ahmedabad. Whether you're heading to Udaipur, Mount Abu, Goa, Kutch, or anywhere else — you can rent our cars for long-distance travel. Contact us on WhatsApp for outstation rates.",
      },
    },
    {
      "@type": "Question",
      name: "Is WheelOnHour available 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! WheelOnHour operates 24/7 in Ahmedabad. You can book a car, pick it up, or return it at any time of day or night. Reach us anytime on WhatsApp at +91 884 984 9888.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WheelOnHour",
  url: BASE_URL,
  description:
    "Ahmedabad's most trusted self-drive car rental service. 8+ cars — Baleno, Altroz, i20, Dzire, Nexon & Brezza from ₹1,800/day.",
  publisher: {
    "@type": "Organization",
    name: "WheelOnHour",
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Car Rental in Ahmedabad",
      item: `${BASE_URL}/rent-a-car-in-ahmedabad`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#0a0e27" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.1033265;72.5416057" />
        <meta name="ICBM" content="23.1033265, 72.5416057" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
