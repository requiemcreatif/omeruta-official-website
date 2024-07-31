// components/MainContent/MainContent.tsx

"use client";

import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import {
  MainContentWrapper,
  ContentBox,
  MainTitle,
  MainDescription,
  CTAButton,
} from "./styles";

export default function MainContent() {
  return (
    <Container>
      <MainContentWrapper>
        <ContentBox>
          <MainTitle variant="h3">Latest Updates</MainTitle>
          <MainDescription>
            Stay tuned for the latest updates and behind-the-scenes insights
            from Omeruta and Requiem Creatif. Here, we will share exciting news
            about our upcoming game releases, software development progress,
            industry partnerships, and special events. Whether it's a
            breakthrough in game design, a new software tool in the works, or an
            insider look at our creative process, you'll find all the freshest
            information right here.
          </MainDescription>
          <CTAButton variant="contained" color="secondary">
            Explore Updates
          </CTAButton>
        </ContentBox>
      </MainContentWrapper>
    </Container>
  );
}
