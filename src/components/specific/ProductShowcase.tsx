import ProductCard from '../common/ProductCard';
import classes from './ProductShowcase.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProductShowcase = () => {
    const { t } = useTranslation();

    const featuredProducts = [
        {
            id: 1,
            name: t('products.items.fullCream'),
            price: '₹32',
            category: t('products.categories.milk'),
            image: 'https://milma.com/storage/products//August2023//Ytl05gnqwPEvDN5NTHL9.png'
        },
        {
            id: 2,
            name: t('products.items.homogenized'),
            price: '₹28',
            category: t('products.categories.milk'),
            image: 'https://milma.com/storage/products//July2022//aMnIotru8hY92PbrqWuH.jpg'
        },
        {
            id: 3,
            name: t('products.items.toned'),
            price: '₹26',
            category: t('products.categories.milk'),
            image: 'https://milma.com/storage/products//April2023//qEiwh4qbyuA1jjahbxQ3.png'
        },
        {
            id: 4,
            name: t('products.items.organic'),
            price: '₹45',
            category: t('products.categories.milk'),
            image: 'https://milma.com/storage/products//May2023//5eRXgX6uiHQOLxOrmn2T.png'
        },
    ];

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={classes.preTitle}>{t('products.preTitle')}</span>
                        <h2 className={classes.title}>{t('products.title')}</h2>
                        <a href="/shop" style={{
                            display: 'inline-block',
                            padding: '0.8rem 2.5rem',
                            background: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: '50px',
                            fontWeight: '700',
                            fontSize: '1rem',
                            textDecoration: 'none',
                            boxShadow: '0 10px 20px rgba(189, 31, 53, 0.3)',
                            transition: 'all 0.3s ease',
                            marginTop: '1rem'
                        }}>
                            {t('common.buyNow')}
                        </a>
                    </motion.div>
                    <a href="/products" className={classes.viewAll}>{t('common.viewAll')}</a>
                </div>

                <div className={classes.grid}>
                    {featuredProducts.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <ProductCard {...product} showActions={false} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
