import { TrendingUp, Zap, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import classes from './UpcomingProjects.module.css';

const UpcomingProjects = () => {
    const initiatives = [
        {
            phase: 'PHASE 1: EXPANSION',
            start: 'Oct 2026',
            title: 'Mega Dairy Processing Hub - Ernakulam',
            desc: 'A state-of-the-art processing facility integrated with advanced IoT-driven quality monitoring systems. This project aims to centralize logistics and improve product shelf life through ultra-high-temperature (UHT) treatment technology.',
            impact: [
                { icon: <TrendingUp size={20} />, label: '40% Capacity Increase', sub: 'Daily processing volume' },
                { icon: <Users size={20} />, label: '5,000+ Farmers', sub: 'Direct benefit from market reach' }
            ],
            image: '/images/insights/factory.png'
        },
        {
            phase: 'SUSTAINABILITY',
            start: 'Jan 2027',
            title: 'Green Energy Solar Initiative',
            desc: 'Transitioning 200 rural chilling centers to 100% solar power. This initiative will reduce carbon footprint and significantly lower operational costs for local village cooperatives, ensuring higher margins for farmers.',
            impact: [
                { icon: <Zap size={20} />, label: 'Net Zero Emissions', sub: 'At chilling center level' },
                { icon: <TrendingUp size={20} />, label: '₹12 Cr Savings', sub: 'Annual energy expenditure' }
            ],
            image: '/images/insights/farm.png'
        },
        {
            phase: 'INNOVATION',
            start: 'June 2027',
            title: 'Advanced Cattle Feed Research Lab',
            desc: 'Establishing a specialized laboratory to develop high-nutrient, organic cattle feed formulations. The lab will provide personalized feeding charts for farmers based on bovine health and breed types.',
            impact: [
                { icon: <TrendingUp size={20} />, label: 'Better Yields', sub: '12% Increase in milk fat content' },
                { icon: <Users size={20} />, label: 'Animal Welfare', sub: 'Reduction in bovine diseases' }
            ],
            image: '/images/insights/products.png'
        }
    ];

    return (
        <div className={classes.page}>
            <div className={classes.hero}>
                <div className={classes.heroHeader}>
                    <Link to="/insights" className={classes.backLink}>
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                    <h1>Upcoming Projects Roadmap</h1>
                    <div className={classes.heroBreadcrumb}>HOME / INSIGHTS / <span>UPCOMING PROJECTS</span></div>
                    <p className={classes.heroDesc}>
                        Visualizing the future of dairy excellence. Explore our strategic initiatives
                        designed to empower farmers and deliver premium nutrition to every household.
                    </p>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.roadmapGrid}>
                    {initiatives.map((item, index) => (
                        <div key={index} className={classes.row}>
                            <div className={classes.imageWrapper}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={classes.contentWrapper}>
                                <div className={classes.meta}>
                                    <span className={classes.phase}>{item.phase}</span>
                                    <span className={classes.start}>• Estimated Start: {item.start}</span>
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>

                                <div className={classes.impactGrid}>
                                    {item.impact.map((stat, sIdx) => (
                                        <div key={sIdx} className={classes.statBox}>
                                            <div className={classes.statIcon}>{stat.icon}</div>
                                            <div>
                                                <h4>{stat.label}</h4>
                                                <span>{stat.sub}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={classes.ctaFooter}>
                    <h3>Partner with us in our growth story</h3>
                    <p>Are you a technology provider or development partner looking to collaborate on these initiatives? Reach out to our project management office.</p>
                    <div className={classes.btnGroup}>
                        <button className={classes.primaryBtn}>Download Roadmap PDF</button>
                        <button className={classes.secondaryBtn}>Contact Project Office</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingProjects;
