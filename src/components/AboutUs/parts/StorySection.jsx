import React from "react";
import styles from "../AboutUs.module.css";

export default function StorySection({ sectionRef }) {
  return (
    <section ref={sectionRef} className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.sectionContent}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Journey</h2>
            <p className={styles.sectionText}>
              Founded in 2005, Furni began as a small workshop with a big
              vision. What started as a one-person operation has grown into a
              team of dedicated craftspeople, designers, and furniture
              enthusiasts.
            </p>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>2005</h4>
                  <p>Founded in a small garage workshop</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>2010</h4>
                  <p>Opened first retail showroom</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>2015</h4>
                  <p>Launched sustainable materials initiative</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>2020</h4>
                  <p>Expanded to international markets</p>
                </div>
              </div>
            </div>

            <button className={styles.ctaButton}>
              Read Our Full Story
              <span className={styles.buttonArrow}>→</span>
            </button>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageStack}>
              <div className={styles.stackImage1}>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80"
                  alt="Craftsmanship"
                />
              </div>
              <div className={styles.stackImage2}>
                <img
                  src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Furniture making"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
