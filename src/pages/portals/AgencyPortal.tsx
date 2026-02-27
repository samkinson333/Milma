import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    LayoutDashboard, Users, FileText, Settings, LogOut,
    TrendingUp, TrendingDown, Search, Plus,
    Download, Phone, MapPin,
    ShieldCheck, Bell, MessageSquare, AlertTriangle,
    ShoppingBag, Truck, UserPlus,
    Filter, MoreVertical, ExternalLink, Calculator, LineChart,
    Signature, FileCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import classes from './PortalLayout.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const AgencyPortal = () => {
    useTranslation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedAgent, setSelectedAgent] = useState<any>(null);

    // Mock Data for the Portal
    const stats = [
        { title: "Today's Orders", value: "145", trend: "+12%", up: true, icon: <ShoppingBag />, color: "#3611ee" },
        { title: "Pending Orders", value: "12", trend: "-5%", up: false, icon: <ClockIcon />, color: "#f59e0b" },
        { title: "Total Sales", value: "₹4.8L", trend: "+18%", up: true, icon: <TrendingUp />, color: "#10b981" },
        { title: "Active Customers", value: "854", trend: "+2%", up: true, icon: <Users />, color: "#6366f1" }
    ];

    const chartData = [
        { label: 'Jan', value: 65 }, { label: 'Feb', value: 85 },
        { label: 'Mar', value: 70 }, { label: 'Apr', value: 95 },
        { label: 'May', value: 110 }, { label: 'Jun', value: 80 }
    ];

    const agentsList = [
        { id: 'AG-TRV-001', name: 'Suresh Kumar', area: 'Ambalathara', status: 'Active', orders: 450, outstanding: 12500, phone: '9845012345' },
        { id: 'AG-TRV-002', name: 'Meena Rajan', area: 'Pattom', status: 'Active', orders: 320, outstanding: 0, phone: '9845067890' },
        { id: 'AG-TRV-003', name: 'Anil Wilson', area: 'Statue', status: 'Inactive', orders: 120, outstanding: 4500, phone: '9845011223' },
    ];

    const recentOrders = [
        { id: '#ORD-8541', date: '2026-02-27', items: 'Milk (500ml) x 200', amount: '₹12,450', status: 'Delivered' },
        { id: '#ORD-8542', date: '2026-02-27', items: 'Ghee (1L) x 10', amount: '₹6,500', status: 'Dispatched' },
        { id: '#ORD-8543', date: '2026-02-26', items: 'Paneer x 50', amount: '₹8,200', status: 'Confirmed' },
    ];

    const renderDashboard = () => (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={classes.dashboardContainer}>
            <div className={classes.statsGrid}>
                {stats.map((s, i) => (
                    <div key={i} className={classes.statCard}>
                        <div className={classes.statHeader}>
                            <div className={classes.statIcon} style={{ background: `${s.color}15`, color: s.color }}>
                                {s.icon}
                            </div>
                            <span className={`${classes.trend} ${s.up ? classes.trendUp : classes.trendDown}`}>
                                {s.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />} {s.trend}
                            </span>
                        </div>
                        <h3>{s.title}</h3>
                        <p className={classes.statValue}>{s.value}</p>
                    </div>
                ))}
            </div>

            <div className={classes.dataGrid}>
                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}>
                        <h2>Sales Performance</h2>
                        <div className={classes.headerActions}>
                            <select className={classes.secondaryBtn} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                                <option>This Month</option>
                                <option>This Week</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.chartContainer}>
                        {chartData.map((d, i) => (
                            <div key={i} className={classes.chartBar} style={{ height: `${d.value}%` }}>
                                <span className={classes.chartBarValue}>{d.value}k</span>
                                <span className={classes.chartBarLabel}>{d.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}>
                        <h2>Notifications</h2>
                        <Bell size={18} color="#64748b" />
                    </div>
                    <div className={classes.notificationPanel}>
                        <div className={classes.notificationItem}>
                            <div className={classes.notifIcon} style={{ background: '#ecfdf5', color: '#10b981' }}>
                                <BadgePercent size={20} />
                            </div>
                            <div className={classes.notifContent}>
                                <h4>New Milk Scheme Released</h4>
                                <p>Get extra 2% commission on Bulk Milk procurement this week.</p>
                                <span className={classes.notifTime}>2 hours ago</span>
                            </div>
                        </div>
                        <div className={classes.notificationItem}>
                            <div className={classes.notifIcon} style={{ background: '#f1f5f9', color: '#64748b' }}>
                                <AlertTriangle size={20} />
                            </div>
                            <div className={classes.notifContent}>
                                <h4>Payment Reminder</h4>
                                <p>Outstanding balance for AG-TRV-003 is above limit.</p>
                                <span className={classes.notifTime}>5 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.forecastingWidget} style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '20px' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <LineChart size={18} /> Sales Forecast
                        </h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Based on your recent trends, demand is expected to rise by 15% next weekend.</p>
                    </div>
                </div>
            </div>

            <div className={classes.contentCard}>
                <div className={classes.cardHeader}>
                    <h2>Quick Actions</h2>
                </div>
                <div className={classes.headerActions} style={{ flexWrap: 'wrap' }}>
                    <button className={classes.secondaryBtn} onClick={() => setActiveTab('orders')}><Plus size={18} /> Create Order</button>
                    <button className={classes.secondaryBtn} onClick={() => setActiveTab('agents')}><UserPlus size={18} /> Add Agent</button>
                    <button className={classes.secondaryBtn}><Download size={18} /> Sales Report</button>
                    <button className={classes.secondaryBtn}><MessageSquare size={18} /> Support</button>
                    <button className={classes.secondaryBtn}><ShieldCheck size={18} /> Verification</button>
                </div>
            </div>
        </motion.div>
    );

    const renderAgents = () => (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className={classes.sectionContainer}>
            {!selectedAgent ? (
                <>
                    <div className={classes.cardHeader}>
                        <h2>My Agents Management</h2>
                        <button className={classes.primaryBtn}><UserPlus size={18} /> Add New Agent</button>
                    </div>
                    <div className={classes.searchBar}>
                        <Search size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, ID or area..."
                            className={classes.inlineInput}
                        />
                        <Filter size={18} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className={classes.tableWrapper}>
                        <table className={classes.table}>
                            <thead>
                                <tr>
                                    <th>Agent Name & ID</th>
                                    <th>Assigned Area</th>
                                    <th>Status</th>
                                    <th>Total Orders</th>
                                    <th>Outstanding</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {agentsList.map((agent, i) => (
                                    <tr key={i}>
                                        <td>
                                            <div style={{ fontWeight: 700 }}>{agent.name}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{agent.id}</div>
                                        </td>
                                        <td>{agent.area}</td>
                                        <td>
                                            <span className={`${classes.status} ${agent.status === 'Active' ? classes.statusConfirmed : classes.statusCancelled}`}>
                                                {agent.status}
                                            </span>
                                        </td>
                                        <td>{agent.orders}</td>
                                        <td style={{ color: agent.outstanding > 0 ? '#ef4444' : 'inherit', fontWeight: 600 }}>
                                            ₹{agent.outstanding.toLocaleString()}
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <button className={classes.actionBtn} onClick={() => setSelectedAgent(agent)}><ExternalLink size={16} /></button>
                                                <button className={classes.actionBtn}><MoreVertical size={16} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className={classes.agentDetailView}>
                    <button className={classes.secondaryBtn} onClick={() => setSelectedAgent(null)} style={{ marginBottom: '1.5rem' }}>
                        ← Back to List
                    </button>
                    <div className={classes.contentCard}>
                        <div className={classes.header} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '1.5rem' }}>
                            <div className={classes.headerTitle}>
                                <h1>{selectedAgent.name}</h1>
                                <p>
                                    <span className={classes.headerBadge}>{selectedAgent.id}</span>
                                    <span><MapPin size={14} /> {selectedAgent.area}</span>
                                    <span><Phone size={14} /> {selectedAgent.phone}</span>
                                </p>
                            </div>
                            <div className={classes.trend} style={{ background: '#dcfce7', color: '#166534', padding: '0.5rem 1rem' }}>
                                Commission Rate: 2.5%
                            </div>
                        </div>
                        <div className={classes.statsGrid} style={{ marginTop: '2rem' }}>
                            <div className={classes.statCard}>
                                <h3>Total Earnings</h3>
                                <p className={classes.statValue}>₹45,800</p>
                            </div>
                            <div className={classes.statCard}>
                                <h3>Last Order</h3>
                                <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>#ORD-7721</p>
                                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Yesterday</span>
                            </div>
                            <div className={classes.statCard}>
                                <h3>Commission Earned</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Calculator size={18} color="#3611ee" />
                                    <span className={classes.statValue} style={{ fontSize: '1.5rem' }}>₹1,145</span>
                                </div>
                                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>This Week (Auto-calc)</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );

    const renderOrders = () => (
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className={classes.sectionContainer}>
            <div className={classes.dataGrid}>
                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}>
                        <h2>Create New Order</h2>
                    </div>
                    <form className={classes.formGrid}>
                        <div className={classes.formGroup}>
                            <label className={classes.label}>Product Category</label>
                            <select className={classes.input}>
                                <option>Milk Products</option>
                                <option>Ghee & Butter</option>
                                <option>Paneer & Curd</option>
                                <option>Value Added Products</option>
                            </select>
                        </div>
                        <div className={classes.formGroup}>
                            <label className={classes.label}>Select Product</label>
                            <select className={classes.input}>
                                <option>Milma Ttoned Milk (500ml)</option>
                                <option>Milma Homogenized Milk (500ml)</option>
                                <option>Double Toned Milk (500ml)</option>
                            </select>
                        </div>
                        <div className={classes.formGroup}>
                            <label className={classes.label}>Quantity</label>
                            <input type="number" className={classes.input} placeholder="Enter quantity" />
                        </div>
                        <div className={classes.formGroup}>
                            <label className={classes.label}>Delivery Date</label>
                            <input type="date" className={classes.input} />
                        </div>
                    </form>
                    <div className={classes.placeholderList} style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Subtotal</span><strong>₹11,800.00</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Tax (GST 5%)</span><strong>₹590.00</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                            <span style={{ fontWeight: 800 }}>Total Amount</span><strong style={{ fontSize: '1.2rem', color: '#3611ee' }}>₹12,390.00</strong>
                        </div>
                    </div>
                    <button className={classes.primaryBtn} style={{ width: '100%', marginTop: '1.5rem' }}>Confirm & Place Order</button>
                </div>

                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}>
                        <h2>Order Tracking</h2>
                        <Truck size={20} color="#3611ee" />
                    </div>
                    <div className={classes.visitItem} style={{ borderLeftColor: '#10b981' }}>
                        <strong>Route #TRV-45 Delivery</strong>
                        <span><Truck size={14} /> Current Status: En Route</span>
                        <div className={classes.progressBarContainer}>
                            <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} className={classes.progressBar} />
                        </div>
                        <span style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Estimated Arrival: 10:45 AM</span>
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>DIGITAL VERIFICATION</h4>
                        <div style={{ padding: '1rem', border: '1px dashed #cbd5e1', borderRadius: '12px', textAlign: 'center' }}>
                            <Signature size={24} color="#94a3b8" />
                            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>E-Signature Pending upon Delivery</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.contentCard}>
                <div className={classes.cardHeader}>
                    <h2>Order History</h2>
                    <button className={classes.secondaryBtn}><Download size={16} /> Export CSV</button>
                </div>
                <div className={classes.tableWrapper}>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Products</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                                <th>Invoice</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, i) => (
                                <tr key={i}>
                                    <td style={{ fontWeight: 700 }}>{order.id}</td>
                                    <td>{order.date}</td>
                                    <td style={{ fontSize: '0.85rem' }}>{order.items}</td>
                                    <td style={{ fontWeight: 700 }}>{order.amount}</td>
                                    <td>
                                        <span className={`${classes.status} ${order.status === 'Delivered' ? classes.statusConfirmed : order.status === 'Dispatched' ? classes.statusPending : classes.statusPending}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className={classes.actionBtn}><Download size={16} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );

    const renderSettings = () => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={classes.sectionContainer}>
            <div className={classes.dataGrid} style={{ gridTemplateColumns: 'minmax(0, 1fr) 280px' }}>
                <div className={classes.contentCard}>
                    <div className={classes.formSection}>
                        <h3>Profile Settings</h3>
                        <div className={classes.formGrid}>
                            <div className={classes.formGroup}>
                                <label className={classes.label}>Agency Name</label>
                                <input type="text" className={classes.input} defaultValue="Milma Central Agency #TRV102" />
                            </div>
                            <div className={classes.formGroup}>
                                <label className={classes.label}>Contact Name</label>
                                <input type="text" className={classes.input} defaultValue="John Doe" />
                            </div>
                            <div className={classes.formGroup}>
                                <label className={classes.label}>GST Number</label>
                                <input type="text" className={classes.input} defaultValue="32AAAAA0000A1Z5" />
                            </div>
                            <div className={classes.formGroup}>
                                <label className={classes.label}>PAN Number</label>
                                <input type="text" className={classes.input} defaultValue="ABCDE1234F" />
                            </div>
                        </div>
                    </div>

                    <div className={classes.formSection}>
                        <h3>Security & Authentication</h3>
                        <div className={classes.notificationItem} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <ShieldCheck size={24} color="#10b981" />
                                <div>
                                    <h4 style={{ margin: 0 }}>Two-Factor Authentication</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem' }}>Add an extra layer of security to your account.</p>
                                </div>
                            </div>
                            <button className={classes.secondaryBtn} style={{ padding: '0.4rem 1rem' }}>Enable</button>
                        </div>
                    </div>

                    <div className={classes.formSection}>
                        <h3>Document Management</h3>
                        <div className={classes.placeholderList}>
                            <div className={classes.visitItem}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                        <FileCheck size={20} color="#10b981" />
                                        <span>Trade License 2025-26</span>
                                    </div>
                                    <span className={classes.headerBadge}>Verified</span>
                                </div>
                            </div>
                            <div className={classes.visitItem} style={{ borderStyle: 'dashed', background: '#fcfdfe' }}>
                                <div style={{ textAlign: 'center', width: '100%', padding: '0.5rem' }}>
                                    <Plus size={20} color="#94a3b8" />
                                    <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Upload New Document (ID Proof, Bank Verification)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.sidebarStylePanel}>
                    <div className={classes.contentCard} style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 800 }}>NOTIFICATION PREFERENCES</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '0.85rem' }}>Email Alerts</span>
                                <input type="checkbox" defaultChecked />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '0.85rem' }}>SMS Alerts</span>
                                <input type="checkbox" defaultChecked />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '0.85rem' }}>Order Status</span>
                                <input type="checkbox" defaultChecked />
                            </div>
                        </div>
                    </div>
                    <div className={classes.contentCard} style={{ background: 'var(--color-primary)', color: 'white' }}>
                        <h4 style={{ margin: 0 }}>Need Help?</h4>
                        <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: '0.5rem 0 1rem' }}>Our support team is available 24/7 for agency assistance.</p>
                        <button className={classes.secondaryBtn} style={{ width: '100%', padding: '0.6rem' }}>Contact Support</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className={classes.portalContainer}>
            <aside className={classes.sidebar}>
                <div className={classes.sidebarHeader}>
                    <img src="/logo.png" alt="Milma" className={classes.logo} />
                    <span>Agency</span>
                </div>
                <nav className={classes.sidebarNav}>
                    <button className={`${classes.navItem} ${activeTab === 'dashboard' ? classes.active : ''}`} onClick={() => setActiveTab('dashboard')}>
                        <LayoutDashboard size={20} /> Dashboard
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'agents' ? classes.active : ''}`} onClick={() => setActiveTab('agents')}>
                        <Users size={20} /> My Agents
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'orders' ? classes.active : ''}`} onClick={() => setActiveTab('orders')}>
                        <FileText size={20} /> Order Center
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'settings' ? classes.active : ''}`} onClick={() => setActiveTab('settings')}>
                        <Settings size={20} /> Settings
                    </button>
                </nav>
                <button className={classes.logoutBtn} onClick={() => navigate('/portal-login')}>
                    <LogOut size={20} /> Logout
                </button>
            </aside>

            <main className={classes.mainContent}>

                <header className={classes.header}>
                    <div className={classes.headerTitle}>
                        <h1>Welcome back, Ramesh</h1>
                        <p>
                            <span className={classes.headerBadge}>CODE: MIL-TRV-102</span>
                            <span>Region: Thiruvananthapuram</span>
                        </p>
                    </div>
                    <div className={classes.headerActions}>
                        <div style={{ textAlign: 'right', marginRight: '1rem' }}>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>LAST LOGIN</div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Feb 27, 2026 | 09:15 AM</div>
                        </div>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'dashboard' && renderDashboard()}
                    {activeTab === 'agents' && renderAgents()}
                    {activeTab === 'orders' && renderOrders()}
                    {activeTab === 'settings' && renderSettings()}
                </AnimatePresence>
            </main>
        </div>
    );
};

const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const BadgePercent = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="16" r="3" />
        <line x1="16" y1="8" x2="8" y2="16" />
    </svg>
);

export default AgencyPortal;
