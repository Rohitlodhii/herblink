import { Component, type ErrorInfo, type ReactElement, type ReactNode } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import EditInventoryPage from './pages/EditInventoryPage'
import InventoryDetailPage from './pages/InventoryDetailPage'
import InventoryPage from './pages/InventoryPage'
import LoginPage from './pages/LoginPage'

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean; error: Error } {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('[ErrorBoundary] Caught error:', error)
    console.error('[ErrorBoundary] Error info:', errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="page">
          <div className="card">
            <h2>Something went wrong</h2>
            <p className="error">{this.state.error?.message ?? 'An unexpected error occurred'}</p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null })
                window.location.reload()
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

function ProtectedRoute({ children }: { children: ReactElement }): ReactElement {
  const { token } = useAuth()
  console.log('[ProtectedRoute] Token check:', token ? 'present' : 'missing')
  if (!token) {
    console.log('[ProtectedRoute] No token, redirecting to login')
    return <Navigate to="/" replace />
  }
  console.log('[ProtectedRoute] Token present, rendering protected content')
  return children
}

function App(): ReactElement {
  console.log('[App] Rendering App component')
  return (
    <ErrorBoundary>
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/inventory"
              element={
                <ProtectedRoute>
                  <InventoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/inventory/:id"
              element={
                <ProtectedRoute>
                  <InventoryDetailPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/inventory/:id/edit"
              element={
                <ProtectedRoute>
                  <EditInventoryPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
