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
import { motion, AnimatePresence } from "framer-motion";

import testimonialsData from "../assets/testimonial.json";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const cardsToShow = isXs ? 1 : isSm ? 2 : 3;

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < testimonialsData.length - cardsToShow ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : testimonialsData.length - cardsToShow
    );
  };

  const currentTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  // New scale + fade animation variants
  const variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.7, transition: { duration: 0.3 } },
  };

  return (
    <Box
      sx={{
        padding: "30px",
        backgroundColor: "#f9fafb",
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
        color="#0d47a1"
        sx={{ mb: 4, fontWeight: "600" }}
      >
        What Our Users Say
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconButton onClick={handlePrev} disabled={testimonialsData.length === 0}>
          <ArrowBackIcon sx={{ color: "#0d47a1" }} />
        </IconButton>

        <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 900 }}>
          <AnimatePresence initial={false} mode="popLayout">
            {currentTestimonials.map((testimonial) => (
              <Grid
                component={motion.div}
                item
                xs={12}
                sm={6}
                md={4}
                key={testimonial.id}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    width: 260,
                    height: 260,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 3,
                    borderRadius: 3,
                    bgcolor: "white",
                    px: 2,
                    py: 3,
                    textAlign: "center",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      borderRadius: "50%",
                      width: 80,
                      height: 80,
                      marginBottom: 12,
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: "600", color: "#0d47a1" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: "#555", fontStyle: "italic" }}>
                    "{testimonial.feedback}"
                  </Typography>
                </Card>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        <IconButton onClick={handleNext} disabled={testimonialsData.length === 0}>
          <ArrowForwardIcon sx={{ color: "#0d47a1" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Testimonials;
