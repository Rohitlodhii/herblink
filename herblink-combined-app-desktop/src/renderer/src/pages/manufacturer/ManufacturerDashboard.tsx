import { type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../../assets/main.css'

export default function ManufacturerDashboard(): ReactElement {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = (): void => {
    logout()
    navigate('/')
  }

  return (
    <div className="page">
      <div className="card">
        <div className="header">
          <div>
            <h1 className="title">Manufacturer Dashboard</h1>
            <p className="muted">Manage products and inventory</p>
          </div>
          <button className="secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h2 className="title">Products</h2>
          <p className="muted">Manage your products</p>
          <button
            onClick={() => navigate('/manufacturer/products')}
            style={{ marginTop: '12px' }}
          >
            View Products
          </button>
        </div>
      </div>
    </div>
  )
}

