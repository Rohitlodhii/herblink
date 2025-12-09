import { type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../../assets/main.css'

export default function LabDashboard(): ReactElement {
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
            <h1 className="title">Lab Dashboard</h1>
            <p className="muted">Manage lab operations and processor inputs</p>
          </div>
          <button className="secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h2 className="title">Processor Inputs</h2>
          <p className="muted">View and manage processor inputs</p>
          <button
            onClick={() => navigate('/lab/processor-inputs')}
            style={{ marginTop: '12px' }}
          >
            View Processor Inputs
          </button>
        </div>
      </div>
    </div>
  )
}

