import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { ShoppingBag } from 'lucide-react';

const Toast = () => {
    const { notification, clearNotification } = useCart();

    return (
        <AnimatePresence>
            {notification && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#1a1a1a',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '50px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        cursor: 'pointer'
                    }}
                    onClick={clearNotification}
                >
                    <ShoppingBag size={18} color="#ffeb3b" />
                    {notification}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
