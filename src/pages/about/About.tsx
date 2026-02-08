import { useState } from 'react';
import {
    Building2,
    Users,
    FileText,
    History,
    Target,
    LayoutGrid,
    Download,
    ArrowUp,
    User,
    Shield,
    TrendingUp
} from 'lucide-react';
import classes from './About.module.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(t('about.tabs.profile'));

    const tabs = [
        { name: t('about.tabs.profile'), icon: <Building2 size={18} /> },
        { name: t('about.tabs.units'), icon: <LayoutGrid size={18} /> },
        { name: t('about.tabs.board'), icon: <Users size={18} /> },
        { name: t('about.tabs.performance'), icon: <History size={18} /> },
        { name: t('about.tabs.vision'), icon: <Target size={18} /> },
        { name: t('about.tabs.functional'), icon: <FileText size={18} /> },
    ];

    const stats = [
        { value: '1100+', label: t('about.stats.societies') },
        { value: '8000+', label: t('about.stats.agents') },
        { value: '5.75 Lakh', label: t('about.stats.sales') },
        { value: '3.90 Lakh', label: t('about.stats.procurement') },
    ];

    const units = [
        {
            name: 'Thiruvananthapuram Dairy',
            employees: 287,
            societies: 296,
            agents: 2100,
            procurement: '1,25,000 LPD',
            sales: '2,10,000 LPD'
        },
        {
            name: 'Kollam Dairy',
            employees: 161,
            societies: 228,
            agents: 1080,
            procurement: '87,000 LPD',
            sales: '1,20,000 LPD'
        },
        {
            name: 'Pathanamthitta Dairy',
            employees: 'N/A',
            societies: 163,
            agents: 1000,
            procurement: '35,000 LPD',
            sales: '65,000 LPD'
        },
        {
            name: 'Alappuzha District',
            employees: 'N/A',
            societies: 218,
            agents: 1180,
            procurement: '65,000 LPD',
            sales: '96,000 LPD'
        }
    ];

    const functionalAreas = [
        {
            title: t('services.list.farmers.title'),
            description: t('services.list.farmers.description')
        },
        {
            title: t('services.list.dealers.title'),
            description: t('services.list.dealers.description')
        },
        {
            title: t('services.list.quality.title'),
            description: t('services.list.quality.description')
        },
        {
            title: t('about.visionMission.commitment'),
            description: t('about.visionMission.missionText')
        }
    ];

    const boardMembers = [
        { name: t('about.board.members.mani.name'), designation: t('about.board.members.mani.role'), image: '/images/chairman.jpeg', isChairman: true },
        { name: 'Smt. Romy Jacob', designation: 'NDDB Representative' },
        { name: 'Smt. Sinila Unnikrishnan', designation: 'Govt. Representative (Dept. of Dairy Development)' },
        { name: 'Shri. N K Premlal', designation: 'Govt. Representative (KCMMF)' },
        { name: 'Shri. Rararaj R KAS', designation: 'Managing Director' },
        { name: 'Smt. Beena P V', designation: 'Director' },
        { name: 'Shri. Mundappally Thomas', designation: 'Director' },
        { name: 'Shri. Ayaparambu Ramachandran', designation: 'Director' },
        { name: 'Smt. J. Mehar', designation: 'Director' },
    ];

    const performanceStats = [
        { year: '2000-01', procurement: '231,649', sales: '288,334' },
        { year: '2005-06', procurement: '234,280', sales: '377,579' },
        { year: '2009-10', procurement: '191,866', sales: '435,861' },
    ];

    const renderContent = () => {
        if (activeTab === t('about.tabs.profile')) {
            return (
                <div className={classes.profileGrid}>
                    <div className={classes.profileContent}>
                        <h2>{t('about.profile.title')}</h2>
                        <div className={classes.underline}></div>

                        <p>{t('about.profile.p1')}</p>
                        <p>{t('about.profile.p2')}</p>
                        <p>{t('about.profile.p3')}</p>

                        <button className={classes.downloadBtn}>
                            {t('about.profile.download')} <Download size={18} style={{ marginLeft: '8px' }} />
                        </button>
                    </div>

                    <div className={classes.profileImage}>
                        <img src="/logo.png" alt="Milma Logo" className={classes.logoImage} />

                        <div className={classes.excellenceBadge}>
                            <ArrowUp size={24} className={classes.badgeIcon} />
                            <span>{t('about.profile.years')}</span>
                            <span>{t('about.profile.excellence')}</span>
                        </div>
                    </div>
                </div>
            );
        }


        if (activeTab === t('about.tabs.units')) {
            return (
                <div className={classes.profileContent}>
                    <h2>{t('about.units.title')}</h2>
                    <div className={classes.underline}></div>
                    <p style={{ marginBottom: '2rem' }}>{t('about.units.subtitle')}</p>

                    <div className={classes.profileImageContainer}>
                        <img src="/images/about/Screenshot 2026-02-08 111308.png" alt="Milma Products" className={classes.organizationImage} />
                    </div>

                    <div className={classes.unitGrid}>
                        {units.map((unit, index) => (
                            <div key={index} className={classes.unitCard}>
                                <h3>{unit.name}</h3>
                                <ul className={classes.unitStats}>
                                    {unit.employees !== 'N/A' && <li><span>{t('about.units.employees')}:</span> <strong>{unit.employees}</strong></li>}
                                    <li><span>{t('about.units.societies')}:</span> <strong>{unit.societies}</strong></li>
                                    <li><span>{t('about.units.agents')}:</span> <strong>{unit.agents}</strong></li>
                                    <li><span>{t('about.units.procurement')}:</span> <strong>{unit.procurement}</strong></li>
                                    <li><span>{t('about.units.sales')}:</span> <strong>{unit.sales}</strong></li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeTab === t('about.tabs.board')) {
            return (
                <div className={classes.profileContent}>
                    <h2>{t('about.board.title')}</h2>
                    <div className={classes.underline}></div>
                    <p style={{ marginBottom: '3rem' }}>{t('about.board.subtitle')}</p>

                    <div className={classes.boardGrid}>
                        {boardMembers.map((member, index) => (
                            <div key={index} className={`${classes.boardCard} ${member.isChairman ? classes.chairmanCard : ''}`}>
                                <div className={classes.boardMemberImage}>
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <User size={64} color="#991b1b" style={{ opacity: 0.5 }} />
                                    )}
                                </div>
                                <h3>{member.name}</h3>
                                <p className={classes.designation}>{member.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeTab === t('about.tabs.performance')) {
            return (
                <div className={classes.profileContent}>
                    <h2>{t('about.performance.title')}</h2>
                    <div className={classes.underline}></div>
                    <div style={{ marginBottom: '2rem' }}>
                        <p>{t('about.performance.description')}</p>
                    </div>

                    <div className={classes.statsTableContainer}>
                        <table className={classes.statsTable}>
                            <thead>
                                <tr>
                                    <th>{t('about.performance.colYear')}</th>
                                    <th>{t('about.performance.colProc')}</th>
                                    <th>{t('about.performance.colSales')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {performanceStats.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.year}</td>
                                        <td>{row.procurement}</td>
                                        <td>{row.sales}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                            {t('about.performance.footer')}
                        </p>
                    </div>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <button className={classes.downloadBtn}>
                            {t('about.performance.downloadFull')} <Download size={18} style={{ marginLeft: '8px' }} />
                        </button>
                    </div>
                </div>
            );
        }

        if (activeTab === t('about.tabs.vision')) {
            return (
                <div className={classes.visionMissionSection}>
                    <div className={classes.visionMissionHeader}>
                        <h2>{t('about.visionMission.title')}</h2>
                        <div className={classes.headerUnderline}></div>
                    </div>

                    <div className={classes.visionMissionGrid}>
                        <div className={`${classes.vmCard} ${classes.missionCard}`}>
                            <div className={classes.vmHeaderRow}>
                                <div className={`${classes.vmIconBox} ${classes.missionIconBox}`}>
                                    <Shield size={22} strokeWidth={2.5} />
                                </div>
                                <h3 className={`${classes.vmTitle} ${classes.missionTitle}`}>{t('about.visionMission.mission')}</h3>
                            </div>
                            <div className={classes.vmContent}>
                                <span className={classes.vmQuote}>“</span>
                                <p className={classes.vmText}>{t('about.visionMission.missionText')}</p>
                            </div>
                            <div className={classes.vmFooter} style={{ justifyContent: 'flex-end' }}>
                                <span className={classes.footerLabel}>{t('about.visionMission.commitment')}</span>
                            </div>
                        </div>

                        <div className={`${classes.vmCard} ${classes.visionCard}`}>
                            <div className={classes.vmHeaderRow}>
                                <div className={`${classes.vmIconBox} ${classes.visionIconBox}`}>
                                    <TrendingUp size={22} strokeWidth={2.5} />
                                </div>
                                <h3 className={`${classes.vmTitle} ${classes.visionTitle}`}>{t('about.visionMission.vision')}</h3>
                            </div>
                            <div className={classes.vmContent}>
                                <span className={classes.vmQuote}>“</span>
                                <p className={classes.vmText}>{t('about.visionMission.visionText')}</p>
                            </div>
                            <div className={classes.vmFooter}>
                                <div className={classes.badgeGoal}>
                                    <ArrowUp size={16} strokeWidth={3} />
                                    <div>
                                        <div className={classes.badgeValue}>10-15%</div>
                                        <div className={classes.badgeLabel}>{t('about.visionMission.annualGrowth')}</div>
                                    </div>
                                </div>
                                <span className={classes.footerLabel}>{t('about.visionMission.strategicGoal')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeTab === t('about.tabs.functional')) {
            return (
                <div className={classes.profileContent}>
                    <h2>{t('about.functional.title')}</h2>
                    <div className={classes.underline}></div>
                    <p style={{ marginBottom: '3rem' }}>{t('about.functional.subtitle')}</p>

                    <div className={classes.functionalGrid}>
                        {functionalAreas.map((area, index) => (
                            <div key={index} className={classes.functionalCard}>
                                <h3>{area.title}</h3>
                                <p>{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className={classes.pageContainer}>
            {/* Hero Section */}
            <div className={classes.hero}>
                <div className={classes.badgeContainer}>
                    <span className={classes.legacyBadge}>{t('about.hero.legacy')}</span>
                </div>
                <h1>{t('about.hero.title')}</h1>
                <p>{t('about.hero.description')}</p>
            </div>

            {/* Navigation Bar */}
            <div className={classes.navBarContainer}>
                <div className={classes.navBar}>
                    {tabs.map((tab) => (
                        <div
                            key={tab.name}
                            className={`${classes.navItem} ${activeTab === tab.name ? classes.navItemActive : ''}`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            {tab.icon}
                            <span>{tab.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className={classes.contentSection}>
                {renderContent()}
            </div>

            {/* Stats Section */}
            <div className={classes.statsSection}>
                {stats.map((stat, index) => (
                    <div key={index} className={classes.statItem}>
                        <h3>{stat.value}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
