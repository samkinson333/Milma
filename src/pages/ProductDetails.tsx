import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import classes from './ProductDetails.module.css';

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart, toggleCart } = useCart();
    const { t } = useTranslation();
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className={classes.notFound}>
                <h2>Product not found</h2>
                <button onClick={() => navigate('/products')}>Back to Products</button>
            </div>
        );
    }

    const translatedProduct = {
        ...product,
        name: t(product.nameKey),
        category: t(product.categoryKey)
    };

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart({
                id: translatedProduct.id,
                name: translatedProduct.name,
                price: translatedProduct.price,
                image: translatedProduct.image,
                category: translatedProduct.category
            });
        }
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const handleBuyNow = () => {
        handleAddToCart();
        toggleCart();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes.container}
        >
            <button className={classes.backBtn} onClick={() => navigate('/products')}>
                <ArrowLeft size={20} />
                <span>Back to Products</span>
            </button>

            <div className={classes.wrapper}>
                <div className={classes.imageContainer}>
                    <img src={translatedProduct.image} alt={translatedProduct.name} className={classes.image} />
                </div>

                <div className={classes.details}>
                    <span className={classes.category}>{translatedProduct.category}</span>
                    <h1 className={classes.title}>{translatedProduct.name}</h1>
                    <p className={classes.price}>{translatedProduct.price}</p>
                    <p className={classes.description}>{translatedProduct.description}</p>

                    <div className={classes.actions}>
                        <div className={classes.quantityControl}>
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>

                        <div className={classes.buttons}>
                            <button
                                className={`${classes.addToCartBtn} ${added ? classes.added : ''}`}
                                onClick={handleAddToCart}
                            >
                                {added ? <Check size={20} /> : <ShoppingCart size={20} />}
                                {added ? 'Added' : t('common.addToCart')}
                            </button>
                            <button className={classes.buyNowBtn} onClick={handleBuyNow}>
                                {t('common.buyNow')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductDetails;
