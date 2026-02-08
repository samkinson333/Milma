import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import classes from './CartDrawer.module.css';
import { useTranslation } from 'react-i18next';

const CartDrawer = () => {
    const { isCartOpen, toggleCart, cart, itemsCount, cartTotal, removeFromCart, updateQuantity } = useCart();
    const drawerRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node) && isCartOpen) {
                toggleCart();
            }
        };

        if (isCartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isCartOpen, toggleCart]);

    // Disable body scroll when open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isCartOpen]);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        className={classes.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        ref={drawerRef}
                        className={classes.drawer}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className={classes.header}>
                            <div className={classes.title}>
                                <ShoppingBag size={20} />
                                <h2>{t('cart.title')} <span className={classes.count}>({itemsCount})</span></h2>
                            </div>
                            <button onClick={toggleCart} className={classes.closeBtn}>
                                <X size={24} />
                            </button>
                        </div>

                        {cart.length === 0 ? (
                            <div className={classes.emptyState}>
                                <div className={classes.emptyIcon}>
                                    <ShoppingBag size={48} />
                                </div>
                                <h3>{t('cart.emptyTitle')}</h3>
                                <p>{t('cart.emptySubtitle')}</p>
                                <button onClick={toggleCart} className={classes.shopBtn}>
                                    {t('cart.shopButton')}
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className={classes.itemsList}>
                                    {cart.map((item) => (
                                        <div key={item.id} className={classes.item}>
                                            <div className={classes.itemImg}>
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className={classes.itemInfo}>
                                                <h4>{item.name}</h4>
                                                <p className={classes.itemPrice}>{item.price}</p>
                                                <div className={classes.controls}>
                                                    <div className={classes.quantity}>
                                                        <button
                                                            onClick={() => item.quantity > 1 ? updateQuantity(item.id, -1) : removeFromCart(item.id)}
                                                            className={classes.qtyBtn}
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className={classes.qtyBtn}
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className={classes.removeBtn}
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={classes.footer}>
                                    <div className={classes.totalRow}>
                                        <span>{t('cart.totalAmount')}</span>
                                        <span className={classes.totalPrice}>₹{cartTotal.toFixed(2)}</span>
                                    </div>
                                    <button className={classes.checkoutBtn}>
                                        {t('cart.checkoutButton')} <ArrowRight size={18} />
                                    </button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
