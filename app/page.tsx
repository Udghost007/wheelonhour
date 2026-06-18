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
    price: 1800,
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
    type: "Premium Hatchback • Petrol • Automatic / Manual",
    badge: "Popular",
    price: 2400,
    images: Array.from({ length: 14 }, (_, i) => `/cars/baleno/${i + 1}.jpg`),
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
    `Hi! I'm interested in renting the ${car.name} from WheelOnHour. Please share availability and details.`
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
              className="btn btn-whatsapp"
              style={{ padding: "10px 20px", fontSize: "0.9rem" }}
            >
              <WhatsAppIcon size={18} /> Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== MAIN PAGE ===== */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <img src="/logo.png" alt="WheelOnHour Logo" />
            <span className="navbar-logo-text">WheelOnHour</span>
          </a>

          <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#fleet" onClick={handleNavClick}>Our Fleet</a></li>
            <li><a href="#why-us" onClick={handleNavClick}>Why Us</a></li>
            <li><a href="#how-it-works" onClick={handleNavClick}>How It Works</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
            <li>
              <a
                href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20a%20car%20from%20WheelOnHour."
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
              <div className="hero-badge">🚗 Ahmedabad&apos;s Trusted Car Rental</div>
              <h1 className="hero-title">
                Drive Your Dream<br />
                <span className="highlight">By The Hour.</span>
              </h1>
              <p className="hero-description">
                Premium cars on rent at unbeatable prices in Ahmedabad, Gujarat.
                Enjoy the freedom of the road with our well-maintained fleet —
                starting at just <strong>₹1,800/24hrs</strong>.
              </p>
              <div className="hero-actions">
                <a
                  href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20a%20car%20from%20WheelOnHour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon size={20} /> Book on WhatsApp
                </a>
                <a href="#fleet" className="btn btn-outline">
                  View Our Fleet →
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-value">2+</div>
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
              <img
                src="/cars/altroz/1.jpg"
                alt="Tata Altroz - Premium Rental Car"
                className="hero-car-image"
              />
              <div className="hero-glow" />
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
              Handpicked premium cars maintained to the highest standards. Altroz at ₹1,800/24hrs and Baleno at ₹2,400/24hrs.
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
            <h2 className="section-title">The WheelOnHour Advantage</h2>
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
                desc: "Clear 24-hour rates: Altroz at ₹1,800 and Baleno at ₹2,400. No hidden charges, no surge pricing.",
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
                title: "Doorstep Delivery",
                desc: "We deliver the car to your location in Ahmedabad. No need to visit us — we come to you.",
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
                desc: "We deliver the car to you. Just show your documents, get the keys, and drive!",
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
                  <div className="contact-owner-role">Owner & Founder, WheelOnHour</div>
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
                  href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20a%20car%20from%20WheelOnHour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon size={18} /> Chat on WhatsApp
                </a>
                <a href="tel:+918849849888" className="btn btn-outline">
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
                title="WheelOnHour Location - Stavan Ample, Ahmedabad, Gujarat"
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
              <img src="/logo.png" alt="WheelOnHour" />
              <span>WheelOnHour</span>
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

          <div className="footer-bottom">
            <div className="footer-copy">
              © {new Date().getFullYear()} WheelOnHour. All rights reserved. |
              Owned by <strong>Nilesh Kidiya</strong>
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

      {/* ===== FLOATING WHATSAPP ===== */}
      <a
        href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20a%20car%20from%20WheelOnHour."
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
