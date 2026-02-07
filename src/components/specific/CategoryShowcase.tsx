import { motion } from 'framer-motion';
import { useState } from 'react';
import { Milk, IceCream, Beef, Coffee, Candy, Package } from 'lucide-react';
import classes from './CategoryShowcase.module.css';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 1,
        name: 'Milk Products',
        icon: Milk,
        count: '4 Products',
        color: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400',
        filter: 'Milk'
    },
    {
        id: 2,
        name: 'Butter & Ghee',
        icon: Package,
        count: '3 Products',
        color: '#f59e0b',
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400',
        filter: 'Butter & Ghee'
    },
    {
        id: 3,
        name: 'Ice Creams',
        icon: IceCream,
        count: '1 Product',
        color: '#ec4899',
        image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=400',
        filter: 'Frozen'
    },
    {
        id: 4,
        name: 'Curd & Yogurt',
        icon: Beef,
        count: '1 Product',
        color: '#10b981',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400',
        filter: 'Yogurt'
    },
    {
        id: 5,
        name: 'Beverages',
        icon: Coffee,
        count: '2 Products',
        color: '#8b5cf6',
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&q=80&w=400',
        filter: 'Beverage'
    },
    {
        id: 6,
        name: 'Sweets & Mix',
        icon: Candy,
        count: '3 Products',
        color: '#ef4444',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400',
        filter: 'Sweets'
    }
];

// Duplicate categories for seamless infinite loop
const duplicatedCategories = [...categories, ...categories, ...categories];

const CategoryShowcase = () => {
    const [isPaused, setIsPaused] = useState(false);

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
                    <span className={classes.preTitle}>Explore Our Range</span>
                    <h2 className={classes.title}>Shop by Category</h2>
                    <p className={classes.subtitle}>
                        Discover our wide selection of fresh, pure dairy products
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
