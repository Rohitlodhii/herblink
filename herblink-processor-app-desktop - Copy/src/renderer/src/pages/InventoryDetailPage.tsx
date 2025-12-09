import { FormEvent, useEffect, useState, type ReactElement } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  addFarmerInput,
  deleteFarmerInput,
  deleteInventory,
  getInventoryById,
  listFarmerInputs,
  updateInventory,
  getInventoryId,
  getFarmerInputId,
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
  const [inventoryError, setInventoryError] = useState<string | null>(null)
  const [inputsError, setInputsError] = useState<string | null>(null)
  const [inputForm, setInputForm] = useState(emptyInput)
  const [submitting, setSubmitting] = useState(false)
  const [sending, setSending] = useState(false)
  const [sentToBlockchain, setSentToBlockchain] = useState(false)
  const [deletingInventory, setDeletingInventory] = useState(false)
  const [deletingInputId, setDeletingInputId] = useState<string | null>(null)
  const [finishing, setFinishing] = useState(false)
  const [finished, setFinished] = useState(false)
  const computedFinalQuantity = inputs.reduce((sum, input) => {
    const qty = Number(input.quantity)
    return sum + (Number.isFinite(qty) ? qty : 0)
  }, 0)

  useEffect(() => {
    if (!token || !id) {
      console.warn('[InventoryDetailPage] Missing token or id:', { token: !!token, id })
      return
    }
    setLoading(true)
    setError(null)
    setInventoryError(null)
    setInputsError(null)
    console.log(`[InventoryDetailPage] Loading inventory ${id}`)
    
    // Load inventory first
    getInventoryById(id, token)
      .then((inv) => {
        console.log('[InventoryDetailPage] Loaded inventory:', inv)
        setInventory(inv)
        setFinished(inv.isprocessingDone ?? false)
        setInventoryError(null)
        
        // Load farmer inputs after inventory is loaded (non-blocking)
        listFarmerInputs(id, token)
          .then((farmerInputs) => {
            console.log('[InventoryDetailPage] Loaded farmer inputs:', farmerInputs)
            setInputs(farmerInputs || [])
            setInputsError(null)
          })
          .catch((err) => {
            console.warn('[InventoryDetailPage] Error loading farmer inputs (non-critical):', err)
            const message = err instanceof Error ? err.message : 'Failed to load farmer inputs'
            setInputsError(message)
            setInputs([]) // Set empty array if farmer inputs fail
          })
      })
      .catch((err) => {
        console.error('[InventoryDetailPage] Error loading inventory:', err)
        const message = err instanceof Error ? err.message : 'Failed to load inventory'
        setInventoryError(message)
        setError(message)
        setInputs([])
      })
      .finally(() => setLoading(false))
  }, [id, token])

  const handleAddInput = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    if (!token || !id) return
    setSubmitting(true)
    setError(null)
    try {
      const payload = {
        inventoryID: id,
        quantity: inputForm.quantity.trim(),
        eventId: inputForm.eventId.trim(),
        specie: inputForm.specie.trim() || undefined
      }
      console.log('[InventoryDetailPage] Adding farmer input:', payload)
      const created = await addFarmerInput(payload, token)
      console.log('[InventoryDetailPage] Created farmer input:', created)
      setInputs((prev) => [created, ...prev])
      setInputForm(emptyInput)
    } catch (err) {
      console.error('[InventoryDetailPage] Error adding farmer input:', err)
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
    if (sending || !finished) return
    setSending(true)
    setTimeout(() => {
      setSentToBlockchain(true)
      setSending(false)
    }, 3000)
  }

  const handleCopyInventoryId = async (): Promise<void> => {
    if (!inventory) return
    const inventoryId = getInventoryId(inventory)
    try {
      await navigator.clipboard.writeText(inventoryId)
      alert('Inventory ID copied to clipboard!')
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
      setInputs((prev) => prev.filter((input) => getFarmerInputId(input) !== inputId))
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete input'
      setError(message)
    } finally {
      setDeletingInputId(null)
    }
  }

  const handleFinishInventory = async (): Promise<void> => {
    if (!token || !id || finishing || finished) return
    const confirmed = window.confirm('Are you sure you want to finalize this inventory? This action cannot be undone.')
    if (!confirmed) return
    setFinishing(true)
    setError(null)
    try {
      console.log(`[InventoryDetailPage] Finalizing inventory ${id}`)
      const updated = await updateInventory(id, { isprocessingDone: true }, token)
      console.log('[InventoryDetailPage] Updated inventory:', updated)
      setInventory(updated)
      setFinished(true)
    } catch (err) {
      console.error('[InventoryDetailPage] Error finalizing inventory:', err)
      const message = err instanceof Error ? err.message : 'Failed to finalize inventory'
      setError(message)
    } finally {
      setFinishing(false)
    }
  }

  if (loading) {
    return (
      <div className="page">
        <p className="muted">Loading inventory...</p>
      </div>
    )
  }

  // Show error only if inventory failed to load
  if (inventoryError && !inventory) {
    return (
      <div className="page">
        <div className="card">
          <h2>Error Loading Inventory</h2>
          <p className="error">{inventoryError}</p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={() => navigate(0)}>Retry</button>
          </div>
        </div>
      </div>
    )
  }

  if (!inventory && !loading) {
    return (
      <div className="page">
        <div className="card">
          <p className="muted">Inventory not found.</p>
          <button onClick={() => navigate(-1)} style={{ marginTop: '1rem' }}>Go back</button>
        </div>
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
          {!finished && (
            <Link to={`/inventory/${id}/edit`} className="link" style={{ textDecoration: 'none' }}>
              <button className="secondary">Edit</button>
            </Link>
          )}
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
              <dd>{inventory.finalQuantity || computedFinalQuantity || '—'}</dd>
            </div>
            <div>
              <dt>Processing status</dt>
              <dd>{finished ? '✓ Processing Complete' : 'In Progress'}</dd>
            </div>
          </dl>
          <div className="card-actions" style={{ marginTop: '1rem', gap: '0.5rem', flexWrap: 'wrap' }}>
            {!finished && (
              <button
                onClick={handleFinishInventory}
                disabled={finishing}
                style={{ background: '#28a745', color: 'white' }}
              >
                {finishing ? 'Finalizing...' : 'Finalize Inventory'}
              </button>
            )}
            {finished && !sentToBlockchain && (
              <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '4px', width: '100%' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  ✓ Processing Complete!
                </div>
                <div style={{ fontSize: '0.9rem' }}>Click "Send to blockchain" to complete the process and view your Inventory ID.</div>
              </div>
            )}
            <button onClick={handleSendToChain} disabled={sending || !finished}>
              {sending ? 'Sending to chain...' : 'Send to blockchain'}
            </button>
            {finished && sentToBlockchain && (
              <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '4px', width: '100%', marginTop: '1rem' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  ✓ Successfully Sent to Blockchain!
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Your Inventory ID:</strong>
                </div>
                <div style={{ 
                  fontFamily: 'monospace', 
                  fontSize: '1.1em', 
                  background: 'white', 
                  padding: '0.75rem', 
                  borderRadius: '4px',
                  wordBreak: 'break-all',
                  marginBottom: '0.5rem'
                }}>
                  {getInventoryId(inventory)}
                </div>
                <button 
                  onClick={handleCopyInventoryId}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Copy Inventory ID
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="card">
          <h2>Add farmer input</h2>
          {inputsError && (
            <div style={{ padding: '0.75rem', background: '#fff3cd', color: '#856404', borderRadius: '4px', marginBottom: '1rem' }}>
              <strong>Warning:</strong> {inputsError}. You can still add new farmer inputs below.
            </div>
          )}
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
            {error ? (
              <div className="error" style={{ padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
                <strong>Error:</strong> {error}
                <button
                  type="button"
                  onClick={() => {
                    console.error('[InventoryDetailPage] User requested error details:', error)
                    alert(`Error details:\n\n${error}\n\nCheck console (F12) for more details.`)
                  }}
                  style={{ marginLeft: '1rem', padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                >
                  Details
                </button>
              </div>
            ) : null}
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
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p className="muted" style={{ marginBottom: '1rem' }}>No farmer inputs yet.</p>
            <p className="muted" style={{ fontSize: '0.9rem' }}>
              Use the form above to add farmer inputs to this inventory.
            </p>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Event ID</th>
                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Quantity</th>
                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Specie</th>
                <th style={{ textAlign: 'right', padding: '0.75rem' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inputs.map((input) => {
                const inputId = getFarmerInputId(input)
                return (
                  <tr key={inputId} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.75rem' }}>{input.eventId}</td>
                    <td style={{ padding: '0.75rem' }}>{input.quantity}</td>
                    <td style={{ padding: '0.75rem' }}>{input.specie || '—'}</td>
                    <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                      <button
                        className="secondary"
                        onClick={() => handleDeleteInput(inputId)}
                        disabled={deletingInputId === inputId}
                      >
                        {deletingInputId === inputId ? 'Deleting...' : 'Delete'}
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </section>
    </div>
  )
}

