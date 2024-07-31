// components/Banner/Banner.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  SlideContent,
  SlideTitle,
  SlideDescription,
  SlideStatus,
  DotContainer,
  Dot,
  NavIconButton,
} from "./styles";

const slides = [
  {
    title: "Better the Devil I know..",
    description: "Available on Playstation 5 | Xbox Series X | PC",
    status: " In development!",
  },
  {
    title: "Requiem Creatif",
    description: "specializes in innovative software development",
    status: "Read More...",
  },
  {
    title: "Omeruta",
    description:
      "an indie gaming company that thrives on crafting immersive, narrative-driven experiences.",
    status: "Learn More...",
  },
];

const Banner: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const theme = useTheme();

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BannerContainer>
      <Container maxWidth="lg">
        <Box
          position="relative"
          height="100%"
          display="flex"
          alignItems="center"
        >
          {slides.map((slide, index) => (
            <SlideContent
              key={index}
              style={{
                opacity: index === activeSlide ? 1 : 0,
                transform: `translateX(${(index - activeSlide) * 100}%)`,
              }}
            >
              <SlideTitle variant="h2">{slide.title}</SlideTitle>
              <SlideDescription>{slide.description}</SlideDescription>
              <SlideStatus>{slide.status}</SlideStatus>
            </SlideContent>
          ))}
          <NavIconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: theme.spacing(2),
            }}
          >
            <ArrowBackIos />
          </NavIconButton>
          <NavIconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: theme.spacing(2),
            }}
          >
            <ArrowForwardIos />
          </NavIconButton>
        </Box>
        <DotContainer>
          {slides.map((_, index) => (
            <Dot
              key={index}
              active={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </DotContainer>
      </Container>
    </BannerContainer>
  );
};

export default Banner;
