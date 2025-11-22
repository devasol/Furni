import React from "react";
import styles from "../AboutUs.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={`${styles.heroTitle} ${styles.animateOnScroll}`}>
          Design Your <span className={styles.highlight}>Dream Space</span>
        </h1>
        <p className={`${styles.heroSubtitle} ${styles.animateOnScroll}`}>
          Where craftsmanship meets contemporary design to create furniture that
          tells your story
        </p>
        <div className={styles.heroCtaContainer}>
          <a href="#" className={`${styles.heroCta} ${styles.animateOnScroll}`}>
            Explore Collections
          </a>
          <a
            href="#"
            className={`${styles.heroCtaSecondary} ${styles.animateOnScroll}`}
          >
            <i className="fas fa-play"></i> Our Story
          </a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.scrollArrow}></div>
      </div>
    </div>
  );
}
