import Link from "next/link";

const seoPages = [
  { href: "/rent-a-car-in-ahmedabad", label: "Rent a Car in Ahmedabad" },
  { href: "/self-drive-car-rental-ahmedabad", label: "Self Drive Car Rental" },
  { href: "/cheap-car-rental-ahmedabad", label: "Cheap Car Rental" },
  { href: "/baleno-on-rent-in-ahmedabad", label: "Baleno on Rent" },
  { href: "/altroz-on-rent-in-ahmedabad", label: "Altroz on Rent" },
  { href: "/car-hire-ahmedabad-airport", label: "Airport Car Hire" },
  { href: "/outstation-car-rental-ahmedabad", label: "Outstation Car Rental" },
  { href: "/wedding-car-rental-ahmedabad", label: "Wedding Car Rental" },
  { href: "/car-rental-ahmedabad-price", label: "Car Rental Prices" },
  { href: "/monthly-car-rental-ahmedabad", label: "Monthly Car Rental" },
  { href: "/i20-on-rent-in-ahmedabad", label: "i20 on Rent" },
  { href: "/dzire-on-rent-in-ahmedabad", label: "Dzire on Rent" },
  { href: "/nexon-on-rent-in-ahmedabad", label: "Nexon on Rent" },
  { href: "/brezza-on-rent-in-ahmedabad", label: "Brezza on Rent" },
];

export function SeoNav() {
  return (
    <nav className="seo-nav" aria-label="Main navigation">
      <div className="container seo-nav-inner">
        <Link href="/" className="navbar-logo">
          <img src="/logo.png" alt="wheelsonhours Logo" />
          <span className="navbar-logo-text">wheelsonhours</span>
        </Link>
        <a
          href="https://wa.me/918849849888?text=Hi!%20I%20want%20to%20rent%20a%20car%20from%20wheelsonhours."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{ padding: "10px 20px", fontSize: "0.85rem" }}
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}

export function SeoFooter({ currentPath }: { currentPath: string }) {
  return (
    <footer className="footer seo-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/logo.png" alt="wheelsonhours" />
            <span>wheelsonhours</span>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a href="tel:+918849849888" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
              Call Now
            </a>
            <a
              href="https://wa.me/918849849888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "8px 16px", fontSize: "0.85rem" }}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Internal links grid for SEO */}
        <div className="footer-seo-links">
          <h4>Car Rental Services in Ahmedabad</h4>
          <div className="footer-links-grid">
            {seoPages
              .filter((p) => p.href !== currentPath)
              .map((page) => (
                <Link key={page.href} href={page.href}>
                  {page.label}
                </Link>
              ))}
            <Link href="/">Home</Link>
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
  );
}

export { seoPages };
