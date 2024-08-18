import React from "react";
import "../App.css";
import data from "../data";
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

function Home() {
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
          placeholder="Search"
          inputProps={{
            autoComplete: "off",
            "aria-label": "Enter your email address",
          }}
          width="100%"
        />
      </Container>
      <Container sx={{padding:"30px"}}>
      <div className="product-grid">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </Container>
    </Box>
  );
};

export default Home;