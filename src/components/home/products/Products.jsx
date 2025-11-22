import { useState, useEffect, useRef } from "react";
import styles from "./Products.module.css";

// Using placeholder images to avoid import issues
const img_1 =
  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const img_2 =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const img_3 =
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const products = [
  {
    id: 1,
    imageUrl: img_1,
    title: "Nordic Chair",
    description:
      "Elegant Scandinavian design with premium materials for ultimate comfort.",
  },
  {
    id: 2,
    imageUrl: img_2,
    title: "Krukuzo Collection",
    description:
      "Modern aesthetic meets functionality in our signature furniture line.",
  },
  {
    id: 3,
    imageUrl: img_3,
    title: "Ergonomic Desk",
    description:
      "Designed for productivity and comfort during long working hours.",
  },
];

export default function Products() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisibleCards((prev) => [...prev, parseInt(id)]);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll("[data-id]");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} ref={sectionRef}>
      <h2 className={styles.sectionTitle}>Featured Products</h2>
      <p className={styles.sectionSubtitle}>
        Discover our carefully curated collection
      </p>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div
            key={product.id}
            data-id={product.id}
            className={`${styles.productCard} ${
              visibleCards.includes(product.id) ? styles.visible : ""
            }`}
          >
            <div className={styles.imageWrapper}>
              <img src={product.imageUrl} alt={product.title} />
              <div className={styles.overlay}>
                <button className={styles.quickView}>Quick View</button>
              </div>
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.titleWrapper}>
                <h3>{product.title}</h3>
              </div>

              <div className={styles.descriptionWrapper}>
                <p>{product.description}</p>
              </div>

              <div className={styles.actionWrapper}>
                <div className={styles.price}>$299.99</div>
                <button className={styles.addToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
