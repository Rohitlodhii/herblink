import { useState, useRef, useEffect } from 'react'

export default function ActionMenu({ onApprove, onReject, onEdit, onDelete }){
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(()=>{
    function onDoc(e){ if(ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('click', onDoc)
    return ()=>document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className="action-menu" ref={ref}>
      <button aria-haspopup="true" aria-expanded={open} onClick={()=>setOpen(s=>!s)} className="page-btn">⋯</button>
      {open && (
        <div className="action-popover" role="menu">
          <button role="menuitem" onClick={()=>{ setOpen(false); onApprove && onApprove() }}>Approved</button>
          <button role="menuitem" onClick={()=>{ setOpen(false); onReject && onReject() }}>Reject</button>
          <button role="menuitem" onClick={()=>{ setOpen(false); onEdit && onEdit() }}>Edit</button>
          <button role="menuitem" onClick={()=>{ setOpen(false); onDelete && onDelete() }}>Delete</button>
        </div>
      )}
    </div>
  )
}
