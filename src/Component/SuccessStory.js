import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { Star, Book, SupportAgent, Group, BusinessCenter, School } from "@mui/icons-material";

function SuccessStory() {
  return (
    <Box sx={{ backgroundColor: "#e0f2f1", py: 6 }}>
      <Container>
        {/* Title Section */}
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Your Success Story is Next
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Left Content Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                World Class Pedagogy
              </Typography>
              <ul>
                <li>Learn from best faculties & industry experts</li>
                <li>Learn with fun hands-on exercises & assignments</li>
                <li>Participate in group activities</li>
              </ul>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Personalized Guidance with 24/7 Support
              </Typography>
              <ul>
                <li>24/7 learning support</li>
                <li>Global certification support</li>
                <li>Premium content with lifetime free upgrade</li>
              </ul>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Career Assistance
              </Typography>
              <ul>
                <li>Resume building & interview prep</li>
                <li>Job-ready employees post training</li>
                <li>Network with peers & interact with industry leaders</li>
              </ul>
            </Box>
          </Grid>

          {/* Right Cards Section */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {[
                { icon: <Star />, label: "5/5 Rating" },
                { icon: <Book />, label: "Blended Learning" },
                { icon: <SupportAgent />, label: "24/7 Support" },
                { icon: <Group />, label: "1:1 Mentorship" },
                { icon: <School />, label: "Career Transition" },
                { icon: <BusinessCenter />, label: "Job Support*" },
              ].map((item, index) => (
                <Grid item xs={6} key={index}>
                  <Card sx={{ backgroundColor: "#f5f5f5", textAlign: "center", boxShadow: 3 }}>
                    <CardContent>
                      {item.icon}
                      <Typography variant="body1" fontWeight="bold">
                        {item.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SuccessStory;
