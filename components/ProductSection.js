import ProductCard from "./ProductCard";
import styles from "@styles/products.module.scss";
import { products } from "data/products.json";

export default function ProductSection() {
  return (
    <div className={styles.productSectionContainer}>
      <h3>Our Products</h3>
      <p>We have the leading quality cables in India</p>
      <div className={styles.productsContainer}>
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              productName={product.name}
              description={product.description}
              imageAddress={product.iconAddress}
              productLink={product.link}
            />
          );
        })}
      </div>
    </div>
  );
}
