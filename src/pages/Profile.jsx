import * as React from "react";
import { useState, useEffect } from "react";
import * as Auth from "../auth/auth_utils";
import { Typography, Container, Button, CircularProgress, Box} from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function Profile(props) {
  const [signOutLoading, setSignOutLoading] = useState(false);

  const handleSignOut = async () => {
    setSignOutLoading(true);
    window.location.href = "/";
    await Auth.authSignOut();
    setSignOutLoading(false);
  };

  if (props.loading || signOutLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent:"center", pt:5}}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      {props.loggedIn ? (
        <Container
          sx={{
            gap: 1,
            margin: 3,
          }}
        >
          <Typography variant="h3">My GivNGo</Typography>
          <Typography variant="h4" sx={{ mt: 2 }}>
            Favorites
          </Typography>
          <Button variant="contained" onClick={handleSignOut} sx={{ mt: 5 }}>
            Sign Out
          </Button>
        </Container>
      ) : !props.loading && !signOutLoading ? (
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
        <CircularProgress sx={{ alignItems: "center" }} />
      )}
    </Box>
  );
}

export default Profile;
