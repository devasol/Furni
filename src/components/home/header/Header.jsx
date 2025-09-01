import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.container}>
      <div className={styles.logoNameCont}>
        <div className={styles.box}></div>
        <h3 className={styles.logoName}>Furni</h3>
      </div>

      <div
        className={`${styles.navContainer} ${isMenuOpen ? styles.navOpen : ""}`}
      >
        <div className={styles.navLinks}>
          <a href="#" onClick={() => isMobile && setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#" onClick={() => isMobile && setIsMenuOpen(false)}>
            About us
          </a>
          <a href="#" onClick={() => isMobile && setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#" onClick={() => isMobile && setIsMenuOpen(false)}>
            Blog
          </a>
          <a href="#" onClick={() => isMobile && setIsMenuOpen(false)}>
            Contact us
          </a>
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
  );
}
