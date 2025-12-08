import { useState } from 'react';
import { apiFetch } from '../lib/apiClient';
import ActionMenu from './ActionMenu';

// registrations: array, reload: fn, entity: 'farmer'|'manufacturer'|'processor'|'laboratory'
export default function RegistrationTable({ registrations, reload, entity = 'farmer' }){
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const cfg = {
    farmer: {
      detailsPath: '/admin/farmer/getFarmerDetails', detailsKey: 'farmerId',
      statusPath: '/admin/farmer/setVerificationStatus', statusBody: (id,s)=>({ farmerId: id, status: s }),
      listPath: '/admin/farmer/notverified'
    },
    manufacturer: {
      detailsPath: '/admin/manufacturer/getManufacturerDetails', detailsKey: 'manufacturerId',
      statusPath: '/admin/manufacturer/setVerificationStatus', statusBody: (id,s)=>({ manufacturerId: id, status: s }),
      listPath: '/admin/manufacturer/notverified'
    },
    processor: {
      detailsPath: '/admin/processor/getProcessorDetails', detailsKey: 'processorId',
      statusPath: '/admin/processor/setVerificationStatus', statusBody: (id,s)=>({ processorId: id, status: s }),
      listPath: '/admin/processor/notverified'
    },
    laboratory: {
      detailsPath: '/admin/laboratory/getLaboratoryDetails', detailsKey: 'laboratoryId',
      statusPath: '/admin/laboratory/setVerificationStatus', statusBody: (id,s)=>({ laboratoryId: id, status: s }),
      listPath: '/admin/laboratory/notverified'
    }
  };

  const mapKey = entity === 'producer' ? 'processor' : (entity || 'farmer');
  const target = cfg[mapKey] || cfg.farmer;

  async function fetchDetails(id){
    setLoading(true);
    try{
      const res = await apiFetch(target.detailsPath, { method: 'POST', body: JSON.stringify({ [target.detailsKey]: id }) });
      if(!res.ok) throw new Error('Failed');
      const json = await res.json();
      setDetails(json.farmer || json || {});
    }catch(err){
      console.error(err);
      setDetails({ error: 'Failed to load details' });
    }finally{ setLoading(false); }
  }

  async function setStatus(id, status){
    setLoading(true);
    try{
      const res = await apiFetch(target.statusPath, { method: 'POST', body: JSON.stringify(target.statusBody(id, status)) });
      if(!res.ok) throw new Error('Failed');
      await reload();
    }catch(err){
      console.error(err);
      alert('Failed to update status');
    }finally{ setLoading(false); }
  }

  return (
    <div>
      <div className="table-wrap">
        <table className="data-table" role="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.length === 0 && <tr><td colSpan={6}>No registrations</td></tr>}
            {registrations.map(r => (
              <tr key={r.id}>
                <td style={{width:40}}><div className="avatar small">{(r.name||'')[0] || 'U'}</div></td>
                <td>
                  <div style={{fontWeight:600}}>{r.name}</div>
                  <div style={{fontSize:'.85rem',color:'var(--muted)'}}>Type: {r.type}</div>
                </td>
                <td><a href={`mailto:${r.email}`}>{r.email}</a></td>
                <td>{r.location || '—'}</td>
                <td>
                  {r.status && r.status.toLowerCase().includes('approved') && <span className="badge approved">Approved</span>}
                  {r.status && r.status.toLowerCase().includes('pending') && <span className="badge pending">Pending</span>}
                  {r.status && r.status.toLowerCase().includes('reject') && <span className="badge rejected">Rejected</span>}
                </td>
                <td style={{width:140}}>
                  <button className="page-btn" onClick={()=>fetchDetails(r.id)} aria-label={`Details for ${r.name}`}>Details</button>
                  <ActionMenu onApprove={()=>setStatus(r.id,'approved')} onReject={()=>setStatus(r.id,'rejected')} onEdit={()=>alert('Edit '+r.id)} onDelete={()=>setStatus(r.id,'rejected')} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {details && (
        <div className="modal" role="dialog" aria-modal="true" aria-hidden={!details} style={{display: details ? 'flex' : 'none'}}>
          <div className="modal-dialog">
            <h3>Details</h3>
            {loading && <p>Loading…</p>}
            {details.error && <p role="alert">{details.error}</p>}
            {!details.error && !loading && (
              <div>
                <p><strong>Type:</strong> {details.type}</p>
                <p><strong>Name:</strong> {details.name}</p>
                <p><strong>Email:</strong> {details.email}</p>
                <p><strong>Location:</strong> {details.location}</p>
                <p><strong>Status:</strong> {details.status}</p>
                <p><strong>Created:</strong> {details.created_at}</p>
              </div>
            )}
            <div className="modal-actions">
              <button className="secondary" onClick={()=>setDetails(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
