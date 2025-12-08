import { createContext, useContext, useMemo, useState } from 'react';
import seeds from './seedData';

const DataContext = createContext(null);

function generateTicket(prefix = 'C') {
  const rand = Math.floor(Math.random() * 9000) + 1000;
  const ts = Date.now().toString().slice(-4);
  return `${prefix}-${rand}${ts}`;
}

export function DataProvider({ children }) {
  const [data, setData] = useState(seeds);

  function updateStatus(entityKey, id, status) {
    setData(prev => ({
      ...prev,
      [entityKey]: prev[entityKey].map(item => item.id === id ? { ...item, status } : item)
    }));
  }

  function addComplaint(name, description) {
    const trimmedName = name?.trim() || 'Anonymous';
    const trimmedDesc = description?.trim() || 'No description provided';
    const newComplaint = {
      id: `cmp-${Date.now()}`,
      ticket: generateTicket(),
      name: trimmedName,
      description: trimmedDesc,
      status: 'Pending',
      submitted_at: new Date().toISOString().slice(0, 10)
    };
    setData(prev => ({ ...prev, complaints: [newComplaint, ...prev.complaints] }));
  }

  function setComplaintStatus(id, status) {
    setData(prev => ({
      ...prev,
      complaints: prev.complaints.map(c => c.id === id ? { ...c, status } : c)
    }));
  }

  const value = useMemo(() => ({
    ...data,
    updateStatus,
    addComplaint,
    setComplaintStatus
  }), [data]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
}

