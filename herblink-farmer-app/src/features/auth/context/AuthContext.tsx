import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type AuthContextValue = {
  token: string | null;
  initializing: boolean;
  saveToken: (value: string) => Promise<void>;
  clearToken: () => Promise<void>;
};

const TOKEN_KEY = "herblink.farmer.jwt";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const storedToken = await AsyncStorage.getItem(TOKEN_KEY);
        if (storedToken) {
          setToken(storedToken);
        }
      } finally {
        setInitializing(false);
      }
    };

    bootstrap();
  }, []);

  const saveToken = useCallback(async (value: string) => {
    setToken(value);
    await AsyncStorage.setItem(TOKEN_KEY, value);
  }, []);

  const clearToken = useCallback(async () => {
    setToken(null);
    await AsyncStorage.removeItem(TOKEN_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{ token, initializing, saveToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

