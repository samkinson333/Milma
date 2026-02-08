import { Truck, ShieldCheck, Heart } from 'lucide-react';
import classes from './FeatureCards.module.css';
import { useTranslation } from 'react-i18next';

const FeatureCards = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Truck size={40} />,
            title: t('features.freshness.title'),
            desc: t('features.freshness.desc')
        },
        {
            icon: <ShieldCheck size={40} />,
            title: t('features.quality.title'),
            desc: t('features.quality.desc')
        },
        {
            icon: <Heart size={40} />,
            title: t('features.farmer.title'),
            desc: t('features.farmer.desc')
        }
    ];

    return (
        <section className={classes.section}>
            <div className={classes.grid}>
                {features.map((f, i) => (
                    <div key={i} className={classes.card}>
                        <div className={classes.icon}>{f.icon}</div>
                        <h3 className={classes.title}>{f.title}</h3>
                        <p className={classes.desc}>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureCards;
