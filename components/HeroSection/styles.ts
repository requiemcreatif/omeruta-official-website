// components/HeroSection/HeroSection.styles.ts
import { styled } from "@mui/material/styles";
import { Typography, Button, Container, Box } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
  position: "relative",
  overflow: "hidden",
}));

export const HeroContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  fontSize: "2.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  fontSize: "1.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  fontSize: "1rem",
  lineHeight: 1.6,
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5, 4),
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
    transform: "translateY(-2px)",
    boxShadow: theme.shadows[4],
  },
}));

export const RequiemCreatifBox = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  boxShadow: theme.shadows[10],
  transform: "perspective(1500px) rotateY(-15deg)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "perspective(1500px) rotateY(0deg)",
  },
}));

export const RequiemCreatifTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: "2rem",
}));

export const RequiemCreatifDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1rem",
  lineHeight: 1.6,
}));
