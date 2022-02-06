import styles from "@styles/about.module.scss";
import Image from "next/image";
import Link from "next/link";
import aboutPic from "../public/about.svg";

export default function AboutSection() {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src={aboutPic}
              alt="About us figure"
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div className={styles.contentContainer}>
            <h2>
              <span> Alambre</span> is one of the leading cable manufacturers in
              India.
            </h2>
            <p>
              For over 40 years, the alambre family has been building cables and
              relationships that last. As a diversified cable manufacturing
              company Alambre is recognized as one of the leading cable
              manufacturers in India.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="/about">
                <a className={`${styles.btnOutlineColor} ${styles.btn}`}>
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
