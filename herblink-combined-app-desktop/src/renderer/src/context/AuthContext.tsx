import { createContext, useContext, useMemo, useState, type ReactElement, type ReactNode } from 'react'

type UserRole = 'lab' | 'manufacturer' | 'processor' | null

type AuthContextValue = {
  token: string | null
  role: UserRole
  setToken: (token: string | null, role?: UserRole) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }): ReactElement {
  const [token, setTokenState] = useState<string | null>(() => localStorage.getItem('authToken'))
  const [role, setRoleState] = useState<UserRole>(() => {
    const storedRole = localStorage.getItem('userRole')
    return (storedRole as UserRole) || null
  })

  const setToken = (next: string | null, nextRole?: UserRole): void => {
    setTokenState(next)
    if (nextRole) {
      setRoleState(nextRole)
      localStorage.setItem('userRole', nextRole)
    }
    if (next) {
      localStorage.setItem('authToken', next)
    } else {
      localStorage.removeItem('authToken')
      localStorage.removeItem('userRole')
    }
  }

  const logout = (): void => {
    setToken(null, null)
  }

  const value = useMemo(
    () => ({
      token,
      role,
      setToken,
      logout
    }),
    [token, role]
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

