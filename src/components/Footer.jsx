import "./Footer.css";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Top grid */}
        <div className="footer__grid">
          {/* Brand block */}
          <div className="footer__brand-block">
            <a href="#home" className="footer__brand">
              <span className="footer__brand-sb">SB</span>
              <span className="footer__brand-rest"> PRO-AUDIO</span>
            </a>
            <p className="footer__brand-desc">
              Leading sound system manufacturing company in Pune delivering
              high-performance professional audio solutions for events, DJs,
              and commercial installations.
            </p>
            <div className="footer__contacts">
              <a href="tel:7057500369" className="footer__contact-link">7057500369 / 9822640732</a>
              <a href="mailto:info@sbproaudio.com" className="footer__contact-link">info@sbproaudio.com</a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Quick Links</h4>
            <ul className="footer__links">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer__link">
                    <span className="footer__link-arrow">›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Office Address</h4>
            <p className="footer__address">
              Wadgaon Sheri, Subhadra Trinity,<br />
              Office No. 5, Near Jain Sthanak,<br />
              Pune – 411014
            </p>
            <h4 className="footer__col-heading" style={{ marginTop: "24px" }}>Working Hours</h4>
            <p className="footer__address">
              Mon – Fri: 9:00 AM – 7:00 PM<br />
              Sat: 10:00 AM – 5:00 PM<br />
              Sun: Closed
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} SB PRO-AUDIO. All rights reserved. | Professional Audio Systems | Pune, India.
          </p>
          <a href="#home" className="footer__back-top" aria-label="Back to top">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
