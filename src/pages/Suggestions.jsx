import * as React from "react";
import { useState } from "react";
import { db } from "../firebase/config";
import {
  Button,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";

export default function Suggestions() {
    const [suggestion, setSuggestion] = useState({name:"", email:"", suggestion:""})
    const [response, setResponse] = useState("")

    const handleSuggestion = (e) => {
        setSuggestion({ ...suggestion, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!suggestion.name || !suggestion.email || !suggestion.suggestion) {
            setResponse("Please fill out all fields.")
        }
        else {
        const docRef = await addDoc(collection(db, "suggestions"), suggestion)
        .then(() => {
            setSuggestion({name:"", email:"", suggestion:""});
            setResponse("Success! Thanks for your submission.");
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(error);
          });
        
        }
      };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
      }}
    >
    <Typography variant="h3"  marginBottom={2} sx={{fontWeight:[500], textAlign:"center"}}>Suggest a Resource</Typography>
    <Typography marginBottom={5} sx={{textAlign:"center"}}>Any asset or resource you wish we had? Let us know, and we'll send you an email once we've found it!</Typography>
    <Container component="main" maxWidth="xs" sx={{display:"flex", flexDirection:"column", gap:2}}>
      <TextField
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        onChange={(e) => handleSuggestion(e)}
        value={suggestion.name}
      />
      <TextField
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        onChange={(e) => handleSuggestion(e)}
        value={suggestion.email}
      />
      <TextField
        required
        fullWidth
        id="suggestion"
        label="What would you like to see?"
        name="suggestion"
        multiline={true}
        rows={3}
        onChange={(e) => handleSuggestion(e)}
        value={suggestion.suggestion}
      />
      <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
        <Typography variant="body2" textAlign="center">{response}</Typography>
      </Container>
    </Container>
  );
}
