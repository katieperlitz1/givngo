import * as React from 'react';
import { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  IconButton,
  Box,
  Button,
  Link
} from "@mui/material";
import BookmarkOutlined from "@mui/icons-material/BookmarkOutlined";
import BookmarkBorderOutlined from "@mui/icons-material/BookmarkBorderOutlined";
import Person from "@mui/icons-material/Person";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import { Link as RouterLink } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { AuthContext } from "../auth/AuthContext";
import * as Auth from "../auth/auth_utils";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function ProductCard(props) {
  const priceColor = props.product.price === "Free" ? "primary" : "warning";
  const { loggedIn, currUser, setLoading } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(null);
  const [creditLink, setCreditLink] = useState(null);
  

  const fetchCredit = async () => {

    const q = query(
      collection(db, "credits"),
      where("name", "==", props.product.credit)
    );
    const querySnapshot = await getDocs(q);
    const creditDocs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (creditDocs[0] && creditDocs[0].link) {
      setCreditLink(creditDocs[0].link)
    }
  };

  useEffect(() => {
    if (currUser) {
      setIsFavorite(currUser.favorites.includes(props.product.id))
    }
    fetchCredit()
  },[])

  const handleFavorite = async (productId) => {
    if (isFavorite) {
      await Auth.removeFavorite(currUser, productId);
    } else {
      await Auth.addFavorite(currUser, productId);
    }
    setIsFavorite(!isFavorite);
  };

  const handleClick = async () => {
      if (currUser) {
        if (!(currUser.email === "katieperlitz@gmail.com")) {
        const docRef = collection(db, "clicks");
        await addDoc(docRef, {
          user: currUser.email,
          time: new Date(),
          resource: props.product.title,
        });
      }
      } else {
        const docRef = collection(db, "clicks");
        await addDoc(docRef, {
          user: "Guest",
          time: new Date(),
          resource: props.product.title,
        })
        .catch((error) => {
          console.log(error.message);
        });
      }
    
  };
    
  

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "100%",
        boxShadow: 3,
        borderRadius: 3,
        position: "relative",
        zIndex: 0,
        transition: "transform 0.2s ease-in-out", // Add transition for smooth animation
        "&:hover": {
          transform: "scale(1.04)", // Slightly enlarge the card on hover
        },
      }}
    >
      {1 == 1 ? (
        <IconButton
          aria-label="add to favorites"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: blue[500],
            backgroundColor: "white",
            zIndex: 1,
            "&:hover": {
              backgroundColor: blue[100],
            },
            boxShadow: 3,
          }}
          onClick={() => handleFavorite(props.product.id)}
        >
          {isFavorite ? <BookmarkOutlined /> : <BookmarkBorderOutlined />}
        </IconButton>
      ) : null}
      <CardMedia
        component="img"
        height="220"
        image={props.product.image}
        alt={props.product.title}
        loading="lazy"
      />
      <CardContent>
        <Typography variant="h6" sx={{ mt: 1, fontWeight: "600" }}>
          {props.product.title}
          <Chip
            size="small"
            color={priceColor}
            label={props.product.price}
            sx={{ ml: 1 }}
          />
        </Typography>
        <Box
          variant="body2"
          color="text.secondary"
          underline="hover"
          sx={{ display: "flex", mt: 1 }}
        >
          <Person sx={{ color: "primary", height: "80%", mb: "3px", mr: 1 }} />
          {creditLink ?
          <Link href={creditLink} color="text.secondary" target="_blank">
            <Typography variant="body2" sx={{ mt: "3px" }}>
              {props.product.credit}
            </Typography>
          </Link>
          : 
          <Typography variant="body2" sx={{ mt: "3px" }}>
              {props.product.credit}
          </Typography>
          }
        </Box>
        <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
          {props.product.description}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          paddingBottom: "16px",
          marginBottom: 0,
          paddingTop: 0,
        }}
      >
        <Button
          size="large"
          variant="outlined"
          endIcon={<ArrowOutward />}
          component={RouterLink}
          to={props.product.link}
          sx={{ color: blue[500], width: "100%", fontWeight: "bold" }}
          target="_blank"
          onClick={() => handleClick()}
        >
          Use Resource
        </Button>
      </CardContent>
    </Card>
  );
}