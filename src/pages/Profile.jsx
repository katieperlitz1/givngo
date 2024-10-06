import * as React from "react";
import { useState, useEffect, useContext } from "react";
import * as Auth from "../auth/auth_utils";
import {
  Typography,
  Container,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import { AuthContext } from "../auth/AuthContext";
import ProductCard from "../components/ProductCard"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { FlashOnTwoTone } from "@mui/icons-material";

function Profile() {
  const { currUser, loggedIn, loading } = useContext(AuthContext);
  const [signOutLoading, setSignOutLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleSignOut = async () => {
    setSignOutLoading(true);
    window.location.href = "/";
    await Auth.authSignOut();
    setSignOutLoading(false);
  };
  console.log("loading: " + loading);

  const fetchFavorites = async () => {
    if (currUser) {
      // Fetch user favorites
      const q = query(
        collection(db, "userData"),
        where("userId", "==", currUser.userId)
      );
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const favoritesArray = userData[0].favorites;

      // Collect the user favorite ids to its resource data in /resources
      if (favoritesArray.length > 0) {
        const resourcesCollection = collection(db, "resources");
        const resourcesQuery = query(
          resourcesCollection,
          where("__name__", "in", favoritesArray)
        );
        const resourcesSnapshot = await getDocs(resourcesQuery);
        const resources = resourcesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFavorites(resources);
      }
    }
  };

  useEffect(() => {
    console.log("Logged in? " + loggedIn)
    fetchFavorites();
  }, []);

  if (loading || signOutLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "40px" }}>
      {!(loggedIn == false) ? (
        <Container
          sx={{
            gap: 1,
            margin: 0,
          }}
        >
          <Typography variant="h3">My Profile</Typography>
          <Typography variant="h4" sx={{ mt: 2 }}>
            Favorites
          </Typography>
          <div className="favorites-grid">
            {favorites.map((doc) => (
              <ProductCard
                product={doc}
                key={doc.id}
                fetchFavorites={fetchFavorites}
              />
            ))}
          </div>
          <Button variant="contained" onClick={handleSignOut} sx={{ mt: 5 }}>
            Sign Out
          </Button>
        </Container>
      ) : !loading && !signOutLoading ? (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 5,
            gap: 1,
            pt: 10,
          }}
        >
          <Typography variant="h4">
            Sign in or create and account to view your profile.
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 2,
              marginTop: 2,
            }}
          >
            <Button variant="contained" href="/signin">
              Sign In
            </Button>
            <Button variant="contained" href="/signin">
              Sign Up
            </Button>
          </Container>
        </Container>
      ) : (
        <Typography variant="h4">Sign in to view your profile</Typography>
      )}
    </Box>
  );
}

export default Profile;
