"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@/../@heroicons/react/20/solid";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("Theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${
        theme === "light"
          ? "bg-custom-white text-custom-point shadow-2xl"
          : "bg-custom-point text-custom-white shadow-2xl shadow-custom-gray"
      } fixed p-[1rem] rounded-full bottom-[3rem] right-[2rem]`}
    >
      {theme === "light" ? <MoonIcon width={25} /> : <SunIcon width={25} />}
    </button>
  );
}
