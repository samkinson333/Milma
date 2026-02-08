import { motion } from 'framer-motion';
import { useState } from 'react';
import { Milk, IceCream, Beef, Coffee, Candy, Package } from 'lucide-react';
import classes from './CategoryShowcase.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CategoryShowcase = () => {
    const { t } = useTranslation();
    const [isPaused, setIsPaused] = useState(false);

    const categories = [
        {
            id: 1,
            name: t('products.categories.milk'),
            icon: Milk,
            count: `4 ${t('categoryShowcase.productCount')}`,
            color: '#3b82f6',
            image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400',
            filter: 'Milk'
        },
        {
            id: 2,
            name: t('products.categories.butterGhee'),
            icon: Package,
            count: `3 ${t('categoryShowcase.productCount')}`,
            color: '#f59e0b',
            image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400',
            filter: 'Butter & Ghee'
        },
        {
            id: 3,
            name: t('products.categories.frozen'),
            icon: IceCream,
            count: `1 ${t('categoryShowcase.singleProduct')}`,
            color: '#ec4899',
            image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=400',
            filter: 'Frozen'
        },
        {
            id: 4,
            name: t('products.categories.yogurt'),
            icon: Beef,
            count: `1 ${t('categoryShowcase.singleProduct')}`,
            color: '#10b981',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400',
            filter: 'Yogurt'
        },
        {
            id: 5,
            name: t('products.categories.beverage'),
            icon: Coffee,
            count: `2 ${t('categoryShowcase.productCount')}`,
            color: '#8b5cf6',
            image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&q=80&w=400',
            filter: 'Beverage'
        },
        {
            id: 6,
            name: t('products.categories.sweets'),
            icon: Candy,
            count: `3 ${t('categoryShowcase.productCount')}`,
            color: '#ef4444',
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400',
            filter: 'Sweets'
        }
    ];

    const duplicatedCategories = [...categories, ...categories, ...categories];

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
                    <span className={classes.preTitle}>{t('categoryShowcase.preTitle')}</span>
                    <h2 className={classes.title}>{t('categoryShowcase.title')}</h2>
                    <p className={classes.subtitle}>
                        {t('categoryShowcase.subtitle')}
                    </p>
                </motion.div>

                <div
                    className={classes.sliderWrapper}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <motion.div
                        className={classes.slider}
                        animate={{
                            x: isPaused ? undefined : [0, -(332 * categories.length)]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear"
                            }
                        }}
                    >
                        {duplicatedCategories.map((category, index) => (
                            <div
                                key={`${category.id}-${index}`}
                                className={classes.slideItem}
                            >
                                <Link
                                    to={`/products?category=${category.filter}`}
                                    className={classes.card}
                                    style={{ '--category-color': category.color } as React.CSSProperties}
                                >
                                    <div className={classes.imageWrapper}>
                                        <img src={category.image} alt={category.name} />
                                        <div className={classes.overlay}></div>
                                    </div>

                                    <div className={classes.content}>
                                        <div className={classes.iconWrapper}>
                                            <category.icon size={24} strokeWidth={1.2} />
                                        </div>

                                        <div className={classes.info}>
                                            <h3>{category.name}</h3>
                                            <p>{category.count}</p>
                                        </div>

                                        <div className={classes.arrow}>→</div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CategoryShowcase;
