import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import NotFound from "../assets/NotFound";

const ProductPage = () => {
  const [item, setItem] = useState({});
  const [id, setId] = useState(0);
  const [notFound, setNotFound] = useState(false);

  const urlApi = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    const url = window.location.href;
    const match = url.match(/\/prod\/(\d+)/);

    if (match && match[1]) {
      const productId = match[1];

      const urlApi = `https://fakestoreapi.com/products/${productId}`;

      fetch(urlApi)
        .then((res) => {
          const contentLength = res.headers.get("content-length");
          if (!res.ok) {
            throw new Error("Network response was not ok");
          } else if (contentLength && parseInt(contentLength, 10) === 0) {
            setNotFound(true);
            throw new Error("Empty response");
          } //la response puede ser ok 200 pero venir vacia igual

          return res.json();
        })
        .then((json) => {
          if (Object.keys(json).length > 0) {
            setItem(json);
          } else {
            setNotFound(true);
            throw new Error("ERROR JSON response vacía");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            {notFound ? <NotFound /> : <ProductCard item={item} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
