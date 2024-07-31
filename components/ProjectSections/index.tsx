// components/ProjectSections/ProjectSections.tsx
"use client";

import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import Camart from "@/public/images/camart_web.png";
import Daouda from "@/public/images/daouda_shabazz.png";
import Studio from "@/public/images/studio_g_light.png";
import {
  ProjectSectionsWrapper,
  ProjectSectionsTitle,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectDescription,
  ProjectButton,
} from "./styles";

export const ProjectSections = () => {
  const projects = [
    {
      image: Camart,
      alt: "Camart",
      description:
        "En Cam Art Booking, tenemos actualmente a varios artistas del mundo del Hip-hop/Reggae.",
      buttonText: "Explore Camart",
    },
    {
      image: Daouda,
      alt: "Daouda Shabazz",
      description:
        "Daouda Shabazz, photographe autodidacte, est un témoin de son monde. Il y a longtemps déjà que l'image et lui sont complices.",
      buttonText: "Discover Daouda",
    },
    {
      image: Studio,
      alt: "Studio G Light",
      description:
        "Tu centro de entrenamiento familiar donde podrás mejorar tu salud con diferentes tipos de entrenamientos.",
      buttonText: "Visit Studio G",
    },
  ];

  return (
    <ProjectSectionsWrapper>
      <Container>
        <ProjectSectionsTitle variant="h3">Our Projects</ProjectSectionsTitle>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProjectCard>
                <ProjectImage>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    layout="responsive"
                  />
                </ProjectImage>
                <ProjectContent>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectButton variant="contained" color="secondary">
                    {project.buttonText}
                  </ProjectButton>
                </ProjectContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectSectionsWrapper>
  );
};

export default ProjectSections;
