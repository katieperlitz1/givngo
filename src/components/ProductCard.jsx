import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Button,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Person from '@mui/icons-material/Person'
import { Link as RouterLink } from "react-router-dom";
import { blue } from '@mui/material/colors';

export default function ProductCard(props) {
  const priceColor = props.product.price === "Free" ? "primary" : "warning";

  return (
    <Card
      sx={{ width: '100%', maxWidth: "100%", boxShadow: 3, borderRadius: 3}}
      variant="outlined"
    >
      <CardMedia
        component="img"
        height="220"
        image={props.product.image}
        alt={props.product.title}
      />
      <CardContent>
        <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold"}}>
          {props.product.title}
          <Chip
            size="small"
            color={priceColor}
            label={props.product.price}
            sx={{ ml: 1}}
          />
        </Typography>
        <Link
          href={props.product.link}
          variant="body2"
          color="text.secondary"
          underline="hover"
          sx={{ display: "block", mt: 1 }}
        >
          <Person sx={{color:'primary', height:'80%', mb:'3px', mr: 1}}/>
          {props.product.credit}
        </Link>
        <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
          {props.product.description}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", paddingBottom: '16px', marginBottom:0, paddingTop:0}}>
        <Button
          size="large"
          variant="outlined"
          href={props.product.link}
          endIcon={<ArrowOutwardIcon />}
          component={RouterLink}
          to={props.product.link}
          sx={{  color: "white", color: blue[500], width:'100%', fontWeight:'bold'}}
        >
          Use Resource
        </Button>
      </CardContent>
    </Card>
  );
}