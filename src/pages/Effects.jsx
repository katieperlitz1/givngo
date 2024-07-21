import React, { useState, useEffect } from "react";
import "../App.css";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function Effects() {
  const [effects, setEffects] = useState([]);

  useEffect(() => {
    const fetchEffects = async () => {
      const q = query(
        collection(db, "resources"),
        where("category", "==", "Elements")
      );
      const querySnapshot = await getDocs(q);
      const effectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEffects(effectsData);
    };

    fetchEffects();
  }, []);

  return (
    <div className="product-page">
      <Typography variant="h3">Effects</Typography>
      <div className="product-grid">
        {effects.map((doc) => (
          <ProductCard product={doc} key={doc.id} />
        ))}
      </div>
    </div>
  );
}

export default Effects;
