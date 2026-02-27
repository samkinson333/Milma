import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './ProductBannerSlider.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProductBannerSlider = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const bannerData = useMemo(() => [
        {
            id: 2,
            image: 'https://media.licdn.com/dms/image/v2/C561BAQEkwJh6zN-3Ew/company-background_10000/company-background_10000/0/1632191301164/milma_cover?e=2147483647&v=beta&t=JSRmhQxSHrcG72mudMvrYt7BUZKrPV-_bYWwT5H9KR4',
            title: t('banner.farm.title'),
            subtitle: t('banner.farm.subtitle'),
            cta: t('banner.farm.cta'),
            link: '/about',
            align: 'center'
        },
        {
            id: 3,
            image: 'https://milma.com/storage/product-categories/July2022/tMCA1TUDhpfnaEpWGHgb.jpg',
            title: t('banner.paneer.title'),
            subtitle: t('banner.paneer.subtitle'),
            cta: t('banner.paneer.cta'),
            link: '#',
            align: 'right'
        }
    ], [t]);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % bannerData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + bannerData.length) % bannerData.length);
    };

    return (
        <div className={classes.sliderContainer}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    className={classes.slide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src={bannerData[currentIndex].image}
                        alt={bannerData[currentIndex].title}
                        className={classes.bannerImage}
                    />
                    <div className={classes.overlay}></div>

                    <div className={`${classes.content} ${classes[bannerData[currentIndex].align]}`}>
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {bannerData[currentIndex].title}
                        </motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {bannerData[currentIndex].subtitle}
                        </motion.p>
                        {/* 
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={classes.ctaBtn}
                        >
                            {bannerData[currentIndex].cta}
                        </motion.button>
*/}
                    </div>
                </motion.div>
            </AnimatePresence>

            <button className={`${classes.navBtn} ${classes.prev}`} onClick={handlePrev}>
                <ChevronLeft size={24} />
            </button>
            <button className={`${classes.navBtn} ${classes.next}`} onClick={handleNext}>
                <ChevronRight size={24} />
            </button>

            <div className={classes.dots}>
                {bannerData.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${classes.dot} ${idx === currentIndex ? classes.activeDot : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductBannerSlider;
