// components/Banner/Banner.styles.ts
import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";

export const BannerContainer = styled(Box)(({ theme }) => ({
  height: "500px",
  backgroundColor: theme.palette.background.default,
  overflow: "hidden",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const SlideContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "opacity 0.5s ease, transform 0.5s ease",
  padding: theme.spacing(2),
}));

export const SlideTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const SlideDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  marginBottom: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const SlideStatus = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 600,
  color: theme.palette.secondary.main,
}));

export const DotContainer = styled(Box)({
  position: "absolute",
  bottom: "40px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "15px",
});

export const Dot = styled("div")<{ active: boolean }>(({ theme, active }) => ({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: active
    ? theme.palette.secondary.main
    : theme.palette.grey[400],
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));

export const NavIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
