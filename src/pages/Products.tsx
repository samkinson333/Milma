import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import classes from './Products.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import ProductBannerSlider from '../components/specific/ProductBannerSlider';
import CategoryShowcase from '../components/specific/CategoryShowcase';
import ProductShowcase from '../components/specific/ProductShowcase';
import { useTranslation } from 'react-i18next';

const Products = () => {
    const { t } = useTranslation();

    const translatedProducts = products.map(product => ({
        ...product,
        name: t(product.nameKey),
        category: t(product.categoryKey)
    }));

    return (
        <div className={classes.container}>
            <ProductBannerSlider />
            <CategoryShowcase />
            <ProductShowcase />

            {/* Filter section removed as requested */}

            <motion.div layout className={classes.grid}>
                <AnimatePresence>
                    {translatedProducts.map(product => (
                        <motion.div
                            layout
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                category={product.category}
                                image={product.image}
                                showActions={false}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '4rem 0', paddingRight: '2rem' }}>
                <a href="/shop" style={{
                    display: 'inline-block',
                    padding: '0.8rem 2.5rem',
                    background: 'var(--color-primary)',
                    color: 'white',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '1.2rem',
                    textDecoration: 'none',
                    boxShadow: '0 10px 20px rgba(189, 31, 53, 0.3)',
                    transition: 'transform 0.3s ease'
                }}>
                    Shop Now
                </a>
            </div>
        </div>
    );
};

export default Products;
