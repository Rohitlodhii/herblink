import { type ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../../assets/main.css'

export default function ProcessorDashboard(): ReactElement {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [copied, setCopied] = useState(false)

  const handleLogout = (): void => {
    logout()
    navigate('/')
  }

  const desktopAppName = 'Herblink Processor App Desktop'
  const desktopAppInfo = `Herblink Processor App Desktop - Desktop application for managing processor operations, inventory, and processing tasks.`

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(desktopAppName)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="page">
      <div className="card">
        <div className="header">
          <div>
            <h1 className="title">Processor Dashboard</h1>
            <p className="muted">Manage inventory and processing</p>
          </div>
          <button className="secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h2 className="title">Inventory</h2>
          <p className="muted">Manage processor inventory</p>
          <button
            onClick={() => navigate('/processor/inventory')}
            style={{ marginTop: '12px' }}
          >
            View Inventory
          </button>
        </div>

        <div className="card">
          <h2 className="title">Desktop App</h2>
          <p className="muted">{desktopAppInfo}</p>
          <div style={{ 
            marginTop: '12px', 
            padding: '12px', 
            background: '#0f1525', 
            border: '1px solid #1f2940', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div style={{ 
              fontFamily: 'monospace', 
              fontSize: '14px', 
              color: '#c8d1e8',
              wordBreak: 'break-all',
              flex: 1
            }}>
              {desktopAppName}
            </div>
            <button
              onClick={handleCopy}
              className="secondary"
              style={{ 
                whiteSpace: 'nowrap',
                minWidth: '80px'
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

