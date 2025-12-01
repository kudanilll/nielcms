"use client";

import { create } from "zustand";

type UIState = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}));
