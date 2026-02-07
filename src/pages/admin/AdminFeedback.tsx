import { useState } from 'react';
import styles from './Admin.module.css';
import {
    Search, Filter, Eye, MessageSquare,
    CheckCircle, Clock, AlertCircle, ArrowLeft,
    Send, User
} from 'lucide-react';

interface Ticket {
    id: string;
    user: string;
    email: string;
    subject: string;
    message: string;
    status: 'open' | 'pending' | 'resolved';
    date: string;
    priority: 'low' | 'medium' | 'high';
}

const AdminFeedback = () => {
    const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [replyText, setReplyText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Mock Data
    const [tickets, setTickets] = useState<Ticket[]>([
        {
            id: 'TKT-2026-001',
            user: 'Rahul Nair',
            email: 'rahul.n@example.com',
            subject: 'Issue with milk delivery subscription',
            message: 'I have not received my milk packet for the last two days despite having an active subscription. Please check.',
            status: 'open',
            date: '2026-02-06',
            priority: 'high'
        },
        {
            id: 'TKT-2026-002',
            user: 'Anita George',
            email: 'anita.g@example.com',
            subject: 'Feedback on new Ghee packaging',
            message: 'The new ghee tin is very hard to open. It would be great if you could improve the lid design.',
            status: 'pending',
            date: '2026-02-05',
            priority: 'medium'
        },
        {
            id: 'TKT-2026-003',
            user: 'Suresh Kumar',
            email: 'suresh.k@example.com',
            subject: 'App crash on login',
            message: 'Whenever I try to login to the Milma app on my Android phone, it crashes immediately.',
            status: 'resolved',
            date: '2026-02-01',
            priority: 'high'
        }
    ]);

    const handleViewTicket = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setViewMode('detail');
        setReplyText('');
    };

    const handleBackToList = () => {
        setSelectedTicket(null);
        setViewMode('list');
    };

    const handleStatusChange = (newStatus: 'open' | 'pending' | 'resolved') => {
        if (selectedTicket) {
            setTickets(tickets.map(t =>
                t.id === selectedTicket.id ? { ...t, status: newStatus } : t
            ));
            setSelectedTicket({ ...selectedTicket, status: newStatus });
        }
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'open':
                return `${styles.govBadgeFixed} ${styles.govBadgeClosed}`; // Using red for open/urgent
            case 'pending':
                return `${styles.govBadgeFixed} ${styles.govBadgeDraft}`; // Yellow for pending
            case 'resolved':
                return `${styles.govBadgeFixed} ${styles.govBadgeActive}`; // Green for resolved
            default:
                return styles.govBadgeFixed;
        }
    };

    const filteredTickets = tickets.filter(t =>
        t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.user.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Government Theme Header */}
            <div className={styles.govHeader}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 className={styles.govTitle}>Feedback & Support Tickets</h1>
                        <p className={styles.govSubtitle}>Kerala Co-operative Milk Marketing Federation Ltd. (TRCMPU)</p>
                    </div>
                </div>
            </div>

            <div className={styles.govTableContainer} style={{ padding: '0', minHeight: '600px', background: '#f8fafc' }}>

                {/* TICKET LIST VIEW */}
                {viewMode === 'list' && (
                    <div style={{ padding: '2rem' }}>
                        {/* Search and Filter Bar */}
                        <div className={styles.filterBar} style={{ marginBottom: '1.5rem' }}>
                            <div className={styles.searchBox}>
                                <Search size={18} color="#94a3b8" />
                                <input
                                    type="text"
                                    placeholder="Search tickets by ID, Subject or User..."
                                    className={styles.searchInput}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className={styles.filterGroup}>
                                <span className={styles.filterLabel}>Status:</span>
                                <select className={styles.filterSelect}>
                                    <option value="all">All Tickets</option>
                                    <option value="open">Open</option>
                                    <option value="pending">Pending</option>
                                    <option value="resolved">Resolved</option>
                                </select>
                            </div>
                        </div>

                        <table className={styles.govTable}>
                            <thead>
                                <tr>
                                    <th>Ticket ID</th>
                                    <th>User Details</th>
                                    <th>Subject</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTickets.map((ticket) => (
                                    <tr key={ticket.id}>
                                        <td>
                                            <span style={{ fontWeight: 600, color: '#1e3a8a' }}>{ticket.id}</span>
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontWeight: 600, color: '#334155' }}>{ticket.user}</span>
                                                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{ticket.email}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span style={{ fontWeight: 500, color: '#1e293b' }}>{ticket.subject}</span>
                                        </td>
                                        <td>
                                            <span className={getStatusBadgeClass(ticket.status)}>
                                                {ticket.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className={styles.dateText}>
                                            {ticket.date}
                                        </td>
                                        <td>
                                            <button
                                                className={styles.buttonSecondary}
                                                style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                                onClick={() => handleViewTicket(ticket)}
                                            >
                                                <Eye size={16} /> View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* TICKET DETAIL VIEW */}
                {viewMode === 'detail' && selectedTicket && (
                    <div style={{ display: 'flex', height: '100%' }}>
                        {/* Left Side: Ticket Content */}
                        <div style={{ flex: 2, padding: '2rem', background: 'white', borderRight: '1px solid #e2e8f0' }}>
                            <button
                                onClick={handleBackToList}
                                className={styles.buttonSecondary}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}
                            >
                                <ArrowLeft size={16} /> Back to List
                            </button>

                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e3a8a', margin: 0 }}>
                                        {selectedTicket.subject}
                                    </h2>
                                    <span className={getStatusBadgeClass(selectedTicket.status)}>
                                        {selectedTicket.status.toUpperCase()}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#64748b', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={16} /> Created: {selectedTicket.date}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <User size={16} /> {selectedTicket.user} ({selectedTicket.email})
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ fontWeight: 600 }}>ID:</span> {selectedTicket.id}
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
                                <p style={{ margin: 0, lineHeight: 1.6, color: '#334155', fontSize: '1rem' }}>
                                    {selectedTicket.message}
                                </p>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <MessageSquare size={18} /> Administrative Response
                                </h3>
                                <textarea
                                    className={styles.govInputFormal}
                                    rows={6}
                                    placeholder="Type your official response here..."
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                                    <div style={{ marginRight: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>Update Status:</label>
                                        <select
                                            className={styles.filterSelect}
                                            value={selectedTicket.status}
                                            onChange={(e) => handleStatusChange(e.target.value as 'open' | 'pending' | 'resolved')}
                                        >
                                            <option value="open">Open</option>
                                            <option value="pending">Pending</option>
                                            <option value="resolved">Resolved</option>
                                        </select>
                                    </div>
                                    <button className={styles.buttonSuccess} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Send size={16} /> Send Response & Update
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Quick Actions / History (Placeholder) */}
                        <div style={{ flex: 1, padding: '2rem', background: '#f8fafc' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#475569', marginBottom: '1rem' }}>
                                Ticket History
                            </h4>
                            <div style={{ position: 'relative', paddingLeft: '1rem', borderLeft: '2px solid #cbd5e1' }}>
                                <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '-17px', top: '2px', width: '12px', height: '12px', borderRadius: '50%', background: '#cbd5e1' }}></div>
                                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', margin: 0 }}>Ticket Created</p>
                                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>{selectedTicket.date} by {selectedTicket.user}</p>
                                </div>
                                <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '-17px', top: '2px', width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6' }}></div>
                                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', margin: 0 }}>Status: {selectedTicket.status.toUpperCase()}</p>
                                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>Current State</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
                                    <AlertCircle size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                                    Internal Note
                                </h4>
                                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                                    Priority set to <strong>{selectedTicket.priority.toUpperCase()}</strong> based on keyword analysis. Please respond within 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminFeedback;
