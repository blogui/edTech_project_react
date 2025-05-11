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
  const [slideStates, setSlideStates] = useState({});
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Detect screen size and adjust slidesToShow
  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setSlidesToShow(1);
      } else if (screenWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  useEffect(() => {
    setCategories(coursesData.categories);

    // Initialize slide states for each category
    const initialSlideStates = {};
    coursesData.categories.forEach((category) => {
      initialSlideStates[category.id] = 0; // Default to first slide
    });
    setSlideStates(initialSlideStates);
  }, []);

  const handleBeforeChange = (categoryId, oldIndex, newIndex) => {
    setSlideStates((prevStates) => ({
      ...prevStates,
      [categoryId]: newIndex,
    }));
  };

  const calculateMaxSlides = (courseCount) => {
    return Math.max(0, courseCount - slidesToShow);
  };

  const sliderSettings = (categoryId, courseCount) => ({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) =>
      handleBeforeChange(categoryId, oldIndex, newIndex),
    prevArrow: (
      <Arrow
        direction="left"
        show={slideStates[categoryId] > 0} // Show left arrow if not on the first slide
      />
    ),
    nextArrow: (
      <Arrow
        direction="right"
        show={slideStates[categoryId] < calculateMaxSlides(courseCount)} // Show right arrow if not on the last slide
      />
    ),
  });

  return (
    <Box
      sx={{
        position: "relative",
        padding: "30px",
        paddingTop: "60px",
      }}
    >
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
          zIndex: 1,
          color: "#012478",
          fontSize: { xs: "24px", sm: "32px" },
        }}
      >
        Courses
      </Typography>

      {/* Content section */}
      <Box
        sx={{
          marginTop: { xs: "40px", sm: "20px" },
        }}
      >
        {categories.map((category) => (
          <Box key={category.id} sx={{ marginBottom: 4 }}>
            <Typography
              variant="h4"
              sx={{
                marginBottom: 2,
                fontSize: { xs: "18px", sm: "24px" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {category.name}
            </Typography>

            <Box sx={{ position: "relative", zIndex: 0 }}>
              <Slider {...sliderSettings(category.id, category.courses.length)}>
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
    </Box>
  );
}

export default Courses;
