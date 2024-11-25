"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { GradientText } from "@/components/FontPage/GradientText";
import Camart from "@/public/images/camart_web.png";
import Daouda from "@/public/images/daouda_shabazz.png";
import Studio from "@/public/images/studio_g_light.png";

const projects = [
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
      "Daouda Shabazz, photographe autodidacte, est un témoin de son monde. Il y a longtemps...",
    buttonText: "Discover Daouda",
    url: "https://www.daoudashabazz.com/",
  },
  {
    image: Studio,
    alt: "Studio G Light",
    description:
      "Tu centro de entrenamiento familiar donde podrás mejorar tu salud con diferentes tipos...",
    buttonText: "Visit Studio G",
    url: "https://www.studio-g.es/",
  },
];

export function ProjectSections() {
  return (
    <section className="py-12 relative overflow-hidden" id="projects">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" /> */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" /> */}
      </div>

      <div className="container px-4 relative">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Our Projects</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of successful projects and see how we've
            helped businesses achieve their digital goals.
          </p>
        </motion.div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSections;
