import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Notice, NoticeCategory } from '../../types/notice';
import { noticeService } from '../../services/noticeService';
import NoticeList from '../../components/specific/notices/NoticeList';
import NoticeCategoryTabs from '../../components/specific/notices/NoticeCategoryTabs';
import NoticeFilterBar from '../../components/specific/notices/NoticeFilterBar';
import classes from './NoticeBoardPage.module.css';

const NoticeBoardPage: React.FC = () => {
    const { t } = useTranslation();
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState<NoticeCategory>('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const data = await noticeService.getNotices();
                setNotices(data);
            } catch (error) {
                console.error('Failed to fetch notices:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotices();

        // SEO: Set document title
        document.title = `${t('notices.title', 'Official Notice Board')} | Milma`;
    }, [t]);

    return (
        <div className={classes.pageContainer}>
            {/* Breadcrumbs */}
            <nav className={classes.breadcrumbs} aria-label="Breadcrumb">
                <ol className={classes.breadcrumbList}>
                    <li>
                        <Link to="/" className={classes.breadcrumbLink}>
                            <Home size={16} />
                            <span>{t('nav.home', 'Home')}</span>
                        </Link>
                    </li>
                    <ChevronRight size={14} className={classes.breadcrumbSeparator} />
                    <li aria-current="page" className={classes.breadcrumbActive}>
                        {t('nav.notices', 'Notice Board')}
                    </li>
                </ol>
            </nav>

            <div className={classes.contentWrapper}>
                <header className={classes.pageHeader}>
                    <h1 className={classes.pageTitle}>{t('notices.title', 'Official Notice Board')}</h1>
                    <p className={classes.pageSubtitle}>
                        {t('notices.subtitle', 'Stay informed with the latest announcements, tenders, and official documents from Milma.')}
                    </p>
                </header>

                <section className={classes.interactiveSection}>
                    <NoticeCategoryTabs
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                    <NoticeFilterBar
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                    />
                </section>

                {loading ? (
                    <div className={classes.loaderContainer}>
                        <div className={classes.loader}></div>
                    </div>
                ) : (
                    <main>
                        <NoticeList
                            notices={notices}
                            activeCategory={activeCategory}
                            searchQuery={searchQuery}
                        />
                    </main>
                )}
            </div>
        </div>
    );
};

export default NoticeBoardPage;
