import { useState, useEffect, useRef } from "react";
import styles from "./WeHelp.module.css";

export default function WeHelp() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeList, setActiveList] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleListHover = (index) => {
    setActiveList(index);
  };

  const handleListLeave = () => {
    setActiveList(null);
  };

  const handleImageHover = (index) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  // Using placeholder images instead of the problematic imports
  const img_1 =
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const img_2 =
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";
  const img_3 =
    "https://images.unsplash.com/photo-1680503397107-475907e4f3e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      className={`${styles.container} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
    >
      <div className={styles.imagesWrapper}>
        <div className={styles.images}>
          <div
            className={`${styles.imgContainer} ${styles.img1} ${
              hoveredImage === 0 ? styles.imgHovered : ""
            } ${
              hoveredImage !== null && hoveredImage !== 0
                ? styles.imgDimmed
                : ""
            }`}
            onMouseEnter={() => handleImageHover(0)}
            onMouseLeave={handleImageLeave}
          >
            <img src={img_1} alt="Modern interior design" />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <h3>Modern Design</h3>
                <p>Elegant and contemporary solutions</p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.imgContainer} ${styles.img2} ${
              hoveredImage === 1 ? styles.imgHovered : ""
            } ${
              hoveredImage !== null && hoveredImage !== 1
                ? styles.imgDimmed
                : ""
            }`}
            onMouseEnter={() => handleImageHover(1)}
            onMouseLeave={handleImageLeave}
          >
            <img src={img_2} alt="Living room design" />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <h3>Living Spaces</h3>
                <p>Comfortable and inviting environments</p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.imgContainer} ${styles.img3} ${
              hoveredImage === 2 ? styles.imgHovered : ""
            } ${
              hoveredImage !== null && hoveredImage !== 2
                ? styles.imgDimmed
                : ""
            }`}
            onMouseEnter={() => handleImageHover(2)}
            onMouseLeave={handleImageLeave}
          >
            <img src={img_3} alt="Home decoration" />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <h3>Home Decor</h3>
                <p>Personalized styling solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentsWrapper}>
          <div className={styles.titlesWrapper}>
            <h1 className={styles.title}>
              We Help You Make Modern Interior Design
            </h1>
            <p className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              corporis minima facere quaerat iusto. Alias magnam doloremque
              earum officia, amet, sit vero adipisci itaque iste placeat
              necessitatibus repellat, ad error animi deleniti explicabo eum
              dolorum facilis molestiae illum soluta. Dolore.
            </p>

            <div className={styles.lists}>
              {[
                "Professional consultation",
                "3D design visualization",
                "Quality furniture selection",
                "Installation & styling",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${styles.listItem} ${
                    activeList === index ? styles.active : ""
                  }`}
                  onMouseEnter={() => handleListHover(index)}
                  onMouseLeave={handleListLeave}
                >
                  <div className={styles.listIcon}>
                    <span className={styles.listNumber}>0{index + 1}</span>
                    <div className={styles.listLine}></div>
                  </div>
                  <div className={styles.listContent}>
                    <h3>{item}</h3>
                    <p>
                      Our experts guide you through every step of creating your
                      perfect space
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.buttonWrapper}>
              <button className={styles.exploreBtn}>
                <span>Explore</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
