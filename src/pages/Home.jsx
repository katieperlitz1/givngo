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
  Card,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import { auth } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../auth/AuthContext";
import { InstagramEmbed } from "react-social-media-embed";
import Brush from "@mui/icons-material/Brush";
import FeaturedCard from "../components/FeaturedCard";

function Home() {
  const [all, setAll] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const { currUser } = useContext(AuthContext);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(query(collection(db, "resources")));
    const allData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (searchVal.trim()) {
      const searchValLower = searchVal.trim().toLowerCase();
      const filteredData = allData.filter((product) => {
        const titleLower = product.title.toLowerCase();
        const descriptionLower = product.description.toLowerCase();
        return (
          titleLower.includes(searchValLower) ||
          descriptionLower.includes(searchValLower)
        );
      });
      setAll(filteredData);
    } else {
      setAll(allData);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [searchVal]);

  console.log(auth.currentUser);

  return (
    <Box id="homepage">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 9, sm: 14 },
          pb: { xs: 8, sm: 10 },
          gap: 1,
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
            padding: 2,
          }}
        >
          The #1 Resource Library for Sports Graphics
        </Typography>
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{
            alignSelf: "center",
            width: { sm: "100%", md: "80%" },
            padding: 2,
          }}
        >
          Discover top-tier resources, from PSDs to textures, curated for all
          levels of designers.
        </Typography>

        <Button
          color="primary"
          variant="contained"
          component="a"
          href="/all"
          sx={{ width: "200px", mt: 1 }}
        >
          Explore All
        </Button>
      </Container>
      <Box className="home-featured" sx={{ pb: 7 }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 5,
            pt: { xs: 10, sm: 10 },
            pb: { xs: 10, sm: 8 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: "50px",
              fontWeight: "500",
              mt: 0,
              mb: 0,
              color: "white",
            }}
          >
            Featured Designs
          </Typography>
          <Typography
            textAlign="center"
            color="white"
            sx={{
              alignSelf: "center",
              width: { sm: "100%", md: "80%" },
              padding: 2,
            }}
          >
            Handpicked favorites of the week.
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: 0,
            alignItems:{xs:"center", md:"normal"}
          }}
        >
          <FeaturedCard
            designer="Evan Volkman"
            url="https://www.instagram.com/p/C_ii0NqRBh2/"
            designerlink="https://www.instagram.com/evolkmanmedia/"
          />
          <FeaturedCard
            designer="Bryce Feldmaier"
            url="https://www.instagram.com/p/C_lMd5DvMXR/"
            designerlink="https://www.instagram.com/bfeldy.psd/"
          />
        </Container>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 10, sm: 10 },
          pb: { xs: 2, sm: 2 },
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
            padding: 0,
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
          sx={{ width: "90%", maxWidth: "400px" }}
        />
      </Container>
      <Container sx={{ padding: "40px" }}>
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