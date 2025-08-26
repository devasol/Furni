import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import styles from "./HomeLanding.module.css";
import img from "./../../../assets/sofa/sofa.png";

const HomeLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <main className={styles.container}>
        <Header />
        <div className={styles.line}></div>
        <section className={styles.sectionContainer}>
          <div className={`${styles.contentWrapper}`}>
            <div
              className={`${styles.headingCont} ${
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
              <div className={styles.buttons}>
                <button className={styles.primaryBtn}>Shop Now</button>
                <button className={styles.secondaryBtn}>Explore</button>
              </div>
            </div>
            <div className={styles.image}>
              <img src={img} alt="Sofa" />
            </div>
          </div>
        </section>

        {/* Decorative elements for visual interest */}
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </main>
    </>
  );
};

export default HomeLanding;
