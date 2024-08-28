import { ProfileContext } from "@/app/_components/ProfileProvider/ProfileProvider";
import { useContext } from "react";

export function useProfile() {
  const profile = useContext(ProfileContext);
  if (!profile) {
    throw new Error("useProfile must be used within ProfileProvider");
  }
  return profile;
}
