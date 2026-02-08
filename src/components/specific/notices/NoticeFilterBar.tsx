import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import classes from './Notices.module.css';

interface NoticeFilterBarProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

const NoticeFilterBar: React.FC<NoticeFilterBarProps> = ({ searchQuery, onSearchChange }) => {
    const { t } = useTranslation();

    return (
        <div className={classes.filterBar}>
            <div className={classes.searchWrapper}>
                <Search className={classes.searchIcon} size={20} />
                <input
                    type="text"
                    className={classes.searchInput}
                    placeholder={t('notices.searchPlaceholder', 'Search notices, tenders, or documents...')}
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    aria-label={t('notices.searchPlaceholder', 'Search')}
                />
            </div>
        </div>
    );
};

export default NoticeFilterBar;
