import { useState } from 'react';
import { useData } from '../lib/dataContext';

export default function ComplaintsPage(){
  const { complaints, addComplaint, setComplaintStatus } = useData();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  function submit(e){
    e.preventDefault();
    addComplaint(name, desc);
    setName('');
    setDesc('');
  }

  function showDetails(c){
    setSelected(c);
    setOpen(true);
  }

  function closeDetails(){
    setOpen(false);
    setSelected(null);
  }

  return (
    <div className="container">
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="header">

        <h1>Complaints (शिकायतें)</h1>
        <p className="lead">Submit and resolve complaints. Admin controls status locally.</p>
      </header>

      <main id="main" role="main">
        {/* <div className="page-card" style={{marginBottom:'1rem'}}>
          <h3>Submit Complaint</h3>
          <form className="complaint-form" onSubmit={submit}>
            <div className="form-row">
              <label>Reporter Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" required />
            </div>
            <div className="form-row">
              <label>Complaint</label>
              <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Describe the issue" required />
            </div>
            <button type="submit" className="primary">Submit</button>
          </form>
        </div> */}

        <div className="table-wrap">
          <table className="data-table" role="table" aria-describedby="complaintsDesc">
            <caption id="complaintsDesc">List of complaints with ticket numbers and resolve action</caption>
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Reporter</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {complaints.length === 0 && (<tr><td colSpan={5}>No complaints found.</td></tr>)}
              {complaints.map(c => (
                <tr key={c.id}>
                  <td>{c.ticket}</td>
                  <td>{c.name}</td>
                  <td>{c.description.length > 50 ? c.description.slice(0,50)+'…' : c.description}</td>
                  <td>
                    {c.status === 'Resolved' ? <span className="badge approved">Resolved</span> : <span className="badge pending">Pending</span>}
                  </td>
                  <td style={{display:'flex',gap:8}}>
                    <button className="page-btn" onClick={()=>setComplaintStatus(c.id, c.status === 'Resolved' ? 'Pending' : 'Resolved')}>
                      {c.status === 'Resolved' ? 'Mark Pending' : 'Resolve'}
                    </button>
                    <button className="page-btn" onClick={()=>showDetails(c)}>Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <div className="modal" role="dialog" aria-modal="true" aria-hidden={!open} style={{display: open ? 'flex' : 'none'}}>
        <div className="modal-dialog">
          <h3>Complaint Details</h3>
          {!selected && <p>No complaint selected.</p>}
          {selected && (
            <div>
              <p><strong>Ticket:</strong> {selected.ticket}</p>
              <p><strong>Reporter:</strong> {selected.name}</p>
              <p><strong>Status:</strong> {selected.status}</p>
              <p><strong>Description:</strong><br/>{selected.description}</p>
              {selected.submitted_at && <p><strong>Submitted:</strong> {selected.submitted_at}</p>}
            </div>
          )}
          <div className="modal-actions">
            <button className="secondary" onClick={closeDetails}>Close</button>
            {selected && (
              <button
                className="primary"
                onClick={()=>{
                  setComplaintStatus(selected.id, selected.status === 'Resolved' ? 'Pending' : 'Resolved');
                  closeDetails();
                }}
              >
                {selected?.status === 'Resolved' ? 'Mark Pending' : 'Resolve'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
