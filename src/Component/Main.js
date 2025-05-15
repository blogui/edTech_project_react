import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import myImage from "../assets/child_studying_1.svg";
import logo from "../assets/logo.jpg";

function Main({ leftTitle, leftSubtitle }) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        width: "100%",
        minHeight: "90vh",
        backgroundColor: "#012478",
        margin: 0,
        padding: isSmallScreen ? "40px 20px" : isMediumScreen ? "60px 40px" : "100px 120px",
        overflow: "hidden",
        position: "relative",
        color: "#fff",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",  
            marginTop:"50px"
      }}
    >
      {/* Left Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        style={{
          width: isSmallScreen ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Box sx={{ mb: isSmallScreen ? 1 : 3 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              maxWidth: isSmallScreen ? "70px" : "120px",
              height: "auto",
              borderRadius: "15%", // softer edges
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
          />
        </Box>

        {/* Text */}
        <Typography
          variant={isSmallScreen ? "h3" : "h2"}
          component="div"
          fontWeight="700"
          sx={{
            mb: 1,
            textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
            letterSpacing: "0.05em",
          }}
        >
          {leftTitle || "LOGIC JUNIOR"}
        </Typography>
        <Typography
          variant={isSmallScreen ? "body1" : "h5"}
          component="div"
          sx={{ fontStyle: "italic", color: "#a3cdfd", textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
        >
          {leftSubtitle || "Master the Logic, Sharpen the Mind"}
        </Typography>
      </motion.div>

      {/* Right Section */}
      {isSmallScreen ? (
        // On small screen, show image below text, smaller and centered
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "100%",
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={myImage}
            alt="Child Studying"
            style={{
              width: "70%",
              maxWidth: "300px",
              borderRadius: "20px",
              boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
              userSelect: "none",
            }}
          />
        </motion.div>
      ) : (
        // On medium and large screens, show as background image
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            width: "50%",
            backgroundImage: `url(${myImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "20px",
            boxShadow: "0 12px 24px rgba(0,0,0,0.4)",
          }}
        />
      )}

      {/* Global Reset */}
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      </style>
    </Box>
  );
}

export default Main;
