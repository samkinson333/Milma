import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import classes from './FloatingShopButton.module.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const FloatingShopButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    if (location.pathname === '/shop' || location.pathname.startsWith('/product/')) {
        return null;
    }

    return (
        <motion.button
            className={classes.shopBtn}
            onClick={() => navigate('/shop')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Shop Now"
        >
            <ShoppingBag size={24} />
            <span className={classes.text}>{t('common.shopNow', 'Shop Now')}</span>
        </motion.button>
    );
};

export default FloatingShopButton;
