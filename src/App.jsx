import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PSDs from "./pages/PSDs";
import Textures from "./pages/Textures";
import Elements from "./pages/Elements";
import Home from "./pages/Home";
import CreatorShops from './pages/CreatorShops'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';

const theme = extendTheme({
  palette: {
        primary: {
          main: '#0094FF',
        },
        secondary: {
          main: '#edf2ff',
        },
      },
});

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#0094FF',
//     },
//     secondary: {
//       main: '#edf2ff',
//     },
//   },
// });


export default function App() {

  return (
    <CssVarsProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psds" element={<PSDs />} />
        <Route path="/textures" element={<Textures />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/creatorshops" element={<CreatorShops />} />
      </Routes>
    </BrowserRouter>
    </CssVarsProvider>
  );
};
