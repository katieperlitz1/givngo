import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PSDs from "./pages/PSDs";
import Textures from "./pages/Textures";
import Effects from "./pages/Effects";
import Home from "./pages/Home";
import CreatorShops from "./pages/CreatorShops";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { blue } from "@mui/material/colors";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Box, CircularProgress } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: "#0094FF",
    },
    secondary: {
      main: blue[800],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      },
    },
  },
});

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(loggedIn);

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
      setLoading(false);
    });
    console.log("rendering app");
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psds" element={<PSDs />} />
          <Route path="/textures" element={<Textures />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/creatorshops" element={<CreatorShops />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/profile"
            element={
              <Profile
                loggedIn={loggedIn}
                loading={loading}
                currUser={currUser}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};
