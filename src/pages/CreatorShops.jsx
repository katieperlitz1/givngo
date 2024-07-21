import React, { useState, useEffect } from "react";
import "../App.css";
import data from "../data";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function CreatorShops() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      const q = query(
        collection(db, "resources"),
        where("category", "==", "Shop")
      );
      const querySnapshot = await getDocs(q);
      const shopData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setShops(shopData);
    };

    fetchShops();
  }, []);
  return (
    <div className="product-page">
      <Typography variant="h3">Creator Shops</Typography>
      <div className="product-grid">
        {shops.map((doc) => (
          <ProductCard product={doc} key={doc.id} />
        ))}
      </div>
    </div>
  );
}

export default CreatorShops;
