import Head from "next/head";
import Image from "next/image";
import styles from "../styles/landing.module.css";

export default function New() {
  return (
    <div className={styles.navContainer}>
    <div className={styles.navWrapper}>
      <Head>
        <title>Alambre</title>
      </Head>
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