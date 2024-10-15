import React from "react";
import { useState, useEffect, useContext } from "react";
import "../App.css";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  TextField,
  Chip
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import { auth } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../auth/AuthContext";

function Home() {
  const [all, setAll] = useState([]);
  const [searchVal, setSearchVal] = useState("")
  const { currUser } = useContext(AuthContext);

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

  return (
    <Box id="homepage">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 5, sm: 10 },
          pb: { xs: 4, sm: 6 },
          gap: 3,
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
            fontWeight: "500",
            padding:0
          }}
          
        >
          Explore All
        </Typography>
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          Browse all GivNGo resources.
        </Typography>
        <TextField
          id="outlined-basic"
          hiddenLabel
          size="small"
          variant="outlined"
          aria-label="Search"
          placeholder="Search All"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          sx={{width:"90%", maxWidth:"400px"}}
        />
      </Container>
      <Container sx={{display: "flex",flexDirection: "row",
            justifyContent: "center", gap: 1.5}}>
      <Chip label="PSDs" variant="outlined" onClick={() => window.location.href = "/psds"} />
        <Chip label="Textures" variant="outlined" onClick={() => window.location.href = "/textures"} />
        <Chip label="Creator Shops" variant="outlined" onClick={() => window.location.href = "/creatorshops"} />
        <Chip label="Effects" variant="outlined" onClick={() => window.location.href = "/effects"} />
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