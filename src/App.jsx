import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PSDs from "./pages/PSDs";
import Textures from "./pages/Textures";
import Elements from "./pages/Elements";
import Home from "./pages/Home";
import CreatorShops from './pages/CreatorShops'
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import  createTheme  from "@mui/material/styles/createTheme"
import  ThemeProvider  from "@mui/material/styles/ThemeProvider"
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[800],
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psds" element={<PSDs />} />
        <Route path="/textures" element={<Textures />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/creatorshops" element={<CreatorShops />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};
