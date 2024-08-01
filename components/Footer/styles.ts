// components/Footer/styles.ts
import { styled, Container, Box, Typography, IconButton } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[900]
      : theme.palette.background.paper,
  color:
    theme.palette.mode === "light"
      ? theme.palette.grey[400]
      : theme.palette.text.secondary,
  padding: theme.spacing(5, 0),
}));

export const FooterWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const FooterSocial = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.grey[400]
      : theme.palette.text.secondary,
  transition: "color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "translateY(-3px)",
  },
}));

export const FooterTextContent = styled(Box)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "right",
  },
}));

export const FooterCopyrights = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  marginBottom: theme.spacing(1),
  "& a": {
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export const FooterTerms = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
  },
}));

export const FooterLink = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  textTransform: "uppercase",
  "& a": {
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export const FooterBottom = styled(Typography)(({ theme }) => ({
  fontSize: "0.7rem",
  opacity: 0.7,
}));
