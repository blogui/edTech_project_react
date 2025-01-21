import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

function Course({ data }) {
  return (
    <Grid container spacing={3} sx={{ padding: 4 }}>
      {data.categories.flatMap((category) => category.courses).map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course.id}>
          <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              alt={course.title}
              height="140"
              image={course.image}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.description}
              </Typography>
            </CardContent>
            <Link to={`/course/${course.id}`} style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="primary" fullWidth>
                View Course
              </Button>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Course;
