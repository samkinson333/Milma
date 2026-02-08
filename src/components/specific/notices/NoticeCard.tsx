import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Download, Calendar, Pin, Eye } from 'lucide-react';
import { Notice } from '../../../types/notice';
import classes from './Notices.module.css';

interface NoticeCardProps {
    notice: Notice;
}

const NoticeCard: React.FC<NoticeCardProps> = ({ notice }) => {
    const { t } = useTranslation();

    const getFileBadgeClass = (type: string) => {
        switch (type) {
            case 'pdf': return classes.badgePdf;
            case 'doc': return classes.badgeDoc;
            case 'image': return classes.badgeImage;
            default: return classes.badgeDefault;
        }
    };

    return (
        <article className={`${classes.noticeCard} ${notice.isPinned ? classes.pinnedCard : ''}`}>
            <header className={classes.cardHeader}>
                <div className={classes.headerLeft}>
                    <div className={classes.cardIconContainer}>
                        <FileText size={20} className={classes.cardDocIcon} />
                    </div>
                    <span className={`${classes.fileBadge} ${getFileBadgeClass(notice.fileType)}`}>
                        {t(`notices.fileTypes.${notice.fileType}`, notice.fileType.toUpperCase())}
                    </span>
                </div>
                {notice.isPinned && (
                    <div className={classes.pinnedBadge}>
                        <Pin size={12} fill="currentColor" />
                        <span>{t('notices.pinned', 'Pinned')}</span>
                    </div>
                )}
            </header>

            <div className={classes.cardBody}>
                <a href={notice.fileUrl} target="_blank" rel="noopener noreferrer" className={classes.cardTitle}>
                    {notice.title}
                </a>

                {notice.description && (
                    <p className={classes.cardDescription}>{notice.description}</p>
                )}
            </div>

            <div className={classes.cardMetadata}>
                <div className={classes.metaItem}>
                    <Calendar size={14} className={classes.metaIcon} />
                    <span>{new Date(notice.publishDate).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    })}</span>
                </div>
                <div className={classes.metaItem}>
                    <span className={classes.categoryLabel}>
                        {t(`notices.categories.${notice.category}`, notice.category)}
                    </span>
                </div>
            </div>

            <footer className={classes.cardFooter}>
                <button className={classes.previewButton} aria-label={t('notices.preview', 'Preview')}>
                    <Eye size={16} />
                    {t('notices.preview', 'Preview')}
                </button>
                <a
                    href={notice.fileUrl}
                    download
                    className={classes.cardDownloadButton}
                    aria-label={`${t('notices.download', 'Download')} ${notice.title}`}
                >
                    <Download size={16} />
                    {t('notices.download', 'Download')}
                </a>
            </footer>
        </article>
    );
};

export default React.memo(NoticeCard);
