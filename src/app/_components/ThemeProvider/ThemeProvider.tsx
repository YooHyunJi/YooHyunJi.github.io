"use client";

import React, { createContext, useState, PropsWithChildren } from "react";
import LocalStorage from "@/utils/LocalStorage";

type IValueTypes = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<IValueTypes>({
  theme: "",
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(LocalStorage.getItem("Theme")!);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const providerValue = {
    theme: theme,
    toggleTheme,
  };

  return (
    <div className={`theme-${theme} min-h-full`}>
      <ThemeContext.Provider value={providerValue}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
