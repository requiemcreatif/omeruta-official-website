import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  // icon: LucideIcon;
  index: number;
}

export function FeatureCard({
  title,
  description,
  // icon: Icon,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="h-full"
    >
      <Card className="h-full bg-gradient-to-br from-background to-primary/5 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30">
        <CardContent className="p-6 flex flex-col h-full relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.2 }}
            className="bg-primary/10 p-3 rounded-lg w-fit mb-4 relative"
          >
            {/* <Icon className="h-6 w-6 text-primary" /> */}
            {/* Animated ring */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.3 }}
            className="text-xl font-semibold mb-3"
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4 }}
            className="text-muted-foreground flex-grow text-sm"
          >
            {description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
