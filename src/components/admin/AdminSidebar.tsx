import { Link, useLocation } from 'react-router-dom';
import styles from '../../pages/admin/Admin.module.css';
import {
    LayoutDashboard,
    Home,
    Info,
    Package,
    Briefcase,
    Newspaper,
    FileText,
    Image as ImageIcon,
    MessageSquare,
    Phone,

    Users,
    Shield,
    LogOut
} from 'lucide-react';

const AdminSidebar = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(`${path}/`);
    };

    const modules = [
        {
            title: 'Overview',
            items: [
                { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard className={styles.navIcon} /> },
            ]
        },
        {
            title: 'Content Management',
            items: [
                { name: 'Home Page', path: '/admin/home', icon: <Home className={styles.navIcon} /> },
                { name: 'About Us', path: '/admin/about', icon: <Info className={styles.navIcon} /> },
                { name: 'Products', path: '/admin/products', icon: <Package className={styles.navIcon} /> },
                { name: 'Services', path: '/admin/services', icon: <Briefcase className={styles.navIcon} /> },
                { name: 'News & Updates', path: '/admin/news', icon: <Newspaper className={styles.navIcon} /> },
                { name: 'Tenders', path: '/admin/tenders', icon: <FileText className={styles.navIcon} /> },
                { name: 'Gallery', path: '/admin/gallery', icon: <ImageIcon className={styles.navIcon} /> },
            ]
        },
        {
            title: 'Interaction',
            items: [
                { name: 'Feedback', path: '/admin/feedback', icon: <MessageSquare className={styles.navIcon} /> },
                { name: 'Contact Mgmt', path: '/admin/contacts', icon: <Phone className={styles.navIcon} /> },
            ]
        },
        {
            title: 'System',
            items: [
                { name: 'User Management', path: '/admin/users', icon: <Users className={styles.navIcon} /> },
                { name: 'Security', path: '/admin/security', icon: <Shield className={styles.navIcon} /> },
                // { name: 'Settings', path: '/admin/settings', icon: <Settings className={styles.navIcon} /> },
            ]
        }
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logoArea}>
                <span className={styles.logoText}>Milma Admin</span>
            </div>

            <nav className={styles.nav}>
                {modules.map((section, index) => (
                    <div key={index} className={styles.navSection}>
                        <div className={styles.navSectionTitle}>{section.title}</div>
                        {section.items.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`${styles.navItem} ${isActive(item.path) ? styles.navItemActive : ''}`}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>

            <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <Link to="/" className={styles.navItem} style={{ color: '#ef4444' }}>
                    <LogOut className={styles.navIcon} />
                    Logout
                </Link>
            </div>
        </aside>
    );
};

export default AdminSidebar;
