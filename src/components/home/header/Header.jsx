import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/'; // Assuming home page is at root path
  
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      // Get the height of the landing page (first viewport)
      const landingPageHeight = window.innerHeight;

      // Check if scrolled past the landing page
      if (window.scrollY > landingPageHeight * 0.8) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Initial checks
    handleResize();

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Placeholder to reserve space when header becomes fixed */}
      {isFixed && <div style={{ height: '58px' }}></div>} {/* Approximate header height */}
      
      {/* Fixed header that appears after scrolling */}
      <header
        className={`${styles.container} ${isLandingPage && !isFixed ? styles.landingHeader : ""} ${isFixed ? styles.scrolledHeader : ""}`}
      >
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div className={styles.logoNameCont}>
            <div className={styles.box}></div>

            <h3 className={styles.logoName}>Furni</h3>
          </div>
        </NavLink>

        <div
          className={`${styles.navContainer} ${
            isMenuOpen ? styles.navOpen : ""
          }`}
        >
          <div className={styles.navLinks}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              About us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              Contact us
            </NavLink>
          </div>
          <div className={styles.loginCart}>
            <NavLink to="/login" className={styles.iconLink}>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
            </NavLink>

            <span className={styles.iconLink}>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </div>
        </div>

        {/* Mobile menu toggle button */}
        {isMobile && (
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        )}

        {/* Mobile menu overlay */}
        {isMobile && isMenuOpen && (
          <div
            className={styles.mobileOverlay}
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </header>
    </>
  );
}
