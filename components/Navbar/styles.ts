// components/Navbar/styles.ts
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

export const NavAppBar = styled(AppBar)(({ theme }) => ({
  height: "70px",
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(0, 0, 0, 0.8)",
  backdropFilter: "blur(10px)",
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const NavToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
});

export const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(1, 1),
  textTransform: "none",
  textDecoration: "none",
  fontWeight: 500,
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    bottom: 0,
    left: "50%",
    backgroundColor: theme.palette.secondary.main,
    transition: "all 0.3s ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
    left: "0%",
  },
}));

export const ModeToggleButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: "block",
}));

export const StyledDrawer = styled(Box)(({ theme }) => ({
  width: 250,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "rotate(90deg)",
  },
}));

export const LogoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",

  a: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));
