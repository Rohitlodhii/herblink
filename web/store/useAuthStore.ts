"use client";


import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string) => set({ token }),
      clearToken: () => set({ token: null }),
      _hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ _hasHydrated: state }),
    }),
    {
      name: "authToken",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,

      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);  // ⭐ Hydration FIX
      },
    }
  )
);
