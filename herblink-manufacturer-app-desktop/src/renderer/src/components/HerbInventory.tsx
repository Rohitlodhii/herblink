import { useState, useEffect } from 'react'
import { herbInventoryApi } from '../utils/api'
import './HerbInventory.css'

interface HerbInventory {
  id: string
  processorInventoryId: string
  quantityReceived: string
  processorInventory?: any
  productInventory?: any[]
}

function HerbInventory(): React.JSX.Element {
  const [inventories, setInventories] = useState<HerbInventory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingInventory, setEditingInventory] = useState<HerbInventory | null>(null)
  const [formData, setFormData] = useState({
    processorInventoryId: '',
    quantityReceived: ''
  })

  useEffect(() => {
    loadInventories()
  }, [])

  const loadInventories = async () => {
    setLoading(true)
    setError('')
    const result = await herbInventoryApi.list()
    if (result.success && result.data) {
      setInventories(result.data)
    } else {
      setError(result.error || 'Failed to load herb inventories')
      if (result.error?.includes('Session expired')) {
        window.location.reload()
      }
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const payload: any = {}
    if (formData.quantityReceived) payload.quantityReceived = formData.quantityReceived
    if (formData.processorInventoryId) payload.processorInventoryId = formData.processorInventoryId

    let result
    if (editingInventory) {
      result = await herbInventoryApi.update(editingInventory.id, payload)
    } else {
      if (!formData.processorInventoryId || !formData.quantityReceived) {
        setError('Please fill in all required fields')
        return
      }
      result = await herbInventoryApi.create({
        processorInventoryId: formData.processorInventoryId,
        quantityReceived: formData.quantityReceived
      })
    }

    if (result.success) {
      setShowModal(false)
      setEditingInventory(null)
      resetForm()
      loadInventories()
    } else {
      setError(result.error || 'Operation failed')
    }
  }

  const handleEdit = (inventory: HerbInventory) => {
    setEditingInventory(inventory)
    setFormData({
      processorInventoryId: inventory.processorInventoryId || '',
      quantityReceived: inventory.quantityReceived || ''
    })
    setShowModal(true)
  }

  const resetForm = () => {
    setFormData({
      processorInventoryId: '',
      quantityReceived: ''
    })
    setEditingInventory(null)
  }

  const openCreateModal = () => {
    resetForm()
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    resetForm()
  }

  return (
    <div className="herb-inventory-container">
      <div className="herb-inventory-header">
        <h2>Herb Inventory</h2>
        <button onClick={openCreateModal} className="btn-primary">
          + Create Herb Inventory
        </button>
      </div>

      {error && <div className="error-banner">{error}</div>}

      {loading ? (
        <div className="loading">Loading herb inventories...</div>
      ) : (
        <div className="inventory-table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Processor Inventory ID</th>
                <th>Quantity Received</th>
                <th>Processor Details</th>
                <th>Product Inventories</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventories.length === 0 ? (
                <tr>
                  <td colSpan={5} className="empty-state">
                    No herb inventories found. Create your first herb inventory!
                  </td>
                </tr>
              ) : (
                inventories.map((inventory) => (
                  <tr key={inventory.id}>
                    <td>{inventory.processorInventoryId}</td>
                    <td>{inventory.quantityReceived}</td>
                    <td>
                      {inventory.processorInventory
                        ? `ID: ${inventory.processorInventory.id || '-'}`
                        : '-'}
                    </td>
                    <td>{inventory.productInventory?.length || 0}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          onClick={() => handleEdit(inventory)}
                          className="btn-edit"
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {editingInventory ? 'Edit Herb Inventory' : 'Create Herb Inventory'}
              </h3>
              <button onClick={closeModal} className="modal-close">
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>
                  Processor Inventory ID <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formData.processorInventoryId}
                  onChange={(e) =>
                    setFormData({ ...formData, processorInventoryId: e.target.value })
                  }
                  required={!editingInventory}
                  disabled={!!editingInventory}
                />
              </div>
              <div className="form-group">
                <label>
                  Quantity Received <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formData.quantityReceived}
                  onChange={(e) =>
                    setFormData({ ...formData, quantityReceived: e.target.value })
                  }
                  required={!editingInventory}
                />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={closeModal} className="btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingInventory ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default HerbInventory

