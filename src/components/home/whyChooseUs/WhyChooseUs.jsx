import { useState, useEffect, useRef } from "react";
import styles from "./WhyChooseUs.module.css";
import homeSofaImg from "./../../../assets/homeAndSofa/homeSofa.webp";

const features = [
  {
    id: 1,
    icon: "🏆",
    title: "Premium Quality",
    description:
      "Our furniture is crafted with the finest materials and attention to detail.",
  },
  {
    id: 2,
    icon: "🚚",
    title: "Fast Delivery",
    description:
      "Get your furniture delivered quickly with our efficient shipping network.",
  },
  {
    id: 3,
    icon: "💲",
    title: "Best Value",
    description:
      "Exceptional quality at competitive prices that fit your budget.",
  },
  {
    id: 4,
    icon: "🔧",
    title: "Easy Assembly",
    description:
      "Simple instructions and all tools included for hassle-free setup.",
  },
];

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate dots when section is visible
          if (dotsRef.current) {
            const dots = dotsRef.current.querySelectorAll(`.${styles.dot}`);
            dots.forEach((dot, index) => {
              dot.style.animationDelay = `${index * 0.1}s`;
              dot.classList.add(styles.animateDot);
            });
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.container} ${isVisible ? styles.visible : ""}`}
    >
      {/* Square dots background */}
      <div ref={dotsRef} className={styles.dotsBackground}>
        {[...Array(25)].map((_, i) => (
          <div key={i} className={styles.dot}></div>
        ))}
      </div>

      <div className={styles.description_wrapper}>
        <div className={styles.titles}>
          <h1>Why Choose Us</h1>
          <p>
            Experience the difference with our premium furniture collection. We
            combine quality craftsmanship with exceptional service to bring
            comfort and style to your home.
          </p>
        </div>
        <div className={styles.features}>
          {features.map((el) => (
            <div
              className={`${styles.feature} ${
                activeFeature === el.id ? styles.active : ""
              }`}
              key={el.id}
              onMouseEnter={() => setActiveFeature(el.id)}
              onClick={() => setActiveFeature(el.id)}
            >
              <div className={styles.feature_icon}>{el.icon}</div>
              <div className={styles.feature_content}>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
              </div>
              <div className={styles.feature_indicator}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.image}>
        <div className={styles.image_container}>
          <img
            src={homeSofaImg}
            alt="Home and Sofa"
            className={styles.main_image}
          />
          {/* Floating elements */}
        </div>
      </div>
    </section>
  );
}
