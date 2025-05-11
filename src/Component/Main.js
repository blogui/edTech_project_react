import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import myImage from "../assets/child_studying_1.svg"; // Importing the local image
import logo from "../assets/logo.jpg"; // Assuming you have a logo image

function Main({ leftTitle, leftSubtitle }) {
  // Check if the screen size is small (e.g., less than 600px)
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row", // Stack on small screens
        width: "100%",
        minHeight: "90vh", // Flexible height for content below
        backgroundColor: "#012478",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "50%",
          backgroundColor: "#012478",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* Logo */}
        <Box sx={{ mb: 2 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              maxWidth: isSmallScreen ? "80px" : "100px", // Smaller logo on small screens
              height: "auto",
            }}
          />
        </Box>

        {/* Text */}
        <Box textAlign="center">
          <Typography
            variant={isSmallScreen ? "h2" : "h1"} // Smaller heading on small screens
            component="div"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            {leftTitle || "LOGIC JUNIOR"}
          </Typography>
          <Typography
            variant={isSmallScreen ? "h5" : "h4"} // Smaller subtitle on small screens
            component="div"
            sx={{ fontStyle: "italic" }}
          >
            {leftSubtitle || "Master the Logic, Sharpen the Mind"}
          </Typography>
        </Box>
      </Box>

      {/* Right Section */}
      {!isSmallScreen && ( // Hide the image section on small screens
        <Box
          sx={{
            width: "50%",
            backgroundImage: `url(${myImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Global Reset */}
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box; /* Ensures consistent layout handling */
          }
        `}
      </style>
    </Box>
  );
}

export default Main;
