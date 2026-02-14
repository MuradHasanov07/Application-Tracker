import { useEffect, useState } from 'react';
import ApplicationForm from '../Components/ApplicationForm';
import ApplicationTable from '../Components/ApplicationTable';

import type { Application, ApplicationStatus } from '../Interfaces/Application';

const STORAGE_KEY = 'application-tracker-items-v1';

export default function HomePage() {
  const [items, setItems] = useState<Application[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as Application[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

 
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editCompany, setEditCompany] = useState('');
  const [editPosition, setEditPosition] = useState('');
  const [editStatus, setEditStatus] = useState<ApplicationStatus>('Applied');

 
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
    
    }
  }, [items]);

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  };

  const startEdit = (item: Application) => {
    setEditingId(item.id);
    setEditCompany(item.company);
    setEditPosition(item.position);
    setEditStatus(item.status);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditCompany('');
    setEditPosition('');
    setEditStatus('Applied');
  };

  const saveEdit = () => {
    if (!editingId) return;

    const c = editCompany.trim().toUpperCase();
    const p = editPosition.trim().toUpperCase();
    if (!c || !p) return;

    setItems((prev) =>
      prev.map((x) =>
        x.id === editingId ? { ...x, company: c, position: p, status: editStatus } : x
      )
    );

    cancelEdit();
  };

  const total = items.length;

  const active = items.filter(
    (x) => x.status === 'Applied' || x.status === 'Interview'
  ).length;

  const closed = items.filter(
    (x) => x.status === 'Offer' || x.status === 'Rejected'
  ).length;

  return (
    <div className="container py-4">
      <div className="app-shell">
        {/* HERO */}
        <div className="card app-hero shadow-sm rounded-4 mb-4">
          <div className="card-body p-4">
            <div className="d-flex align-items-center gap-3">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-3 neon-icon"
                style={{ 
                  width: 50, 
                  height: 50, 
                  background: 'rgba(0, 212, 255, 0.1)',
                  border: '2px solid rgba(0, 212, 255, 0.3)'
                }}
              >
                📋
              </div>
              <div>
                <h1 className="h3 m-0">Application Tracker</h1>
                <div className="app-muted mt-1">
                  Modern • Professional • LocalStorage CRUD
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card stat-card shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="stat-label mb-2">Total Applications</div>
                <div className="display-6">{total}</div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card stat-card shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="stat-label mb-2">Active</div>
                <div className="display-6">{active}</div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card stat-card shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="stat-label mb-2">Closed</div>
                <div className="display-6">{closed}</div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <ApplicationForm onAdd={(newItem) => setItems((prev) => [newItem, ...prev])} />

        {/* TABLE */}
        <ApplicationTable
          items={items}
          editingId={editingId}
          editCompany={editCompany}
          editPosition={editPosition}
          editStatus={editStatus}
          onStartEdit={startEdit}
          onCancelEdit={cancelEdit}
          onSaveEdit={saveEdit}
          onEditCompanyChange={setEditCompany}
          onEditPositionChange={setEditPosition}
          onEditStatusChange={setEditStatus}
          onDelete={deleteItem}
        />

        {/* FOOTER */}
        <div className="text-center footer-text mt-5 mb-3">
          🌟 Built as part of Software Persona Web Project • Designed & Developed by Murad Hasanov🌟
        </div>
      </div>
    </div>
  );
}