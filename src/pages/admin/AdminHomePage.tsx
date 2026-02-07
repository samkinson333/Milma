import { useState } from 'react';
import styles from './Admin.module.css';
import { Upload, Plus, Trash2, GripVertical, Eye, EyeOff, Link as LinkIcon, Save, CheckCircle } from 'lucide-react';

const AdminHomePage = () => {
    const [banners, setBanners] = useState([
        { id: 1, title: 'Summer Collection 2026', image: 'banner1.jpg', enabled: true },
        { id: 2, title: 'Fresh Dairy Products', image: 'banner2.jpg', enabled: true },
        { id: 3, title: 'New Product Launch', image: 'banner3.jpg', enabled: false },
    ]);

    const [quickLinks, setQuickLinks] = useState([
        { id: 1, title: 'Our Products', icon: '📦', url: '/products' },
        { id: 2, title: 'Contact Us', icon: '📞', url: '/contact' },
        { id: 3, title: 'Career Opportunities', icon: '💼', url: '/careers' },
    ]);

    const toggleBanner = (id: number) => {
        setBanners(banners.map(b => b.id === id ? { ...b, enabled: !b.enabled } : b));
    };

    const removeBanner = (id: number) => {
        setBanners(banners.filter(b => b.id !== id));
    };

    const removeQuickLink = (id: number) => {
        setQuickLinks(quickLinks.filter(q => q.id !== id));
    };

    return (
        <div>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Home Page Management</h1>
                <p className={styles.pageSubtitle}>Manage hero banners, welcome message, and quick links for the homepage.</p>
            </div>

            {/* Hero Banner Manager */}
            <div className={styles.cmsPanel}>
                <div className={styles.cmsPanelHeader}>
                    <h3 className={styles.cmsPanelTitle}>Hero Banner Manager</h3>
                    <button className={styles.buttonPrimary}>
                        <Plus size={16} />
                        Add New Banner
                    </button>
                </div>
                <div className={styles.cmsPanelBody}>
                    <p className={styles.helperText}>Upload and manage hero banners. Drag to reorder, toggle visibility.</p>

                    <div className={styles.bannerList}>
                        {banners.map((banner) => (
                            <div key={banner.id} className={styles.bannerItem}>
                                <div className={styles.bannerDragHandle}>
                                    <GripVertical size={20} color="#94a3b8" />
                                </div>
                                <div className={styles.bannerPreview}>
                                    <div className={styles.bannerImagePlaceholder}>
                                        {banner.image}
                                    </div>
                                </div>
                                <div className={styles.bannerInfo}>
                                    <div className={styles.bannerTitle}>{banner.title}</div>
                                    <div className={styles.bannerMeta}>1920 x 600px • JPG</div>
                                </div>
                                <div className={styles.bannerActions}>
                                    <button
                                        className={styles.iconButtonAction}
                                        onClick={() => toggleBanner(banner.id)}
                                        title={banner.enabled ? 'Disable' : 'Enable'}
                                    >
                                        {banner.enabled ? <Eye size={18} /> : <EyeOff size={18} />}
                                    </button>
                                    <button
                                        className={styles.iconButtonDanger}
                                        onClick={() => removeBanner(banner.id)}
                                        title="Delete"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <div className={styles.bannerStatus}>
                                    <span className={`${styles.statusDot} ${banner.enabled ? styles.statusDotActive : styles.statusDotInactive}`}></span>
                                    {banner.enabled ? 'Active' : 'Disabled'}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.uploadZone}>
                        <Upload size={32} color="#94a3b8" />
                        <p>Drag and drop images here or click to browse</p>
                        <span className={styles.uploadHint}>Recommended: 1920x600px, Max 2MB</span>
                    </div>
                </div>
            </div>

            {/* Welcome Message Editor */}
            <div className={styles.cmsPanel}>
                <div className={styles.cmsPanelHeader}>
                    <h3 className={styles.cmsPanelTitle}>Welcome Message</h3>
                </div>
                <div className={styles.cmsPanelBody}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Heading</label>
                        <input
                            type="text"
                            className={styles.formInput}
                            placeholder="e.g., Welcome to Milma"
                            defaultValue="Welcome to Milma - Kerala's Trusted Dairy Brand"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Message Content</label>
                        <div className={styles.richTextToolbar}>
                            <button className={styles.toolbarButton}><strong>B</strong></button>
                            <button className={styles.toolbarButton}><em>I</em></button>
                            <button className={styles.toolbarButton}><u>U</u></button>
                            <span className={styles.toolbarDivider}></span>
                            <button className={styles.toolbarButton}>•</button>
                            <button className={styles.toolbarButton}>1.</button>
                            <span className={styles.toolbarDivider}></span>
                            <button className={styles.toolbarButton}>🔗</button>
                        </div>
                        <textarea
                            className={styles.formTextarea}
                            rows={6}
                            placeholder="Enter welcome message..."
                            defaultValue="Delivering fresh, quality dairy products to Kerala families since 1980. Experience the taste of purity with our farm-fresh milk, ghee, and traditional dairy products."
                        />
                    </div>
                </div>
            </div>

            {/* Featured News Selector */}
            <div className={styles.cmsPanel}>
                <div className={styles.cmsPanelHeader}>
                    <h3 className={styles.cmsPanelTitle}>Featured News Highlights</h3>
                </div>
                <div className={styles.cmsPanelBody}>
                    <p className={styles.helperText}>Select up to 3 news articles to feature on the homepage.</p>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Select News Articles</label>
                        <select className={styles.formSelect} multiple size={5}>
                            <option value="1">New Dairy Collection Centers Announced - Feb 5, 2026</option>
                            <option value="2">Milma Wins Quality Excellence Award - Jan 28, 2026</option>
                            <option value="3">Expansion Plans for North Kerala - Jan 15, 2026</option>
                            <option value="4">Organic Milk Production Initiative - Dec 20, 2025</option>
                            <option value="5">Farmer Support Program Launch - Dec 10, 2025</option>
                        </select>
                        <span className={styles.fieldHint}>Hold Ctrl/Cmd to select multiple items</span>
                    </div>

                    <div className={styles.selectedItems}>
                        <div className={styles.selectedItem}>
                            <span>New Dairy Collection Centers Announced</span>
                            <button className={styles.removeItemButton}>×</button>
                        </div>
                        <div className={styles.selectedItem}>
                            <span>Milma Wins Quality Excellence Award</span>
                            <button className={styles.removeItemButton}>×</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links Manager */}
            <div className={styles.cmsPanel}>
                <div className={styles.cmsPanelHeader}>
                    <h3 className={styles.cmsPanelTitle}>Quick Links</h3>
                    <button className={styles.buttonSecondary}>
                        <Plus size={16} />
                        Add Link
                    </button>
                </div>
                <div className={styles.cmsPanelBody}>
                    <p className={styles.helperText}>Manage quick access links displayed on the homepage.</p>

                    <div className={styles.quickLinksList}>
                        {quickLinks.map((link) => (
                            <div key={link.id} className={styles.quickLinkItem}>
                                <div className={styles.quickLinkIcon}>{link.icon}</div>
                                <div className={styles.quickLinkContent}>
                                    <input
                                        type="text"
                                        className={styles.quickLinkInput}
                                        defaultValue={link.title}
                                        placeholder="Link title"
                                    />
                                    <div className={styles.quickLinkUrlRow}>
                                        <LinkIcon size={14} color="#94a3b8" />
                                        <input
                                            type="text"
                                            className={styles.quickLinkUrlInput}
                                            defaultValue={link.url}
                                            placeholder="/path-to-page"
                                        />
                                    </div>
                                </div>
                                <button
                                    className={styles.iconButtonDanger}
                                    onClick={() => removeQuickLink(link.id)}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.stickyActionBar}>
                <div className={styles.actionBarContent}>
                    <button className={styles.buttonSecondary}>
                        Cancel
                    </button>
                    <div className={styles.actionBarRight}>
                        <button className={styles.buttonOutline}>
                            <Save size={16} />
                            Save Draft
                        </button>
                        <button className={styles.buttonSuccess}>
                            <CheckCircle size={16} />
                            Publish Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHomePage;
