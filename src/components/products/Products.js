import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ marginTop: "50px" }}
    >
      Products
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-sm-3">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
