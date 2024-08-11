"use client";

import { MagnifyingGlassIcon } from "@/../@heroicons/react/20/solid";
import { ReactElement } from "react";

interface IPropsType {
  text: string;
  onClick: any;
}

interface ButtonTypeList {
  [key: string]: [ReactElement, string];
}

export default function ButtonWithIcon({ text, onClick }: IPropsType) {
  const buttonTypeList: ButtonTypeList = {
    SEARCH: [<MagnifyingGlassIcon key="search" width={25} />, "검색"],
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="h-[2.5rem] px-[1rem] bg-custom-point text-custom-white rounded-full"
    >
      {buttonTypeList[text][0]}
    </button>
  );
}
