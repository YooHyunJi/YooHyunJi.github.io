"use client";

import React, { createContext, useState, PropsWithChildren } from "react";
import LocalStorage from "@/utils/LocalStorage";

type IValueTypes = {
  isVisible: boolean;
  toggleIsVisible: () => void;
};

export const ProfileContext = createContext<IValueTypes>({
  isVisible: true,
  toggleIsVisible: () => {},
});

export default function ProfileProvider({ children }: PropsWithChildren) {
  const [isVisible, setIsVisible] = useState(
    LocalStorage.getItem("isVisible")! === "true" ? true : false
  );

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };
  const providerValue = {
    isVisible: isVisible,
    toggleIsVisible,
  };

  return (
    <div className={`${isVisible ? "" : "profile-close"}`}>
      <ProfileContext.Provider value={providerValue}>
        {children}
      </ProfileContext.Provider>
    </div>
  );
}
