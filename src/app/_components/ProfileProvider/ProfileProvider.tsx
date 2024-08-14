"use client";

import React, { createContext, useState, PropsWithChildren } from "react";

type IValueTypes = {
  isVisible: boolean;
  toggleIsVisible: () => {};
};

export const ProfileContext = createContext({
  isVisible: true,
  toggleIsVisible: () => {},
});

export default function ProfileProvider({ children }: PropsWithChildren) {
  const defaultTheme =
    localStorage.getItem("isVisible")! === "true" ? true : false;

  const [isVisible, setIsVisible] = useState(defaultTheme);

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
