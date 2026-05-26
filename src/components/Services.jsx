// import { useEffect, useRef } from "react";
// import "./Services.css";

// const SERVICES = [
//   {
//     id: 1,
//     title: "Professional Sound Systems",
//     desc: "High-quality sound systems for concerts, events, weddings, clubs, and auditoriums with crystal-clear audio output.",
//     imgSrc: "./public/assets/service/soundSystem.jpg",
//     imgAlt: "Professional Sound Systems by SB PRO-AUDIO",
//     tag: "Events & Live",
//   },
//   {
//     id: 2,
//     title: "DJ Audio Setup",
//     desc: "Complete DJ sound setup solutions with powerful speakers and amplifiers for professional DJ performances.",
//     imgSrc: "./public/assets/service/Djsetup.jpg",
//     imgAlt: "DJ Audio Setup Solutions Pune",
//     tag: "DJ & Clubs",
//   },
//   {
//     id: 3,
//     title: "Speaker Manufacturing",
//     desc: "Premium speaker cabinets designed for deep bass and crystal-clear harmonics with durable build quality.",
//     imgSrc: "./public/assets/service/manufacturing.jpg",
//     imgAlt: "Speaker Cabinet Manufacturing Pune",
//     tag: "Manufacturing",
//   },
//   {
//     id: 4,
//     title: "Flight case Manufacturing",
//     desc: "Heavy-duty flight cases for safe transportation and protection of audio equipment during tours, events, and travel.",
//     imgSrc: "./public/assets/service/flightcase.jpg",
//     imgAlt: "Speaker Cabinet Manufacturing Pune",
//     tag: "Concert",
//   },
//   {
//     id: 5,
//     title: "Home audio solutions",
//     desc: "Advanced home theatre and home audio systems with immersive sound experience for movies, music, and entertainment.",
//     imgSrc: "./public/assets/service/home.jpg",
//     imgAlt: "Speaker Cabinet Manufacturing Pune",
//     tag: "Home",
//   },
//   {
//     id: 6,
//     title: "Car Audio Systems",
//     desc: "Premium car audio accessories and sound enhancement solutions for an exceptional driving experience with crystal-clear sound.",
//     imgSrc: "./public/assets/service/car.jpg",
//     imgAlt: "Speaker Cabinet Manufacturing Pune",
//     tag: "vehicles",
//   },
// ];

// export default function Services() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("is-revealed");
//         }
//       },
//       { 
//         threshold: 0.1, // Triggers early as soon as the top header enters screen space
//         rootMargin: "0px 0px -40px 0px"
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="services" id="services" ref={sectionRef}>
//       <div className="services__inner">
        
//         {/* Header Elements (Reveal upward together) */}
//         <div className="services__header services-reveal-up">
//           <div className="services__eyebrow">Our Services</div>
//           <h2 className="services__title">Professional Audio Solutions</h2>
//           <p className="services__subtitle">
//             We provide comprehensive audio solutions for live events, studios, installations,
//             and entertainment venues across India.
//           </p>
//         </div>

//         {/* Grid Cards (Staggered cascading reveal) */}
//         <div className="services__grid">
//           {SERVICES.map((s, index) => (
//             <div 
//               key={s.id} 
//               className="services__card services-reveal-card"
//               style={{ transitionDelay: `${0.15 + (index % 3) * 0.12}s` }} 
//               // (index % 3) keeps row elements triggering beautifully side-by-side on grids
//             >
//               <div className="services__card-img-wrap">
//                 <img
//                   src={s.imgSrc}
//                   alt={s.imgAlt}
//                   className="services__card-img"
//                 />
//                 <span className="services__card-tag">{s.tag}</span>
//               </div>

//               <div className="services__card-body">
//                 <span className="services__card-num">0{s.id}</span>
//                 <h3 className="services__card-title">{s.title}</h3>
//                 <p className="services__card-desc">{s.desc}</p>
//                 <a href="#contact" className="services__card-link">
//                   Enquire Now
//                   <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
//                     <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef } from "react";
import "./Services.css";

const SERVICES = [
  {
    id: 1,
    title: "Professional Sound Systems",
    desc: "High-quality sound systems for concerts, events, weddings, clubs, and auditoriums with crystal-clear audio output.",
    imgSrc: "./assets/service/soundSystem.jpg",
    tag: "Events & Live",
  },
  {
    id: 2,
    title: "DJ Audio Setup",
    desc: "Complete DJ sound setup solutions with powerful speakers and amplifiers for professional DJ performances.",
    imgSrc: "./public/assets/service/Djsetup.jpg",
    tag: "DJ & Clubs",
  },
  {
    id: 3,
    title: "Speaker Manufacturing",
    desc: "Premium speaker cabinets designed for deep bass and crystal-clear harmonics.",
    imgSrc: "./public/assets/service/manufacturing.jpg",
    tag: "Manufacturing",
  },
  {
    id: 4,
    title: "Flight Case Manufacturing",
    desc: "Heavy-duty flight cases for safe transportation and protection of equipment.",
    imgSrc: "./public/assets/service/flightcase.jpg",
    tag: "Concert",
  },
  {
    id: 5,
    title: "Home Audio Solutions",
    desc: "Immersive home theatre and home audio systems with cinematic sound experience.",
    imgSrc: "./public/assets/service/home.jpg",
    tag: "Home",
  },
  {
    id: 6,
    title: "Car Audio Systems",
    desc: "Premium car audio accessories and sound enhancement solutions.",
    imgSrc: "./public/assets/service/car.jpg",
    tag: "Vehicles",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".services__card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        card.style.transform = `
          perspective(1200px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-10px)
        `;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `
          perspective(1200px)
          rotateX(0deg)
          rotateY(0deg)
          translateY(0px)
        `;
      });
    });
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="services__noise" />

      <div className="services__glow services__glow--1" />
      <div className="services__glow services__glow--2" />

      <div className="services__inner">

        <div className="services__header services-reveal">
          <div className="services__eyebrow">
            Professional Audio Excellence
          </div>

          <h2 className="services__title">
            Premium Audio
            <span> Solutions</span>
          </h2>

          <p className="services__subtitle">
            Engineered for concerts, DJs, auditoriums, luxury installations,
            and immersive sound experiences across India.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, index) => (
            <div
              key={s.id}
              className="services__card services-reveal"
              style={{
                transitionDelay: `${index * 0.08}s`,
              }}
            >
              <div className="services__spotlight" />

              <div className="services__img-wrap">
                <img
                  src={s.imgSrc}
                  alt={s.title}
                  className="services__img"
                />

                <div className="services__overlay" />

                <div className="services__tag">
                  {s.tag}
                </div>
              </div>

              <div className="services__content">
                <span className="services__number">
                  0{s.id}
                </span>

                <h3 className="services__card-title">
                  {s.title}
                </h3>

                <p className="services__desc">
                  {s.desc}
                </p>

                <a href="#contact" className="services__link">
                  Enquire Now

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