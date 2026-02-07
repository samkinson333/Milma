import { useState } from 'react';
import styles from './Admin.module.css';
import {
    Plus, Edit, FileText, Download, X,
    Calendar, Paperclip, AlertCircle, CheckCircle,
    Scale, Bookmark, FileStack, Archive, Search
} from 'lucide-react';

interface Tender {
    id: number;
    title: string;
    refNumber: string;
    publishDate: string;
    closingDate: string;
    status: 'active' | 'closed' | 'draft';
    files: { name: string; size: string }[];
    description: string;
}

const AdminTenders = () => {
    const [showEditorModal, setShowEditorModal] = useState(false);
    const [editingTender, setEditingTender] = useState<Tender | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const [tenders, setTenders] = useState<Tender[]>([
        {
            id: 1,
            title: 'Supply of High-Density Polyethylene (HDPE) Milk Bottles',
            refNumber: 'MILMA/TR/PUR/2026/045',
            publishDate: '2026-02-01',
            closingDate: '2026-02-25',
            status: 'active',
            files: [
                { name: 'tender_document_hdpe.pdf', size: '1.2 MB' },
                { name: 'technical_specifications.pdf', size: '850 KB' }
            ],
            description: 'Tenders are invited from registered manufacturers for the supply of HDPE milk bottles for the Thiruvananthapuram Dairy.'
        },
        {
            id: 2,
            title: 'Annual Maintenance Contract for Refrigeration Plant',
            refNumber: 'MILMA/ER/ENGG/2026/012',
            publishDate: '2026-01-15',
            closingDate: '2026-02-10',
            status: 'active',
            files: [
                { name: 'amc_refrigeration_details.pdf', size: '3.1 MB' }
            ],
            description: 'Sealed tenders are invited for the AMC of refrigeration plants at various dairies under TRCMPU Ltd.'
        },
        {
            id: 3,
            title: 'Procurement of Laboratory Chemicals and Glassware',
            refNumber: 'MILMA/HQ/QA/2026/098',
            publishDate: '2026-02-05',
            closingDate: '2026-03-05',
            status: 'draft',
            files: [],
            description: 'Tenders for the supply of laboratory chemicals and glassware for the financial year 2026-27.'
        },
        {
            id: 4,
            title: 'Transportation of Milk and Milk Products in Palakkad Region',
            refNumber: 'MILMA/PKD/LOG/2026/022',
            publishDate: '2025-12-20',
            closingDate: '2026-01-20',
            status: 'closed',
            files: [
                { name: 'transportation_contract_2026.pdf', size: '2.4 MB' }
            ],
            description: 'Contract for the transportation of milk and milk products from Palakkad dairy to various distribution points.'
        }
    ]);

    const openEditorModal = (tender?: Tender) => {
        setEditingTender(tender || null);
        setShowEditorModal(true);
    };

    const closeEditorModal = () => {
        setShowEditorModal(false);
        setEditingTender(null);
    };

    const deleteTender = (id: number) => {
        if (confirm('Are you sure you want to archive this official tender? This action will remove it from public view.')) {
            setTenders(tenders.filter(t => t.id !== id));
        }
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'active':
                return `${styles.govBadgeFixed} ${styles.govBadgeActive}`;
            case 'closed':
                return `${styles.govBadgeFixed} ${styles.govBadgeClosed}`;
            case 'draft':
                return `${styles.govBadgeFixed} ${styles.govBadgeDraft}`;
            default:
                return styles.govBadgeFixed;
        }
    };

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const filteredTenders = tenders.filter(t =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.refNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Government Theme Header */}
            <div className={styles.govHeader}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 className={styles.govTitle}>Tender Management System</h1>
                        <p className={styles.govSubtitle}>Kerala Co-operative Milk Marketing Federation Ltd. (TRCMPU)</p>
                    </div>
                    <button className={styles.buttonSuccess} style={{ borderRadius: '4px' }} onClick={() => openEditorModal()}>
                        <Plus size={18} />
                        Publish New Tender
                    </button>
                </div>
            </div>

            <div className={styles.govTableContainer}>
                {/* Search and Filters Bar */}
                <div className={styles.filterBar}>
                    <div className={styles.searchBox}>
                        <Search size={18} color="#94a3b8" />
                        <input
                            type="text"
                            placeholder="Search by Title or Reference Number..."
                            className={styles.searchInput}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className={styles.filterGroup}>
                        <span className={styles.filterLabel}>Status:</span>
                        <select className={styles.filterSelect}>
                            <option value="all">All Tenders</option>
                            <option value="active">Active</option>
                            <option value="closed">Closed</option>
                            <option value="draft">Drafts</option>
                        </select>
                    </div>
                    <div className={styles.resultCount}>
                        Showing {filteredTenders.length} official tenders
                    </div>
                </div>

                <table className={styles.govTable}>
                    <thead>
                        <tr>
                            <th>Tender Details & Reference</th>
                            <th>Timeline</th>
                            <th>Official Status</th>
                            <th>Documents</th>
                            <th>Management</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTenders.map((tender) => (
                            <tr key={tender.id}>
                                <td>
                                    <div style={{ maxWidth: '400px' }}>
                                        <strong className={styles.govTenderTitle}>{tender.title}</strong>
                                        <span className={styles.govRefNumber}>{tender.refNumber}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.govDateCell}>
                                        <div className={styles.govDateItem}>
                                            <span className={styles.govDateLabel}>PUBLISH</span>
                                            <Calendar size={14} color="#64748b" />
                                            <span>{formatDate(tender.publishDate)}</span>
                                        </div>
                                        <div className={styles.govDateItem}>
                                            <span className={styles.govDateLabel}>CLOSING</span>
                                            <AlertCircle size={14} color={tender.status === 'closed' ? '#ef4444' : '#f59e0b'} />
                                            <span style={{
                                                color: tender.status === 'closed' ? '#ef4444' : '#1e293b',
                                                fontWeight: tender.status === 'active' ? '600' : 'normal'
                                            }}>
                                                {formatDate(tender.closingDate)}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className={getStatusBadgeClass(tender.status)}>
                                        {tender.status.toUpperCase()}
                                    </span>
                                </td>
                                <td>
                                    <div className={styles.govFilesList}>
                                        {tender.files.length > 0 ? (
                                            tender.files.map((file, idx) => (
                                                <button key={idx} className={styles.govDownloadBtn} title={`Official PDF: ${file.name}`}>
                                                    <FileText size={14} />
                                                    <span>{file.name.length > 18 ? file.name.substring(0, 15) + '...' : file.name}</span>
                                                    <Download size={12} style={{ marginLeft: 'auto', opacity: 0.6 }} />
                                                </button>
                                            ))
                                        ) : (
                                            <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>No documents</span>
                                        )}
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.tableActions}>
                                        <button
                                            className={`${styles.govActionBtn} ${styles.govActionBtnPrimary}`}
                                            onClick={() => openEditorModal(tender)}
                                            title="Edit Tender Details"
                                        >
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            className={`${styles.govActionBtn} ${styles.govActionBtnDanger}`}
                                            onClick={() => deleteTender(tender.id)}
                                            title="Archive Official Document"
                                        >
                                            <Archive size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredTenders.length === 0 && (
                    <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                        No records found matching your search criteria.
                    </div>
                )}
            </div>

            {/* Official Tender Editor Modal */}
            {showEditorModal && (
                <div className={styles.modalOverlay} onClick={closeEditorModal}>
                    <div className={styles.modalContentLarge} onClick={(e) => e.stopPropagation()} style={{ borderRadius: '8px' }}>
                        <div className={styles.modalHeader} style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                            <h3 className={styles.modalTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Scale size={20} color="#1e3a8a" />
                                {editingTender ? 'Amend Tender Particulars' : 'New Tender Publication'}
                            </h3>
                            <button className={styles.modalCloseButton} onClick={closeEditorModal}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.modalBody} style={{ padding: '2rem' }}>
                            {/* Basic Information Section */}
                            <div className={styles.govEditorSection}>
                                <h4 className={styles.govEditorSectionTitle}>
                                    <Bookmark size={18} /> Basic Specification
                                </h4>
                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>Full Tender Title *</label>
                                    <input
                                        type="text"
                                        className={styles.govInputFormal}
                                        defaultValue={editingTender?.title || ''}
                                        placeholder="Enter the formal name of the procurement..."
                                    />
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.govFormLabel}>Official Reference No. *</label>
                                        <input
                                            type="text"
                                            className={styles.govInputFormal}
                                            defaultValue={editingTender?.refNumber || ''}
                                            placeholder="MILMA/ENGG/2026/XXX"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.govFormLabel}>Current Publication Status</label>
                                        <div className={styles.toggleContainer}>
                                            <label className={styles.toggleLabel}>
                                                <input
                                                    type="checkbox"
                                                    className={styles.toggleInput}
                                                    defaultChecked={editingTender?.status === 'active'}
                                                />
                                                <div className={styles.toggleSwitch}></div>
                                                <span className={styles.toggleText}>
                                                    Go Live (Publicly Visible)
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Schedule Section */}
                            <div className={styles.govEditorSection}>
                                <h4 className={styles.govEditorSectionTitle}>
                                    <Calendar size={18} /> Important Schedules
                                </h4>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.govFormLabel}>Date of Publication *</label>
                                        <input
                                            type="date"
                                            className={styles.govInputFormal}
                                            defaultValue={editingTender?.publishDate || ''}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.govFormLabel}>Submission Deadline *</label>
                                        <input
                                            type="date"
                                            className={styles.govInputFormal}
                                            defaultValue={editingTender?.closingDate || ''}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Scope of Work Section */}
                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Description / Detailed Scope of Work</label>
                                <textarea
                                    className={styles.govInputFormal}
                                    style={{ minHeight: '120px', resize: 'vertical' }}
                                    defaultValue={editingTender?.description || ''}
                                    placeholder="Enter the technical requirements, eligibility criteria, and scope..."
                                />
                            </div>

                            {/* Document Upload Section */}
                            <div className={styles.govEditorSection} style={{ borderBottom: 'none', marginBottom: 0 }}>
                                <h4 className={styles.govEditorSectionTitle}>
                                    <FileStack size={18} /> Official Documents (PDF Only)
                                </h4>
                                <div className={styles.govFileUploadArea}>
                                    <Paperclip size={32} color="#64748b" style={{ marginBottom: '1rem' }} />
                                    <p style={{ fontWeight: 600, color: '#1e293b', marginBottom: '0.25rem' }}>
                                        Drag and drop or click to upload tender files
                                    </p>
                                    <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                                        Acceptable formats: PDF, DOCX (Max 25MB per file)
                                    </p>
                                    <input type="file" multiple style={{ display: 'none' }} id="tender-upload" />
                                    <button
                                        className={styles.buttonSecondary}
                                        style={{ marginTop: '1.5rem', borderRadius: '4px' }}
                                        onClick={() => (document.getElementById('tender-upload') as HTMLInputElement)?.click()}
                                    >
                                        Select Files
                                    </button>
                                </div>

                                {editingTender?.files && editingTender.files.length > 0 && (
                                    <div className={styles.attachedFilesList} style={{ marginTop: '1.5rem' }}>
                                        {editingTender.files.map((file, i) => (
                                            <div key={i} className={styles.attachedFileItem} style={{ borderLeft: '3px solid #3b82f6' }}>
                                                <FileText size={16} color="#3b82f6" />
                                                <span className={styles.fileName}>{file.name}</span>
                                                <span className={styles.fileSize} style={{ opacity: 0.6 }}>({file.size})</span>
                                                <button className={styles.removeFileBtn} title="Delete document">
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={styles.modalFooter} style={{ background: '#f8fafc', borderTop: '2px solid #e2e8f0' }}>
                            <button className={styles.buttonSecondary} style={{ borderRadius: '4px' }} onClick={closeEditorModal}>
                                Discard Changes
                            </button>
                            <button className={styles.buttonSuccess} style={{ borderRadius: '4px' }}>
                                <CheckCircle size={18} />
                                {editingTender ? 'Update Official Record' : 'Authenticate & Publish'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminTenders;
