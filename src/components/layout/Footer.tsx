import classes from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={classes.footer}>
            <img src="/assets/services/milma_cow.png" alt="" className={classes.footerImage} />
            <div className={classes.content}>
                <div className={classes.column}>
                    <h3>{t('hero.title')}</h3>
                    <p>{t('footer.brandDescription')}</p>
                </div>
                <div className={classes.column}>
                    <h4>{t('footer.shop.title')}</h4>
                    <a href="#">{t('footer.shop.milk')}</a>
                    <a href="#">{t('footer.shop.ghee')}</a>
                    <a href="#">{t('footer.shop.iceCream')}</a>
                </div>
                <div className={classes.column}>
                    <h4>{t('footer.company.title')}</h4>
                    <a href="#">{t('footer.company.about')}</a>
                    <a href="#">{t('footer.company.leadership')}</a>
                    <a href="#">{t('footer.company.careers')}</a>
                </div>
                <div className={classes.column}>
                    <h4>{t('footer.support.title')}</h4>
                    <a href="#">{t('footer.support.contact')}</a>
                    <a href="#">{t('footer.support.faq')}</a>
                </div>
            </div>
            <div className={classes.bottom}>
                <p>{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
