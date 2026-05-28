import { useEffect, useRef } from "react";
import "./About.css";

const METRICS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    label: "15+ Years of Expertise",
    sub: "Trusted since day one"
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
    ),
    label: "Professional Audio Expertise",
    sub: "Industry-grade knowledge"
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 12-8.373 8.373a1 1 0 1 1-1.414-1.414L13.586 10.586"/>
        <path d="m18 4.75 3.25 3.25c.3.3.3.75 0 1.05L14.5 15.8c-.3.3-.75.3-1.05 0L10.2 12.55c-.3-.3-.3-.75 0-1.05L16.95 4.75c.3-.3.75-.3 1.05 0z"/>
      </svg>
    ),
    label: "Durable & Rugged Build Quality",
    sub: "Built for the road"
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14"/>
        <line x1="4" y1="10" x2="4" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12" y2="3"/>
        <line x1="20" y1="21" x2="20" y2="16"/>
        <line x1="20" y1="12" x2="20" y2="3"/>
        <line x1="2" y1="14" x2="6" y2="14"/>
        <line x1="10" y1="8" x2="14" y2="8"/>
        <line x1="18" y1="16" x2="22" y2="16"/>
      </svg>
    ),
    label: "Customized Audio Solutions",
    sub: "Tailored to every need"
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      },
      {
        threshold: 0.1, // Slightly lowered for faster triggering on smaller mobile viewports
        rootMargin: "0px 0px -20px 0px"
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={containerRef}>
      <div className="about__inner">

        {/* Images Wrapper */}
        <div className="about__images scroll-reveal-left">
          <div className="about__img-primary">
            <img
              src="https://sbpro-audio.com/img/about-2.png"
              alt="SB PRO-AUDIO Speaker Manufacturing"
            />
          </div>

          <div className="about__img-secondary">
            <img
              src="https://sbpro-audio.com/img/about-3.jpg"
              alt="Professional Audio Equipment"
            />
          </div>

          <div className="about__img-badge">
            <span className="about__img-badge-num">15+</span>
            <span className="about__img-badge-text">
              Years of <br />
              Excellence
            </span>
          </div>
        </div>

        {/* Content Box */}
        <div className="about__content">
          <div className="about__eyebrow scroll-reveal-up" style={{ "--delay": "0.1s" }}>
            About SB PRO-AUDIO
          </div>

<h2 className="about__title scroll-reveal-up" style={{ "--delay": "0.2s" }}>
  <span className="about__title-word">
    Quality <span className="about__title-sep">|</span>
  </span>
  <span className="about__title-word">
    Commitment <span className="about__title-sep">|</span>
  </span>
  <span className="about__title-accent">Innovation</span>
</h2>

          <p className="about__desc scroll-reveal-up" style={{ "--delay": "0.3s" }}>
            SB PRO-AUDIO is committed to delivering premium-grade professional
            audio systems with innovation, durability, and unmatched sound clarity.
            Inspired by modern pro-audio industry standards, we manufacture
            high-quality sound equipment designed for professional use across India.
          </p>

          <p className="about__desc scroll-reveal-up" style={{ "--delay": "0.4s" }}>
            At SB PRO-AUDIO, we believe where performance meets perfection.
            Our sound systems are engineered to deliver unmatched power,
            versatility, and extraordinary sound clarity.
          </p>

          {/* Metrics Grid */}
          <div className="about__metrics">
            {METRICS.map((m, index) => (
              <div
                key={index}
                className="about__metric scroll-reveal-up"
                style={{ "--delay": `${0.5 + index * 0.08}s` }}
              >
                <span className="about__metric-icon">{m.icon}</span>
                <div>
                  <div className="about__metric-label">{m.label}</div>
                  <div className="about__metric-sub">{m.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Call-to-Actions */}
          <div className="about__footer scroll-reveal-up" style={{ "--delay": "0.8s" }}>
            <a href="tel:7057500369" className="about__call">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 1.5C3 1.5 2 3.5 2.5 5.5C3 7.5 5 9.5 7 11C9 12.5 11 14 13 14.5C15 15 14.5 13 14.5 13L12.5 11.5C12.5 11.5 11.5 12 11 11.5C10 10.5 9 9 8 8C7 7 5.5 6 5 5C4.5 4 5 3.5 5 3.5L3 1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span>7057500369 / 9822640732</span>
            </a>

            <div className="hero__actions">
              <a href="#products" className="hero__btn--primary">
                Explore Products
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}