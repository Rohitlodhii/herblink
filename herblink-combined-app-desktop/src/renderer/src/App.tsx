import { Component, type ErrorInfo, type ReactElement, type ReactNode } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import LoginPage from './pages/LoginPage'
import LabDashboard from './pages/lab/LabDashboard'
import LabProcessorInputs from './pages/lab/LabProcessorInputs'
import ManufacturerDashboard from './pages/manufacturer/ManufacturerDashboard'
import ManufacturerProducts from './pages/manufacturer/ManufacturerProducts'
import ProcessorDashboard from './pages/processor/ProcessorDashboard'
import ProcessorInventory from './pages/processor/ProcessorInventory'

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
  if (!token) {
    return <Navigate to="/" replace />
  }
  return children
}

function App(): ReactElement {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            
            {/* Lab Routes */}
            <Route
              path="/lab/dashboard"
              element={
                <ProtectedRoute>
                  <LabDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/lab/processor-inputs"
              element={
                <ProtectedRoute>
                  <LabProcessorInputs />
                </ProtectedRoute>
              }
            />
            
            {/* Manufacturer Routes */}
            <Route
              path="/manufacturer/dashboard"
              element={
                <ProtectedRoute>
                  <ManufacturerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manufacturer/products"
              element={
                <ProtectedRoute>
                  <ManufacturerProducts />
                </ProtectedRoute>
              }
            />
            
            {/* Processor Routes */}
            <Route
              path="/processor/dashboard"
              element={
                <ProtectedRoute>
                  <ProcessorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/processor/inventory"
              element={
                <ProtectedRoute>
                  <ProcessorInventory />
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

