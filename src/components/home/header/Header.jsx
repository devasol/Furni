import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
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
      {/* Fixed header that appears after scrolling */}
      <header
        className={`${styles.container} ${isFixed ? styles.fixedHeader : ""}`}
      >
        <div className={styles.logoNameCont}>
          <div className={styles.box}></div>
          <h3 className={styles.logoName}>Furni</h3>
        </div>

        <div
          className={`${styles.navContainer} ${
            isMenuOpen ? styles.navOpen : ""
          }`}
        >
          <div className={styles.navLinks}>
            <NavLink to="/" onClick={() => isMobile && setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              About us
            </NavLink>
            <NavLink to="#" onClick={() => isMobile && setIsMenuOpen(false)}>
              Services
            </NavLink>
            <NavLink to="#" onClick={() => isMobile && setIsMenuOpen(false)}>
              Blog
            </NavLink>
            <NavLink to="#" onClick={() => isMobile && setIsMenuOpen(false)}>
              Contact us
            </NavLink>
          </div>
          <div className={styles.loginCart}>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span>
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
