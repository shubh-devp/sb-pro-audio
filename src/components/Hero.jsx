

import { useEffect, useRef } from "react";
import "./Hero.css";


export default function Hero() {
  const heroRef = useRef(null);
  const gradientRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = hero.getBoundingClientRect();
      
      // Calculate mouse position relative to the hero section (-0.5 to 0.5)
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      // Subtly shift background gradient
      if (gradientRef.current) {
        gradientRef.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      }

      // Subtly shift audio wave in the opposite direction
      if (waveRef.current) {
        waveRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
      }
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Background Media & Processing Layers */}
      <div className="hero__bg-noise" />
      
      {/* Cinematic Background Video Element */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero__bg-video"
      >
        <source src="../../public/assets/heroSection/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dimmer Mask Layer to isolate text contrast */}
      <div className="hero__bg-video-overlay" />

      {/* Interactive mouse track gradient layer */}
      <div className="hero__bg-gradient" ref={gradientRef} />

      {/* Decorative grid lines */}
      <div className="hero__grid-lines" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="hero__grid-line" />
        ))}
      </div>

      <div className="hero__inner">
        <div className="hero__tag">
          <span className="hero__tag-dot" />
          Professional Sound Manufacturer — Pune, India
        </div>

        <h1 className="hero__title">
          Premium Sound<br />
          <span className="hero__title-accent">System Manufacturing</span>
        </h1>

        <p className="hero__subtitle">Powerful Performance &amp; Crystal Clear Sound</p>

        <p className="hero__desc">
          SB PRO-AUDIO delivers high-performance professional audio solutions for events, DJs,
          live concerts, auditoriums, clubs, and commercial installations. Engineered for
          unmatched sound clarity.
        </p>

        <div className="hero__actions">
          <a href="#products" className="hero__btn hero__btn--primary">
            Explore Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="tel:7057500369" className="hero__btn hero__btn--call">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 1.5C3 1.5 2 3.5 2.5 5.5C3 7.5 5 9.5 7 11C9 12.5 11 14 13 14.5C15 15 14.5 13 14.5 13L12.5 11.5C12.5 11.5 11.5 12 11 11.5C10 10.5 9 9 8 8C7 7 5.5 6 5 5C4.5 4 5 3.5 5 3.5L3 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            Call Now: 7057500369
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">15<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">Pan</span>
            <span className="hero__stat-label">India Delivery</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">24/7</span>
            <span className="hero__stat-label">Customer Support</span>
          </div>
        </div>
      </div>

      {/* Decorative audio waveform */}
      <div className="hero__wave" aria-hidden="true" ref={waveRef}>
        {[7,9,5,12,5, 8, 12, 9, 14, 10, 7, 13, 6, 11, 8, 5, 9, 4, 7, 10, 6, 3, 8, 12, 9, 4, 10, 7, 1, 6,3,14,2,7,5,5,2,11,8].map((h, i) => (
          <div
            key={i}
            className="hero__wave-bar"
            style={{
              height: `${h * 15}px`,
              animationDelay: `${i * 0.08}s`,
              animationDuration: `${0.8 + (i % 3) * 0.3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}