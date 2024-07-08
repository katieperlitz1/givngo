import React from "react";
import "../App.css";
import data from "../data"
import ProductCard from "../components/ProductCard"

function Textures() {
  const textures = data.products.filter(
    (product) => product.category === "Textures"
  );
  return (
    <div className="product-page">
      <h1 className="pageHeader">Textures and Overlays</h1>
      <div className="product-grid">
        {textures.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
};

export default Textures;
