import React, { useState, useEffect, useRef } from "react";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sectionRefs = {
    header: useRef(null),
    form: useRef(null),
    info: useRef(null),
  };

  useEffect(() => {
    // Animation on component mount
    const timer = setTimeout(() => {
      if (sectionRefs.header.current) {
        sectionRefs.header.current.classList.add(styles.animateIn);
      }
    }, 100);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      clearTimeout(timer);
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className={styles.pageContainer}>
      <Header />

      <div className={styles.container}>
        {/* Animated background elements */}
        <div className={styles.backgroundShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>

        <section
          ref={sectionRefs.header}
          className={`${styles.hero} ${styles.hidden}`}
        >
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you. Our team is always ready to assist with
            your furniture needs.
          </p>
        </section>

        <div className={styles.content}>
          <section
            ref={sectionRefs.form}
            className={`${styles.formSection} ${styles.hidden}`}
          >
            <h2>Send us a message</h2>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <svg
                  className={styles.checkmark}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className={styles.checkmarkCircle}
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className={styles.checkmarkCheck}
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <label className={styles.label}>Your Name</label>
                  <div className={styles.inputUnderline}></div>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <label className={styles.label}>Email Address</label>
                  <div className={styles.inputUnderline}></div>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <label className={styles.label}>Subject</label>
                  <div className={styles.inputUnderline}></div>
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${styles.input} ${styles.textarea}`}
                    rows="5"
                  ></textarea>
                  <label className={styles.label}>Your Message</label>
                  <div className={styles.inputUnderline}></div>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className={styles.spinner}></div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </section>

          <section
            ref={sectionRefs.info}
            className={`${styles.infoSection} ${styles.hidden}`}
          >
            <h2>Contact Information</h2>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Visit Our Showroom</h3>
                <p>
                  123 Furniture Avenue, Design District
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Email Us</h3>
                <p>
                  info@furni.com
                  <br />
                  support@furni.com
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Call Us</h3>
                <p>
                  +1 (555) 123-4567
                  <br />
                  +1 (555) 987-6543
                </p>
              </div>
            </div>

            <div className={styles.hours}>
              <h3>Business Hours</h3>
              <p>Monday-Friday: 9am - 8pm</p>
              <p>Saturday: 10am - 6pm</p>
              <p>Sunday: 11am - 5pm</p>
            </div>
          </section>
        </div>

        <div className={styles.mapSection}>
          <div className={styles.mapPlaceholder}>
            <h3>Visit Our Showroom</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1910069488276!2d28.788365247804528!3d41.064817294805366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5d87f99eff1%3A0x173386fc0c00aaf1!2sFurni%20furniture!5e0!3m2!1sen!2set!4v1757406557921!5m2!1sen!2set"
              width="1000"
              height="450"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
