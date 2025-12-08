import { FormEvent, useEffect, useState, type ReactElement } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createInventory, deleteInventory, listInventories, type Inventory } from '../api'
import { useAuth } from '../context/AuthContext'

const emptyForm = {
  inventoryName: '',
  assignedGrade: '',
  specie: '',
  moisture: '',
  soilType: '',
  waterType: '',
  season: '',
  location: '',
  harvestingTime: '',
  fertiliserType: ''
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

  useEffect(() => {
    if (!token) return
    setLoading(true)
    listInventories(token)
      .then(setInventories)
      .catch((err) => setError(err instanceof Error ? err.message : 'Unable to fetch inventories'))
      .finally(() => setLoading(false))
  }, [token])

  const handleChange = (key: keyof typeof emptyForm, value: string): void => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    if (!token) return
    setSubmitting(true)
    setError(null)
    try {
      await createInventory(
        {
          inventoryName: form.inventoryName.trim(),
          assignedGrade: form.assignedGrade.trim(),
              specie: form.specie.trim(),
              moisture: form.moisture.trim(),
              soilType: form.soilType.trim(),
              waterType: form.waterType.trim(),
              season: form.season.trim(),
              location: form.location.trim(),
              harvestingTime: form.harvestingTime.trim(),
              fertiliserType: form.fertiliserType.trim()
        },
        token
      )
      setForm(emptyForm)
      const refreshed = await listInventories(token)
      setInventories(refreshed)
    } catch (err) {
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
      setInventories((prev) => prev.filter((inv) => inv._id !== id))
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

      <div className="grid">
        <section className="card">
          <h2>Create inventory</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Inventory name
                <input
                  value={form.inventoryName}
                  onChange={(e) => handleChange('inventoryName', e.target.value)}
                  required
                />
              </label>
              <label>
                Assigned grade
                <input
                  value={form.assignedGrade}
                  onChange={(e) => handleChange('assignedGrade', e.target.value)}
                  required
                />
              </label>
              <label>
                Moisture
                <input
                  type="number"
                  value={form.moisture}
                  onChange={(e) => handleChange('moisture', e.target.value)}
                  required
                />
              </label>
            </div>
            <label>
              Specie
              <input value={form.specie} onChange={(e) => handleChange('specie', e.target.value)} required />
            </label>
            <div className="form-grid">
              <label>
                Soil type
                <select value={form.soilType} onChange={(e) => handleChange('soilType', e.target.value)} required>
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
                <select value={form.waterType} onChange={(e) => handleChange('waterType', e.target.value)} required>
                  <option value="">Select water type</option>
                  <option value="River Water">River Water</option>
                  <option value="Ground Water">Ground Water</option>
                  <option value="Rain Water">Rain Water</option>
                </select>
              </label>
              <label>
                Season
                <select value={form.season} onChange={(e) => handleChange('season', e.target.value)} required>
                  <option value="">Select season</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Monsoon">Monsoon</option>
                  <option value="Spring">Spring</option>
                </select>
              </label>
            </div>
            <div className="form-grid">
              <label>
                Location
                <input value={form.location} onChange={(e) => handleChange('location', e.target.value)} required />
              </label>
              <label>
                Harvesting time
                <input
                  type="datetime-local"
                  value={form.harvestingTime}
                  onChange={(e) => handleChange('harvestingTime', e.target.value)}
                  required
                />
              </label>
              <label>
                Fertiliser time
                <input value={form.fertiliserType} onChange={(e) => handleChange('fertiliserType', e.target.value)} required />
              </label>
            </div>
            {error ? <div className="error">{error}</div> : null}
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
          {inventories.length === 0 ? (
            <p className="muted">No inventories created yet.</p>
          ) : (
            <ul className="list">
              {inventories.map((inv) => (
                <li key={inv._id} className="list-item">
                  <div>
                    <div className="title">{inv.inventoryName}</div>
                    <div className="muted">
                      Grade {inv.assignedGrade} • Specie {inv.specie} • Final qty {inv.finalQuantity}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link to={`/inventory/${inv._id}`} className="link">
                      View
                    </Link>
                    <button
                      className="secondary"
                      onClick={() => handleDelete(inv._id)}
                      disabled={deletingId === inv._id}
                    >
                      {deletingId === inv._id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

