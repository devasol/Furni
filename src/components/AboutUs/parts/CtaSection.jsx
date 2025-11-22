import React from "react";
import styles from "../AboutUs.module.css";

export default function CtaSection() {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Ready to transform your space?</h2>
        <p className={styles.ctaText}>
          Discover our collections and find the perfect pieces for your home.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.ctaButtonPrimary}>
            Explore Collections
            <span className={styles.buttonArrow}>→</span>
          </button>
          <button className={styles.ctaButtonSecondary}>
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
