import { useMemo, useState } from 'react';
import type { Application, ApplicationStatus } from '../Interfaces/Application';

const STATUS_OPTIONS: ApplicationStatus[] = ['Applied', 'Interview', 'Offer', 'Rejected'];

type Props = {
  onAdd: (item: Application) => void;
};

export default function ApplicationForm({ onAdd }: Props) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState<ApplicationStatus>('Applied');

  const canAdd = useMemo(
    () => company.trim().length > 0 && position.trim().length > 0,
    [company, position]
  );

  const handleAdd = () => {
    if (!canAdd) return;

    onAdd({
      id: crypto.randomUUID(),
      company: company.trim().toUpperCase(),
      position: position.trim().toUpperCase(),
      status,
      createdAt: new Date().toISOString(),
    });

    setCompany('');
    setPosition('');
    setStatus('Applied');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && canAdd) {
      handleAdd();
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body p-4">
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Company</label>
            <input
              className="form-control"
              placeholder="e.g., Baykar"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Position</label>
            <input
              className="form-control"
              placeholder="e.g., Software Engineer"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value as ApplicationStatus)}
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-1 d-flex align-items-end">
            <button 
              className="btn btn-primary w-100" 
              onClick={handleAdd} 
              disabled={!canAdd}
              style={{ minWidth: '80px' }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}