import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../auth/AuthContext";

function Effects() {
  const [effects, setEffects] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);

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

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="product-page">
      <Typography variant="h3">Effects</Typography>
      <div className="product-grid">
        {effects.map((doc) => (
          <ProductCard product={doc} key={doc.id} fetchData={fetchEffects}/>
        ))}
      </div>
    </div>
  );
}

export default Effects;
