import { FormEvent, useState, type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../assets/main.css'

export default function LoginPage(): ReactElement {
  const navigate = useNavigate()
  const { setToken } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'lab' | 'manufacturer' | 'processor'>('lab')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    setError(null)
    setLoading(true)
    
    try {
      if (!window.api) {
        throw new Error('API not available')
      }

      const result = await window.api.login(email.trim(), password, role)

      if (result.success && result.token) {
        // Save token to localStorage
        localStorage.setItem('authToken', result.token)
        localStorage.setItem('userRole', role)
        
        // Optionally save to file system via IPC
        try {
          await window.api.saveToken(result.token, role)
        } catch (err) {
          console.warn('Failed to save token to file system:', err)
        }

        setToken(result.token, role)
        
        // Navigate based on role
        const roleRoutes = {
          lab: '/lab/dashboard',
          manufacturer: '/manufacturer/dashboard',
          processor: '/processor/dashboard'
        }
        navigate(roleRoutes[role])
      } else {
        setError(result.error || 'Login failed. Please try again.')
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to login'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <div className="card">
        <h1>Herblink Combined App</h1>
        <p className="muted">Sign in to access your dashboard</p>
        
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Role
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as 'lab' | 'manufacturer' | 'processor')}
              required
            >
              <option value="lab">Lab</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="processor">Processor</option>
            </select>
          </label>
          
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>
          
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>
          
          {error ? <div className="error">{error}</div> : null}
          
          <button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

