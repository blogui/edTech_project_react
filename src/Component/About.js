import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import me from "../assets/aboutMe1.jpeg";

function AboutUs() {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        py: 6,
        px: { xs: 2, md: 6 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
            Jyoti Mishra is a passionate educator and certified child psychologist with over 4 years of experience
            transforming how children learn. She has trained more than 300 students globally, from countries
            like the UK, USA, Australia, and China, specializing in IQ-boosting, logical reasoning, and creative
            problem-solving.

            Logic junior makes learning fun, interactive, and result-driven. By combining psychology with
            education, Jyoti helps children unlock their potential while preparing them for challenges like the 11+
            exam. Whether online or offline, her brain development workshops empower kids to think critically
            and independently.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Cursive",
              fontWeight: "bold",
              color: "#000",
              mt: 2,
            }}
          >
            {/* Signature */}
            Jyoti Mishra
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={me} // Replace with your image URL
            alt="About Us"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUs;
