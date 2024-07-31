import { text } from "stream/consumers";
// components/Navbar/styles.ts
import { AppBar, Box, IconButton, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

export const NavAppBar = styled(AppBar)(({ theme }) => ({
  height: "50px",
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.background.default
      : theme.palette.background.paper,
}));

export const NavToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const NavLink = styled(Link)<{ component: typeof Link }>(
  ({ theme }) => ({
    color:
      theme.palette.mode === "light" ? "#000" : theme.palette.secondary.light,
    padding: theme.spacing(1, 1),
    textTransform: "none",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  })
);

export const ModeToggleButton = styled(IconButton)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.text.primary
      : theme.palette.text.primary,
}));

export const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.text.primary
      : theme.palette.common.white,
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StyledDrawer = styled(Box)(({ theme }) => ({
  width: 300,
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light" ? "#1a1a1a" : theme.palette.background.paper,
  color: theme.palette.common.white,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: "inherit",
  transition: "transform 1s",
  "&:hover": {
    color: "#d38a23",
    transform: "rotate(180deg)",
  },
}));

export const LogoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});
