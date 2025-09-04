import React from "react";
import styles from "../AboutUs.module.css";

export default function GallerySection() {
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.sectionTitle}>Our Craftsmanship</h2>
      <p className={styles.sectionSubtitle}>
        Each piece tells a story of dedication and artistry
      </p>

      <div className={styles.gallery}>
        <div className={styles.galleryItem}>
          <img
            src="https://plus.unsplash.com/premium_photo-1664193968894-b1257541f463?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Woodworking"
          />
          <div className={styles.galleryOverlay}>
            <h3>Wood Selection</h3>
            <p>Handpicked sustainable hardwoods</p>
          </div>
        </div>
        <div className={styles.galleryItem}>
          <img
            src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="Crafting process"
          />
          <div className={styles.galleryOverlay}>
            <h3>Precision Crafting</h3>
            <p>Meticulous attention to every detail</p>
          </div>
        </div>
        <div className={styles.galleryItem}>
          <img
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Finished product"
          />
          <div className={styles.galleryOverlay}>
            <h3>Final Finish</h3>
            <p>Eco-friendly stains and protective coatings</p>
          </div>
        </div>
      </div>
    </section>
  );
}
