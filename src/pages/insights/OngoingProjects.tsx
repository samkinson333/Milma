import { ArrowRight, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import classes from './OngoingProjects.module.css';

const OngoingProjects = () => {
    const projects = [
        {
            title: 'New Mega Dairy Plant, Wayanad',
            desc: 'Establishing a state-of-the-art fully automated dairy processing plant with a capacity of 2 lakh liters per day.',
            progress: 75,
            image: '/images/insights/factory.png'
        },
        {
            title: 'Central Quality Control Lab',
            desc: 'Upgrading the central laboratory with NABL accreditation standards. This includes advanced chromatography and microbiological testing.',
            progress: 40,
            image: '/images/insights/products.png'
        },
        {
            title: 'Solar Powered Cold Chain',
            desc: 'Sustainable energy initiative to install solar panels across 10 major chilling centers. Aiming to reduce carbon footprint.',
            progress: 90,
            image: '/images/insights/farm.png'
        },
        {
            title: 'Automatic Ice Cream Unit',
            desc: 'Expansion of the Thiruvananthapuram regional facility with a high-capacity automatic ice cream production line.',
            progress: 15,
            image: '/images/insights/factory.png'
        },
        {
            title: 'Dairy Farmer Training Hub',
            desc: 'Setting up a comprehensive training facility in Ernakulam to educate farmers on modern animal husbandry techniques.',
            progress: 60,
            image: '/images/insights/farm.png'
        },
        {
            title: 'Project Milma Lite Stores',
            desc: 'A retail expansion project involving the launch of 100 new compact franchise stores across rural towns.',
            progress: 30,
            image: '/images/insights/outlet.png'
        }
    ];

    return (
        <div className={classes.page}>
            <div className={classes.hero}>
                <div className={classes.heroHeader}>
                    <Link to="/insights" className={classes.backLink}>
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                    <h1>Ongoing Projects</h1>
                    <div className={classes.heroBreadcrumb}>HOME / INSIGHTS / <span>ONGOING PROJECTS</span></div>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.sectionHeader}>
                    <h2>Current Infrastructure Development</h2>
                    <div className={classes.underline}></div>
                    <p>Milma is committed to excellence through modernization. We are currently expanding our production capabilities across Kerala to bring better quality dairy products to your home.</p>
                </div>

                <div className={classes.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={classes.card}>
                            <div className={classes.cardImage}>
                                <img src={project.image} alt={project.title} />
                                <span className={classes.badge}>IN PROGRESS</span>
                            </div>
                            <div className={classes.cardContent}>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>

                                <div className={classes.progressWrapper}>
                                    <div className={classes.progressHeader}>
                                        <span>Completion Progress</span>
                                        <span>{project.progress}%</span>
                                    </div>
                                    <div className={classes.progressBar}>
                                        <div className={classes.progressFill} style={{ width: `${project.progress}%` }}></div>
                                    </div>
                                </div>

                                <button className={classes.readMoreBtn}>
                                    READ MORE <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={classes.pagination}>
                    <button className={classes.pageNavBtn}><ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} /></button>
                    <button className={classes.pageBtnActive}>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className={classes.pageNavBtn}><ChevronRight size={18} /></button>
                </div>
            </div>
        </div>
    );
};

export default OngoingProjects;
