"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Container } from "@mui/material";

const socialIcons = [
  { Icon: Instagram, url: "#", label: "Instagram" },
  { Icon: Facebook, url: "#", label: "Facebook" },
  { Icon: Youtube, url: "#", label: "YouTube" },
  { Icon: Twitter, url: "#", label: "Twitter" },
];

const footerLinks = ["Contact", "Privacy", "Terms"];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container maxWidth="xl">
      <footer className="relative w-full py-12 ">
        {/* Gradient overlay */}
        <div className="absolute inset-0 " />

        <div className="container relative mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialIcons.map(({ Icon, url, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative group h-10 w-10 rounded-full"
                    asChild
                  >
                    <Link href={url} target="_blank">
                      <Icon className="h-5 w-5 transition-colors group-hover:text-primary" />
                      <span className="sr-only">{label}</span>
                      <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-end gap-4"
            >
              {/* Copyright */}
              <p className="text-sm text-muted-foreground">
                © {currentYear} | All rights reserved | Designed by:{" "}
                <Link
                  href="#"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Omeruta
                </Link>
              </p>

              {/* Links */}
              <div className="flex items-center gap-2">
                {footerLinks.map((item, index) => (
                  <React.Fragment key={item}>
                    <Button
                      variant="link"
                      className="text-xs text-muted-foreground hover:text-foreground p-0 h-auto uppercase"
                      asChild
                    >
                      <Link href="#">{item}</Link>
                    </Button>
                    {index < footerLinks.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="h-3 bg-primary/20"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Trademark */}
              <p className="text-xs text-muted-foreground/70 text-center md:text-right">
                Omeruta - Requiem Creatif are registered trademarks of Omeruta.
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
