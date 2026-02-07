import { Link } from 'react-router-dom';
import classes from './ServicesSubPage.module.css';
import { CheckCircle } from 'lucide-react';

const SocietyLevel = () => {
    const services = [
        "Building grant to Dairy Co-operative Societies.",
        "As part of the modernization of DCS Union has established 180 numbers of Automatic Milk Collection Units in DCS.",
        "The heifer adoption programme is proposed to be implemented in four districts of our Union. Societies giving maximum quantity of milk to the Dairy shall be preferred. Amongst these societies of farmers per district giving maximum amount of milk to the society are to be concerned. The selection of the heifer shall be based on the body weight attained for the age as well as other desirable physical characteristics. This scheme will be continued for a period of one year."
    ];

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>SOCIETY LEVEL</h1>

            <div className={classes.heroSection}>
                <div className={classes.heroImage}>
                    <img src="/assets/services/society.jpg" alt="Society Level" className={classes.pageImage} />
                </div>
                <div className={classes.heroText}>
                    <p className={classes.intro}>
                        Union Conduct various socio economic development programs for milk producers and the Dairy Co-operative Societies including artificial insemination program, provide emergency veterinary service to milk producers through Milk Co-operative Societies, Quality improvement program, etc.
                    </p>
                </div>
            </div>

            <div className={classes.section}>

                <h2 className={classes.sectionTitle}>SERVICES TO FARMERS</h2>

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

export default SocietyLevel;

