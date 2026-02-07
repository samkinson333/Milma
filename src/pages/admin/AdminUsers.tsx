
import { useState } from 'react';
import styles from './Admin.module.css';
import {
    Users, Plus, Edit, Shield,
    Lock, Key, X,
    Search, Save
} from 'lucide-react';

interface User {
    id: number;
    username: string;
    email: string;
    role: 'Administrator' | 'Editor' | 'Viewer';
    status: 'active' | 'inactive' | 'suspended';
    lastLogin: string;
    mfaEnabled: boolean;
    permissions: string[];
}

const AdminUsers = () => {
    const [showEditorModal, setShowEditorModal] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Mock Data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [users] = useState<User[]>([
        {
            id: 1,
            username: 'admin',
            role: 'Administrator',
            email: 'admin@milma.com',
            lastLogin: '2026-02-07 10:45 AM',
            status: 'active',
            mfaEnabled: true,
            permissions: ['read', 'write', 'delete', 'publish']
        },
        {
            id: 2,
            username: 'editor_kerala',
            role: 'Editor',
            email: 'content@milma.com',
            lastLogin: '2026-02-06 02:30 PM',
            status: 'active',
            mfaEnabled: false,
            permissions: ['read', 'write', 'publish']
        },
        {
            id: 3,
            username: 'guest_observer',
            role: 'Viewer',
            email: 'audit@govt.in',
            lastLogin: '2026-01-20 09:00 AM',
            status: 'inactive',
            mfaEnabled: true,
            permissions: ['read']
        }
    ]);

    const handleEditUser = (user: User) => {
        setEditingUser(user);
        setShowEditorModal(true);
    };

    const handleCreateUser = () => {
        setEditingUser(null);
        setShowEditorModal(true);
    };

    const handleCloseModal = () => {
        setShowEditorModal(false);
        setEditingUser(null);
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'active':
                return `${styles.govBadgeFixed} ${styles.govBadgeActive} `;
            case 'inactive':
                return `${styles.govBadgeFixed} ${styles.govBadgeDraft} `;
            case 'suspended':
                return `${styles.govBadgeFixed} ${styles.govBadgeClosed} `;
            default:
                return styles.govBadgeFixed;
        }
    };

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Government Theme Header */}
            <div className={styles.govHeader}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 className={styles.govTitle}>User Management & Access Control</h1>
                        <p className={styles.govSubtitle}>Kerala Co-operative Milk Marketing Federation Ltd. (TRCMPU)</p>
                    </div>
                    <button className={styles.buttonSuccess} onClick={handleCreateUser} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Plus size={18} /> Add New User
                    </button>
                </div>
            </div>

            <div className={styles.govTableContainer} style={{ padding: '0', minHeight: '600px', background: '#f8fafc' }}>

                <div style={{ padding: '2rem' }}>
                    {/* Search Bar */}
                    <div className={styles.filterBar} style={{ marginBottom: '1.5rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div className={styles.searchBox} style={{ width: '100%' }}>
                            <Search size={18} color="#94a3b8" />
                            <input
                                type="text"
                                placeholder="Search users by Username or Email..."
                                className={styles.searchInput}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>

                    {/* Users Table */}
                    <table className={styles.govTable}>
                        <thead>
                            <tr>
                                <th>User Identity</th>
                                <th>Role Assignment</th>
                                <th>Login Activity</th>
                                <th>Security Status</th>
                                <th>Management</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                                                <Users size={18} />
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600, color: '#1e3a8a' }}>{user.username}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '0.25rem 0.5rem',
                                            borderRadius: '4px',
                                            background: user.role === 'Administrator' ? '#e0e7ff' : '#f1f5f9',
                                            color: user.role === 'Administrator' ? '#3730a3' : '#475569',
                                            fontSize: '0.85rem',
                                            fontWeight: 600
                                        }}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ fontSize: '0.9rem', color: '#334155' }}>
                                            {user.lastLogin}
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                            <span className={getStatusBadgeClass(user.status)}>
                                                {user.status.toUpperCase()}
                                            </span>
                                            {user.mfaEnabled && (
                                                <span style={{ fontSize: '0.75rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                    <Shield size={10} /> MFA Enabled
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        <button
                                            className={styles.buttonSecondary}
                                            style={{ padding: '0.4rem', borderRadius: '4px' }}
                                            onClick={() => handleEditUser(user)}
                                            title="Edit User Permissions"
                                        >
                                            <Edit size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* User Editor Modal */}
            {showEditorModal && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader} style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                            <h3 className={styles.modalTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Shield size={20} color="#1e3a8a" />
                                {editingUser ? 'Edit User Access' : 'Create New User'}
                            </h3>
                            <button className={styles.modalCloseButton} onClick={handleCloseModal}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.modalBody} style={{ padding: '2rem' }}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>Username *</label>
                                    <input
                                        type="text"
                                        className={styles.govInputFormal}
                                        defaultValue={editingUser?.username || ''}
                                        placeholder="e.g. jdoe"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>Email Address *</label>
                                    <input
                                        type="email"
                                        className={styles.govInputFormal}
                                        defaultValue={editingUser?.email || ''}
                                        placeholder="user@milma.com"
                                    />
                                </div>
                            </div>

                            <div className={styles.govEditorSection} style={{ marginTop: '1rem' }}>
                                <h4 className={styles.govEditorSectionTitle} style={{ fontSize: '1rem' }}>
                                    <Key size={16} /> Access Control
                                </h4>

                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>Role Assignment</label>
                                    <select className={styles.govInputFormal} defaultValue={editingUser?.role || 'Viewer'}>
                                        <option value="Administrator">Administrator (Full Access)</option>
                                        <option value="Editor">Editor (Content Management)</option>
                                        <option value="Viewer">Viewer (Read Only)</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup} style={{ marginTop: '1rem' }}>
                                    <label className={styles.govFormLabel}>Detailed Permissions</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', background: '#f1f5f9', padding: '1rem', borderRadius: '4px' }}>
                                        {['Read Content', 'Write Content', 'Publish Live', 'Delete Records', 'User Management', 'System Settings'].map((perm, idx) => (
                                            <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#334155' }}>
                                                <input type="checkbox" defaultChecked={editingUser?.permissions.includes(perm.split(' ')[0].toLowerCase()) || false} />
                                                {perm}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.govEditorSection} style={{ borderBottom: 'none', marginBottom: 0 }}>
                                <h4 className={styles.govEditorSectionTitle} style={{ fontSize: '1rem' }}>
                                    <Lock size={16} /> Security Settings
                                </h4>

                                <div className={styles.toggleContainer} style={{ marginTop: '0.5rem' }}>
                                    <label className={styles.toggleLabel}>
                                        <input
                                            type="checkbox"
                                            className={styles.toggleInput}
                                            defaultChecked={editingUser?.mfaEnabled || false}
                                        />
                                        <div className={styles.toggleSwitch}></div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span className={styles.toggleText}>Multi-Factor Authentication (MFA)</span>
                                            <span className={styles.toggleHint} style={{ marginLeft: 0 }}>Require 2FA for login</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                        </div>

                        <div className={styles.modalFooter} style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                            <button className={styles.buttonSecondary} onClick={handleCloseModal}>Cancel</button>
                            <button className={styles.buttonSuccess}>
                                <Save size={18} />
                                {editingUser ? 'Update User Access' : 'Create Account'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminUsers;
