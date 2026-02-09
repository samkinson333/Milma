import HeroSection from '../components/specific/Hero3D/HeroSection';
import AboutSnippet from '../components/specific/AboutSnippet';
import ServicesSection from '../components/specific/ServicesSection';
import CurrentEvents from '../components/specific/CurrentEvents';
import NewsSection from '../components/specific/NewsSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSnippet />
            <ServicesSection />
            <CurrentEvents />
            <NewsSection />
        </div>
    );
};

export default HomePage;
