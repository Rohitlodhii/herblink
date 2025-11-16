import {create} from 'zustand'
import { createJSONStorage, persist } from  'zustand/middleware'


type AuthState = {
    token : string | null;
    setToken : (token : string )=>void;
    clearToken : () => void;
}



export const useAuthStore = create<AuthState>()(
     persist(
        (set)=> ({
            token : null,
            setToken : ( token : string) => set({ token }),
            clearToken : ()=> set({ token : null }) 
        }),

        {
            name : "authToken",
            storage: createJSONStorage(() => localStorage),
        }
     ),

)