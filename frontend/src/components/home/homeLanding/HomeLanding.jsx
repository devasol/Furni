import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import styles from "./HomeLanding.module.css";
import img from "../../../assets/sofa/sofa.png";

const HomeLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Trigger the hero animation immediately on mount
    setIsVisible(true);

    // Handle responsive check
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Scroll reveal effect for elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(`.${styles.reveal}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <main
        className={`${styles.container} ${isVisible ? styles.visible : ""}`}
      >
        <Header />
        <div className={`${styles.line} ${styles.reveal}`}></div>
        <section className={styles.sectionContainer}>
          <div
            className={`${styles.contentWrapper} ${
              isMobile ? styles.mobileLayout : ""
            }`}
          >
            <div
              className={`${styles.headingCont} ${styles.reveal} ${
                isVisible ? styles.visible : ""
              }`}
            >
              <div className={styles.headingTitle}>
                <span>Modern Interior</span>
                <span>Design Studio</span>
              </div>
              <div className={styles.description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium reiciendis, perspiciatis velit, ullam rem doloribus
                deleniti eveniet unde quasi soluta iste, iusto tempore possimus
                quo corporis odit inventore architecto. Hic!
              </div>
              <div className={`${styles.buttons} ${styles.reveal}`}>
                <button className={styles.primaryBtn}>Shop Now</button>
                <button className={styles.secondaryBtn}>Explore</button>
              </div>
            </div>
            <div
              className={`${styles.image} ${styles.reveal} ${
                isMobile ? styles.mobileImage : ""
              }`}
            >
              <img src={img} alt="Sofa" />
            </div>
          </div>
        </section>

        {/* Decorative elements */}
        <div className={`${styles.circle1} ${styles.reveal}`}></div>
        <div className={`${styles.circle2} ${styles.reveal}`}></div>
        <div className={`${styles.circle3} ${styles.reveal}`}></div>
      </main>
    </>
  );
};

export default HomeLanding;
