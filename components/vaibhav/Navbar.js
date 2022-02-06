import Image from "next/image";
import Link from "next/link";
import styles from "@styles/nav.module.scss";

export default function Navbar() {
  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.navWrapper}>
          <title>Alambre</title>

          <div className={styles.header}>
            <h1>Alambre</h1>
            <nav>
              <ul className={styles.navlinks}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
