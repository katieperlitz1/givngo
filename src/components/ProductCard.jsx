import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link as RouterLink } from "react-router-dom";
import { blue } from '@mui/material/colors';


export default function ProductCard(props) {
  const priceColor = props.product.price === "Free" ? "primary" : "warning";

  return (
      <Card sx={{ width: 300, maxWidth: "100%", boxShadow: "lg"}}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img src={props.product.image} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: "xl" }}
            endDecorator={
              <Chip
                component="span"
                size="sm"
                variant="soft"
                color={priceColor}
              >
                {props.product.price}
              </Chip>
            }
          >
            {props.product.title}
          </Typography>
          <Link
            href={props.product.link}
            fontWeight="md"
            color="neutral"
            textColor="secondary"
            overlay
            level="body-xs"
          >
            {props.product.credit}
          </Link>
          <Typography
            fontWeight="md"
            color="neutral"
            textColor="text.primary"
            overlay
          >
            {props.product.description}
          </Typography>
        </CardContent>
        <CardOverflow>
          <Button
            size="lg"
            href={props.product.link}
            endDecorator={<ArrowOutwardIcon />}
            component={RouterLink}
            to={props.product.link}
            sx={{bgcolor: blue[500]}}
          >
            Use this resource
          </Button>
        </CardOverflow>
      </Card>
  );
}