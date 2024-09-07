import React from "react";
import { useState, useEffect, useContext } from "react";
import "../App.css";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  TextField,
  Card,
} from "@mui/material";
import { InstagramEmbed } from "react-social-media-embed";
import Brush from "@mui/icons-material/Brush";
import { blue } from "@mui/material/colors";

export default function FeaturedCard(props) {
  return (
      <div
        style={{
          transform: "scale(0.84)",
          transformOrigin: "top",
          width: "100%",
          maxWidth: "400px",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          gap:15
        }}
      >
        <Button
          sx={{
            width: "396px",
            maxWidth: "100%",
            boxShadow: 3,
            borderRadius: 3,
    
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 1,
            gap: 1,
            backgroundColor:"white",
            color:"black",
            fontWeight:"500"
          }}
          href={props.designerlink}
          target="_blank"
        >
          <Brush sx={{color:blue[500]}}></Brush>
          <Typography variant="h6" sx={{ fontWeight: "500", textTransform:"none"}}>
            {props.designer}
          </Typography>
        </Button>
        <InstagramEmbed url={props.url} width={400} sx={{boxShadow: 3}}/>
      </div>
  );
}
