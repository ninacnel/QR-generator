import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

const ProductPage = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <ProductCard item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
