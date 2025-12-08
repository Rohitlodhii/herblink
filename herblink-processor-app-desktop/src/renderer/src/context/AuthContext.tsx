import { createContext, useContext, useMemo, useState, type ReactElement, type ReactNode } from 'react'

type AuthContextValue = {
  token: string | null
  setToken: (token: string | null) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }): ReactElement {
  const [token, setTokenState] = useState<string | null>(() => localStorage.getItem('token'))

  const setToken = (next: string | null): void => {
    setTokenState(next)
    if (next) {
      localStorage.setItem('token', next)
    } else {
      localStorage.removeItem('token')
    }
  }

  const logout = (): void => {
    setToken(null)
  }

  const value = useMemo(
    () => ({
      token,
      setToken,
      logout
    }),
    [token]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return ctx
}

