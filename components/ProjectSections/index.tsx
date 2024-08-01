// components/ProjectSections/ProjectSections.tsx
"use client";

import React from "react";
import { Container, Grid } from "@mui/material";
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
import Link from "next/link";

type Project = {
  image: any;
  alt: string;
  description: string;
  buttonText: string;
  url: string;
};

export const ProjectSections: React.FC = () => {
  const projects: Project[] = [
    {
      image: Camart,
      alt: "Camart",
      description:
        "En Cam Art Booking, tenemos actualmente a varios artistas del mundo del Hip-hop/Reggae.",
      buttonText: "Explore Camart",
      url: "https://www.camart.es/",
    },
    {
      image: Daouda,
      alt: "Daouda Shabazz",
      description:
        "Daouda Shabazz, photographe autodidacte, est un témoin de son monde. Il y a longtemps déjà que l'image et lui sont complices.",
      buttonText: "Discover Daouda",
      url: "https://www.daoudashabazz.com/",
    },
    {
      image: Studio,
      alt: "Studio G Light",
      description:
        "Tu centro de entrenamiento familiar donde podrás mejorar tu salud con diferentes tipos de entrenamientos.",
      buttonText: "Visit Studio G",
      url: "https://www.studio-g.es/",
    },
  ];

  return (
    <ProjectSectionsWrapper id="projects">
      <Container>
        <ProjectSectionsTitle variant="h3">Our Projects</ProjectSectionsTitle>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProjectCard>
                <ProjectImage>
                  <Image
                    priority
                    src={project.image}
                    alt={project.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </ProjectImage>
                <ProjectContent>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <Link target="_blank" href={project.url}>
                    <ProjectButton variant="contained" color="secondary">
                      {project.buttonText}
                    </ProjectButton>
                  </Link>
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
