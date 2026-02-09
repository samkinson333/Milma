import classes from './AboutSnippet.module.css';
import { useTranslation } from 'react-i18next';

const AboutSnippet = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.imageContent}>
                    <img
                        src="https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/afaqs/media/post_attachments/8e80a9877a51e099a91e975d4638127210f2e61a255e8975e3b28af47f9cee71.jpeg"
                        alt="Milma Historical"
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
