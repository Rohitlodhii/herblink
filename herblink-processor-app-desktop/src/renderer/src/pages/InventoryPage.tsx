import { FormEvent, useEffect, useState, type ReactElement } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createInventory, listInventories, type Inventory } from '../api'
import { useAuth } from '../context/AuthContext'

const emptyForm = {
  inventoryName: '',
  assignedGrade: '',
  processinglist: '',
  specie: '',
  finalQuantity: '',
  sendedToLab: ''
}

export default function InventoryPage(): ReactElement {
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const [inventories, setInventories] = useState<Inventory[]>([])
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
          processinglist: form.processinglist.trim() || undefined,
          specie: form.specie.trim(),
          finalQuantity: form.finalQuantity.trim(),
          sendedToLab: form.sendedToLab.trim() || undefined
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
            </div>
            <div className="form-grid">
              <label>
                Specie
                <input value={form.specie} onChange={(e) => handleChange('specie', e.target.value)} required />
              </label>
              <label>
                Final quantity
                <input
                  value={form.finalQuantity}
                  onChange={(e) => handleChange('finalQuantity', e.target.value)}
                  required
                />
              </label>
            </div>
            <label>
              Processing list
              <input
                value={form.processinglist}
                onChange={(e) => handleChange('processinglist', e.target.value)}
                placeholder="Optional"
              />
            </label>
            <label>
              Sent to lab
              <input
                value={form.sendedToLab}
                onChange={(e) => handleChange('sendedToLab', e.target.value)}
                placeholder="Optional"
              />
            </label>
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
                  <Link to={`/inventory/${inv._id}`} className="link">
                    View
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

