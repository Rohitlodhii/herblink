import { useEffect, useState, type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../../assets/main.css'

export default function ProcessorInventory(): ReactElement {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [inventories, setInventories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchInventories()
  }, [])

  const fetchInventories = async (): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      if (!window.api) {
        throw new Error('API not available')
      }

      const result = await window.api.processor.inventory.list()

      if (result.success && result.data) {
        const dataArray = Array.isArray(result.data) ? result.data : []
        setInventories(dataArray)
      } else {
        setError(result.error || 'Failed to fetch inventories')
        setInventories([])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setInventories([])
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
            <h1 className="title">Processor Inventory</h1>
            <p className="muted">Manage your inventory</p>
          </div>
          <div className="header-actions">
            <button className="secondary" onClick={() => navigate('/processor/dashboard')}>
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
          <button onClick={fetchInventories} style={{ marginTop: '12px' }}>
            Retry
          </button>
        </div>
      ) : inventories.length === 0 ? (
        <div className="card">
          <p>No inventory found.</p>
        </div>
      ) : (
        <div className="card">
          <h2 className="title">Inventory List</h2>
          <div className="list">
            {inventories.map((inventory) => (
              <div key={inventory.id} className="list-item">
                <div>
                  <div className="title">{inventory.inventoryName}</div>
                  <div className="muted">Species: {inventory.specie}</div>
                  <div className="muted">Grade: {inventory.assignedGrade}</div>
                  {inventory.finalQuantity && (
                    <div className="muted">Quantity: {inventory.finalQuantity}</div>
                  )}
                  <div className="muted">
                    Processing: {inventory.isprocessingDone ? 'Done' : 'Pending'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

