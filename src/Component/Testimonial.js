import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import the testimonials data from the JSON file
import testimonialsData from "../assets/testimonial.json"; // Adjust path as needed

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next arrow click
  const handleNext = () => {
    if (currentIndex < testimonialsData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the beginning for infinite scroll
    }
  };

  // Function to handle previous arrow click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonialsData.length - 3); // Jump to the last set for infinite scroll
    }
  };

  // Get the current 3 testimonials to display
  const currentTestimonials = testimonialsData.slice(currentIndex, currentIndex + 3);

  return (
    <Box
      sx={{
        padding: "30px",
        backgroundColor: "#f2f2f2",
        minHeight: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative", // Allows absolute positioning for the header
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        color="#012478"
        sx={{
          position: "absolute",
          top: "20px", // 10px padding from the top
          left: "50%", // Center the text horizontally
          transform: "translateX(-50%)", // Adjust for true centering
          backgroundColor: "#f2f2f2", // Optional: add background for visibility
          padding: "5px", // Optional padding around the text
        }}
      >
        What Our Users Say
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px" }}>
        <IconButton onClick={handlePrev} disabled={testimonialsData.length === 0}>
          <ArrowBackIcon sx={{ color: "#012478" }} />
        </IconButton>

        <Grid container spacing={3} justifyContent="center">
          {currentTestimonials.map((testimonial) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={testimonial.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  width: "250px",
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      borderRadius: "50%",
                      marginBottom: "10px",
                      width: "80px",
                      height: "80px",
                    }}
                  />
                  <Typography variant="h6" gutterBottom align="center">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" align="center">
                    {testimonial.feedback}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <IconButton onClick={handleNext} disabled={testimonialsData.length === 0}>
          <ArrowForwardIcon sx={{ color: "#012478" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Testimonials;
