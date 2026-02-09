import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import Products from './pages/Products';

import About from './pages/about/About';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import Contact from './pages/contact/Contact';
import Insights from './pages/insights/Insights';
import Tenders from './pages/insights/Tenders';
import Downloads from './pages/insights/Downloads';
import OngoingProjects from './pages/insights/OngoingProjects';
import UpcomingProjects from './pages/insights/UpcomingProjects';
import Career from './pages/career/Career';
import Recruitment from './pages/recruitment/Recruitment';
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

import Services from './pages/Services';
import FarmersAndCoops from './pages/services/FarmersAndCoops';
import SocietyLevel from './pages/services/SocietyLevel';
import DealersLevel from './pages/services/DealersLevel';
import ConsumerLevel from './pages/services/ConsumerLevel';

import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import CartDrawer from './components/specific/CartDrawer';
import Toast from './components/common/Toast';
import React, { Suspense } from 'react';

const NoticeBoardPage = React.lazy(() => import('./pages/notices/NoticeBoardPage'));

function App() {
    return (
        <Router>
            <ThemeProvider>
                <CartProvider>
                    <CartDrawer />
                    <Toast />
                    <Routes>
                        {/* Public Routes with Public Layout */}
                        <Route element={<Layout><Outlet /></Layout>}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/product/:id" element={<ProductDetails />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/insights" element={<Insights />} />
                            <Route path="/insights/tenders" element={<Tenders />} />
                            <Route path="/insights/downloads" element={<Downloads />} />
                            <Route path="/insights/ongoing-projects" element={<OngoingProjects />} />
                            <Route path="/insights/upcoming-projects" element={<UpcomingProjects />} />
                            <Route path="/career" element={<Career />} />
                            <Route path="/recruitment" element={<Recruitment />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route
                                path="/notices"
                                element={
                                    <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
                                        <NoticeBoardPage />
                                    </Suspense>
                                }
                            />

                            {/* Services Routes */}
                            <Route path="/services" element={<Services />} />
                            <Route path="/services/farmers-coops" element={<FarmersAndCoops />} />
                            <Route path="/services/society-level" element={<SocietyLevel />} />
                            <Route path="/services/dealers-level" element={<DealersLevel />} />
                            <Route path="/services/consumer-level" element={<ConsumerLevel />} />
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
                </CartProvider >
            </ThemeProvider>
        </Router >
    )
}

export default App;
