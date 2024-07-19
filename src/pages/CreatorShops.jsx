import React from 'react';
import "../App.css";
import data from "../data";
import ProductCard from "../components/ProductCard";
import {
  Typography,
} from "@mui/material";


function CreatorShops() {
    const shops = data.products.filter(
      (product) => product.category === "Shop"
    );
    return (
      <div className="product-page">
        <Typography variant="h3">Creator Shops</Typography>
        <div className="product-grid">
          {shops.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default CreatorShops;