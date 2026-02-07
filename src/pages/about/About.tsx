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

const About = () => {
    const [activeTab, setActiveTab] = useState('Organization Profile');

    const tabs = [
        { name: 'Organization Profile', icon: <Building2 size={18} /> },
        { name: 'Units of TRCMPU', icon: <LayoutGrid size={18} /> },
        { name: 'Board of Directors', icon: <Users size={18} /> },
        { name: 'Past Performance', icon: <History size={18} /> },
        { name: 'Vision & Mission', icon: <Target size={18} /> },
        { name: 'Functional Areas', icon: <FileText size={18} /> },
    ];

    // Updated stats based on "Key Functional Area" text
    const stats = [
        { value: '1100+', label: 'PRIMARY SOCIETIES' },
        { value: '8000+', label: 'DISTRIBUTION AGENTS' },
        { value: '5.75 Lakh', label: 'LITERS SOLD DAILY' },
        { value: '3.90 Lakh', label: 'LITERS PROCURED DAILY' },
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
            title: 'Procurement & Inputs',
            description: 'The primary objective of the Union is to procure marketable surplus milk produced by the dairy farmers affiliated to the primary dairy co-operatives. The Union is procuring approximately 3.90 lakh litres per day from nearly 1100 primary societies. The milk collection is exclusively routed through 87 Bulk Milk Chilling Centres.'
        },
        {
            title: 'Marketing',
            description: 'TRCMPU is selling approximately 5.75 lakh litres of fluid milk per day. The major variants are "TONED", "DOUBLE TONED" and "RICH". The Union has engaged more than 8000 agents and 45 wholesale dealers. 5 marketing hubs are in operation to ensure availability in every nook and corner.'
        },
        {
            title: 'Production',
            description: 'Undertakes all research and development activities for unfolding new products in accordance with dynamic consumer taste. Controls the entire functions of the dairy plants strictly following food safety management system guidelines. Committed to bringing utmost quality products through cutting-edge technologies.'
        },
        {
            title: 'Projects',
            description: 'Functions as the End Implementing Agency of various dairy development schemes funded by State and Central Government agencies. Responsible for formulation, implementation, and monitoring of these schemes and providing technical support to the three modern dairy plants.'
        },
        {
            title: 'Finance',
            description: 'Finance and Accounts Department is responsible for fund management, accounting, auditing, and ensuring value for money.'
        },
        {
            title: 'Quality Assurance',
            description: 'Plays a vital role in perpetuating industry-leading quality parameters for each product strictly in adherence with FSMS guidelines. All three dairy production units are accredited with ISO 22000:2018.'
        },
        {
            title: 'HRD & Administration',
            description: 'Ensures effective utilization of human resources. Committed to keeping manpower motivated, efficient, and skillful through continuous training and development programs.'
        }
    ];

    const boardMembers = [
        { name: 'Smt. Mani Viswanath', designation: 'Chairman', image: '/images/chairman.jpeg', isChairman: true },
        { name: 'Smt. Romy Jacob', designation: 'NDDB Representative' },
        { name: 'Smt. Sinila Unnikrishnan', designation: 'Govt. Representative (Dept. of Dairy Development)' },
        { name: 'Shri. N K Premlal', designation: 'Govt. Representative (KCMMF)' },
        { name: 'Shri. Rararaj R KAS', designation: 'Managing Director' },
        { name: 'Smt. Beena P V', designation: 'Director' },
        { name: 'Shri. Mundappally Thomas', designation: 'Director' },
        { name: 'Shri. Ayaparambu Ramachandran', designation: 'Director' },
        { name: 'Shri. T K Prathula Chandran', designation: 'Director' },
        { name: 'Smt. J. Mehar', designation: 'Director' },
        { name: 'Shri. Vasudevan Unni P G', designation: 'Director' },
        { name: 'Shri. K.R. Mohanan Pillai', designation: 'Director' },
        { name: 'Shri. M. Krishnankutti', designation: 'Director' },
        { name: 'Shri. K. Krishnan Potti', designation: 'Director' },
        { name: 'Shri. T.K.Venugopal', designation: 'Director' },
        { name: 'Shri. Ajithsingh. W.R', designation: 'Director' },
    ];

    const performanceStats = [
        { year: '2000-01', procurement: '231,649', sales: '288,334' },
        { year: '2005-06', procurement: '234,280', sales: '377,579' },
        { year: '2009-10', procurement: '191,866', sales: '435,861' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Organization Profile':
                return (
                    <div className={classes.profileGrid}>
                        <div className={classes.profileContent}>
                            <h2>Organization Profile</h2>
                            <div className={classes.underline}></div>

                            <p>
                                Thiruvananthapuram Regional Co-operative Milk Producers' Union Ltd (TRCMPU) was registered in 1985
                                as a Regional Milk Union covering four southern districts of Kerala: Thiruvananthapuram, Kollam,
                                Alappuzha, and Pathanamthitta.
                            </p>
                            <p>
                                TRCMPU has successfully completed over 25 years of operation. Starting from the old Thiruvananthapuram
                                Dairy with 40,000 LPD capacity, we have expanded significantly. We commissioned plants at Kollam (1986),
                                Alappuzha (1989), and a new 1 Lakh LPD plant at Thiruvananthapuram (1992).
                            </p>
                            <p>
                                Today, our procurement and sales utilize state-of-the-art technology, and we market a wide range of products
                                under the "Milma" brand, including Ghee, Butter, Ice-cream, Curd, Peda, and more.
                            </p>

                            <button className={classes.downloadBtn}>
                                Download History PDF <Download size={18} style={{ marginLeft: '8px' }} />
                            </button>
                        </div>

                        <div className={classes.profileImage}>
                            <img src="/logo.png" alt="Milma Logo" className={classes.logoImage} />

                            <div className={classes.excellenceBadge}>
                                <ArrowUp size={24} className={classes.badgeIcon} />
                                <span>40+ Years</span>
                                <span>of Excellence</span>
                            </div>
                        </div>
                    </div>
                );
            case 'Units of TRCMPU':
                return (
                    <div className={classes.profileContent}>
                        <h2>Units of TRCMPU</h2>
                        <div className={classes.underline}></div>
                        <p style={{ marginBottom: '2rem' }}>TRCMPU operates through advanced dairies and extensive networks across southern Kerala.</p>

                        <div className={classes.unitGrid}>
                            {units.map((unit, index) => (
                                <div key={index} className={classes.unitCard}>
                                    <h3>{unit.name}</h3>
                                    <ul className={classes.unitStats}>
                                        {unit.employees !== 'N/A' && <li><span>Employees:</span> <strong>{unit.employees}</strong></li>}
                                        <li><span>Societies:</span> <strong>{unit.societies}</strong></li>
                                        <li><span>Agents:</span> <strong>{unit.agents}</strong></li>
                                        <li><span>Procurement:</span> <strong>{unit.procurement}</strong></li>
                                        <li><span>Sales:</span> <strong>{unit.sales}</strong></li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'Board of Directors':
                return (
                    <div className={classes.profileContent}>
                        <h2>Board of Directors</h2>
                        <div className={classes.underline}></div>
                        <p style={{ marginBottom: '3rem' }}>The visionary leadership guiding TRCMPU towards excellence.</p>

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
                                    {member.isChairman && (
                                        <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
                                            Thiruvananthapuram Regional Co-operative Milk Producers' Union Ltd
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'Past Performance':
                return (
                    <div className={classes.profileContent}>
                        <h2>Past Performance</h2>
                        <div className={classes.underline}></div>
                        <div style={{ marginBottom: '2rem' }}>
                            <p>
                                The union has experienced consistent growth, specifically noting a "two-digit growth over the years"
                                in both procurement and sales. Significant infrastructure improvements include the capacity expansion
                                of the Kollam Dairy to 1 Lakh LPD and the Thiruvananthapuram Dairy to 2 Lakh LPD.
                            </p>
                        </div>

                        <div className={classes.statsTableContainer}>
                            <table className={classes.statsTable}>
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Milk Procurement (LPD)</th>
                                        <th>Milk Sales (LPD)</th>
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
                                * Selected historical data points showing long-term growth trend.
                            </p>
                        </div>

                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <button className={classes.downloadBtn}>
                                Download Full Report <Download size={18} style={{ marginLeft: '8px' }} />
                            </button>
                        </div>
                    </div>
                );
            case 'Vision & Mission':
                return (
                    <div className={classes.visionMissionSection}>
                        <div className={classes.visionMissionHeader}>
                            <h2>Our Vision & Mission</h2>
                            <div className={classes.headerUnderline}></div>
                        </div>

                        <div className={classes.visionMissionGrid}>
                            {/* Mission Card */}
                            <div className={`${classes.vmCard} ${classes.missionCard}`}>
                                <div className={classes.vmHeaderRow}>
                                    <div className={`${classes.vmIconBox} ${classes.missionIconBox}`}>
                                        <Shield size={22} strokeWidth={2.5} />
                                    </div>
                                    <h3 className={`${classes.vmTitle} ${classes.missionTitle}`}>Mission</h3>
                                </div>

                                <div className={classes.vmContent}>
                                    <span className={classes.vmQuote}>“</span>
                                    <p className={classes.vmText}>
                                        To become the leading organisation in the food and nutrition sector in the region,
                                        through the attainment of its marketing objectives and to become nucleus of an
                                        endeavour for an accelerated development of the rural economy of the region further
                                        it would aspire to function as professional, profitable and socially responsible
                                        organisation ensuring better returns to farmers, primary societies as well as its
                                        customers by providing good value for their money.
                                    </p>
                                </div>

                                <div className={classes.vmFooter} style={{ justifyContent: 'flex-end' }}>
                                    <span className={classes.footerLabel}>Core Commitment</span>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className={`${classes.vmCard} ${classes.visionCard}`}>
                                <div className={classes.vmHeaderRow}>
                                    <div className={`${classes.vmIconBox} ${classes.visionIconBox}`}>
                                        <TrendingUp size={22} strokeWidth={2.5} />
                                    </div>
                                    <h3 className={`${classes.vmTitle} ${classes.visionTitle}`}>Vision</h3>
                                </div>

                                <div className={classes.vmContent}>
                                    <span className={classes.vmQuote}>“</span>
                                    <p className={classes.vmText}>
                                        To achieve the status of the best union in the country in turnover and profitability
                                        by achieving 10-15% growth per annum by accelerating the growth in milk production
                                        and sale of milk and milk products and diversifying into related areas in the food sector.
                                    </p>
                                </div>

                                <div className={classes.vmFooter}>
                                    <div className={classes.badgeGoal}>
                                        <ArrowUp size={16} strokeWidth={3} />
                                        <div>
                                            <div className={classes.badgeValue}>10-15%</div>
                                            <div className={classes.badgeLabel}>Annual Growth</div>
                                        </div>
                                    </div>
                                    <span className={classes.footerLabel}>Strategic Goal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Functional Areas':
                return (
                    <div className={classes.profileContent}>
                        <h2>Key Functional Areas</h2>
                        <div className={classes.underline}></div>
                        <p style={{ marginBottom: '3rem' }}>The key departments driving our success and efficiency.</p>

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
            default:
                return null;
        }
    };

    return (
        <div className={classes.pageContainer}>
            {/* Hero Section */}
            <div className={classes.hero}>
                <div className={classes.badgeContainer}>
                    <span className={classes.legacyBadge}>Our Legacy</span>
                </div>
                <h1>Nurturing Kerala Since 1980</h1>
                <p>A cooperative movement dedicated to empowering farmers and delivering pure dairy goodness to every home.</p>
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
