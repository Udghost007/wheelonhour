"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ===== METADATA handled via generateMetadata in layout or head ===== */

/* ===== SVG ICON COMPONENTS ===== */

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GlobeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ShareIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function DownloadIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function CarIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
      <circle cx="6.5" cy="16.5" r="2.5" /><circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
  );
}

function StarIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* ===== SAVE CONTACT FUNCTION ===== */
function saveContact() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Kidiya;Nilesh;;;
FN:Nilesh Kidiya - wheelsonhours
ORG:wheelsonhours - Car Rental Ahmedabad
TITLE:Owner & Founder
TEL;TYPE=CELL:+918849849888
URL:https://wheelsonhours.vercel.app
ADR;TYPE=WORK:;;Stavan Ample, Devnagar Gam Road;Ahmedabad;Gujarat;382481;India
NOTE:wheelsonhours - Ahmedabad's #1 Self-Drive Car Rental. Baleno, Altroz, i20, Dzire, Nexon & Brezza from ₹2,000/day. Book on WhatsApp!
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "wheelsonhours_Nilesh_Kidiya.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/* ===== SHARE FUNCTION ===== */
async function shareCard() {
  const shareData = {
    title: "wheelsonhours — Car Rental Ahmedabad",
    text: "🚗 Nilesh Kidiya | wheelsonhours\n#1 Self-Drive Car Rental in Ahmedabad\nFrom ₹2,000/day | 8+ Premium Cars\n📞 +91 884 984 9888",
    url: "https://wheelsonhours.vercel.app/card",
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      // User cancelled sharing
    }
  } else {
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(
        `${shareData.text}\n${shareData.url}`
      );
      alert("Card link copied to clipboard!");
    } catch {
      alert("Share this link: " + shareData.url);
    }
  }
}

/* ===== MAIN COMPONENT ===== */
export default function BusinessCard() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [flipped, setFlipped] = useState(false);

  const [savedToast, setSavedToast] = useState(false);
  const [flipperHeight, setFlipperHeight] = useState<number | undefined>(undefined);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const updateHeight = useCallback(() => {
    if (flipped && backRef.current) {
      setFlipperHeight(backRef.current.offsetHeight);
    } else if (!flipped && frontRef.current) {
      setFlipperHeight(frontRef.current.offsetHeight);
    }
  }, [flipped]);

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [updateHeight]);

  useEffect(() => {
    const saved = localStorage.getItem("woh-theme") as "dark" | "light" | null;
    if (saved && saved !== theme) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSaveContact = () => {
    saveContact();
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  return (
    <>
      {/* Background Effects */}
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <div className="vcard-page">
        {/* Floating Particles — deterministic positions to avoid hydration mismatch */}
        <div className="vcard-particles">
          {[
            { l: 12, t: 8, d: 0.2, dur: 4.1, s: 4 },
            { l: 45, t: 22, d: 1.3, dur: 5.8, s: 6 },
            { l: 78, t: 5, d: 2.7, dur: 3.5, s: 3 },
            { l: 33, t: 65, d: 0.8, dur: 6.2, s: 5 },
            { l: 90, t: 40, d: 3.1, dur: 4.7, s: 7 },
            { l: 5, t: 88, d: 1.9, dur: 5.3, s: 4 },
            { l: 60, t: 15, d: 4.2, dur: 3.9, s: 6 },
            { l: 25, t: 50, d: 0.5, dur: 6.5, s: 3 },
            { l: 72, t: 72, d: 2.1, dur: 4.4, s: 5 },
            { l: 50, t: 92, d: 3.8, dur: 5.1, s: 7 },
            { l: 15, t: 35, d: 1.1, dur: 3.7, s: 4 },
            { l: 85, t: 60, d: 4.5, dur: 6.0, s: 6 },
            { l: 40, t: 78, d: 0.3, dur: 4.9, s: 3 },
            { l: 68, t: 28, d: 2.5, dur: 5.5, s: 5 },
            { l: 8, t: 55, d: 3.4, dur: 3.3, s: 7 },
            { l: 55, t: 45, d: 1.7, dur: 6.8, s: 4 },
            { l: 95, t: 18, d: 4.0, dur: 4.2, s: 6 },
            { l: 20, t: 95, d: 0.9, dur: 5.7, s: 3 },
            { l: 75, t: 82, d: 2.9, dur: 3.6, s: 5 },
            { l: 38, t: 10, d: 3.6, dur: 6.4, s: 7 },
          ].map((p, i) => (
            <span
              key={i}
              className="vcard-particle"
              style={{
                left: `${p.l}%`,
                top: `${p.t}%`,
                animationDelay: `${p.d}s`,
                animationDuration: `${p.dur}s`,
                width: `${p.s}px`,
                height: `${p.s}px`,
              }}
            />
          ))}
        </div>

        {/* Page Header */}
        {/* <div className="vcard-header">
          <a href="/" className="vcard-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Website
          </a>
        </div> */}

        {/* ===== THE CARD ===== */}
        <div className="vcard-perspective">
          <div
            className={`vcard-flipper ${flipped ? "vcard-flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
            style={flipperHeight ? { height: flipperHeight } : undefined}
          >
            {/* ===== FRONT SIDE ===== */}
            <div className="vcard-face vcard-front" ref={frontRef}>
              {/* Premium border glow */}
              <div className="vcard-border-glow" />

              {/* Decorative top pattern */}
              <div className="vcard-top-pattern">
                <svg viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="vcardGrad1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="vcardGrad2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <path d="M0,0 L400,0 L400,80 Q350,120 200,90 Q50,60 0,100 Z" fill="url(#vcardGrad1)" />
                  <path d="M0,0 L400,0 L400,60 Q300,100 150,70 Q50,50 0,80 Z" fill="url(#vcardGrad2)" />
                </svg>

                {/* Animated accent lines */}
                <div className="vcard-accent-lines">
                  <span /><span /><span />
                </div>
              </div>

              {/* Logo & Company */}
              <div className="vcard-logo-section">
                <div className="vcard-logo-ring">
                  <div className="vcard-logo-inner">
                    <img src="/logo.png" alt="wheelsonhours Logo" />
                  </div>
                  <div className="vcard-logo-glow" />
                </div>
              </div>

              {/* Owner Info */}
              <div className="vcard-owner-info">
                <h1 className="vcard-name">Nilesh Kidiya</h1>
                <p className="vcard-role">Owner & Founder</p>
                <div className="vcard-company-badge">
                  <span className="vcard-company-dot" />
                  wheelsonhours
                </div>
              </div>

              {/* Tagline */}
              <div className="vcard-tagline">
                <CarIcon size={16} />
                <span>#1 Self-Drive Car Rental in Ahmedabad</span>
              </div>

              {/* Quick Contact Chips */}
              <div className="vcard-contact-chips">
                <a
                  href="tel:+918849849888"
                  className="vcard-chip vcard-chip-phone"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PhoneIcon size={16} />
                  <span>+91 884 984 9888</span>
                </a>
                <a
                  href="https://wa.me/918849849888?text=Hi!%20I%20saw%20your%20business%20card.%20I%20want%20to%20rent%20a%20car%20from%20wheelsonhours."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vcard-chip vcard-chip-whatsapp"
                  onClick={(e) => e.stopPropagation()}
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Rating */}
              <div className="vcard-rating">
                <div className="vcard-stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} size={14} />
                  ))}
                </div>
                <span>500+ Happy Rides</span>
              </div>

              {/* Flip hint */}
              <div className="vcard-flip-hint">
                <span>Tap to see fleet & details</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="17 1 21 5 17 9" />
                  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                  <polyline points="7 23 3 19 7 15" />
                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
              </div>
            </div>

            {/* ===== BACK SIDE ===== */}
            <div className="vcard-face vcard-back" ref={backRef}>
              <div className="vcard-border-glow" />

              {/* Back header */}
              <div className="vcard-back-header">
                <div className="vcard-back-logo">
                  <img src="/logo.png" alt="wheelsonhours" />
                  <span>wheelsonhours</span>
                </div>
                <div className="vcard-back-subtitle">Premium Fleet</div>
              </div>

              {/* Fleet showcase */}
              <div className="vcard-fleet">
                {[
                  { name: "Tata Altroz", price: "₹2,000", tag: "Best Value" },
                  { name: "Baleno", price: "₹2,400", tag: "Popular" },
                  { name: "Hyundai i20", price: "₹2,800", tag: "Sporty" },
                  { name: "Dzire", price: "₹2,600", tag: "Sedan" },
                  { name: "Tata Nexon", price: "₹3,000", tag: "SUV" },
                  { name: "Brezza", price: "₹3,000", tag: "SUV" },
                ].map((car, idx) => (
                  <div className="vcard-fleet-item" key={idx}>
                    <div className="vcard-fleet-name">
                      <span className="vcard-fleet-dot" />
                      {car.name}
                    </div>
                    <div className="vcard-fleet-meta">
                      <span className="vcard-fleet-tag">{car.tag}</span>
                      <span className="vcard-fleet-price">{car.price}<small>/day</small></span>
                    </div>
                  </div>
                ))}
              </div>

              {/* USPs */}
              <div className="vcard-usps">
                <div className="vcard-usp">🛡️ Fully Insured</div>
                <div className="vcard-usp">💰 No Hidden Charges</div>
                <div className="vcard-usp">🕐 24/7 Available</div>
                <div className="vcard-usp">🔑 Easy Pickup</div>
              </div>

              {/* Location */}
              <div className="vcard-location">
                <LocationIcon size={14} />
                <span>Stavan Ample, Devnagar Gam Road, Ahmedabad-382481</span>
              </div>

              {/* Flip hint */}
              <div className="vcard-flip-hint">
                <span>Tap to flip back</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="17 1 21 5 17 9" />
                  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                  <polyline points="7 23 3 19 7 15" />
                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ACTION BUTTONS ===== */}
        <div className="vcard-actions">
          <button className="vcard-action-btn vcard-action-save" onClick={handleSaveContact}>
            <DownloadIcon size={18} />
            <span>Save Contact</span>
          </button>
          <button className="vcard-action-btn vcard-action-share" onClick={shareCard}>
            <ShareIcon size={18} />
            <span>Share Card</span>
          </button>
          <a
            href="https://wa.me/918849849888?text=Hi!%20I%20saw%20your%20business%20card.%20I%20want%20to%20rent%20a%20car%20from%20wheelsonhours."
            target="_blank"
            rel="noopener noreferrer"
            className="vcard-action-btn vcard-action-whatsapp"
          >
            <WhatsAppIcon size={18} />
            <span>Book Now</span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="vcard-quick-links">
          <a href="tel:+918849849888" className="vcard-qlink">
            <PhoneIcon size={18} />
            <span>Call</span>
          </a>
          <a
            href="https://wa.me/918849849888"
            target="_blank"
            rel="noopener noreferrer"
            className="vcard-qlink"
          >
            <WhatsAppIcon size={18} />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://maps.google.com/?q=Stavan+Ample+Devnagar+Gam+Road+Ahmedabad"
            target="_blank"
            rel="noopener noreferrer"
            className="vcard-qlink"
          >
            <LocationIcon size={18} />
            <span>Directions</span>
          </a>
          <a href="/" className="vcard-qlink">
            <GlobeIcon size={18} />
            <span>Website</span>
          </a>
        </div>

        {/* Details Section */}
        <div className="vcard-details-section">
          <div className="vcard-detail-card">
            <div className="vcard-detail-icon"><ClockIcon size={22} /></div>
            <div>
              <h3>Working Hours</h3>
              <p>24/7 — Always Available</p>
              <p className="vcard-detail-sub">365 days a year, no holidays</p>
            </div>
          </div>
          <div className="vcard-detail-card">
            <div className="vcard-detail-icon"><LocationIcon size={22} /></div>
            <div>
              <h3>Pickup Location</h3>
              <p>Stavan Ample, Devnagar Gam Road</p>
              <p className="vcard-detail-sub">Ahmedabad, Gujarat - 382481</p>
            </div>
          </div>
          <div className="vcard-detail-card">
            <div className="vcard-detail-icon"><CarIcon size={22} /></div>
            <div>
              <h3>Fleet Size</h3>
              <p>8+ Premium Cars Available</p>
              <p className="vcard-detail-sub">Hatchbacks, Sedans & SUVs</p>
            </div>
          </div>
        </div>

        {/* Big CTA */}
        <a
          href="https://wa.me/918849849888?text=Hi!%20I%20saw%20your%20digital%20business%20card.%20I%20want%20to%20rent%20a%20car%20from%20wheelsonhours."
          target="_blank"
          rel="noopener noreferrer"
          className="vcard-big-cta"
        >
          <WhatsAppIcon size={24} />
          <div>
            <span className="vcard-big-cta-title">Book Your Ride Now</span>
            <span className="vcard-big-cta-sub">Instant booking via WhatsApp</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>

        {/* Footer */}
        <div className="vcard-footer">
          <p>© {new Date().getFullYear()} wheelsonhours. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a href="https://udaykjasani.vercel.app/" target="_blank" rel="noopener noreferrer">
              Uday K. Jasani
            </a>
          </p>
        </div>
      </div>

      {/* Toast notification */}
      {savedToast && (
        <div className="vcard-toast">
          ✅ Contact saved to your device!
        </div>
      )}
    </>
  );
}
