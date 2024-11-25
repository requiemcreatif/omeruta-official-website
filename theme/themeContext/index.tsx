// CustomThemeProvider.js

import { createContext, useState, ReactNode, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { palette } from "../palette";

interface ThemeContextProps {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggleColorMode: () => {},
  mode: "light",
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light" ? palette.light : palette.dark),
        },
        typography: {
          fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
