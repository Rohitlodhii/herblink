import Link from 'next/link'
import { useRouter } from 'next/router'
import { APP_NAME, APP_TAGLINE } from '../lib/constants'

export default function Layout({ children }){
  const router = useRouter();

  const navItems = [
    { href:'/', label:'Dashboard', icon:'🏠' },
    { href:'/farmers', label:'Farmers', icon:'👨‍🌾' },
    { href:'/processors', label:'Producers / Processors', icon:'🏭' },
    { href:'/manufacturers', label:'Manufacturers', icon:'🏗️' },
    { href:'/laboratories', label:'Laboratories', icon:'🧪' },
    { href:'/complaints', label:'Complaints', icon:'📨' },
  ];

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Main navigation">
        <div className="brand">
          <div className="brand-logo">H</div>
          <div className="brand-text">
            <div>{APP_NAME}</div>
            <div style={{fontSize:'.8rem',opacity:0.85}}>{APP_TAGLINE}</div>
          </div>
        </div>
        <nav className="side-nav">
          <div className="nav-section">प्रबंधन / Management</div>
          {navItems.map(item=>(
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${router.pathname === item.href ? 'active' : ''}`}
            >
              <span className="nav-ic">{item.icon}</span> {item.label}
            </Link>
          ))}
        </nav>

        <div style={{marginTop:'auto',padding:'1rem',fontSize:'.85rem',color:'rgba(255,255,255,0.7)'}}>
          <div style={{marginBottom:'.5rem'}}>Helpdesk: 1800-000-900</div>
          <div>MoA&FW Demo Portal</div>
        </div>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <div className="search-wrap">
            <input id="search" placeholder="Search queries, personnel" />
          </div>
          <div className="top-actions">
            <button className="icon-btn" title="Notifications">🔔</button>
            <div className="user">
              <div className="avatar">A</div>
             
            </div>
          </div>
        </header>

        <main className="content">{children}</main>
      </div>
    </div>
  )
}
