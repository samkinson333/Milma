import { useState } from 'react';
import styles from './Admin.module.css';
import {
    Shield, Lock, FileText, AlertTriangle,
    CheckCircle, Activity, Save
} from 'lucide-react';

interface AccessLog {
    id: number;
    user: string;
    ip: string;
    action: string;
    status: 'success' | 'failed' | 'warning';
    timestamp: string;
}

const AdminSecurity = () => {
    // Security Config State
    const [config, setConfig] = useState({
        mfaEnforced: true,
        passwordExpiry: 90,
        minPasswordLength: 12,
        maxLoginAttempts: 5,
        sessionTimeout: 30
    });

    // Mock logs
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [logs] = useState<AccessLog[]>([
        { id: 1, user: 'admin', ip: '192.168.1.10', action: 'Login Attempt', status: 'success', timestamp: '2026-02-07 10:45:12' },
        { id: 2, user: 'editor_kerala', ip: '203.0.113.45', action: 'Update Page: /about', status: 'success', timestamp: '2026-02-07 09:30:00' },
        { id: 3, user: 'unknown', ip: '198.51.100.23', action: 'Failed Login', status: 'failed', timestamp: '2026-02-06 23:15:45' },
        { id: 4, user: 'guest', ip: '192.168.1.15', action: 'Access Restricted File', status: 'warning', timestamp: '2026-02-06 14:20:10' },
    ]);

    const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setConfig(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : parseInt(value) || 0
        }));
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'success': return '#16a34a';
            case 'failed': return '#dc2626';
            case 'warning': return '#ca8a04';
            default: return '#64748b';
        }
    };

    return (
        <div>
            {/* Government Theme Header */}
            <div className={styles.govHeader}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 className={styles.govTitle}>Security Audit & Configuration</h1>
                        <p className={styles.govSubtitle}>Kerala Co-operative Milk Marketing Federation Ltd. (TRCMPU)</p>
                    </div>
                </div>
            </div>

            <div className={styles.govTableContainer} style={{ padding: '2rem', background: '#f8fafc', minHeight: '600px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>

                    {/* LEFT PANEL: Security Policies */}
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h3 className={styles.govEditorSectionTitle} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                            <Lock size={20} /> Security Policies
                        </h3>

                        <div className={styles.govEditorSection} style={{ borderBottom: 'none', marginBottom: 0 }}>
                            <h4 className={styles.govEditorSectionTitle} style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}>
                                Authentication & Access
                            </h4>


                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Minimum Password Length</label>
                                <input
                                    type="number"
                                    name="minPasswordLength"
                                    className={styles.govInputFormal}
                                    value={config.minPasswordLength}
                                    onChange={handleConfigChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Max Login Attempts (Before Lockout)</label>
                                <input
                                    type="number"
                                    name="maxLoginAttempts"
                                    className={styles.govInputFormal}
                                    value={config.maxLoginAttempts}
                                    onChange={handleConfigChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Session Timeout (Minutes)</label>
                                <input
                                    type="number"
                                    name="sessionTimeout"
                                    className={styles.govInputFormal}
                                    value={config.sessionTimeout}
                                    onChange={handleConfigChange}
                                />
                            </div>

                            <button className={styles.buttonSuccess} style={{ width: '100%', marginTop: '1rem' }}>
                                <Save size={18} /> Update Security Policies
                            </button>
                        </div>
                    </div>

                    {/* RIGHT PANEL: Access Logs */}
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h3 className={styles.govEditorSectionTitle} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                            <Activity size={20} /> Recent Access Logs
                        </h3>

                        <table className={styles.govTable}>
                            <thead>
                                <tr>
                                    <th>Timestamp</th>
                                    <th>User / IP</th>
                                    <th>Action</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.map((log) => (
                                    <tr key={log.id}>
                                        <td style={{ fontSize: '0.85rem', color: '#64748b' }}>
                                            {log.timestamp}
                                        </td>
                                        <td>
                                            <div style={{ fontWeight: 600, color: '#1e3a8a' }}>{log.user}</div>
                                            <div style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#64748b' }}>{log.ip}</div>
                                        </td>
                                        <td style={{ fontSize: '0.9rem', color: '#334155' }}>
                                            {log.action}
                                        </td>
                                        <td>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.25rem',
                                                color: getStatusColor(log.status),
                                                fontWeight: 600,
                                                fontSize: '0.85rem'
                                            }}>
                                                {log.status === 'success' && <CheckCircle size={14} />}
                                                {log.status === 'failed' && <AlertTriangle size={14} />}
                                                {log.status === 'warning' && <Shield size={14} />}
                                                {log.status.toUpperCase()}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                            <button className={styles.buttonSecondary} style={{ fontSize: '0.9rem' }}>
                                <FileText size={16} /> View Full Audit Log
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSecurity;
