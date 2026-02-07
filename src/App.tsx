import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/specific/CartDrawer';
import Toast from './components/common/Toast';

function App() {
    return (
        <Router>
            <CartProvider>
                <Layout>
                    <CartDrawer />
                    <Toast />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            </CartProvider>
        </Router>
    )
}

export default App;
