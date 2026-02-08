import React from 'react';
import { useTranslation } from 'react-i18next';
import { NoticeCategory } from '../../../types/notice';
import classes from './Notices.module.css';

interface NoticeCategoryTabsProps {
    activeCategory: NoticeCategory;
    onCategoryChange: (category: NoticeCategory) => void;
}

const categories: NoticeCategory[] = ['all', 'organisation', 'public', 'tender', 'announcement'];

const NoticeCategoryTabs: React.FC<NoticeCategoryTabsProps> = ({ activeCategory, onCategoryChange }) => {
    const { t } = useTranslation();

    return (
        <div className={classes.tabsContainer} role="tablist">
            {categories.map((cat) => (
                <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    className={`${classes.tabButton} ${activeCategory === cat ? classes.activeTab : ''}`}
                    onClick={() => onCategoryChange(cat)}
                >
                    {t(`notices.categories.${cat}`, cat.charAt(0).toUpperCase() + cat.slice(1))}
                </button>
            ))}
        </div>
    );
};

export default NoticeCategoryTabs;
