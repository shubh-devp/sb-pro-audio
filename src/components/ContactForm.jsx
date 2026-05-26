import { useState, useEffect, useRef } from "react";
import "./ContactForm.css";

const BADGES = [
  { icon: "🚚", text: "Pan India Delivery Available" },
  { icon: "🔧", text: "Installation & Setup Available" },
  { icon: "💬", text: "24/7 Customer Support" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const e = {};

    if (!form.name.trim()) {
      e.name = "Name is required.";
    }

    if (
      !form.email.trim() ||
      !/\S+@\S+\.\S+/.test(form.email)
    ) {
      e.email = "Valid email required.";
    }

    if (!form.phone.trim()) {
      e.phone = "Phone number is required.";
    }

    if (!form.message.trim()) {
      e.message = "Please describe your requirements.";
    }

    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    try {
      setLoading(true);

      const API_URL =
      import.meta.env.VITE_API_URL || "http://localhost:5000";

    const response = await fetch(`${API_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert(data.message || "Failed to send enquiry.");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact"
      id="contact"
      ref={sectionRef}
    >
      <div className="contact__inner">
        {/* Header */}
        <div className="contact__header contact-reveal-up">
          <div className="contact__eyebrow">
            Contact Us
          </div>

          <h2 className="contact__title">
            Get In Touch With SB PRO-AUDIO
          </h2>

          <p className="contact__subtitle">
            Looking for the best sound system
            manufacturer in Pune? Contact us today
            for professional sound systems, DJ
            speakers, amplifiers, subwoofers, and
            flight cases with superior sound
            performance.
          </p>
        </div>

        <div className="contact__body">
          {/* Form */}
          <div className="contact__form-col contact-reveal-left">
            {!submitted ? (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="contact__form-row">
                  {/* Name */}
                  <div
                    className={`contact__field${
                      errors.name
                        ? " contact__field--err"
                        : ""
                    }`}
                  >
                    <label className="contact__label">
                      Full Name
                    </label>

                    <input
                      className="contact__input"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />

                    {errors.name && (
                      <span className="contact__err-msg">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div
                    className={`contact__field${
                      errors.email
                        ? " contact__field--err"
                        : ""
                    }`}
                  >
                    <label className="contact__label">
                      Email Address
                    </label>

                    <input
                      className="contact__input"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <span className="contact__err-msg">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div
                  className={`contact__field${
                    errors.phone
                      ? " contact__field--err"
                      : ""
                  }`}
                >
                  <label className="contact__label">
                    Phone Number
                  </label>

                  <input
                    className="contact__input"
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />

                  {errors.phone && (
                    <span className="contact__err-msg">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div
                  className={`contact__field${
                    errors.message
                      ? " contact__field--err"
                      : ""
                  }`}
                >
                  <label className="contact__label">
                    Requirements
                  </label>

                  <textarea
                    className="contact__input contact__textarea"
                    name="message"
                    placeholder="Describe your sound system requirements, event type, venue size..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                  />

                  {errors.message && (
                    <span className="contact__err-msg">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="contact__submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Enquiry"}

                  {!loading && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M2 8l10 0M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </form>
            ) : (
              <div className="contact__success">
                <div className="contact__success-icon">
                  ✓
                </div>

                <h3 className="contact__success-title">
                  Message Sent!
                </h3>

                <p className="contact__success-msg">
                  Thank you for reaching out.
                  Our team will contact you
                  shortly at{" "}
                  <strong>{form.phone}</strong>.
                </p>

                <button
                  className="contact__success-reset"
                  onClick={() => {
                    setSubmitted(false);
                    resetForm();
                  }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="contact__info-col contact-reveal-right">
            <div className="contact__info-card">
              <div className="contact__info-section">
                <div className="contact__info-icon">
                  📍
                </div>

                <div>
                  <div className="contact__info-heading">
                    Office Address
                  </div>

                  <p className="contact__info-text">
                    Wadgaon Sheri, Subhadra
                    Trinity,
                    <br />
                    Office No. 5, Near Jain
                    Sthanak,
                    <br />
                    Pune – 411014
                  </p>
                </div>
              </div>

              <div className="contact__info-section">
                <div className="contact__info-icon">
                  📞
                </div>

                <div>
                  <div className="contact__info-heading">
                    Direct Call Lines
                  </div>

                  <div className="contact__info-links">
                    <a
                      href="tel:7057500369"
                      className="contact__info-link"
                    >
                      7057500369
                    </a>

                    <span className="contact__info-sep">
                      /
                    </span>

                    <a
                      href="tel:9822640732"
                      className="contact__info-link"
                    >
                      9822640732
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact__info-section">
                <div className="contact__info-icon">
                  ✉️
                </div>

                <div>
                  <div className="contact__info-heading">
                    Email
                  </div>

                  <a
                    href="mailto:info@sbproaudio.com"
                    className="contact__info-link"
                  >
                    info@sbproaudio.com
                  </a>
                </div>
              </div>

              <div className="contact__info-section">
                <div className="contact__info-icon">
                  🕐
                </div>

                <div>
                  <div className="contact__info-heading">
                    Working Hours
                  </div>

                  <p className="contact__info-text">
                    Monday – Friday: 9:00 AM –
                    7:00 PM
                    <br />
                    Saturday: 10:00 AM – 5:00 PM
                    <br />
                    <span className="contact__info-closed">
                      Sunday: Closed
                    </span>
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="contact__badges">
                {BADGES.map((b) => (
                  <div
                    key={b.text}
                    className="contact__badge"
                  >
                    <span className="contact__badge-icon">
                      {b.icon}
                    </span>

                    <span className="contact__badge-text">
                      {b.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}