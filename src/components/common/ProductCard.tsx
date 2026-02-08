// import { ShoppingCart } from 'lucide-react';
// import { useCart } from '../../context/CartContext';
// import { useTranslation } from 'react-i18next';
import classes from './ProductCard.module.css';

interface ProductCardProps {
    id?: number;
    name: string;
    price?: string;
    image: string;
    category: string;
}

const ProductCard = ({ name, image, category }: ProductCardProps) => {
    // const { addToCart, toggleCart } = useCart(); // Cart disabled
    // const { t } = useTranslation();

    /*
    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        addToCart({ id, name, price, image, category });
    };

    const handleBuyNow = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        addToCart({ id, name, price, image, category });
        toggleCart(); // Open cart drawer immediately
    };
    */

    return (
        <div className={classes.card}>
            <div className={classes.imageWrapper}>
                <img src={image} alt={name} className={classes.image} />
                <span className={classes.category}>{category}</span>
                {/* 
                <button className={classes.quickAdd} onClick={handleAddToCart} title={t('common.addToCart')}>
                    <ShoppingCart size={20} />
                </button>
                 */}
            </div>
            <div className={classes.info}>
                <h3 className={classes.name}>{name}</h3>
                {/* <p className={classes.price}>{price}</p> */}
                {/* 
                <div className={classes.actions}>
                    <button className={classes.addBtn} onClick={handleAddToCart}>
                        {t('common.addToCart')}
                    </button>
                    <button className={classes.buyBtn} onClick={handleBuyNow}>
                        {t('common.buyNow')}
                    </button>
                </div>
                 */}
            </div>
        </div>
    );
};

export default ProductCard;
