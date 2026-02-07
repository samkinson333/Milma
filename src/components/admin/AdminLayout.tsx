import { ReactNode } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import styles from '../../pages/admin/Admin.module.css';

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div className={styles.layout}>
            <AdminSidebar />
            <div className={styles.mainContent}>
                <AdminHeader />
                <main className={styles.pageWrapper}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
