import React from 'react';
import "../App.css";
import data from "../data";
import ProductCard from "../components/ProductCard";


function CreatorShops() {
    const shops = data.products.filter(
      (product) => product.category === "Shop"
    );
    return (
      <div className="product-page">
        <h1 className="pageHeader">Creator Shops</h1>
        <div className="product-grid">
          {shops.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default CreatorShops;