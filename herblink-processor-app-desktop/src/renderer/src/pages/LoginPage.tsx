import { FormEvent, useState, type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
// import { login } from '../api'
import { useAuth } from '../context/AuthContext'

export default function LoginPage(): ReactElement {
  const navigate = useNavigate()
  const { setToken } = useAuth()
  const [email, setEmail] = useState('rohitlodhi9090@gmail.com')
  const [password, setPassword] = useState('12121212')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    setError(null)
    setLoading(true)
    try {
      // Skipping real API call for local testing
      // const token = await login(email.trim(), password)

      if (email.trim() === 'rohitlodhi9090@gmail.com' && password === '12121212') {
        setToken('sample-jwt-token')
        navigate('/inventory')
      } else {
        throw new Error('Invalid credentials')
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
        <h1>Processor Login</h1>
        <p className="muted">Sign in to manage processor inventories.</p>
        <form className="form" onSubmit={handleSubmit}>
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

