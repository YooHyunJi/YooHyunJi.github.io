"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CircleImage from "../CircleImage/CircleImage";
import TextWithLine from "../TextWithLine/TextWithLine";
import TextWithIcon from "../TextWithIcon/TextWithIcon";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  Square3Stack3DIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from "@/../@heroicons/react/20/solid";
import { useProfile } from "@/hooks/useProfile";
import LocalStorage from "@/utils/LocalStorage";

export default function Navbar() {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(true);
  const [mode, setMode] = useState(0);

  const { isVisible, toggleIsVisible } = useProfile();

  useEffect(() => {
    LocalStorage.setItem("isVisible", isVisible + "");

    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };
    // 초기 감지
    handleResize();
    // 리사이즈 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMdScreen, isVisible]);

  const profileList = [
    [<AcademicCapIcon key="school" width={25} />, "Sejong.Univ"],
    [<BriefcaseIcon key="job" width={25} />, "SSAFY"],
    [<Square3Stack3DIcon key="stack" width={25} />, "Frontend Developer"],
  ];
  const categoryList = [
    [0, "전체", 60],
    [1, "알고리즘", 36],
    [3, "취업 일기", 6],
    [15, "Next.js", 5],
    [18, "Javascript", 13],
  ];

  return (
    <motion.div
      // initial={isMdScreen ? { x: "0%" } : { y: "0%" }} // 초기 위치
      initial={
        isVisible
          ? { x: 0, y: 0 }
          : isMdScreen
          ? { x: "-20rem", y: 0 }
          : { x: 0, y: "-3.5rem" }
      } // 초기 위치
      animate={
        isMdScreen
          ? { x: isVisible ? 0 : "-20rem" }
          : { y: isVisible ? 0 : "-3.5rem" }
      } // 애니메이션 상태
      transition={{ type: "just", stiffness: 3 }} // 애니메이션 효과
      className="w-dvw top-0 fixed
      md:w-fit md:flex md:h-full md:left-0"
    >
      <nav
        className="
          flex justify-between items-center bg-white w-full h-[3.5rem] px-[1rem] shadow-md
          md:w-[20rem] md:flex-col md:items-start md:h-full md:justify-normal md: gap-[2rem] md:px-[2.5rem] md:py-[4rem] md:shadow-lg"
      >
        <TextWithLine text="LINZY's" size="L" />
        <div
          className="flex gap-[0.5rem] 
        md:flex-col md:gap-[2rem]"
        >
          <CircleImage
            src="https://avatars.githubusercontent.com/u/88645538"
            size={isMdScreen ? "L" : "S"}
          />
          {isMdScreen ? (
            <div className="flex flex-col gap-[5rem]">
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
              <div className="w-full flex flex-col gap-[1.2rem]">
                <p className="font-semibold mb-[0.5rem]">Category</p>
                {categoryList.map((category, idx) => {
                  const id = parseInt(category[0] as string);
                  const name = category[1];
                  const count = category[2];
                  return (
                    <Link
                      href="#"
                      key={`${name}${count}${idx}`}
                      className={`${
                        mode === id ? "text-custom-point" : "text-custom-black"
                      }`}
                      onClick={() => {
                        setMode(id);
                      }}
                    >{`${name}(${count})`}</Link>
                  );
                })}
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                setIsDetailVisible(!isDetailVisible);
              }}
            >
              <EllipsisVerticalIcon width={25} />
            </button>
          )}
        </div>
      </nav>

      {isDetailVisible ? (
        <div className="w-fit flex flex-col gap-[1.7rem] px-[1.5rem] py-[1rem] bg-custom-white ml-auto shadow-xl">
          <p className="font-semibold text-[1.3rem]">Category</p>
          {categoryList.map((category, idx) => {
            const id = parseInt(category[0] as string);
            const name = category[1];
            const count = category[2];
            return (
              <Link
                href="#"
                key={`${name}${count}${idx}`}
                className={`${
                  mode === id ? "text-custom-point" : "text-custom-black"
                }`}
                onClick={() => {
                  setMode(id);
                }}
              >{`${name}(${count})`}</Link>
            );
          })}
        </div>
      ) : (
        <button
          type="button"
          onClick={toggleIsVisible}
          className="bg-custom-point w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-b-md ml-auto 
          md:rounded-none md:rounded-e-md "
        >
          {isVisible ? (
            isMdScreen ? (
              <ChevronLeftIcon width={25} color="white" />
            ) : (
              <ChevronUpIcon width={25} color="white" />
            )
          ) : isMdScreen ? (
            <ChevronRightIcon width={25} color="white" />
          ) : (
            <ChevronDownIcon width={25} color="white" />
          )}
        </button>
      )}
    </motion.div>
  );
}
