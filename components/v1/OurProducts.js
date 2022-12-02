import Image from "next/image";
import Link from "next/link";
import styles from "@styles/productV.module.scss";

export default function product() {
  return (
    <div>
      <div className={styles.productContainer}>
        <div className={styles.productWrapper}>
          <h1>Our Products</h1>
          <div className={styles.containerContent}>
            <div className={styles.pro}>
              <h3>Lan Cables</h3>
              <img className={styles.image} src="\assets\icons\lan.png"></img>
              <p>
                With superior perfomace, future-proof and cost effective optical
                cables we support cable solutions for high speed data{" "}
              </p>
              <Link href="/product">
                <a className={`${styles.btn}`}>Learn more {"->"}</a>
              </Link>
            </div>
            <div className={styles.pro}>
              <h3>Fiber Cables</h3>
              <img
                className={styles.image}
                src="\assets\icons\optical-fiber.png"
              ></img>
              <p>
                With superior perfomace, future-proof and cost effective optical
                cables we support cable solutions for high speed data{" "}
              </p>
              <Link href="/product">
                <a className={`${styles.btn}`}>Learn more {"->"}</a>
              </Link>
            </div>
            <div className={styles.pro}>
              <h3>Co-axial Cables</h3>
              <img
                className={styles.image}
                src="\assets\icons\coaxial.png"
              ></img>
              <p>
                With superior perfomace, future-proof and cost effective optical
                cables we support cable solutions for high speed data{" "}
              </p>
              <Link href="/product">
                <a className={`${styles.btn}`}>Learn more {"->"}</a>
              </Link>
            </div>
            <div className={styles.pro}>
              <h3>CCTV</h3>
              <img
                className={styles.image}
                src="\assets\icons\cctv-camera.png"
              ></img>
              <p>
                With superior perfomace, future-proof and cost effective optical
                cables we support cable solutions for high speed data{" "}
              </p>
              <Link href="/product">
                <a className={`${styles.btn}`}>Learn more {"->"}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
