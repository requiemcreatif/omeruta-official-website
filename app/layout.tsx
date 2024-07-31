"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ReactQueryProviders } from "./react-query-provider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ReactQueryProviders>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Navbar />
              <Box sx={{ flex: 1 }}>{children}</Box>
              <Footer />
            </Box>
          </ReactQueryProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
