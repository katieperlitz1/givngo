import React from 'react';
import "../App.css";
import data from "../data"
import ProductCard from "../components/ProductCard"

function Effects() {
    const elements = data.products.filter(
        (product) => product.category === "Elements"
      );
      return (
          <div className="product-page">
            <h1 className="pageHeader">Effects & Brushes</h1>
            <div className="product-grid">
              {elements.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
      );
};

export default Effects;