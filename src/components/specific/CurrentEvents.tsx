import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import classes from './CurrentEvents.module.css';
import { useTranslation } from 'react-i18next';

const CurrentEvents = () => {
    const { t } = useTranslation();

    const events = [
        {
            id: 1,
            image: "/assets/services/Screenshot 2026-02-09 115506.png",
            date: t('currentEvents.events.organizationProfile.date'),
            title: t('currentEvents.events.organizationProfile.title'),
            description: t('currentEvents.events.organizationProfile.description'),
            link: "/about"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
            date: t('currentEvents.events.recruitment.date'),
            title: t('currentEvents.events.recruitment.title'),
            description: t('currentEvents.events.recruitment.description'),
            link: "/recruitment"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?q=80&w=2071&auto=format&fit=crop",
            date: t('currentEvents.events.farmerWorkshop.date'),
            title: t('currentEvents.events.farmerWorkshop.title'),
            description: t('currentEvents.events.farmerWorkshop.description'),
            link: "/events/farmer-workshop"
        }
    ];

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.eventsWrapper}>
                    {events.map((event, index) => (
                        <motion.article
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${classes.eventRow} ${index % 2 === 1 ? classes.reverse : ''}`}
                        >
                            <div className={classes.imageWrapper}>
                                <img src={event.image} alt={event.title} className={classes.image} />
                                {event.date && (
                                    <div className={classes.datebadge}>
                                        <Calendar size={16} />
                                        <span>{event.date}</span>
                                    </div>
                                )}
                            </div>
                            <div className={classes.content}>
                                <h3 className={classes.eventTitle}>{event.title}</h3>
                                <p className={classes.description}>{event.description}</p>
                                <a href={event.link} className={classes.readMore}>
                                    {t('currentEvents.readMore')}
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentEvents;
