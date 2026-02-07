import { useState } from 'react';
import styles from './Admin.module.css';
import { Plus, Edit, Trash2, Upload, X, Save, Eye } from 'lucide-react';

interface NewsArticle {
    id: number;
    title: string;
    category: string;
    publishDate: string;
    status: 'published' | 'draft';
    content: string;
    image: string;
    author: string;
}

const AdminNews = () => {
    const [showEditorModal, setShowEditorModal] = useState(false);
    const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);
    const [isPublished, setIsPublished] = useState(false);

    const [articles, setArticles] = useState<NewsArticle[]>([
        {
            id: 1,
            title: 'Milma Launches New Organic Milk Range',
            category: 'Product Launch',
            publishDate: '2026-02-05',
            status: 'published',
            content: 'We are excited to announce the launch of our new organic milk range...',
            image: '',
            author: 'Admin'
        },
        {
            id: 2,
            title: 'Farmer Training Program 2026',
            category: 'Events',
            publishDate: '2026-02-03',
            status: 'published',
            content: 'Annual farmer training program scheduled for March 2026...',
            image: '',
            author: 'Admin'
        },
        {
            id: 3,
            title: 'Quality Standards Update',
            category: 'Announcements',
            publishDate: '2026-02-01',
            status: 'draft',
            content: 'Updated quality standards and testing procedures...',
            image: '',
            author: 'Admin'
        },
        {
            id: 4,
            title: 'Milma Wins Excellence Award',
            category: 'Achievements',
            publishDate: '2026-01-28',
            status: 'published',
            content: 'Milma has been recognized with the Dairy Excellence Award 2026...',
            image: '',
            author: 'Admin'
        },
        {
            id: 5,
            title: 'New Distribution Centers Opening',
            category: 'Infrastructure',
            publishDate: '2026-01-25',
            status: 'draft',
            content: 'Planning to open three new distribution centers across Kerala...',
            image: '',
            author: 'Admin'
        },
    ]);

    const categories = ['Product Launch', 'Events', 'Announcements', 'Achievements', 'Infrastructure', 'Industry News'];

    const openEditorModal = (article?: NewsArticle) => {
        setEditingArticle(article || null);
        setIsPublished(article?.status === 'published' || false);
        setShowEditorModal(true);
    };

    const closeEditorModal = () => {
        setShowEditorModal(false);
        setEditingArticle(null);
        setIsPublished(false);
    };

    const deleteArticle = (id: number) => {
        if (confirm('Are you sure you want to delete this article?')) {
            setArticles(articles.filter(a => a.id !== id));
        }
    };

    const getStatusBadgeClass = (status: string) => {
        return status === 'published'
            ? `${styles.statusBadge} ${styles.statusSuccess}`
            : `${styles.statusBadge} ${styles.statusWarning}`;
    };

    const handleSaveArticle = () => {
        // Logic to save article would go here
        closeEditorModal();
    };

    return (
        <div>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>News & Updates</h1>
                <p className={styles.pageSubtitle}>Manage news articles, announcements, and press releases.</p>
            </div>

            <div className={styles.tableContainer}>
                <div className={styles.tableHeader}>
                    <h3 className={styles.tableTitle}>News Articles</h3>
                    <button className={styles.buttonPrimary} onClick={() => openEditorModal()}>
                        <Plus size={16} />
                        Add New Article
                    </button>
                </div>

                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Publish Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article) => (
                            <tr key={article.id}>
                                <td>
                                    <div className={styles.articleTitleCell}>
                                        <strong>{article.title}</strong>
                                        <span className={styles.articleAuthor}>by {article.author}</span>
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.categoryTag}>{article.category}</span>
                                </td>
                                <td>
                                    <span className={styles.dateText}>
                                        {new Date(article.publishDate).toLocaleDateString('en-IN', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </td>
                                <td>
                                    <span className={getStatusBadgeClass(article.status)}>
                                        {article.status === 'published' ? 'Published' : 'Draft'}
                                    </span>
                                </td>
                                <td>
                                    <div className={styles.tableActions}>
                                        <button
                                            className={styles.tableActionButton}
                                            title="Preview"
                                        >
                                            <Eye size={16} />
                                        </button>
                                        <button
                                            className={styles.tableActionButton}
                                            onClick={() => openEditorModal(article)}
                                            title="Edit"
                                        >
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            className={styles.tableActionButtonDanger}
                                            onClick={() => deleteArticle(article.id)}
                                            title="Delete"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Create/Edit Article Modal */}
            {showEditorModal && (
                <div className={styles.modalOverlay} onClick={closeEditorModal}>
                    <div className={styles.modalContentXLarge} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>
                                {editingArticle ? 'Edit Article' : 'Create New Article'}
                            </h3>
                            <button className={styles.modalCloseButton} onClick={closeEditorModal}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.modalBody}>
                            {/* Title Input */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Article Title *</label>
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    defaultValue={editingArticle?.title || ''}
                                    placeholder="Enter article title..."
                                />
                            </div>

                            {/* Category and Date Row */}
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Category *</label>
                                    <select
                                        className={styles.formSelect}
                                        defaultValue={editingArticle?.category || ''}
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Publish Date</label>
                                    <input
                                        type="date"
                                        className={styles.formInput}
                                        defaultValue={editingArticle?.publishDate || new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                            </div>

                            {/* Featured Image Upload */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Featured Image</label>
                                <div className={styles.imageUploadArea}>
                                    <div className={styles.newsImagePreview}>
                                        <Upload size={32} color="#94a3b8" />
                                    </div>
                                    <div className={styles.uploadInfo}>
                                        <button className={styles.buttonSecondary}>
                                            <Upload size={16} />
                                            Upload Image
                                        </button>
                                        <span className={styles.uploadHint}>Recommended: 1200x630px, Max 5MB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Rich Text Editor */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Article Content *</label>
                                <div className={styles.richTextEditor}>
                                    <div className={styles.richTextToolbar}>
                                        <button className={styles.toolbarButton} title="Bold"><strong>B</strong></button>
                                        <button className={styles.toolbarButton} title="Italic"><em>I</em></button>
                                        <button className={styles.toolbarButton} title="Underline"><u>U</u></button>
                                        <span className={styles.toolbarDivider}></span>
                                        <button className={styles.toolbarButton} title="Heading 1">H1</button>
                                        <button className={styles.toolbarButton} title="Heading 2">H2</button>
                                        <span className={styles.toolbarDivider}></span>
                                        <button className={styles.toolbarButton} title="Bullet List">•</button>
                                        <button className={styles.toolbarButton} title="Numbered List">1.</button>
                                        <span className={styles.toolbarDivider}></span>
                                        <button className={styles.toolbarButton} title="Link">🔗</button>
                                        <button className={styles.toolbarButton} title="Image">🖼️</button>
                                    </div>
                                    <textarea
                                        className={styles.richTextArea}
                                        rows={12}
                                        defaultValue={editingArticle?.content || ''}
                                        placeholder="Write your article content here..."
                                    />
                                </div>
                            </div>

                            {/* Publish Toggle */}
                            <div className={styles.formGroup}>
                                <div className={styles.toggleContainer}>
                                    <label className={styles.toggleLabel}>
                                        <input
                                            type="checkbox"
                                            className={styles.toggleInput}
                                            checked={isPublished}
                                            onChange={(e) => setIsPublished(e.target.checked)}
                                        />
                                        <span className={styles.toggleSwitch}></span>
                                        <span className={styles.toggleText}>
                                            {isPublished ? 'Published' : 'Save as Draft'}
                                        </span>
                                    </label>
                                    <p className={styles.toggleHint}>
                                        {isPublished
                                            ? 'Article will be visible to all users'
                                            : 'Article will be saved as draft and not visible to users'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button className={styles.buttonSecondary} onClick={closeEditorModal}>
                                Cancel
                            </button>
                            <button className={styles.buttonOutline}>
                                <Eye size={16} />
                                Preview
                            </button>
                            <button className={styles.buttonSuccess} onClick={handleSaveArticle}>
                                <Save size={16} />
                                {isPublished ? 'Publish Article' : 'Save Draft'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminNews;
