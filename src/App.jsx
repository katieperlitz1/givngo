import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PSDs from "./pages/PSDs";
import Textures from "./pages/Textures";
import Elements from "./pages/Elements";
import Home from "./pages/Home";
import CreatorShops from './pages/CreatorShops'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "styled-components";

export default function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psds" element={<PSDs />} />
        <Route path="/textures" element={<Textures />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/creatorshops" element={<CreatorShops />} />
      </Routes>
    </Router>
  );
};
