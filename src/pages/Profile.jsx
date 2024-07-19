import * as React from "react";
import { useState, useEffect } from "react";
import * as Auth from "../auth/auth_utils";
import { Typography, Container, Button, CircularProgress, Box} from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   const { currUser: user } = Auth.getUserId();
  //   console.log(user);
  //   if (user) {
  //     setCurrUser(user);
  //     setLoggedIn(true);
  //   }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "userData", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setCurrUser(docSnap.data());
        } else {
          console.log("No such document!");
        }
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      console.log("in here!")
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleSignOut = async () => {
    window.location.href = "/";
    await Auth.authSignOut();
    console.log("signing out");
  };

  console.log(currUser);
  console.log(setLoggedIn);

  return (
    <Box>
      {loggedIn ? (
        <Container sx={{
            gap:1,
            margin:3
          }}>
          <Typography variant="h3">My GivNGo</Typography>
          <Typography variant="h4" sx={{mt:2}}>Favorites</Typography>
          <Button
            variant="contained"
            onClick={handleSignOut}
            sx={{mt:5}}
          >
            Sign Out
          </Button>
        </Container>
      ) : !loading ? (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            padding:5,
            gap:1,
            pt: 10
          }}>
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
        <CircularProgress sx={{alignItems:"center"}}/>
      )}
    </Box>
  );
}

export default Profile;
