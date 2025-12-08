import { FormEvent, useEffect, useState, type ReactElement } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  addFarmerInput,
  deleteFarmerInput,
  deleteInventory,
  getInventory,
  listFarmerInputs,
  type FarmerInput,
  type Inventory
} from '../api'
import { useAuth } from '../context/AuthContext'

const emptyInput = {
  quantity: '',
  eventId: '',
  specie: ''
}

export default function InventoryDetailPage(): ReactElement {
  const { id } = useParams<{ id: string }>()
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const [inventory, setInventory] = useState<Inventory | null>(null)
  const [inputs, setInputs] = useState<FarmerInput[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [inputForm, setInputForm] = useState(emptyInput)
  const [submitting, setSubmitting] = useState(false)
  const [sending, setSending] = useState(false)
  const [txHash, setTxHash] = useState<string | null>(null)
  const [deletingInventory, setDeletingInventory] = useState(false)
  const [deletingInputId, setDeletingInputId] = useState<string | null>(null)
  const computedFinalQuantity = inputs.reduce((sum, input) => {
    const qty = Number(input.quantity)
    return sum + (Number.isFinite(qty) ? qty : 0)
  }, 0)

  useEffect(() => {
    if (!token || !id) return
    setLoading(true)
    Promise.all([getInventory(id, token), listFarmerInputs(id, token)])
      .then(([inv, farmerInputs]) => {
        setInventory(inv)
        setInputs(farmerInputs)
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load inventory'))
      .finally(() => setLoading(false))
  }, [id, token])

  const handleAddInput = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    if (!token || !id) return
    setSubmitting(true)
    setError(null)
    try {
      const created = await addFarmerInput(
        {
          inventoryID: id,
          quantity: inputForm.quantity.trim(),
          eventId: inputForm.eventId.trim(),
          specie: inputForm.specie.trim() || undefined
        },
        token
      )
      setInputs((prev) => [created, ...prev])
      setInputForm(emptyInput)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to add farmer input'
      setError(message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleLogout = (): void => {
    logout()
    navigate('/')
  }

  const handleSendToChain = (): void => {
    if (sending) return
    setSending(true)
    setTxHash(null)
    setTimeout(() => {
      const hash = Math.random().toString(36).slice(2, 17) // 15-char sample hash
      setTxHash(hash)
      setSending(false)
    }, 3000)
  }

  const handleCopyHash = async (): Promise<void> => {
    if (!txHash) return
    try {
      await navigator.clipboard.writeText(txHash)
    } catch {
      // ignore copy failures silently
    }
  }

  const handleDeleteInventory = async (): Promise<void> => {
    if (!token || !id || deletingInventory) return
    const confirmed = window.confirm('Delete this inventory and its inputs?')
    if (!confirmed) return
    setDeletingInventory(true)
    setError(null)
    try {
      await deleteInventory(id, token)
      navigate('/inventory')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete inventory'
      setError(message)
    } finally {
      setDeletingInventory(false)
    }
  }

  const handleDeleteInput = async (inputId: string): Promise<void> => {
    if (!token || !id || deletingInputId) return
    setDeletingInputId(inputId)
    setError(null)
    try {
      await deleteFarmerInput(inputId, token)
      setInputs((prev) => prev.filter((input) => input._id !== inputId))
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete input'
      setError(message)
    } finally {
      setDeletingInputId(null)
    }
  }

  if (loading) {
    return (
      <div className="page">
        <p className="muted">Loading inventory...</p>
      </div>
    )
  }

  if (error) {
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
            <Link to="/inventory" className="link">
              ← Back to inventories
            </Link>
          </p>
          <h1>{inventory.inventoryName}</h1>
          <p className="muted">Inventory detail and farmer inputs.</p>
        </div>
        <div className="header-actions">
          <button className="secondary" onClick={() => navigate(0)}>
            Refresh
          </button>
          <button className="secondary" onClick={handleDeleteInventory} disabled={deletingInventory}>
            {deletingInventory ? 'Deleting...' : 'Delete'}
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div className="grid">
        <section className="card">
          <h2>Inventory details</h2>
          <dl className="detail-grid">
            <div>
              <dt>Assigned grade</dt>
              <dd>{inventory.assignedGrade || '—'}</dd>
            </div>
            <div>
              <dt>Specie</dt>
              <dd>{inventory.specie || '—'}</dd>
            </div>
            <div>
              <dt>Final quantity</dt>
              <dd>{computedFinalQuantity || '—'}</dd>
            </div>
            <div>
              <dt>Verification status</dt>
            <dd>Not verified</dd>
            </div>
          </dl>
          <div className="card-actions" style={{ marginTop: '1rem', gap: '0.5rem' }}>
            <button onClick={handleSendToChain} disabled={sending}>
              {sending ? 'Sending to chain...' : 'Send to blockchain'}
            </button>
            {txHash ? (
              <div className="muted" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span>Tx hash: {txHash}</span>
                <button className="secondary" onClick={handleCopyHash}>
                  Copy
                </button>
              </div>
            ) : null}
          </div>
        </section>

        <section className="card">
          <h2>Add farmer input</h2>
          <form className="form" onSubmit={handleAddInput}>
            <div className="form-grid">
              <label>
                Quantity
                <input
                  value={inputForm.quantity}
                  onChange={(e) => setInputForm((p) => ({ ...p, quantity: e.target.value }))}
                  required
                />
              </label>
              <label>
                Event ID
                <input
                  value={inputForm.eventId}
                  onChange={(e) => setInputForm((p) => ({ ...p, eventId: e.target.value }))}
                  required
                />
              </label>
            </div>
            <label>
              Specie
              <input
                value={inputForm.specie}
                onChange={(e) => setInputForm((p) => ({ ...p, specie: e.target.value }))}
                placeholder="Optional"
              />
            </label>
            {error ? <div className="error">{error}</div> : null}
            <button type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : 'Add input'}
            </button>
          </form>
        </section>
      </div>

      <section className="card">
        <div className="card-header">
          <h2>Farmer inputs</h2>
          <span className="muted">{inputs.length} record(s)</span>
        </div>
        {inputs.length === 0 ? (
          <p className="muted">No farmer inputs yet.</p>
        ) : (
          <ul className="list">
            {inputs.map((input) => (
              <li key={input._id} className="list-item">
                <div>
                  <div className="title">Event {input.eventId}</div>
                  <div className="muted">
                    Quantity {input.quantity}
                    {input.specie ? ` • Specie ${input.specie}` : ''}
                  </div>
                </div>
                <button
                  className="secondary"
                  onClick={() => handleDeleteInput(input._id)}
                  disabled={deletingInputId === input._id}
                >
                  {deletingInputId === input._id ? 'Deleting...' : 'Delete'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

