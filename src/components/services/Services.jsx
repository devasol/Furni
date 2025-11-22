import SplitText from "./SplitText/SplitText.jsx";
import CircularGallery from "./gallary/CircularGallary.jsx.jsx";
import styles from "./Services.module.css";

export default function Services() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.galleryContainer}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </div>
  );
}
