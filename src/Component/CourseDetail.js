import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CourseDetail({ data }) {
  const { courseId } = useParams();

  // Find the course by its ID from the JSON data
  const course = data.categories
    .flatMap((category) => category.courses)
    .find((course) => course.id === courseId);

  const [expanded, setExpanded] = useState(false);

  if (!course) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5">Course not found!</Typography>
      </Box>
    );
  }

  const handleAccordionChange = (index) => (event, newExpanded) => {
    setExpanded(newExpanded ? index : false); // Toggle expanded state
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        {course.name}: {course.title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {course.description}
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Course Content
      </Typography>
      {course.content.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index} // Apply expanded state to each accordion
          onChange={handleAccordionChange(index)} // Handle state change
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              "&.Mui-expanded": {
                bgcolor: "blue", // Change background color of the summary on click
                color: "white", // Change text color to white on click
              },
            }}
          >
            <Typography>{item.id}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default CourseDetail;
