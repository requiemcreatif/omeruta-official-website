// components/ContactForm/ContactForm.tsx

"use client";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  //Dialog,
  DialogContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

import { StyledDialog, CloseButton, ModalContent, SuccessIcon } from "./styles";

const StyledForm = styled("form")(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[10],
}));

const AnimatedTextField = motion(TextField);
const AnimatedButton = motion(Button);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  //const [confirmationOpen, setConfirmationOpen] = useState<boolean>(false);
  //const [error, setError] = useState<string | null>(null);
  //const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsModalOpen(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error (you could show an error modal here)
    }
  };

  return (
    <Box component="section" id="contact">
      <Container maxWidth="lg" sx={{ my: 8 }} id="contact">
        <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
          Get in Touch
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
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
                  name="name"
                  variant="outlined"
                  margin="normal"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <AnimatedTextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  margin="normal"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <AnimatedTextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Box mt={2}>
                  <AnimatedButton
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<SendIcon />}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
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
                  {/* TODO: Add social media icons here */}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </StyledForm>
      </Container>
      <StyledDialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogContent>
          <CloseButton onClick={() => setIsModalOpen(false)} aria-label="close">
            <CloseIcon />
          </CloseButton>
          <ModalContent>
            <SuccessIcon />
            <Typography variant="h5" gutterBottom>
              Message Sent
            </Typography>
            <Typography variant="body1">
              Your message has been sent successfully. We will get back to you.
            </Typography>
          </ModalContent>
        </DialogContent>
      </StyledDialog>
    </Box>
  );
};

export default ContactForm;
