import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import ProductCard from "../components/ProductCard";
import { Typography, Container, Box } from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../auth/AuthContext";

function CreatorShops() {
  const [shops, setShops] = useState([]);
  const { loading, currUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
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
      } catch (err) {
        setError("Failed to load resources. Please try refreshing the page.");
        console.log("ERROR");
      }
    };
    fetchShops();
  }, [currUser]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Typography
            variant="h3"
            marginBottom={2}
            sx={{ textAlign: "center" }}
          >
            Creator Shops
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Shop by your favorite creator, discover the assets you've seen and
            loved
          </Typography>
        </Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }
  return (
    <div className="product-page">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Typography variant="h3" marginBottom={2} sx={{ textAlign: "center" }}>
          Creator Shops
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Shop by your favorite creator, discover the assets you've seen and
          loved
        </Typography>
      </Container>
      <div className="product-grid">
        {shops.map((doc) => (
          <ProductCard product={doc} key={doc.id} />
        ))}
      </div>
    </div>
  );
}

export default CreatorShops;
