import { useState, useEffect } from 'react'
import { productsApi, productInventoryApi } from '../utils/api'
import './ProductInventory.css'

interface ProductInventory {
  id: string
  productId: string
  HerbName: string
  herbInventoryId: string
  product?: any
  herbInventory?: any
  processorInventory?: any
}

interface Product {
  id: string
  productName: string
}

function ProductInventory(): React.JSX.Element {
  const [inventories, setInventories] = useState<ProductInventory[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProductId, setSelectedProductId] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingInventory, setEditingInventory] = useState<ProductInventory | null>(null)
  const [formData, setFormData] = useState({
    productId: '',
    HerbName: '',
    herbInventoryId: ''
  })

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    if (selectedProductId) {
      loadInventories(selectedProductId)
    } else {
      setInventories([])
    }
  }, [selectedProductId])

  const loadProducts = async () => {
    const result = await productsApi.list()
    if (result.success && result.data) {
      setProducts(result.data)
      if (result.data.length > 0 && !selectedProductId) {
        setSelectedProductId(result.data[0].id)
      }
    }
  }

  const loadInventories = async (productId: string) => {
    setLoading(true)
    setError('')
    const result = await productInventoryApi.listByProduct(productId)
    if (result.success && result.data) {
      setInventories(result.data)
    } else {
      setError(result.error || 'Failed to load product inventories')
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
    if (formData.HerbName) payload.HerbName = formData.HerbName
    if (formData.herbInventoryId) payload.herbInventoryId = formData.herbInventoryId

    let result
    if (editingInventory) {
      result = await productInventoryApi.update(editingInventory.id, payload)
    } else {
      if (!formData.productId || !formData.HerbName || !formData.herbInventoryId) {
        setError('Please fill in all required fields')
        return
      }
      result = await productInventoryApi.create({
        productId: formData.productId,
        HerbName: formData.HerbName,
        herbInventoryId: formData.herbInventoryId
      })
    }

    if (result.success) {
      setShowModal(false)
      setEditingInventory(null)
      resetForm()
      if (selectedProductId) {
        loadInventories(selectedProductId)
      }
    } else {
      setError(result.error || 'Operation failed')
    }
  }

  const handleEdit = (inventory: ProductInventory) => {
    setEditingInventory(inventory)
    setFormData({
      productId: inventory.productId,
      HerbName: inventory.HerbName || '',
      herbInventoryId: inventory.herbInventoryId || ''
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product inventory?')) return

    const result = await productInventoryApi.delete(id)
    if (result.success) {
      if (selectedProductId) {
        loadInventories(selectedProductId)
      }
    } else {
      setError(result.error || 'Failed to delete product inventory')
      if (result.error?.includes('Session expired')) {
        window.location.reload()
      }
    }
  }

  const goToQrPage = (id: string) => {
    window.location.hash = `#/qr/${encodeURIComponent(id)}`
  }

  const resetForm = () => {
    setFormData({
      productId: selectedProductId || '',
      HerbName: '',
      herbInventoryId: ''
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
    <div className="product-inventory-container">
      <div className="product-inventory-header">
        <h2>Product Inventory</h2>
        <div className="header-actions">
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
            className="product-select"
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.productName}
              </option>
            ))}
          </select>
          {selectedProductId && (
            <button onClick={openCreateModal} className="btn-primary">
              + Add Inventory
            </button>
          )}
        </div>
      </div>

      {error && <div className="error-banner">{error}</div>}

      {!selectedProductId ? (
        <div className="empty-state">Please select a product to view its inventory</div>
      ) : loading ? (
        <div className="loading">Loading inventories...</div>
      ) : (
        <div className="inventory-table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Herb Name</th>
                <th>Herb Inventory ID</th>
                <th>Processor Inventory</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventories.length === 0 ? (
                <tr>
                  <td colSpan={4} className="empty-state">
                    No inventories found for this product. Add your first inventory!
                  </td>
                </tr>
              ) : (
                inventories.map((inventory) => (
                  <tr key={inventory.id}>
                    <td>{inventory.HerbName}</td>
                    <td>{inventory.herbInventoryId}</td>
                    <td>
                      {inventory.processorInventory
                        ? `ID: ${inventory.processorInventory.id || '-'}`
                        : '-'}
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          onClick={() => handleEdit(inventory)}
                          className="btn-edit"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(inventory.id)}
                          className="btn-delete"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => goToQrPage(inventory.id)}
                          className="btn-primary"
                        >
                          Add to Chain
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
                {editingInventory ? 'Edit Product Inventory' : 'Create Product Inventory'}
              </h3>
              <button onClick={closeModal} className="modal-close">
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              {!editingInventory && (
                <div className="form-group">
                  <label>
                    Product <span className="required">*</span>
                  </label>
                  <select
                    value={formData.productId}
                    onChange={(e) =>
                      setFormData({ ...formData, productId: e.target.value })
                    }
                    required
                    disabled={!!editingInventory}
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.productName}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="form-group">
                <label>
                  Herb Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formData.HerbName}
                  onChange={(e) =>
                    setFormData({ ...formData, HerbName: e.target.value })
                  }
                  required={!editingInventory}
                />
              </div>
              <div className="form-group">
                <label>
                  Herb Inventory ID <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formData.herbInventoryId}
                  onChange={(e) =>
                    setFormData({ ...formData, herbInventoryId: e.target.value })
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

export default ProductInventory
