import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';
import { Search, Menu, X, Shield, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../common/LanguageSelector';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();
    const { itemsCount, toggleCart } = useCart();

    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                const heroThreshold = window.innerHeight * 1.3;
                setIsScrolled(window.scrollY > heroThreshold);
            } else {
                setIsScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isMobileMenuOpen || isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen, isSearchOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsSearchOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`${classes.header} ${isScrolled ? classes.scrolled : ''}`}>
                <div className={classes.container}>
                    <div className={classes.logoContainer}>
                        <Link to="/" className={classes.logo}>
                            {/* <img src="/logo.png" alt="Milma Logo" className={classes.logoImage} /> */}
                            <span className={classes.logoText}>Milma</span>
                        </Link>
                    </div>

                    {/* Combined Navigation - Choose the links you actually need below */}
                    <nav className={classes.nav}>
                        <Link to="/" className={classes.navLink}>{t('nav.home')}</Link>
                        <Link to="/products" className={classes.navLink}>{t('nav.products')}</Link>
                        <Link to="/about" className={classes.navLink}>{t('nav.about')}</Link>
                        <Link to="/services" className={classes.navLink}>{t('nav.services')}</Link>
                        <Link to="/insights" className={classes.navLink}>{t('nav.insights')}</Link>
                        <Link to="/career" className={classes.navLink}>{t('nav.career')}</Link>
                        <Link to="/notices" className={classes.navLink}>{t('nav.notices')}</Link>
                        <Link to="/recruitment" className={classes.navLink}>{t('nav.recruitment')}</Link>
                        <Link to="/contact" className={classes.navLink}>{t('nav.contact')}</Link>
                    </nav>

                    <div className={classes.actions}>
                        {/* Search - expands inline in header */}
                        <div className={`${classes.searchWrapper} ${isSearchOpen ? classes.searchWrapperOpen : ''}`}>
                            <input
                                type="text"
                                placeholder={t('common.search')}
                                className={classes.searchInputInline}
                            />
                            <button
                                aria-label="Close Search"
                                className={classes.searchCloseInline}
                                onClick={toggleSearch}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <button
                            aria-label="Search"
                            className={`${classes.iconBtn} ${classes.tooltip} ${isSearchOpen ? classes.hidden : ''}`}
                            data-tooltip={t('common.search')}
                            onClick={toggleSearch}
                        >
                            <Search size={20} />
                        </button>

                        {(location.pathname === '/shop' || location.pathname.startsWith('/product/')) && (
                            <button
                                aria-label="Cart"
                                className={`${classes.iconBtn} ${classes.tooltip} ${classes.cartBtn}`}
                                data-tooltip={t('cart.title')}
                                onClick={toggleCart}
                            >
                                <ShoppingCart size={20} />
                                {itemsCount > 0 && <span className={classes.badge}>{itemsCount}</span>}
                            </button>
                        )}

                        <Link to="/admin" aria-label="Admin" className={`${classes.iconBtn} ${classes.tooltip}`} data-tooltip={t('nav.admin')}>
                            <Shield size={20} />
                        </Link>
                        <LanguageSelector />
                        <button
                            aria-label="Menu"
                            className={classes.menuBtn}
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`${classes.mobileMenu} ${isMobileMenuOpen ? classes.mobileMenuOpen : ''}`}>
                <nav className={classes.mobileNav}>
                    <Link to="/" className={classes.mobileNavLink}>{t('nav.home')}</Link>
                    <Link to="/products" className={classes.mobileNavLink}>{t('nav.products')}</Link>
                    <Link to="/about" className={classes.mobileNavLink}>{t('nav.about')}</Link>
                    <Link to="/services" className={classes.mobileNavLink}>{t('nav.services')}</Link>
                    <Link to="/insights" className={classes.mobileNavLink}>{t('nav.insights')}</Link>
                    <Link to="/career" className={classes.mobileNavLink}>{t('nav.career')}</Link>
                    <Link to="/notices" className={classes.mobileNavLink}>{t('nav.notices')}</Link>
                    <Link to="/recruitment" className={classes.mobileNavLink}>{t('nav.recruitment')}</Link>
                    <Link to="/contact" className={classes.mobileNavLink}>{t('nav.contact')}</Link>
                    <Link to="/admin" className={classes.mobileNavLink}>{t('nav.admin')}</Link>
                    <div style={{ padding: '1rem 1.5rem' }}>
                        <LanguageSelector />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;