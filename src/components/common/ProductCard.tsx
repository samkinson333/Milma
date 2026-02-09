import { useNavigate } from 'react-router-dom';
import classes from './ProductCard.module.css';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    showActions?: boolean;
}

const ProductCard = ({ id, name, price, image, category, showActions = true }: ProductCardProps) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleBuyNow = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div className={classes.card}>
            <div className={classes.imageWrapper}>
                <img src={image} alt={name} className={classes.image} />
                <span className={classes.category}>{category}</span>
            </div>
            <div className={classes.info}>
                <h3 className={classes.name}>{name}</h3>
                <p className={classes.price}>{price}</p>
                {showActions && (
                    <div className={classes.actions}>
                        <button className={classes.buyBtn} onClick={handleBuyNow}>
                            {t('common.buyNow')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
