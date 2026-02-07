import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { toggleCart, itemsCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                // Home page logic: Blur only after the 3D Hero/Scroll section
                const heroThreshold = window.innerHeight * 7.8;
                setIsScrolled(window.scrollY > heroThreshold);
            } else {
                // Other pages: Always blurred/scrolled style for visibility
                setIsScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Run immediately to set initial state based on current page/scroll
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className={`${classes.header} ${isScrolled ? classes.scrolled : ''}`}>
                <div className={classes.logoContainer}>
                    <Link to="/" className={classes.logo}>
                        <img src="/logo.png" alt="Milma Logo" className={classes.logoImage} />
                    </Link>
                </div>

                <nav className={classes.nav}>
                    <Link to="/" className={classes.navLink}>Home</Link>
                    <Link to="/products" className={classes.navLink}>Products</Link>
                    <Link to="/about" className={classes.navLink}>Our Story</Link>
                    <Link to="/insights" className={classes.navLink}>Insights</Link>
                    <Link to="/career" className={classes.navLink}>Career</Link>
                    <Link to="/recruitment" className={classes.navLink}>Recruitment</Link>
                    <Link to="/contact" className={classes.navLink}>Contact</Link>
                </nav>

                <div className={classes.actions}>
                    <button aria-label="Search" className={classes.iconBtn}><Search size={20} /></button>
                    <button aria-label="Cart" className={classes.iconBtn} onClick={toggleCart}>
                        <ShoppingBag size={20} />
                        {itemsCount > 0 && <span className={classes.cartCount}>{itemsCount}</span>}
                    </button>
                    <button
                        aria-label="Menu"
                        className={classes.menuBtn}
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`${classes.mobileMenu} ${isMobileMenuOpen ? classes.mobileMenuOpen : ''}`}>
                <nav className={classes.mobileNav}>
                    <Link to="/" className={classes.mobileNavLink}>Home</Link>
                    <Link to="/products" className={classes.mobileNavLink}>Products</Link>
                    <Link to="/about" className={classes.mobileNavLink}>Our Story</Link>
                    <Link to="/insights" className={classes.mobileNavLink}>Insights</Link>
                    <Link to="/career" className={classes.mobileNavLink}>Career</Link>
                    <Link to="/recruitment" className={classes.mobileNavLink}>Recruitment</Link>
                    <Link to="/contact" className={classes.mobileNavLink}>Contact</Link>
                </nav>
            </div>
        </>
    );
};

export default Header;
