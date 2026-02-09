import React, { useState, useEffect } from 'react';
import { Bell, X, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import classes from './FloatingNotice.module.css';
import { noticeService } from '../../../services/noticeService';
import { Notice } from '../../../types/notice';
import { useTranslation } from 'react-i18next';

const FloatingNotice: React.FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [notices, setNotices] = useState<Notice[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const data = await noticeService.getNotices();
                // Take only lateat 5
                setNotices(data.slice(0, 5));
                setUnreadCount(data.filter(n => n.isPinned).length || 3);
            } catch (error) {
                console.error('Failed to fetch notices:', error);
            }
        };

        fetchNotices();
    }, []);

    const togglePopup = () => setIsOpen(!isOpen);

    return (
        <div className={classes.floatingContainer}>
            {isOpen && (
                <div className={classes.popup}>
                    <div className={classes.popupHeader}>
                        <h3>{t('notices.latest', 'Latest Notices')}</h3>
                        <button className={classes.closeBtn} onClick={togglePopup}>
                            <X size={18} />
                        </button>
                    </div>

                    <div className={classes.noticeList}>
                        {notices.map((notice) => (
                            <a
                                key={notice.id}
                                href={notice.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.noticeItem}
                            >
                                <div className={classes.iconBox}>
                                    <FileText size={18} />
                                </div>
                                <div className={classes.noticeContent}>
                                    <div className={classes.noticeTitle}>{notice.title}</div>
                                    <div className={classes.noticeDate}>
                                        {new Date(notice.publishDate).toLocaleDateString()}
                                    </div>
                                </div>
                                <ExternalLink size={14} style={{ opacity: 0.3 }} />
                            </a>
                        ))}
                    </div>

                    <div className={classes.popupFooter}>
                        <Link to="/notices" className={classes.viewAll} onClick={() => setIsOpen(false)}>
                            {t('notices.viewAll', 'View All Notices')} <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            )}

            <button
                className={`${classes.fab} ${isOpen ? classes.fabActive : ''}`}
                onClick={togglePopup}
                aria-label="Toggle Notices"
            >
                {isOpen ? <X size={28} /> : (
                    <>
                        <Bell size={28} />
                        {unreadCount > 0 && <span className={classes.badge}>{unreadCount}</span>}
                    </>
                )}
            </button>
        </div>
    );
};

export default FloatingNotice;
