import { useState, useEffect } from 'react'
import { productsApi } from '../utils/api'
import './Products.css'

interface Product {
  id: string
  productName: string
  productDescription?: string
  productImage?: string
  productionDate?: string
  productionBatch?: string
  Inventories?: any[]
}

interface ProductsProps {
  onQrPage?: (id: string) => void
}

function Products({ onQrPage }: ProductsProps): React.JSX.Element {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productImage: '',
    productionDate: '',
    productionBatch: ''
  })

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    setLoading(true)
    setError('')
    const result = await productsApi.list()
    if (result.success && result.data) {
      setProducts(result.data)
    } else {
      setError(result.error || 'Failed to load products')
      if (result.error?.includes('Session expired')) {
        window.location.reload()
      }
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const payload: any = {
      productName: formData.productName
    }
    if (formData.productDescription) payload.productDescription = formData.productDescription
    if (formData.productImage) payload.productImage = formData.productImage
    if (formData.productionDate) payload.productionDate = formData.productionDate
    if (formData.productionBatch) payload.productionBatch = formData.productionBatch

    let result
    if (editingProduct) {
      result = await productsApi.update(editingProduct.id, payload)
    } else {
      result = await productsApi.create(payload)
    }

    if (result.success) {
      setShowModal(false)
      setEditingProduct(null)
      resetForm()
      loadProducts()
    } else {
      setError(result.error || 'Operation failed')
    }
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      productName: product.productName || '',
      productDescription: product.productDescription || '',
      productImage: product.productImage || '',
      productionDate: product.productionDate || '',
      productionBatch: product.productionBatch || ''
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return

    const result = await productsApi.delete(id)
    if (result.success) {
      loadProducts()
    } else {
      setError(result.error || 'Failed to delete product')
      if (result.error?.includes('Session expired')) {
        window.location.reload()
      }
    }
  }

  const resetForm = () => {
    setFormData({
      productName: '',
      productDescription: '',
      productImage: '',
      productionDate: '',
      productionBatch: ''
    })
    setEditingProduct(null)
  }

  const openCreateModal = () => {
    resetForm()
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    resetForm()
  }

  const goToQrPage = (id: string) => {
    if (onQrPage) {
      onQrPage(id)
    }
  }

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Products</h2>
        <button onClick={openCreateModal} className="btn-primary">
          + Create Product
        </button>
      </div>

      {error && <div className="error-banner">{error}</div>}

      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="products-table-container">
          <table className="products-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Production Date</th>
                <th>Batch</th>
                <th>Inventories</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={6} className="empty-state">
                    No products found. Create your first product!
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.productName}</td>
                    <td>{product.productDescription || '-'}</td>
                    <td>{product.productionDate || '-'}</td>
                    <td>{product.productionBatch || '-'}</td>
                    <td>{product.Inventories?.length || 0}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          onClick={() => handleEdit(product)}
                          className="btn-edit"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="btn-delete"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => goToQrPage(product.id)}
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
              <h3>{editingProduct ? 'Edit Product' : 'Create Product'}</h3>
              <button onClick={closeModal} className="modal-close">
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>
                  Product Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) =>
                    setFormData({ ...formData, productName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={formData.productDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, productDescription: e.target.value })
                  }
                  rows={3}
                />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="text"
                  value={formData.productImage}
                  onChange={(e) =>
                    setFormData({ ...formData, productImage: e.target.value })
                  }
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Production Date</label>
                  <input
                    type="date"
                    value={formData.productionDate}
                    onChange={(e) =>
                      setFormData({ ...formData, productionDate: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Production Batch</label>
                  <input
                    type="text"
                    value={formData.productionBatch}
                    onChange={(e) =>
                      setFormData({ ...formData, productionBatch: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" onClick={closeModal} className="btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingProduct ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products

