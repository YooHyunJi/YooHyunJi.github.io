"use client";

import React, { createContext, useState, PropsWithChildren } from "react";

type IValueType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<IValueType>({
  theme: "",
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  const defaultTheme = localStorage.getItem("Theme")!;

  const [theme, setTheme] = useState(defaultTheme);

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
