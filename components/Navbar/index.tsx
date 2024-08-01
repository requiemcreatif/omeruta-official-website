// components/Navbar/index.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useColorMode } from "../providers/ThemeProvider";
import { useTheme } from "@mui/material/styles";
import {
  NavAppBar,
  NavToolbar,
  NavLink,
  ModeToggleButton,
  MobileMenuIcon,
  StyledDrawer,
  CloseButton,
  LogoWrapper,
} from "./styles";

interface NavItem {
  id: string;
  label: string;
}

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useColorMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    } else {
      console.error(`Element with id ${id} not found.`);
    }
  };

  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "news", label: "News" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const drawer = (
    <StyledDrawer>
      <Box sx={{ textAlign: "right", p: 2 }}>
        <CloseButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </CloseButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              style={{
                width: "100%",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItemText primary={item.label} sx={{ textAlign: "center" }} />
            </Link>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );

  return (
    <NavAppBar position="sticky" isscrolled={isScrolled.toString()}>
      <Container maxWidth="lg">
        <NavToolbar>
          <LogoWrapper>
            <Link href="/" passHref>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  textDecoration: "none",
                }}
              >
                Omeruta
              </Typography>
            </Link>
          </LogoWrapper>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e as any, item.id)}
                    isscrolled={isScrolled.toString()}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </Box>
            )}
            <ModeToggleButton
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </ModeToggleButton>
            {isMobile && (
              <MobileMenuIcon
                onClick={handleDrawerToggle}
                aria-label="open drawer"
              >
                <MenuIcon />
              </MobileMenuIcon>
            )}
          </Box>
        </NavToolbar>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </NavAppBar>
  );
}
