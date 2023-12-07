import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

const ProductPage = () => {
  const [item, setItem] = useState({});
  const [id, setId] = useState(0);

  useEffect(() => {
    const url = window.location.href;

    const match = url.match(/\/prod\/(\d+)/);

    // hace un array con la url y se queda con lo que hay en la posicion 1
    if (match && match[1]) {
      setId(match[1]);
    }
  }, []);

  const urlApi = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    fetch(urlApi)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        if (Object.keys(json).length > 0) {
          // para ver si la response viene vacía
          setItem(json);
        } else {
          throw new Error("ERROR JSON response vacía");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Error al pegarle a la api
      });
  }, [id]);

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
