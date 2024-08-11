"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.input
      initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }} // 초기 상태
      animate={{
        boxShadow: isFocused
          ? "0px 0px 15px rgba(0, 0, 2, 0.1)" // 포커스 상태의 그림자
          : "0px 0px 3px rgba(0, 0, 0, 0.25)", // 기본 상태
      }}
      type="text"
      placeholder="뭔가 찾아볼까요?"
      className="w-full h-[2.5rem] p-[1rem] rounded-full focus:outline-none"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}
