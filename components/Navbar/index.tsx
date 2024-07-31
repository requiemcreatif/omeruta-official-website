// components/Navbar/index.tsx
"use client";

import React, { useState, MouseEvent } from "react";
import {
  Typography,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
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
  label: string;
  href: string;
  onClick?: () => void;
}

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useColorMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "News", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const drawer = (
    <StyledDrawer>
      <Box sx={{ textAlign: "left", p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Omeruta
        </Typography>
        <CloseButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </CloseButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
                handleDrawerToggle();
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );

  return (
    <NavAppBar position="sticky">
      <Container>
        <NavToolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LogoWrapper>
              <Link href="/" passHref legacyBehavior>
                <Typography sx={{ color: theme.palette.text.primary }}>
                  Omeruta
                </Typography>
              </Link>
            </LogoWrapper>
            {!isMobile && (
              <>
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    component={Link}
                    href={item.href}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* {!isMobile && (
              <>
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    component={Link}
                    href={item.href}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </>
            )} */}
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
            <MobileMenuIcon
              onClick={handleDrawerToggle}
              aria-label="open drawer"
            >
              <MenuIcon />
            </MobileMenuIcon>
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
