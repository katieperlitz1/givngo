import React from "react";
import "../App.css";
import data from "../data"
import ProductCard from "../components/ProductCard"
import {Typography} from "@mui/material";

function Textures() {
  const textures = data.products.filter(
    (product) => product.category === "Textures"
  );
  return (
    <div className="product-page">
      <Typography variant="h3">Textures & Overlays</Typography>
      <div className="product-grid">
        {textures.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Textures;
