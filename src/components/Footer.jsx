import * as React from 'react';
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { auth, db } from "../firebase/config";
import { collection, addDoc, doc } from "firebase/firestore";

import InstagramIcon from "@mui/icons-material/Instagram";

const logoStyle = {
  width: "100px",
  height: "auto",
};

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  const handleSubscribe = async () => {
    const docRef = await addDoc(collection(db, "subscribe"), {
      email: email,
    });
    setEmail("")
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 7 },
        py: { xs: 8, sm: 10 },
        textAlign: {md: "left" },
      }}
      maxWidth="xl"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ ml: "-6px" }}>
              <img
                src={"/images/givngodark.png"}
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Email Updates
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Get notified when new resources are added.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                }}
                onChange={(e) => handleEmail(e)}
                value={email}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}
                onClick={() => handleSubscribe()}
              >
                Subscribe
              </Button>
            </Stack>
            <Typography variant="body2" color="text.secondary" mt={5}>Have something to add? Email businesskesper@gmail.com, and get credit on the site!</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ margin: "auto" }}
          >
            Created and Coded by Kesper Design
          </Typography>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/kesperdesign/"
            aria-label="Instagram"
            sx={{ alignSelf: "center" }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
