import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, CardMedia, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import coursesData from "../assets/courses.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Arrow = ({ direction, onClick, show }) => (
  show && (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        [direction]: "10px",
        zIndex: 10,
        color: "#e2f3fb",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        transform: "translateY(-50%)",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
      }}
    >
      {direction === "left" ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
    </IconButton>
  )
);

function Courses() {
  const [categories, setCategories] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);

  useEffect(() => {
    setCategories(coursesData.categories);
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      const firstCategoryCourses = categories[0].courses.length;
      setMaxSlides(Math.max(0, firstCategoryCourses - 3));
    }
  }, [categories]);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Box sx={{ position: "relative", padding: "30px", paddingTop: "60px" }}>
      {/* Top "Courses" text */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          padding: "5px 10px",
          zIndex: 0,
          color: "#012478"
        }}
      >
        Courses
      </Typography>

      {categories.map((category) => (
        <Box key={category.id} sx={{ marginBottom: 4 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            {category.name}
          </Typography>

          <Box sx={{ position: "relative" , zIndex: 0}}>
            <Slider
              {...sliderSettings}
              prevArrow={
                <Arrow direction="left" show={currentSlide > 0 && category.courses.length > 3} />
              }
              nextArrow={
                <Arrow
                  direction="right"
                  show={currentSlide < maxSlides && category.courses.length > 3}
                />
              }
            >
              {category.courses.map((course) => (
                <div key={course.id} style={{ padding: "0 10px" }}>
                  <Card
                    sx={{
                      width: "240px",
                      height: "300px",
                      border: "3px solid",
                      borderColor: "#4a90e2",
                      borderRadius: "12px",
                      margin: "15px auto",
                      overflow: "visible",
                      boxShadow: 2,
                      textAlign: "center",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={course.title}
                      height="120"
                      image={course.image}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: 2 }}>
                        {course.description}
                      </Typography>
                      <Link to={`/course/${course.id}`}>
                        <Button variant="outlined" color="primary">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Courses;
