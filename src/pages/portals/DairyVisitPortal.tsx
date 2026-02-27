import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    LayoutDashboard, Calendar, MapPin, ClipboardCheck, Settings, LogOut,
    CheckCircle, Clock, Users, FileText, Plus, Bell,
    ShieldCheck, Download, Search, Filter, ExternalLink,
    UserCheck, AlertTriangle, QrCode, Phone,
    Building2, Factory, History, Map, ChevronLeft,
    ShieldAlert, BadgeCheck, Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import classes from './PortalLayout.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const DairyVisitPortal = () => {
    useTranslation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [detailView, setDetailView] = useState<{ type: string, id: string | null }>({ type: '', id: null });

    // Mock Data
    const visitStats = [
        { title: "Total Requests", value: "84", icon: <FileText />, color: "#3611ee" },
        { title: "Approved Visits", value: "32", icon: <CheckCircle />, color: "#10b981" },
        { title: "Pending Reviews", value: "15", icon: <Clock />, color: "#f59e0b" },
        { title: "Scheduled Today", value: "4", icon: <Calendar />, color: "#6366f1" },
        { title: "Upcoming Week", value: "12", icon: <History />, color: "#8b79ff" },
        { title: "Cancelled", value: "3", icon: <AlertTriangle />, color: "#64748b" }
    ];

    const visitRequests = [
        { id: "VST-2026-001", org: "NSS College of Engineering", type: "Educational", date: "2026-02-28", slot: "10:00 AM - 12:00 PM", count: 45, status: "Approved", coordinator: "Rajesh K.", phone: "+91 94444 11222", email: "hod.ee@nss.edu" },
        { id: "VST-2026-002", org: "Alpha Schools TVM", type: "School Visit", date: "2026-03-01", slot: "02:00 PM - 04:00 PM", count: 30, status: "Pending", coordinator: "Pending", phone: "+91 95555 22333", email: "office@alphaschool.in" },
        { id: "VST-2026-003", org: "Dairy Farmers Assoc.", type: "Official", date: "2026-03-05", slot: "11:00 AM - 01:00 PM", count: 15, status: "Approved", coordinator: "Meena R.", phone: "+91 96666 33444", email: "secretary@dfa.com" },
    ];

    const locations = [
        { id: "LOC-01", name: "Thiruvananthapuram Central Dairy", address: "Ambalathara, TVM", capacity: "120/day", type: "Processing & Packaging", contact: "0471-2450123", rating: "4.9/5", safety: "ISO 22000" },
        { id: "LOC-02", name: "Ernakulam Regional Dairy", address: "Edappally, Kochi", capacity: "200/day", type: "Storage & Distribution", contact: "0484-2550100", rating: "4.8/5", safety: "ISO 22001" },
        { id: "LOC-03", name: "Wayanad Dairy Unit", address: "Kalpetta, Wayanad", capacity: "80/day", type: "Milk Collection & Cooling", contact: "0493-2200150", rating: "4.7/5", safety: "HACCP Certified" }
    ];

    const renderDashboard = () => (
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className={classes.dashboardContainer}>
            <div className={classes.statsGrid} style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
                {visitStats.map((s, i) => (
                    <div key={i} className={classes.statCard}>
                        <div className={classes.statHeader}>
                            <div className={classes.statIcon} style={{ background: `${s.color}15`, color: s.color }}>{s.icon}</div>
                        </div>
                        <h3>{s.title}</h3>
                        <p className={classes.statValue}>{s.value}</p>
                    </div>
                ))}
            </div>

            <div className={classes.dataGrid}>
                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}><h2>Capacity Monitoring</h2><BadgeCheck size={18} color="#10b981" /></div>
                    <div className={classes.notificationPanel}>
                        <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}><span>Booked Slots</span><strong>85 / 120</strong></div>
                            <div className={classes.progressBarContainer} style={{ background: '#e2e8f0', height: '12px' }}>
                                <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} className={classes.progressBar} style={{ background: '#3611ee' }} />
                            </div>
                        </div>
                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 900, fontSize: '1.5rem' }}>35</div><div style={{ fontSize: '0.7rem', opacity: 0.6 }}>AVAILABLE</div></div>
                            <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 900, fontSize: '1.5rem', color: '#10b981' }}>72%</div><div style={{ fontSize: '0.7rem', opacity: 0.6 }}>OCCUPANCY</div></div>
                        </div>
                    </div>
                    <div className={classes.forecastingWidget} style={{ marginTop: '2rem', background: '#f0f9ff', color: '#0369a1' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Smartphone size={18} /> QR Entry Scan</h4>
                        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>All visitors are checking in via QR codes today. System is running at 100% precision.</p>
                    </div>
                </div>

                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}><h2>Visit Calendar Highlights</h2><Calendar size={18} color="#64748b" /></div>
                    <div className={classes.notificationPanel}>
                        <div className={classes.visitItem} style={{ borderLeft: '4px solid #10b981' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                                <strong>Green Sector Visit</strong>
                                <span className={classes.headerBadge}>APPROVED</span>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Scheduled: 10:00 AM TVM Dairy</span>
                        </div>
                        <div className={classes.visitItem} style={{ borderLeft: '4px solid #f59e0b' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                                <strong>Yellow Sector Visit</strong>
                                <span className={classes.headerBadge}>PENDING</span>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Reviewing Authorization Letter</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.contentCard}>
                <div className={classes.cardHeader}><h2>Action Center</h2></div>
                <div className={classes.headerActions} style={{ flexWrap: 'wrap' }}>
                    <button className={classes.secondaryBtn} onClick={() => setDetailView({ type: 'request', id: null })}><Plus size={18} /> Request New Visit</button>
                    <button className={classes.secondaryBtn} onClick={() => setActiveTab('schedule')}><History size={18} /> View Schedule</button>
                    <button className={classes.secondaryBtn} onClick={() => setActiveTab('locations')}><MapPin size={18} /> Check Location Details</button>
                    <button className={classes.secondaryBtn}><Phone size={18} /> Contact Coordinator</button>
                </div>
            </div>
        </motion.div>
    );

    const renderRequestForm = () => (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={classes.contentCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h2>Request New Visit</h2>
                <button className={classes.actionBtn} onClick={() => setDetailView({ type: '', id: null })}><ChevronLeft /> Back</button>
            </div>
            <div className={classes.formGrid}>
                <div className={classes.formGroup}><label className={classes.label}>Organization / College Name</label><input type="text" className={classes.input} placeholder="Ex: NSS College" /></div>
                <div className={classes.formGroup}><label className={classes.label}>Visit Type</label><select className={classes.input}><option>Educational</option><option>Official</option><option>Inspection</option><option>Training</option></select></div>
                <div className={classes.formGroup}><label className={classes.label}>Number of Visitors</label><input type="number" className={classes.input} placeholder="Max 60" /></div>
                <div className={classes.formGroup}><label className={classes.label}>Preferred Date</label><input type="date" className={classes.input} /></div>
                <div className={classes.formGroup}><label className={classes.label}>Preferred Time Slot</label><select className={classes.input}><option>10:00 AM - 12:00 PM</option><option>02:00 PM - 04:00 PM</option></select></div>
                <div className={classes.formGroup}><label className={classes.label}>Contact Person Name</label><input type="text" className={classes.input} placeholder="Full Name" /></div>
                <div className={classes.formGroup}><label className={classes.label}>Phone Number</label><input type="text" className={classes.input} placeholder="+91" /></div>
                <div className={classes.formGroup}><label className={classes.label}>Email Address</label><input type="email" className={classes.input} placeholder="office@org.com" /></div>
                <div className={classes.formGroup} style={{ gridColumn: 'span 2' }}><label className={classes.label}>Special Requirements</label><textarea className={classes.input} rows={2} placeholder="Ex: Wheelchair access, dietary notes..." /></div>
            </div>
            <div style={{ marginTop: '1.5rem', padding: '1.5rem', border: '1px dashed #cbd5e1', borderRadius: '12px', textAlign: 'center' }}>
                <FileText size={24} style={{ marginBottom: '0.5rem', opacity: 0.5 }} />
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Upload Authorization Letter (PDF/PNG)</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                <button className={classes.primaryBtn} style={{ padding: '0.75rem 2.5rem' }}>Submit Request</button>
                <button className={classes.secondaryBtn} onClick={() => setDetailView({ type: '', id: null })}>Cancel</button>
            </div>
        </motion.div>
    );

    const renderVisitPass = (visitId: string) => {
        const v = visitRequests.find(v => v.id === visitId);
        if (!v) return null;
        return (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={classes.contentCard}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>Official Visit Pass</h2>
                    <button className={classes.actionBtn} onClick={() => setDetailView({ type: '', id: null })}><ExternalLink /></button>
                </div>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', background: 'white', padding: '2rem', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                    <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #cbd5e1' }}>
                        <QrCode size={140} color="#0f172a" />
                        <div style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 900, fontSize: '0.8rem' }}>VST-ID: {v.id}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ color: '#3611ee', fontWeight: 900, fontSize: '0.75rem', letterSpacing: '0.1em' }}>MILMA CENTRAL FEDERATION</div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: '0.5rem 0' }}>{v.org}</h1>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                            <div><label style={{ fontSize: '0.65rem', opacity: 0.5 }}>DATE OF VISIT</label><div style={{ fontWeight: 800 }}>{v.date}</div></div>
                            <div><label style={{ fontSize: '0.65rem', opacity: 0.5 }}>TIME SLOT</label><div style={{ fontWeight: 800 }}>{v.slot}</div></div>
                            <div><label style={{ fontSize: '0.65rem', opacity: 0.5 }}>VISITOR COUNT</label><div style={{ fontWeight: 800 }}>{v.count} Persons</div></div>
                            <div><label style={{ fontSize: '0.65rem', opacity: 0.5 }}>SECURITY CHECK</label><div style={{ fontWeight: 800, color: '#10b981' }}>VERIFIED</div></div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '2rem', background: '#f1f5f9', padding: '1rem', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <ShieldAlert size={20} color="#64748b" />
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#1e293b' }}>Strict compliance with ISO safety norms required. Digital signature: <strong>SystemVerified_2026</strong></p>
                </div>
                <button className={classes.primaryBtn} style={{ marginTop: '2rem', width: '100%', display: 'flex', justifyContent: 'center', gap: '1rem' }}><Download size={20} /> Download PDF Pass</button>
            </motion.div>
        );
    };

    const renderSchedule = () => {
        if (detailView.type === 'request') return renderRequestForm();
        if (detailView.type === 'pass' && detailView.id) return renderVisitPass(detailView.id);

        return (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className={classes.sectionContainer}>
                <div className={classes.cardHeader}>
                    <h2>Visit Schedule & Booking</h2>
                    <button className={classes.primaryBtn} onClick={() => setDetailView({ type: 'request', id: null })}><Plus size={18} /> New Request</button>
                </div>
                <div className={classes.searchBar}>
                    <Search size={18} />
                    <input type="text" placeholder="Search by organization or ID..." className={classes.inlineInput} />
                    <Filter size={18} style={{ cursor: 'pointer' }} />
                </div>
                <div className={classes.tableWrapper}>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th>Organization & Type</th>
                                <th>Date & Slot</th>
                                <th>Visitors</th>
                                <th>Status</th>
                                <th>Coordinator</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitRequests.map((v, i) => (
                                <tr key={i}>
                                    <td>
                                        <div style={{ fontWeight: 800 }}>{v.org}</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{v.type} • {v.id}</div>
                                    </td>
                                    <td>
                                        <div>{v.date}</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{v.slot}</div>
                                    </td>
                                    <td><Users size={14} style={{ marginRight: '0.4rem' }} /> {v.count}</td>
                                    <td><span className={`${classes.status} ${v.status === 'Approved' ? classes.statusConfirmed : classes.statusPending}`}>{v.status}</span></td>
                                    <td>{v.coordinator}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button className={classes.actionBtn} onClick={() => setDetailView({ type: 'pass', id: v.id })} title="View Pass"><QrCode size={16} /></button>
                                            <button className={classes.actionBtn} title="Download Letters"><Download size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        );
    };

    const renderLocations = () => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={classes.sectionContainer}>
            <div className={classes.cardHeader}><h2>Location Directory</h2><button className={classes.secondaryBtn}><Map size={18} /> Interactive Map</button></div>
            <div className={classes.formGrid} style={{ marginTop: '1.5rem' }}>
                {locations.map((loc, i) => (
                    <div key={i} className={classes.contentCard} style={{ cursor: 'pointer' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <Building2 size={28} color="#3611ee" />
                            <div style={{ textAlign: 'right' }}><div style={{ fontWeight: 900, color: '#10b981' }}>{loc.rating}</div><div style={{ fontSize: '0.65rem', opacity: 0.6 }}>RATING</div></div>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.25rem' }}>{loc.name}</h3>
                        <p style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}><MapPin size={14} /> {loc.address}</p>
                        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', fontSize: '0.85rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Capacity</span><strong>{loc.capacity}</strong></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Safety</span><strong>{loc.safety}</strong></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Contact</span><strong>{loc.contact}</strong></div>
                        </div>
                        <button className={classes.primaryBtn} style={{ width: '100%', marginTop: '1.5rem' }}>View Specific Guidelines</button>
                    </div>
                ))}
            </div>
            <div className={classes.contentCard} style={{ marginTop: '2.5rem', background: '#0f172a', color: 'white' }}>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Factory size={48} />
                    <div style={{ flex: 1 }}>
                        <h3 style={{ color: 'white' }}>Safety & compliance Notice</h3>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>All visitors must bring a printed or digital copy of the visit pass. Photography is strictly prohibited inside the processing units without prior coordinator approval.</p>
                    </div>
                    <button className={classes.secondaryBtn} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }}>Download SOP</button>
                </div>
            </div>
        </motion.div>
    );

    const renderApprovals = () => (
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className={classes.sectionContainer}>
            <div className={classes.cardHeader}><h2>Approvals Management</h2><span className={classes.headerBadge} style={{ background: '#3611ee', color: 'white' }}>15 URGENT</span></div>
            <div className={classes.dataGrid}>
                <div className={classes.contentCard}>
                    <h3>Pending Review Pipeline</h3>
                    <div className={classes.notificationPanel}>
                        <div className={classes.visitItem}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ background: '#f1f5f9', padding: '0.75rem', borderRadius: '10px' }}><FileText /></div>
                                <div style={{ flex: 1 }}>
                                    <strong style={{ fontSize: '1.1rem' }}>KVASU Dept. of Science</strong>
                                    <p style={{ fontSize: '0.85rem', opacity: 0.7, margin: '0.25rem 0' }}>60 Visitors • Educational • Request #221</p>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                        <button className={classes.primaryBtn} style={{ padding: '0.4rem 1.25rem', fontSize: '0.85rem' }}>Approve</button>
                                        <button className={classes.secondaryBtn} style={{ padding: '0.4rem 1.25rem', fontSize: '0.85rem', color: '#ef4444' }}>Reject</button>
                                        <button className={classes.secondaryBtn} style={{ padding: '0.4rem 1.25rem', fontSize: '0.85rem' }}>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.contentCard}>
                    <h3>Personnel Assignments</h3>
                    <div className={classes.placeholderList}>
                        <div className={classes.notificationItem}><div className={classes.notifIcon} style={{ background: '#eef2ff', color: '#3611ee' }}><UserCheck size={20} /></div><div className={classes.notifContent}><h4>Rajesh K.</h4><p>Coordinator for TVM Central Dairy</p></div></div>
                        <div className={classes.notificationItem}><div className={classes.notifIcon} style={{ background: '#ecfdf5', color: '#10b981' }}><ShieldCheck size={20} /></div><div className={classes.notifContent}><h4>Security Team Beta</h4><p>Assigned to NSS College Visit</p></div></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const renderSettings = () => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={classes.sectionContainer}>
            <div className={classes.dataGrid} style={{ gridTemplateColumns: '1fr 300px' }}>
                <div className={classes.contentCard}>
                    <div className={classes.formSection}>
                        <h3>Visit Portal Configuration</h3>
                        <div className={classes.formGrid}>
                            <div className={classes.formGroup}><label className={classes.label}>Daily Visitor Cap</label><input type="number" className={classes.input} defaultValue="500" /></div>
                            <div className={classes.formGroup}><label className={classes.label}>Slot Duration (Hours)</label><input type="number" className={classes.input} defaultValue="2" /></div>
                            <div className={classes.formGroup}><label className={classes.label}>Max Visitors Per Group</label><input type="number" className={classes.input} defaultValue="60" /></div>
                        </div>
                    </div>
                    <div className={classes.formSection}>
                        <h3>Security & Protocol</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f8fafc', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><ShieldCheck color="#10b981" /><div><strong>QR Check-in System</strong><div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Enabled for all entry gates</div></div></div>
                                <span className={classes.headerBadge} style={{ background: '#ecfdf5', color: '#10b981' }}>ACTIVE</span>
                            </div>
                            <button className={classes.secondaryBtn} style={{ justifyContent: 'center' }}>Manage SOS Emergency Alerts</button>
                        </div>
                    </div>
                </div>
                <div className={classes.sidebarStylePanel}>
                    <div className={classes.contentCard}>
                        <h4>Profile Details</h4>
                        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3611ee', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>A</div>
                                <div><div style={{ fontWeight: 800 }}>Amit Kumar</div><div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Coordinator</div></div>
                            </div>
                            <div style={{ marginTop: '0.5rem' }}><div style={{ fontSize: '0.75rem', opacity: 0.6 }}>DEPARTMENT</div><div style={{ fontWeight: 700 }}>Public Relations</div></div>
                            <div style={{ marginTop: '0.5rem' }}><div style={{ fontSize: '0.75rem', opacity: 0.6 }}>PHONE</div><div style={{ fontWeight: 700 }}>+91 91234 56789</div></div>
                        </div>
                        <button className={classes.primaryBtn} style={{ width: '100%', marginTop: '1.5rem' }}>Update Profile</button>
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
                    <span>Dairy Visit</span>
                </div>
                <nav className={classes.sidebarNav}>
                    <button className={`${classes.navItem} ${activeTab === 'dashboard' ? classes.active : ''}`} onClick={() => { setActiveTab('dashboard'); setDetailView({ type: '', id: null }); }}>
                        <LayoutDashboard size={20} /> Dashboard
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'schedule' ? classes.active : ''}`} onClick={() => { setActiveTab('schedule'); setDetailView({ type: '', id: null }); }}>
                        <Calendar size={20} /> Schedule
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'locations' ? classes.active : ''}`} onClick={() => { setActiveTab('locations'); setDetailView({ type: '', id: null }); }}>
                        <MapPin size={20} /> Locations
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'approvals' ? classes.active : ''}`} onClick={() => { setActiveTab('approvals'); setDetailView({ type: '', id: null }); }}>
                        <ClipboardCheck size={20} /> Approvals
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'settings' ? classes.active : ''}`} onClick={() => { setActiveTab('settings'); setDetailView({ type: '', id: null }); }}>
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
                        <h1>Dairy Visit Management</h1>
                        <p>
                            <span className={classes.headerBadge}>UNIT: CENTRAL DAIRY TVM</span>
                            <span>Public Relations Unit</span>
                        </p>
                    </div>
                    <div className={classes.headerActions}>
                        <div style={{ textAlign: 'right', marginRight: '1rem' }}>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>PORTAL STATUS</div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981' }}>OPERATIONAL</div>
                        </div>
                        <button className={classes.actionBtn}><Bell size={20} /></button>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'dashboard' && renderDashboard()}
                    {activeTab === 'schedule' && renderSchedule()}
                    {activeTab === 'locations' && renderLocations()}
                    {activeTab === 'approvals' && renderApprovals()}
                    {activeTab === 'settings' && renderSettings()}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default DairyVisitPortal;
