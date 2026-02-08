import { useState } from 'react';
import styles from './Admin.module.css';
import {
    Settings, Globe, BarChart, CreditCard,
    Database, Search, Save, Globe as GlobalIcon,
    Layout, Palette, RotateCcw
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface SEOConfig {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    robotsTxt: string;
}

interface IntegrationConfig {
    googleAnalyticsId: string;
    paymentGatewayKey: string;
    erpEndpoint: string;
    erpApiKey: string;
}

interface SiteMetadata {
    siteName: string;
    logoUrl: string;
    faviconUrl: string;
    footerText: string;
}

const AdminSettings = () => {
    const [activeTab, setActiveTab] = useState<'metadata' | 'seo' | 'language' | 'integrations' | 'theme'>('metadata');
    const { colors, updateColors, resetTheme } = useTheme();

    // Mock State
    const [metadata, setMetadata] = useState<SiteMetadata>({
        siteName: 'Milma - Kerala Co-operative Milk Marketing Federation',
        logoUrl: '/assets/logo.png',
        faviconUrl: '/assets/favicon.ico',
        footerText: '© 2026 Kerala Co-operative Milk Marketing Federation Ltd.'
    });

    const [seo, setSeo] = useState<SEOConfig>({
        metaTitle: 'Milma | The goodness of Kerala',
        metaDescription: 'Official website of Milma, providing high quality milk and milk products.',
        keywords: 'milk, kerala, cooperative, dairy, butter, ghee',
        robotsTxt: 'User-agent: *\nAllow: /'
    });

    const [integrations, setIntegrations] = useState<IntegrationConfig>({
        googleAnalyticsId: 'UA-XXXXXXXX-X',
        paymentGatewayKey: 'rzp_test_1234567890',
        erpEndpoint: 'https://api.erp.milma.com/v1',
        erpApiKey: 'sk_live_XXXXXXXXXXXXXXXX'
    });

    const [languages, setLanguages] = useState([
        { code: 'en', name: 'English', enabled: true, default: true },
        { code: 'ml', name: 'Malayalam (മലയാളം)', enabled: true, default: false },
        { code: 'hi', name: 'Hindi (हिंदी)', enabled: false, default: false }
    ]);

    const handleMetadataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMetadata({ ...metadata, [e.target.name]: e.target.value });
    };

    const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSeo({ ...seo, [e.target.name]: e.target.value });
    };

    const handleIntegrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntegrations({ ...integrations, [e.target.name]: e.target.value });
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateColors({ [e.target.name]: e.target.value });
    };

    const toggleLanguage = (code: string) => {
        setLanguages(languages.map(lang =>
            lang.code === code ? { ...lang, enabled: !lang.enabled } : lang
        ));
    };

    return (
        <div>
            {/* Government Theme Header */}
            <div className={styles.govHeader}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 className={styles.govTitle}>System Configuration</h1>
                        <p className={styles.govSubtitle}>Kerala Co-operative Milk Marketing Federation Ltd. (TRCMPU)</p>
                    </div>
                </div>
            </div>

            <div className={styles.govTableContainer} style={{ background: '#f8fafc', minHeight: '600px', display: 'flex' }}>

                {/* VERTICAL SIDEBAR TABS */}
                <div style={{ width: '250px', background: 'white', borderRight: '1px solid #e2e8f0', padding: '1rem 0' }}>
                    <div
                        className={activeTab === 'metadata' ? styles.settingsTabActive : styles.settingsTab}
                        onClick={() => setActiveTab('metadata')}
                    >
                        <Layout size={18} /> Site Metadata
                    </div>
                    <div
                        className={activeTab === 'theme' ? styles.settingsTabActive : styles.settingsTab}
                        onClick={() => setActiveTab('theme')}
                    >
                        <Palette size={18} /> Theme & Branding
                    </div>
                    <div
                        className={activeTab === 'seo' ? styles.settingsTabActive : styles.settingsTab}
                        onClick={() => setActiveTab('seo')}
                    >
                        <Search size={18} /> SEO Settings
                    </div>
                    <div
                        className={activeTab === 'language' ? styles.settingsTabActive : styles.settingsTab}
                        onClick={() => setActiveTab('language')}
                    >
                        <Globe size={18} /> Language & Region
                    </div>
                    <div
                        className={activeTab === 'integrations' ? styles.settingsTabActive : styles.settingsTab}
                        onClick={() => setActiveTab('integrations')}
                    >
                        <Database size={18} /> Integrations & API
                    </div>
                </div>

                {/* CONTENT AREA */}
                <div style={{ flex: 1, padding: '2rem' }}>

                    {/* METADATA TAB */}
                    {activeTab === 'metadata' && (
                        <div className={styles.settingsContent}>
                            <h3 className={styles.govEditorSectionTitle}>
                                <Layout size={20} /> General Site Information
                            </h3>
                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Site Name</label>
                                <input
                                    type="text"
                                    name="siteName"
                                    className={styles.govInputFormal}
                                    value={metadata.siteName}
                                    onChange={handleMetadataChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Logo URL</label>
                                <input
                                    type="text"
                                    name="logoUrl"
                                    className={styles.govInputFormal}
                                    value={metadata.logoUrl}
                                    onChange={handleMetadataChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Favicon URL</label>
                                <input
                                    type="text"
                                    name="faviconUrl"
                                    className={styles.govInputFormal}
                                    value={metadata.faviconUrl}
                                    onChange={handleMetadataChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Footer Text</label>
                                <input
                                    type="text"
                                    name="footerText"
                                    className={styles.govInputFormal}
                                    value={metadata.footerText}
                                    onChange={handleMetadataChange}
                                />
                            </div>
                            <button className={styles.buttonSuccess} style={{ marginTop: '1rem' }}>
                                <Save size={18} /> Save Metadata
                            </button>
                        </div>
                    )}

                    {/* THEME TAB */}
                    {activeTab === 'theme' && (
                        <div className={styles.settingsContent}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
                                <h3 className={styles.govEditorSectionTitle} style={{ margin: 0, border: 'none' }}>
                                    <Palette size={20} /> Visual Identity & Theme
                                </h3>
                                <button
                                    onClick={resetTheme}
                                    className={styles.buttonSecondary}
                                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
                                >
                                    <RotateCcw size={14} /> Reset to Default
                                </button>
                            </div>

                            <p className={styles.helperText}>
                                Customize the global color scheme. These changes will reflect across all pages and components instantly.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>Primary Brand Color</label>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <input
                                            type="color"
                                            name="primary"
                                            className={styles.govInputFormal}
                                            style={{ width: '60px', height: '45px', padding: '2px', cursor: 'pointer' }}
                                            value={colors.primary}
                                            onChange={handleColorChange}
                                        />
                                        <input
                                            type="text"
                                            value={colors.primary}
                                            readOnly
                                            className={styles.govInputFormal}
                                            style={{ fontFamily: 'monospace', fontSize: '0.9rem', background: '#f8fafc' }}
                                        />
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem', display: 'block' }}>Used for buttons, headers, and highlights.</span>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>Gold Accent Color</label>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <input
                                            type="color"
                                            name="gold"
                                            className={styles.govInputFormal}
                                            style={{ width: '60px', height: '45px', padding: '2px', cursor: 'pointer' }}
                                            value={colors.gold}
                                            onChange={handleColorChange}
                                        />
                                        <input
                                            type="text"
                                            value={colors.gold}
                                            readOnly
                                            className={styles.govInputFormal}
                                            style={{ fontFamily: 'monospace', fontSize: '0.9rem', background: '#f8fafc' }}
                                        />
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem', display: 'block' }}>Used for stars, special badges, and secondary buttons.</span>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>Global Background</label>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <input
                                            type="color"
                                            name="bg"
                                            className={styles.govInputFormal}
                                            style={{ width: '60px', height: '45px', padding: '2px', cursor: 'pointer' }}
                                            value={colors.bg}
                                            onChange={handleColorChange}
                                        />
                                        <input
                                            type="text"
                                            value={colors.bg}
                                            readOnly
                                            className={styles.govInputFormal}
                                            style={{ fontFamily: 'monospace', fontSize: '0.9rem', background: '#f8fafc' }}
                                        />
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem', display: 'block' }}>Sets the main background color of the whole site.</span>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>Primary Text Color</label>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <input
                                            type="color"
                                            name="textDark"
                                            className={styles.govInputFormal}
                                            style={{ width: '60px', height: '45px', padding: '2px', cursor: 'pointer' }}
                                            value={colors.textDark}
                                            onChange={handleColorChange}
                                        />
                                        <input
                                            type="text"
                                            value={colors.textDark}
                                            readOnly
                                            className={styles.govInputFormal}
                                            style={{ fontFamily: 'monospace', fontSize: '0.9rem', background: '#f8fafc' }}
                                        />
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem', display: 'block' }}>Main color for headings and body text.</span>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-bg-slate)', borderRadius: '12px', border: '1px solid var(--color-border-slate)' }}>
                                <h4 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor' }}></div>
                                    Live Preview Mode
                                </h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-tertiary)', marginBottom: '1.5rem' }}>
                                    Colors are applied in real-time. You can navigate the admin panel to see how it looks.
                                </p>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button className={styles.buttonPrimary} style={{ background: 'var(--color-primary)', color: 'var(--color-text-light)' }}>Example Button</button>
                                    <button className={styles.buttonOutline} style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>Outline Button</button>
                                </div>
                            </div>

                            <button className={styles.buttonSuccess} style={{ marginTop: '2rem', width: '100%' }}>
                                <Save size={18} /> Permanently Save Theme Preferences
                            </button>
                        </div>
                    )}

                    {/* SEO TAB */}
                    {activeTab === 'seo' && (
                        <div className={styles.settingsContent}>
                            <h3 className={styles.govEditorSectionTitle}>
                                <Search size={20} /> Search Engine Optimization
                            </h3>
                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Default Meta Title</label>
                                <input
                                    type="text"
                                    name="metaTitle"
                                    className={styles.govInputFormal}
                                    value={seo.metaTitle}
                                    onChange={handleSeoChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Default Meta Description</label>
                                <textarea
                                    name="metaDescription"
                                    className={styles.govInputFormal}
                                    rows={3}
                                    value={seo.metaDescription}
                                    onChange={handleSeoChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Global Keywords</label>
                                <input
                                    type="text"
                                    name="keywords"
                                    className={styles.govInputFormal}
                                    value={seo.keywords}
                                    onChange={handleSeoChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.govFormLabel}>Robots.txt Content</label>
                                <textarea
                                    name="robotsTxt"
                                    className={styles.govInputFormal}
                                    rows={4}
                                    style={{ fontFamily: 'monospace' }}
                                    value={seo.robotsTxt}
                                    onChange={handleSeoChange}
                                />
                            </div>
                            <button className={styles.buttonSuccess} style={{ marginTop: '1rem' }}>
                                <Save size={18} /> Update SEO Config
                            </button>
                        </div>
                    )}

                    {/* LANGUAGE TAB */}
                    {activeTab === 'language' && (
                        <div className={styles.settingsContent}>
                            <h3 className={styles.govEditorSectionTitle}>
                                <GlobalIcon size={20} /> Language & Region
                            </h3>
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {languages.map((lang) => (
                                    <div key={lang.code} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '1rem',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '6px',
                                        background: lang.enabled ? 'white' : '#f8fafc'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{
                                                width: '40px', height: '40px',
                                                borderRadius: '50%',
                                                background: '#e0f2fe',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontWeight: 'bold', color: '#0369a1'
                                            }}>
                                                {lang.code.toUpperCase()}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600, color: '#334155' }}>{lang.name}</div>
                                                {lang.default && <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>Default Language</span>}
                                            </div>
                                        </div>
                                        <div className={styles.toggleContainer} style={{ margin: 0, padding: 0, border: 'none', background: 'transparent' }}>
                                            <label className={styles.toggleLabel}>
                                                <input
                                                    type="checkbox"
                                                    className={styles.toggleInput}
                                                    checked={lang.enabled}
                                                    onChange={() => toggleLanguage(lang.code)}
                                                    disabled={lang.default}
                                                />
                                                <div className={styles.toggleSwitch}></div>
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className={styles.buttonSuccess} style={{ marginTop: '1.5rem' }}>
                                <Save size={18} /> Save Language Preferences
                            </button>
                        </div>
                    )}

                    {/* INTEGRATIONS TAB */}
                    {activeTab === 'integrations' && (
                        <div className={styles.settingsContent}>
                            <h3 className={styles.govEditorSectionTitle}>
                                <Database size={20} /> Third-Party Integrations
                            </h3>

                            <div className={styles.govEditorSection}>
                                <h4 className={styles.govEditorSectionTitle} style={{ fontSize: '1rem', color: '#475569' }}>
                                    <BarChart size={16} /> Analytics & Tracking
                                </h4>
                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>Google Analytics Measurement ID</label>
                                    <input
                                        type="text"
                                        name="googleAnalyticsId"
                                        className={styles.govInputFormal}
                                        value={integrations.googleAnalyticsId}
                                        onChange={handleIntegrationChange}
                                        placeholder="G-XXXXXXXXXX"
                                    />
                                </div>
                            </div>

                            <div className={styles.govEditorSection}>
                                <h4 className={styles.govEditorSectionTitle} style={{ fontSize: '1rem', color: '#475569' }}>
                                    <CreditCard size={16} /> Payment Gateway
                                </h4>
                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>Razorpay / Stripe API Key (Public)</label>
                                    <input
                                        type="password"
                                        name="paymentGatewayKey"
                                        className={styles.govInputFormal}
                                        value={integrations.paymentGatewayKey}
                                        onChange={handleIntegrationChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.govEditorSection} style={{ borderBottom: 'none' }}>
                                <h4 className={styles.govEditorSectionTitle} style={{ fontSize: '1rem', color: '#475569' }}>
                                    <Settings size={16} /> ERP Integration
                                </h4>
                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>ERP API Endpoint</label>
                                    <input
                                        type="text"
                                        name="erpEndpoint"
                                        className={styles.govInputFormal}
                                        value={integrations.erpEndpoint}
                                        onChange={handleIntegrationChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.govFormLabel}>ERP API Secret Key</label>
                                    <input
                                        type="password"
                                        name="erpApiKey"
                                        className={styles.govInputFormal}
                                        value={integrations.erpApiKey}
                                        onChange={handleIntegrationChange}
                                    />
                                </div>
                            </div>

                            <button className={styles.buttonSuccess} style={{ width: '100%' }}>
                                <Save size={18} /> Save Integration Settings
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
