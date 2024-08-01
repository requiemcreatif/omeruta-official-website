// components/Navbar/styles.ts
import { styled } from "@mui/material/styles";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

export const NavAppBar = styled(AppBar)<{ isscrolled: string }>(
  ({ theme, isscrolled }) => ({
    height: "70px",
    backgroundColor:
      isscrolled === "true" ? theme.palette.background.paper : "transparent",
    boxShadow: isscrolled === "true" ? theme.shadows[4] : "none",
    transition: "all 0.3s ease-in-out",
  })
);

export const NavToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
});

export const NavLink = styled("a")<{ isscrolled: string }>(
  ({ theme, isscrolled }) => ({
    color:
      isscrolled === "true"
        ? theme.palette.text.primary
        : theme.palette.common.white,
    padding: theme.spacing(1, 1),
    textTransform: "none",
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: 0,
      left: "50%",
      backgroundColor:
        isscrolled === "true"
          ? theme.palette.secondary.main
          : theme.palette.common.white,
      transition: "all 0.3s ease-in-out",
    },
    "&:hover::after": {
      width: "100%",
      left: "0%",
    },
  })
);

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
