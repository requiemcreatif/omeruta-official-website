// components/HeroSection/HeroSection.tsx
"use client";

import React from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  HeroWrapper,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  GetStartedButton,
  RequiemCreatifBox,
  RequiemCreatifTitle,
  RequiemCreatifDescription,
} from "./styles";

export const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeroWrapper id="news">
      <HeroContainer>
        <HeroContent>
          <HeroTitle variant="h2">Omeruta Studio</HeroTitle>
          <HeroSubtitle variant="h3">
            Crafting Immersive Experiences
          </HeroSubtitle>
          <HeroDescription>
            At Omeruta, we blend groundbreaking technology with artistic vision
            to create games that offer more than just entertainment.
          </HeroDescription>
          <GetStartedButton href="#" variant="contained" size="large">
            Get Started
          </GetStartedButton>
        </HeroContent>
        <RequiemCreatifBox>
          <RequiemCreatifTitle variant="h4">
            Requiem Creatif
          </RequiemCreatifTitle>
          <RequiemCreatifDescription>
            Requiem Creatif, a pivotal department of Omeruta, specializes in
            innovative software development. We are dedicated to creating
            cutting-edge tools and solutions that empower both game developers
            and creative professionals.
          </RequiemCreatifDescription>
        </RequiemCreatifBox>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroSection;
