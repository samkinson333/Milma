import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import classes from './NewsSection.module.css';

const newsArticles = [
    {
        id: 1,
        date: 'Dec 21, 2022',
        title: 'The Top 5 Benefits Of Cow Milk',
        excerpt: 'Milk is a staple in almost every Indian household. As a matter of fact, Indians have always considered milk as a complete food...',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 2,
        date: 'Dec 21, 2022',
        title: 'How Milk Helps Fight Common Cold & Influenza',
        excerpt: 'Though beautiful, the monsoon has gone stranger in Kerala than ever, with more than half the population affected by common cold...',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fc9acf83210025.5d35ca82ddca6.jpg'
    },
    {
        id: 3,
        date: 'Dec 21, 2022',
        title: 'MILMA PALADA PAYASAM RECIPE',
        excerpt: 'Payasam or Pradhaman is malayali\'s favorite dessert. Payasam is normally consumed on almost all occasions in Kerala...',
        image: 'https://julebi.com/media/image?path=uploads%2Fmedia%2F2025%2FMilma_palada_payasam_on_julebi.jpg&width=900&quality=80'
    }
];

const NewsSection = () => {
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
                    <span className={classes.preTitle}>Stay Updated</span>
                    <h2 className={classes.title}>Latest News & Articles</h2>
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
                                    Read More <ArrowRight size={16} />
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
