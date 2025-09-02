import { useState, useEffect, useRef } from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button when user scrolls down
      setShowScrollTop(window.scrollY > 300);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      className={`${styles.footer} ${isVisible ? styles.visible : ""}`}
      ref={footerRef}
    >
      {/* Back to top button - Now fixed at bottom right */}
      <button
        className={`${styles.scrollTop} ${showScrollTop ? styles.visible : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

      {/* Rest of the footer content remains the same */}
      <div className={styles.footerContent}>
        {/* Newsletter Section */}
        <div className={styles.newsletter}>
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for exclusive offers and updates</p>
          <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className={subscribed ? styles.subscribed : ""}
              >
                {subscribed ? "Thank You!" : "Subscribe"}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Links */}
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <div className={styles.logoBox}></div>
              <span className={styles.logoText}>Furni</span>
            </div>
            <p className={styles.companyDescription}>
              We create beautiful and functional furniture that transforms your
              living spaces into homes.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" aria-label="Pinterest">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>123 Furniture Street, Design City, DC 12345</span>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhone} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>info@furni.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>
            &copy; {new Date().getFullYear()} Furni. Made with{" "}
            <FontAwesomeIcon icon={faHeart} /> by Dawit S.
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
