import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    LayoutDashboard, BookOpen, CheckSquare, LogOut,
    Award, Clock, Play, Download,
    User, Bell, ChevronLeft, CheckCircle2,
    ExternalLink, Star, Plus, Lock, Github, Linkedin
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import classes from './PortalLayout.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const InternshipPortal = () => {
    useTranslation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedModule, setSelectedModule] = useState<any>(null);

    // Mock Data
    const performanceMetrics = [
        { title: "Completed Tasks", value: "12", icon: <CheckSquare />, color: "#3611ee" },
        { title: "Pending Tasks", value: "2", icon: <Clock />, color: "#f59e0b" },
        { title: "Learning Modules", value: "8/10", icon: <BookOpen />, color: "#10b981" },
        { title: "Overall Progress", value: "84%", icon: <Award />, color: "#6366f1" },
        { title: "Feedback Score", value: "4.8/5", icon: <Star />, color: "#8b5cf6" }
    ];

    const tasks = [
        { id: "TSK-082", title: "Water Quality Testing Report", status: "Reviewing", remark: "Good progress on pH analysis.", priority: "High" },
        { id: "TSK-084", title: "Microbiology Lab Orientation", status: "Completed", remark: "Well documented.", priority: "Medium" },
        { id: "TSK-085", title: "Pasteurization Logic Flowchart", status: "Pending", remark: "Need by Friday.", priority: "High" }
    ];

    const learningModules = [
        { id: 1, title: "Dairy Processing Fundamentals", duration: "4h 20m", progress: 100, lessons: 12, category: "Technical" },
        { id: 2, title: "Quality Control & Food Safety", duration: "6h 15m", progress: 85, lessons: 18, category: "Compliance" },
        { id: 3, title: "Industrial Automation in Dairies", duration: "5h 45m", progress: 40, lessons: 15, category: "Engineering" },
        { id: 4, title: "Soft Skills for Professionals", duration: "2h 30m", progress: 100, lessons: 8, category: "General" }
    ];

    const renderDashboard = () => (
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className={classes.dashboardContainer}>
            <div className={classes.statsGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {performanceMetrics.map((m, i) => (
                    <div key={i} className={classes.statCard}>
                        <div className={classes.statIcon} style={{ background: `${m.color}15`, color: m.color }}>{m.icon}</div>
                        <h3>{m.title}</h3>
                        <p className={classes.statValue}>{m.value}</p>
                    </div>
                ))}
            </div>

            <div className={classes.dataGrid}>
                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}><h2>Internship Progress Tracker</h2></div>
                    <div className={classes.timelineView} style={{ marginTop: '1.5rem' }}>
                        {[
                            { week: "Week 1", title: "Orientation & Safety", status: "Completed" },
                            { week: "Week 2", title: "Basic Training", status: "Completed" },
                            { week: "Week 3-6", title: "Quality Analytics Project", status: "Current" },
                            { week: "Week 7-8", title: "Project Evaluation", status: "Upcoming" },
                            { week: "Final", title: "Certification", status: "Upcoming" }
                        ].map((item, i) => (
                            <div key={i} className={classes.visitItem} style={{ borderLeft: item.status === 'Completed' ? '4px solid #10b981' : (item.status === 'Current' ? '4px solid #3611ee' : '4px solid #e2e8f0') }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                    <div><strong>{item.week}: {item.title}</strong></div>
                                    <span className={classes.headerBadge} style={{ background: item.status === 'Completed' ? '#ecfdf5' : (item.status === 'Current' ? '#eef2ff' : '#f8fafc'), color: item.status === 'Completed' ? '#10b981' : (item.status === 'Current' ? '#3611ee' : '#94a3b8') }}>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={classes.contentCard}>
                    <div className={classes.cardHeader}><h2>Attendance Monitoring</h2></div>
                    <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                        <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto' }}>
                            <svg style={{ transform: 'rotate(-90deg)', width: '120px', height: '120px' }}>
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#f1f5f9" strokeWidth="10" />
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#10b981" strokeWidth="10" strokeDasharray="314" strokeDashoffset="18" />
                            </svg>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 900, fontSize: '1.5rem' }}>94%</div>
                        </div>
                        <p style={{ marginTop: '1rem', color: '#64748b' }}>Attendance is optimal. Maintaining policy consistency.</p>
                    </div>
                    <div className={classes.forecastingWidget} style={{ background: '#f0f9ff', color: '#0369a1' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={18} /> AI Insight</h4>
                        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>You are in the top 5% of your intern cohort based on task turnaround time.</p>
                    </div>
                </div>
            </div>

            <div className={classes.contentCard}>
                <div className={classes.cardHeader}><h2>Recent Activity Panel</h2></div>
                <div className={classes.notificationPanel}>
                    <div className={classes.notificationItem}><div className={classes.notifIcon} style={{ background: '#eef2ff' }}><CheckCircle2 size={20} /></div><div className={classes.notifContent}><h4>Task Reviewed</h4><p>Your "Microbiology Orientation" task was approved with high marks.</p></div></div>
                    <div className={classes.notificationItem}><div className={classes.notifIcon} style={{ background: '#ecfdf5' }}><BookOpen size={20} /></div><div className={classes.notifContent}><h4>New Module Assigned</h4><p>"Advanced Pasteurization Techniques" is now available for learning.</p></div></div>
                </div>
            </div>
        </motion.div>
    );

    const renderLearnings = () => {
        if (selectedModule) return (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <button className={classes.actionBtn} onClick={() => setSelectedModule(null)} style={{ marginBottom: '1.5rem' }}><ChevronLeft /> Back to Course Library</button>
                <div className={classes.dataGrid} style={{ gridTemplateColumns: '1fr 350px' }}>
                    <div className={classes.contentCard}>
                        <div style={{ width: '100%', aspectRatio: '16/9', background: '#0f172a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ color: 'white', textAlign: 'center' }}><Play size={64} style={{ fill: 'white' }} /><div style={{ marginTop: '1rem', fontWeight: 600 }}>Video Lesson Placeholder</div></div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '5px', background: 'rgba(255,255,255,0.1)' }}><div style={{ width: '45%', height: '100%', background: '#3611ee' }} /></div>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <h2>{selectedModule.title}</h2>
                            <p style={{ opacity: 0.7, lineHeight: 1.6, marginTop: '1rem' }}>This comprehensive module covers the core industrial processes at Milma, focusing on safety, technology, and hygiene standards required in high-capacity dairy processing units.</p>
                        </div>
                    </div>
                    <div className={classes.sidebarStylePanel}>
                        <div className={classes.contentCard}>
                            <h4>Lesson Progress</h4>
                            <div className={classes.placeholderList} style={{ marginTop: '1rem' }}>
                                <div style={{ fontSize: '0.85rem', display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#10b981' }}><CheckCircle2 size={16} /> 1. Introduction to Dairy</div>
                                <div style={{ fontSize: '0.85rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Clock size={16} /> 2. Health & Safety Protocol</div>
                                <div style={{ fontSize: '0.85rem', display: 'flex', gap: '0.5rem', alignItems: 'center', opacity: 0.5 }}><Lock size={16} /> 3. Processing Stages</div>
                            </div>
                        </div>
                        <div className={classes.contentCard}>
                            <h4>Downloads</h4>
                            <button className={classes.secondaryBtn} style={{ width: '100%', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Lecture Slides</span><Download size={14} /></button>
                            <button className={classes.secondaryBtn} style={{ width: '100%', justifyContent: 'space-between' }}><span>Reference Materials</span><Download size={14} /></button>
                        </div>
                    </div>
                </div>
            </motion.div>
        );

        return (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className={classes.sectionContainer}>
                <div className={classes.cardHeader}><h2>Resource Library</h2></div>
                <div className={classes.formGrid} style={{ marginTop: '1rem' }}>
                    {learningModules.map((m) => (
                        <div key={m.id} className={classes.contentCard} onClick={() => setSelectedModule(m)} style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span className={classes.headerBadge} style={{ background: '#f1f5f9', color: '#64748b' }}>{m.category}</span>
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '0.5rem' }}>{m.title}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', opacity: 0.7 }}>
                                <span>{m.lessons} Lessons</span><span>{m.duration}</span>
                            </div>
                            <div className={classes.progressBarContainer} style={{ background: '#f1f5f9', height: '6px', margin: '1.5rem 0 0.5rem' }}>
                                <div className={classes.progressBar} style={{ width: `${m.progress}%`, background: m.progress === 100 ? '#10b981' : '#3611ee' }} />
                            </div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, textAlign: 'right' }}>{m.progress}% COMPLETE</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        );
    };

    const renderTasks = () => (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className={classes.sectionContainer}>
            <div className={classes.cardHeader}><h2>Performance Task Manager</h2></div>
            <div className={classes.tableWrapper} style={{ marginTop: '1.5rem' }}>
                <table className={classes.table}>
                    <thead><tr><th>Task ID & Title</th><th>Status</th><th>Priority</th><th>Mentor Remarks</th><th>Actions</th></tr></thead>
                    <tbody>
                        {tasks.map((t, i) => (
                            <tr key={i}>
                                <td>
                                    <div style={{ fontWeight: 800 }}>{t.title}</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{t.id}</div>
                                </td>
                                <td><span className={`${classes.status} ${t.status === 'Completed' ? classes.statusConfirmed : classes.statusPending}`}>{t.status}</span></td>
                                <td><span style={{ fontSize: '0.8rem', fontWeight: 700, color: t.priority === 'High' ? '#ef4444' : '#64748b' }}>{t.priority}</span></td>
                                <td style={{ fontStyle: 'italic', opacity: 0.7 }}>"{t.remark}"</td>
                                <td>{t.status === 'Pending' ? <button className={classes.primaryBtn} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Upload Result</button> : <button className={classes.actionBtn}><ExternalLink size={14} /></button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={classes.contentCard} style={{ marginTop: '2.5rem', background: '#f8fafc' }}>
                <h3>Submission Hub</h3>
                <div style={{ padding: '2rem', border: '1px dashed #cbd5e1', borderRadius: '16px', textAlign: 'center', marginTop: '1rem' }}>
                    <Plus size={32} style={{ margin: '0 auto 1rem', opacity: 0.4 }} />
                    <p style={{ fontWeight: 600 }}>Drop your task deliverables here</p>
                    <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>Supports PDF, ZIP, and Image formats (Max 50MB)</p>
                    <button className={classes.secondaryBtn} style={{ marginTop: '1rem' }}>Browse Files</button>
                </div>
            </div>
        </motion.div>
    );

    const renderSettings = () => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={classes.sectionContainer}>
            <div className={classes.dataGrid} style={{ gridTemplateColumns: 'minmax(0, 1fr) 350px' }}>
                <div className={classes.contentCard}>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#3611ee', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 900 }}>SN</div>
                        <div>
                            <h2>Sneha Nair</h2>
                            <p style={{ opacity: 0.7 }}>Internship ID: #MIL-2026-88</p>
                            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                                <button className={classes.actionBtn}><Github size={18} /></button>
                                <button className={classes.actionBtn}><Linkedin size={18} /></button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.formGrid} style={{ marginTop: '2.5rem' }}>
                        <div className={classes.formGroup}><label className={classes.label}>University</label><input type="text" className={classes.input} defaultValue="KVASU" /></div>
                        <div className={classes.formGroup}><label className={classes.label}>Department</label><input type="text" className={classes.input} defaultValue="Quality Control" /></div>
                    </div>
                    <div style={{ marginTop: '2rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                        <h3>Academic Identity</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Ensure your profile details are accurate as they will be used for the final certification issued by Milma Central Federation.</p>
                        <button className={classes.primaryBtn} style={{ marginTop: '1rem' }}>Update Academic Profile</button>
                    </div>
                </div>
                <div className={classes.sidebarStylePanel}>
                    <div className={classes.contentCard}>
                        <h4>Certifications</h4>
                        <div className={classes.visitItem} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', cursor: 'not-allowed' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', opacity: 0.5 }}>
                                <Lock size={18} />
                                <div><div style={{ fontWeight: 800 }}>Completion Certificate</div><div style={{ fontSize: '0.75rem' }}>Unlocks at 100% progress</div></div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.contentCard}>
                        <h4>Security Controls</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}><span>2FA Protection</span><span className={classes.headerBadge} style={{ background: '#ecfdf5', color: '#10b981' }}>Active</span></div>
                            <button className={classes.secondaryBtn} style={{ width: '100%', fontSize: '0.85rem' }}>Change Key Pass</button>
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
                    <span>Intern Portal</span>
                </div>
                <nav className={classes.sidebarNav}>
                    <button className={`${classes.navItem} ${activeTab === 'dashboard' ? classes.active : ''}`} onClick={() => { setActiveTab('dashboard'); setSelectedModule(null); }}>
                        <LayoutDashboard size={20} /> My Dashboard
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'learnings' ? classes.active : ''}`} onClick={() => setActiveTab('learnings')}>
                        <BookOpen size={20} /> Academic Learning
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'tasks' ? classes.active : ''}`} onClick={() => { setActiveTab('tasks'); setSelectedModule(null); }}>
                        <CheckSquare size={20} /> My Tasks
                    </button>
                    <button className={`${classes.navItem} ${activeTab === 'settings' ? classes.active : ''}`} onClick={() => { setActiveTab('settings'); setSelectedModule(null); }}>
                        <User size={20} /> My Profile
                    </button>
                </nav>
                <button className={classes.logoutBtn} onClick={() => navigate('/portal-login')}>
                    <LogOut size={20} /> Logout
                </button>
            </aside>

            <main className={classes.mainContent}>

                <header className={classes.header}>
                    <div className={classes.headerTitle}>
                        <h1>Welcome, Sneha</h1>
                        <p>
                            <span className={classes.headerBadge}>ID: #MIL-2026-88</span>
                            <span>Dept: Quality Control</span>
                            <span>Mentor: Dr. Kurien</span>
                        </p>
                    </div>
                    <div className={classes.headerActions}>
                        <div style={{ textAlign: 'right', marginRight: '1rem' }}>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>DURATION</div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>FEB 01 - MAR 31, 2026</div>
                        </div>
                        <button className={classes.actionBtn}><Bell size={20} /></button>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'dashboard' && renderDashboard()}
                    {activeTab === 'learnings' && renderLearnings()}
                    {activeTab === 'tasks' && renderTasks()}
                    {activeTab === 'settings' && renderSettings()}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default InternshipPortal;
