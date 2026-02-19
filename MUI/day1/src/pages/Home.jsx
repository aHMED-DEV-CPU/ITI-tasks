import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useState } from "react";
import Paper from "@mui/material/Paper";


export default function Home() {
    let [images , setImages]= useState(["/bat2.png" , "/bat2.png" , "/bat2.png" , "/bat2.png" , "/bat2.png" , "/bat2.png"])
  return (
    <>
    <Box
    sx={{
        backgroundImage:
        "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(/batman3.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        textAlign: "center",
        px: 2
    }}
    >
    <Typography variant="h2" fontWeight="bold">
        Welcome to Gotham
    </Typography>

    <LocationCityIcon sx={{ fontSize: 50 }} />

    <Typography variant="h6">
        The city needs a hero
    </Typography>

    <Button
        variant="contained"
        color="error"
        size="large"
    >
        Get Started
    </Button>
    </Box>

      {/* cards */}

    <Box
    sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        bgcolor: "#0d0d0d",
        p: 4
    }}
    >
    {images.map((img , index)=>(
        <Card
        key={index}
        sx={{
            maxWidth: 320,
            m: 2,
            borderRadius: 3,
            boxShadow: 3
        }}
        >
        <CardMedia
            sx={{ height: 180 }}
            image={img}
        />

        <CardContent>

            <Typography
            gutterBottom
            variant="h5"
            >
            Gotham Story
            </Typography>

            <Typography
            variant="body2"
            color="textSecondary"
            >
            Gotham is filled with mysteries,
            villains and heroes.
            </Typography>

        </CardContent>

        <CardActions>
    <Button
        variant="contained"
        color="error"
        size="large"
        fullWidth
    >
        Explore
    </Button>
        </CardActions>

        </Card>
    ))}
    </Box>

{/* paper */}
<Box
    sx={{
    display: "flex",
    justifyContent: "center",
    gap: 3,
    p: 5,
    flexWrap: "wrap",
    bgcolor:"#15173D"
    }}
>
    <Paper
    elevation={16}
    sx={{
                color:"white",
        bgcolor:"#2a2c55",
        width: 250,
        p: 3,
        textAlign: "center"
    }}
    >
    <Typography variant="h5">
        Batman
    </Typography>

    <Typography>
        Gotham protector
    </Typography>
    </Paper>

    <Paper
    elevation={16}
    sx={{
                color:"white",
        bgcolor:"#2a2c55",
        width: 250,
        p: 3,
        textAlign: "center"
    }}
    >
    <Typography variant="h5">
        Joker
    </Typography>

    <Typography>
        Gotham villain
    </Typography>
    </Paper>

    <Paper
    elevation={16}
    sx={{
        color:"white",
        bgcolor:"#2a2c55",
        width: 250,
        p: 3,
        textAlign: "center"
    }}
    >
    <Typography variant="h5">
        Robin
    </Typography>

    <Typography>
        Batman partner
    </Typography>
    </Paper>
</Box>

    <Box
    sx={{
        p: 5,
        bgcolor: "#b10909e7",
        color: "white",
        textAlign: "center"
    }}
    >
    <Typography variant="h5">
        Join Gotham Today
    </Typography>

    <Typography sx={{mt:1}}>
        Explore the city and discover its secrets
    </Typography>

    <Button
        variant="contained"
        color="info"
        sx={{ mt: 3 }}
    >
        Learn More
    </Button>
    </Box>


    </>
);
}