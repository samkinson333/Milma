import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Notice, NoticeCategory } from '../../../types/notice';
import NoticeCard from './NoticeCard';
import classes from './Notices.module.css';

interface NoticeListProps {
    notices: Notice[];
    activeCategory: NoticeCategory;
    searchQuery: string;
}

const NoticeList: React.FC<NoticeListProps> = ({ notices, activeCategory, searchQuery }) => {
    const { t } = useTranslation();

    const filteredNotices = useMemo(() => {
        return notices
            .filter((notice) => {
                const matchesCategory = activeCategory === 'all' || notice.category === activeCategory;
                const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    notice.description?.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            })
            .sort((a, b) => {
                // Pinned notices first, then by date
                if (a.isPinned && !b.isPinned) return -1;
                if (!a.isPinned && b.isPinned) return 1;
                return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
            });
    }, [notices, activeCategory, searchQuery]);

    if (filteredNotices.length === 0) {
        return (
            <div className={classes.emptyState}>
                <p>{t('notices.noResults', 'No notices found matching your criteria.')}</p>
            </div>
        );
    }

    return (
        <div className={classes.noticeList}>
            {filteredNotices.map((notice) => (
                <NoticeCard key={notice.id} notice={notice} />
            ))}
        </div>
    );
};

export default NoticeList;
