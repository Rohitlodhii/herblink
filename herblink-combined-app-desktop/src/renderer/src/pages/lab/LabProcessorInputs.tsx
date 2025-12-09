import { useEffect, useState, type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../../assets/main.css'

export default function LabProcessorInputs(): ReactElement {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [inputs, setInputs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchInputs()
  }, [])

  const fetchInputs = async (): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      if (!window.api) {
        throw new Error('API not available')
      }

      const result = await window.api.lab.processorInputs.list()

      if (result.success && result.data) {
        const dataArray = Array.isArray(result.data) ? result.data : []
        setInputs(dataArray)
      } else {
        setError(result.error || 'Failed to fetch inputs')
        setInputs([])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setInputs([])
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = (): void => {
    logout()
    navigate('/')
  }

  return (
    <div className="page">
      <div className="card">
        <div className="header">
          <div>
            <h1 className="title">Processor Inputs</h1>
            <p className="muted">Manage lab processor inputs</p>
          </div>
          <div className="header-actions">
            <button className="secondary" onClick={() => navigate('/lab/dashboard')}>
              Back to Dashboard
            </button>
            <button className="secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="card">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="card">
          <div className="error">{error}</div>
          <button onClick={fetchInputs} style={{ marginTop: '12px' }}>
            Retry
          </button>
        </div>
      ) : inputs.length === 0 ? (
        <div className="card">
          <p>No processor inputs found.</p>
        </div>
      ) : (
        <div className="card">
          <h2 className="title">Inputs List</h2>
          <div className="list">
            {inputs.map((input) => (
              <div key={input.id} className="list-item">
                <div>
                  <div className="title">ID: {input.id}</div>
                  <div className="muted">
                    Processor Inventory ID: {input.processorInventoryId}
                  </div>
                  {input.description && (
                    <div className="muted">Description: {input.description}</div>
                  )}
                  <div className="muted">Status: {input.isDone ? 'Done' : 'Pending'}</div>
                </div>
                <button
                  className="secondary"
                  onClick={async () => {
                    try {
                      const result = await window.api.lab.processorInputs.update(input.id, {
                        isDone: true
                      })
                      if (result.success) {
                        fetchInputs()
                      }
                    } catch (err) {
                      console.error('Error updating input:', err)
                    }
                  }}
                >
                  Mark Done
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

