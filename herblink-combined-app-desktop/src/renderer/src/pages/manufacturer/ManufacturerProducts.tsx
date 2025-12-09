import { useEffect, useState, type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../../assets/main.css'

export default function ManufacturerProducts(): ReactElement {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async (): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      if (!window.api) {
        throw new Error('API not available')
      }

      const result = await window.api.manufacturer.products.list()

      if (result.success && result.data) {
        const dataArray = Array.isArray(result.data) ? result.data : []
        setProducts(dataArray)
      } else {
        setError(result.error || 'Failed to fetch products')
        setProducts([])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setProducts([])
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
            <h1 className="title">Products</h1>
            <p className="muted">Manage your products</p>
          </div>
          <div className="header-actions">
            <button className="secondary" onClick={() => navigate('/manufacturer/dashboard')}>
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
          <button onClick={fetchProducts} style={{ marginTop: '12px' }}>
            Retry
          </button>
        </div>
      ) : products.length === 0 ? (
        <div className="card">
          <p>No products found.</p>
        </div>
      ) : (
        <div className="card">
          <h2 className="title">Products List</h2>
          <div className="list">
            {products.map((product) => (
              <div key={product.id} className="list-item">
                <div>
                  <div className="title">{product.productName}</div>
                  {product.productDescription && (
                    <div className="muted">{product.productDescription}</div>
                  )}
                  {product.productionBatch && (
                    <div className="muted">Batch: {product.productionBatch}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

