import { motion } from 'framer-motion';
import { Users, Truck, Award, Heart } from 'lucide-react';
import classes from './ServicesSection.module.css';

const services = [
    {
        icon: Users,
        title: 'Services to Farmers',
        description: 'Supporting primary dairy cooperatives and providing assured year-round market with stable prices to dairy farmers.'
    },
    {
        icon: Truck,
        title: 'Dealers Level',
        description: 'Comprehensive support and distribution network ensuring fresh products reach every corner of Kerala.'
    },
    {
        icon: Award,
        title: 'Quality Assurance',
        description: 'Rigorous quality testing and processing to maintain the highest standards in dairy products.'
    },
    {
        icon: Heart,
        title: 'Consumer Level',
        description: 'Dedicated to providing pure, healthy, and affordable dairy products to every household.'
    }
];

const ServicesSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={classes.header}
                >
                    <span className={classes.preTitle}>What We Do</span>
                    <h2 className={classes.title}>Services We Provide</h2>
                    <p className={classes.subtitle}>
                        To carry out activities for promoting Production, Procurement, Processing and
                        Marketing of milk and milk products for economic development of the farming community.
                    </p>
                </motion.div>

                <div className={classes.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={classes.card}
                        >
                            <div className={classes.iconWrapper}>
                                <service.icon size={32} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
