import React from 'react';
import "../App.css";
import data from "../data"
import ProductCard from "../components/ProductCard"
import {Typography} from "@mui/material";

function PSDs() {
    const psds = data.products.filter(
        (product) => product.category === "PSDs"
      );
    return (
        <div className="product-page">
          <Typography variant="h3">PSDs</Typography>
          <div className="product-grid">
            {psds.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
      );
};


export default PSDs;