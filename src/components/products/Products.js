import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import Loader from "../assets/Loader";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ marginTop: "50px" }}
    >
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center vh-100 flex-column"
          style={{ marginTop: "-80px" }}
        >
          <Loader />
        </div>
      )}
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
