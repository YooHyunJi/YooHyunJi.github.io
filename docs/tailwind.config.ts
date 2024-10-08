import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "custom-white": "#ffffff",
      "custom-black": "#171717",
      "custom-gray": "#a5a5a5",
      "custom-point": "#6eb098",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
