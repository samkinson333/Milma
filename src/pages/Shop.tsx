import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './Shop.module.css';
import ProductBannerSlider from '../components/specific/ProductBannerSlider';

const Shop = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('All');

    const translatedProducts = products.map(product => ({
        ...product,
        name: t(product.nameKey),
        category: t(product.categoryKey)
    }));

    const categories = ['All', ...new Set(translatedProducts.map(product => product.category))];

    const filteredProducts = activeCategory === 'All'
        ? translatedProducts
        : translatedProducts.filter(product => product.category === activeCategory);

    return (
        <div className={classes.container}>
            <ProductBannerSlider />

            <h1 className={classes.pageTitle}>Online Shopping</h1>

            <div className={classes.filterContainer}>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`${classes.filterBtn} ${activeCategory === category ? classes.activeFilter : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category === 'All' ? t('common.all') : category}
                    </button>
                ))}
            </div>

            <motion.div layout className={classes.grid}>
                <AnimatePresence>
                    {filteredProducts.map(product => (
                        <ShoppingProductCard key={product.id} product={product} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

const ShoppingProductCard = ({ product }: { product: any }) => {
    const { addToCart, toggleCart } = useCart();
    const { t } = useTranslation();
    const [added, setAdded] = useState(false);
    const navigate = useNavigate();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const handleBuyNow = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleAddToCart(e);
        toggleCart();
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={classes.card}
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <div className={classes.imageWrapper}>
                <img src={product.image} alt={product.name} className={classes.image} />
                <span className={classes.category}>{product.category}</span>
            </div>

            <div className={classes.info}>
                <h3 className={classes.name}>{product.name}</h3>
                <p className={classes.price}>{product.price}</p>

                <div className={classes.actionsRow} onClick={e => e.stopPropagation()}>

                    <button
                        className={`${classes.addBtn} ${added ? classes.added : ''}`}
                        onClick={handleAddToCart}
                        title={t('common.addToCart')}
                    >
                        {added ? <Check size={18} /> : <ShoppingCart size={18} />}
                        {added ? 'Added' : 'Add'}
                    </button>

                    <button className={classes.buyBtn} onClick={handleBuyNow}>
                        {t('common.buyNow')}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Shop;
