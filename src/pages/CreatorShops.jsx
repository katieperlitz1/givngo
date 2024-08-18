import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../auth/AuthContext";

function CreatorShops() {
  const [shops, setShops] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);

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

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }
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
