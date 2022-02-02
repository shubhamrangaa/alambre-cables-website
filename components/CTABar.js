import styles from "@styles/CTABar.module.scss";

export default function CTABar() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1>Get in touch today to get a free project quote</h1>
        </div>
        <div className={styles.buttonContainer}>
          <button className={(styles.btnFilled, styles.btn)}>
            Get in touch
          </button>
          <button className={(styles.btn_filled, styles.btn)}>
            View products
          </button>
        </div>
      </div>
    </div>
  );
}
