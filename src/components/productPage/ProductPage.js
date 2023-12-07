import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import NotFound from "../assets/NotFound";
import Loader from "../assets/Loader";

const ProductPage = () => {
  const [item, setItem] = useState({});
  const [id, setId] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
            setLoading(false);
            setNotFound(true);
            throw new Error("Empty response");
          } //la response puede ser ok 200 pero venir vacia igual

          return res.json();
        })
        .then((json) => {
          if (Object.keys(json).length > 0) {
            setLoading(false);
            setItem(json);
          } else {
            setLoading(false);
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
          {loading && !notFound ? (
            <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
              <Loader />
            </div>
          ) : notFound ? (
            <div className="col-md-4 offset-md-4">
              <NotFound />
            </div>
          ) : (
            <div className="col-md-4 offset-md-4">
              <ProductCard item={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
