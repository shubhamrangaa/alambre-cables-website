import SingleProductSection from "@components/SingleProductSection";

import { products } from "../../data/products.json";

export default function Product() {
  return (
    <div>
      {products.map((currentProduct, index) => {
        return (
          <SingleProductSection
            key={index}
            productName={currentProduct.name}
            productDescription={currentProduct.description}
            imageAddress={currentProduct.imageAddress}
          />
        );
      })}
    </div>
  );
}
