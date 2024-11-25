import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  image: any;
  alt: string;
  description: string;
  buttonText: string;
  url: string;
  index: number;
}

export function ProjectCard({
  image,
  alt,
  description,
  buttonText,
  url,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="group overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>

        <CardContent className="relative p-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {description}
            </p>

            <Link href={url} target="_blank" className="inline-block w-full">
              <Button
                variant="default"
                className="w-full group/button relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {buttonText}
                  <ExternalLink className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
