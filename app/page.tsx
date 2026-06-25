"use client";

import { useState, useEffect, useCallback } from "react";

/* ===== SVG ICON COMPONENTS ===== */

function WhatsAppIcon({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ===== CAR DATA ===== */

interface CarData {
  id: string;
  name: string;
  type: string;
  badge: string;
  price: number;
  images: string[];
  specs: { icon: string; value: string; label: string }[];
  featured?: boolean;
}

const carsData: CarData[] = [
  {
    id: "altroz",
    name: "Tata Altroz",
    type: "Premium Hatchback • Petrol • Manual",
    badge: "⭐ Owner's Pick",
    price: 2000,
    images: Array.from({ length: 5 }, (_, i) => `/cars/altroz/${i + 1}.jpg`),
    specs: [
      { icon: "⛽", value: "Petrol", label: "Fuel" },
      { icon: "👤", value: "5", label: "Seats" },
      { icon: "💨", value: "23 km/l", label: "Mileage" },
    ],
    featured: true,
  },
  {
    id: "baleno",
    name: "Maruti Suzuki Baleno",
    type: "Premium Hatchback • Petrol • Manual",
    badge: "Popular",
    price: 2400,
    images: Array.from({ length: 14 }, (_, i) => `/cars/baleno/${i + 1}.jpg`),
    specs: [
      { icon: "⛽", value: "Petrol", label: "Fuel" },
      { icon: "👤", value: "5", label: "Seats" },
      { icon: "💨", value: "30 km/l", label: "Mileage" },
    ],
  },
  {
    id: "i20",
    name: "Hyundai i20",
    type: "Premium Hatchback • Petrol • Manual",
    badge: "Sporty",
    price: 2800,
    images: Array.from({ length: 4 }, (_, i) => `/cars/i20/${i + 1}.webp`),
    specs: [
      { icon: "⛽", value: "Petrol", label: "Fuel" },
      { icon: "👤", value: "5", label: "Seats" },
      { icon: "💨", value: "20 km/l", label: "Mileage" },
    ],
  },
  {
    id: "dezire",
    name: "Maruti Suzuki Dzire",
    type: "Compact Sedan • Petrol • Manual",
    badge: "Sedan",
    price: 2600,
    images: Array.from({ length: 3 }, (_, i) => `/cars/dezire/${i + 1}.webp`),
    specs: [
      { icon: "⛽", value: "Petrol", label: "Fuel" },
      { icon: "👤", value: "5", label: "Seats" },
      { icon: "💨", value: "23 km/l", label: "Mileage" },
    ],
  },
  {
    id: "nexon",
    name: "Tata Nexon",
    type: "Compact SUV • Petrol • Manual",
    badge: "SUV",
    price: 3000,
    images: Array.from({ length: 4 }, (_, i) => `/cars/nexon/${i + 1}.webp`),
    specs: [
      { icon: "⛽", value: "Petrol", label: "Fuel" },
      { icon: "👤", value: "5", label: "Seats" },
      { icon: "💨", value: "17 km/l", label: "Mileage" },
    ],
  },
  {
    id: "breeza",
    name: "Maruti Suzuki Brezza",
    type: "Compact SUV • Petrol • Manual",
    badge: "SUV",
    price: 3000,
    images: Array.from({ length: 4 }, (_, i) => `/cars/breeza/${i + 1}.webp`),
    specs: [
      { icon: "⛽", value: "Petrol", label: "Fuel" },
      { icon: "👤", value: "5", label: "Seats" },
      { icon: "💨", value: "20 km/l", label: "Mileage" },
    ],
  },
  {
    id: "baleno2",
    name: "Maruti Suzuki Baleno",
    type: "Premium Hatchback • Petrol • Manual",
    badge: "Popular",
    price: 2400,
    images: Array.from({ length: 2 }, (_, i) => `/cars/baleno2/${i + 1}.webp`),
    specs: [
      { icon: "⛽", value: "Petrol", label: "Fuel" },
      { icon: "👤", value: "5", label: "Seats" },
      { icon: "💨", value: "22 km/l", label: "Mileage" },
    ],
  },
  {
    id: "baleno3",
    name: "Maruti Suzuki Baleno",
    type: "Premium Hatchback • Petrol • Manual",
    badge: "Popular",
    price: 2400,
    images: Array.from({ length: 4 }, (_, i) => `/cars/baleno3/${i + 1}.webp`),
    specs: [
      { icon: "⛽", value: "Petrol", label: "Fuel" },
      { icon: "👤", value: "5", label: "Seats" },
      { icon: "💨", value: "22 km/l", label: "Mileage" },
    ],
  },
];

/* ===== CAR CARD COMPONENT ===== */

function CarCard({ car }: { car: CarData }) {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = car.images.length;

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextImage, 4000);
    return () => clearInterval(timer);
  }, [nextImage]);

  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in renting the ${car.name} from wheelsonhours. Please share availability and details.`
  );

  return (
    <div className={`car-card animate-on-scroll ${car.featured ? 'car-card--featured' : ''}`} id={`car-${car.id}`}>
      <div className="car-gallery">
        <span className="car-badge">{car.badge}</span>
        <img src={car.images[currentImage]} alt={`${car.name} - Photo ${currentImage + 1}`} />
        <button className="car-gallery-arrow prev" onClick={prevImage} aria-label="Previous image">
          <ChevronLeft />
        </button>
        <button className="car-gallery-arrow next" onClick={nextImage} aria-label="Next image">
          <ChevronRight />
        </button>
        <div className="car-gallery-nav">
          {car.images.slice(0, 8).map((_, idx) => (
            <button
              key={idx}
              className={`car-gallery-dot ${idx === currentImage ? "active" : ""}`}
              onClick={() => setCurrentImage(idx)}
              aria-label={`View photo ${idx + 1}`}
            />
          ))}
          {car.images.length > 8 && (
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", alignSelf: "center" }}>
              +{car.images.length - 8}
            </span>
          )}
        </div>
      </div>

      <div className="car-info">
        <h3 className="car-name">{car.name}</h3>
        <p className="car-type">{car.type}</p>

        <div className="car-specs">
          {car.specs.map((spec, idx) => (
            <div className="car-spec" key={idx}>
              <span className="car-spec-icon">{spec.icon}</span>
              <span className="car-spec-value">{spec.value}</span>
              <span className="car-spec-label">{spec.label}</span>
            </div>
          ))}
        </div>

        <div className="car-footer">
          <div className="car-price">
            <span className="car-price-amount">₹{car.price.toLocaleString("en-IN")}</span>
            <span className="car-price-period">/ 24hrs</span>
          </div>
          <div className="car-actions">
            <a
              href={`https://wa.me/918849849888?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp !px-[10px] md:!px-[20px] py-[10px] md:text-[0.9rem]"
            >
              <WhatsAppIcon size={18} /> Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== PARTNER FORM ===== */

function PartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    carName: "",
    yearOfManufacture: "",
    availability: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", contactNumber: "", carName: "", yearOfManufacture: "", availability: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <form className="partner-form" onSubmit={handleSubmit}>
      <h3 className="partner-form-title">Submit Your Details</h3>

      <div className="form-group">
        <label htmlFor="pf-name">Full Name <span className="form-required">*</span></label>
        <input
          id="pf-name"
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="pf-contact">Contact Number <span className="form-required">*</span></label>
        <input
          id="pf-contact"
          type="tel"
          name="contactNumber"
          placeholder="+91 XXXXX XXXXX"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          pattern="[0-9+\s\-]{10,15}"
          title="Enter a valid phone number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="pf-car">Car Name / Model <span className="form-required">*</span></label>
        <input
          id="pf-car"
          type="text"
          name="carName"
          placeholder="e.g. Maruti Suzuki Baleno"
          value={formData.carName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="pf-year">Year of Manufacture <span className="form-required">*</span></label>
        <input
          id="pf-year"
          type="number"
          name="yearOfManufacture"
          placeholder="e.g. 2022"
          value={formData.yearOfManufacture}
          onChange={handleChange}
          required
          min="2000"
          max={new Date().getFullYear()}
        />
      </div>

      <div className="form-group">
        <label htmlFor="pf-avail">How Much Time Available? <span className="form-required">*</span></label>
        <select
          id="pf-avail"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select availability</option>
          <option value="Full-time (24/7)">Full-time (24/7)</option>
          <option value="Weekdays only">Weekdays only</option>
          <option value="Weekends only">Weekends only</option>
          <option value="Few days a week">Few days a week</option>
          <option value="Monthly (specific months)">Monthly (specific months)</option>
          <option value="On-demand / Flexible">On-demand / Flexible</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-accent partner-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Submit Partnership Inquiry"}
      </button>

      {status === "success" && (
        <div className="form-message form-success">
          Thank you! We&apos;ll contact you soon to discuss the partnership.
        </div>
      )}
      {status === "error" && (
        <div className="form-message form-error">
          {errorMsg}
        </div>
      )}
    </form>
  );
}

/* ===== MAIN PAGE ===== */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("woh-theme") as "dark" | "light" | null;
    const t = saved || "light";
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("woh-theme", next);
  };

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on link click
  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      {/* Background Effects */}
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo">
            <img src="/logo.png" alt="wheelsonhours Logo" />
            <span className="navbar-logo-text">WheelsonHours</span>
          </a>

          <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#fleet" onClick={handleNavClick}>Our Fleet</a></li>
            <li><a href="#why-us" onClick={handleNavClick}>Why Us</a></li>
            <li><a href="#how-it-works" onClick={handleNavClick}>How It Works</a></li>
            <li><a href="#faq" onClick={handleNavClick}>FAQs</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
            <li>
              <a
                href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20a%20car%20from%20wheelsonhours."
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-cta"
                onClick={handleNavClick}
              >
                <WhatsAppIcon size={16} /> Book Now
              </a>
            </li>
          </ul>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge"><span>🚗 </span> Ahmedabad&apos;s Trusted Car Rental</div>
              <h1 className="hero-title">
                Drive Your Dream<br />
                <span className="highlight">By The Hour.</span>
              </h1>
              <p className="hero-description">
                Premium cars on rent at unbeatable prices in Ahmedabad, Gujarat.
                Enjoy the freedom of the road with our well-maintained fleet —
                starting at just <strong>₹2,000/24hrs</strong>.
              </p>
              <div className="hero-actions">
                <a
                  href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20a%20car%20from%20wheelsonhours."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon size={20} /> Book on WhatsApp
                </a>
                <a href="#fleet" className="btn btn-outline View_Our_Fleet">
                  View Our Fleet →
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-value">8+</div>
                  <div className="hero-stat-label">Premium Cars</div>
                </div>
                <div>
                  <div className="hero-stat-value">500+</div>
                  <div className="hero-stat-label">Happy Rides</div>
                </div>
                <div>
                  <div className="hero-stat-value">24/7</div>
                  <div className="hero-stat-label">Support</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              {/* Animated rings */}
              <div className="hero-ring hero-ring-1" />
              <div className="hero-ring hero-ring-2" />
              <div className="hero-ring hero-ring-3" />

              {/* Speed lines */}
              <div className="hero-speed-lines">
                <span /><span /><span /><span /><span />
              </div>

              {/* Floating particles */}
              <div className="hero-particles">
                <span className="hero-particle" style={{ top: "10%", left: "5%", animationDelay: "0s" }} />
                <span className="hero-particle" style={{ top: "20%", right: "10%", animationDelay: "0.5s" }} />
                <span className="hero-particle" style={{ top: "70%", left: "15%", animationDelay: "1s" }} />
                <span className="hero-particle" style={{ top: "80%", right: "20%", animationDelay: "1.5s" }} />
                <span className="hero-particle" style={{ top: "40%", left: "0%", animationDelay: "2s" }} />
                <span className="hero-particle" style={{ top: "60%", right: "5%", animationDelay: "0.7s" }} />
              </div>

              {/* Animated SVG Car Illustration */}
              <div className="hero-car-wrapper">
                <svg viewBox="0 0 800 400" className="hero-car-svg" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    {/* Gradients */}
                    <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1a3a5c" />
                      <stop offset="50%" stopColor="#0f2440" />
                      <stop offset="100%" stopColor="#0a1628" />
                    </linearGradient>
                    <linearGradient id="carBodyShine" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(0,212,255,0.15)" />
                      <stop offset="50%" stopColor="rgba(0,212,255,0.03)" />
                      <stop offset="100%" stopColor="rgba(0,212,255,0.1)" />
                    </linearGradient>
                    <linearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                    <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="20%" stopColor="rgba(0,212,255,0.06)" />
                      <stop offset="80%" stopColor="rgba(0,212,255,0.06)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="headlight" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(255,240,200,0.9)" />
                      <stop offset="100%" stopColor="rgba(255,240,200,0)" />
                    </linearGradient>
                    <linearGradient id="taillight" x1="1" y1="0" x2="0" y2="0">
                      <stop offset="0%" stopColor="rgba(255,60,60,0.9)" />
                      <stop offset="100%" stopColor="rgba(255,60,60,0)" />
                    </linearGradient>
                    <radialGradient id="wheelGrad">
                      <stop offset="0%" stopColor="#333" />
                      <stop offset="60%" stopColor="#1a1a1a" />
                      <stop offset="100%" stopColor="#111" />
                    </radialGradient>
                    <radialGradient id="hubGrad">
                      <stop offset="0%" stopColor="#aaa" />
                      <stop offset="100%" stopColor="#555" />
                    </radialGradient>
                    <filter id="carGlow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="neonGlow">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="softGlow">
                      <feGaussianBlur stdDeviation="12" />
                    </filter>
                  </defs>

                  {/* Road surface */}
                  <rect x="0" y="310" width="800" height="90" fill="url(#roadGrad)" rx="4" />

                  {/* Road line markings - animated */}
                  <g className="hero-road-lines">
                    <rect x="50" y="340" width="60" height="3" rx="1.5" fill="rgba(0,212,255,0.15)" />
                    <rect x="160" y="340" width="60" height="3" rx="1.5" fill="rgba(0,212,255,0.15)" />
                    <rect x="270" y="340" width="60" height="3" rx="1.5" fill="rgba(0,212,255,0.15)" />
                    <rect x="380" y="340" width="60" height="3" rx="1.5" fill="rgba(0,212,255,0.15)" />
                    <rect x="490" y="340" width="60" height="3" rx="1.5" fill="rgba(0,212,255,0.15)" />
                    <rect x="600" y="340" width="60" height="3" rx="1.5" fill="rgba(0,212,255,0.15)" />
                    <rect x="710" y="340" width="60" height="3" rx="1.5" fill="rgba(0,212,255,0.15)" />
                  </g>

                  {/* Headlight beams */}
                  <g className="hero-headlights">
                    <polygon points="620,230 800,180 800,260" fill="url(#headlight)" opacity="0.3" />
                    <polygon points="620,240 800,210 800,270" fill="url(#headlight)" opacity="0.15" />
                  </g>

                  {/* Taillight glow */}
                  <g className="hero-taillights">
                    <polygon points="195,230 50,200 50,260" fill="url(#taillight)" opacity="0.25" />
                  </g>

                  {/* Car body - main group with float animation */}
                  <g className="hero-car-body">
                    {/* Underbody glow / neon */}
                    <ellipse cx="400" cy="310" rx="200" ry="8" fill="rgba(0,212,255,0.2)" filter="url(#softGlow)" className="hero-underglow" />

                    {/* Car shadow on road */}
                    <ellipse cx="400" cy="315" rx="180" ry="12" fill="rgba(0,0,0,0.4)" />

                    {/* Lower body */}
                    <path
                      d="M195,280 L195,230 Q195,220 205,215 L590,215 Q610,215 615,225 L620,280 Q620,295 605,300 L210,300 Q195,300 195,280Z"
                      fill="url(#carBody)"
                      stroke="rgba(0,212,255,0.12)"
                      strokeWidth="1"
                    />

                    {/* Body shine overlay */}
                    <path
                      d="M195,280 L195,230 Q195,220 205,215 L590,215 Q610,215 615,225 L620,280 Q620,295 605,300 L210,300 Q195,300 195,280Z"
                      fill="url(#carBodyShine)"
                    />

                    {/* Upper body / roof */}
                    <path
                      d="M275,215 L310,145 Q315,135 330,135 L500,135 Q515,135 520,145 L570,215Z"
                      fill="url(#carBody)"
                      stroke="rgba(0,212,255,0.1)"
                      strokeWidth="1"
                    />

                    {/* Roof shine */}
                    <path
                      d="M310,150 L330,145 L500,145 L515,150Z"
                      fill="rgba(0,212,255,0.08)"
                    />

                    {/* Windows */}
                    <path
                      d="M290,210 L320,155 Q323,150 330,150 L405,150 L405,210Z"
                      fill="url(#windowGrad)"
                      opacity="0.5"
                      rx="4"
                    />
                    <path
                      d="M415,210 L415,150 L495,150 Q502,150 505,155 L555,210Z"
                      fill="url(#windowGrad)"
                      opacity="0.5"
                      rx="4"
                    />

                    {/* Window frame divider */}
                    <rect x="407" y="148" width="6" height="65" rx="3" fill="#0a1628" />

                    {/* Headlights */}
                    <rect x="600" y="225" width="22" height="18" rx="5" fill="#fffbe6" opacity="0.95" filter="url(#carGlow)" className="hero-headlight-blink" />
                    <rect x="600" y="250" width="22" height="10" rx="3" fill="rgba(0,212,255,0.7)" filter="url(#carGlow)" />

                    {/* Taillights */}
                    <rect x="195" y="225" width="14" height="14" rx="4" fill="#ff3b3b" opacity="0.9" filter="url(#carGlow)" className="hero-taillight-blink" />
                    <rect x="195" y="244" width="14" height="8" rx="3" fill="#ff8800" opacity="0.7" />

                    {/* Front bumper accent */}
                    <path d="M600,275 L622,275 Q625,275 625,278 L625,290 Q625,293 622,293 L600,293Z" fill="#1a1a2e" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" />

                    {/* Grille lines */}
                    <line x1="600" y1="260" x2="620" y2="260" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
                    <line x1="600" y1="264" x2="620" y2="264" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
                    <line x1="600" y1="268" x2="620" y2="268" stroke="rgba(0,212,255,0.1)" strokeWidth="1" />

                    {/* Rear bumper */}
                    <path d="M190,275 L210,275 L210,293 L190,293Z" fill="#1a1a2e" stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />

                    {/* Side mirror - right */}
                    <ellipse cx="575" cy="200" rx="8" ry="12" fill="#0f2440" stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />

                    {/* Door line */}
                    <line x1="410" y1="215" x2="410" y2="295" stroke="rgba(0,212,255,0.06)" strokeWidth="1" />

                    {/* Door handle */}
                    <rect x="430" y="250" width="24" height="4" rx="2" fill="rgba(0,212,255,0.15)" />

                    {/* Body line accent */}
                    <line x1="210" y1="258" x2="605" y2="258" stroke="rgba(0,212,255,0.08)" strokeWidth="1.5" />

                    {/* Neon accent strip under body */}
                    <line x1="240" y1="302" x2="570" y2="302" stroke="rgba(0,212,255,0.5)" strokeWidth="2" filter="url(#neonGlow)" className="hero-neon-strip" />

                    {/* Front wheel */}
                    <g className="hero-wheel hero-wheel-front">
                      <circle cx="520" cy="300" r="36" fill="url(#wheelGrad)" stroke="#222" strokeWidth="3" />
                      <circle cx="520" cy="300" r="28" fill="none" stroke="#333" strokeWidth="2" />
                      <circle cx="520" cy="300" r="12" fill="url(#hubGrad)" />
                      <circle cx="520" cy="300" r="4" fill="#777" />
                      {/* Spokes */}
                      <line x1="520" y1="272" x2="520" y2="288" stroke="#555" strokeWidth="2" />
                      <line x1="520" y1="312" x2="520" y2="328" stroke="#555" strokeWidth="2" />
                      <line x1="492" y1="300" x2="508" y2="300" stroke="#555" strokeWidth="2" />
                      <line x1="532" y1="300" x2="548" y2="300" stroke="#555" strokeWidth="2" />
                      <line x1="500" y1="280" x2="510" y2="290" stroke="#555" strokeWidth="1.5" />
                      <line x1="530" y1="310" x2="540" y2="320" stroke="#555" strokeWidth="1.5" />
                      <line x1="540" y1="280" x2="530" y2="290" stroke="#555" strokeWidth="1.5" />
                      <line x1="500" y1="320" x2="510" y2="310" stroke="#555" strokeWidth="1.5" />
                    </g>

                    {/* Rear wheel */}
                    <g className="hero-wheel hero-wheel-rear">
                      <circle cx="270" cy="300" r="36" fill="url(#wheelGrad)" stroke="#222" strokeWidth="3" />
                      <circle cx="270" cy="300" r="28" fill="none" stroke="#333" strokeWidth="2" />
                      <circle cx="270" cy="300" r="12" fill="url(#hubGrad)" />
                      <circle cx="270" cy="300" r="4" fill="#777" />
                      <line x1="270" y1="272" x2="270" y2="288" stroke="#555" strokeWidth="2" />
                      <line x1="270" y1="312" x2="270" y2="328" stroke="#555" strokeWidth="2" />
                      <line x1="242" y1="300" x2="258" y2="300" stroke="#555" strokeWidth="2" />
                      <line x1="282" y1="300" x2="298" y2="300" stroke="#555" strokeWidth="2" />
                      <line x1="250" y1="280" x2="260" y2="290" stroke="#555" strokeWidth="1.5" />
                      <line x1="280" y1="310" x2="290" y2="320" stroke="#555" strokeWidth="1.5" />
                      <line x1="290" y1="280" x2="280" y2="290" stroke="#555" strokeWidth="1.5" />
                      <line x1="250" y1="320" x2="260" y2="310" stroke="#555" strokeWidth="1.5" />
                    </g>
                  </g>
                </svg>

                <div className="hero-car-shadow" />
              </div>

              {/* Floating info badges */}
              <div className="hero-float-badge hero-float-badge-1">
                <span className="hero-float-badge-icon">💰</span>
                <span>From ₹2,000/day</span>
              </div>
              <div className="hero-float-badge hero-float-badge-2">
                <span className="hero-float-badge-icon">🛡️</span>
                <span>Fully Insured</span>
              </div>
              <div className="hero-float-badge hero-float-badge-3">
                <span className="hero-float-badge-icon">🚗</span>
                <span>Easy Pickup</span>
              </div>

              {/* Glow effects */}
              <div className="hero-glow" />
              <div className="hero-glow-2" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <span className="trust-item-icon">🛡️</span>
              <span>Fully Insured Cars</span>
            </div>
            <div className="trust-item">
              <span className="trust-item-icon">🔧</span>
              <span>Well Maintained Fleet</span>
            </div>
            <div className="trust-item">
              <span className="trust-item-icon">💰</span>
              <span>No Hidden Charges</span>
            </div>
            <div className="trust-item">
              <span className="trust-item-icon">📍</span>
              <span>Ahmedabad, Gujarat</span>
            </div>
            <div className="trust-item">
              <span className="trust-item-icon">⭐</span>
              <span>5-Star Rated Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FLEET SECTION ===== */}
      <section className="section" id="fleet">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">Our Fleet</div>
            <h2 className="section-title">Choose Your Perfect Ride</h2>
            <p className="section-subtitle">
              Handpicked premium cars maintained to the highest standards. 8+ cars including Baleno, Altroz, i20, Dzire, Nexon &amp; Brezza — starting at ₹2,000/24hrs.
            </p>
          </div>

          <div className="fleet-grid">
            {carsData.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section" id="why-us">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">Why Choose Us</div>
            <h2 className="section-title">The wheelsonhours Advantage</h2>
            <p className="section-subtitle">
              Experience car rental like never before. We prioritize your comfort, safety, and convenience.
            </p>
          </div>

          <div className="features-grid">
            {[
              {
                icon: "💎",
                title: "Premium Cars Only",
                desc: "Drive latest models — Baleno & Altroz — maintained in showroom condition with regular servicing.",
              },
              {
                icon: "🏷️",
                title: "Transparent Pricing",
                desc: "Clear 24-hour rates starting from ₹2,000. Altroz, Baleno, i20, Dzire, Nexon & Brezza — all transparently priced. No hidden charges.",
              },
              {
                icon: "🛡️",
                title: "Fully Insured",
                desc: "All our cars are comprehensively insured. Drive worry-free knowing you're fully covered.",
              },
              {
                icon: "📱",
                title: "Instant WhatsApp Booking",
                desc: "Skip the queues. Book your ride instantly via WhatsApp with a few simple messages.",
              },
              {
                icon: "🔑",
                title: "Easy Pickup Location",
                desc: "Pick up your car from our conveniently located office in Ahmedabad — Stavan Ample, Devnagar Gam Road. Quick and hassle-free!",
              },
              {
                icon: "🕐",
                title: "Flexible Durations",
                desc: "Rent by the hour, day, or week. We have flexible plans designed around your schedule.",
              },
            ].map((feature, idx) => (
              <div className="feature-card animate-on-scroll" key={idx}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">How It Works</div>
            <h2 className="section-title">Book in 3 Simple Steps</h2>
            <p className="section-subtitle">
              Getting your dream car on rent has never been easier. Just follow these simple steps.
            </p>
          </div>

          <div className="steps-grid">
            {[
              {
                num: "01",
                title: "Choose Your Car",
                desc: "Browse our fleet and pick the car that suits your needs — Baleno or Altroz.",
              },
              {
                num: "02",
                title: "Message on WhatsApp",
                desc: "Send us a WhatsApp message with your preferred dates and pickup details.",
              },
              {
                num: "03",
                title: "Hit the Road!",
                desc: "Pick up the car from our location at Stavan Ample, Devnagar Gam Road, Ahmedabad. Show your documents, get the keys, and drive!",
              },
            ].map((step, idx) => (
              <div className="step-card animate-on-scroll" key={idx}>
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTS REQUIRED ===== */}
      <section className="section" id="documents">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">Important</div>
            <h2 className="section-title">Keep in Mind Before You Book</h2>
            <p className="section-subtitle">
              To start your booking, just send the following documents on WhatsApp. That&apos;s it — no lengthy forms!
            </p>
          </div>

          <div className="docs-wrapper animate-on-scroll">
            <div className="docs-card">
              <div className="docs-step-number">1</div>
              <div className="docs-icon">🪪</div>
              <h3>Aadhaar Card</h3>
              <p>Send a clear photo/scan of your Aadhaar card (front &amp; back) on WhatsApp.</p>
            </div>
            <div className="docs-card">
              <div className="docs-step-number">2</div>
              <div className="docs-icon">🪄</div>
              <h3>Driving License</h3>
              <p>Send a clear photo/scan of your valid Indian driving license on WhatsApp.</p>
            </div>
            <div className="docs-card docs-card-cta">
              <div className="docs-step-number">3</div>
              <div className="docs-icon">✅</div>
              <h3>Done! You&apos;re Ready</h3>
              <p>Once verified, we&apos;ll confirm your booking and have the car ready for pickup at our location!</p>
            </div>
          </div>

          <div className="docs-whatsapp-cta animate-on-scroll">
            <p>Send your documents now to start booking instantly:</p>
            <a
              href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20book%20a%20car.%20Sending%20my%20Aadhaar%20and%20Driving%20License."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon size={20} /> Send Documents on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== PARTNER WITH US — REDESIGNED ===== */}
      <section className="section pw-section" id="partner">
        <div className="container">

          {/* ROW 1: Hero + Commission Visual */}
          <div className="pw-hero animate-on-scroll">
            <div className="pw-hero-left">
              <div className="section-badge">👤 Partner With Us</div>
              <h2 className="pw-title">
                We Grow Together,<br />
                <span className="pw-title-highlight">You Earn More.</span>
              </h2>
              <p className="pw-desc">
                We believe in fair partnerships. That&apos;s why we take only{" "}
                <span className="pw-accent">20% commission</span> and give you <strong>80%</strong> of every booking.
              </p>
              <div className="pw-features">
                {[
                  { icon: "🛡️", title: "Fair & Transparent", desc: "No hidden charges. Just a clear 20% commission." },
                  { icon: "💰", title: "More You Earn", desc: "You keep 80% of every successful booking." },
                  { icon: "🎧", title: "We Support You", desc: "From onboarding to growth, we're with you always." },
                ].map((f, i) => (
                  <div className="pw-feature" key={i}>
                    <div className="pw-feature-icon">{f.icon}</div>
                    <div>
                      <strong>{f.title}</strong>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pw-hero-right">
              <div className="pw-commission-visual">
                {/* Left: 20% */}
                <div className="pw-cv-left">
                  <div className="pw-cv-label">WE TAKE ONLY</div>
                  <div className="pw-cv-big">20<span>%</span></div>
                  <div className="pw-cv-sublabel">COMMISSION</div>
                  <ul className="pw-cv-list">
                    <li><span className="pw-check">✓</span> Platform &amp; Technology</li>
                    <li><span className="pw-check">✓</span> Marketing &amp; Brand</li>
                    <li><span className="pw-check">✓</span> Operations &amp; Support</li>
                    <li><span className="pw-check">✓</span> Secure &amp; Reliable Service</li>
                  </ul>
                </div>

                {/* Center: Circle */}
                <div className="pw-cv-center">
                  <div className="pw-cv-circle">
                    <div className="pw-cv-circle-inner">
                      <span className="pw-cv-handshake">🤝</span>
                      <span className="pw-cv-circle-text">Our Success is<br />Your Success</span>
                    </div>
                  </div>
                </div>

                {/* Right: 80% */}
                <div className="pw-cv-right">
                  <div className="pw-cv-badge">YOU KEEP</div>
                  <div className="pw-cv-big pw-cv-big-dark">80<span>%</span></div>
                  <div className="pw-cv-sublabel">OF EVERY BOOKING</div>
                  <div className="pw-cv-right-features">
                    {[
                      { icon: "📈", title: "Higher Profits", desc: "Keep the majority of every booking." },
                      { icon: "🚀", title: "Business Growth", desc: "More income, more cars, more success." },
                      { icon: "🎯", title: "You're in Control", desc: "You run your business, your way." },
                    ].map((f, i) => (
                      <div className="pw-cv-rf" key={i}>
                        <span className="pw-cv-rf-icon">{f.icon}</span>
                        <div>
                          <strong>{f.title}</strong>
                          <p>{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: Early Bird Banner */}
          <div className="pw-earlybird animate-on-scroll">
            <div className="pw-eb-left">
              <div className="pw-eb-trophy">
                <span className="pw-eb-trophy-icon">🏆</span>
                <div className="pw-eb-top5">
                  <span className="pw-eb-top-label">TOP</span>
                  <span className="pw-eb-top-num">5</span>
                </div>
              </div>
              <div className="pw-eb-text">
                <h3>First 5 Partners</h3>
                <h4>Get Extra Rewards!</h4>
                <p>The first 5 partners to join our program will receive exclusive extra rewards decided by our company.</p>
              </div>
            </div>
            <div className="pw-eb-right">
              {[
                { icon: "🎁", title: "Higher Commission", desc: "Enjoy extra % on every booking" },
                { icon: "👑", title: "Priority Support", desc: "Get fast-track assistance" },
                { icon: "⭐", title: "Featured Partner", desc: "Showcased on our platform" },
                { icon: "📢", title: "Marketing Boost", desc: "Special promotion & visibility" },
                { icon: "🏅", title: "Exclusive Benefits", desc: "More perks as we grow together" },
              ].map((r, i) => (
                <div className="pw-eb-reward" key={i}>
                  <div className="pw-eb-reward-icon">{r.icon}</div>
                  <strong>{r.title}</strong>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 3: VS Comparison */}
          <div className="pw-advantage animate-on-scroll">
            <h3 className="pw-adv-title">
              <span className="pw-adv-line" />
              The wheelsonhours Advantage
              <span className="pw-adv-line" />
            </h3>
            <div className="pw-vs-card">
              <div className="pw-vs-side pw-vs-us">
                <div className="pw-vs-logo-wrap">
                  <img src="/logo.png" alt="wheelsonhours" className="pw-vs-logo" />
                </div>
                <div>
                  <div className="pw-vs-brand pw-accent">wheelsonhours</div>
                  <div className="pw-vs-line">We take only <strong className="pw-accent">20%</strong></div>
                  <div className="pw-vs-line">You keep <strong className="pw-accent">80%</strong></div>
                </div>
              </div>
              <div className="pw-vs-badge">VS</div>
              <div className="pw-vs-side pw-vs-them">
                <div className="pw-vs-icon-wrap">🏢</div>
                <div>
                  <div className="pw-vs-brand">Other Car Rental Companies</div>
                  <div className="pw-vs-line">They take <strong className="pw-vs-red">30% – 40%</strong></div>
                  <div className="pw-vs-line">You keep only <strong className="pw-vs-red">60% – 70%</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Form */}
          <div className="pw-form-section animate-on-scroll">
            <div className="section-header">
              <h2 className="section-title">Submit Your Details</h2>
              <p className="section-subtitle">Interested? Fill in the form and we&apos;ll get in touch.</p>
            </div>
            <div className="pw-form-wrap">
              <PartnerForm />
            </div>
          </div>

        </div>
      </section>

      {/* ===== BOOKING POLICY ===== */}
      <section className="section" id="booking-policy">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">Booking Policy</div>
            <h2 className="section-title">Payment &amp; Cancellation Policy</h2>
            <p className="section-subtitle">
              Clear and transparent policies — know exactly what to expect before you book.
            </p>
          </div>

          <div className="policy-cards animate-on-scroll">
            <div className="booking-policy-card">
              <div className="booking-policy-icon">💳</div>
              <h3>50% Advance Payment</h3>
              <p>Pay 50% of the total rental amount at the time of booking to confirm your reservation.</p>
              <div className="booking-policy-tag">At Booking</div>
            </div>
            <div className="booking-policy-card">
              <div className="booking-policy-icon">🚗</div>
              <h3>50% After the Trip</h3>
              <p>Pay the remaining 50% when you return the car after your trip is completed.</p>
              <div className="booking-policy-tag">At Return</div>
            </div>
            <div className="booking-policy-card booking-policy-card--alert">
              <div className="booking-policy-icon">⚠️</div>
              <h3>No Refund Policy</h3>
              <p>The advance payment is <strong>non-refundable</strong> in case of plan changes, trip cancellation, or no-show. Please book only when you are sure.</p>
              <div className="booking-policy-tag booking-policy-tag--alert">Non-Refundable</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">FAQs</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about renting a car in Ahmedabad with wheelsonhours.
            </p>
          </div>

          <div className="faq-list">
            {[
              {
                q: "What is the cheapest car on rent in Ahmedabad?",
                a: "wheelsonhours offers the Tata Altroz on rent in Ahmedabad starting at just ₹2,000 per 24 hours — one of the most affordable self-drive car rental options in the city. No hidden charges, fully insured.",
              },
              {
                q: "How do I rent a car in Ahmedabad from wheelsonhours?",
                a: "Booking a car is simple: 1) Choose from our fleet of 8+ cars (Baleno, Altroz, i20, Dzire, Nexon, Brezza), 2) Send a WhatsApp message to +91 884 984 9888 with your dates, 3) Pick up the car from our location at Stavan Ample, Devnagar Gam Road, Ahmedabad. No app download needed!",
              },
              {
                q: "Do you offer self-drive car rental in Ahmedabad?",
                a: "Yes! wheelsonhours specializes in self-drive car rentals in Ahmedabad. You get the car keys and drive wherever you want — no driver required. Choose from 8+ cars — Baleno, Altroz, i20, Dzire, Nexon, and Brezza.",
              },
              {
                q: "Where do I pick up the rental car in Ahmedabad?",
                a: "Pick up your rental car from our location at Stavan Ample, Devnagar Gam Road, Ahmedabad-382481 (Landmark: ICB FLORA, SILVER HARMONY-2). Just show your documents, get the keys, and you're ready to drive!",
              },
              {
                q: "What documents are needed to rent a car in Ahmedabad?",
                a: "You need a valid Indian driving license, an Aadhaar card (or any government ID), and a refundable security deposit. The process is quick and hassle-free.",
              },
              {
                q: "Can I rent a Baleno in Ahmedabad?",
                a: "Absolutely! wheelsonhours offers the Maruti Suzuki Baleno on rent at ₹2,400/day. We also have Hyundai i20 (₹2,800), Dzire (₹2,600), Tata Nexon (₹3,000), and Brezza (₹3,000). All manual transmission. Book via WhatsApp at +91 884 984 9888.",
              },
              {
                q: "Are the rental cars insured?",
                a: "Yes, all cars at wheelsonhours are comprehensively insured. Drive with complete peace of mind knowing you're fully covered.",
              },
              {
                q: "What is the price of car rental in Ahmedabad per day?",
                a: "Car rental prices: Altroz ₹2,000/day, Baleno ₹2,400/day, Dzire ₹2,600/day, i20 ₹2,800/day, Nexon & Brezza ₹3,000/day. All-inclusive — no hidden charges.",
              },
              {
                q: "Do you provide car rental for outstation trips from Ahmedabad?",
                a: "Yes! Rent our cars for outstation trips — Udaipur, Mount Abu, Goa, Kutch, and more. Contact us on WhatsApp for outstation rates.",
              },
              {
                q: "Is wheelsonhours available 24/7?",
                a: "Yes! We operate 24/7 in Ahmedabad. Book, pick up, or return at any time. Reach us anytime on WhatsApp at +91 884 984 9888.",
              },
            ].map((faq, idx) => (
              <details className="faq-item animate-on-scroll" key={idx}>
                <summary className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="faq-toggle">+</span>
                </summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">Contact Us</div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to book? Have questions? Reach out to us anytime — we&apos;re here to help.
            </p>
          </div>

          <div className="contact-wrapper animate-on-scroll">
            <div className="contact-info-card">
              <div className="contact-owner">
                <div className="contact-owner-avatar">NK</div>
                <div>
                  <div className="contact-owner-name">Nilesh Kidiya</div>
                  <div className="contact-owner-role">Owner & Founder, wheelsonhours</div>
                </div>
              </div>

              <div className="contact-details">
                <a href="tel:+918849849888" className="contact-item">
                  <div className="contact-item-icon"><PhoneIcon /></div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">Phone</span>
                    <span className="contact-item-value">+91 884 984 9888</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/918849849888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <div className="contact-item-icon" style={{ color: "#25d366" }}>
                    <WhatsAppIcon size={20} />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">WhatsApp</span>
                    <span className="contact-item-value">+91 884 984 9888</span>
                  </div>
                </a>

                <div className="contact-item">
                  <div className="contact-item-icon"><LocationIcon /></div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">Location</span>
                    <span className="contact-item-value">
                      Stavan Ample, Devnagar gam road, Ahmedabad-382481.
                      <br />
                      Landmark: ICB FLORA, SILVER HARMONY-2, Ahmedabad, Gujarat
                    </span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon"><ClockIcon /></div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">Availability</span>
                    <span className="contact-item-value">24/7 — Always Available</span>
                  </div>
                </div>
              </div>

              <div className="contact-cta-group">
                <a
                  href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20a%20car%20from%20wheelsonhours."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon size={18} /> Chat on WhatsApp
                </a>
                <a href="tel:+918849849888" className="btn btn-outline View_Our_Fleet">
                  <PhoneIcon /> Call Now
                </a>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps?q=STAVAN%20AMPLE&ll=23.1033265404403,72.5416057091206&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="wheelsonhours Location - Stavan Ample, Ahmedabad, Gujarat"
              />
            </div>
          </div>
        </div>
      </section>

  

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="/logo.png" alt="wheelsonhours" />
              <span>wheelsonhours</span>
            </div>
            <div className="footer-social">
              <a
                href="https://wa.me/918849849888"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a href="tel:+918849849888" aria-label="Call us" title="Call Us">
                <PhoneIcon />
              </a>
            </div>
          </div>

          {/* SEO Internal Links */}
          <div className="footer-seo-links">
            <h4>Car Rental Services in Ahmedabad</h4>
            <div className="footer-links-grid">
              <a href="/rent-a-car-in-ahmedabad">Rent a Car in Ahmedabad</a>
              <a href="/self-drive-car-rental-ahmedabad">Self Drive Car Rental Ahmedabad</a>
              <a href="/cheap-car-rental-ahmedabad">Cheap Car Rental Ahmedabad</a>
              <a href="/baleno-on-rent-in-ahmedabad">Baleno on Rent in Ahmedabad</a>
              <a href="/altroz-on-rent-in-ahmedabad">Altroz on Rent in Ahmedabad</a>
              <a href="/car-hire-ahmedabad-airport">Car Hire Ahmedabad Airport</a>
              <a href="/outstation-car-rental-ahmedabad">Outstation Car Rental Ahmedabad</a>
              <a href="/wedding-car-rental-ahmedabad">Wedding Car Rental Ahmedabad</a>
              <a href="/car-rental-ahmedabad-price">Car Rental Ahmedabad Price List</a>
              <a href="/monthly-car-rental-ahmedabad">Monthly Car Rental Ahmedabad</a>
              <a href="/i20-on-rent-in-ahmedabad">i20 on Rent in Ahmedabad</a>
              <a href="/dzire-on-rent-in-ahmedabad">Dzire on Rent in Ahmedabad</a>
              <a href="/nexon-on-rent-in-ahmedabad">Nexon on Rent in Ahmedabad</a>
              <a href="/brezza-on-rent-in-ahmedabad">Brezza on Rent in Ahmedabad</a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © {new Date().getFullYear()} wheelsonhours. All rights reserved. |
              Owned by <strong>Nilesh Kidiya</strong> | Ahmedabad, Gujarat
            </div>
            <div className="footer-designer">
              Designed &amp; Developed by{" "}
              <a href="https://udaykjasani.vercel.app/" target="_blank" rel="noopener noreferrer">
                Uday K. Jasani
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== SEO CONTENT SECTION ===== */}
      <section className="seo-content">
        <div className="container">
          <h2>Car Rental in Ahmedabad — wheelsonhours</h2>
          <p>
            Looking to <strong>rent a car in Ahmedabad</strong>? wheelsonhours is Ahmedabad&apos;s most trusted {" "}
            <strong>self-drive car rental</strong> service with a fleet of 8+ premium cars. Choose from {" "}
            <strong>Maruti Suzuki Baleno</strong>, <strong>Tata Altroz</strong>, <strong>Hyundai i20</strong>, {" "}
            <strong>Maruti Suzuki Dzire</strong>, <strong>Tata Nexon</strong>, and <strong>Maruti Suzuki Brezza</strong> at
            unbeatable prices. Whether you need a <strong>car on rent in Ahmedabad</strong> for
            a day trip, outstation journey, wedding, or airport transfer — we&apos;ve got you covered.
          </p>
          <h3>Why Choose wheelsonhours for Car Rental in Ahmedabad?</h3>
          <p>
            wheelsonhours stands out as the <strong>best car rental in Ahmedabad</strong> with transparent pricing starting
            at just ₹2,000 per day. Unlike other <strong>car hire services in Ahmedabad</strong>, we offer easy pickup from our Ahmedabad
            location, fully insured vehicles, no hidden charges, and instant WhatsApp booking. Our fleet includes {" "}
            <strong>Baleno on rent in Ahmedabad</strong> (₹2,400/day), <strong>Altroz on rent in Ahmedabad</strong> (₹2,000/day), {" "}
            <strong>i20 on rent in Ahmedabad</strong> (₹2,800/day), <strong>Dzire on rent</strong> (₹2,600/day), and SUVs like {" "}
            <strong>Nexon</strong> and <strong>Brezza</strong> at ₹3,000/day.
          </p>
          <h3>Self-Drive Car Rental in Ahmedabad</h3>
          <p>
            Enjoy the freedom of driving with our <strong>self-drive car rental in Ahmedabad</strong>. No driver needed —
            pick up the keys and explore Gujarat at your own pace. Choose from hatchbacks, sedans, and SUVs — all manual
            transmission, well-maintained, and fully insured. Perfect for <strong>outstation car rental from Ahmedabad</strong> to
            popular destinations like Udaipur, Mount Abu, Goa, Kutch, Somnath, and Dwarka.
            wheelsonhours also provides <strong>cheap car rental in Ahmedabad</strong> for budget-conscious travelers and {" "}
            <strong>car rental near Ahmedabad airport</strong> with pickup and drop-off.
          </p>
          <h3>Affordable Car Rental Prices in Ahmedabad</h3>
          <p>
            Compare our <strong>car rental Ahmedabad prices</strong>: Tata Altroz ₹2,000/day, Baleno ₹2,400/day,
            Dzire ₹2,600/day, Hyundai i20 ₹2,800/day, Tata Nexon ₹3,000/day, and Brezza ₹3,000/day. These are among the most {" "}
            <strong>affordable car rental rates in Ahmedabad, Gujarat</strong>.
            Whether you search for &quot;rent a car in Ahmedabad&quot;, &quot;car rental near me&quot;, &quot;SUV on rent in Ahmedabad&quot;, or
            &quot;cheap car on rent Ahmedabad&quot; — wheelsonhours is the answer. Contact owner Nilesh Kidiya at +91 884 984 9888 on WhatsApp to book now.
          </p>
        </div>
      </section>

      {/* ===== FLOATING WHATSAPP ===== */}
      <a
        href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20a%20car%20from%20wheelsonhours."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon size={30} />
      </a>
    </>
  );
}
