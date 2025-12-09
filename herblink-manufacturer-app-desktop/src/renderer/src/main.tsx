import './assets/main.css'

import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import QrPage from './components/QrPage'

function Router(): React.JSX.Element {
  const [hash, setHash] = useState<string>(window.location.hash)
  const [qrId, setQrId] = useState<string | null>(null)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const h = hash || window.location.hash
    const match = /^#\/qr\/(.+)$/.exec(h)
    if (match) {
      setQrId(decodeURIComponent(match[1]))
    } else {
      const params = new URLSearchParams(window.location.search)
      setQrId(params.get('qrId'))
    }
  }, [hash])

  return qrId ? <QrPage idString={qrId} /> : <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
