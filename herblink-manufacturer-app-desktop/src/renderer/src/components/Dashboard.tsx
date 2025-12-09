import { useState } from 'react'
import Products from './Products'
import ProductInventory from './ProductInventory'
import HerbInventory from './HerbInventory'
import QrPage from './QrPage'
import './Dashboard.css'

type View = 'products' | 'product-inventory' | 'herb-inventory' | 'qr'

function Dashboard(): React.JSX.Element {
  const [currentView, setCurrentView] = useState<View>('products')
  const [qrId, setQrId] = useState<string>('')

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    window.location.reload()
  }

  const goToQrPage = (id: string) => {
    setQrId(id)
    setCurrentView('qr')
  }

  const backFromQr = () => {
    setCurrentView('products')
    setQrId('')
  }

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-header">
          <h1>Manufacturer Dashboard</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
        <div className="nav-tabs">
          <button
            className={`nav-tab ${currentView === 'products' ? 'active' : ''}`}
            onClick={() => setCurrentView('products')}
          >
            Products
          </button>
          <button
            className={`nav-tab ${currentView === 'product-inventory' ? 'active' : ''}`}
            onClick={() => setCurrentView('product-inventory')}
          >
            Product Inventory
          </button>
          <button
            className={`nav-tab ${currentView === 'herb-inventory' ? 'active' : ''}`}
            onClick={() => setCurrentView('herb-inventory')}
          >
            Herb Inventory
          </button>
        </div>
      </nav>

      <main className="dashboard-content">
        {currentView === 'products' && <Products onQrPage={goToQrPage} />}
        {currentView === 'product-inventory' && <ProductInventory />}
        {currentView === 'herb-inventory' && <HerbInventory />}
        {currentView === 'qr' && <QrPage idString={qrId} onBack={backFromQr} />}
      </main>
    </div>
  )
}

export default Dashboard

