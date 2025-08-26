import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
// Note: faCartShopping is only available in the solid style, not regular

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logoNameCont}>
        <div className={styles.box}></div>
        <h3 className={styles.logoName}>Furni</h3>
      </div>
      <div className={styles.navContainer}>
        <div className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
        </div>
        <div className={styles.loginCart}>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
        </div>
      </div>
    </header>
  );
}
