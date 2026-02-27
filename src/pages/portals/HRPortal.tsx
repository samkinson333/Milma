import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    LayoutDashboard, Users, UserPlus, Briefcase, Settings, LogOut,
    Search, CreditCard, UserCheck,
    Bell, Filter, Download, Plus, MoreVertical, ExternalLink,
    PieChart, BarChart3, Clock, AlertTriangle, ShieldCheck,
    FileText, DollarSign, Calendar, CheckCircle2,
    BriefcaseIcon, ArrowRight, UserCircle, Phone, Mail, MapPin,
    ChevronLeft, Upload, Lock, Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import classes from './PortalLayout.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const HRPortal = () => {
    useTranslation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [detailView, setDetailView] = useState<{ type: string, id: string | null }>({ type: '', id: null });
    const [payrollStatus, setPayrollStatus] = useState({
        otVerified: false,
        bonusProcessed: false
    });

    // Mock Data
    const hrStats = [
        { title: "Total Employees", value: "482", trend: "+3%", up: true, icon: <Users />, color: "#3611ee" },
        { title: "Active Employees", value: "452", trend: "Normal", up: true, icon: <UserCheck />, color: "#10b981" },
        { title: "On Leave Today", value: "14", trend: "-2%", up: false, icon: <Clock />, color: "#f59e0b" },
        { title: "New Hires (Feb)", value: "12", trend: "+15%", up: true, icon: <UserPlus />, color: "#6366f1" },
        { title: "Open Positions", value: "8", trend: "High Priority", up: true, icon: <Briefcase />, color: "#10b981" },
        { title: "Pending Approvals", value: "24", trend: "Action Needed", up: false, icon: <AlertTriangle />, color: "#64748b" }
    ];

    const employees = [
        { id: "MIL-E102", name: "Anjali Nair", dept: "Quality Control", role: "Sr. Chemist", type: "Permanent", status: "Active", email: "anjali@milma.com", phone: "+91 98765 43210", joining: "2020-05-15", salary: "₹65,000", manager: "Dr. Kurien" },
        { id: "MIL-E205", name: "Sandeep V.", dept: "Processing", role: "Team Lead", type: "Permanent", status: "On Leave", email: "sandeep@milma.com", phone: "+91 98765 43211", joining: "2018-10-20", salary: "₹82,000", manager: "Mathew P." },
        { id: "MIL-E312", name: "Rahul Raj", dept: "Logistics", role: "Dispatch Head", type: "Contract", status: "Active", email: "rahul@milma.com", phone: "+91 98765 43212", joining: "2022-01-10", salary: "₹45,000", manager: "Suresh G." },
        { id: "MIL-E440", name: "Sneha Kurian", dept: "HR", role: "Executive", type: "Permanent", status: "Active", email: "sneha@milma.com", phone: "+91 98765 43213", joining: "2021-03-05", salary: "₹55,000", manager: "HR Director" }
    ];

    const vacancies = [
        { id: "JOB-101", role: "Plant Manager", dept: "Production", apps: 45, status: "Interviewing", salary: "₹1.2L - ₹1.8L", location: "Ernakulam" },
        { id: "JOB-102", role: "Financial Analyst", dept: "Finance", apps: 28, status: "Shortlisting", salary: "₹80k - ₹1.2L", location: "TVM" },
        { id: "JOB-103", role: "Marketing Lead", dept: "Sales", apps: 112, status: "Active", salary: "₹90k - ₹1.4L", location: "Kozhikode" }
    ];

    const handleOTVerify = () => setPayrollStatus(prev => ({ ...prev, otVerified: true }));

    const renderDashboard = () => (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={classes.dashboardContainer}>
            <div className={classes.statsGrid} style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
                {hrStats.map((s, i) => (
                    <div key={i} className={classes.statCard}>
                        <div className={classes.statHeader}>
                            <div className={classes.statIcon} style={{ background: `${s.color}15`, color: s.color }}>{s.icon}</div>
                            <span className={`${classes.trend} ${s.up ? classes.trendUp : classes.trendDown}`}>{s.trend}</span>
                        </div>
                        <h3>{s.title}</h3>
                        <p className={classes.statValue}>{s.value}</p>
                    </div>
                ))}
            </div>

            <div className={classes.dataGrid}>
                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}>
                        <h2>Workforce Distribution</h2>
                        <PieChart size={18} color="#64748b" />
                    </div>
                    <div className={classes.chartContainer} style={{ height: '240px' }}>
                        {[
                            { label: 'Quality', val: 85, color: '#3611ee' },
                            { label: 'Processing', val: 120, color: '#10b981' },
                            { label: 'Logistics', val: 95, color: '#f59e0b' },
                            { label: 'Admin', val: 40, color: '#6366f1' }
                        ].map((d, i) => (
                            <div key={i} className={classes.chartBar} style={{ height: `${(d.val / 120) * 100}%`, background: d.color }}>
                                <span className={classes.chartBarValue}>{d.val}</span>
                                <span className={classes.chartBarLabel}>{d.label}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                        <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 800 }}>65%</div><div style={{ fontSize: '0.7rem', opacity: 0.6 }}>MALE</div></div>
                        <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 800 }}>35%</div><div style={{ fontSize: '0.7rem', opacity: 0.6 }}>FEMALE</div></div>
                        <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 800 }}>88%</div><div style={{ fontSize: '0.7rem', opacity: 0.6 }}>PERMANENT</div></div>
                    </div>
                </div>

                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}>
                        <h2>Attendance Summary</h2>
                        <BarChart3 size={18} color="#64748b" />
                    </div>
                    <div className={classes.notificationPanel}>
                        <div className={classes.notificationItem} style={{ borderLeft: '4px solid #10b981' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <span>Present Today</span><strong>452 / 482</strong>
                            </div>
                        </div>
                        <div className={classes.notificationItem} style={{ borderLeft: '4px solid #f59e0b' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <span>On Leave</span><strong>14</strong>
                            </div>
                        </div>
                        <div className={classes.notificationItem} style={{ borderLeft: '4px solid #64748b' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <span>Absentees</span><strong>16</strong>
                            </div>
                        </div>
                    </div>
                    <div className={classes.forecastingWidget} style={{ marginTop: '1.5rem', background: '#f8fafc', color: '#1e293b' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><AlertTriangle size={18} color="#f59e0b" /> Expiring Contracts</h4>
                        <p style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '0.5rem' }}>4 Security personnel contracts expire in 15 days.</p>
                        <button className={classes.secondaryBtn} style={{ marginTop: '0.5rem', width: '100%', fontSize: '0.8rem' }}>Review Details</button>
                    </div>
                </div>
            </div>

            <div className={classes.contentCard}>
                <div className={classes.cardHeader}><h2>Executive Quick Actions</h2></div>
                <div className={classes.headerActions} style={{ flexWrap: 'wrap' }}>
                    <button className={classes.secondaryBtn} onClick={() => setDetailView({ type: 'add_employee', id: null })}><UserPlus size={18} /> Add Employee</button>
                    <button className={classes.secondaryBtn} onClick={() => setDetailView({ type: 'post_job', id: null })}><Briefcase size={18} /> Post Job Opening</button>
                    <button className={classes.secondaryBtn} onClick={() => setActiveTab('payroll')}><DollarSign size={18} /> Process Payroll</button>
                    <button className={classes.secondaryBtn}><FileText size={18} /> Generate HR Report</button>
                </div>
            </div>
        </motion.div>
    );

    const renderEmployeeProfile = (empId: string) => {
        const emp = employees.find(e => e.id === empId);
        if (!emp) return null;
        return (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <button className={classes.actionBtn} onClick={() => setDetailView({ type: '', id: null })} style={{ marginBottom: '1rem' }}><ChevronLeft /> Back to Directory</button>
                <div className={classes.dataGrid} style={{ gridTemplateColumns: '1fr 350px' }}>
                    <div className={classes.contentCard}>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <UserCircle size={60} color="#cbd5e1" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.25rem' }}>{emp.name}</h2>
                                    <span className={classes.headerBadge} style={{ alignSelf: 'center' }}>{emp.status}</span>
                                </div>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '1rem' }}>{emp.role} • {emp.dept}</p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                                    <div><label style={{ fontSize: '0.75rem', opacity: 0.6 }}>EMPLOYEE ID</label><div style={{ fontWeight: 800 }}>{emp.id}</div></div>
                                    <div><label style={{ fontSize: '0.75rem', opacity: 0.6 }}>EMPLOYMENT TYPE</label><div style={{ fontWeight: 800 }}>{emp.type}</div></div>
                                    <div><label style={{ fontSize: '0.75rem', opacity: 0.6 }}>JOINING DATE</label><div style={{ fontWeight: 800 }}>{emp.joining}</div></div>
                                    <div><label style={{ fontSize: '0.75rem', opacity: 0.6 }}>REPORTING MANAGER</label><div style={{ fontWeight: 800 }}>{emp.manager}</div></div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                            <h3>Salary & Payroll History</h3>
                            <div className={classes.tableWrapper} style={{ marginTop: '1rem' }}>
                                <table className={classes.table}>
                                    <thead><tr><th>Month</th><th>Base Salary</th><th>Allowances</th><th>Deductions</th><th>Net Paid</th></tr></thead>
                                    <tbody>
                                        <tr><td>Jan 2026</td><td>{emp.salary}</td><td>₹4,500</td><td>₹2,100</td><td>₹67,400</td></tr>
                                        <tr><td>Dec 2025</td><td>{emp.salary}</td><td>₹4,500</td><td>₹2,100</td><td>₹67,400</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={classes.sidebarStylePanel}>
                        <div className={classes.contentCard}>
                            <h4>Contact Information</h4>
                            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Mail size={16} color="#64748b" /> {emp.email}</div>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Phone size={16} color="#64748b" /> {emp.phone}</div>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><MapPin size={16} color="#64748b" /> Administrative Office, TVM</div>
                            </div>
                        </div>
                        <div className={classes.contentCard}>
                            <h4>Documents</h4>
                            <div className={classes.placeholderList}>
                                <div className={classes.visitItem}><span>ID Proof (Aadhar)</span><Download size={14} /></div>
                                <div className={classes.visitItem}><span>Employment Contract</span><Download size={14} /></div>
                                <div className={classes.visitItem}><span>Degree Certificates</span><Download size={14} /></div>
                            </div>
                        </div>
                        <button className={classes.primaryBtn} style={{ width: '100%', marginTop: '1rem' }}>Edit Employee Profile</button>
                    </div>
                </div>
            </motion.div>
        );
    };

    const renderAddEmployee = () => (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={classes.contentCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h2>Onboard New Employee</h2>
                <button className={classes.actionBtn} onClick={() => setDetailView({ type: '', id: null })}><MoreVertical /></button>
            </div>
            <div className={classes.formGrid}>
                <div className={classes.formGroup}><label className={classes.label}>Full Name</label><input type="text" className={classes.input} placeholder="John Doe" /></div>
                <div className={classes.formGroup}><label className={classes.label}>Employee ID</label><input type="text" className={classes.input} placeholder="MIL-E..." /></div>
                <div className={classes.formGroup}><label className={classes.label}>Personal Email</label><input type="email" className={classes.input} placeholder="john@example.com" /></div>
                <div className={classes.formGroup}><label className={classes.label}>Phone Number</label><input type="text" className={classes.input} placeholder="+91" /></div>
                <div className={classes.formGroup}><label className={classes.label}>Department</label><select className={classes.input}><option>Quality Control</option><option>Processing</option><option>Logistics</option><option>Human Resources</option></select></div>
                <div className={classes.formGroup}><label className={classes.label}>Designation</label><input type="text" className={classes.input} placeholder="Ex: Lead Chemist" /></div>
                <div className={classes.formGroup}><label className={classes.label}>Employment Type</label><select className={classes.input}><option>Permanent</option><option>Contract</option><option>Intern</option></select></div>
                <div className={classes.formGroup}><label className={classes.label}>Salary Structure (Monthly)</label><input type="number" className={classes.input} placeholder="₹" /></div>
                <div className={classes.formGroup}><label className={classes.label}>Reporting Manager</label><input type="text" className={classes.input} placeholder="Manager Name" /></div>
                <div className={classes.formGroup}><label className={classes.label}>Bank Details (IFSC/ACC)</label><input type="text" className={classes.input} placeholder="Account Info" /></div>
            </div>
            <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px dashed #cbd5e1', borderRadius: '12px', textAlign: 'center' }}>
                <Upload size={24} style={{ marginBottom: '0.5rem', opacity: 0.5 }} />
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Click to upload ID, Contract, and Certificates (PDF/PNG)</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                <button className={classes.primaryBtn} style={{ padding: '0.75rem 2.5rem' }}>Save & Proceed</button>
                <button className={classes.secondaryBtn} onClick={() => setDetailView({ type: '', id: null })}>Cancel</button>
            </div>
        </motion.div>
    );

    const renderEmployees = () => {
        if (detailView.type === 'profile' && detailView.id) return renderEmployeeProfile(detailView.id);
        if (detailView.type === 'add_employee') return renderAddEmployee();

        return (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className={classes.sectionContainer}>
                <div className={classes.cardHeader}>
                    <h2>Employee Directory</h2>
                    <button className={classes.primaryBtn} onClick={() => setDetailView({ type: 'add_employee', id: null })}><Plus size={18} /> Add New Employee</button>
                </div>
                <div className={classes.searchBar}>
                    <Search size={18} />
                    <input type="text" placeholder="Search by name, ID or department..." className={classes.inlineInput} />
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <select className={classes.inlineInput} style={{ background: 'transparent', border: 'none', fontWeight: 600 }}><option>All Depts</option><option>Quality</option><option>Admin</option></select>
                        <Filter size={18} style={{ cursor: 'pointer', alignSelf: 'center' }} />
                    </div>
                </div>
                <div className={classes.tableWrapper}>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th>Employee ID & Name</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((emp, i) => (
                                <tr key={i} onClick={() => setDetailView({ type: 'profile', id: emp.id })} style={{ cursor: 'pointer' }}>
                                    <td>
                                        <div style={{ fontWeight: 800 }}>{emp.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{emp.id}</div>
                                    </td>
                                    <td>{emp.dept}</td>
                                    <td>{emp.role}</td>
                                    <td>{emp.type}</td>
                                    <td>
                                        <span className={`${classes.status} ${emp.status === 'Active' ? classes.statusConfirmed : classes.statusPending}`}>
                                            {emp.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button className={classes.actionBtn}><ExternalLink size={16} /></button>
                                            <button className={classes.actionBtn}><MoreVertical size={16} /></button>
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

    const renderRecruitment = () => (
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className={classes.sectionContainer}>
            <div className={classes.statsGrid} style={{ gridTemplateColumns: 'repeat(5, 1fr)', marginBottom: '2.5rem' }}>
                <div className={classes.statCard}><h3>Open Positions</h3><p className={classes.statValue}>8</p></div>
                <div className={classes.statCard}><h3>Applications</h3><p className={classes.statValue}>185</p></div>
                <div className={classes.statCard}><h3>Shortlisted</h3><p className={classes.statValue}>42</p></div>
                <div className={classes.statCard}><h3>Interviews</h3><p className={classes.statValue}>12</p></div>
                <div className={classes.statCard}><h3>Offers</h3><p className={classes.statValue}>4</p></div>
            </div>
            <div className={classes.dataGrid}>
                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}>
                        <h2>Job Board</h2>
                        <button className={classes.secondaryBtn} onClick={() => setDetailView({ type: 'post_job', id: null })}><Plus size={16} /> Post New Job</button>
                    </div>
                    {detailView.type === 'post_job' ? (
                        <div className={classes.formGroup} style={{ marginTop: '1rem' }}>
                            <div className={classes.formGrid}>
                                <input type="text" className={classes.input} placeholder="Job Title" />
                                <select className={classes.input}><option>Production</option><option>Finance</option></select>
                                <textarea className={classes.input} placeholder="Description" rows={3} style={{ gridColumn: 'span 2' }} />
                            </div>
                            <button className={classes.primaryBtn} style={{ marginTop: '1rem' }}>Publish Opening</button>
                        </div>
                    ) : (
                        <div className={classes.notificationPanel}>
                            {vacancies.map((v, i) => (
                                <div key={i} className={classes.visitItem}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                                        <div>
                                            <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{v.role}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{v.dept} • {v.apps} Applications • {v.location}</div>
                                        </div>
                                        <span className={classes.headerBadge}>{v.status}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                        <button className={classes.secondaryBtn} style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>View Apps</button>
                                        <button className={classes.secondaryBtn} style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>Edit Post</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}>
                        <h2>Interview Management</h2>
                        <Calendar size={18} color="#64748b" />
                    </div>
                    <div className={classes.placeholderList}>
                        <div className={classes.visitItem} style={{ borderLeftColor: '#3611ee' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <strong>Candidate: Suresh M.</strong>
                                <span className={classes.headerBadge}>Phase 1</span>
                            </div>
                            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Technical Panel: Dr. Nair, Mathew V.</span>
                            <button className={classes.secondaryBtn} style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Schedule Slot</button>
                        </div>
                        <div className={classes.visitItem} style={{ borderLeftColor: '#10b981' }}>
                            <strong>Candidate: Meera Raj</strong>
                            <span className={classes.headerBadge}>Final Round</span>
                            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Executive Panel: GM (Production)</span>
                            <button className={classes.secondaryBtn} style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Onboarding Checklist</button>
                        </div>
                    </div>
                    <div className={classes.forecastingWidget} style={{ marginTop: '2rem', padding: '1rem', background: '#f0f9ff', color: '#0369a1' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={18} /> AI Resume Match</h4>
                        <p style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '0.5rem' }}>Our AI has shortlisted 12 candidates matching your specific Processing Lead requirements.</p>
                        <button className={classes.secondaryBtn} style={{ width: '100%', marginTop: '0.5rem', background: 'white' }}>Review Matches</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const renderPayroll = () => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={classes.sectionContainer}>
            <div className={classes.contentCard} style={{ marginBottom: '2.5rem', background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: 'white' }}>
                <div className={classes.cardHeader}>
                    <h2 style={{ color: 'white' }}>Financial Administration (March 2026)</h2>
                    <span className={classes.headerBadge} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'transparent' }}>CYCLE: 01-31st MAR</span>
                </div>
                <div className={classes.statsGrid} style={{ border: 'none', background: 'transparent' }}>
                    <div style={{ padding: '1rem' }}><div style={{ fontSize: '0.75rem', opacity: 0.6 }}>TOTAL DISBURSED</div><div style={{ fontSize: '2rem', fontWeight: 900 }}>₹42.50 L</div></div>
                    <div style={{ padding: '1rem' }}><div style={{ fontSize: '0.75rem', opacity: 0.6 }}>DEDUCTIONS (PF/ESI)</div><div style={{ fontSize: '2rem', fontWeight: 900 }}>₹6.80 L</div></div>
                    <div style={{ padding: '1rem' }}><div style={{ fontSize: '0.75rem', opacity: 0.6 }}>TAX CONTRIBUTIONS</div><div style={{ fontSize: '2rem', fontWeight: 900 }}>₹4.20 L</div></div>
                    <div style={{ padding: '1rem' }}><div style={{ fontSize: '0.75rem', opacity: 0.6 }}>TAX STATUS</div><div style={{ fontSize: '2rem', fontWeight: 900, color: '#10b981' }}>COMPLIANT</div></div>
                </div>
            </div>

            <div className={classes.dataGrid}>
                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}><h2>Processing Task Dashboard</h2></div>
                    <div className={classes.notificationPanel}>
                        <div className={classes.notificationItem}>
                            <div className={classes.notifIcon} style={{ background: payrollStatus.otVerified ? '#ecfdf5' : '#f1f5f9', color: payrollStatus.otVerified ? '#10b981' : '#64748b' }}>
                                {payrollStatus.otVerified ? <CheckCircle2 size={24} /> : <AlertTriangle size={20} />}
                            </div>
                            <div className={classes.notifContent}>
                                <h4>{payrollStatus.otVerified ? 'Overtime Verified' : 'Verify Overtime'}</h4>
                                <p>12 Logistic members pending review for Feb cycle.</p>
                                {!payrollStatus.otVerified && <button className={classes.primaryBtn} onClick={handleOTVerify} style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Process Batch</button>}
                            </div>
                        </div>
                        <div className={classes.notificationItem}>
                            <div className={classes.notifIcon} style={{ background: '#eef2ff', color: '#3611ee' }}><ArrowRight size={20} /></div>
                            <div className={classes.notifContent}>
                                <h4>Generate Monthly Payslips</h4>
                                <p>Ready for all 482 active employees.</p>
                                <button className={classes.secondaryBtn} style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Batch Download PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}><h2>Compliance & Audits</h2></div>
                    <div className={classes.placeholderList}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                            <button className={classes.secondaryBtn} style={{ fontSize: '0.8rem' }}>PF Report (Feb)</button>
                            <button className={classes.secondaryBtn} style={{ fontSize: '0.8rem' }}>ESI Statement</button>
                        </div>
                        <button className={classes.secondaryBtn} style={{ width: '100%', justifyContent: 'space-between' }}><span>TDS Quarter Summary (Q3)</span><Download size={14} /></button>
                        <button className={classes.secondaryBtn} style={{ width: '100%', justifyContent: 'space-between', marginTop: '0.75rem' }}><span>Annual Salary Ledger</span><Download size={14} /></button>
                    </div>
                    <div className={classes.sidebarStylePanel} style={{ marginTop: '1.5rem', padding: '1rem', background: '#f8fafc' }}>
                        <h4 style={{ fontSize: '0.8rem', opacity: 0.6 }}>AUDIT LOG</h4>
                        <div style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Full reconciliation completed by Admin at 14:20 PM today.</div>
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
                        <h3>Organization Settings</h3>
                        <div className={classes.formGrid}>
                            <div className={classes.formGroup}><label className={classes.label}>Registered Name</label><input type="text" className={classes.input} defaultValue="Milma Central Federation" /></div>
                            <div className={classes.formGroup}><label className={classes.label}>Registration ID</label><input type="text" className={classes.input} defaultValue="MIL-REG-2026-X" /></div>
                            <div className={classes.formGroup} style={{ gridColumn: 'span 2' }}><label className={classes.label}>Registered Address</label><input type="text" className={classes.input} defaultValue="Ambalathara, Thiruvananthapuram, Kerala 695026" /></div>
                        </div>
                    </div>
                    <div className={classes.formSection}>
                        <h3>Enterprise Policy Config</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}><Clock size={20} color="#64748b" /><div style={{ fontWeight: 800, marginTop: '0.5rem' }}>Working Hours</div><div style={{ fontSize: '0.7rem' }}>8h/Day</div></div>
                            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}><Calendar size={20} color="#64748b" /><div style={{ fontWeight: 800, marginTop: '0.5rem' }}>Leave Policy</div><div style={{ fontSize: '0.7rem' }}>2.5/Mo</div></div>
                            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}><DollarSign size={20} color="#64748b" /><div style={{ fontWeight: 800, marginTop: '0.5rem' }}>Payroll Cycle</div><div style={{ fontSize: '0.7rem' }}>Monthly</div></div>
                        </div>
                    </div>
                    <div className={classes.formSection}>
                        <h3>Advanced Security</h3>
                        <div className={classes.notificationItem} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}><ShieldCheck size={24} color="#10b981" /><div><h4 style={{ margin: 0 }}>Two-Factor Authentication</h4><p style={{ margin: 0, fontSize: '0.85rem' }}>Enforced for all Administrative roles.</p></div></div>
                            <span className={classes.headerBadge} style={{ background: '#ecfdf5', color: '#10b981' }}>PROTECTED</span>
                        </div>
                        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                            <button className={classes.secondaryBtn}><Lock size={14} /> Change Password</button>
                            <button className={classes.secondaryBtn}><Shield size={14} /> View Audit Logs</button>
                        </div>
                    </div>
                </div>

                <div className={classes.sidebarStylePanel}>
                    <div className={classes.contentCard}>
                        <h4>User Access Control</h4>
                        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}><span>Admin Access</span><strong>Full</strong></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}><span>Manager Level</span><strong>Mid-Level</strong></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}><span>Employee Level</span><strong>Self-Service</strong></div>
                        </div>
                    </div>
                    <div className={classes.contentCard} style={{ background: '#f8fafc' }}>
                        <h4>Communication</h4>
                        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem' }}><input type="checkbox" defaultChecked /> Email Notifications</label>
                            <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem' }}><input type="checkbox" defaultChecked /> SMS Alerts</label>
                            <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem' }}><input type="checkbox" defaultChecked /> System Broadcasts</label>
                        </div>
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
                    <span>HR Administration</span>
                </div>
                <nav className={classes.sidebarNav}>
                    <button className={`${classes.navItem} ${activeTab === 'dashboard' ? classes.active : ''}`} onClick={() => { setActiveTab('dashboard'); setDetailView({ type: '', id: null }); }}>
                        <LayoutDashboard size={20} /> Dashboard
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'employees' ? classes.active : ''}`} onClick={() => { setActiveTab('employees'); setDetailView({ type: '', id: null }); }}>
                        <Users size={20} /> Employees
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'recruitment' ? classes.active : ''}`} onClick={() => { setActiveTab('recruitment'); setDetailView({ type: '', id: null }); }}>
                        <BriefcaseIcon size={20} /> Recruitment
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'payroll' ? classes.active : ''}`} onClick={() => { setActiveTab('payroll'); setDetailView({ type: '', id: null }); }}>
                        <CreditCard size={20} /> Payroll
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
                        <h1>Executive Suite</h1>
                        <p>
                            <span className={classes.headerBadge}>ADMIN: SR. HR MANAGER</span>
                            <span>System Admin • HR Dept</span>
                        </p>
                    </div>
                    <div className={classes.headerActions}>
                        <div style={{ textAlign: 'right', marginRight: '1rem' }}>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>LAST RECONCILIATION</div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981' }}>SUCCESS • FEB 27, 2026</div>
                        </div>
                        <button className={classes.actionBtn}><Bell size={20} /></button>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'dashboard' && renderDashboard()}
                    {activeTab === 'employees' && renderEmployees()}
                    {activeTab === 'recruitment' && renderRecruitment()}
                    {activeTab === 'payroll' && renderPayroll()}
                    {activeTab === 'settings' && renderSettings()}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default HRPortal;
