import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      // className={cn(
      //   "bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#1279b4] to-primary animate-gradient-x",
      //   className
      // )}
      className={cn("bg-clip-text text-transparent bg-[#01579b]", className)}
      style={{
        backgroundSize: "200% 100%",
        animation: "gradient 8s linear infinite",
      }}
    >
      {children}
    </span>
  );
}
