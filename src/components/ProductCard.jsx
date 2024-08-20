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
} from "@mui/material";
import BookmarkOutlined from "@mui/icons-material/BookmarkOutlined";
import BookmarkBorderOutlined from "@mui/icons-material/BookmarkBorderOutlined";
import Person from "@mui/icons-material/Person";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import { Link as RouterLink } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { AuthContext } from "../auth/AuthContext";
import * as Auth from "../auth/auth_utils";

export default function ProductCard(props) {
  const priceColor = props.product.price === "Free" ? "primary" : "warning";
  const { loggedIn, currUser, setLoading } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(null)

  useEffect(() => {
    if (currUser) {
      setIsFavorite(currUser.favorites.includes(props.product.id))
    }
  },[])

  const handleFavorite = async (productId) => {
    if (isFavorite) {
      await Auth.removeFavorite(currUser, productId);
    } else {
      await Auth.addFavorite(currUser, productId);
    }
    setIsFavorite(!isFavorite);
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
      {loggedIn ? (
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
      />
      <CardContent>
        <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
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
          <Typography variant="body2" sx={{ mt: "3px" }}>
            {props.product.credit}
          </Typography>
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
          href={props.product.link}
          endIcon={<ArrowOutward />}
          component={RouterLink}
          to={props.product.link}
          sx={{ color: blue[500], width: "100%", fontWeight: "bold" }}
        >
          Use Resource
        </Button>
      </CardContent>
    </Card>
  );
}