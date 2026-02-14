import type { Application, ApplicationStatus } from '../Interfaces/Application';

const STATUS_OPTIONS: ApplicationStatus[] = ['Applied', 'Interview', 'Offer', 'Rejected'];

type Props = {
  items: Application[];

  editingId: string | null;
  editCompany: string;
  editPosition: string;
  editStatus: ApplicationStatus;

  onStartEdit: (item: Application) => void;
  onCancelEdit: () => void;
  onSaveEdit: () => void;

  onEditCompanyChange: (v: string) => void;
  onEditPositionChange: (v: string) => void;
  onEditStatusChange: (v: ApplicationStatus) => void;

  onDelete: (id: string) => void;
};


const getStatusBadgeClass = (status: ApplicationStatus): string => {
  const statusMap: Record<ApplicationStatus, string> = {
    Applied: 'status-applied',
    Interview: 'status-interview',
    Offer: 'status-offer',
    Rejected: 'status-rejected',
  };
  return statusMap[status] || 'status-applied';
};

export default function ApplicationTable({
  items,
  editingId,
  editCompany,
  editPosition,
  editStatus,
  onStartEdit,
  onCancelEdit,
  onSaveEdit,
  onEditCompanyChange,
  onEditPositionChange,
  onEditStatusChange,
  onDelete,
}: Props) {
  if (items.length === 0) {
    return (
      <div className="alert" role="alert">
        <div className="d-flex align-items-center gap-2">
          <span style={{ fontSize: '1.5rem' }}>💼</span>
          <span>No applications yet. Add your first application above!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle table-compact m-0">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Company</th>
                <th style={{ width: '35%' }}>Position</th>
                <th style={{ width: '15%' }}>Status</th>
                <th className="text-end" style={{ width: '20%' }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {items.map((it) => (
                <tr key={it.id} className={editingId === it.id ? 'row-editing' : ''}>
                  <td>
                    {editingId === it.id ? (
                      <input
                        className="form-control form-control-sm"
                        value={editCompany}
                        onChange={(e) => onEditCompanyChange(e.target.value)}
                      />
                    ) : (
                      <span style={{ fontWeight: 600 }}>{it.company}</span>
                    )}
                  </td>

                  <td>
                    {editingId === it.id ? (
                      <input
                        className="form-control form-control-sm"
                        value={editPosition}
                        onChange={(e) => onEditPositionChange(e.target.value)}
                      />
                    ) : (
                      it.position
                    )}
                  </td>

                  <td>
                    {editingId === it.id ? (
                      <select
                        className="form-select form-select-sm"
                        value={editStatus}
                        onChange={(e) =>
                          onEditStatusChange(e.target.value as ApplicationStatus)
                        }
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className={`badge ${getStatusBadgeClass(it.status)}`}>
                        {it.status}
                      </span>
                    )}
                  </td>

                  <td className="text-end">
                    {editingId === it.id ? (
                      <>
                        <button
                          className="btn btn-sm btn-success me-2"
                          onClick={onSaveEdit}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={onCancelEdit}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => onStartEdit(it)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => onDelete(it.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}