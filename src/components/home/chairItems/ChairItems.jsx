import { useState, useEffect, useRef } from "react";
import styles from "./ChairItems.module.css";
import nordic from "../../../assets/items/img-nordic.png";
import krkuzo from "../../../assets/items/img-krukuzo.png";
import ergonomic from "../../../assets/items/img-ergonomic.png";

const items = [
  {
    id: 1,
    imageUrl: nordic,
    name: "Nordic Chair",
    price: 50.1,
    alt: "Nordic Chair",
    description: "Minimalist design with premium comfort",
  },
  {
    id: 2,
    imageUrl: krkuzo,
    name: "Kruzo Aero Chair",
    price: 78.0,
    alt: "Krkuzo Aero Chair",
    description: "Ergonomic support with breathable mesh",
  },
  {
    id: 3,
    imageUrl: ergonomic,
    name: "Ergonomic Chair",
    price: 43.0,
    alt: "Ergonomic Chair",
    description: "Adjustable features for optimal posture",
  },
];

export default function ChairItems() {
  const [activeItem, setActiveItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleItemHover = (id) => {
    setActiveItem(id);
  };

  const handleItemLeave = () => {
    setActiveItem(null);
  };

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    // Animation for add to cart
    const button = e.target;
    button.classList.add(styles.adding);
    setTimeout(() => {
      button.classList.remove(styles.adding);
    }, 500);

    console.log(`Added ${item.name} to cart`);
    // Here you would typically update cart state
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.container} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.description}>
        <div className={styles.title}>
          <h1>Crafted with excellent material</h1>
        </div>
        <div className={styles.paragraph}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, harum. Qui assumenda, id suscipit nesciunt.
          </p>
        </div>
        <div className={styles.button}>
          <button className={styles.exploreBtn}>Explore</button>
        </div>
      </div>

      <div className={styles.items}>
        {items.map((el) => {
          return (
            <div
              className={`${styles.item} ${
                activeItem === el.id ? styles.active : ""
              }`}
              key={el.id}
              onMouseEnter={() => handleItemHover(el.id)}
              onMouseLeave={handleItemLeave}
            >
              <div className={styles.imageContainer}>
                <img src={el.imageUrl} alt={el.alt} />
                <div className={styles.overlay}>
                  <button
                    className={styles.quickView}
                    onClick={() => console.log(`Quick view: ${el.name}`)}
                  >
                    Quick View
                  </button>
                </div>
              </div>
              <div className={styles.itemInfo}>
                <span className={styles.itemName}>{el.name}</span>
                <span className={styles.itemDescription}>{el.description}</span>
                <div className={styles.priceCart}>
                  <span className={styles.itemPrice}>
                    <strong>${el.price.toFixed(2)}</strong>
                  </span>
                  <button
                    className={styles.addToCart}
                    onClick={(e) => handleAddToCart(e, el)}
                    aria-label={`Add ${el.name} to cart`}
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
