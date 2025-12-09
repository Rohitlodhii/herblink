import { FormEvent, useEffect, useState, type ReactElement } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createInventory, deleteInventory, listInventories, getInventoryId, type Inventory } from '../api'
import { useAuth } from '../context/AuthContext'

const emptyForm = {
  inventoryName: '',
  assignedGrade: '',
  specie: '',
  moisture: '',
  soilType: '',
  WaterType: '',
  Season: '',
  Location: ''
}

export default function InventoryPage(): ReactElement {
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const [inventories, setInventories] = useState<Inventory[]>([])
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [createdInventoryId, setCreatedInventoryId] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    console.log('[InventoryPage] Component mounted, token:', token ? 'present' : 'missing')
    if (!token) {
      console.warn('[InventoryPage] No token, redirecting to login')
      navigate('/')
      return
    }
    
    setLoading(true)
    setError(null)
    console.log('[InventoryPage] Fetching inventories...')
    
    listInventories(token)
      .then((inventories) => {
        console.log('[InventoryPage] Loaded inventories:', inventories)
        console.log('[InventoryPage] Inventories type:', Array.isArray(inventories))
        console.log('[InventoryPage] Inventories count:', inventories?.length ?? 0)
        setInventories(inventories)
        setInitialized(true)
      })
      .catch((err) => {
        console.error('[InventoryPage] Error loading inventories:', err)
        console.error('[InventoryPage] Error stack:', err instanceof Error ? err.stack : 'No stack')
        const message = err instanceof Error ? err.message : 'Unable to fetch inventories'
        setError(message)
        setInventories([]) // Set empty array on error so form still shows
        setInitialized(true)
      })
      .finally(() => {
        setLoading(false)
        console.log('[InventoryPage] Finished loading inventories')
      })
  }, [token, navigate])

  const handleChange = (key: keyof typeof emptyForm, value: string): void => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    if (!token) return
    setSubmitting(true)
    setError(null)
    setSuccessMessage(null)
    setCreatedInventoryId(null)
    try {
      console.log('[InventoryPage] Creating inventory with data:', {
        inventoryName: form.inventoryName.trim(),
        assignedGrade: form.assignedGrade.trim(),
        specie: form.specie.trim(),
        moisture: form.moisture.trim() || undefined,
        soilType: form.soilType.trim() || undefined,
        WaterType: form.WaterType.trim() || undefined,
        Season: form.Season.trim() || undefined,
        Location: form.Location.trim() || undefined
      })
      
      const created = await createInventory(
        {
          inventoryName: form.inventoryName.trim(),
          assignedGrade: form.assignedGrade.trim(),
          specie: form.specie.trim(),
          moisture: form.moisture.trim() || undefined,
          soilType: form.soilType.trim() || undefined,
          WaterType: form.WaterType.trim() || undefined,
          Season: form.Season.trim() || undefined,
          Location: form.Location.trim() || undefined
        },
        token
      )
      
      console.log('[InventoryPage] Created inventory:', created)
      const inventoryId = getInventoryId(created)
      setCreatedInventoryId(inventoryId)
      setSuccessMessage(`Inventory created successfully! ID: ${inventoryId}`)
      setForm(emptyForm)
      const refreshed = await listInventories(token)
      setInventories(refreshed)
    } catch (err) {
      console.error('[InventoryPage] Error creating inventory:', err)
      const message = err instanceof Error ? err.message : 'Failed to create inventory'
      setError(message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string): Promise<void> => {
    if (!token || deletingId) return
    const confirmed = window.confirm('Delete this inventory and its inputs?')
    if (!confirmed) return
    setDeletingId(id)
    setError(null)
    try {
      await deleteInventory(id, token)
      setInventories((prev) => prev.filter((inv) => getInventoryId(inv) !== id))
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete inventory'
      setError(message)
    } finally {
      setDeletingId(null)
    }
  }

  const handleLogout = (): void => {
    logout()
    navigate('/')
  }

  // Always render the form, even if there are errors
  console.log('[InventoryPage] Rendering, token:', token ? 'present' : 'missing')
  console.log('[InventoryPage] Inventories:', inventories.length)
  console.log('[InventoryPage] Loading:', loading)
  console.log('[InventoryPage] Error:', error)
  console.log('[InventoryPage] Initialized:', initialized)

  if (!token) {
    console.warn('[InventoryPage] No token, showing redirect message')
    return (
      <div className="page">
        <div className="card">
          <h2>Not Authenticated</h2>
          <p>Please login to continue.</p>
          <button onClick={() => navigate('/')}>Go to Login</button>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <header className="header">
        <div>
          <h1>Processor Inventory</h1>
          <p className="muted">Create and track your processor inventories.</p>
        </div>
        <div className="header-actions">
          <button className="secondary" onClick={() => navigate(0)}>
            Refresh
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      {error && !initialized && (
        <div className="card" style={{ marginBottom: '1rem', background: '#f8d7da', color: '#721c24', padding: '1rem' }}>
          <strong>Warning:</strong> {error}
          <button
            onClick={() => {
              setError(null)
              setInitialized(false)
              navigate(0) // Refresh page
            }}
            style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}
          >
            Retry
          </button>
        </div>
      )}

      <div className="grid">
        <section className="card" id="create-inventory-form">
          <h2>Create inventory</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Inventory name *
                <input
                  value={form.inventoryName}
                  onChange={(e) => handleChange('inventoryName', e.target.value)}
                  required
                  placeholder="Enter inventory name"
                />
              </label>
              <label>
                Assigned grade *
                <input
                  value={form.assignedGrade}
                  onChange={(e) => handleChange('assignedGrade', e.target.value)}
                  required
                  placeholder="Enter assigned grade"
                />
              </label>
              <label>
                Specie *
                <input
                  value={form.specie}
                  onChange={(e) => handleChange('specie', e.target.value)}
                  required
                  placeholder="Enter specie"
                />
              </label>
            </div>
            <div className="form-grid">
              <label>
                Moisture
                <input
                  type="number"
                  value={form.moisture}
                  onChange={(e) => handleChange('moisture', e.target.value)}
                  placeholder="Optional"
                />
              </label>
              <label>
                Soil type
                <select
                  value={form.soilType}
                  onChange={(e) => handleChange('soilType', e.target.value)}
                >
                  <option value="">Select soil type</option>
                  <option value="Alluvial Soil">Alluvial Soil</option>
                  <option value="Black Soil">Black Soil</option>
                  <option value="Red Soil">Red Soil</option>
                  <option value="Laterite Soil">Laterite Soil</option>
                  <option value="Mountain Soil">Mountain Soil</option>
                  <option value="Desert Soil">Desert Soil</option>
                </select>
              </label>
              <label>
                Water type
                <select
                  value={form.WaterType}
                  onChange={(e) => handleChange('WaterType', e.target.value)}
                >
                  <option value="">Select water type</option>
                  <option value="River Water">River Water</option>
                  <option value="Ground Water">Ground Water</option>
                  <option value="Rain Water">Rain Water</option>
                </select>
              </label>
            </div>
            <div className="form-grid">
              <label>
                Season
                <select
                  value={form.Season}
                  onChange={(e) => handleChange('Season', e.target.value)}
                >
                  <option value="">Select season</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Monsoon">Monsoon</option>
                  <option value="Spring">Spring</option>
                </select>
              </label>
              <label>
                Location
                <input
                  value={form.Location}
                  onChange={(e) => handleChange('Location', e.target.value)}
                  placeholder="Enter location (optional)"
                />
              </label>
            </div>
            {error ? (
              <div className="error" style={{ padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
                <strong>Error:</strong> {error}
                <button
                  type="button"
                  onClick={() => {
                    console.error('[InventoryPage] User requested error details:', error)
                    alert(`Error details:\n\n${error}\n\nCheck console (F12) for more details.`)
                  }}
                  style={{ marginLeft: '1rem', padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                >
                  Details
                </button>
              </div>
            ) : null}
            {successMessage ? (
              <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '1rem' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>✓ {successMessage}</div>
                {createdInventoryId && (
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
                    <Link to={`/inventory/${createdInventoryId}`} className="link" style={{ fontWeight: 'bold' }}>
                      Add Farmer Inputs →
                    </Link>
                  </div>
                )}
              </div>
            ) : null}
            <button type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : 'Create inventory'}
            </button>
          </form>
        </section>

        <section className="card">
          <div className="card-header">
            <h2>Existing inventories</h2>
            {loading ? <span className="muted">Loading...</span> : null}
          </div>
          {loading ? (
            <p className="muted">Loading inventories...</p>
          ) : inventories.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
              <h3 style={{ marginBottom: '0.5rem' }}>No inventories yet</h3>
              <p className="muted" style={{ marginBottom: '1.5rem' }}>
                Get started by creating your first inventory. Fill out the form on the left to begin.
              </p>
              <button
                onClick={() => {
                  // Scroll to the form
                  const formSection = document.getElementById('create-inventory-form')
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    // Focus on first input
                    setTimeout(() => {
                      const firstInput = formSection.querySelector('input[required]') as HTMLInputElement
                      if (firstInput) {
                        firstInput.focus()
                      }
                    }, 500)
                  }
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Create Your First Inventory
              </button>
            </div>
          ) : (
            <ul className="list">
              {inventories.map((inv) => {
                const invId = getInventoryId(inv)
                return (
                  <li key={invId} className="list-item">
                    <div>
                      <div className="title">{inv.inventoryName}</div>
                      <div className="muted">
                        ID: {invId} • Grade {inv.assignedGrade} • Specie {inv.specie}
                        {inv.Location ? ` • Location: ${inv.Location}` : ''}
                        {inv.Season ? ` • Season: ${inv.Season}` : ''}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Link to={`/inventory/${invId}`} className="link">
                        View
                      </Link>
                      <button
                        className="secondary"
                        onClick={() => handleDelete(invId)}
                        disabled={deletingId === invId}
                      >
                        {deletingId === invId ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

