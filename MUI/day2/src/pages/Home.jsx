import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function Home() {
      let [images , setImages]= useState(["/bat2.png" , "/bat2.png" , "/bat2.png" , "/bat2.png" , "/bat2.png" , "/bat2.png"])
  return (
    <>
    {/* Hero section */}
     <Box
     component={"section"}
     id="home"
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(/batman3.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white"
      }}
    >
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{
          justifyContent:"center",
          alignItems:"center",
          minHeight: "100vh",
          px: 2
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
        >
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
      </Stack>
    </Box>
    {/* Menu */}
 <Box 
 component={"section"}
 id="menu"
      sx={{
        bgcolor: "#0d0d0d",
        p: 4
      }}
    >
              <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "#CE2626",
            textAlign:"center",
            py:"12px"
          }}
        >
          Menu
        </Typography>
      <Grid container spacing={4} justifyContent="center">
        {images.map((img, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4
            }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3
              }}
            >
              <CardMedia
                component="img"
                height="180"
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
                  color="text.secondary"
                >
                  Gotham is filled with mysteries,
                  villains and heroes.
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                >
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    {/* About */}
     <Box
     component={"section"}
      id="about"
      sx={{
        bgcolor: "#0d0d0d",
        color: "white",
        py: 8,
        px: 4
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
      >
        {/* text part*/}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            order: {
              xs: 1,
              md: 2
            }
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={3}
            sx={{
              color: "#CE2626"
            }}
          >
            About Gotham
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 2
            }}
          >
            Gotham is a city covered by shadows, mystery,
            and chaos. Every street tells a different story,
            where heroes rise and villains leave their mark.
            In the darkness, hope still exists, and legends
            are born to protect the city when it needs them most.
          </Typography>
        </Grid>

            {/* photo part */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            order: {
              xs: 2,
              md: 1
            }
          }}
        >
              <Box
                component="img"
                src="/batman3.png"
                alt="Batman"
                sx={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 3
                }}
              />
        </Grid>
      </Grid>
    </Box>
    {/*  contact */}
     <Box
      id="contact"
      sx={{
        bgcolor: "#0d0d0d",
        color: "white",
        py: 8,
        px: 4
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
        sx={{
          alignItems:"center"
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "#CE2626"
          }}
        >
          Contact Us
        </Typography>

        <Stack
          spacing={3}
          sx={{
            width: {
              xs: "100%",
              md: "50%"
            }
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{
                  input: {
                    color: "white"
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray"
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#CE2626"
                  },

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray"
                    },

                    "&:hover fieldset": {
                      borderColor: "white"
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "#CE2626"
                    }
    }}}
            
          />

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
                        sx={{
                  input: {
                    color: "white"
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray"
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#CE2626"
                  },

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray"
                    },

                    "&:hover fieldset": {
                      borderColor: "white"
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "#CE2626"
                    }
    }}}
          />

          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
                        sx={{
                  input: {
                    color: "white"
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray"
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#CE2626"
                  },

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray"
                    },

                    "&:hover fieldset": {
                      borderColor: "white"
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "#CE2626"
                    }
    }}}
          />

          <Button
            variant="contained"
            color="error"
            size="large"
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
    </>
  )
}
