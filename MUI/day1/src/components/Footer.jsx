import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
        <Box
    component="footer"
    sx={{
        p: 3,
        bgcolor: "black",
        color: "white",
        textAlign: "center"
    }}
    >
    <Typography>
        Gotham UI &copy; 2026
    </Typography>
    </Box>
    
    </>
  )
}
