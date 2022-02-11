import styles from "@styles/hero.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroWrapper}>
          <div className={styles.contentContainer}>
            <h1>
              We are more than an <br></br>
              <span>industrial company.</span>{" "}
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
          <div className={styles.heroImage}>
            <Image
              src="/assets/images/lanBrandColors.png"
              alt="Lan cable"
              width={"425px"}
              height={"400px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
