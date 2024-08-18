import React, {useState, useEffect, useContext } from "react";
import "../App.css";
import ProductCard from "../components/ProductCard"
import {Typography} from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../auth/AuthContext";

function Textures() {

  const [textures, setTextures] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchTextures = async () => {
      const q = query(collection(db, "resources"), where("category", "==", "Textures"));
      const querySnapshot = await getDocs(q);
      const texturesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTextures(texturesData);
    };
    fetchTextures();
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
      <Typography variant="h3">Textures & Overlays</Typography>
      <div className="product-grid">
        {
          textures.map((doc) => (
            <ProductCard product={doc} key={doc.id} />
          ))
        }
      </div>
    </div>
  );
};

export default Textures;
