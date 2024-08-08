"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CircleImage from "../CircleImage/CircleImage";
import TextWithLine from "../TextWithLine/TextWithLine";
import TextWithIcon from "../TextWithIcon/TextWithIcon";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  Square3Stack3DIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/../@heroicons/react/20/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const profileList = [
    [<AcademicCapIcon key="school" width={25} />, "Sejong.Univ"],
    [<BriefcaseIcon key="job" width={25} />, "SSAFY"],
    [<Square3Stack3DIcon key="stack" width={25} />, "Frontend Developer"],
  ];
  const categoryList = [
    ["알고리즘", 36],
    ["취업 일기", 6],
    ["Next.js", 5],
    ["Javascript", 13],
  ];

  return (
    <motion.div
      initial={{ x: "0%" }} // 초기 위치
      animate={{ x: isOpen ? 0 : "-20rem" }} // 애니메이션 상태
      transition={{ type: "just", stiffness: 3 }} // 애니메이션 효과
      className="flex h-full"
    >
      <nav
        className={`flex flex-col gap-[2rem] bg-white w-[20rem] h-full px-[2.5rem] py-[4rem] shadow-xl`}
      >
        <TextWithLine text="LINZY's" size="L" />
        <CircleImage size="L" />
        <div className="flex flex-col gap-[1rem]">
          {profileList.map((profile, idx) => {
            const icon = profile[0];
            const content = profile[1] as string;
            return (
              <TextWithIcon
                key={`${content}${idx}`}
                icon={icon}
                text={content}
              />
            );
          })}
        </div>
        <div className="py-[3rem]" />
        <div className="flex flex-col gap-[1rem]">
          <p className="font-semibold text-[1.3rem] mb-[0.5rem]">Category</p>
          {categoryList.map((category, idx) => {
            const name = category[0];
            const count = category[1] as string;
            return <p key={`${name}${count}${idx}`}>{`${name}(${count})`}</p>;
          })}
        </div>
      </nav>

      <button
        type="button"
        onClick={handleOnClick}
        className="bg-custom-point w-[3rem] h-[3rem] flex items-center justify-center rounded-e-md mt-[4rem]"
      >
        {isOpen ? (
          <ChevronLeftIcon width={30} color="white" />
        ) : (
          <ChevronRightIcon width={30} color="white" />
        )}
      </button>
    </motion.div>
  );
}
