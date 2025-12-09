import { useEffect, useState } from 'react'

interface QrPageProps {
  idString: string
  onBack?: () => void
}

function QrPage({ idString, onBack }: QrPageProps): React.JSX.Element {
  const [qrDataUrl, setQrDataUrl] = useState<string>('')
  const [error, setError] = useState('')
  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      window.location.hash = '#/'
    }
  }

  useEffect(() => {
    let isMounted = true
    ;(async () => {
      try {
        const { default: QRCode } = await import('qrcode')
        const qrUrl = `http://localhost:3000/scanqr/${encodeURIComponent(idString)}`
        const url = await QRCode.toDataURL(qrUrl, { width: 256 })
        if (isMounted) setQrDataUrl(url)
      } catch (e) {
        if (isMounted) setError(e instanceof Error ? e.message : 'Failed to generate QR')
      }
    })()
    return () => {
      isMounted = false
    }
  }, [idString])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', minHeight: '100vh' }}>
      <div style={{ display: 'flex', width: '100%', maxWidth: '640px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 600 }}>Generate QR Code</h1>
        <button 
          onClick={handleBack} 
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500
          }}
        >
          Back
        </button>
      </div>
      {error && (
        <div style={{ 
          color: '#d32f2f', 
          marginTop: 12, 
          padding: '12px',
          backgroundColor: '#ffebee',
          borderRadius: '4px',
          marginBottom: '16px'
        }}>
          {error}
        </div>
      )}
      {qrDataUrl && (
        <div style={{ 
          backgroundColor: '#fff', 
          padding: '24px', 
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '24px'
        }}>
          <img
            src={qrDataUrl}
            alt={`QR for ${idString}`}
            style={{ width: 256, height: 256, display: 'block' }}
          />
        </div>
      )}
      <div style={{ 
        marginTop: 12, 
        fontSize: 12, 
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        fontWeight: 600
      }}>
        Product ID
      </div>
      <div style={{ 
        marginTop: 8, 
        fontSize: 16, 
        fontWeight: 500,
        wordBreak: 'break-all',
        textAlign: 'center',
        maxWidth: '400px',
        backgroundColor: '#f5f5f5',
        padding: '12px 16px',
        borderRadius: '4px',
        fontFamily: 'monospace'
      }}>
        {idString}
      </div>
    </div>
  )
}

export default QrPage
