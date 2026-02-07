import HeroSection from '../components/specific/Hero3D/HeroSection';
import FeatureCards from '../components/specific/FeatureCards';
import AboutSnippet from '../components/specific/AboutSnippet';
import ServicesSection from '../components/specific/ServicesSection';
import NewsSection from '../components/specific/NewsSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <NewsSection />
            <AboutSnippet />
            <FeatureCards />
            <ServicesSection />
        </div>
    );
};

export default HomePage;
