import React from "react";
import styles from "../Blog.module.css";

export default function Newsletter({ sectionRef }) {
  return (
    <section className={styles.newsletter} ref={sectionRef}>
      <div className={styles.newsletterContent}>
        <h2>Stay Updated with Furni</h2>
        <p>
          Subscribe to our newsletter for the latest articles, product updates,
          and exclusive offers.
        </p>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
