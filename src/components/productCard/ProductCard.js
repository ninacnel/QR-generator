import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div key={item.id}>
      <div className="card p-2 m-1 shadow">
        <h6 className="text-primary">{item.category}</h6>
        <h4>{item.title}</h4>

        <img src={item.image} alt={item.title} />
        <div className="d-flex justify-content-around mt-2 mb-2 align-items-center">
          <h6>${item.price}</h6>
          {/* <button className="btn btn-light">Comprar</button> */}
        </div>
        <div className="card-footer">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
