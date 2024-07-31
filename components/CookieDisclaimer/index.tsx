"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Box, Typography, Button, Container } from "@mui/material";

const CookieDisclaimer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        color: "#000",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        zIndex: 10,
      }}
    >
      <Container>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          We are passionate about technology. To help us share that passion, we
          would like to use cookies and similar tools to personalize your
          experiences on our sites and to advertise on other sites. For more
          information and additional options, please click on Cookie Options
          below.{" "}
          <Typography
            component="span"
            color="inherit"
            sx={{ textDecoration: "underline" }}
          >
            <Link href="#">Politica de privacidad</Link>
          </Typography>
          .
        </Typography>
      </Container>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          onClick={() => setIsVisible(false)}
          sx={{
            color: "#fff",
            backgroundColor: "#000",
            textTransform: "none",
            width: "150px",
            "&:hover": { backgroundColor: "#a91d3a" },
          }}
        >
          Rechazar Todo
        </Button>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => setIsVisible(false)}
          sx={{
            color: "#fff",
            backgroundColor: "#000",
            textTransform: "none",
            width: "150px",
            "&:hover": { backgroundColor: "#a91d3a" },
          }}
        >
          Aceptar Todo
        </Button>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => {}}
          sx={{
            color: "#fff",
            backgroundColor: "#000",
            textTransform: "none",
            width: "160px",
            "&:hover": { backgroundColor: "#a91d3a" },
          }}
        >
          Elegir cookies
        </Button>
      </Box>
    </Box>
  );
};

export default CookieDisclaimer;
