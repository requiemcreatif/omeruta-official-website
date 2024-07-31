import { Box, Container } from "@mui/material";
import Banner from "@/components/Banner";
import { HeroSection } from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import { ProjectSections } from "@/components/ProjectSections";
import CookieDisclaimer from "@/components/CookieDisclaimer";

export default function Home() {
  return (
    <>
      <Banner />
      <HeroSection />

      <Container>
        <MainContent />
        <ProjectSections />
      </Container>
      <CookieDisclaimer />
    </>
  );
}
