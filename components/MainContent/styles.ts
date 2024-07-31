// components/MainContent/MainContent.styles.ts

import { styled, Box, Typography, Button } from "@mui/material";

export const MainContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  maxWidth: "800px",
  textAlign: "center",
}));

export const MainTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const MainDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontSize: "1.1rem",
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
}));

export const CTAButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: theme.shadows[4],
  },
}));
