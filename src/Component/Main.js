import React from "react";
import { Box, Typography } from "@mui/material";
import myImage from "../assets/child_studying_1.svg"; // Importing the local image
import logo from "../assets/logo.jpg"; // Assuming you have a logo image

function Main({ leftTitle, leftSubtitle }) {
  return (
    <Box
      sx={{
        display: "flex",
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
          width: "50%",
          backgroundColor: "#012478",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          margin: 0,
        }}
      >
        {/* Logo */}
        <Box sx={{ mb: 2 }}>
          <img src={logo} alt="Logo" style={{ maxWidth: "100px", height: "auto" }} />
        </Box>

        {/* Text */}
        <Box textAlign="center">
          <Typography
            variant="h1"
            component="div"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            {leftTitle || "LOGIC JUNIOR"}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontStyle: "italic" }}
          >
            {leftSubtitle || "Master the Logic, Sharpen the Mind"}
          </Typography>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: "50%",
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 0,
          padding: 0,
          display: "block",
        }}
      />

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
