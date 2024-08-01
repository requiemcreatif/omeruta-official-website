// components/ContactForm/ContactForm.tsx

"use client";
import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const StyledForm = styled("form")(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[10],
}));

const AnimatedTextField = motion(TextField);
const AnimatedButton = motion(Button);

const ContactForm: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 8 }} id="contact">
      <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
        Get in Touch
      </Typography>
      <StyledForm>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h5" gutterBottom>
                Send us a Message
              </Typography>
              <AnimatedTextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <AnimatedTextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <AnimatedTextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <Box mt={2}>
                <AnimatedButton
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<SendIcon />}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </AnimatedButton>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                Feel free to reach out to us using the contact form or through
                the following channels:
              </Typography>
              <Typography variant="body1">Email: info@omeruta.com</Typography>
              {/* <Typography variant="body1">Phone: +1 (123) 456-7890</Typography> */}
              {/* <Typography variant="body1">
                Address: 123 Omeruta Street, Game City, GC 12345
              </Typography> */}
              <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                {/* Add social media icons here */}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </StyledForm>
    </Container>
  );
};

export default ContactForm;
