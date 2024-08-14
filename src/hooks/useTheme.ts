import { ThemeContext } from "@/app/_components/ThemeProvider/ThemeProvider";
import { useContext } from "react";

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return theme;
}
