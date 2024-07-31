// components/ProjectSections/ProjectSections.styles.ts

import {
  styled,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

export const ProjectSectionsWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

export const ProjectSectionsTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const ProjectCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: theme.shadows[10],
  },
}));

export const ProjectImage = styled(Box)({
  position: "relative",
  //paddingTop: "56.25%", // 16:9 aspect ratio
  "& > span": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export const ProjectContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const ProjectDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export const ProjectButton = styled(Button)(({ theme }) => ({
  alignSelf: "flex-start",
  marginTop: "auto",
  textTransform: "none",
  fontWeight: 600,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
  },
}));
