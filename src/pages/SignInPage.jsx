import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { auth } from "../firebase/config";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function SignIn() {
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [dialogueOpen, setDialogueOpen] = useState(false);

  const handleDialogueClose = () => {
    setDialogueOpen(false);
  };

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    await signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = "/profile";
      })
      .catch((error) => {
        setError(error.message)
      });
  };

  const handleResetEmailChange = (e) => {
    setResetEmail(e.target.value)
  }

  const handlePasswordReset = () => {
    console.log(resetEmail);
    sendPasswordResetEmail(auth, resetEmail);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => handleCredentials(e)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => handleCredentials(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link onClick={() => setDialogueOpen(true)} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        {error && (
          <Typography variant="body2" color="error" align="center">
            {error}
          </Typography>
        )}
      </Box>
      <Dialog open={dialogueOpen} onClose={handleDialogueClose}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your email connected to your account below.
          </DialogContentText>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => handleResetEmailChange(e)}
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={setDialogueOpen(false)}>Cancel</Button> */}
          <Button onClick={handlePasswordReset} type="submit">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
