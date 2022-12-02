import styles from "@styles/CTABar.module.scss";
import Link from "next/link";

export default function CTABar() {
  return (
    <div>
      <div className={styles.barContainer}>
        <div className={styles.barWrapper}>
          <div className={styles.headingContainer}>
            <h3>Get in touch today to get a free project quote</h3>
          </div>
          <div className={styles.buttonContainer}>
            <Link href="/contact">
              <a className={`${styles.btnFilled} ${styles.btn}`}>
                Get in touch -{">"}
              </a>
            </Link>

            <Link href="/products">
              <a className={`${styles.btnOutline} ${styles.btn}`}>
                View products
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
