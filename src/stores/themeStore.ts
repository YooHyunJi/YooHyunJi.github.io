import { create } from "zustand";

interface IThemeType {
  isLightTheme: boolean;
  isProfileVisible: boolean;
  toggleTheme: () => void;
  toggleIsProfileVisible: () => void;
}

export const useThemeStore = create<IThemeType>((set, get) => ({
  isLightTheme: true,
  isProfileVisible: true,
  toggleTheme: () => set({ isLightTheme: !get().isLightTheme }),
  toggleIsProfileVisible: () =>
    set({ isProfileVisible: !get().isProfileVisible }),
}));
