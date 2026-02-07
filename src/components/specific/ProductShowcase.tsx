import ProductCard from '../common/ProductCard';
import classes from './ProductShowcase.module.css';
import { motion } from 'framer-motion';

const featuredProducts = [
    {
        id: 1,
        name: 'Full Cream Milk',
        price: '₹32',
        category: 'Milk',
        image: 'https://milma.com/storage/products//August2023//Ytl05gnqwPEvDN5NTHL9.png'
    },
    {
        id: 2,
        name: 'Homogenized Pure Milk',
        price: '₹28',
        category: 'Milk',
        image: 'https://milma.com/storage/products//July2022//aMnIotru8hY92PbrqWuH.jpg'
    },
    {
        id: 3,
        name: 'Toned Fresh Milk',
        price: '₹26',
        category: 'Milk',
        image: 'https://milma.com/storage/products//April2023//qEiwh4qbyuA1jjahbxQ3.png'
    },
    {
        id: 4,
        name: 'Organic Farm Milk',
        price: '₹45',
        category: 'Milk',
        image: 'https://milma.com/storage/products//May2023//5eRXgX6uiHQOLxOrmn2T.png'
    },
];

const ProductShowcase = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={classes.preTitle}>Featured</span>
                        <h2 className={classes.title}>Best Sellers</h2>
                    </motion.div>
                    <a href="/products" className={classes.viewAll}>View All Selection</a>
                </div>

                <div className={classes.grid}>
                    {featuredProducts.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
