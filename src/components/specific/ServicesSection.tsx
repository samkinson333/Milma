import { motion } from 'framer-motion';
import { Users, Truck, Award, Heart } from 'lucide-react';
import classes from './ServicesSection.module.css';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: Users,
            title: t('services.list.farmers.title'),
            description: t('services.list.farmers.description')
        },
        {
            icon: Truck,
            title: t('services.list.dealers.title'),
            description: t('services.list.dealers.description')
        },
        {
            icon: Award,
            title: t('services.list.quality.title'),
            description: t('services.list.quality.description')
        },
        {
            icon: Heart,
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
