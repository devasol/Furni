import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";
import SplitText from "./SplitText/SplitText";
import CircularGallery from "./gallary/CircularGallary.jsx";
import styles from "./Services.module.css";

export default function Services() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>

      <section className={styles.content}>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </section>
    </div>
  );
}
