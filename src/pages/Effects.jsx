import React from 'react';
import "../App.css";
import data from "../data"
import ProductCard from "../components/ProductCard"
import { Typography } from "@mui/material";

function Effects() {
    const elements = data.products.filter(
        (product) => product.category === "Elements"
      );
      return (
          <div className="product-page">
            <Typography variant="h3">Effects</Typography>
            <div className="product-grid">
              {elements.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
      );
};

export default Effects;