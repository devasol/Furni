import React from "react";
import styles from "../AboutUs.module.css";

const values = [
  {
    title: "Sustainability",
    description:
      "We use ethically sourced materials and eco-friendly practices.",
    icon: "🌿",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Every piece is handcrafted with attention to detail and precision.",
    icon: "🔨",
  },
  {
    title: "Timeless Design",
    description:
      "Our furniture combines classic elegance with modern functionality.",
    icon: "🎨",
  },
  {
    title: "Customer Satisfaction",
    description: "Your happiness is our priority from selection to delivery.",
    icon: "❤️",
  },
];

export default function ValuesSection({ setActiveTab }) {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <p className={styles.sectionSubtitle}>
          The principles that guide everything we create
        </p>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div
              key={index}
              className={`${styles.valueCard} ${styles.animateOnScroll}`}
              onMouseEnter={() => setActiveTab && setActiveTab(index)}
            >
              <div className={styles.valueIcon}>
                <i className={value.icon}>{value.icon}</i>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
