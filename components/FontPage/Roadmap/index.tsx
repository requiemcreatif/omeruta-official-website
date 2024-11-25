import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@mui/material";
import { TimelineCard } from "../TimelineCard";
import { GradientText } from "../GradientText";
import { ArrowRight, Globe2, Search, Sparkles } from "lucide-react";

const timelineItems = [
  {
    phase: "Phase 1",
    title: "Launching Localization Insights",
    description: "Advanced LQA automation in beta",
    icon: Globe2,
    align: "right" as const,
  },
  {
    phase: "Phase 2",
    title: "Introducing SEO Insights",
    description: "Elevate your global search visibility",
    icon: Search,
    align: "left" as const,
  },
  {
    phase: "Phase 3",
    title: "Unlocking AI-powered Content",
    description: "Content creation and insights",
    icon: Sparkles,
    align: "right" as const,
  },
];

export function Roadmap() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      </div>

      <Container className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>
              What's Next: The Evolution of SatoLOC Insight
            </GradientText>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At SatoLOC, we know that one size doesn't fit all. That's why our
            platform is designed for ultimate flexibility, putting customization
            at its core. Whether it's bespoke LQA insights, targeted SEO
            strategies, or smart content creation, SatoLOC Insight molds itself
            to your unique business needs.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
            style={{ transformOrigin: "top" }}
          />

          {/* Timeline Items */}
          {timelineItems.map((item, index) => (
            <TimelineCard key={index} {...item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="group px-8 relative overflow-hidden"
            onClick={() => {
              window.open("https://calendly.com/satoloc/30min", "_blank");
            }}
          >
            <span className="relative z-10">Contact Us</span>
            <motion.div
              className="absolute inset-0 bg-primary/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
