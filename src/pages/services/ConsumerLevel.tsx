import { Link } from 'react-router-dom';
import classes from './ServicesSubPage.module.css';
import { CheckCircle } from 'lucide-react';

const ConsumerLevel = () => {
    const services = [
        "Products sale is carried out through wholesale distributors.",
        "Consumers get different milma Products through the distribution network of more than 40 wholesale distributors in the 4 districts. The distribution network enables timely availability of Milk and Products."
    ];

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>CONSUMER LEVEL</h1>

            <div className={classes.heroSection}>
                <div className={classes.heroImage}>
                    <img src="/assets/services/consumers.jpg" alt="Consumer Level" className={classes.pageImage} />
                </div>
                <div className={classes.heroText}>
                    <p className={classes.intro}>
                        Union has more than 5000 agents for milk. The Dairies offer round the clock customer care support for its agents and consumers. Union supply milk daily twice to its agents. Milk is supplied against advance payment 4% of MRP is offered as commission to agents. Agents are given sales promotion materials, Puf boxes to store milk in chilled condition, trays to stock milk, etc. Application in prescribed form (available at Dairies against cash payment of Rs.100/-) to be submitted at the concerned Dairies along with inspection fee of Rs.25. Dairy Officials will inspect the site for new agency and depending up on their assessment of sales potential agency will be sanctioned or application rejected. New agents will have to make a refundable security deposit of Rs.5000/-.
                    </p>
                </div>
            </div>

            <div className={classes.section}>

                <h2 className={classes.sectionTitle}>SERVICES TO CONSUMERS & AGENTS</h2>

                <ul className={classes.serviceList}>
                    {services.map((service, index) => (
                        <li key={index} className={classes.serviceItem}>
                            <CheckCircle size={20} className={classes.checkIcon} />
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>

                <h2 className={classes.sectionTitle}>PROCEDURE FOR APPOINTING NEW WHOLESALERS</h2>

                <p className={classes.intro}>
                    Applications are invited by newspaper advertisement wherever vacancy arises. Appointments made based on previous experience, credit worthiness, and existing infrastructure.
                </p>
            </div>

            <Link to="/services" className={classes.backLink}>← Back to Services</Link>
        </div>
    );
};

export default ConsumerLevel;

