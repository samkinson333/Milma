import { Truck, ShieldCheck, Heart } from 'lucide-react';
import classes from './FeatureCards.module.css';

const features = [
    {
        icon: <Truck size={40} />,
        title: "Daily Freshness",
        desc: "Direct from farms to your local store within 24 hours."
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "Quality Assured",
        desc: "Rigorous testing at 3 levels to ensure 100% purity."
    },
    {
        icon: <Heart size={40} />,
        title: "Farmer First",
        desc: "Supporting over 900,000 dairy farmers across Kerala."
    }
];

const FeatureCards = () => {
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
