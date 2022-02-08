import SingleProductSection from "@components/SingleProductSection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { products } from "../../data/products.json";

export default function Product() {
  let [currentProduct, setCurrentProduct] = useState({});
  const router = useRouter();
  const { product } = router.query;
  const queryProduct = product;
  console.log(queryProduct);

  let found = {};
  for (let product of products) {
    if (queryProduct === product.slug) {
      found = product;
    }
  }

  console.log(found);
  if (currentProduct.name !== found.name) {
    setCurrentProduct(found);
  }

  return currentProduct ? (
    <div>
      <SingleProductSection
        productName={currentProduct.name}
        productDescription={currentProduct.description}
        imageAddress={currentProduct.imageAddress}
      />
    </div>
  ) : (
    <div>nothing found</div>
  );
}
