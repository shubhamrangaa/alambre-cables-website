import Head from "next/head";
import Image from "next/image";
import styles from "../styles/landing.module.css";

export default function New() {
  return (
    <div className={styles.nav}>
      <Head>
        <title>Alambre</title>
      </Head>
      <header className={styles.header}>
        <h1>Alambre</h1>
        <nav>
          <ul className={styles.nav_links}>
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
      </header>
      <div className={styles.heroContainer}>
        {/* // left section */}
        <div className={styles.contentContainer}>
          <h1>We are more than a industrial company.</h1>
          <p>
            For over 40 years, the alambre family has been building cables and
            relationships that last. As a diversified cable manufacturing
            company Alambre is recognized as one of the leading cable
            manufacturers in India.
          </p>
          <div className={styles.button}>
            <button className={styles.btn_fill}>Get in touch &#10140; </button>
            <button className={styles.btn_outline}>View products</button>
          </div>
        </div>
        {/* //right section */}
        <div className={styles.img}>
          <img
            src="https://s3-alpha-sig.figma.com/img/9473/076b/03f2df2d1460a00b08aa26d0c0f1f07f?Expires=1644796800&Signature=dvuMObO9BJh7TikdD0FT79HoztmTIb~VwHIkh3b7z1sJWSkgz78IfbhzL84lxwdikE-VIOunilK67O6Yg3wOVyQ8Nt5PIPuzMlelL0u3h4y9NB~mE78BzGIB9-a1cJb0HE0jbuQEz4-pKufh4N1Fyti8r7CAz16RHROqsFT2VdSfR7udGMvYtf2IptKJ51XlX1NUGsj69z7dVEnEpuo9r2MVHcRT-CyXrTZzJyb5T5wjmd0nRINyZklAeOadlljA5caDaN~Bnm2~ltmVjBpBDlzYeLZFNFHAjhQ7nPcjZ0CnkWMXR7S~cvOx5dUH~MMrhzxemgKJSIy6l0crl0MKCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            width="500"
            height="550"
          ></img>
        </div>
      </div>
    </div>
  );
}
