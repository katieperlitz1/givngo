import React, {useState, useEffect} from 'react';
import "../App.css";
import ProductCard from "../components/ProductCard"
import {Typography} from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function PSDs() {
  const [PSDs, setPSDs] = useState([]);

  useEffect(() => {
    const fetchPSDs = async () => {
      const q = query(collection(db, "resources"), where("category", "==", "PSDs"));
      const querySnapshot = await getDocs(q);
      const psdData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPSDs(psdData);
    };

    fetchPSDs();
  }, []);
    return (
        <div className="product-page">
          <Typography variant="h3">PSDs</Typography>
          <div className="product-grid">
          {
          PSDs.map((doc) => (
            <ProductCard product={doc} key={doc.id} />
          ))
        }
          </div>
        </div>
        
      );
};


export default PSDs;