import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import classes from './NewsSection.module.css';
import { useTranslation } from 'react-i18next';

const NewsSection = () => {
    const { t } = useTranslation();

    const newsArticles = [
        {
            id: 1,
            date: 'Dec 21, 2022',
            title: t('news.articles.article1.title'),
            excerpt: t('news.articles.article1.excerpt'),
            image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 2,
            date: 'Dec 21, 2022',
            title: t('news.articles.article2.title'),
            excerpt: t('news.articles.article2.excerpt'),
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fc9acf83210025.5d35ca82ddca6.jpg'
        },
        {
            id: 3,
            date: 'Dec 21, 2022',
            title: t('news.articles.article3.title'),
            excerpt: t('news.articles.article3.excerpt'),
            image: 'https://julebi.com/media/image?path=uploads%2Fmedia%2F2025%2FMilma_palada_payasam_on_julebi.jpg&width=900&quality=80'
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
                    <span className={classes.preTitle}>{t('news.preTitle')}</span>
                    <h2 className={classes.title}>{t('news.title')}</h2>
                </motion.div>

                <div className={classes.grid}>
                    {newsArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={classes.card}
                        >
                            <div className={classes.imageWrapper}>
                                <img src={article.image} alt={article.title} />
                                <div className={classes.overlay}></div>
                            </div>
                            <div className={classes.content}>
                                <div className={classes.date}>
                                    <Calendar size={16} />
                                    <span>{article.date}</span>
                                </div>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <button className={classes.readMore}>
                                    {t('common.readMore')} <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
