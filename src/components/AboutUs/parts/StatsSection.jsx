import React from "react";
import styles from "../AboutUs.module.css";

export default function StatsSection({ sectionRef, statsRef }) {
  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.stats}`}>
      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <span
            ref={(el) => (statsRef.current[0] = el)}
            className={styles.statNumber}
            data-count="18"
          >
            1+
          </span>
          <span className={styles.statLabel}>Years Experience</span>
        </div>
        <div className={styles.stat}>
          <span
            ref={(el) => (statsRef.current[1] = el)}
            className={styles.statNumber}
            data-count="2500"
          >
            10,000+
          </span>
          <span className={styles.statLabel}>Happy Customers</span>
        </div>
        <div className={styles.stat}>
          <span
            ref={(el) => (statsRef.current[2] = el)}
            className={styles.statNumber}
            data-count="15"
          >
            1000+
          </span>
          <span className={styles.statLabel}>Master Craftsmen</span>
        </div>
        <div className={styles.stat}>
          <span
            ref={(el) => (statsRef.current[3] = el)}
            className={styles.statNumber}
            data-count="98"
          >
            100
          </span>
          <span className={styles.statLabel}>% Satisfaction</span>
        </div>
      </div>
    </section>
  );
}
