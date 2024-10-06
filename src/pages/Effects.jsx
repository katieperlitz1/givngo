import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import ProductCard from "../components/ProductCard";
import { Typography, Container } from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../auth/AuthContext";

function Effects() {
  const [effects, setEffects] = useState([]);

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

  useEffect(() => {
    fetchEffects();
  }, []);


  return (
    <div className="product-page">
      <Container sx={{ display: "flex", flexDirection:"column", alignItems: "center", marginBottom:4}}>
        <Typography variant="h3" marginBottom={2}>Effects</Typography>
        <Typography sx={{textAlign:"center"}}>Brushes, Text, and Color effects</Typography>
      </Container>
      <div className="product-grid">
        {effects.map((doc) => (
          <ProductCard product={doc} key={doc.id} fetchData={fetchEffects} />
        ))}
      </div>
    </div>
  );
}

export default Effects;
