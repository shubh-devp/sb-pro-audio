
// import { useEffect, useRef } from "react";
// import "./Products.css";

// const PRODUCTS = [
//   {
//     id: 1,
//     series: "Premium Series",
//     title: "BRAINCHORD",
//     desc: "Professional line array speakers with exceptional sound dispersion for large venues and concerts.",
//     features: ["1200W RMS Power", " 135dB Max SPL", "50Hz-20kHz Frequency Response", "Vocal clarity optimized"],
//     imgSrc: "./public/assets/product/brainchord.jpg",
//     imgAlt: "BRAINCHORD",
//     badge: "Best Seller",
//   },
//   {
//     id: 2,
//     series: "DJ Series",
//     title: "BRONCO",
//     desc: "High-power DJ speakers with deep bass for clubs, parties, and professional DJ performances.",
//     features: ["800W RMS Power", "130dB Max SPL", " 45Hz-20kHz Frequency Response", "Installation ready"],
//     imgSrc: "./public/assets/product/bronco.jpg",
//     imgAlt: "BRONCO",
//     badge: "Pro Grade",
//   },
//   {
//     id: 3,
//     series: "Professional Series",
//     title: "Dexter X1",
//     desc: "Digital signal processor with advanced audio processing capabilities for professional sound optimization.",
//     features: [" 24-bit DSP Processing", "4 Input / 8 Output", "USB / Network Control", "Tour-grade protection"],
//     imgSrc: "./public/assets/product/dexter.jpg",
//     imgAlt: "SB PRO-AUDIO Professional Power Amplifiers and Flight Cases",
//     badge: "Tour Ready",
//   },
//   {
//     id: 4,
//     series: "Flagship Series",
//     title: "THE MEG 2.0",
//     desc: "High-efficiency professional power amplifier delivering clean, distortion-free power for all speaker systems.",
//     features: [" 2000W RMS Power", " Class D Technology", " Bridgeable Mode"],
//     imgSrc: "./public/assets/product/meg.jpg",
//     imgAlt: "SB PRO-AUDIO Professional Power Amplifiers and Flight Cases",
//     badge: "Tour Ready",
//   },
//   {
//     id: 5,
//     series: "Flagship Series",
//     title: "SEISMIC SUBS",
//     desc: "Powerful subwoofers that deliver deep, punchy bass for an immersive audio experience.",
//     features: [" 21' Driver", " 140dB Max SPL", " 25Hz-150Hz Response"],
//     imgSrc: "./public/assets/product/subs.jpg",
//     imgAlt: "SB PRO-AUDIO Professional Power Amplifiers and Flight Cases",
//     badge: "Tour Ready",
//   },
// ];

// export default function Products() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("is-revealed");
//         }
//       },
//       { 
//         threshold: 0.05, // Triggers quickly as the section boundary enters the screen view
//         rootMargin: "0px 0px -50px 0px"
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="products" id="products" ref={sectionRef}>
//       <div className="products__bg-strip" />
//       <div className="products__inner">
        
//         {/* Split Reveal Header block */}
//         <div className="products__header">
//           <div className="products__eyebrow products-reveal-down">Our Products</div>
//           <h2 className="products__title products-reveal-up">
//             Advanced Sound Systems &amp;{" "}
//             <span className="products__title-accent">Pro Audio Equipment</span>
//           </h2>
//         </div>

//         {/* Alternating Slide Grid */}
//         <div className="products__grid">
//           {PRODUCTS.map((p, index) => {
//             // Assign custom attributes to separate odd/even directional slide behaviors
//             const isEven = index % 2 === 0;
//             const revealClass = isEven ? "products-reveal-left" : "products-reveal-right";
            
//             return (
//               <div 
//                 key={p.id} 
//                 className={`products__card ${revealClass}`}
//                 style={{ transitionDelay: `${0.1 + (index * 0.1)}s` }}
//               >
//                 <div className="products__card-img-wrap">
//                   <img
//                     src={p.imgSrc}
//                     alt={p.imgAlt}
//                     className="products__card-img"
//                   />
//                   <div className="products__card-overlay">
//                     <span className="products__card-badge">{p.badge}</span>
//                   </div>
//                 </div>

//                 <div className="products__card-body">
//                   <div className="products__card-series">{p.series}</div>
//                   <h3 className="products__card-title">{p.title}</h3>
//                   <p className="products__card-desc">{p.desc}</p>

//                   <ul className="products__card-features">
//                     {p.features.map((f) => (
//                       <li key={f} className="products__card-feature">
//                         <span className="products__feature-dot" />
//                         {f}
//                       </li>
//                     ))}
//                   </ul>

//                   <a href="#contact" className="products__card-cta">
//                     Get Quote
//                   </a>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useRef } from "react";
import "./Products.css";

const PRODUCTS = [
  {
    id: 1,
    series: "Premium Series",
    title: "BRAINCHORD",
    desc: "Professional line array speakers engineered for massive venues and crystal-clear concert audio.",
    features: [
      "1200W RMS",
      "135dB SPL",
      "50Hz–20kHz",
      "Vocal Clarity",
    ],
    imgSrc: "./assets/product/brainchord.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    series: "DJ Series",
    title: "BRONCO",
    desc: "High-power DJ speaker system delivering aggressive bass and club-grade performance.",
    features: [
      "800W RMS",
      "130dB SPL",
      "Deep Bass",
      "Club Ready",
    ],
    imgSrc: "./assets/product/bronco.jpg",
    badge: "Pro Grade",
  },
  {
    id: 3,
    series: "Professional Series",
    title: "Dexter X1",
    desc: "Advanced digital signal processor for precision audio tuning and system optimization.",
    features: [
      "24-bit DSP",
      "4x8 Output",
      "USB Control",
      "Tour Safe",
    ],
    imgSrc: "./assets/product/dexter.jpg",
    badge: "Studio",
  },
  {
    id: 4,
    series: "Flagship Series",
    title: "THE MEG 2.0",
    desc: "Ultra-efficient professional amplifier with powerful clean output and thermal stability.",
    features: [
      "2000W RMS",
      "Class D",
      "Bridgeable",
      "High Efficiency",
    ],
    imgSrc: "./assets/product/meg.jpg",
    badge: "Flagship",
  },
  {
    id: 5,
    series: "Bass Series",
    title: "SEISMIC SUBS",
    desc: "Massive subwoofer systems built for extreme low-end impact and immersive bass response.",
    features: [
      "21” Driver",
      "140dB SPL",
      "25Hz Response",
      "Earth Shaking",
    ],
    imgSrc: "./assets/product/subs.jpg",
    badge: "Extreme Bass",
  },
];

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      },
      {
        threshold: 0.08,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".products__card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        card.style.transform = `
          perspective(1400px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-10px)
        `;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `
          perspective(1400px)
          rotateX(0deg)
          rotateY(0deg)
          translateY(0px)
        `;
      });
    });
  }, []);

  return (
    <section className="products" id="products" ref={sectionRef}>

      <div className="products__noise" />
      <div className="products__glow products__glow--1" />
      <div className="products__glow products__glow--2" />

      <div className="products__inner">

        <div className="products__header products-reveal">
          <div className="products__eyebrow">
            Premium Audio Hardware
          </div>

          <h2 className="products__title">
            Engineered For
            <span> Powerful Sound</span>
          </h2>

          <p className="products__subtitle">
            High-performance speakers, amplifiers, processors,
            and bass systems designed for concerts, DJs,
            clubs, and professional audio environments.
          </p>
        </div>

        <div className="products__grid">
          {PRODUCTS.map((p, index) => (
            <div
              key={p.id}
              className="products__card products-reveal"
              style={{
                transitionDelay: `${index * 0.08}s`,
              }}
            >

              <div className="products__spotlight" />

              <div className="products__image-wrap">

                <img
                  src={p.imgSrc}
                  alt={p.title}
                  className="products__image"
                />

                <div className="products__image-overlay" />

                <div className="products__shine" />

                <div className="products__badge">
                  {p.badge}
                </div>

              </div>

              <div className="products__content">

                <span className="products__series">
                  {p.series}
                </span>

                <h3 className="products__card-title">
                  {p.title}
                </h3>

                <p className="products__desc">
                  {p.desc}
                </p>

                <div className="products__specs">
                  {p.features.map((f) => (
                    <div key={f} className="products__spec">
                      {f}
                    </div>
                  ))}
                </div>

                <a href="#contact" className="products__cta">
                  Get Quote

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}