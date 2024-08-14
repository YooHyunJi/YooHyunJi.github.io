"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);
  const { theme } = useTheme();

  return (
    <motion.input
      initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }} // 초기 상태
      animate={{
        boxShadow: isFocused
          ? theme === "light"
            ? "0px 0px 15px rgba(0, 0, 2, 0.1)"
            : "0px 0px 15px rgba(255, 255, 255, 0.5)" // 포커스 상태의 그림자
          : theme === "light"
          ? "0px 0px 3px rgba(0, 0, 0, 0.25)"
          : "0px 0px 3px rgba(255, 255, 255, 0.5)",
      }}
      type="text"
      placeholder="뭔가 찾아볼까요?"
      className={`w-full h-[2.5rem] p-[1rem] rounded-full focus:outline-none text-[0.8rem]`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}
