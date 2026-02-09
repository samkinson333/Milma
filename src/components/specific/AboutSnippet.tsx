import classes from './AboutSnippet.module.css';
import { useTranslation } from 'react-i18next';

const AboutSnippet = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.imageContent}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrV3ox0elTfuZ_8pEwmNc4rRTxv9JtvnMO6A&s"
                        alt="Kerala Farm"
                        className={classes.img}
                    />
                </div>
                <div className={classes.textContent}>
                    <h3 className={classes.title}>{t('aboutSnippet.whoWeAre')}</h3>
                    <h2 className={classes.subtitle}>{t('aboutSnippet.title')}</h2>
                    <p className={classes.description}>
                        {t('aboutSnippet.description')}
                    </p>
                    <button className={classes.btn}>{t('aboutSnippet.readMore')}</button>
                </div>
            </div>
        </section>
    );
};

export default AboutSnippet;
