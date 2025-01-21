import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

// Country codes list
const countryCodes = [
  { code: "+1", label: "United States" },
  { code: "+44", label: "United Kingdom" },
  { code: "+91", label: "India" },
  { code: "+61", label: "Australia" },
  { code: "+81", label: "Japan" },
  { code: "+49", label: "Germany" },
  { code: "+33", label: "France" },
  { code: "+34", label: "Spain" },
  { code: "+39", label: "Italy" },
  { code: "+7", label: "Russia" },
  // Add more countries here or fetch dynamically if needed.
];

function ContactUs() {
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${countryCode} ${phoneNumber}`);
  };

  return (
    <Box sx={{ backgroundColor: "#f2f2f2", py: 6, px: 3 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Get in touch
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Drop us a message and we will reach out to you as soon as possible
          </Typography>
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#fcf4d9",
              padding: 3,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <TextField label="Name" fullWidth required />
            
            {/* Country Code and Phone Number */}
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>Code</InputLabel>
                <Select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  label="Code"
                >
                  {countryCodes.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.label} ({country.code})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Phone Number"
                fullWidth
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Box>

            <TextField label="Email" fullWidth required />
            <TextField label="Message" fullWidth multiline rows={4} required />
            
            <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Social Media Icons */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <IconButton href="#" aria-label="Facebook">
          <Facebook />
        </IconButton>
        <IconButton href="#" aria-label="Instagram">
          <Instagram />
        </IconButton>
        <IconButton href="#" aria-label="Twitter">
          <Twitter />
        </IconButton>
        <IconButton href="#" aria-label="LinkedIn">
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ContactUs;
