import styles from "@styles/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import phoneLight from "../public/assets/icons/phoneLight.png";
import whatsappLight from "../public/assets/icons/whatsappLight.svg";
import emailLight from "../public/assets/icons/emailLight.png";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <div className={`${styles.contentColumn} ${styles.brandingColumn}`}>
            <h3>Alambre Cables</h3>
            <p>Get in touch today to get a free project quote</p>
          </div>

          <div className={styles.contentColumn}>
            <h4>Company</h4>
            <Link href="/">
              <a className={styles.footerLink}>Home</a>
            </Link>
            <Link href="/products">
              <a className={styles.footerLink}>Products</a>
            </Link>
            <Link href="/about">
              <a className={styles.footerLink}>About</a>
            </Link>
            <Link href="/about">
              <a className={styles.footerLink}>Contact us</a>
            </Link>
          </div>

          <div className={styles.contentColumn}>
            <h4>Products</h4>
            <Link href="/products/lan">
              <a className={styles.footerLink}>LAN cables</a>
            </Link>
            <Link href="/products/fiber">
              <a className={styles.footerLink}>Fiber cables</a>
            </Link>
            <Link href="/products/coaxial">
              <a className={styles.footerLink}>Co-axial cables</a>
            </Link>
            <Link href="/products/cctv">
              <a className={styles.footerLink}>CCTV cables</a>
            </Link>
          </div>

          <div className={styles.contentColumn}>
            <h4>Contact</h4>
            <a className={styles.footerLink} href="tel:+919892621326">
              <Image
                src={phoneLight}
                width={"18px"}
                height={"18px"}
                alt="Phone icon"
              ></Image>{" "}
              +91 9892621326
            </a>
            <a className={styles.footerLink} href="https://wa.me/+919619363163">
              <Image
                src={whatsappLight}
                width={"18px"}
                height={"18px"}
                alt="Phone icon"
              ></Image>{" "}
              +91 9619363163
            </a>
            <a
              className={styles.footerLink}
              href="mailto:info@alambrecables.com"
            >
              <Image
                src={emailLight}
                width={"18px"}
                height={"18px"}
                alt="Phone icon"
              ></Image>{" "}
              info@alambrecables.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
