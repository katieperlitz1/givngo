import React from "react";
import "../App.css";
import data from "../data";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer"
import LoginPage from "./SignInPage";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";

function Home() {
  return (
    <Box id="homepage">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          gap:4,
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
          The #1 Resource Library for Sports Designers
        </Typography>
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          Explore our cutting-edge dashboard, delivering high-quality solutions
          tailored to your needs. Elevate your experience with top-tier features
          and services.
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;