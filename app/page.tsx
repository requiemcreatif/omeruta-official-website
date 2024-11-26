"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingNavbar } from "@/components/FontPage/FloatingNavbar";
import { FeatureCard } from "@/components/FontPage/FeatureCard";
import { GradientText } from "@/components/FontPage/GradientText";
import { Container } from "@mui/material";
import { ProjectSections } from "@/components/ProjectSections";
import { ContactForm } from "@/components/ContactForm";

import { ArrowRight } from "lucide-react";

// Floating animation for background elements
const floatingAnimation = {
  y: ["-10%", "10%"],
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
};

function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Add refs for the sections
  const featuresRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  // Add a scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background" ref={targetRef}>
      <FloatingNavbar
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onPrinciplesClick={() => scrollToSection(solutionsRef)}
        onTestimonialsClick={() => scrollToSection(contactRef)}
      />

      {/* Hero Section with Enhanced Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Enhanced gradient background */}
          <div className="absolute inset-0 " />
          <motion.div
            animate={floatingAnimation}
            className="absolute inset-0"
          />
          {/* Animated geometric shapes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>

        <Container className="container px-4 relative z-10 mt-[-10vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-7xl font-bold tracking-tight mb-6"
            >
              <GradientText>Omeruta Studio</GradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              We blend groundbreaking technology with artistic vision to create
              games that offer more than just entertainment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="group px-8 relative rounded-full overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground"
                style={{
                  // background:
                  //   "linear-gradient(90deg, var(--primary) 0%, var(--primary) 50%, var(--primary-foreground) 50%, var(--primary-foreground) 100%)",
                  backgroundSize: "200% 100%",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = "-100% 0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = "0 0";
                }}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          ></motion.div>
        </Container>
      </section>

      {/* Stats Section with Improved Cards */}
      {/* <section className="py-20 relative overflow-hidden">
        <Container className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Global Clients" },
              { number: "50M+", label: "Words Translated" },
              { number: "98%", label: "Accuracy Rate" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-background to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-4xl font-bold mb-2">
                  <GradientText>{stat.number}</GradientText>
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section> */}

      {/* Features Section with Enhanced Cards */}
      <section ref={featuresRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <Container className="container px-4 relative">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Requiem Creatif</GradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Requiem Creatif, a pivotal department of Omeruta, specializes in
              innovative software development. We are dedicated to creating
              cutting-edge tools and solutions that empower both game developers
              and creative professionals.
            </p>
          </motion.div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-fr">
            {[
              {
                title: (
                  <h2 className="text-4xl font-bold mb-4">
                    <GradientText>Requiem Creatif</GradientText>
                  </h2>
                ),
                description:
                  "Requiem Creatif, a pivotal department of Omeruta, specializes in innovative software development. We are dedicated to creating cutting-edge tools and solutions that empower both game developers and creative professionals.",
                // icon: Languages,
              },
              {
                title: (
                  <h2 className="text-4xl font-bold mb-4">
                    <GradientText>Latest Updates</GradientText>
                  </h2>
                ),
                description:
                  "Stay tuned for the latest updates and behind-the-scenes insights from Omeruta and Requiem Creatif. Here, we will share exciting news about our upcoming game releases, software development progress, industry partnerships, and special events. Whether it's a breakthrough in game design, a new software tool in the works, or an insider look at our creative process, you'll find all the freshest information right here.",
                // icon: Target,
              },
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title.props.children}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Strategy Section */}
      <section ref={solutionsRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
        <Container className="container px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Latest Updates</GradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay tuned for the latest updates and behind-the-scenes insights
              from Omeruta and Requiem Creatif. Here, we will share exciting
              news about our upcoming game releases, software development
              progress, industry partnerships, and special events. Whether it's
              a breakthrough in game design, a new software tool in the works,
              or an insider look at our creative process, you'll find all the
              freshest information right here.
            </p>
          </motion.div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Locate Your Service",
                description:
                  "Begin by identifying the service that aligns with your goals — Localization, SEO, or Content.",
                icon: Search,
                step: "L",
              },
              {
                title: "Input Your Details",
                description:
                  "Enter your website URL and essential project details, including source and target languages.",
                icon: PenTool,
                step: "I",
              },
              {
                title: "Focus on Insights",
                description:
                  "Access your personalized dashboard to uncover actionable insights crafted for your objectives.",
                icon: Target,
                step: "F",
              },
              {
                title: "Take Action",
                description:
                  "Put the insights into practice to enhance your strategy and empower your message.",
                icon: Zap,
                step: "T",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-background to-primary/5 hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center hover:scale-110 hover:rounded-full transition-transform duration-300">
                        <span className="text-3xl font-bold text-primary">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div> */}
          <ProjectSections />

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group px-8 w-full sm:w-auto rounded-full"
            >
              Discover More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div> */}
        </Container>
      </section>
      <ContactForm />

      {/* CTA Section */}
      {/* <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
        <Container className="container px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              <GradientText>
                Ready to Disrupt Localization with AutoLQA?
              </GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be among the first to experience SatoLOC Insight's Localization
              Insights. Uncover the power of AutoLQA and actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="group px-8 w-full sm:w-auto">
                Join the Beta
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section> */}
    </div>
  );
}

export default Home;
