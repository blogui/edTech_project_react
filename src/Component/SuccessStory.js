import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { Star, Book, SupportAgent, Group, BusinessCenter, School } from "@mui/icons-material";

function SuccessStory() {
  return (
    <Box sx={{ backgroundColor: "#e0f2f1", py: { xs: 4, md: 6 } }}>
      <Container>
        {/* Title Section */}
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "20px", md: "32px" } }}
        >
          Your Success Story is Next
        </Typography>

        <Grid container spacing={4} sx={{ mt: { xs: 2, md: 4 } }}>
          {/* Left Content Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: { xs: 3, md: 4 } }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: { xs: "16px", md: "20px" } }}
              >
                World Class Pedagogy
              </Typography>
              <ul style={{ paddingLeft: "20px" }}>
                <li style={{ marginBottom: "8px" }}>
                  Learn from best faculties & industry experts
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Learn with fun hands-on exercises & assignments
                </li>
                <li>Participate in group activities</li>
              </ul>
            </Box>
            <Box sx={{ mb: { xs: 3, md: 4 } }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: { xs: "16px", md: "20px" } }}
              >
                Personalized Guidance with 24/7 Support
              </Typography>
              <ul style={{ paddingLeft: "20px" }}>
                <li style={{ marginBottom: "8px" }}>24/7 learning support</li>
                <li style={{ marginBottom: "8px" }}>Global certification support</li>
                <li>Premium content with lifetime free upgrade</li>
              </ul>
            </Box>
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: { xs: "16px", md: "20px" } }}
              >
                Career Assistance
              </Typography>
              <ul style={{ paddingLeft: "20px" }}>
                <li style={{ marginBottom: "8px" }}>Resume building & interview prep</li>
                <li style={{ marginBottom: "8px" }}>
                  Job-ready employees post training
                </li>
                <li>Network with peers & interact with industry leaders</li>
              </ul>
            </Box>
          </Grid>

          {/* Right Cards Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "block" }, // Hide on small screens
            }}
          >
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
                  <Card
                    sx={{
                      backgroundColor: "#f5f5f5",
                      textAlign: "center",
                      boxShadow: 3,
                      padding: { xs: 1, md: 2 },
                    }}
                  >
                    <CardContent>
                      {item.icon}
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "14px", md: "16px" } }}
                      >
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
