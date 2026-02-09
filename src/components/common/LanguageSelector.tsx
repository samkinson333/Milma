import { useTranslation } from 'react-i18next';
import classes from './LanguageSelector.module.css';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const isMalayalam = i18n.language?.startsWith('ml');

    const toggleLanguage = () => {
        const currentLang = i18n.language?.startsWith('ml') ? 'ml' : 'en';
        const nextLang = currentLang === 'en' ? 'ml' : 'en';
        i18n.changeLanguage(nextLang);
    };

    return (
        <button
            className={classes.langBtn}
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            title={isMalayalam ? 'Switch to English' : 'Switch to Malayalam'}
        >
            <Globe size={18} />
        </button>
    );
};

export default LanguageSelector;
