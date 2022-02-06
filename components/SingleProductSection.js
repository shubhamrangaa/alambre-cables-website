import Image from "next/image";
import styles from "@styles/SingleProductSection.module.scss";

export default function SingleProductSection({
  imageAddress,
  productName,
  productDescription,
}) {
  return (
    <div>
      <div className={styles.productInfoContainer}>
        <div>
          <img
            width={"300px"}
            height={"400px"}
            src={imageAddress}
            alt="Product Image"
          />
        </div>
        <div>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a
            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            download
            className={`${styles.btn} ${styles.btnFilled}`}
          >
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
}
