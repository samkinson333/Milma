import { Link } from 'react-router-dom';
import classes from './Insights.module.css';

const Insights = () => {
    const sections = [
        {
            tag: 'TRANSPARENCY',
            title: 'Tenders',
            desc: 'Explore both open/closed procurement tenders for our ongoing operational requirements.',
            link: '/insights/tenders',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
        },
        {
            tag: 'RESOURCES',
            title: 'Other Downloads',
            desc: 'Find reports, official forms, policy documents, and corporate brochures in one place.',
            link: '/insights/downloads',
            image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800'
        },
        {
            tag: 'EXCELLENCE',
            title: 'Ongoing Projects',
            desc: "Explore current infrastructure and technology initiatives modernizing Kerala's dairy sector.",
            link: '/insights/ongoing-projects',
            image: '/images/insights/farm.png'
        },
        {
            tag: 'FUTURE VISION',
            title: 'Upcoming Projects',
            desc: 'Explore the next generation of Milma facilities and community-centered programs.',
            link: '/insights/upcoming-projects',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <div className={classes.insightsPage}>
            <div className={classes.hero}>
                <h1>Our <span className={classes.highlight}>Insights</span> & <br />Initiatives</h1>
                <p>
                    Explain the transparency, progress, and future vision of Milma. From
                    official documentation to ground-breaking dairy projects across Kerala.
                </p>
                <div className={classes.heroUnderline}></div>
            </div>

            <div className={classes.container}>
                <div className={classes.mainGrid}>
                    {sections.map((section, index) => (
                        <Link to={section.link} key={index} className={classes.mainCard}>
                            <div className={classes.cardBg} style={{ backgroundImage: `url(${section.image})` }}></div>
                            <div className={classes.cardOverlay}></div>
                            <div className={classes.cardContent}>
                                <span className={classes.cardTag}>{section.tag}</span>
                                <h2 className={classes.cardTitle}>{section.title}</h2>
                                <p className={classes.cardDesc}>{section.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Insights;
