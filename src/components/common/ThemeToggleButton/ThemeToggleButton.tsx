"use client";
import { MoonIcon, SunIcon } from "@/../@heroicons/react/20/solid";

import { useThemeStore } from "@/stores/themeStore";

export default function ThemeToggleButton() {
  const { isLightTheme, toggleTheme } = useThemeStore();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${
        isLightTheme
          ? "bg-custom-white text-custom-point shadow-2xl"
          : "bg-custom-point text-custom-white shadow-2xl shadow-custom-white"
      } fixed p-[1rem] rounded-full bottom-[3rem] right-[2rem]`}
    >
      {isLightTheme ? <MoonIcon width={25} /> : <SunIcon width={25} />}
    </button>
  );
}
