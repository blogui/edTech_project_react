import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import {
  Star,
  Book,
  SupportAgent,
  Group,
  BusinessCenter,
  School,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function SuccessStory() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #e0f7fa, #ffffff)",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container>
        {/* Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "24px", md: "36px" }, color: "#004d40" }}
          >
            Your Success Story is Next
          </Typography>
        </motion.div>

        <Grid container spacing={6} sx={{ mt: 4 }}>
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            {[
              {
                title: "World Class Pedagogy",
                points: [
                  "Learn from best faculties & industry experts",
                  "Learn with fun hands-on exercises & assignments",
                  "Participate in group activities",
                ],
              },
              {
                title: "Personalized Guidance with 24/7 Support",
                points: [
                  "24/7 learning support",
                  "Global certification support",
                  "Premium content with lifetime free upgrade",
                ],
              },
              {
                title: "Career Assistance",
                points: [
                  "Resume building & interview prep",
                  "Job-ready employees post training",
                  "Network with peers & interact with industry leaders",
                ],
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textVariant}
              >
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "#00695c" }}
                  >
                    {section.title}
                  </Typography>
                  <ul style={{ paddingLeft: "20px", color: "#424242" }}>
                    {section.points.map((point, idx) => (
                      <li key={idx} style={{ marginBottom: "8px" }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </Box>
              </motion.div>
            ))}
          </Grid>

          {/* Right Cards */}
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
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card
                      sx={{
                        backgroundColor: "#ffffff",
                        textAlign: "center",
                        boxShadow: 4,
                        borderRadius: "16px",
                        py: 3,
                        transition: "0.3s",
                        "&:hover": {
                          backgroundColor: "#e0f2f1",
                        },
                      }}
                    >
                      <CardContent>
                        <Box sx={{ color: "#00897b", mb: 1 }}>{item.icon}</Box>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          sx={{ fontSize: "16px" }}
                        >
                          {item.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
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
