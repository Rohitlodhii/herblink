import { useState, FormEvent } from 'react'
import './Login.css'

interface LoginProps {
  onLoginSuccess: () => void
}

function Login({ onLoginSuccess }: LoginProps): React.JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    // Validate inputs
    if (!email.trim() || !password) {
      setError('Please fill in all fields')
      return
    }

    setIsLoading(true)

    try {
      // Call the login API via preload
      const result = await window.api.login(email.trim(), password)

      if (result.success && result.token) {
        // Save token to localStorage
        localStorage.setItem('authToken', result.token)
        
        // Optionally save to file system via IPC
        try {
          await window.api.saveToken(result.token)
        } catch (err) {
          console.warn('Failed to save token to file system:', err)
          // Continue anyway, token is in localStorage
        }

        // Show success message
        console.log('Login successful. Token saved to localStorage:', result.token)
        
        // Reset form
        setEmail('')
        setPassword('')
        
        // Navigate to dashboard
        onLoginSuccess()
      } else {
        // Show error message from backend
        setError(result.error || 'Login failed. Please try again.')
      }
    } catch (err) {
      // Handle unexpected errors
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Manufacturer Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
              required
              autoComplete="email"
              placeholder="Enter your email"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError('')
              }}
              required
              autoComplete="current-password"
              placeholder="Enter your password"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

