import { motion } from 'framer-motion';
import { Users, Truck, Award, Heart } from 'lucide-react';
import classes from './ServicesSection.module.css';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: Users,
            image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074&auto=format&fit=crop",
            title: t('services.list.farmers.title'),
            description: t('services.list.farmers.description')
        },
        {
            icon: Truck,
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
            title: t('services.list.dealers.title'),
            description: t('services.list.dealers.description')
        },
        {
            icon: Award,
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
            title: t('services.list.quality.title'),
            description: t('services.list.quality.description')
        },
        {
            icon: Heart,
            image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=2080&auto=format&fit=crop",
            title: t('services.list.consumers.title'),
            description: t('services.list.consumers.description')
        }
    ];

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
                    <span className={classes.preTitle}>{t('services.preTitle')}</span>
                    <h2 className={classes.title}>{t('services.title')}</h2>
                    <p className={classes.subtitle}>
                        {t('services.subtitle')}
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
                            <div className={classes.imageContainer}>
                                <img src={service.image} alt={service.title} className={classes.bgImage} />
                                <div className={classes.overlay}></div>
                            </div>
                            <div className={classes.content}>
                                <div className={classes.iconWrapper}>
                                    <service.icon size={28} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
