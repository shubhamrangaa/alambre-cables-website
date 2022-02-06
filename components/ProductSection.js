import ProductCard from "./ProductCard";
import styles from "@styles/products.module.scss";

export default function ProductSection() {
  const productData = [
    {
      productName: "LAN cables",
      description:
        "With superior perfomace, future-proof and cost effective optical cables we support cable solutions for high speed data ",
      imageAddress: "/assets/icons/lan.png",
      link: "/products/lan",
    },
    {
      productName: "Fiber cables",
      description:
        "With superior perfomace, future-proof and cost effective optical cables we support cable solutions for high speed data ",
      imageAddress: "/assets/icons/optical-fiber.png",
      link: "/products/fiber",
    },
    {
      productName: "Co-axial cables",
      description:
        "With superior perfomace, future-proof and cost effective optical cables we support cable solutions for high speed data ",
      imageAddress: "/assets/icons/coaxial.png",
      link: "/products/coaxial",
    },
    {
      productName: "CCTV cables",
      description:
        "With superior perfomace, future-proof and cost effective optical cables we support cable solutions for high speed data ",
      imageAddress: "/assets/icons/cctv-camera.png",
      link: "/products/cctv",
    },
  ];
  return (
    <div className={styles.productSectionContainer}>
      <h3>Our Products</h3>
      <p>We have the leading quality cabeles in India</p>
      <div className={styles.productsContainer}>
        {productData.map((product, index) => {
          return (
            <ProductCard
              key={index}
              productName={product.productName}
              description={product.description}
              imageAddress={product.imageAddress}
              productLink={product.link}
            />
          );
        })}
      </div>
    </div>
  );
}
