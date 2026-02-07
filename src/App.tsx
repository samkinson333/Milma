import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminHomePage from './pages/admin/AdminHomePage';
import AdminAboutUs from './pages/admin/AdminAboutUs';
import AdminServices from './pages/admin/AdminServices';
import AdminNews from './pages/admin/AdminNews';
import AdminTenders from './pages/admin/AdminTenders';
import AdminGallery from './pages/admin/AdminGallery';
import AdminFeedback from './pages/admin/AdminFeedback';
import AdminContacts from './pages/admin/AdminContacts';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSecurity from './pages/admin/AdminSecurity';
import AdminSettings from './pages/admin/AdminSettings';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/specific/CartDrawer';
import Toast from './components/common/Toast';

function App() {
    return (
        <Router>
            <CartProvider>
                <CartDrawer />
                <Toast />
                <Routes>
                    {/* Public Routes with Public Layout */}
                    <Route element={<Layout><Outlet /></Layout>}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>

                    {/* Admin Routes with Admin Layout */}
                    <Route path="/admin" element={
                        <AdminLayout>
                            <Outlet />
                        </AdminLayout>
                    }>
                        <Route index element={<AdminDashboard />} />
                        <Route path="home" element={<AdminHomePage />} />
                        <Route path="about" element={<AdminAboutUs />} />
                        <Route path="products" element={<AdminProducts />} />
                        <Route path="services" element={<AdminServices />} />
                        <Route path="news" element={<AdminNews />} />
                        <Route path="tenders" element={<AdminTenders />} />
                        <Route path="gallery" element={<AdminGallery />} />
                        <Route path="feedback" element={<AdminFeedback />} />
                        <Route path="contacts" element={<AdminContacts />} />
                        <Route path="users" element={<AdminUsers />} />
                        <Route path="security" element={<AdminSecurity />} />
                        <Route path="settings" element={<AdminSettings />} />
                    </Route>
                </Routes>
            </CartProvider>
        </Router>
    )
}

export default App;
