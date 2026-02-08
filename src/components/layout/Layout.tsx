import { ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Lenis from 'lenis';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const lenisRef = useRef<Lenis | null>(null);
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        // Prevent browser from trying to resume scroll position
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        if (hash && lenisRef.current) {
            const target = document.querySelector(hash);
            if (target) {
                lenisRef.current.scrollTo(target as HTMLElement, { immediate: false, offset: -150 }); // Offset for header
                return;
            }
        }

        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
