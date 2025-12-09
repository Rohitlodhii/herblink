import { create } from "zustand";

type Section = "home" | "personal" | "land" | "crops" | "license";

interface FarmerDashboardState {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const useFarmerDashboard = create<FarmerDashboardState>((set) => ({
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
}));
