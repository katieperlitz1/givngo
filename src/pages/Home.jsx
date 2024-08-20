import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import { auth } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../auth/AuthContext";

function Home() {
  const [all, setAll] = useState([]);
  const [searchVal, setSearchVal] = useState("")

  const fetchAll = async () => {

    const querySnapshot = await getDocs(query(collection(db, "resources")));
    const allData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (searchVal.trim()) {
      const searchValLower = searchVal.trim().toLowerCase()
      const filteredData = allData.filter((product) => {
        const titleLower = product.title.toLowerCase()
        const descriptionLower = product.description.toLowerCase()
        return (titleLower.includes(searchValLower) || descriptionLower.includes(searchValLower))
      })
      setAll(filteredData);
    } else {
      setAll(allData);
    }
    
  };

  useEffect(() => {
    fetchAll();
  }, [searchVal]);

  console.log(auth.currentUser)
  return (
    <Box id="homepage">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          gap: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignSelf: "center",
            textAlign: "center",
            fontSize: "50px",
          }}
        >
          The #1 Resource Library for Sports Graphics
        </Typography>
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          Discover top-tier resources, from PSDs to textures, curated for all levels of designers.
        </Typography>
        <Button variant="contained">Explore All</Button>
        <TextField
          id="outlined-basic"
          hiddenLabel
          size="small"
          variant="outlined"
          aria-label="Search"
          placeholder="Search All"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          sx={{width:"100%", maxWidth:"400px"}}
        />
      </Container>
      <Container sx={{padding:"30px"}}>
      <div className="product-grid">
        {all.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </Container>
    </Box>
  );
};

export default Home;