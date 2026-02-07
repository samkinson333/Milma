import { ShoppingCart } from 'lucide-react';
import classes from './ProductCard.module.css';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
    const { addToCart, toggleCart } = useCart();

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

    return (
        <div className={classes.card}>
            <div className={classes.imageWrapper}>
                <img src={image} alt={name} className={classes.image} />
                <span className={classes.category}>{category}</span>
                <button className={classes.quickAdd} onClick={handleAddToCart} title="Add to Cart">
                    <ShoppingCart size={20} />
                </button>
            </div>
            <div className={classes.info}>
                <h3 className={classes.name}>{name}</h3>
                <p className={classes.price}>{price}</p>
                <div className={classes.actions}>
                    <button className={classes.addBtn} onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                    <button className={classes.buyBtn} onClick={handleBuyNow}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
