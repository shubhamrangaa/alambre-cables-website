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

// https://hooks.zapier.com/hooks/catch/11840773/brywreq/

// https://zapier.com/shared/d00c78cad5fbcaba9cd7a00ac3f4b668963eed11

// https://script.google.com/macros/s/AKfycbw-YIZfexUJivk1D-mmm7LnghINgZzXxo97NXNWqct-Xvg5T0YsfCGPxGucPh6NeYyi/exec
