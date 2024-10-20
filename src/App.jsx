import React from "react";
import { useContext, useEffect } from "react";
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
import Suggestions from "./pages/Suggestions";
import { AuthProvider, AuthContext } from "./auth/AuthContext";
import { Box, CircularProgress } from "@mui/material";
import All from "./pages/All"
import { getClickData, aggregateClicksByResource } from "./firebase/rankings";

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
  typography: {
    "fontFamily": "'Poppins','Montserrat', sans-serif",
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500

  }
});



export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

function AppContent() {
  const { loading } = useContext(AuthContext);

  // Resource rankings by clicks
    // useEffect(() => {
    //   const fetchAndRankResources = async () => {
    //     const clicks = await getClickData();
    //     const ranked = aggregateClicksByResource(clicks);
    //     console.log(ranked)
    //   };
    
    //   fetchAndRankResources();
    // }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
    <div className="homepage">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psds" element={<PSDs />} />
        <Route path="/textures" element={<Textures />} />
        <Route path="/effects" element={<Effects />} />
        <Route path="/creatorshops" element={<CreatorShops />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/all" element={<All />} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}