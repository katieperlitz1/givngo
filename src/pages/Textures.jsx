import React from "react";
import "../App.css";
import data from "../data"
import ProductCard from "../components/ProductCard"



function Textures() {
  return (
    <div class="product-page">
      <h1 className="pageHeader">Textures and Overlays</h1>
        <div className="product-grid">
        {data.products.map(product => (
            <ProductCard product={product}/>
        )
        )}   
        </div>
    </div>
  );
};

export default Textures;
