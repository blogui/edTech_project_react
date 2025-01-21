import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Home,
  Email,
  WhatsApp,
  Print,
} from "@mui/icons-material";
import "./Footer.css";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#012478", color: "white" }}>
      <Container sx={{ py: 4 }}>
        {/* Footer Links Section */}
        <Grid 
          container 
          spacing={6} 
          justifyContent="space-between" 
          alignItems="flex-start"
        >
          {/* Company Name and Description */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Logic Junior
            </Typography>
            <Typography variant="body2" className="SubHeading">
              Learning can be fun. Reach out for the adventure.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>

          {/* Company Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Company
            </Typography>
            <Typography className="SubHeading contact_alignment">
              <Link href="#" color="inherit" underline="hover">
                About Us
              </Link>
            </Typography>
            <Typography className="SubHeading contact_alignment">
              <Link href="#" color="inherit" underline="hover">
                Career
              </Link>
            </Typography>
            <Typography className="SubHeading contact_alignment">
              <Link href="#" color="inherit" underline="hover">
                Gallery
              </Link>
            </Typography>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={3} >
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contact
            </Typography>
            <Typography variant="body2" className="SubHeading contact_alignment">
              <WhatsApp sx={{ mr: 1 }} />
              + 01 234 567 88
            </Typography>
            <Typography variant="body2" className="SubHeading contact_alignment">
              <Home sx={{ mr: 1 }} />
              New York, NY 10012, US
            </Typography>
            <Typography variant="body2" className="SubHeading contact_alignment">
              <Email sx={{ mr: 1 }} />
              info@gmail.com
            </Typography>
            
            <Typography variant="body2" className="SubHeading contact_alignment">
              <Print sx={{ mr: 1 }} />
              + 01 234 567 89
            </Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Follow Us
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: "#3b5998" }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" sx={{ color: "#ac2bac" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright Section */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)", py: 2 }}>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Copyright:{" "}
          <Link href="#" color="inherit" underline="hover">
            LogicJunior
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
