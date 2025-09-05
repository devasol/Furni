import React from "react";
import styles from "../Blog.module.css";

export default function Hero({ sectionRef, imageLoaded, handleImageLoad }) {
  return (
    <section className={styles.hero} ref={sectionRef}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Furni Blog</h1>
        <p className={styles.heroSubtitle}>
          Inspiration, tips, and trends for creating your perfect space
        </p>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search articles..." />
          <button>Search</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Featured post"
            onLoad={() => handleImageLoad("hero")}
          />
          {!imageLoaded["hero"] && (
            <div className={styles.imagePlaceholder}></div>
          )}
        </div>
      </div>
    </section>
  );
}
