import { Bell, Search } from 'lucide-react';
import styles from '../../pages/admin/Admin.module.css';

const AdminHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <div className={styles.breadcrumb}>
                    <span>/</span> Admin <span>/</span> Dashboard
                </div>
            </div>

            <div className={styles.headerRight}>
                <div className={styles.searchBar}>
                    <Search size={16} color="#64748b" />
                    <input type="text" placeholder="Search modules..." className={styles.searchInput} />
                </div>

                <button className={styles.iconButton}>
                    <Bell size={20} />
                    <span className={styles.notificationBadge}></span>
                </button>

                <div className={styles.userProfile}>
                    <div className={styles.avatar}>A</div>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>Administrator</span>
                        <span className={styles.userRole}>Super Admin</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
