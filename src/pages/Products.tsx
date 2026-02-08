import ProductCard from '../components/common/ProductCard';
import classes from './Products.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductBannerSlider from '../components/specific/ProductBannerSlider';
import CategoryShowcase from '../components/specific/CategoryShowcase';
import ProductShowcase from '../components/specific/ProductShowcase';
import { useTranslation } from 'react-i18next';

const Products = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('All');

    const productList = [
        { id: 1, name: t('products.items.fullCream'), price: '₹32', category: t('products.categories.milk'), image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/12/17/df82cbae-525b-4d3f-b0a7-380ce0439790_FQ5ZMB00DA_MN_16122025.png' },
        { id: 2, name: t('products.items.ghee'), price: '₹580', category: t('products.categories.butterGhee'), image: 'https://m.media-amazon.com/images/I/615CwLiqgQL.jpg' },
        { id: 3, name: t('products.items.flavoredMilk'), price: '₹35', category: t('products.categories.beverage'), image: 'https://m.media-amazon.com/images/I/71o4W98mAaL._AC_UF350,350_QL80_.jpg' },
        { id: 4, name: t('products.items.buttermilk'), price: '₹15', category: t('products.categories.beverage'), image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh21_CYGDTgx4C3D26Pg4xKR27xCbfHq9TkQ&s' },
        { id: 5, name: t('products.items.paneer'), price: '₹220', category: t('products.categories.cheese'), image: 'https://www.epeedikaonline.com/assets/products/original/products_quhnm0.jpg' },
        { id: 6, name: t('products.items.curd'), price: '₹45', category: t('products.categories.yogurt'), image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/12/17/e791900f-aab7-4fdd-acd2-b31842ab93a0_S8E64NBP2T_MN_17122025.png' },
        { id: 7, name: t('products.items.butter'), price: '₹140', category: t('products.categories.butterGhee'), image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ovyAnomj57rPV9gavveFLwbo_E7klSH51g&s' },
        { id: 8, name: t('products.items.mix'), price: '₹160', category: t('products.categories.mix'), image: 'https://milma.com/storage/products//August2023//Ytl05gnqwPEvDN5NTHL9.png' },
        { id: 9, name: t('products.items.peda'), price: '₹150', category: t('products.categories.sweets'), image: 'https://milma.com/storage/products//April2023//qEiwh4qbyuA1jjahbxQ3.png' },
        { id: 10, name: t('products.items.icecream'), price: '₹280', category: t('products.categories.frozen'), image: 'https://milma.com/storage/products//May2023//5eRXgX6uiHQOLxOrmn2T.png' },
        { id: 11, name: t('products.items.ghee'), price: '₹330', category: t('products.categories.butterGhee'), image: 'https://milma.com/storage/products//July2022//dtjqUwxfyQkMAb7UrPSL.jpg' },
        { id: 12, name: t('products.items.instantPalada'), price: '₹45', category: t('products.categories.mix'), image: 'https://milma.com/storage/products//July2022//DwXau0Xp6eLrsPT7GRj9.jpg' },
    ];

    const categories = ['All', ...new Set(productList.map(product => product.category))];

    const filteredProducts = activeCategory === 'All'
        ? productList
        : productList.filter(product => product.category === activeCategory);

    return (
        <div className={classes.container}>
            <ProductBannerSlider />
            <CategoryShowcase />
            <ProductShowcase />

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
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Products;
