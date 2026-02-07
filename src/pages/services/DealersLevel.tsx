import { Link } from 'react-router-dom';
import classes from './ServicesSubPage.module.css';
import { CheckCircle } from 'lucide-react';

const DealersLevel = () => {
    const services = [
        "Building Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi nobis, deleniti deserunt,",
        "As part of the Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi nobis, deleniti deserunt, Collection Units in DCS.",
        "The heifer adoption programme Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi nobis, deleniti deserunt, for a period of one year."
    ];

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>DEALERS LEVEL</h1>

            <div className={classes.heroSection}>
                <div className={classes.heroImage}>
                    <img src="/assets/services/dealers.jpg" alt="Dealers Level" className={classes.pageImage} />
                </div>
                <div className={classes.heroText}>
                    <p className={classes.intro}>
                        Ready to collaborate with Milma as a Franchisee? Set up your own Milma Franchise and be a part of the fastest growing and most profitable dairy brand in Kerala. Having served Kerala as a Government of Kerala venture for many decades, Milma continues to be the most consumer-friendly dairy brand in Kerala. Interact and engage with Milma's massive consumer base, sell the finest offerings from Milma and earn a steadily growing income with a franchise that fits your budget. Get in touch with us to learn more about investment, expenses and return on investment regarding Milma franchisee.
                    </p>
                </div>
            </div>

            <div className={classes.section}>

                <h2 className={classes.sectionTitle}>SERVICES TO DEALERS</h2>

                <ul className={classes.serviceList}>
                    {services.map((service, index) => (
                        <li key={index} className={classes.serviceItem}>
                            <CheckCircle size={20} className={classes.checkIcon} />
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Link to="/services" className={classes.backLink}>← Back to Services</Link>
        </div>
    );
};

export default DealersLevel;

