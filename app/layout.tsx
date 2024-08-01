import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Omeruta Studio | Crafting Immersive Experiences",
    template: "%s | Omeruta Studio",
  },
  description:
    "Omeruta Studio specializes in creating innovative and immersive gaming experiences, blending cutting-edge technology with artistic vision.",
  keywords: [
    "gaming",
    "immersive experiences",
    "game development",
    "Omeruta",
    "indie games",
  ],
  authors: [{ name: "Omeruta Studio" }],
  creator: "Omeruta Studio",
  publisher: "Omeruta Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Omeruta Studio | Crafting Immersive Experiences",
    description:
      "Omeruta Studio specializes in creating innovative and immersive gaming experiences, blending cutting-edge technology with artistic vision.",
    url: "https://www.omeruta.com",
    siteName: "Omeruta Studio",
    // images: [
    //   {
    //     url: "https://www.omeruta.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omeruta Studio | Crafting Immersive Experiences",
    description:
      "Omeruta Studio specializes in creating innovative and immersive gaming experiences, blending cutting-edge technology with artistic vision.",
    //images: ["https://www.omeruta.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: "/site.webmanifest",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
