import { useState } from 'react';
import styles from './Admin.module.css';
import {
    Phone, Mail, MapPin, Globe, Save,
    Trash2, Eye, Map, User, Smartphone
} from 'lucide-react';

interface ContactSubmission {
    id: number;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    date: string;
    read: boolean;
}

const AdminContacts = () => {
    // Office Contact State
    const [officeDetails, setOfficeDetails] = useState({
        phone: '+91 471 2302283',
        email: 'milma@milma.com',
        address: 'Milma Bhavan, Pattom Palace P.O, Thiruvananthapuram - 695 004',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.903429384776!2d76.93883726977539!3d8.525547000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf2a275f68d%3A0x67345634563!2sMilma%20Bhavan!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin'
    });

    // Submissions State (Mock)
    const [submissions, setSubmissions] = useState<ContactSubmission[]>([
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            phone: '9876543210',
            subject: 'Distributorship Inquiry',
            message: 'I am interested in starting a Milma distribution center in Kochi.',
            date: '2026-02-07',
            read: false
        },
        {
            id: 2,
            name: 'Sarah Smith',
            email: 'sarah@example.com',
            phone: '9898989898',
            subject: 'Feedback regarding Milk Quality',
            message: 'The milk packet I bought today was slightly damaged.',
            date: '2026-02-06',
            read: true
        }
    ]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setOfficeDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleDeleteSubmission = (id: number) => {
        if (confirm('Are you sure you want to delete this submission?')) {
            setSubmissions(submissions.filter(s => s.id !== id));
        }
    };

    return (
        <div>
            {/* Government Theme Header */}
            <div className={styles.govHeader}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 className={styles.govTitle}>Contact Management</h1>
                        <p className={styles.govSubtitle}>Kerala Co-operative Milk Marketing Federation Ltd. (TRCMPU)</p>
                    </div>
                </div>
            </div>

            <div className={styles.govTableContainer} style={{ padding: '2rem', background: '#f8fafc', minHeight: '600px' }}>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

                    {/* LEFT PANEL: Office Contact Details */}
                    <div style={{ flex: '1', minWidth: '400px', background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0', height: 'fit-content' }}>
                        <h3 className={styles.govEditorSectionTitle} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                            <Globe size={20} /> Office Contact Information
                        </h3>

                        <div className={styles.formGroup}>
                            <label className={styles.govFormLabel}><Phone size={16} /> Official Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                className={styles.govInputFormal}
                                value={officeDetails.phone}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.govFormLabel}><Mail size={16} /> Official Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className={styles.govInputFormal}
                                value={officeDetails.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.govFormLabel}><MapPin size={16} /> Headquarters Address</label>
                            <textarea
                                name="address"
                                className={styles.govInputFormal}
                                rows={3}
                                value={officeDetails.address}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.govFormLabel}><Map size={16} /> Google Maps Embed URL</label>
                            <input
                                type="text"
                                name="mapUrl"
                                className={styles.govInputFormal}
                                value={officeDetails.mapUrl}
                                onChange={handleInputChange}
                                placeholder="https://www.google.com/maps/embed?..."
                            />
                            <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.5rem' }}>
                                Paste the 'src' URL from the Google Maps Embed code.
                            </p>
                        </div>

                        {/* Map Preview */}
                        <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0', height: '250px' }}>
                            <iframe
                                src={officeDetails.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <button className={styles.buttonSuccess} style={{ width: '100%', marginTop: '1.5rem', padding: '0.75rem' }}>
                            <Save size={18} /> Save Contact Configuration
                        </button>
                    </div>

                    {/* RIGHT PANEL: Contact Submissions Table */}
                    <div style={{ flex: '1.5', minWidth: '500px', background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h3 className={styles.govEditorSectionTitle} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                            <User size={20} /> User Enquiries
                        </h3>

                        <table className={styles.govTable}>
                            <thead>
                                <tr>
                                    <th>User Details</th>
                                    <th>Subject & Message</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submissions.map((sub) => (
                                    <tr key={sub.id} style={{ background: sub.read ? 'white' : '#f0f9ff' }}>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <div style={{ fontWeight: 600, color: '#1e3a8a' }}>{sub.name}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{sub.email}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <Smartphone size={12} /> {sub.phone}
                                            </div>
                                        </td>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <div style={{ fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>{sub.subject}</div>
                                            <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: 1.4 }}>
                                                {sub.message.length > 80 ? sub.message.substring(0, 80) + '...' : sub.message}
                                            </p>
                                        </td>
                                        <td style={{ verticalAlign: 'top', whiteSpace: 'nowrap', fontSize: '0.85rem', color: '#64748b' }}>
                                            {sub.date}
                                        </td>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <div className={styles.tableActions}>
                                                <button
                                                    className={`${styles.govActionBtn} ${styles.govActionBtnPrimary}`}
                                                    title="View Full Message"
                                                >
                                                    <Eye size={16} />
                                                </button>
                                                <button
                                                    className={`${styles.govActionBtn} ${styles.govActionBtnDanger}`}
                                                    onClick={() => handleDeleteSubmission(sub.id)}
                                                    title="Delete Submission"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {submissions.length === 0 && (
                                    <tr>
                                        <td colSpan={4} style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
                                            No enquiries found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminContacts;
