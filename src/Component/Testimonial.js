import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import the testimonials data from the JSON file
import testimonialsData from "../assets/testimonial.json"; // Adjust path as needed

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  // Media queries to determine screen size
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // Extra small devices
  const isSm = useMediaQuery(theme.breakpoints.only("sm")); // Small devices
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // Medium and larger devices

  // Determine the number of cards to display based on screen size
  const cardsToShow = isXs ? 1 : isSm ? 2 : 3;

  // Adjust the current testimonials to display
  const currentTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  // Handle next arrow click
  const handleNext = () => {
    if (currentIndex < testimonialsData.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the beginning for infinite scroll
    }
  };

  // Handle previous arrow click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonialsData.length - cardsToShow); // Jump to the last set for infinite scroll
    }
  };

  return (
    <Box
      sx={{
        padding: "30px",
        backgroundColor: "#f2f2f2",
        minHeight: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        color="#012478"
        sx={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#f2f2f2",
          padding: "5px",
          fontSize: { xs: "20px", sm: "24px", md: "28px" },
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
                  boxShadow: 3,
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
