import styles from "@styles/heroV.module.scss";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.containerContent}>
          <h1>
            We are more than an<br></br>
            <span>industrial company.</span>
          </h1>
          <p>
            For over 40 years, the alambre family has been building cables and
            relationships that last. As a diversified cable manufacturing
            company Alambre is recognized as one of the leading cable
            manufacturers in India.
          </p>
          <div className={styles.buttonContainer}>
            <Link href="/contact">
              <a className={`${styles.btnFilled} ${styles.btn}`}>
                Get in touch -{">"}
              </a>
            </Link>

            <Link href="/products">
              <a className={`${styles.btnOutlineColor} ${styles.btn}`}>
                View products
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
