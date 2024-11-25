import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientText } from "../GradientText";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

interface FloatingNavbarProps {
  onFeaturesClick: () => void;
  onPrinciplesClick: () => void;
  onTestimonialsClick: () => void;
}

export function FloatingNavbar({
  onFeaturesClick,
  onPrinciplesClick,
  onTestimonialsClick,
}: FloatingNavbarProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-100, 0]);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Requiem Creatif", onClick: onFeaturesClick },
    { name: "Latest Updates", onClick: onPrinciplesClick },
    { name: "Contact", onClick: onTestimonialsClick },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl backdrop-blur-lg bg-background/60 rounded-xl border border-border/40 shadow-lg px-6 py-3"
      >
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          >
            <GradientText className="text-xl font-bold">
              Académie Montessori
            </GradientText>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Button
                  variant="ghost"
                  className="relative overflow-hidden group"
                  onClick={item.onClick}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Changer de thème</span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col items-start gap-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full text-left"
                  onClick={() => {
                    item.onClick();
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4" />
                    Dark
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" />
                    Light
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </motion.div>
  );
}
