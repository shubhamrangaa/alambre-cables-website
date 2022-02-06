import styles from "@styles/CTABar.module.css";

export default function CTABar() {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Get in touch today to get a free project quote </h1>
        </div>
        <div className={styles.button}>
          <button className={styles.btn_fill}>Get in touch &#10140; </button>
          <button className={styles.btn_outline}>View products</button>
        </div>
      </div>
    </div>
  );
}
