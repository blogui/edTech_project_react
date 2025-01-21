import React, { useState } from "react";
import Logo from "../assets/logo.jpg"; // Importing local logo image
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };


  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#ffffff", color: "black", width: "100%", top: 0, zIndex: 10 }}>
        <Toolbar>
          {/* Logo Section */}
          <Typography
  variant="h6"
  component={Link}
  to="/" // Replace with your desired path
  sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none', color: "black" }}
>
  <img
    src={Logo} // Using local logo image
    alt="Logo"
    style={{ marginRight: '10px', height: '40px' }}
  />
  Logic Junior
</Typography>


          {/* Desktop Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button className="button_link" ><Link to="/courses" >Courses</Link></Button>
            <Button className="button_link" ><Link to="/about">About Us </Link>  </Button>
            <Button className="button_link" ><Link to="/contact">Contact Us</Link> </Button>

          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Full-Width Mobile Menu */}
        <Slide direction="down" in={mobileMenuOpen} mountOnEnter unmountOnExit>
          <Box
            sx={{
              position: "absolute",
              top: "56px", // Adjust for AppBar height
              left: 0,
              width: "100%",
              backgroundColor: "white",
              color: "black",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: 2,
              border: "2px solid red",
            }}
          >
            <Button
              onClick={handleMenuToggle}
              sx={{
                width: "100%",
                textAlign: "center",
                color: "black",
                "&:hover": {
                  backgroundColor: "#012478",
                  color: "white",
                },
              }}
            >
              Courses
            </Button>
            <Button
              onClick={handleMenuToggle}
              sx={{
                width: "100%",
                textAlign: "center",
                color: "black",
                "&:hover": {
                  backgroundColor: "#012478",
                  color: "white",
                },
              }}
            >
              About
            </Button>
            <Button
              onClick={handleMenuToggle}
              sx={{
                width: "100%",
                textAlign: "center",
                color: "black",
                "&:hover": {
                  backgroundColor: "#012478",
                  color: "white",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Slide>
      </AppBar>

      {/* Add margin top to the next component to prevent overlap */}
      <Box sx={{ marginTop: "64px" }}> {/* Adjust the value if needed */}

      </Box>
    </>
  );
}

export default Navbar;
