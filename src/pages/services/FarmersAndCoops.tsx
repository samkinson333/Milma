import { Link } from 'react-router-dom';
import classes from './ServicesSubPage.module.css';
import { CheckCircle } from 'lucide-react';

const FarmersAndCoops = () => {
    const services = [
        "Scholarship for higher education to the children of milk producers.",
        "Insurance coverage to milk producers against natural death and accident death.",
        "Health insurance for primary society staff",
        "Production incentive to milk producers.",
        "Incentive to employees of Dairy cooperative societies.",
        "Cattle Feed Subsidy to milk producers.",
        "Interest free loans for purchase of Dairy cows",
        "Calf Adoption Programme.",
        "Heifer Adoption Scheme.",
        "Emergency Veterinary Service at farmers' doorstep.",
        "Insurance Subsidy for Milch animals.",
        "Building grant to societies.",
        "Haritham - subsidy for purchase of silage.",
        "Artificial insemination service.",
        "Mobile veterinary clinics.",
        "Fertility clinics/camps for dairy animals.",
        "Supply of feed and feed suppliments.",
        "Mass awareness programmes to facilitate scientific dairy farming.",
        "Supply of farm machinary.",
        "Support to societies for hygienic milk collection.",
        "Modernisation of societies and development of IT infrastructure.",
        "Training and development for society staff and milk handlers."
    ];

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>SERVICES TO FARMERS AND PRIMARY DAIRY CO OPERATIVES</h1>

            <div className={classes.heroSection}>
                <div className={classes.heroImage}>
                    <img src="/assets/services/copo.jpg" alt="Dairy Cooperative" className={classes.pageImage} />
                </div>
                <div className={classes.heroText}>
                    <p className={classes.intro}>
                        The Union is committed to provide technical and financial assistances for the welfare and development of primary Dairy co operatives and Dairy farmers to make dairy farming a profitable and sustainable business.
                    </p>
                </div>
            </div>

            <div className={classes.section}>

                <ul className={classes.serviceList}>
                    {services.map((service, index) => (
                        <li key={index} className={classes.serviceItem}>
                            <CheckCircle size={20} className={classes.checkIcon} />
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Link to="/services#farmers" className={classes.backLink}>← Back to Services</Link>
        </div>
    );
};

export default FarmersAndCoops;

