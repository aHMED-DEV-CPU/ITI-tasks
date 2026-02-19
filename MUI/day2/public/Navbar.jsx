import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <>
    
 <Box
 
      sx={{
        bgcolor: "#000000",
        zIndex:"9999",
        color: "white",
        px: 4,
        py: 2,
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: 2
      }}
    >
      <Typography variant="h4" component={"h1"} fontWeight="bold " sx={{
        color:"#CE2626"
      }}>
        Gaber
      </Typography>


        <Button
          variant="contained"
          sx={{
            bgcolor:"#CE2626",
            color:"#000000",
            fontSize:"1.2rem"
          }}
        >
          Login
        </Button>

    </Box>
    
    </>
  )
}
