import { FormEvent, useEffect, useState, type ReactElement } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getInventoryById, updateInventory, getInventoryId, type Inventory } from '../api'
import { useAuth } from '../context/AuthContext'

export default function EditInventoryPage(): ReactElement {
  const { id } = useParams<{ id: string }>()
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const [inventory, setInventory] = useState<Inventory | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<Partial<Inventory>>({})

  useEffect(() => {
    if (!token || !id) return
    setLoading(true)
    setError(null)
    getInventoryById(id, token)
      .then((inv) => {
        setInventory(inv)
        setForm({
          inventoryName: inv.inventoryName,
          assignedGrade: inv.assignedGrade,
          processinglist: inv.processinglist,
          specie: inv.specie,
          finalQuantity: inv.finalQuantity,
          sendedToLab: inv.sendedToLab,
          moisture: inv.moisture,
          soilType: inv.soilType,
          waterType: inv.waterType,
          season: inv.season,
          location: inv.location,
          harvestingTime: inv.harvestingTime,
          fertiliserType: inv.fertiliserType
        })
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load inventory'))
      .finally(() => setLoading(false))
  }, [id, token])

  const handleChange = (key: keyof Inventory, value: string): void => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    if (!token || !id) return
    setSubmitting(true)
    setError(null)
    try {
      // Only send changed fields
      const changes: Partial<Inventory> = {}
      if (inventory) {
        Object.keys(form).forEach((key) => {
          const k = key as keyof Inventory
          if (form[k] !== inventory[k]) {
            changes[k] = form[k]
          }
        })
      }

      if (Object.keys(changes).length === 0) {
        setError('No changes detected')
        setSubmitting(false)
        return
      }

      await updateInventory(id, changes, token)
      navigate(`/inventory/${id}`)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update inventory'
      setError(message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleLogout = (): void => {
    logout()
    navigate('/')
  }

  if (loading) {
    return (
      <div className="page">
        <p className="muted">Loading inventory...</p>
      </div>
    )
  }

  if (error && !inventory) {
    return (
      <div className="page">
        <div className="card">
          <p className="error">{error}</p>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    )
  }

  if (!inventory) {
    return (
      <div className="page">
        <p className="muted">Inventory not found.</p>
      </div>
    )
  }

  return (
    <div className="page">
      <header className="header">
        <div>
          <p className="muted">
            <Link to={`/inventory/${id}`} className="link">
              ← Back to inventory
            </Link>
          </p>
          <h1>Edit Inventory</h1>
          <p className="muted">Update inventory details.</p>
        </div>
        <div className="header-actions">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div className="grid">
        <section className="card">
          <h2>Inventory Information</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Inventory name
                <input
                  value={form.inventoryName ?? ''}
                  onChange={(e) => handleChange('inventoryName', e.target.value)}
                />
              </label>
              <label>
                Assigned grade
                <input
                  value={form.assignedGrade ?? ''}
                  onChange={(e) => handleChange('assignedGrade', e.target.value)}
                />
              </label>
              <label>
                Processing list
                <input
                  value={form.processinglist ?? ''}
                  onChange={(e) => handleChange('processinglist', e.target.value)}
                />
              </label>
            </div>
            <label>
              Specie
              <input value={form.specie ?? ''} onChange={(e) => handleChange('specie', e.target.value)} />
            </label>
            <div className="form-grid">
              <label>
                Final quantity
                <input
                  type="number"
                  value={form.finalQuantity ?? ''}
                  onChange={(e) => handleChange('finalQuantity', e.target.value)}
                />
              </label>
              <label>
                Sent to lab
                <input
                  value={form.sendedToLab ?? ''}
                  onChange={(e) => handleChange('sendedToLab', e.target.value)}
                />
              </label>
              <label>
                Moisture
                <input
                  type="number"
                  value={form.moisture ?? ''}
                  onChange={(e) => handleChange('moisture', e.target.value)}
                />
              </label>
            </div>
            <div className="form-grid">
              <label>
                Soil type
                <select value={form.soilType ?? ''} onChange={(e) => handleChange('soilType', e.target.value)}>
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
                <select value={form.waterType ?? ''} onChange={(e) => handleChange('waterType', e.target.value)}>
                  <option value="">Select water type</option>
                  <option value="River Water">River Water</option>
                  <option value="Ground Water">Ground Water</option>
                  <option value="Rain Water">Rain Water</option>
                </select>
              </label>
              <label>
                Season
                <select value={form.season ?? ''} onChange={(e) => handleChange('season', e.target.value)}>
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
                <input value={form.location ?? ''} onChange={(e) => handleChange('location', e.target.value)} />
              </label>
              <label>
                Harvesting time
                <input
                  type="datetime-local"
                  value={form.harvestingTime ?? ''}
                  onChange={(e) => handleChange('harvestingTime', e.target.value)}
                />
              </label>
              <label>
                Fertiliser type
                <input
                  value={form.fertiliserType ?? ''}
                  onChange={(e) => handleChange('fertiliserType', e.target.value)}
                />
              </label>
            </div>
            {error ? (
              <div className="error" style={{ padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
                <strong>Error:</strong> {error}
                <button
                  type="button"
                  onClick={() => {
                    console.error('[EditInventoryPage] User requested error details:', error)
                    alert(`Error details:\n\n${error}\n\nCheck console (F12) for more details.`)
                  }}
                  style={{ marginLeft: '1rem', padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                >
                  Details
                </button>
              </div>
            ) : null}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button type="submit" disabled={submitting}>
                {submitting ? 'Saving...' : 'Save Changes'}
              </button>
              <button type="button" className="secondary" onClick={() => navigate(`/inventory/${id}`)}>
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

