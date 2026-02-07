import styles from './Admin.module.css';
import { Package, Newspaper, Briefcase, MessageSquare, Plus, FileText, Upload, Edit, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Admin Overview</h1>
                <p className={styles.pageSubtitle}>Welcome back, Administrator. Here's your system status at a glance.</p>
            </div>

            {/* Statistics Cards Grid */}
            <div className={styles.cardGrid}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>Total Products</span>
                        <Package size={20} color="#3b82f6" />
                    </div>
                    <div className={styles.cardValue}>328</div>
                    <div className={styles.cardFooter}>
                        <span className={styles.trendPositive}>+12</span> added this month
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>Active News</span>
                        <Newspaper size={20} color="#10b981" />
                    </div>
                    <div className={styles.cardValue}>47</div>
                    <div className={styles.cardFooter}>
                        <span className={styles.trendPositive}>+5</span> published this week
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>Pending Service Requests</span>
                        <Briefcase size={20} color="#f59e0b" />
                    </div>
                    <div className={styles.cardValue}>18</div>
                    <div className={styles.cardFooter}>
                        <span className={styles.trendWarning}>Requires attention</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>Open Feedback Tickets</span>
                        <MessageSquare size={20} color="#ef4444" />
                    </div>
                    <div className={styles.cardValue}>24</div>
                    <div className={styles.cardFooter}>
                        <span className={styles.trendNegative}>+8</span> from yesterday
                    </div>
                </div>
            </div>

            {/* Two Column Layout for Activity and Actions */}
            <div className={styles.twoColumnGrid}>
                {/* Recent Activity Section */}
                <div className={styles.tableContainer}>
                    <div className={styles.tableHeader}>
                        <h3 className={styles.tableTitle}>Recent Activity</h3>
                        <span className={styles.viewAllLink}>View All</span>
                    </div>
                    <div className={styles.activityList}>
                        <div className={styles.activityItem}>
                            <div className={styles.activityIcon} style={{ backgroundColor: '#dbeafe' }}>
                                <Edit size={16} color="#3b82f6" />
                            </div>
                            <div className={styles.activityContent}>
                                <div className={styles.activityTitle}>Product Updated</div>
                                <div className={styles.activityDescription}>
                                    <strong>Milma Ghee 500ml</strong> price changed to ₹285
                                </div>
                                <div className={styles.activityMeta}>
                                    <span>Content Manager</span> • <span>12 mins ago</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.activityItem}>
                            <div className={styles.activityIcon} style={{ backgroundColor: '#dcfce7' }}>
                                <Upload size={16} color="#10b981" />
                            </div>
                            <div className={styles.activityContent}>
                                <div className={styles.activityTitle}>Media Uploaded</div>
                                <div className={styles.activityDescription}>
                                    5 images added to <strong>Gallery - Events 2026</strong>
                                </div>
                                <div className={styles.activityMeta}>
                                    <span>Admin User</span> • <span>1 hour ago</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.activityItem}>
                            <div className={styles.activityIcon} style={{ backgroundColor: '#fef3c7' }}>
                                <FileText size={16} color="#f59e0b" />
                            </div>
                            <div className={styles.activityContent}>
                                <div className={styles.activityTitle}>News Published</div>
                                <div className={styles.activityDescription}>
                                    <strong>"New Dairy Collection Centers Announced"</strong>
                                </div>
                                <div className={styles.activityMeta}>
                                    <span>News Editor</span> • <span>3 hours ago</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.activityItem}>
                            <div className={styles.activityIcon} style={{ backgroundColor: '#dbeafe' }}>
                                <Edit size={16} color="#3b82f6" />
                            </div>
                            <div className={styles.activityContent}>
                                <div className={styles.activityTitle}>Tender Updated</div>
                                <div className={styles.activityDescription}>
                                    Closing date extended for <strong>Tender #2026-045</strong>
                                </div>
                                <div className={styles.activityMeta}>
                                    <span>Tender Manager</span> • <span>5 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions and Notifications */}
                <div>
                    {/* Quick Actions Panel */}
                    <div className={styles.tableContainer} style={{ marginBottom: '1.5rem' }}>
                        <div className={styles.tableHeader}>
                            <h3 className={styles.tableTitle}>Quick Actions</h3>
                        </div>
                        <div className={styles.quickActionsGrid}>
                            <button className={styles.actionButton}>
                                <Plus size={18} />
                                <span>Add Product</span>
                            </button>
                            <button className={styles.actionButton}>
                                <Newspaper size={18} />
                                <span>Create News</span>
                            </button>
                            <button className={styles.actionButton}>
                                <FileText size={18} />
                                <span>Publish Tender</span>
                            </button>
                            <button className={styles.actionButton}>
                                <Upload size={18} />
                                <span>Upload Media</span>
                            </button>
                        </div>
                    </div>

                    {/* Notifications Panel */}
                    <div className={styles.tableContainer}>
                        <div className={styles.tableHeader}>
                            <h3 className={styles.tableTitle}>Notifications</h3>
                        </div>
                        <div className={styles.notificationList}>
                            <div className={styles.notificationItem}>
                                <div className={styles.notificationIconWrapper}>
                                    <AlertCircle size={18} color="#ef4444" />
                                </div>
                                <div className={styles.notificationContent}>
                                    <div className={styles.notificationText}>
                                        <strong>Low stock alert:</strong> Milma Pedha inventory below threshold
                                    </div>
                                    <div className={styles.notificationTime}>
                                        <Clock size={12} /> 30 mins ago
                                    </div>
                                </div>
                            </div>

                            <div className={styles.notificationItem}>
                                <div className={styles.notificationIconWrapper}>
                                    <CheckCircle size={18} color="#10b981" />
                                </div>
                                <div className={styles.notificationContent}>
                                    <div className={styles.notificationText}>
                                        <strong>Backup completed:</strong> Daily system backup successful
                                    </div>
                                    <div className={styles.notificationTime}>
                                        <Clock size={12} /> 2 hours ago
                                    </div>
                                </div>
                            </div>

                            <div className={styles.notificationItem}>
                                <div className={styles.notificationIconWrapper}>
                                    <AlertCircle size={18} color="#f59e0b" />
                                </div>
                                <div className={styles.notificationContent}>
                                    <div className={styles.notificationText}>
                                        <strong>Pending approval:</strong> 3 feedback tickets awaiting response
                                    </div>
                                    <div className={styles.notificationTime}>
                                        <Clock size={12} /> 4 hours ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
