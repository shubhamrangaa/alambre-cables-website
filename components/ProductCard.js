import styles from "@styles/productCard.module.scss";
import Image from "next/image";

export default function ProductCard({
  imageAddress,
  productName,
  description,
  productLink,
}) {
  return (
    <div>
      <div className={styles.cardContainer}>
        <img
          src={imageAddress}
          width={"94px"}
          height={"80px"}
          alt="Product Icon"
        />
        <h4>{productName}</h4>
        <p>{description}</p>
        <a href={productLink}>Learn more -{">"}</a>
      </div>
    </div>
  );
}
