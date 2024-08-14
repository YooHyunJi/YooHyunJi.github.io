"use client";

import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import LocalStorage from "@/utils/LocalStorage";

type IValueTypes = {
  theme: string | null;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<IValueTypes>({
  theme: "",
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    LocalStorage.setItem("Theme", newTheme); // LocalStorage에 새로운 테마 저장
  };

  const providerValue = {
    theme: theme,
    toggleTheme,
  };

  useEffect(() => {
    const storedValue = LocalStorage.getItem("Theme");
    if (storedValue) {
      setTheme(LocalStorage.getItem("Theme")!);
    }
  }, [theme]);

  return (
    <div className={`theme-${theme} min-h-full`}>
      <ThemeContext.Provider value={providerValue}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
