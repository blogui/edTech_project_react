import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import coursesData from "../assets/courses.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Arrow = ({ direction, onClick, show }) =>
  show && (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        [direction]: "10px",
        zIndex: 10,
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        transform: "translateY(-50%)",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
      }}
    >
      {direction === "left" ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
    </IconButton>
  );

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

function Courses() {
  const [categories, setCategories] = useState([]);
  const [slideStates, setSlideStates] = useState({});
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      setSlidesToShow(screenWidth < 600 ? 1 : screenWidth < 1024 ? 2 : 3);
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    setCategories(coursesData.categories);
    const initialStates = {};
    coursesData.categories.forEach((c) => (initialStates[c.id] = 0));
    setSlideStates(initialStates);
  }, []);

  const handleBeforeChange = (categoryId, oldIndex, newIndex) => {
    setSlideStates((prev) => ({ ...prev, [categoryId]: newIndex }));
  };

  const calculateMaxSlides = (count) => Math.max(0, count - slidesToShow);

  const sliderSettings = (id, count) => ({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    beforeChange: (old, next) => handleBeforeChange(id, old, next),
    prevArrow: <Arrow direction="left" show={slideStates[id] > 0} />,
    nextArrow: <Arrow direction="right" show={slideStates[id] < calculateMaxSlides(count)} />,
  });

  return (
    <Box sx={{ backgroundColor: "#f0f4fa", py: 6 }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 5,
            fontWeight: 700,
            color: "#012478",
            position: "relative",
            display: "inline-block",
            px: 2,
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "4px",
              background: "linear-gradient(90deg, #4a90e2, #012478)",
            },
          }}
        >
          Courses
        </Typography>

        {categories.map((category, categoryIndex) => (
          <Box key={category.id} sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: "#333" }}>
              {category.name}
            </Typography>

            <Box sx={{ position: "relative" }}>
              <Slider {...sliderSettings(category.id, category.courses.length)}>
                {category.courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    custom={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ padding: "0 10px" }}
                  >
                    <Card
                      sx={{
                        width: "100%",
                        maxWidth: 280,
                        height: "100%",
                        mx: "auto",
                        borderRadius: 3,
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                        transition: "transform 0.3s",
                        "&:hover": {
                          transform: "translateY(-8px)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={course.image}
                        alt={course.title}
                        height="140"
                      />
                      <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {course.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {course.description}
                        </Typography>
                        <Link to={`/course/${course.id}`}>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              background: "linear-gradient(45deg, #4a90e2, #012478)",
                              color: "#fff",
                              textTransform: "none",
                              "&:hover": {
                                background: "linear-gradient(45deg, #012478, #4a90e2)",
                              },
                            }}
                          >
                            View Details
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Slider>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default Courses;
