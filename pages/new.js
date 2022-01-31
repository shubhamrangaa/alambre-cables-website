import Head from "next/head";
import Image from "next/image";
import styles from "../styles/CTABar.module.css";

export default function New() {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <h1>Get in touch today to get a free project quote</h1>
        <div>
          <button>Get in touch</button>
          <button>View products</button>
        </div>
      </div>
    </div>
  );
}
