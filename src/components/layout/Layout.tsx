import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Lenis from 'lenis';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
