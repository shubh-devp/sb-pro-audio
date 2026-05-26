import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "About", "Services","Features", "Products", "Contact"];

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          <span className="navbar__brand-sb">SB</span>
          <span className="navbar__brand-rest"> PRO-AUDIO</span>
        </a>

        <nav className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
            Get Quote
          </a>
        </nav>

        <button
          className={`navbar__burger${menuOpen ? " navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
