import React from 'react';
import "../App.css";
import data from "../data"
import ProductCard from "../components/ProductCard"


function PSDs() {
    const psds = data.products.filter(
        (product) => product.category === "PSDs"
      );
    return (
        <div className="product-page">
          <h1 className="pageHeader">PSDs</h1>
          <div className="product-grid">
            {psds.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      );
};


export default PSDs;