import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface TimelineCardProps {
  phase: string;
  title: string;
  description: string;
  icon: LucideIcon;
  align: "left" | "right";
  index: number;
}

export function TimelineCard({
  phase,
  title,
  description,
  icon: Icon,
  align,
  index,
}: TimelineCardProps) {
  const slideVariants = {
    hidden: {
      opacity: 0,
      x: align === "left" ? -50 : 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: index * 0.2 + 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideVariants}
      className={`relative flex items-center mb-16 ${
        align === "left" ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-1/2 ${align === "left" ? "pr-12 text-right" : "pl-12"}`}
      >
        <Card className="bg-gradient-to-br from-background to-primary/5 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30">
          <CardContent className="p-6 relative overflow-hidden">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div
              className={`flex items-center gap-4 mb-2 ${
                align === "left" ? "justify-end" : "justify-start"
              }`}
            >
              <motion.div
                variants={iconVariants}
                className="bg-primary/10 p-3 rounded-lg relative group"
              >
                <Icon className="h-5 w-5 text-primary relative z-10" />
                <div className="absolute inset-0 bg-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">
                {phase}
              </span>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3 }}
              className="text-lg font-semibold mb-2"
            >
              {title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.4 }}
              className="text-muted-foreground text-sm"
            >
              {description}
            </motion.p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            delay: index * 0.2 + 0.1,
          }}
          className="w-4 h-4 bg-primary rounded-full relative"
        >
          {/* Ripple Effect */}
          <div className="absolute w-8 h-8 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping" />
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm" />
        </motion.div>

        {/* Connecting Line Animation */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="absolute w-1 h-24 bg-gradient-to-b from-primary/40 to-transparent"
          style={{
            top: "100%",
            transformOrigin: "top",
          }}
        />
      </div>
    </motion.div>
  );
}
