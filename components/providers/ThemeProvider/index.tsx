// app/providers/ThemeProvider.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  Theme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("colorMode") as "light" | "dark";
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("colorMode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme: Theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#fff",
            light: "#f5f5f5",
          },
          secondary: {
            main: "#01579b",
            light: "#e3f2fd",
          },
          text: {
            primary: mode === "light" ? "#01579b" : "#fff",
            secondary: mode === "light" ? "#000" : "#e0e0e0",
          },
          background: {
            default: mode === "light" ? "#f5f5f5" : "#000",
            paper: mode === "light" ? "#ffffff" : "#000",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                color: "#fff",
                backgroundColor: "#01579b",
                "&:hover": {
                  backgroundColor: "#014477",
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}
