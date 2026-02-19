import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
let [open, setOpen] = useState(false);

return (
    <>
        <Box
        component={"nav"}
        sx={{
            bgcolor: "#000",
            color: "white",
            px: 4,
            py: 2,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            boxShadow: 2
        }}
        >
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={
            {
                justifyContent:"space-between"
            }
            }
        >

            <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#CE2626" }}
            >
            Gaber
            </Typography>

            <Stack
            direction="row"
            spacing={2}
            sx={{
                display: {
                xs: "none",
                md: "flex"
                }
            }}
            >
                <Button

                href={"#home"}
                sx={{
                    color: "white",
                    fontSize: "1rem",

                    "&:hover": {
                    color: "#CE2626"
                    }
                }}
                >
                Home
                </Button>
                <Button

                href={"#menu"}
                sx={{
                    color: "white",
                    fontSize: "1rem",

                    "&:hover": {
                    color: "#CE2626"
                    }
                }}
                >
                Menu
                </Button>
                <Button

                href={"#about"}
                sx={{
                    color: "white",
                    fontSize: "1rem",

                    "&:hover": {
                    color: "#CE2626"
                    }
                }}
                >
                About
                </Button>
                <Button

                href={"#contact"}
                sx={{
                    color: "white",
                    fontSize: "1rem",

                    "&:hover": {
                    color: "#CE2626"
                    }
                }}
                >
                Contact
                </Button>

            </Stack>

{/*  burger icon */}
            <IconButton
            onClick={() => setOpen(true)}
            sx={{
                color: "white",
                display: {
                xs: "block",
                md: "none"
                }
            }}
            >
            <MenuIcon />
            </IconButton>
        </Stack>
        </Box>

{/* sidebar  */}
        <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        >
        <Stack spacing={2} sx={{ p: 3, width: 200, bgcolor:"#CE2626"  , height:"100%"  , justifyContent:"space-evenly" }}>
            <Button

                href={"#home"}
                onClick={() => setOpen(false)}
                sx={{
                    color:"black",
                    fontWeight:"bolder",
                    fontSize:"1.2rem"
                }}
            >
                Home
            </Button>
            <Button

                href={"#menu"}
                onClick={() => setOpen(false)}
                                sx={{
                    color:"black",
                    fontWeight:"bolder",
                    fontSize:"1.2rem"
                }}
            >
                Menu
            </Button>
            <Button

                href={"#about"}
                onClick={() => setOpen(false)}
                                sx={{
                    color:"black",
                    fontWeight:"bolder",
                    fontSize:"1.2rem"
                }}
            >
                About
            </Button>
            <Button

                href={"#contact"}
                onClick={() => setOpen(false)}
                                sx={{
                    color:"black",
                    fontWeight:"bolder",
                    fontSize:"1.2rem"
                }}
            >
                Contact
            </Button>
        </Stack>
        </Drawer>
    </>
);
}

