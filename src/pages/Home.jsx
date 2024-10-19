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
import HomeAnimation from "../components/HomeAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



function Home() {
  useGSAP(() => {
    gsap.to("#title", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
      duration: 1,
    });

    gsap.fromTo(
      "#para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: .5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#explore",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: .5,
        stagger: 0.1,
      }
    );
  }, []);

  const [newResources, setNewResources] = useState([]);
  const { currUser } = useContext(AuthContext);

  const fetchNew = async () => {
    const querySnapshot = await getDocs(query(collection(db, "resources"), where("new", "==", true)));
    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setNewResources(newData);
    
  };

  useEffect(() => {
    fetchNew();
  }, []);


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
          id="title"
          variant="h3"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignSelf: "center",
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "500",
            padding: 2,
            opacity: 0,
          }}
        >
          The #1 Resource Library for Sports Graphics
        </Typography>
        <Typography
          id="para"
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
          id="explore"
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
            alignItems: { xs: "center", md: "normal" },
          }}
        >
          <FeaturedCard
            designer="Iowa Football"
            url="https://www.instagram.com/p/DA3d_49uW2t/"
            designerlink="https://www.instagram.com/hawkeyefootball/"
          />
          <FeaturedCard
            designer="Shauna Howell"
            url="https://www.instagram.com/p/DA5-H_jxtC1/"
            designerlink="https://x.com/shauna_howell1"
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
            fontSize: "45px",
            fontWeight: "500",
            padding: 0,
          }}
        >
          New Additions
        </Typography>
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          Stay up to date with our fresh finds.
        </Typography>
      </Container>
      <Container sx={{ padding: "40px" }}>
        <div className="product-grid">
          {newResources.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
      {/* <HomeAnimation /> */}
    </Box>
  );
};

export default Home;