
import { useEffect, useRef } from "react";
import "./Features.css";

const FEATURES = [
  {
    icon: "🏭",
    title: "Manufacturing Quality Products",
    desc:
      "Premium-grade manufacturing with strict quality control standards for professional audio equipment.",
  },
  {
    icon: "⚡",
    title: "Powerful Bass & Clear Sound",
    desc:
      "Engineered for deep bass response and crystal-clear audio output for professional applications.",
  },
  {
    icon: "🎧",
    title: "Professional Audio Expertise",
    desc:
      "Years of industry experience and technical audio expertise in sound system design.",
  },
  {
    icon: "🛡️",
    title: "Durable & Rugged Build",
    desc:
      "Built to last with rugged construction for professional touring and installation use.",
  },
  {
    icon: "🎚️",
    title: "Customized Solutions",
    desc:
      "Tailored audio solutions for your specific venue, event, or installation requirements.",
  },
  {
    icon: "₹",
    title: "Affordable Pricing",
    desc:
      "Competitive prices without compromising on quality or performance standards.",
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="features__inner">
        {/* Header */}
        <div className="features__header reveal-up">
          <div className="features__eyebrow">Why Choose SB PRO-AUDIO</div>

          <h2 className="features__title">
            Built For <span>Performance</span> & Reliability
          </h2>

          <p className="features__subtitle">
            Delivering professional-grade sound systems with exceptional clarity,
            rugged durability, and trusted audio engineering expertise across India.
          </p>
        </div>

        {/* Cards */}
        <div className="features__grid">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="features__card reveal-up"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="features__icon-wrap">
                <span className="features__icon">{feature.icon}</span>
              </div>

              <h3 className="features__card-title">{feature.title}</h3>

              <p className="features__card-desc">{feature.desc}</p>

              <div className="features__card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




